import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

interface LeadData {
  name: string
  phone: string
  email?: string
  concern?: string
  preferredDate?: string
  source?: string
  formName?: string
  consent?: boolean
}

/**
 * Generate comprehensive form data string with all user details (for system notes)
 */
function generateFormDataString(leadData: LeadData): string {
  const details = []

  // Add all available fields with their values
  if (leadData.name) details.push(`Name: ${leadData.name}`)
  if (leadData.phone) details.push(`Phone: ${leadData.phone}`)
  if (leadData.email) details.push(`Email: ${leadData.email}`)
  if (leadData.concern) details.push(`Hair Concern: ${leadData.concern}`)
  if (leadData.preferredDate) details.push(`Preferred Date: ${leadData.preferredDate}`)
  if (leadData.source) details.push(`Source: ${leadData.source}`)
  
  // Always include consent status
  details.push(`Consent: ${leadData.consent ? 'Yes' : 'No'}`)

  // Join all details with " | " separator
  return details.join(' | ')
}

/**
 * Save lead to database using Prisma
 */
async function saveToDatabase(leadData: LeadData) {
  try {
    // Determine form-specific defaults
    const formName = leadData.formName || 'Website leads'
    const defaultSource = 'Skinology'

    const lead = await prisma.lead.create({
      data: {
        name: leadData.name,
        phone: leadData.phone,
        email: leadData.email || '',
        procedure: leadData.concern || '',
        message: leadData.concern || '',
        preferredDate: leadData.preferredDate || '',
        consent: leadData.consent || false,
        source: leadData.source || defaultSource,
        formName: formName,
        status: 'NEW',
        telecrmSynced: false
      }
    })
    return lead
  } catch (error) {
    console.error('Database save error:', error)
    throw new Error('Failed to save lead to database')
  }
}

/**
 * Update lead with TeleCRM sync status
 */
async function updateLeadTelecrmStatus(leadId: string, telecrmId?: string, error?: string) {
  try {
    await prisma.lead.update({
      where: { id: leadId },
      data: {
        telecrmSynced: !error,
        telecrmId: telecrmId || null,
        syncedAt: new Date(),
        error: error || null,
        status: error ? 'ERROR' : 'NEW'
      }
    })
  } catch (error) {
    console.error('Update lead status error:', error)
  }
}

/**
 * Send lead data to TeleCRM
 */
async function sendToTeleCRM(leadData: LeadData) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  const endpoint = process.env.TELECRM_API_URL

  if (!endpoint) {
    throw new Error('TELECRM_API_URL environment variable is not set')
  }

  try {
    // Generate comprehensive form data string with all user details
    const formDataString = generateFormDataString(leadData)

    // Get the form name and set appropriate defaults
    const formName = leadData.formName || 'Website leads'
    const defaultSource = 'Skinology'
    const pageName = leadData.source || defaultSource

    // Prepare the TeleCRM payload
    const telecrmPayload = {
      fields: {
        Id: "",
        name: leadData.name,
        email: leadData.email || "",
        phone: leadData.phone.replace(/\D/g, ''),
        city_1: "",
        preferredtime: "",
        preferreddate: leadData.preferredDate || "",
        message: leadData.concern || "",
        select_the_procedure: leadData.concern || "",
        Country: "",
        LeadID: "",
        "CreatedOn": new Date().toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        "Lead Stage": "",
        "Lead Status": "new",
        "Lead Request Type": "consultation",
        "PageName": pageName,
        "State": "",
        "Age": "",
        "FormName": formName
      },
      actions: [
        {
          "type": "SYSTEM_NOTE",
          "text": `Form Name: ${formName}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Complete Form Data: ${formDataString}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Lead Source: ${leadData.source || defaultSource}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Hair Concern: ${leadData.concern || 'Not specified'}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Preferred Date: ${leadData.preferredDate || 'Not specified'}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Consent Given: ${leadData.consent ? 'Yes' : 'No'}`
        }
      ]
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TELECRM_API_KEY}`,
        'X-Client-ID': 'nextjs-website-integration',
        'Accept': 'application/json',
      },
      body: JSON.stringify(telecrmPayload),
      signal: controller.signal,
    })

    if (response.status === 204) {
      clearTimeout(timeout)
      return {
        status: 'success',
        message: 'Lead created (204 No Content)',
        synced: true
      }
    }

    const responseText = await response.text()

    if (
      responseText.trim().startsWith('<!DOCTYPE') ||
      responseText.trim().startsWith('<html') ||
      responseText.includes('<!DOCTYPE html>')
    ) {
      console.warn(`HTML response from ${endpoint}`, {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        bodyPreview: responseText.slice(0, 200),
      })
      throw new Error('TeleCRM returned HTML response instead of JSON')
    }

    try {
      const data = responseText ? JSON.parse(responseText) : {}
      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status} from ${endpoint}`)
      }
      clearTimeout(timeout)
      return {
        ...data,
        synced: true
      }
    } catch {
      throw new Error(`Invalid JSON from ${endpoint}: ${responseText.slice(0, 100)}...`)
    }
  } catch (error) {
    clearTimeout(timeout)
    throw error instanceof Error ? error : new Error(String(error))
  }
}

/**
 * Map database status to frontend status
 */
function mapDbStatusToFrontend(dbStatus: string): 'new' | 'contacted' | 'scheduled' | 'converted' | 'lost' {
  const statusMap: { [key: string]: any } = {
    'NEW': 'new',
    'CONTACTED': 'contacted',
    'SCHEDULED': 'scheduled',
    'CONVERTED': 'converted',
    'LOST': 'lost',
    'ERROR': 'new'
  }
  
  return statusMap[dbStatus] || 'new'
}

/**
 * Handle GET request - Fetch all leads
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const search = searchParams.get('search') || ''
    const status = searchParams.get('status') || ''
    const treatment = searchParams.get('treatment') || ''
    const formName = searchParams.get('formName') || ''

    const skip = (page - 1) * limit

    const where: any = {}

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search } },
        { email: { contains: search, mode: 'insensitive' } },
        { procedure: { contains: search, mode: 'insensitive' } },
        { message: { contains: search, mode: 'insensitive' } }
      ]
    }

    if (status) {
      where.status = status
    }

    if (treatment) {
      where.procedure = { contains: treatment, mode: 'insensitive' }
    }

    if (formName) {
      where.formName = formName
    }

    const [leads, totalCount] = await Promise.all([
      prisma.lead.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          phone: true,
          email: true,
          procedure: true,
          message: true,
          city: true,
          age: true,
          consent: true,
          source: true,
          formName: true,
          status: true,
          telecrmSynced: true,
          telecrmId: true,
          createdAt: true,
          updatedAt: true
        }
      }),
      prisma.lead.count({ where })
    ])

    const transformedLeads = leads.map(lead => ({
      id: lead.id,
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      treatment: lead.procedure,
      procedure: lead.procedure,
      message: lead.message,
      city: lead.city,
      age: lead.age,
      consent: lead.consent,
      source: lead.source,
      formName: lead.formName,
      status: mapDbStatusToFrontend(lead.status),
      telecrmSynced: lead.telecrmSynced,
      telecrmId: lead.telecrmId,
      createdAt: lead.createdAt.toISOString(),
      updatedAt: lead.updatedAt.toISOString()
    }))

    return NextResponse.json({
      leads: transformedLeads,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
      },
      filters: {
        search,
        status,
        treatment,
        formName
      }
    })

  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

/**
 * Handle POST request for skin treatment form
 */
export async function POST(request: Request) {
  let data: LeadData
  let savedLead: any = null

  try {
    data = await request.json()

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone' },
        { status: 400 }
      )
    }

    // Set form type to skin treatment
    const formName = 'Website leads'

    // Step 1: Save to database first
    savedLead = await saveToDatabase(data)
    console.log('Skin lead saved to database:', { id: savedLead.id, formName })

    // Step 2: Send to TeleCRM
    let telecrmResponse = null
    let telecrmError = null

    try {
      telecrmResponse = await sendToTeleCRM(data)
      console.log('Skin lead sent to TeleCRM successfully:', { formName })

      // Update database with TeleCRM sync status
      if (savedLead) {
        await updateLeadTelecrmStatus(savedLead.id, telecrmResponse?.id)
      }
    } catch (error) {
      telecrmError = error
      console.error('TeleCRM submission failed:', { formName, error: error instanceof Error ? error.message : String(error) })
      
      if (savedLead) {
        await updateLeadTelecrmStatus(
          savedLead.id,
          undefined,
          error instanceof Error ? error.message : String(error)
        )
      }
    }

    return NextResponse.json(
      {
        success: true,
        databaseId: savedLead.id,
        telecrmSynced: !telecrmError,
        telecrmResponse: telecrmResponse,
        telecrmError: telecrmError ? (telecrmError instanceof Error ? telecrmError.message : String(telecrmError)) : null,
        timestamp: new Date().toISOString(),
        formName: formName,
        message: telecrmError
          ? 'Lead saved to database but TeleCRM sync failed'
          : 'Lead saved successfully and synced with TeleCRM'
      },
      { status: 201 }
    )
  } catch (error) {
    const formName = 'Website leads'

    console.error('Skin lead submission error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      formName: formName,
      databaseSaved: !!savedLead
    })

    // If database save failed but we have data, try to save with error status
    if (!savedLead && data) {
      try {
        const defaultSource = 'Skinology'

        const errorLead = await prisma.lead.create({
          data: {
            name: data.name,
            phone: data.phone,
            email: data.email || '',
            procedure: data.concern || '',
            message: data.concern || '',
            source: data.source || defaultSource,
            formName: formName,
            status: 'ERROR',
            error: error instanceof Error ? error.message : 'Unknown error',
            telecrmSynced: false
          }
        })
        console.log('Error skin lead saved to database:', errorLead.id)
      } catch (dbError) {
        console.error('Failed to save error skin lead to database:', dbError)
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process skin lead',
        details: error instanceof Error ? error.message : 'Unknown error',
        databaseSaved: !!savedLead,
        referenceId: `ERR-${Date.now()}`,
        formName: formName
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}