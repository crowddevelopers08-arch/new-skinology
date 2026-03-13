"use client";
import DentalScalingOffer from "@/components/hair-loss-stages";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FAQ from "@/components/faq";
import StudentSuccess from "@/components/comparison-section";

import DentalCareSection from "@/components/logoslider";
import WhyChooseSection from "@/components/video";
import TestimonialsSection from "@/components/offer-highlight";
import DoctorSection from "@/components/results-section";
import { Header } from "@radix-ui/react-accordion";
import SkinHeader from "@/components/header";
import TransformationSection from "@/components/results-section";
import MetricsSection from "@/components/video";
import SkinWhyChooseSection from "@/components/logoslider";
import SkinDoctorSection from "@/components/offer-highlight";
import SkinVideosSection from "@/components/skinvideo";
import SkinLocationSection from "@/components/skinlocation";
import SkinReviewsSection from "@/components/skinreview";
import HairCreative from "@/components/hairtranscreative";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <SkinHeader />
        <section id="hero">
          <HeroSection />
        </section>
        <HairCreative />
        <TransformationSection />

        <section id="why">
          <MetricsSection />
        </section>

        <SkinWhyChooseSection />
        <SkinDoctorSection />
        <section id="treatments">
          <StudentSuccess />
        </section>
        <section id="videos">
        <SkinVideosSection />
        </section>
        <SkinReviewsSection />

        <section id="faqs">
          <FAQ />
        </section>
        <SkinLocationSection />
        <Footer />
      </main>
    </>
  );
}
