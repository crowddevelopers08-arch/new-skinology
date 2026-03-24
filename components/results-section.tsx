"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SkinPopupForm from "./skinpopup";

const transformations = [
  { 
    id: 1, 
    image: "/im1.jpg",
  },
  { 
    id: 2, 
    image: "/im2.jpg",
  },
  { 
    id: 3, 
    image: "/im3.jpg",
  },
  { 
    id: 4, 
    image: "/im4.jpg",
  },
  { 
    id: 5, 
    image: "/im5.jpg",
  },
  { 
    id: 6, 
    image: "/im6.jpg",
  },
  { 
    id: 7, 
    image: "/im7.jpg",
  },
  // { 
  //   id: 8, 
  //   image: "/im8.jpg",
  // },
  // { 
  //   id: 9, 
  //   image: "/im9.jpg",
  // },
  // { 
  //   id: 10, 
  //   image: "/im10.jpg",
  // },
  { 
    id: 11, 
    image: "/im11.jpg",
  },
];

const TransformationSection = () => {
  const primaryColor = "#ff8501";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const openBookingForm = () => {
    setIsFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsFormOpen(false);
  };

  // Update visible slides based on screen size
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 768) {
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
    const maxIndex = Math.max(0, transformations.length - visibleSlides);
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, transformations.length - visibleSlides);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Calculate slide width for smooth scrolling
  const slideWidth = 100 / Math.min(visibleSlides, transformations.length);

  return (
    <>
      <section id="results" className="py-16 md:py-16 max-[470px]:py-8 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-12 max-[470px]:mb-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              See <span style={{ color: primaryColor }}>Real Results</span> from Our Patients
            </h2>
            <p className="text-lg text-gray-600">
              Witness the transformative journey of our patients through documented before and after comparisons.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative px-2 md:px-4 lg:px-8">
            {/* Navigation Buttons - Show only when there are more slides */}
            {transformations.length > visibleSlides && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 border border-gray-200 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 border border-gray-200 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                </button>
              </>
            )}

            {/* Carousel */}
            <div 
              ref={carouselRef}
              className="overflow-hidden"
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
              >
                {transformations.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 px-3 md:px-4 lg:px-6"
                    style={{ width: `${slideWidth}%` }}
                  >
                    {/* Image container - using natural image dimensions */}
                    <div className="relative w-full">
                      {/* Combined Before/After Image */}
                      <div className="relative w-full">
                        <Image
                          src={item.image}
                          alt={`Before and after comparison for hair transformation`}
                          width={400}
                          height={400} // Square ratio to avoid extra space
                          className="w-full h-auto rounded-2xl"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                          priority={item.id <= 3}
                          style={{ 
                            display: 'block',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator - Only show when there are more slides */}
            {transformations.length > visibleSlides && (
              <div className="flex justify-center mt-8 md:mt-10 max-[470px]:mt-6 space-x-2">
                {Array.from({ length: Math.max(1, transformations.length - visibleSlides + 1) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex 
                        ? 'w-8' 
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

          {/* CTA */}
          <div className="text-center mt-12 md:mt-12 max-[470px]:mt-6">
            <Button 
              onClick={openBookingForm}
              style={{ backgroundColor: primaryColor }}
              className="group text-white hover:opacity-90 transition-opacity text-base h-12 px-8 sm:px-10 sm:h-14 sm:text-lg cursor-pointer"
            >
              Start Your Transformation Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText="Start Your Transformation Today"
          title="Begin Your Hair Transformation Journey"
          subtitle="Fill the form below and our hair restoration expert will guide you through the process"
          onClose={closeBookingForm}
        />
      )}
    </>
  );
};

export default TransformationSection;