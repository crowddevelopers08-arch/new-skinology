"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Award, Users, Cpu, Building2, CalendarCheck } from "lucide-react";
import { useState } from "react";
import SkinPopupForm from "./skinpopup";

const usps = [
  {
    icon: Stethoscope,
    title: "Dermatology-Led Expertise",
    description: "All treatments performed by Dr Sushma, MD, Dermatology & Hair Transplant Surgeon.",
  },
  {
    icon: Award,
    title: "10+ Years of Clinical Experience",
    description: "Over a decade of delivering safe, evidence-based hair restoration solutions.",
  },
  {
    icon: Users,
    title: "10,000+ Patients Treated",
    description: "A trusted clinic with thousands of successful transformations.",
  },
  {
    icon: Cpu,
    title: "Advanced Hair Transplant Technology",
    description: "Precision FUE techniques for denser, natural-looking results.",
  },
  {
    icon: Building2,
    title: "Safe & Modern Infrastructure",
    description: "Fully equipped dermatology centre with advanced hair and laser systems.",
  },
  {
    icon: CalendarCheck,
    title: "Results Focused With Follow-Ups",
    description: "Structured follow-up and continuous tracking to ensure long-term success.",
  },
];

const SkinWhyChooseSection = () => {
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
      <section className="py-16 md:py-16 max-[470px]:py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-12 max-[470px]:mb-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Why Thousands Choose <span style={{ color: primaryColor }}>Skinology</span>
            </h2>
            <p className="text-lg text-gray-600">
              Trusted dermatology expertise, advanced hair treatments, and a results-driven clinical process, all under one roof.
            </p>
          </div>

          {/* USP Grid - Responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-12 max-[470px]:mb-6">
            {usps.map((usp, index) => (
              <div
                key={usp.title}
                className="group bg-white rounded-xl border border-gray-200 p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{ 
                      backgroundColor: `${primaryColor}15`,
                      border: `1px solid ${primaryColor}30`
                    }}
                  >
                    <usp.icon 
                      className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300" 
                      style={{ color: primaryColor }}
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-heading text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 group-hover:text-orange-600 transition-colors duration-300"
                      style={{ color: 'inherit' }}
                    >
                      {usp.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {usp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={openBookingForm}
              style={{ backgroundColor: primaryColor }}
              className="group text-white hover:opacity-90 transition-opacity text-base h-11 md:h-12 px-6 md:px-8 sm:text-lg cursor-pointer"
            >
              Start Your Treatment Today
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText="Start Your Treatment Today"
          title="Start Your Hair Treatment Journey"
          subtitle="Fill the form below and our dermatology-led team will design a comprehensive treatment plan for you"
          onClose={closeBookingForm}
        />
      )}
    </>
  );
};

export default SkinWhyChooseSection;