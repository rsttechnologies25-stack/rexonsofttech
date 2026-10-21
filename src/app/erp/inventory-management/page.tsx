import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Box, 
  ArrowRight, 
  CheckCircle2, 
  QrCode, 
  Bell, 
  MapPin, 
  Truck,
  Layers,
  Database,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Multi-Warehouse Inventory ERP System | RexonSoftTech Chennai",
  description: "Multi-warehouse inventory management ERP in Chennai. Bin-and-rack location mapping, FIFO batch tracking, barcode scanning, and automated WhatsApp reorder alerts.",
  alternates: {
    canonical: "https://rexonsofttech.in/erp/inventory-management",
  },
  openGraph: {
    title: "Multi-Warehouse Inventory ERP System | RexonSoftTech Chennai",
    description: "Centralized warehouse inventory management software with real-time stock balances across regional branches.",
    url: "https://rexonsofttech.in/erp/inventory-management",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Inventory Management ERP Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Warehouse Inventory ERP System | RexonSoftTech Chennai",
    description: "Real-time multi-location inventory and batch tracking software in Chennai.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function InventoryERPPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/erp/inventory-management#service",
    "name": "Multi-Warehouse Inventory ERP System",
    "serviceType": "Warehouse Management & Inventory ERP Engineering",
    "description": "Custom inventory ERP software for multi-location businesses in Chennai, featuring bin-and-rack mapping, FIFO batch tracking, barcode scanning, and automated procurement reorders.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://rexonsofttech.in/#local-business",
      "name": "RexonSoftTech",
      "url": "https://rexonsofttech.in",
      "telephone": "+91 78716 54777",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Block I, 5/1049, West, Aishwarya Colony, Thangam Colony, Anna Nagar",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600040",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Chennai" },
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Inventory ERP Features",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Location Rack & Bin Coordinate Mapping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FIFO/LIFO Heat & Batch Expiry Tracking"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Barcode Check-In & Inter-Branch Transfer Challans"
          }
        }
      ]
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://rexonsofttech.in/erp/inventory-management#software",
    "name": "RexonSoft Storage & Warehouse ERP",
    "operatingSystem": "Web, Windows, Android, iOS",
    "applicationCategory": "BusinessApplication",
    "softwareVersion": "2.1",
    "description": "Multi-location inventory and warehouse management system engineered by RexonSoftTech for Indian manufacturers and distributors. Features bin/rack coordinate mapping, barcode scanning, FIFO/batch tracking, and automated stock replenishment.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "Custom Quote",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "@id": "https://rexonsofttech.in/#organization",
        "name": "RexonSoftTech"
      }
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://rexonsofttech.in/#organization",
      "name": "RexonSoftTech"
    },
    "featureList": [
      "Multi-location warehouse and depot tracking",
      "Bin and rack coordinate mapping with real-time stock levels",
      "Handheld and smartphone camera barcode scanning",
      "FIFO/LIFO heat and batch expiration audits",
      "Automated purchase order reorder threshold triggers",
      "Inter-branch stock transfer challans with in-transit reconciliation"
    ]
  };

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
      },
      {
        "@type": "Question",
        "name": "Can we configure different reorder levels for each regional depot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can define customized safety buffers, reorder minimums, and lead times per warehouse, triggering automated replenishment alerts on WhatsApp or email."
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full">
              Warehouse Operations Engine
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Multi-Warehouse Inventory ERP System in Chennai
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

        {/* Declarative AI Answer Snippet */}
        <section className="bg-slate-50 border-b border-slate-200/80 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-accent-600 uppercase tracking-widest block">
                  Quick Answer • Platform Overview
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>RexonSoft Storage & Warehouse ERP</strong> is an enterprise inventory management platform engineered for Indian manufacturers, distributors, and logistics hubs. It delivers real-time multi-warehouse stock synchronization, rack-and-bin coordinate mapping, mobile barcode check-in, FIFO and batch expiry tracking, and automated purchase reorder triggers with 100% source code ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Warehouse Precision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Total Control Across Regional Warehouses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Eliminate ghost stock, misplaced cartons, and costly rush order stockouts with real-time barcode traceability.
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
                  Print and scan custom 1D/2D QR labels on inbound shipments and verify pick-lists during packaging to eliminate mis-shipments.
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

            {/* Industrial Corridors & Depot Context */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Hub Deployments
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Engineered for Chennai Logistics & Industrial Clusters
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Whether managing distribution godowns in <strong>Madhavaram and Red Hills</strong>, industrial spare stockrooms across <strong>Ambattur and Sriperumbudur</strong>, or multi-branch wholesale yards in <strong>Guindy and Tamil Nadu</strong>, our ERP module ensures 100% stock reconciliation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Batch & Expiry Traceability</h4>
                  <p className="text-slate-600 mt-1">Strict FIFO enforcement for perishable items and heat-number tracking for industrial fabrication materials.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">In-Transit Transfer Challans</h4>
                  <p className="text-slate-600 mt-1">Full audit trail for goods moving between godowns with source deduction and receiving destination confirmation.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Instant Ledger & GST Sync</h4>
                  <p className="text-slate-600 mt-1">Every physical stock movement automatically recalculates inventory asset value and syncs with billing accounts.</p>
                </div>
              </div>
            </div>

            {/* Real-World Hardware & Component Deployment */}
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Inventory in Action
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Featured Hardware & Catalog Case Study
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Real-world deployment of digital cataloging and component management in Chennai.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/90 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-[10px] font-bold text-accent-600 uppercase tracking-wider block">IT Hardware & Service Infrastructure</span>
                  <h4 className="font-bold text-navy-900 text-lg">Vinod Computers — IT Hardware Portal & Component Showcase</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    How RexonSoftTech built an IT hardware catalog and service inquiry portal for Vinod Computers in Chennai, streamlining hardware inquiries, service ticketing, and customer component verification.
                  </p>
                </div>
                <Link href="/case-studies/vinod-computers" className="inline-flex items-center text-xs sm:text-sm font-bold text-white bg-accent-500 hover:bg-accent-600 px-5 py-2.5 rounded-xl transition-all shadow-sm flex-shrink-0">
                  View Case Study <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Read the Technical Article</span>
                <p className="text-sm font-bold text-navy-900">Inventory Management for Multi-Warehouse Businesses: Beyond Excel Spreadsheets</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/erp/gst-billing" className="text-xs font-bold text-accent-600 hover:underline">
                  GST Billing Engine →
                </Link>
                <Link href="/blog/inventory-management-software-multi-warehouse" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-xl transition-all shadow-sm">
                  Read Guide <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              Inventory Management ERP FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Does the system support handheld barcode scanners and mobile cameras?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. The inventory module supports both standard USB/Bluetooth handheld barcode scanners and native smartphone camera scanning for fast check-in and dispatch.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How are stock transfers between warehouses recorded?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Inter-warehouse transfers generate an In-Transit Transfer Challan with automated stock deduction at source and reconciliation upon barcode scan verification at the destination branch.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Can we configure different reorder levels for each regional depot?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. You can define customized safety buffers, reorder minimums, and lead times per warehouse, triggering automated replenishment alerts on WhatsApp or email.
                </p>
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
