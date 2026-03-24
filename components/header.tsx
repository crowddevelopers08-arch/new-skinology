// app/components/SkinHeader.tsx
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import SkinPopupForm from "./skinpopup";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Location", href: "#location" },
];

const SkinHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form popup
  const primaryColor = "#ff8501";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to open the form popup
  const openBookingForm = () => {
    setIsFormOpen(true);
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  // Function to close the form popup
  const closeBookingForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
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
                  src="/Skinologylogo.jpg"
                  alt="Skinology Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation - Center aligned */}
            <nav className="hidden lg:flex flex-1 justify-center items-center">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-700 hover:text-orange-600 font-medium text-sm transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: primaryColor }}
                    />
                  </a>
                ))}
              </div>
            </nav>

            {/* Right side - CTA & Contact */}
            <div className="hidden lg:flex items-center gap-6">
              <a 
                href="tel:+919900010044" 
                className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Phone className="w-4 h-4" style={{ color: primaryColor }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Call Us</span>
                  <span className="font-semibold text-gray-900">+91 99000 10044</span>
                </div>
              </a>
              <Button 
                onClick={openBookingForm} // Open form on click
                className="rounded-full px-8 py-6 font-semibold text-white hover:shadow-lg transition-all cursor-pointer"
                style={{ backgroundColor: primaryColor }}
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-fade-in">
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100 space-y-4">
                  <a 
                    href="tel:+919900010044" 
                    className="flex items-center gap-3 text-gray-700 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <Phone className="w-4 h-4" style={{ color: primaryColor }} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Call Us</span>
                      <span className="font-semibold">+91 99000 10044</span>
                    </div>
                  </a>
                  <Button 
                    className="w-full rounded-full py-4 font-semibold text-white cursor-pointer"
                    style={{ backgroundColor: primaryColor }}
                    onClick={openBookingForm} // Open form on click
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Popup Form - Conditionally Rendered */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText="Book Consultation"
          title="Book Your Hair Consultation"
          subtitle="Fill the form below and our skin expert will contact you shortly"
          onClose={closeBookingForm} // Pass close function
        />
      )}
    </>
  );
};

export default SkinHeader;