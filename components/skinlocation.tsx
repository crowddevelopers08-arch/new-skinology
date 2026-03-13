"use client";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Navigation, Mail, MessageCircle } from "lucide-react";

const SkinLocationSection = () => {
  const primaryColor = "#ff8501";

  return (
    <section id="location" className="py-16 md:py-16 max-[470px]:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-12 max-[470px]:mb-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Visit <span style={{ color: primaryColor }}>Skinology Clinic</span>, Bangalore
          </h2>
          <p className="text-lg text-gray-600">
            Located at Sadashivanagar with easy access and landmark visibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Container - Mobile first, desktop second */}
          <div className="lg:order-1 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl h-full w-full">
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7390.097288555566!2d77.5833391!3d13.0105861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1764e9267cf7%3A0x59b91ee16736df7f!2sRegency%20Orchards%20apts!5e1!3m2!1sen!2sin!4v1765607755671!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Skinology Clinic Location"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Contact Info Cards - Mobile first, desktop second */}
          <div className="lg:order-2">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Address Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-lg flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${primaryColor}15`,
                      border: `1px solid ${primaryColor}30`
                    }}
                  >
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" style={{ color: primaryColor }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                      Clinic Address
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                     No GA, ground floor,<br /> Regency Orchard Apts,<br />
                      Ramana Maharshi road Sadashivanagar,<br />
                     Armane nagar Bangalore 560080,<br />
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-lg flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${primaryColor}15`,
                      border: `1px solid ${primaryColor}30`
                    }}
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" style={{ color: primaryColor }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                      Contact Us
                    </h3>
                    <div className="space-y-1 md:space-y-2">
                      <div className="flex items-center gap-2 text-gray-600 text-xs md:text-sm lg:text-base">
                        <Phone className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Phone: <strong>+91 9900010044</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-xs md:text-sm lg:text-base">
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                        <span>WhatsApp: <strong>+91 99000 10044</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-xs md:text-sm lg:text-base">
                        <Mail className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Email: <strong>skinologycentre@gmail.com</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Mobile stacked, desktop side-by-side */}
              <div className="pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {/* Call Now Button */}
                  <button 
                    className="px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                    style={{ 
                      backgroundColor: primaryColor,
                      color: 'white'
                    }}
                    onClick={() => window.open('tel:+919900010044', '_self')}
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Call Now</span>
                  </button>

                  {/* Get Directions Button */}
                  <button 
                    className="px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 border hover:shadow-lg flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                    style={{ 
                      borderColor: primaryColor,
                      color: primaryColor
                    }}
                    onClick={() => window.open('https://maps.app.goo.gl/ZkfisJSiANAtUZpC6')}
                  >
                    <Navigation className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinLocationSection;