import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Factory, ArrowRight, CheckCircle2, ShieldCheck, FileCheck, Layers, Scale, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Steel Fabrication ERP Software | Heat Tracking & Remnant Management | RexonSoftTech",
  description: "Specialized ERP software for steel fabricators and metal yards in India. GRN heat code tracking, remnant scrap inventory recovery, job work challans, and GST compliance.",
  alternates: {
    canonical: "https://rexonsofttech.in/erp/steel-fabrication",
  },
  openGraph: {
    title: "Steel Fabrication ERP Software | RexonSoftTech",
    description: "End-to-end ERP engineered for structural steel yards, PEB fabricators, and cutting centers. Track raw plates, beams, heat numbers, and remnant scrap.",
    url: "https://rexonsofttech.in/erp/steel-fabrication",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Steel Fabrication ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Fabrication ERP Software | RexonSoftTech",
    description: "Heat code tracking, scrap recovery, and job work management for steel fabricators.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function SteelFabricationERPPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the ERP track heat numbers and mill test certificates (MTC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every steel batch arriving at the yard is assigned a digital Goods Receipt Note (GRN) linked to the manufacturer's Mill Test Certificate. When sections or plates are cut, the ERP automatically maps heat codes to the finished fabricated component."
        }
      },
      {
        "@type": "Question",
        "name": "How are remnant off-cuts managed in inventory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a full plate or beam is nested and cut, off-cut remnant pieces exceeding threshold dimensions are automatically cataloged as usable remnant inventory with exact measurements, preventing unnecessary new plate procurement."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "ERP Solutions", "item": "https://rexonsofttech.in/erp" },
      { "@type": "ListItem", "position": 3, "name": "Steel Fabrication ERP", "item": "https://rexonsofttech.in/erp/steel-fabrication" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full">
              Heavy Engineering & Manufacturing
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Steel Fabrication ERP Software
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Purpose-built for steel service centers, pre-engineered building (PEB) fabricators, and cutting shops. Complete heat code traceability from mill gate to customer delivery.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Request Steel ERP Demo <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20interested%20in%20Steel%20Fabrication%20ERP." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Engineered for Actual Steel Shop Floor Realities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Say goodbye to lost off-cuts, mismatched heat codes, and unmonitored vendor job work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Heat Code & MTC Mapping</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every inbound plate or beam is registered with mill heat number, chemical composition certificate, and physical bay coordinates.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Off-Cut Remnant Recovery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Plate off-cuts are automatically classified by dimensions and returned to active stock, reducing raw material procurement waste by 5%+.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Vendor Job Work Challans</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated delivery challans for out-sourced galvanizing, bending, and blasting with reverse GST tracking and material return reconciliations.
                </p>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Read the Engineering Article</span>
                <p className="text-sm font-bold text-navy-900">ERP for Steel Fabrication: How Custom Software Replaces Paper Registers</p>
              </div>
              <Link href="/blog/erp-for-steel-fabrication-production-management" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-5 py-2.5 rounded-xl transition-all shadow-sm flex-shrink-0">
                Read Steel Article <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
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
