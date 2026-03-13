import SkinThankHeader from "@/components/skinthankheader";

// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  const primaryColor = "#ff8501";

  return (
    <>
    <SkinThankHeader />
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: primaryColor }}
            >
              <span className="text-white font-bold text-lg sm:text-xl">S</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words">
              Skinology Clinic
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Privacy <span style={{ color: primaryColor }}>Policy</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Last updated: {new Date().toLocaleDateString('en-IN', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="space-y-6 sm:space-y-8">
            {/* Introduction */}
            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2" style={{ borderColor: primaryColor }}>
                Introduction
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                At <span style={{ color: primaryColor, fontWeight: '600' }}>Skinology Clinic</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2" style={{ borderColor: primaryColor }}>
                Information We Collect
              </h2>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Personal Information:</h3>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>Full name and contact details (email, phone number)</li>
                  <li>Demographic information (age, gender)</li>
                  <li>Medical history and health information</li>
                  <li>Appointment details and treatment preferences</li>
                  <li>Payment information for services</li>
                </ul>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 sm:mt-4">Technical Information:</h3>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2" style={{ borderColor: primaryColor }}>
                How We Use Your Information
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "To provide and manage medical services and appointments",
                  "To communicate about appointments, follow-ups, and treatment plans",
                  "To process payments and maintain financial records",
                  "To improve our website and services through analytics",
                  "To comply with legal and regulatory requirements"
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-orange-50">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: primaryColor }}>
                      <span className="text-white text-xs sm:text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base flex-1">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Protection */}
            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2" style={{ borderColor: primaryColor }}>
                Data Protection & Security
              </h2>
              <div className="space-y-3">
                {[
                  {
                    title: "Encryption & Security Measures",
                    description: "We implement industry-standard security measures including SSL encryption, secure servers, and restricted access controls to protect your personal information from unauthorized access, disclosure, alteration, or destruction."
                  },
                  {
                    title: "Employee Training",
                    description: "Our staff receives regular training on data protection protocols and confidentiality obligations to ensure your information is handled with the utmost care."
                  },
                  {
                    title: "Regular Audits",
                    description: "We conduct regular security audits and assessments to maintain and improve our data protection measures."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 sm:p-5 rounded-lg sm:rounded-xl border border-gray-200 bg-white">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Your Rights */}
            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2" style={{ borderColor: primaryColor }}>
                Your Rights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    title: "Access & Correction",
                    description: "Request access to your personal data and correct any inaccuracies"
                  },
                  {
                    title: "Data Deletion",
                    description: "Request deletion of your personal information where applicable"
                  },
                  {
                    title: "Opt-Out",
                    description: "Opt-out of marketing communications at any time"
                  },
                  {
                    title: "Data Portability",
                    description: "Request a copy of your data in a structured format"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1.5 sm:mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg sm:rounded-xl" style={{ backgroundColor: `${primaryColor}10` }}>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Contact Us</h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact:
              </p>
              <div className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                <p className="text-gray-800 text-sm sm:text-base"><strong>Skinology Clinic</strong></p>
                <p className="text-gray-700 text-sm sm:text-base">Email: skinologycentre@gmail.com</p>
                <p className="text-gray-700 text-sm sm:text-base">Phone: +91 99000 10044</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Address:No GA, ground floor Regency Orchard Apts Ramana Maharshi road Sadashivanagar Armane nagar Bangalore 560080
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-lg bg-gray-50 border border-gray-200">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Changes to This Policy</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We may update this Privacy Policy from time to time. Any change will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
            style={{ 
              backgroundColor: primaryColor,
              color: 'white'
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-8 sm:h-12"></div>
    </main>
    </>
  );
}