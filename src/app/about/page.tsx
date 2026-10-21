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
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About RexonSoftTech | Custom Software & ERP Company Chennai",
  description: "Learn about RexonSoftTech: our Chennai headquarters, engineering philosophy, 8-stage SDLC process, 100% source code ownership pledge, and proven enterprise track record.",
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
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://rexonsofttech.in/about#webpage",
    "url": "https://rexonsofttech.in/about",
    "name": "About RexonSoftTech | Custom Software & ERP Company Chennai",
    "description": "Learn about RexonSoftTech: our Chennai headquarters in Anna Nagar, engineering philosophy, 100% source code ownership pledge, and enterprise track record.",
    "mainEntity": {
      "@id": "https://rexonsofttech.in/#organization"
    }
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-br from-[#260E22] via-[#381932] to-[#260E22] text-[#FFF3E6] py-20 border-b border-[#FFF3E6]/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFF3E6]/5 blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-[#FFF3E6] uppercase tracking-widest bg-[#FFF3E6]/10 border border-[#FFF3E6]/20 px-4 py-1.5 rounded-full">
              Engineering Excellence & Integrity
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFF3E6]">
              The Technology Partner Behind Your Operations
            </h1>
            <p className="text-base sm:text-lg text-[#EAD8C7] max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between complex manual business routines and automated, high-performing software systems tailored to your company&apos;s growth.
            </p>
          </div>
        </section>

        {/* Declarative AI Answer Snippet */}
        <section className="bg-[#2D1328] border-b border-[#FFF3E6]/10 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-[#381932] rounded-2xl border border-[#FFF3E6]/20 shadow-md flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF3E6]/10 text-[#FFF3E6] flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[#EAD8C7] uppercase tracking-widest block">
                  Quick Answer • About RexonSoftTech
                </span>
                <p className="text-sm font-semibold text-[#FFF3E6] leading-relaxed">
                  <strong>RexonSoftTech</strong> is an enterprise software engineering company headquartered in Anna Nagar West, Chennai (PIN 600040), operating officially at <strong>rexonsofttech.in</strong>. Specializing in bespoke ERP architecture, multi-warehouse inventory systems, GST billing engines, high-performance Next.js web applications, cross-platform mobile apps, and VAPT cybersecurity audits, RexonSoftTech provides 100% source code ownership with zero recurring per-user licensing fees.
                </p>
              </div>
            </div>
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
