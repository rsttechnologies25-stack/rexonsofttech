import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ERPSolutions from "@/components/ERPSolutions";
import SolutionsSection from "@/components/SolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import AutomationCalculator from "@/components/AutomationCalculator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Software Development & Custom ERP Services",
  description: "Comprehensive software engineering services: bespoke ERP platforms, billing software engines, web portals, mobile apps (iOS/Android), AI workflow automation, and cybersecurity audits in Chennai.",
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
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://rexonsofttech.in/services#catalog",
    "name": "RexonSoftTech Engineering Services",
    "description": "Comprehensive bespoke software engineering, enterprise ERP systems, web and mobile platforms, AI automation, and cybersecurity auditing services.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Custom ERP Development",
          "url": "https://rexonsofttech.in/services/erp-development",
          "provider": { "@id": "https://rexonsofttech.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Custom Software Development",
          "url": "https://rexonsofttech.in/services/custom-software-development",
          "provider": { "@id": "https://rexonsofttech.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Website Development",
          "url": "https://rexonsofttech.in/services/website-development",
          "provider": { "@id": "https://rexonsofttech.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Web Application Development",
          "url": "https://rexonsofttech.in/services/web-application-development",
          "provider": { "@id": "https://rexonsofttech.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "Mobile Application Development",
          "url": "https://rexonsofttech.in/services/mobile-app-development",
          "provider": { "@id": "https://rexonsofttech.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "AI & Business Automation",
          "url": "https://rexonsofttech.in/services/ai-automation",
          "provider": { "@id": "https://rexonsofttech.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Service",
          "name": "Managed Security Services (MSS)",
          "url": "https://rexonsofttech.in/services/managed-security-services",
          "provider": { "@id": "https://rexonsofttech.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Service",
          "name": "Cybersecurity & VAPT Audits",
          "url": "https://rexonsofttech.in/services/cybersecurity-vapt",
          "provider": { "@id": "https://rexonsofttech.in/#organization" }
        }
      }
    ]
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
        "name": "Services & ERP",
        "item": "https://rexonsofttech.in/services"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
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
              Full-Stack Engineering & Flagship ERP
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFF3E6]">
              Enterprise Software & Technology Services
            </h1>
            <p className="text-base sm:text-lg text-[#EAD8C7] max-w-2xl mx-auto leading-relaxed">
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

        {/* 6. Contact Consultation Form */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
