"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import SkinPopupForm from "./skinpopup";

const highlights = [
  "Accurate diagnosis",
  "Transparent consultations",
  "Evidence-based treatment planning",
  "Minimally invasive, result-oriented procedures",
  "Continuous follow-up and patient support",
];

const SkinDoctorSection = () => {
  const primaryColor = "#ff8501";
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openBookingForm = () => {
    setIsFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <section id="about" className="py-16 md:py-16 max-[470px]:py-4 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://ik.imagekit.io/xivdiehvf/public/skinologydoc.jpg"
                    alt="Dr. Sushma - Dermatologist and Hair Transplant Surgeon"
                    className="w-full h-[500px] sm:h-[550px] md:h-[650px] object-cover"
                  />
                </div>

                {/* Experience Badge */}
                <div 
                  className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 text-white rounded-2xl p-4 md:p-6 shadow-lg"
                  style={{ backgroundColor: primaryColor }}
                >
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold font-heading">10+</p>
                    <p className="text-xs md:text-sm">Years Experience</p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div 
                  className="absolute -top-4 -left-4 w-20 h-20 md:w-24 md:h-24 rounded-full blur-2xl opacity-50"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <span 
                  className="text-sm font-medium"
                  style={{ color: primaryColor }}
                >
                  Meet the Expert
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
                Meet the Dermatologist Behind <span style={{ color: primaryColor }}>Skinology</span>
              </h2>

              <div className="space-y-1 md:space-y-2">
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900">
                  Dr. Sushma
                </h3>
                <p 
                  className="font-medium text-lg"
                  style={{ color: primaryColor }}
                >
                  MD (Dermatology, Venereology & Leprosy)
                </p>
                <p className="text-gray-600">
                  MBBS | Hair Transplant Surgeon | Cosmetologist
                </p>
              </div>

              <p className="text-gray-600 text-base md:text-lg">
                With over 10+ years of clinical experience, Dr Sushma is known for her expertise in hair restoration, aesthetic dermatology, and advanced laser procedures. She combines in-depth medical knowledge with modern technology to deliver natural-looking, long-lasting results.
              </p>

              <div className="space-y-2 md:space-y-3">
                <p className="font-semibold text-gray-900">Her approach focuses on:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle 
                        className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" 
                        style={{ color: primaryColor }}
                      />
                      <span className="text-gray-700 text-sm md:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-base md:text-lg">
                She has successfully treated <strong className="text-gray-900">10,000+ patients</strong> and performed numerous FUE hair transplants, ensuring natural density, minimal downtime, and high graft survival rates.
              </p>

              <Button 
                onClick={openBookingForm}
                style={{ backgroundColor: primaryColor }}
                className="group text-white hover:opacity-90 transition-opacity text-base h-11 md:h-12 px-6 md:px-8 sm:text-lg mt-4 cursor-pointer"
              >
                Consult with Dr. Sushma
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText="Consult with Dr. Sushma"
          title="Consult with Dr. Sushma - Hair Restoration Specialist"
          subtitle="Book a personal consultation with our lead dermatologist to discuss your hair concerns and treatment options"
          onClose={closeBookingForm}
        />
      )}
    </>
  );
};

export default SkinDoctorSection;