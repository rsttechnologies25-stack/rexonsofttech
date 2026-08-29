import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* 1. Hero: Balanced full-service software company with Flagship Custom ERP */}
        <HeroSection />

        {/* 2. Balanced 7-Service Grid (Equal weight cards with subtle Flagship badge) */}
        <ServicesPreview />

        {/* 3. Curated 3-Project Case Studies Preview */}
        <CaseStudiesPreview />

        {/* 4. Verifiable Trust & Operational Metrics */}
        <StatsSection />

        {/* 5. High-Conversion Action Block */}
        <CTASection />

        {/* 6. Consultation Lead Capture Form (Anchor: #contact) */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
