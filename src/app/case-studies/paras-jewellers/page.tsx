import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ArrowRight, ExternalLink, CheckCircle2, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Paras Jewellers Platform Case Study",
  description: "How RexonSoftTech engineered a luxury jewellery digital showcase and bridal collection catalog for Paras Jewellers.",
  alternates: {
    canonical: "https://rexonsofttech.in/case-studies/paras-jewellers",
  },
  openGraph: {
    title: "Case Study: Paras Jewellers Luxury Digital Showcase | RexonSoftTech",
    description: "Fine jewellery showcase platform and bridal suite catalog for Paras Jewellers Chennai.",
    url: "https://rexonsofttech.in/case-studies/paras-jewellers",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/project_paras.png", width: 1200, height: 630, alt: "Paras Jewellers Case Study" }],
  }
};

export default function ParasJewellersCaseStudy() {
    const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://rexonsofttech.in/case-studies/paras-jewellers#article",
    "headline": "Paras Jewellers: Luxury Digital Showcase Platform",
    "description": "Showcasing bespoke bridal jewellery, antique gold collections, and bullion with high-resolution imagery and private showroom appointment booking.",
    "image": "https://rexonsofttech.in/project_paras.png",
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
      "name": "Paras Jewellers"
    },
    "inLanguage": "en-IN"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://rexonsofttech.in/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Paras Jewellers", "item": "https://rexonsofttech.in/case-studies/paras-jewellers" }
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
              Paras Jewellers: Luxury Digital Showcase Platform
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Showcasing bespoke bridal jewellery, antique gold collections, and bullion with high-resolution imagery and private showroom appointment booking.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs">
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Client</span>
                <span className="font-bold text-navy-900 text-sm mt-0.5 block">Paras Jewellers</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Industry</span>
                <span className="font-bold text-navy-900 text-sm mt-0.5 block">Luxury Jewellery & Bullion</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                <span className="font-bold text-navy-900 text-sm mt-0.5 block">Chennai, India</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Live Platform</span>
                <a href="https://parasjewellers.in" target="_blank" rel="noopener noreferrer" className="font-bold text-accent-600 hover:underline text-sm mt-0.5 inline-flex items-center">
                  Visit Site <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <Image src="/project_paras.png" alt="Paras Jewellers Platform" fill priority sizes="(max-width: 768px) 100vw, 896px" className="object-cover object-top" />
            </div>

            <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">1. The Operational Challenge</h2>
                <p>
                  Fine jewellery retail requires an elevated visual aesthetic that mirrors the physical luxury showroom experience. Paras Jewellers needed a digital showcase to display intricate craftsmanship, protect high-resolution photography from unauthorized reproduction, and allow bridal parties to schedule private showroom viewing appointments.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">2. What We Built</h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> High-resolution zoom galleries displaying intricate gold filigree, diamond clarity, and gem cuts.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> Private VIP appointment scheduler for customized bridal consultations.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> Direct WhatsApp concierge connection for bullion inquiries and bespoke design estimates.</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-500 italic">
                <span className="font-bold text-navy-900 block not-italic mb-1">Client Feedback</span>
                Client testimonial pending formal publication approval. Platform active and verified at parasjewellers.in.
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Related Services</span>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services/website-development" className="text-xs font-bold text-accent-600 hover:underline">
                    Website Development →
                  </Link>
                  <Link href="/services/custom-software-development" className="text-xs font-bold text-accent-600 hover:underline">
                    Custom Software Development →
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
