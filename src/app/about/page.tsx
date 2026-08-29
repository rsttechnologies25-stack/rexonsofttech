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
  description: "Learn about RexonSoftTech: our Chennai headquarters, engineering philosophy, 8-stage SDLC process, 100% source code ownership pledge, and proven enterprise track record.",
  keywords: [
    "About RexonSoftTech",
    "Software development company Anna Nagar Chennai",
    "ERP developers Chennai",
    "Custom software development team Tamil Nadu",
    "Rexon Software Technologies founders"
  ],
  alternates: {
    canonical: "https://rexonsofttech.in/about",
  },
  openGraph: {
    title: "About RexonSoftTech | Custom Software & ERP Company Chennai",
    description: "The team and engineering philosophy behind your software and ERP systems. Headquartered in Anna Nagar, Chennai.",
    url: "https://rexonsofttech.in/about",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://rexonsofttech.in/rst_logo.png",
        width: 640,
        height: 640,
        alt: "About RexonSoftTech Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About RexonSoftTech | Custom Software & ERP Company Chennai",
    description: "Learn about our Chennai engineering team, agile process, and 100% source code ownership pledge.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rexonsofttech.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://rexonsofttech.in/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
