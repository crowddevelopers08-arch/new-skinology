"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SkinPopupForm from "./skinpopup";

export default function HairProblemsSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  const hairProblems = [
    {
      id: 1,
      title: "Male Pattern Baldness",
      image: "https://ik.imagekit.io/xivdiehvf/public/male.jpg",
      description: "Progressive hair thinning and bald spots are caused by genetics and hormonal changes.",
      cta: "Treat Male Pattern Baldness",
      serviceValue: "male-pattern-baldness"
    },
    {
      id: 2,
      title: "Receding Hairline",
      image: "https://ik.imagekit.io/xivdiehvf/public/receding.jpg",
      description: "Gradual backward movement of the hairline, commonly starting at the temples.",
      cta: "Restore Your Hairline",
      serviceValue: "receding-hairline"
    },
    {
      id: 3,
      title: "Patchy Beard / Patchy Scalp",
      image: "https://ik.imagekit.io/xivdiehvf/public/beared.jpg",
      description: "Uneven or missing hair patches due to alopecia areata or weak follicle activity.",
      cta: "Fix Patchy Hair Growth",
      serviceValue: "patchy-hair"
    },
    {
      id: 4,
      title: "Thinning Hair",
      image: "https://ik.imagekit.io/xivdiehvf/public/hairthinning.jpg",
      description: "Reduced hair density caused by stress, hormones, nutrition deficiencies, or ageing.",
      cta: "Treat Thinning Hair",
      serviceValue: "thinning-hair"
    },
    {
      id: 5,
      title: "Severe Hair Loss",
      image: "https://ik.imagekit.io/xivdiehvf/public/serve.jpg",
      description: "Rapid or chronic shedding, where clumps of hair fall out daily.",
      cta: "Stop Severe Hair Loss",
      serviceValue: "severe-hair-loss"
    },
    {
      id: 6,
      title: "Dandruff / Scalp Issues",
      image: "https://ik.imagekit.io/xivdiehvf/public/dant.jpg",
      description: "Flaking, itching, and scalp inflammation that disrupts healthy hair growth.",
      cta: "Treat Scalp Issues",
      serviceValue: "scalp-treatment"
    },
  ];

  // Update visible slides based on screen size
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const nextSlide = () => {
    const maxIndex = Math.max(0, hairProblems.length - visibleSlides);
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, hairProblems.length - visibleSlides);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Calculate slide width for smooth scrolling
  const slideWidth = 100 / Math.min(visibleSlides, hairProblems.length);

  const openBookingForm = (serviceValue = "") => {
    setSelectedService(serviceValue);
    setIsFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsFormOpen(false);
    setSelectedService("");
  };

  const handleCallClick = () => {
    window.open('tel:+919900010044', '_self');
  };

  // Function to highlight important words in descriptions
  const highlightDescription = (description) => {
    const importantWords = [
      "progressive hair thinning", "bald spots", "genetics", "hormonal changes",
      "gradual backward movement", "hairline", "temples",
      "uneven or missing hair", "alopecia areata", "weak follicle activity",
      "reduced hair density", "stress", "hormones", "nutrition deficiencies", "ageing",
      "rapid or chronic shedding", "clumps of hair",
      "flaking", "itching", "scalp inflammation", "healthy hair growth"
    ];

    let highlightedDescription = description;
    
    importantWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      highlightedDescription = highlightedDescription.replace(
        regex, 
        `<span class="font-semibold text-gray-900">${word}</span>`
      );
    });

    return { __html: highlightedDescription };
  };

  const primaryColor = "#ff8501";

  // Get the selected problem title for form customization
  const getSelectedProblemTitle = () => {
    const problem = hairProblems.find(p => p.serviceValue === selectedService);
    return problem ? problem.title : "Hair Consultation";
  };

  return (
    <>
      <section className="bg-gradient-to-b from-white to-orange-50 py-16 md:py-16 max-[470px]:py-10 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-12 max-[470px]:mb-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Hair Concerns We Treat at <span style={{ color: primaryColor }}>Skinology</span>
            </h2>
            <p className="text-lg text-gray-600">
              From early-stage thinning to advanced baldness, our treatments are designed for every type of hair loss.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative px-2 md:px-8">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 border border-gray-200 cursor-pointer"
              aria-label="Previous slide"
              style={{ left: '-10px' }}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 border border-gray-200 cursor-pointer"
              aria-label="Next slide"
              style={{ right: '-10px' }}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            {/* Carousel */}
            <div 
              ref={carouselRef}
              className="overflow-hidden"
            >
              <div 
                className="flex transition-transform duration-500 ease-out pb-[20px]"
                style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
              >
                {hairProblems.map((problem) => (
                  <div
                    key={problem.id}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${slideWidth}%` }}
                  >
                    <div 
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group"
                    >
                      {/* Fixed height for images */}
                      <div className="w-full h-48 sm:h-56 md:h-64 flex-shrink-0 overflow-hidden">
                        <Image
                          src={problem.image}
                          alt={problem.title}
                          width={400}
                          height={256}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Content section */}
                      <div className="p-5 md:p-6 flex flex-col flex-grow w-full">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                          {problem.title}
                        </h3>

                        <p 
                          className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed flex-grow"
                          dangerouslySetInnerHTML={highlightDescription(problem.description)}
                        />

                        <div className="flex flex-col space-y-3">
                          <button 
                            className="w-full border border-gray-200 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 text-base font-medium hover:border-orange-300 cursor-pointer"
                            onClick={handleCallClick}
                          >
                            Call Us Now
                          </button>
                          <button 
                            className="w-full px-6 py-4 rounded-lg font-medium transition-all duration-300 text-base hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                            style={{ backgroundColor: primaryColor, color: 'white' }}
                            onClick={() => openBookingForm(problem.serviceValue)}
                          >
                            {problem.cta}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            {hairProblems.length > visibleSlides && (
              <div className="flex justify-center mt-6 md:mt-8 space-x-2">
                {Array.from({ length: Math.max(1, hairProblems.length - visibleSlides + 1) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex 
                        ? 'w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    style={{ 
                      backgroundColor: index === currentIndex ? primaryColor : undefined 
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 md:mt-12 max-[470px]:mt-6">
            <button 
              className="group px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              style={{ backgroundColor: primaryColor, color: 'white' }}
              onClick={() => openBookingForm("hair-consultation")}
            >
              Reserve Your Slot
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText={selectedService ? hairProblems.find(p => p.serviceValue === selectedService)?.cta || "Book Consultation" : "Reserve Your Slot"}
          title={`Book Consultation for ${getSelectedProblemTitle()}`}
          subtitle="Fill the form below and our hair specialist will create a personalized treatment plan for you"
          onClose={closeBookingForm}
        />
      )}
    </>
  );
}