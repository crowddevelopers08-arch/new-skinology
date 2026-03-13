"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface NavbarProps {
  onConsultationClick?: () => void;
}

export default function ThankNavbar({ onConsultationClick }: NavbarProps) {
  const [navScrolled, setNavScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Only run in browser environment
    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", checkMobile);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  // Don't render anything during SSR to avoid hydration mismatches
  if (!isMounted) {
    return (
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-16 py-3 md:py-4 bg-transparent">
        {/* Static fallback for SSR */}
        <div className="flex items-center gap-4 md:gap-10">
          <div className="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="bg-[#c34c47] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
          <div className="w-4 h-4 bg-white/50 rounded"></div>
          <span>Call +91-8079791010</span>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-16 py-3 md:py-4 transition-all duration-500 ${
        navScrolled
          ? "bg-[#e68272] backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Left Logo */}
      <div className="flex items-center gap-4 md:gap-10">
        <Image
          src="/adddd.png"
          alt="alora logo"
          width={isMobile ? 120 : 200}
          height={isMobile ? 45 : 40}
          className="object-contain"
          priority
        />
      </div>

      {/* Call Button */}
      <a
        href="tel:+918079791010"
        className="bg-[#c34c47] hover:bg-[#a53e3a] text-white px-4 py-2 md:px-5 md:py-2 rounded-full font-medium transition text-sm md:text-base whitespace-nowrap flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {isMobile ? "Call Now" : "Call +91-8079791010"}
      </a>
    </motion.nav>
  );
}