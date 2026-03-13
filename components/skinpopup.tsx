"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X, Phone, Calendar } from 'lucide-react';

interface PopupFormProps {
  triggerText?: string;
  title?: string;
  subtitle?: string;
  onClose?: () => void;
}

export default function SkinPopupForm({
  triggerText = "Book Your Consultation Now",
  title = "Book Skin Consultation",
  subtitle = "Fill the form below and our expert will contact you shortly",
  onClose
}: PopupFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: '',
    preferredDate: '',
    consent: true
  });
  const popupRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node) && onClose) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSubmitError(null); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      // Prepare lead data
      const leadData = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        concern: formData.concern,
        preferredDate: formData.preferredDate,
        consent: formData.consent,
        source: window.location.href,
        formName: 'Website leads'
      };

      // Send to API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('Lead submitted successfully:', result);
        
        // Close the popup
        if (onClose) {
          onClose();
        }
        
        // Route to thank you page
        router.push('/thank-you');
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          concern: '',
          preferredDate: '',
          consent: true
        });
        
      } else {
        throw new Error(result.error || result.details || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      {/* Popup Overlay */}
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black bg-opacity-60 animate-fadeIn"
      >
        {/* Popup Container */}
        <div 
          ref={popupRef}
          className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md max-h-[85vh] overflow-y-auto animate-slideUp"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          {/* Header */}
          <div 
            className="rounded-t-xl sm:rounded-t-2xl p-4 sm:p-5 text-white"
            style={{ backgroundColor: '#ff8501' }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
              <div className="p-1.5 sm:p-2 bg-white bg-opacity-20 rounded-full">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
            </div>
            <p className="text-white text-opacity-90 text-xs sm:text-sm">{subtitle}</p>
          </div>

          {/* Form */}
          <div className="p-4 sm:p-5">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full pl-10 sm:pl-12 pr-3 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter 10-digit number"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email (optional)"
                />
              </div>

              {/* Concern Field */}
              <div>
                <label htmlFor="concern" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Hair Concern *
                </label>
                <select
                  id="concern"
                  name="concern"
                  required
                  value={formData.concern}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select your Hair concern</option>
                  <option value="Hair loss">Hair loss</option>
                  <option value="Baldness">Baldness</option>
                  <option value="Hair thinning">Hair thinning</option>
                  <option value="Receding hairline">Receding hairline</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Date Field */}
              <div>
                <label htmlFor="preferredDate" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={today}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                  disabled={isSubmitting}
                  className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 disabled:opacity-50"
                  required
                />
                <label htmlFor="consent" className="text-xs sm:text-sm text-gray-600">
                  I consent to receiving communication from Sculpt Transformation Medical & Fitness Clinic regarding my skin consultation request.
                </label>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{submitError}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-3 sm:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-md"
                  style={{
                    backgroundColor: '#ff8501',
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Book Consultation'
                  )}
                </button>

                <p className="text-[10px] sm:text-xs text-center text-gray-500 pt-2 sm:pt-3 mt-2">
                  By submitting, you agree to our terms and privacy policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        /* Custom scrollbar for the popup */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #ff8501;
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #e67600;
        }

        /* Improve date input appearance on mobile */
        input[type="date"]::-webkit-calendar-picker-indicator {
          opacity: 0.6;
          cursor: pointer;
          padding: 4px;
        }

        /* Improve select appearance */
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
      `}</style>
    </>
  );
}