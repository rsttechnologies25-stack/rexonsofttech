import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Cpu, 
  ShieldCheck, 
  FileSpreadsheet, 
  Clock, 
  BarChart3, 
  Workflow 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom ERP Development Company in Chennai | RexonSoftTech",
  description: "Bespoke ERP software development for Indian manufacturers, distributors, and steel fabrication yards. Eliminate Excel bottlenecks with 100% tailored workflow systems.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/erp-development",
  },
  openGraph: {
    title: "Custom ERP Development Company in Chennai | RexonSoftTech",
    description: "Tailored enterprise ERP architecture engineered for Indian SMBs. Complete workflow fit, GST e-invoicing, multi-warehouse batch tracking, and zero per-seat license fees.",
    url: "https://rexonsofttech.in/services/erp-development",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Custom ERP Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom ERP Development Company in Chennai | RexonSoftTech",
    description: "Bespoke ERP software engineered around your exact manufacturing and billing workflows.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function ERPDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does a custom ERP differ from off-the-shelf software like SAP or Tally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Off-the-shelf ERP platforms enforce rigid generic workflows and charge perpetual per-user licensing fees. Custom ERP is engineered around your exact operational routines, models your real shop floor procedures, and gives you 100% source code ownership with zero recurring user penalties."
        }
      },
      {
        "@type": "Question",
        "name": "How is legacy data migrated from Excel and Tally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our engineering team cleanses, deduplicates, and migrates existing customer ledgers, supplier balances, and inventory masters from Excel sheets and Tally exports into a high-performance relational database with zero downtime."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical deployment timeline for a custom ERP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Departmental ERP modules (such as Billing and Inventory) deploy in 2 to 4 weeks. Comprehensive multi-plant enterprise ERP systems typically deploy within 6 to 10 weeks, accompanied by staff onboarding and dedicated SLA maintenance."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rexonsofttech.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Custom ERP Development", "item": "https://rexonsofttech.in/services/erp-development" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full">
              Flagship Enterprise Offering
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Custom ERP Software Development in Chennai
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We design, architect, and deploy bespoke ERP systems built around your exact shop floor protocols, inventory registers, and GST billing workflows—with 100% data ownership.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Schedule an ERP Discovery Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20interested%20in%20custom%20ERP%20development%20for%20our%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} />
                Discuss on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  The Problem With Generic ERPs
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-snug">
                  Why Off-the-Shelf Software Fails Growing Indian Enterprises
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Most commercial ERP platforms were engineered for Western corporations with standardized assembly chains. When Indian manufacturing plants, steel stockists, or wholesale distributors attempt to force their unique operational routines into rigid software templates, three things happen:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employees abandon the software and secretly manage work orders on unmonitored Excel sheets.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Per-seat license costs escalate every time you hire administrative or warehouse floor staff.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Statutory GST e-invoicing and e-way bill generation require awkward manual exports between tools.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-5">
                <h3 className="text-lg font-bold text-navy-900 flex items-center">
                  <Workflow className="w-5 h-5 text-accent-500 mr-2" />
                  The RexonSoftTech Custom ERP Advantage
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-navy-900 text-sm">100% Tailored Business Logic</h4>
                    <p className="mt-1">Every screen, button, and report matches the exact terminology and procedures your team uses daily.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-navy-900 text-sm">Zero Per-User Licensing Fees</h4>
                    <p className="mt-1">Deploy across 10 or 1,000 employees with full source code and database ownership.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-navy-900 text-sm">Native Indian GST Automation</h4>
                    <p className="mt-1">Auto CGST/SGST/IGST splits, real-time E-Way bill generation, and one-click GSTR filing digests.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Breakdown */}
        <section className="py-20 bg-lightBg border-y border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                End-to-End Enterprise ERP Modules
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Modular architecture engineered to integrate procurement, inventory, production, and accounts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Warehouse & Inventory</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bin-and-rack mapping, batch number traceability, heat code logging for metals, barcode scanning, and auto reorder triggers.
                </p>
                <Link href="/erp/inventory-management" className="text-xs font-bold text-accent-600 hover:underline inline-flex items-center pt-2">
                  Inventory ERP Module →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">GST Billing & Accounts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Instant invoice dispatch with QR payment codes, multi-currency support, customer ledger reconciliations, and automated GSTR summaries.
                </p>
                <Link href="/erp/gst-billing" className="text-xs font-bold text-accent-600 hover:underline inline-flex items-center pt-2">
                  GST Billing Engine →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Steel Fabrication Workflows</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mill test certificate tracking, remnant scrap reuse logging, out-sourced vendor job work challans, and stage-gate inspection logs.
                </p>
                <Link href="/erp/steel-fabrication" className="text-xs font-bold text-accent-600 hover:underline inline-flex items-center pt-2">
                  Steel Yard Architecture →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Checklist */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadMagnetSection />
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              Custom ERP Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How does a custom ERP differ from off-the-shelf software like SAP or Tally?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Off-the-shelf ERP platforms enforce rigid generic workflows and charge perpetual per-user licensing fees. Custom ERP is engineered around your exact operational routines, models your real shop floor procedures, and gives you 100% source code ownership with zero recurring user penalties.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How is legacy data migrated from Excel and Tally?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our engineering team cleanses, deduplicates, and migrates existing customer ledgers, supplier balances, and inventory masters from Excel sheets and Tally exports into a high-performance relational database with zero operational downtime.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What is the typical deployment timeline for a custom ERP?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Departmental ERP modules (such as Billing and Inventory) deploy in 2 to 4 weeks. Comprehensive multi-plant enterprise ERP systems typically deploy within 6 to 10 weeks, accompanied by staff onboarding and dedicated SLA maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
