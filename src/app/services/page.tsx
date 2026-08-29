import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ERPSolutions from "@/components/ERPSolutions";
import SolutionsSection from "@/components/SolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import AutomationCalculator from "@/components/AutomationCalculator";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Software Development & Custom ERP Services | RexonSoftTech Chennai",
  description: "Comprehensive software engineering services: bespoke ERP platforms, billing software engines, web portals, mobile apps (iOS/Android), AI workflow automation, and cybersecurity audits in Chennai.",
  keywords: [
    "Custom ERP software Chennai",
    "ERP development services",
    "Steel fabrication ERP system",
    "GST billing software development",
    "Custom CRM platforms",
    "Web application development Chennai",
    "Mobile app development Tamil Nadu",
    "Business automation tools",
    "Cyber security audits VAPT Chennai"
  ],
  alternates: {
    canonical: "https://rexonsofttech.in/services",
  },
  openGraph: {
    title: "Software Development & Custom ERP Services | RexonSoftTech Chennai",
    description: "Explore our full suite of enterprise software engineering: flagship ERP systems, business automation, web applications, mobile platforms, and cybersecurity.",
    url: "https://rexonsofttech.in/services",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://rexonsofttech.in/rst_logo.png",
        width: 640,
        height: 640,
        alt: "RexonSoftTech Services & ERP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development & Custom ERP Services | RexonSoftTech Chennai",
    description: "Bespoke ERP architecture, business automation, web & mobile platforms built for growth.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function ServicesPage() {
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
        "name": "Services & ERP",
        "item": "https://rexonsofttech.in/services"
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
              Full-Stack Engineering & Flagship ERP
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Enterprise Software & Technology Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We design, build, and maintain custom technology systems that eliminate operational bottlenecks, automate manual records, and accelerate business revenue.
            </p>
          </div>
        </section>

        {/* 1. All 7 Core Services Detailed Breakdown */}
        <ServicesSection />

        {/* 2. Flagship ERP Operational Engines */}
        <ERPSolutions />

        {/* 3. Ready-to-Deploy Products (RexonSoft Billing & Warehouse ERP) */}
        <SolutionsSection />

        {/* 4. Industry Sector Deployments */}
        <IndustriesSection />

        {/* 5. Interactive "How Much Can You Automate?" ROI Assessment */}
        <AutomationCalculator />

        {/* 6. Complete Client Case Studies & Realized Assets */}
        <PortfolioSection />

        {/* 7. Contact Consultation Form */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
