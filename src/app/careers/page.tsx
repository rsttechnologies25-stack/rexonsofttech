import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CareersContent from "@/components/CareersContent";
import { POSITIONS } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Careers at RexonSoftTech | Tech & Business Development Jobs in Chennai",
  description: "Explore career opportunities at RexonSoftTech in Anna Nagar, Chennai. We are hiring Full-Stack Developers, ERP Business Analysts, UI/UX Designers, and Marketing / Business Development Executives (Full-Time & Part-Time).",
  alternates: {
    canonical: "https://rexonsofttech.in/careers",
  },
  openGraph: {
    title: "Careers at RexonSoftTech | Tech & Business Development Jobs in Chennai",
    description: "Join our team in Chennai. Build mission-critical ERP systems, high-performance web applications, and expand our enterprise client base.",
    url: "https://rexonsofttech.in/careers",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://rexonsofttech.in/rst_logo.png",
        width: 640,
        height: 640,
        alt: "Careers at RexonSoftTech Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at RexonSoftTech | Tech & Business Development Jobs in Chennai",
    description: "Join our Chennai team in engineering, ERP consulting, and business development.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function CareersPage() {
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
        "name": "Careers",
        "item": "https://rexonsofttech.in/careers"
      }
    ]
  };

  const jobPostingsSchema = POSITIONS.map((pos) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": pos.title,
    "description": `${pos.overview}\n\nKey Responsibilities:\n${pos.responsibilities.join(
      "\n"
    )}\n\nQualifications:\n${pos.requirements.join("\n")}${
      pos.compensationNotice ? `\n\nCompensation Model:\n${pos.compensationNotice}` : ""
    }`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "RexonSoftTech",
      "value": pos.id
    },
    "datePosted": "2026-09-16",
    "validThrough": "2026-12-31T23:59:59",
    "employmentType": pos.type.includes("Part-Time") ? ["FULL_TIME", "PART_TIME"] : "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "RexonSoftTech",
      "sameAs": "https://rexonsofttech.in",
      "logo": "https://rexonsofttech.in/rst_logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Block I, 5/1049, West, Aishwarya Colony, Thangam Colony, Anna Nagar",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600040",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "unitText": pos.compensation?.includes("Commission") ? "COMMISSION" : "YEAR"
      }
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {jobPostingsSchema.map((job, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(job) }}
        />
      ))}
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-br from-[#260E22] via-[#381932] to-[#260E22] text-[#FFF3E6] py-20 border-b border-[#FFF3E6]/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFF3E6]/5 blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-[#FFF3E6] uppercase tracking-widest bg-[#FFF3E6]/10 border border-[#FFF3E6]/20 px-4 py-1.5 rounded-full">
              Join Our Growing Team
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFF3E6]">
              Build Technology & Accelerate Business Growth
            </h1>
            <p className="text-base sm:text-lg text-[#EAD8C7] max-w-2xl mx-auto leading-relaxed">
              Join RexonSoftTech in Chennai to engineer custom ERP platforms, develop scalable web solutions, or expand our enterprise client footprint.
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
