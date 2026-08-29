import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CareersContent from "@/components/CareersContent";

export const metadata: Metadata = {
  title: "Careers at RexonSoftTech | Software Engineering Jobs in Chennai",
  description: "Join our engineering team in Chennai. Build mission-critical ERP systems, high-performance web applications, and business automation platforms."
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full">
              Join Our Engineering Team
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Build Technology That Impacts Real Businesses
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join our Chennai team to engineer mission-critical custom ERPs, scalable web platforms, and automated software for growing industries.
            </p>
          </div>
        </section>

        {/* Interactive Careers Content with Job Listings & Multi-Channel Apply Modal */}
        <CareersContent />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
