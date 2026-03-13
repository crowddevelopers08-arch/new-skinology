"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import SkinPopupForm from "./skinpopup";

const benefits = [
  "10+ Years of Experience",
  "10,000+ Happy Patients",
  "97% Success Rate",
];

const HeroSection = () => {
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
      <section
        id="hero"
        className="relative flex items-center pt-34 max-[470px]:pt-26 pb-16 max-[470px]:pb-10 overflow-hidden"
        style={{ "--primary": primaryColor } as React.CSSProperties}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-amber-50" />
        
        {/* Decorative Elements with primary color */}
        <div className="absolute top-20 right-0 w-96 h-96" style={{ backgroundColor: `${primaryColor}10`, borderRadius: '50%', filter: 'blur(3rem)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80" style={{ backgroundColor: `${primaryColor}08`, borderRadius: '50%', filter: 'blur(3rem)' }} />

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <span 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <span 
                    className="text-sm font-medium"
                    style={{ color: primaryColor }}
                  >
                    Bangalore's Premier Hair Clinic
                  </span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 leading-tight">
                  Trusted Clinic for{" "}
                  <span style={{ color: primaryColor }}>Hair Restoration</span> & Hair Fall Treatment
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                  Expert solutions for hair loss, backed by 10+ years of experience and 10,000+ successful patient outcomes.
                </p>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm md:text-base text-gray-700"
                  >
                    <CheckCircle 
                      className="w-5 h-5" 
                      style={{ color: primaryColor }}
                    />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="lg:mt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    onClick={openBookingForm}
                    style={{ backgroundColor: primaryColor }}
                    className="group text-white hover:opacity-90 transition-opacity text-base h-12 px-6 sm:px-8 sm:h-14 sm:text-lg cursor-pointer"
                  >
                    Book Your Consultation Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a href="#videos">
                  <Button 
                    variant="outline"
                    style={{ borderColor: primaryColor, color: primaryColor }}
                    className="hover:bg-orange-50 text-base h-12 px-6 sm:px-8 sm:h-14 sm:text-lg border-2 cursor-pointer"
                  >
                    View Success Stories
                  </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Image Column - Vertically centered */}
            <div className="relative flex items-center justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl">
                <img
                  src="https://ik.imagekit.io/xivdiehvf/public/hero.jpg"
                  alt="Skinology Clinic - Modern Hair Treatment Facility in Bangalore"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                {/* Overlay Card */}
           <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
  <div className="flex items-center gap-4">
    <div className="flex -space-x-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center"
          style={{ backgroundColor: `${primaryColor}20` }}
        >
          {i === 4 ? (
            <span 
              className="text-xs font-semibold"
              style={{ color: primaryColor }}
            >
              +
            </span>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-4 h-4"
              style={{ color: primaryColor }}
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      ))}
    </div>
    <div>
      <p className="font-semibold text-gray-900">10,000+ Patients</p>
      <p className="text-sm text-gray-600">Trust Skinology</p>
    </div>
  </div>
</div>
              </div>

              {/* Floating Badge */}
              <div 
                className="absolute -top-4 -right-4 text-white rounded-full p-4 shadow-lg hidden md:block animate-bounce"
                style={{ backgroundColor: primaryColor }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-xs">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText="Book Your Consultation Now"
          title="Book Your Hair Consultation"
          subtitle="Fill the form below and our hair expert will contact you shortly"
          onClose={closeBookingForm}
        />
      )}
    </>
  );
};

export default HeroSection;