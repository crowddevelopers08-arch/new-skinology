"use client";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from "react";
import SkinPopupForm from "./skinpopup";
import Image from "next/image";

const Footer = () => {
  const primaryColor = "#ff8501";
  const currentYear = new Date().getFullYear();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openBookingForm = () => {
    setIsFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button with Always Active Animations */}
      <a 
        href="https://wa.me/9900010044" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-white" />
        
        {/* Pulsing Ring Animation */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
        
        {/* Second Ring Animation */}
        <div 
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          style={{
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        ></div>
        
        {/* Floating Animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          @keyframes pulse-large {
            0%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.4;
            }
          }
        `}</style>
        
        {/* Apply floating animation to entire button */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            animation: 'float 3s ease-in-out infinite',
          }}
        ></div>
      </a>

      {/* Mobile Action Buttons - Fixed at bottom for mobile only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex">
          {/* Call Now Button */}
          <button 
            className="flex-1 px-4 py-3 flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors duration-300 cursor-pointer"
            style={{ backgroundColor: primaryColor, color: 'white' }}
            onClick={() => window.open('tel:+919900010044', '_self')}
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </button>
          
          {/* Divider */}
          <div className="w-px bg-gray-300" />
          
          {/* Book Now Button */}
          <button 
            className="flex-1 px-4 py-3 flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors duration-300 bg-gray-900 text-white hover:bg-gray-800 cursor-pointer"
            onClick={openBookingForm}
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </button>
        </div>
      </div>

      <footer className="bg-gray-900 text-white pb-16 md:pb-0">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {/* Logo Image */}
                <div className="relative w-48 h-12">
                  <Image
                    src="https://ik.imagekit.io/xivdiehvf/public/Skinologylogo.jpg" // Update with your actual logo path
                    alt="Skinology Clinic Logo"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 192px, 192px"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expert hair restoration and dermatology clinic in Bangalore. 
                Trusted by 10,000+ patients with 10+ years of clinical experience.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-3 pt-2">
                <a 
                  href="https://www.facebook.com/Skinologycentre" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/skinologycentrebangalore/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: primaryColor }}>Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">About Dr. Sushma</a>
                </li>
                <li>
                  <a href="#results" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">Results & Transformations</a>
                </li>
                <li>
                  <a href="#treatments" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">Hair Treatments</a>
                </li>
                <li>
                  <a href="#faqs" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">FAQs</a>
                </li>
              </ul>
            </div>

            {/* Treatments */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: primaryColor }}>Treatments</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">Hair Transplant</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">Male Pattern Baldness</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">Receding Hairline</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">Hair Thinning</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">Scalp Treatments</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: primaryColor }}>Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Address:No GA, ground floor Regency Orchard Apts Ramana Maharshi road Sadashivanagar Armane nagar Bangalore 560080
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91 99000 10044</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">skinologycentre@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Mon-Sat: 10 AM - 6 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} Skinology Clinic. All rights reserved.
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <a href="/privacy-policy" className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="/terms" className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                  Terms of Service
                </a>
                <span className="text-gray-600">•</span>
                <a href="/refund" className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Form */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText="Book Now"
          title="Book Your Appointment at Skinology"
          subtitle="Fill the form below to schedule your consultation with our hair specialists"
          onClose={closeBookingForm}
        />
      )}
    </>
  );
};

export default Footer;