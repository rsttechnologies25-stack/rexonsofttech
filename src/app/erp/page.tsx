import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Layers, CheckCircle2, ArrowRight, Database, FileSpreadsheet, BarChart3, ShieldCheck, Factory, Box, Receipt } from "lucide-react";

export const metadata: Metadata = {
  title: "ERP Solutions Hub | Custom ERP Software Architecture Chennai | RexonSoftTech",
  description: "Explore RexonSoftTech's custom ERP solutions: Steel Fabrication ERP, Multi-Warehouse Inventory Management, and GST Billing Automation for Indian enterprises.",
  alternates: {
    canonical: "https://rexonsofttech.in/erp",
  },
  openGraph: {
    title: "ERP Solutions Hub | RexonSoftTech Chennai",
    description: "Tailored enterprise ERP architecture engineered for Indian SMBs. Complete workflow fit, GST e-invoicing, and 100% source code ownership.",
    url: "https://rexonsofttech.in/erp",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "ERP Solutions Hub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Solutions Hub | RexonSoftTech Chennai",
    description: "Explore tailored ERP modules engineered around your exact manufacturing and billing workflows.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function ERPHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "ERP Solutions", "item": "https://rexonsofttech.in/erp" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full">
              Flagship ERP Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Enterprise Resource Planning (ERP) Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore specialized ERP engines custom-engineered for regional manufacturing facilities, steel yards, multi-warehouse distributors, and retail counters.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Request an ERP Blueprint <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20interested%20in%20an%20ERP%20consultation." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Specialized ERP Engines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Each module is purpose-built to eliminate paper registers, Excel formulas, and disconnected accounting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Steel Fabrication ERP */}
              <div className="p-8 bg-slate-50 border border-slate-200/80 rounded-3xl space-y-4 hover:border-accent-500/50 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Steel Fabrication ERP</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Heat code tracking, mill test certificates, off-cut remnant recovery, and outsourced vendor job work challans.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-2 pt-2">
                    <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2" /> GRN heat number logging</li>
                    <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2" /> Remnant scrap inventory</li>
                    <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2" /> Galvanizing & job work gates</li>
                  </ul>
                </div>
                <Link href="/erp/steel-fabrication" className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 pt-4">
                  Explore Steel Fabrication ERP →
                </Link>
              </div>

              {/* Multi-Warehouse Inventory */}
              <div className="p-8 bg-slate-50 border border-slate-200/80 rounded-3xl space-y-4 hover:border-accent-500/50 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-accent-500 flex items-center justify-center">
                    <Box className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Multi-Warehouse Inventory</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bin-and-rack location mapping, barcode scanning, batch expiry tracking, and automated reorder alerts.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-2 pt-2">
                    <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2" /> Multi-location stock transfer</li>
                    <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2" /> FIFO batch enforcement</li>
                    <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2" /> Automated reorder thresholds</li>
                  </ul>
                </div>
                <Link href="/erp/inventory-management" className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 pt-4">
                  Explore Inventory ERP Module →
                </Link>
              </div>

              {/* GST Billing & Accounting */}
              <div className="p-8 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-4 hover:border-accent-500/50 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">GST Billing & Accounting</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Instant tax calculation, GST e-invoicing QR generation, customer ledger balances, and GSTR export preparation.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-2 pt-2">
                    <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2" /> Auto CGST/SGST/IGST tax splits</li>
                    <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2" /> UPI payment QR on invoices</li>
                    <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2" /> GSTR-1 & 3B ready summaries</li>
                  </ul>
                </div>
                <Link href="/erp/gst-billing" className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 pt-4">
                  Explore GST Billing Engine →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadMagnetSection />
        </section>

        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
