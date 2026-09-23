import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Box, ArrowRight, CheckCircle2, QrCode, Bell, MapPin, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Multi-Warehouse Inventory ERP System | Batch & Serial Tracking | RexonSoftTech",
  description: "Custom inventory management software for multi-location businesses in India. Bin-and-rack location mapping, FIFO batch tracking, barcode scans, and WhatsApp reorder alerts.",
  alternates: {
    canonical: "https://rexonsofttech.in/erp/inventory-management",
  },
  openGraph: {
    title: "Multi-Warehouse Inventory ERP System | RexonSoftTech",
    description: "Centralized warehouse inventory management software with real-time stock balances across regional branches.",
    url: "https://rexonsofttech.in/erp/inventory-management",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Inventory Management ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Warehouse Inventory ERP System | RexonSoftTech",
    description: "Real-time multi-location inventory and batch tracking software.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function InventoryERPPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does the system support handheld barcode scanners and mobile cameras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The inventory module supports both standard USB/Bluetooth handheld barcode scanners and native smartphone camera scanning for fast check-in and dispatch."
        }
      },
      {
        "@type": "Question",
        "name": "How are stock transfers between warehouses recorded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Inter-warehouse transfers generate an In-Transit Transfer Challan with automated stock deduction at source and reconciliation upon barcode scan verification at the destination branch."
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
      { "@type": "ListItem", "position": 3, "name": "Inventory Management", "item": "https://rexonsofttech.in/erp/inventory-management" }
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
              Warehouse Operations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Multi-Warehouse Inventory ERP Module
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Real-time multi-location stock visibility, rack-and-bin level mapping, FIFO batch tracking, and automated procurement alerts.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Request Inventory Demo <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20interested%20in%20the%20Inventory%20ERP%20Module." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Total Control Across Regional Warehouses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Eliminate ghost stock, misplaced cartons, and costly rush order stockouts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Rack & Bin Location Mapping</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pinpoint exact shelf, aisle, and bin coordinates for every SKU, slashing picker transit time by up to 40%.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Barcode Check-In & Dispatch</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Print and scan custom 1D/2D QR labels on inbound shipments and verify pick-lists during packaging.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Automated WhatsApp Reorder Triggers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Instant alerts sent to purchase managers when stock dips beneath safety thresholds, complete with supplier PO drafts.
                </p>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Read the Technical Article</span>
                <p className="text-sm font-bold text-navy-900">Inventory Management for Multi-Warehouse Businesses: Beyond Excel Spreadsheets</p>
              </div>
              <Link href="/blog/inventory-management-software-multi-warehouse" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-5 py-2.5 rounded-xl transition-all shadow-sm flex-shrink-0">
                Read Inventory Guide <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
