import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import StatsSection from "@/components/StatsSection";
import Commitment from "@/components/Commitment";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "About RexonSoftTech | Custom Software & ERP Company Chennai",
  description: "Learn about RexonSoftTech: our Chennai engineering team, agile development process, client-first philosophy, and track record in delivering enterprise software."
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full">
              Engineering Excellence & Integrity
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The Technology Partner Behind Your Operations
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between complex manual business routines and automated, high-performing software systems tailored to your company's growth.
            </p>
          </div>
        </section>

        {/* 1. Authentic Company Profile & Chennai Roots */}
        <AboutSection />

        {/* 2. 5 Core Differentiators */}
        <WhyChooseUs />

        {/* 3. Structured 8-Stage Development Lifecycle */}
        <DevelopmentProcess />

        {/* 4. Verifiable Track Record Metrics */}
        <StatsSection />

        {/* 5. Executive Commitment Pledge */}
        <Commitment />

        {/* 6. Comprehensive FAQs for Business Leaders */}
        <FAQSection />

        {/* 7. Contact Consultation Section */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
