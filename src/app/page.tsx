import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: { absolute: "RexonSoftTech | Custom Software Development & ERP Solutions in Chennai" },
  description: "Custom ERP and software development in Chennai for growing businesses. Build ERP, automation, web applications and cybersecurity solutions.",
  alternates: {
    canonical: "https://rexonsofttech.in",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* 1. Hero: Balanced full-service software company with Flagship Custom ERP */}
        <HeroSection />

        {/* 2. Balanced 7-Service Grid (Equal weight cards with subtle Flagship badge) */}
        <ServicesPreview />

        {/* 3. Verifiable Trust & Operational Metrics */}
        <StatsSection />

        {/* 4. High-Conversion Action Block */}
        <CTASection />

        {/* 5. Consultation Lead Capture Form (Anchor: #contact) */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
