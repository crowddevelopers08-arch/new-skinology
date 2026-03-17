// app/thank-you/page.tsx
"use client";

import { useEffect } from "react";
import Script from "next/script";
import SkinThankHeader from "@/components/skinthankheader";
import { CheckCircle, Phone, Calendar, Clock, Users } from "lucide-react";

export default function ThankYouPage() {
  const primaryColor = "#ff8501";

  // Report conversion on page load
  useEffect(() => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // Method 1: Direct conversion tracking
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11413326538/B9ToCNnjk_cYEMqVpsIq',
      });
      
      // Method 2: Using the global function
      if ((window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion();
      }
      
      // Method 3: Additional conversion tag with value
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11413326538/bGYSCNnvld8bEMqVpsIq',
        'value': 1.0,
        'currency': 'INR'
      });
      
      // Method 4: Submit lead form Thank you page conversion page
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11413326538/AQ0nCI_6--8bEMqVpsIq',
        'value': 1.0,
        'currency': 'INR'
      });

      // Method 5: Submit lead form 17-03-2026 conversion page
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11413326538/tZPZCLKfkoocEMqVpsIq',
        'value': 1.0,
        'currency': 'INR'
      });
    }
  }, []);

  // Function to handle conversion tracking for button clicks
  const handleConversionClick = (url?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const callback = function () {
        if (typeof url !== 'undefined' && url) {
          window.location.href = url;
        }
      };
      
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11413326538/B9ToCNnjk_cYEMqVpsIq',
        'event_callback': callback
      });
      
      // Also trigger the value-based conversion
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11413326538/bGYSCNnvld8bEMqVpsIq',
        'value': 1.0,
        'currency': 'INR',
        'event_callback': callback
      });
      
      // Trigger the new conversion tag
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11413326538/AQ0nCI_6--8bEMqVpsIq',
        'value': 1.0,
        'currency': 'INR',
        'event_callback': callback
      });

      // Submit lead form 17-03-2026 conversion page
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11413326538/tZPZCLKfkoocEMqVpsIq',
        'value': 1.0,
        'currency': 'INR',
        'event_callback': callback
      });

      if (!url) return false;
    }
    return false;
  };

  return (
    <>
      {/* Add conversion tracking script */}
      <Script
        id="conversion-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/B9ToCNnjk_cYEMqVpsIq',
                'event_callback': callback
              });
              
              // Additional conversion with value
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/bGYSCNnvld8bEMqVpsIq',
                'value': 1.0,
                'currency': 'INR',
                'event_callback': callback
              });
              
              // New conversion tag for Thank you page
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/AQ0nCI_6--8bEMqVpsIq',
                'value': 1.0,
                'currency': 'INR',
                'event_callback': callback
              });

              // Submit lead form 17-03-2026 conversion page
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/tZPZCLKfkoocEMqVpsIq',
                'value': 1.0,
                'currency': 'INR',
                'event_callback': callback
              });

              return false;
            }
            
            // Direct conversion tracking for page load
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/B9ToCNnjk_cYEMqVpsIq'
              });
              
              // Event snippet for Thank you page conversion page
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/bGYSCNnvld8bEMqVpsIq',
                'value': 1.0,
                'currency': 'INR'
              });
              
              // Event snippet for Submit lead form Thank you page conversion page
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/AQ0nCI_6--8bEMqVpsIq',
                'value': 1.0,
                'currency': 'INR'
              });

              // Event snippet for Submit lead form 17-03-2026 conversion page
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/tZPZCLKfkoocEMqVpsIq',
                'value': 1.0,
                'currency': 'INR'
              });
            }
          `,
        }}
      />

      {/* Alternative conversion tracking script */}
      <Script
        id="conversion-direct"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Event snippet for Submit lead form conversion page
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/B9ToCNnjk_cYEMqVpsIq'
              });
              
              // Event snippet for Thank you page conversion page
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/bGYSCNnvld8bEMqVpsIq',
                'value': 1.0,
                'currency': 'INR'
              });
              
              // Event snippet for Submit lead form Thank you page conversion page
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/AQ0nCI_6--8bEMqVpsIq',
                'value': 1.0,
                'currency': 'INR'
              });

              // Event snippet for Submit lead form 17-03-2026 conversion page
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/tZPZCLKfkoocEMqVpsIq',
                'value': 1.0,
                'currency': 'INR'
              });
            }
          `,
        }}
      />

      {/* Direct inline script for the specific conversion tag */}
      <Script
        id="conversion-value"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Event snippet for Thank you page conversion page -->
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/bGYSCNnvld8bEMqVpsIq',
                'value': 1.0,
                'currency': 'INR'
              });
            }
          `,
        }}
      />
      
      {/* Event snippet for Submit lead form 17-03-2026 conversion page */}
      <Script
        id="conversion-submit-lead-17032026"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/tZPZCLKfkoocEMqVpsIq',
                'value': 1.0,
                'currency': 'INR'
              });
            }
          `,
        }}
      />

      {/* Additional script for the new conversion tag */}
      <Script
        id="conversion-thankyou-page"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Event snippet for Submit lead form Thank you page conversion page -->
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': 'AW-11413326538/AQ0nCI_6--8bEMqVpsIq',
                'value': 1.0,
                'currency': 'INR'
              });
            }
          `,
        }}
      />
      
      <SkinThankHeader />
      <main className="min-h-screen mt-20 bg-gradient-to-b from-white to-orange-50 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden">
            {/* Decorative Header */}
            <div className="relative h-32 md:h-40" style={{ backgroundColor: primaryColor }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" style={{ color: primaryColor }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-12">
              {/* Success Message */}
              <div className="text-center mb-8 md:mb-10 lg:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                  Thank You for Choosing{" "}
                  <span style={{ color: primaryColor }}>Skinology!</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto">
                  Your consultation request has been received successfully
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 mx-auto">
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse" 
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  <span className="text-xs sm:text-sm font-medium" style={{ color: primaryColor }}>
                    One of our experts will contact you within 24 hours
                  </span>
                </div>
              </div>

              {/* Next Steps */}
              <div className="mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6 md:mb-8">
                  Here&apos;s What Happens{" "}
                  <span style={{ color: primaryColor }}>Next</span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: primaryColor }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                          Expert Consultation Call
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          Our hair specialist will call you to understand your concerns and answer all your questions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: primaryColor }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                          Clinic Appointment
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          Schedule an in-person consultation with Dr. Sushma at our Bangalore clinic.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Users className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: primaryColor }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                          Personalized Treatment Plan
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          Receive a customized hair restoration plan based on your specific needs and goals.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: primaryColor }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                          Begin Your Transformation
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          Start your journey to healthier, fuller hair with our expert guidance and support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mb-8 md:mb-10">
                <div className="p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl" style={{ backgroundColor: `${primaryColor}08` }}>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-center">
                    Need Immediate Assistance?
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                    <a 
                      href="tel:+919900010044"
                      onClick={() => handleConversionClick()}
                      className="px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 flex-1 sm:flex-none"
                      style={{ 
                        backgroundColor: primaryColor,
                        color: 'white'
                      }}
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Call Now: +91 99000 10044</span>
                    </a>
                    <a 
                      href="/"
                      onClick={() => handleConversionClick("/")}
                      className="px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 border hover:shadow-lg flex items-center justify-center gap-2 flex-1 sm:flex-none"
                      style={{ 
                        borderColor: primaryColor,
                        color: primaryColor
                      }}
                    >
                      <span className="text-sm sm:text-base">← Back to Home</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="border-t border-gray-200 pt-6 md:pt-8">
                <h3 className="text-center text-gray-700 font-medium mb-4 md:mb-6 text-base sm:text-lg">
                  Why Patients Trust Skinology
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { value: "10+", label: "Years Experience" },
                    { value: "10,000+", label: "Patients Treated" },
                    { value: "3,000+", label: "Transplants Done" },
                    { value: "97%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1" style={{ color: primaryColor }}>
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-6 md:mt-8">
            <p className="text-gray-600 text-xs sm:text-sm">
              © {new Date().getFullYear()} Skinology Clinic. All rights reserved.
              <br className="hidden sm:block" />
              <span className="inline-block sm:inline">
                <a 
                  href="/privacy-policy" 
                  className="hover:underline mx-1"
                  style={{ color: primaryColor }}
                >
                  Privacy Policy
                </a>
                |{" "}
                <a 
                  href="/terms" 
                  className="hover:underline mx-1"
                  style={{ color: primaryColor }}
                >
                  Terms of Service
                </a>
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}