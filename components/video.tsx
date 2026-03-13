"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Users, Clock, TrendingUp } from "lucide-react";
import SkinPopupForm from "./skinpopup";

const metrics = [
  {
    icon: Scissors,
    value: 3000,
    suffix: "+",
    label: "Successful Procedures",
    description: "A decade of expertise delivering natural-looking, high-density results.",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Happy Patients",
    description: "Comprehensive care for hair loss, thinning, and scalp concerns.",
  },
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Years of Excellence",
    description: "Led by Dr Sushma, dermatologist & hair transplant surgeon.",
  },
  {
    icon: TrendingUp,
    value: 97,
    suffix: "%",
    label: "Success Rate",
    description: "Achieved through advanced techniques and personalised plans.",
  },
];

const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const MetricsSection = () => {
  const primaryColor = "#ff8501";
  const backgroundColor = "#2c2521";
  const cardBackgroundColor = "#372f2b";
  
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const openBookingForm = () => {
    setIsFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsFormOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section 
        ref={sectionRef} 
        className="py-16 md:py-16 max-[470px]:py-8 relative overflow-hidden"
        style={{ backgroundColor: backgroundColor }}
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 max-[470px]:mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Results Backed by <span style={{ color: primaryColor }}>Experience</span>, Precision & Trust
            </h2>
            <p className="text-lg text-gray-300">
              Numbers that reflect Skinology's commitment to safe, effective, and consistent hair restoration outcomes.
            </p>
          </div>

          {/* Metrics Grid - Responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 max-[470px]:mb-8">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="rounded-2xl p-5 md:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: cardBackgroundColor,
                  border: `1px solid ${primaryColor}20`,
                }}
              >
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${primaryColor}20` }}
                >
                  <metric.icon 
                    className="w-6 h-6 md:w-7 md:h-7" 
                    style={{ color: primaryColor }}
                  />
                </div>
                <p 
                  className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2"
                  style={{ color: primaryColor }}
                >
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} isVisible={isVisible} />
                </p>
                <p className="font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">
                  {metric.label}
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  {metric.description}
                </p>
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
              Start Your Hair Treatment Today
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText="Start Your Hair Treatment Today"
          title="Begin Your Hair Treatment Journey"
          subtitle="Fill the form below and our hair treatment specialist will create a personalised plan for you"
          onClose={closeBookingForm}
        />
      )}
    </>
  );
};

export default MetricsSection;