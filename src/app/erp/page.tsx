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
  FileSpreadsheet, 
  BarChart3, 
  ShieldCheck, 
  Factory, 
  Box, 
  Receipt,
  Truck,
  Store,
  HardHat,
  Workflow,
  Building2,
  Wrench
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom ERP Software Architecture in Chennai",
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
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/erp#service",
    "name": "Enterprise Resource Planning (ERP) Engineering",
    "serviceType": "Custom Enterprise ERP Architecture & Implementation",
    "description": "Custom ERP development for Indian enterprises across manufacturing, wholesale distribution, retail chains, and construction infrastructure with GST compliance and zero user licensing fees.",
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
      "name": "Industry ERP Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manufacturing & Industrial Engineering ERP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wholesale Trading & Multi-Warehouse B2B ERP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Branch Retail & Point-of-Sale (POS) ERP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction & Infrastructure Project Operations ERP"
          }
        }
      ]
    }
  };

    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who provides custom ERP software development in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech is a premier custom ERP software development company based in Anna Nagar, Chennai. RexonSoftTech engineers bespoke ERP systems for manufacturing plants, structural steel yards, multi-warehouse distributors, and retail chains across Ambattur, Guindy, Sriperumbudur, and Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        "name": "What does custom ERP software development cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom ERP development in India typically ranges from ₹2.5 Lakhs for focused departmental modules (such as Inventory, Billing, and Job Work) to ₹8–18 Lakhs for comprehensive multi-plant enterprise ERP systems. RexonSoftTech provides transparent milestone-based pricing with 100% source code ownership and zero recurring per-user licensing fees."
        }
      },
      {
        "@type": "Question",
        "name": "How does custom ERP differ from off-the-shelf software like SAP, Tally, or Zoho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Off-the-shelf software imposes rigid generic workflows and charges perpetual per-user monthly subscription penalties. Custom ERP is engineered around your exact manufacturing protocols, bin-level warehouse layouts, and dealer credit structures, providing 100% data ownership, custom GST e-invoicing, and zero per-seat fees."
        }
      },
      {
        "@type": "Question",
        "name": "How long does custom ERP implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focused ERP modules typically deploy within 2 to 4 weeks. Full-scale multi-plant enterprise ERP solutions deploy in 6 to 10 weeks, including database architecture, legacy Excel/Tally data migration, user acceptance testing (UAT), and on-site staff training."
        }
      },
      {
        "@type": "Question",
        "name": "Who needs custom ERP software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Growing enterprises with 15 to 500+ employees that have outgrown Excel spreadsheets or basic accounting software need custom ERP. This includes discrete manufacturers, structural steel fabricators, wholesale distributors with multiple warehouses, and multi-branch retail operations."
        }
      },
      {
        "@type": "Question",
        "name": "How do you evaluate and choose the right ERP provider in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To choose the right ERP provider, verify: (1) 100% full source code and database ownership, (2) proven engineering experience in your specific industry vertical, (3) direct native integration with Indian GST e-invoicing and e-way bill portals, (4) local Chennai engineering support for on-site onboarding, and (5) fixed-milestone pricing with no hidden per-seat licensing penalties."
        }
      }
    ]
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-br from-[#260E22] via-[#381932] to-[#260E22] text-[#FFF3E6] py-20 border-b border-[#FFF3E6]/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFF3E6]/5 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-[#FFF3E6] uppercase tracking-widest bg-[#FFF3E6]/10 border border-[#FFF3E6]/20 px-4 py-1.5 rounded-full">
              Flagship ERP Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFF3E6] leading-tight">
              Enterprise Resource Planning (ERP) Solutions
            </h1>
            <p className="text-base sm:text-lg text-[#EAD8C7] max-w-2xl mx-auto leading-relaxed">
              Explore specialized ERP engines custom-engineered for regional manufacturing facilities, steel yards, multi-warehouse distributors, and retail counters.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-[#FFF3E6] hover:bg-[#FCE9D7] text-[#381932] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Request an ERP Blueprint <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20interested%20in%20an%20ERP%20consultation." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Declarative AI Answer Snippet */}
        <section className="bg-[#2D1328] border-b border-[#FFF3E6]/10 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-[#381932] rounded-2xl border border-[#FFF3E6]/20 shadow-md flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF3E6]/10 text-[#FFF3E6] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[#EAD8C7] uppercase tracking-widest block">
                  Quick Answer • Enterprise ERP Architecture
                </span>
                <p className="text-sm font-semibold text-[#FFF3E6] leading-relaxed">
                  <strong>RexonSoftTech Enterprise ERP</strong> delivers modular, custom-engineered resource planning systems for Indian manufacturing facilities, wholesale distributors, retail chains, and construction contractors. Built around your exact shop-floor protocols, inventory bins, and billing workflows, our ERP architecture includes native GST e-invoicing, automated multi-warehouse reconciliation, and 100% source code ownership with zero recurring per-user licensing fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FFF3E6]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#381932]">
                Specialized ERP Engines
              </h2>
              <p className="text-xs sm:text-sm text-[#5D4356]">
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

        {/* Cross-Industry ERP Capabilities */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Cross-Sector Specialization
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Tailored ERP Systems Across Key Indian Industry Sectors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Custom operational logic engineered for your sector&apos;s exact procurement, production, and distribution realities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sector 1: Manufacturing & Industrial */}
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Manufacturing & Industrial Engineering</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored for CNC workshops, automotive component vendors, electrical assembly plants, plastics, and precision engineering units across Ambattur, Guindy, Sriperumbudur, and Coimbatore.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Multi-Level BOM & Routing:</strong> Dynamic sub-assemblies, machine run-time allocation, and scrap loss calculation.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Job-Work & Outward Challans:</strong> Real-time tracking of raw material dispatched to third-party heat treatment or coating vendors.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Stage-Gate Quality Control:</strong> Inward inspection logs, line rejection tracking, and Mill Test Certificate (MTC) archiving.</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200/80">
                  <Link href="/erp/steel-fabrication" className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 hover:underline">
                    Explore Steel & Fabrication ERP Architecture →
                  </Link>
                </div>
              </div>

              {/* Sector 2: Trading & Wholesale Distribution */}
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Wholesale Trading & B2B Distribution</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Built for electronic component importers, industrial equipment distributors, FMCG wholesalers, and dealer networks operating across regional depot networks.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Multi-Depot Stock Synchronization:</strong> Real-time in-transit transfer challans with barcode verification at receiving branch.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Dealer Credit & Tiered Pricing:</strong> Dynamic price books by dealer tier, credit day limits, and automated WhatsApp balance notices.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Batch Expiry & Serial Tracking:</strong> Automated FIFO dispatch enforcement preventing aged inventory write-offs.</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200/80">
                  <Link href="/case-studies/vinod-computers" className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 hover:underline">
                    View Hardware Distribution Case Study →
                  </Link>
                </div>
              </div>

              {/* Sector 3: Multi-Branch Retail & Commerce */}
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Multi-Branch Retail & Point of Sale (POS)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineered for retail chains, jewellery showrooms, electronics stores, and hardware outlets needing high-speed billing and consolidated headquarters auditing.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sub-Second Counter Billing:</strong> Fast barcode check-out with instant dynamic UPI QR codes and thermal receipt printing.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Centralized Master Catalog:</strong> Centrally update prices and schemes across all retail branches in real time.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Daily Cashier Day-End Audits:</strong> Cash drawer reconciliation, digital payments digest, and automated WhatsApp sales reports.</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-x-4 gap-y-1">
                  <Link href="/case-studies/paras-jewellers" className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 hover:underline">
                    Paras Jewellers Case Study →
                  </Link>
                  <Link href="/case-studies/vinod-electronics" className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 hover:underline">
                    Vinod Electronics Case Study →
                  </Link>
                </div>
              </div>

              {/* Sector 4: Construction & Infrastructure Operations */}
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Construction & Infrastructure Operations</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineered for civil engineering contractors, EPC infrastructure firms, structural fabricators, and commercial interior builders.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Site Material Allocation:</strong> Requisition tracking, dispatch receipts, and concrete/steel site consumption audits.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Equipment & Machinery Logs:</strong> Diesel consumption logs, daily machine working hours, and preventive maintenance triggers.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Milestone & RA Billing:</strong> Running Account (RA) contractor billing, retention money ledgers, and TDS compliance tracking.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-accent-500 uppercase tracking-wider block">Enterprise Flexibility</span>
                <p className="text-sm font-bold text-navy-900">Need an ERP tailored for your specific operating model or factory floor?</p>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/services/erp-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Full ERP Services →
                </Link>
                <a href="#contact" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-4 py-2.5 rounded-xl transition-all shadow-sm">
                  Schedule Blueprint Call <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

                {/* Comparison Matrix: Custom ERP vs Tier-1 vs Spreadsheets */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Architectural Evaluation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Custom ERP vs. Tier-1 ERP Suites vs. Spreadsheets
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Compare workflow fit, cost structures, and operational control to make an informed decision for your business.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-900">
                    <th className="p-4 sm:p-5 font-bold">Decision Criteria</th>
                    <th className="p-4 sm:p-5 font-bold text-accent-400 bg-navy-900/80">RexonSoftTech Custom ERP</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-300">Tier-1 ERP (SAP / Oracle)</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-300">Tally / Spreadsheets</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Workflow Alignment</td>
                    <td className="p-4 sm:p-5 font-semibold text-accent-700 bg-accent-50/30">100% Tailored to Shop-Floor & Godowns</td>
                    <td className="p-4 sm:p-5">Rigid generic processes require internal re-engineering</td>
                    <td className="p-4 sm:p-5 text-rose-600">Disconnected Excel silos, manual double-entry</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Licensing Model</td>
                    <td className="p-4 sm:p-5 font-semibold text-accent-700 bg-accent-50/30">One-time milestone investment, 0 user fees</td>
                    <td className="p-4 sm:p-5">Expensive recurring monthly per-seat licenses</td>
                    <td className="p-4 sm:p-5">Single-user or local LAN license limits</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Source Code & IP</td>
                    <td className="p-4 sm:p-5 font-semibold text-accent-700 bg-accent-50/30">100% Client Ownership, zero vendor lock-in</td>
                    <td className="p-4 sm:p-5">Proprietary vendor lock-in, recurring maintenance</td>
                    <td className="p-4 sm:p-5">Proprietary black-box desktop files</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">GST E-Invoicing & E-Way Bills</td>
                    <td className="p-4 sm:p-5 font-semibold text-accent-700 bg-accent-50/30">Native automated API generation at invoice save</td>
                    <td className="p-4 sm:p-5">Requires costly third-party GSP connector add-ons</td>
                    <td className="p-4 sm:p-5">Manual JSON upload or external browser utility</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Implementation Timeline</td>
                    <td className="p-4 sm:p-5 font-semibold text-accent-700 bg-accent-50/30">4 to 10 Weeks with phased go-live</td>
                    <td className="p-4 sm:p-5">6 to 18 Months high-friction rollout</td>
                    <td className="p-4 sm:p-5">Immediate but permanently fragmented</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Question-Based AEO Knowledge Section & FAQs */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Knowledge Base & Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Frequently Asked Questions About Custom ERP
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Clear, direct answers to common questions about ERP planning, budgeting, and provider evaluation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-base sm:text-lg">
                  Who provides custom ERP software development in Chennai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>RexonSoftTech</strong> is a full-service custom ERP software engineering company headquartered in Anna Nagar, Chennai. RexonSoftTech designs, architects, and implements bespoke ERP systems for industrial manufacturers, steel fabrication yards, wholesale distributors, and multi-branch retail enterprises across Chennai (Ambattur, Guindy, Sriperumbudur, Oragadam) and Tamil Nadu.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-base sm:text-lg">
                  What does custom ERP software development cost in India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Custom ERP development in India typically costs between <strong>₹2.5 Lakhs and ₹6 Lakhs</strong> for focused operational modules (such as Inventory Control, GST Billing, and Outward Job-Work Challans) and <strong>₹8 Lakhs to ₹18 Lakhs</strong> for full-scale, multi-plant enterprise ERP systems. RexonSoftTech provides milestone-based fixed contracts with 100% source code ownership and zero recurring user licensing penalties.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-base sm:text-lg">
                  What is the difference between custom ERP and off-the-shelf software?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Off-the-shelf ERP platforms (such as SAP, Oracle, or generic accounting apps) enforce predetermined generic workflows and require costly per-user monthly subscription fees. Custom ERP is engineered from the ground up around your exact production protocols, warehouse bin locations, and commercial customer pricing structures—giving your business complete data sovereignty and zero seat-license fees.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-base sm:text-lg">
                  How long does custom ERP development take from kick-off to deployment?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Departmental modules typically deploy in <strong>2 to 4 weeks</strong>. Full-scale multi-plant enterprise ERP solutions deploy in <strong>6 to 10 weeks</strong>, following a phased milestone roadmap: workflow discovery, database design, iterative module development, legacy data migration from Excel/Tally, user acceptance testing, and on-site staff training.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-base sm:text-lg">
                  How should a company evaluate and choose the right ERP provider in Chennai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When selecting an ERP provider, evaluate: (1) <strong>Full IP & Source Code Ownership:</strong> Ensure the client owns the software with zero proprietary lock-in; (2) <strong>Domain Experience:</strong> Look for demonstrable engineering experience in your specific industry (e.g., steel, trading, retail); (3) <strong>Statutory Integration:</strong> Verify automated integration with the Indian GST e-invoicing and e-way bill portals; and (4) <strong>Local On-Site Support:</strong> Choose a Chennai-based engineering partner that provides hands-on staff onboarding.
                </p>
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
