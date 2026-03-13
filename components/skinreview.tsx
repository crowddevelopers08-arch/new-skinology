"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import SkinPopupForm from "./skinpopup";
const reviews = [
  {
    id: 1,
    name: "ramesh chhaba",
    rating: 5,
    text: "I traveled from Toronto to Bangalore for hair transplant and had high recommendations for Dr Sushma. Her entire staff lives up to my expectations and whole experience was painless and very comforting. I would definitely recommend Dr Sushma and her staff for hair transplant. I will add photos after 3 months :).",
    date: "Recent Review",
  },
  {
    id: 2,
    name: "Arun kumar R",
    rating: 5,
    text: "I had my hair transplant on July 28, 2023, and saw excellent results within 4 months. Dr. Sushma and her team at Skinlogy are skilled, friendly, and very supportive. The GFC treatment also helped with hair growth and maintenance. Skinlogy is one of the best clinics in Bangalore—thank you, Dr. Sushma and team!",
    date: "Recent Review",
  },
  {
    id: 3,
    name: "Rajan Mandal",
    rating: 5,
    text: "Doctor sushma has done wonderful job in terms of my hair line design and giving optimal density. She did 5000 follicles for me and I am completely satisfied with the results.One needs be little patient when it comes to results of transplant as it takes around one year to see the complete results.",
    date: "Recent Review",
  },
];

const SkinReviewsSection = () => {
  const primaryColor = "#ff8501";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openBookingForm = () => {
    setIsFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsFormOpen(false);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <>
      <section id="reviews" className="py-12 md:py-16 max-[470px]:py-10 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3">
              What Our <span style={{ color: primaryColor }}>Patients</span> Say About Us
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
                    style={{ 
                      fill: primaryColor,
                      color: primaryColor
                    }} 
                  />
                ))}
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">5.0</span>
              <span className="text-gray-600 text-xs sm:text-sm">| 3 Verified Reviews</span>
            </div>
          </div>

          {/* Single Review Card */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all duration-200 border border-gray-200 hover:border-orange-200 hover:shadow-lg cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all duration-200 border border-gray-200 hover:border-orange-200 hover:shadow-lg cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>

            {/* Review Card Container */}
            <div className="mx-auto max-w-3xl px-3 md:px-6">
              <div 
                className={`bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-md transition-all duration-300 ${
                  isAnimating ? "opacity-95 scale-[0.995]" : "opacity-100 scale-100"
                }`}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote 
                    className="w-8 h-8 opacity-30" 
                    style={{ color: primaryColor }} 
                  />
                  <div className="flex items-center gap-1">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4" 
                        style={{ 
                          fill: primaryColor,
                          color: primaryColor
                        }} 
                      />
                    ))}
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
                  "{reviews[currentIndex].text}"
                </p>
                
                {/* Reviewer Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900 text-base md:text-lg">{reviews[currentIndex].name}</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-0.5">{reviews[currentIndex].date}</p>
                  </div>
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${primaryColor}15`,
                      border: `1.5px solid ${primaryColor}30`
                    }}
                  >
                    <span 
                      className="text-base md:text-lg font-bold"
                      style={{ color: primaryColor }}
                    >
                      {reviews[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                style={{ 
                  backgroundColor: index === currentIndex ? primaryColor : undefined 
                }}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center max-[470px]:mt-6 mt-10 md:mt-10">
            <Button 
              onClick={openBookingForm}
              style={{ backgroundColor: primaryColor }}
              className="group text-white hover:opacity-90 transition-all duration-300 text-sm h-10 md:h-11 px-6 md:px-8 rounded-lg font-semibold shadow-md hover:shadow-lg cursor-pointer"
            >
              Take the First Step
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText="Take the First Step"
          title="Take the First Step Towards Healthy Hair"
          subtitle="Join thousands of satisfied patients. Fill the form below and begin your hair transformation journey"
          onClose={closeBookingForm}
        />
      )}
    </>
  );
};

export default SkinReviewsSection;