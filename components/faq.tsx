"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion, useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const primaryColor = "#ff8501";

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leftFaqs = [
    {
      question: 'How much does a hair transplant cost at Skinology?',
      answer: 'Hair transplant costs vary based on the number of grafts required and the technique used. We provide a detailed cost estimate after a thorough consultation with Dr. Sushma. Contact us for a personalized assessment.',
    },
    {
      question: 'How many grafts will I need for my hair transplant?',
      answer: 'The number of grafts depends on the extent of hair loss, the size of the balding area, and your desired density. During consultation, Dr. Sushma will assess your scalp and recommend the optimal graft count.',
    },
    {
      question: 'Is the hair transplant procedure painful?',
      answer: 'The procedure is performed under local anesthesia, so you won\'t feel pain during the surgery. Post-procedure, there may be mild discomfort which can be managed with prescribed medications.',
    },
    {
      question: 'What is the downtime after a hair transplant?',
      answer: 'Most patients can resume normal activities within 2–3 days. However, strenuous activities should be avoided for 2–3 weeks. Complete healing typically takes about 10–14 days.',
    },
  ];

  const rightFaqs = [
    {
      question: 'When will I see results from my hair transplant?',
      answer: 'Initial hair growth begins around 3–4 months post-procedure. Significant results are visible by 6–9 months, with full results appearing after 12–18 months.',
    },
    {
      question: 'Are the results of hair transplant permanent?',
      answer: 'Yes, transplanted hair is permanent. The hair follicles are taken from the donor area (back of the head) which is resistant to balding, ensuring long-lasting results.',
    },
    {
      question: 'What treatments are available for hair fall?',
      answer: 'We offer a range of treatments including PRP therapy, mesotherapy, low-level laser therapy, medical management with minoxidil and finasteride, and advanced hair transplant procedures.',
    },
    {
      question: 'Do I need to stay in Bangalore for the entire treatment?',
      answer: 'For hair transplant, you\'ll need to stay for 2–3 days. For other treatments like PRP, same-day sessions are possible. We can arrange follow-ups via video consultations.',
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <section ref={sectionRef} className="py-16 md:py-16 max-[470px]:py-10 bg-gradient-to-b from-white to-orange-50" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div 
              className="mb-6 sm:mb-6 text-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              <div className="relative inline-block">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Hair Transplant & Hair Fall Treatment <span style={{ color: primaryColor }}>FAQs</span>
          </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Find clear answers to common questions about cost, grafts, pain, downtime, and expected results.
                </p>
              </div>
            </motion.div>

            <div className="faq-content">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column */}
                <div className="space-y-4 md:space-y-6">
                  <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
                    {leftFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`left-item-${index}`}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 px-5 md:px-6"
                      >
                        <AccordionTrigger className="text-base md:text-lg font-semibold text-gray-900 hover:text-orange-600 text-left py-4 md:py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-4 md:pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Right Column */}
                <div className="space-y-4 md:space-y-6">
                  <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
                    {rightFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`right-item-${index}`}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 px-5 md:px-6"
                      >
                        <AccordionTrigger className="text-base md:text-lg font-semibold text-gray-900 hover:text-orange-600 text-left py-4 md:py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-4 md:pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;