import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ArrowRight, ExternalLink, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Vinod Computers Portal Case Study",
  description: "How RexonSoftTech engineered a service catalog and lead capture portal for Vinod Computers in Chennai.",
  alternates: {
    canonical: "https://rexonsofttech.in/case-studies/vinod-computers",
  },
  openGraph: {
    title: "Case Study: Vinod Computers IT Hardware Portal | RexonSoftTech",
    description: "Service inquiry platform and IT hardware catalog engineered for Vinod Computers Chennai.",
    url: "https://rexonsofttech.in/case-studies/vinod-computers",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/project_vinod.png", width: 1200, height: 630, alt: "Vinod Computers Case Study" }],
  }
};

export default function VinodComputersCaseStudy() {
    const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://rexonsofttech.in/case-studies/vinod-computers#article",
    "headline": "Vinod Computers: Enterprise IT Hardware Catalog",
    "description": "Modernizing a commercial IT hardware dealer with an indexed multi-category catalog, structured product specifications, and direct WhatsApp quotation engine.",
    "image": "https://rexonsofttech.in/project_vinod.png",
    "author": {
      "@type": "Organization",
      "@id": "https://rexonsofttech.in/#organization",
      "name": "RexonSoftTech Engineering Team"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://rexonsofttech.in/#organization",
      "name": "RexonSoftTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rexonsofttech.in/rst_logo.png"
      }
    },
    "about": {
      "@type": "Organization",
      "name": "Vinod Computers"
    },
    "inLanguage": "en-IN"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://rexonsofttech.in/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Vinod Computers", "item": "https://rexonsofttech.in/case-studies/vinod-computers" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-accent-400 uppercase tracking-widest">
              <span>Client Case Study</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Vinod Computers: IT Service Catalog & Lead Generation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Modern digital infrastructure connecting enterprise clients and consumers with rapid computer hardware repair and AMC services.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            
            {/* Meta Header Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs">
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Client</span>
                <span className="font-bold text-navy-900 text-sm mt-0.5 block">Vinod Computers</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Industry</span>
                <span className="font-bold text-navy-900 text-sm mt-0.5 block">IT Hardware & AMC</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                <span className="font-bold text-navy-900 text-sm mt-0.5 block">Chennai, India</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Live Platform</span>
                <a href="https://vinodcomputers.in" target="_blank" rel="noopener noreferrer" className="font-bold text-accent-600 hover:underline text-sm mt-0.5 inline-flex items-center">
                  Visit Site <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <Image src="/project_vinod.png" alt="Vinod Computers Platform" fill priority sizes="(max-width: 768px) 100vw, 896px" className="object-cover object-top" />
            </div>

            <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">1. The Operational Challenge</h2>
                <p>
                  Vinod Computers provides hardware maintenance, chip-level laptop repairs, and Annual Maintenance Contracts (AMC) for corporate offices and educational institutions across Chennai. Inquiries were previously handled via unrecorded phone calls and scattered WhatsApp messages, leading to unfulfilled service calls and lack of tracking.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">2. The Solution</h2>
                <p>
                  RexonSoftTech engineered a clean, search-optimized web portal featuring categorized hardware repair services, structured AMC inquiry request forms, and automated routing of repair inquiries directly to service coordinators.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">3. What We Built</h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> Structured hardware diagnostic request forms with device model and symptom capture.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> Dedicated AMC package tiers tailored for small businesses and commercial offices.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> Direct one-click WhatsApp inquiry integration for rapid customer service response.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">4. Technology Stack</h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 bg-slate-100 rounded-lg font-mono text-navy-900">Next.js</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-lg font-mono text-navy-900">Tailwind CSS</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-lg font-mono text-navy-900">WhatsApp API</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-lg font-mono text-navy-900">Cloudflare</span>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-500 italic">
                <span className="font-bold text-navy-900 block not-italic mb-1">Client Feedback</span>
                Client testimonial pending formal publication approval. Platform active and verified at vinodcomputers.in.
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Related Services</span>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services/website-development" className="text-xs font-bold text-accent-600 hover:underline">
                    Website Development →
                  </Link>
                  <Link href="/services/web-application-development" className="text-xs font-bold text-accent-600 hover:underline">
                    Web Application Development →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
