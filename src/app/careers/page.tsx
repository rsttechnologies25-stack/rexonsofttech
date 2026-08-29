import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CareersContent from "@/components/CareersContent";
import { POSITIONS } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Careers at RexonSoftTech | Software Engineering Jobs in Chennai",
  description: "Explore tech job openings at RexonSoftTech in Anna Nagar, Chennai. We are hiring Full-Stack Developers (React/Next.js), ERP Business Analysts, and UI/UX Designers.",
  keywords: [
    "Software jobs Chennai",
    "Next.js developer jobs Chennai",
    "React developer hiring Tamil Nadu",
    "ERP consultant jobs Chennai",
    "UI/UX designer jobs",
    "RexonSoftTech careers"
  ],
  alternates: {
    canonical: "https://rexonsofttech.in/careers",
  },
  openGraph: {
    title: "Careers at RexonSoftTech | Software Engineering Jobs in Chennai",
    description: "Join our engineering team in Chennai. Build mission-critical ERP systems, high-performance web applications, and business automation platforms.",
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
    title: "Careers at RexonSoftTech | Software Engineering Jobs in Chennai",
    description: "Join our Chennai engineering team to build custom ERPs and web platforms.",
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
    )}\n\nQualifications:\n${pos.requirements.join("\n")}`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "RexonSoftTech",
      "value": pos.id
    },
    "datePosted": "2026-08-25",
    "validThrough": "2026-12-31T23:59:59",
    "employmentType": "FULL_TIME",
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
        "unitText": "YEAR"
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
