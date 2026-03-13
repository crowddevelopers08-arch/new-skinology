// app/components/SkinHeader.tsx
"use client";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";

const SkinThankHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const primaryColor = "#ff8501";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-white py-5"
      }`}
      style={{ "--primary": primaryColor } as React.CSSProperties}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <div className="relative w-40 h-12 md:w-48 md:h-14">
              <Image
                src="https://ik.imagekit.io/xivdiehvf/public/Skinologylogo.jpg"
                alt="Skinology Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Call Now Button */}
          <a 
            href="tel:+919900010044" 
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors group cursor-pointer"
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              <Phone className="w-4 h-4" style={{ color: primaryColor }} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Call Us</span>
              <span className="font-semibold text-gray-900 text-sm md:text-base">+91 99000 10044</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default SkinThankHeader;