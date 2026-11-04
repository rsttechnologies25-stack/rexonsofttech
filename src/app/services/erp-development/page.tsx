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
  Workflow,
  Server,
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom ERP Development Company in Chennai",
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
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/erp-development#service",
    "name": "Custom ERP Development Services",
    "serviceType": "Enterprise Resource Planning (ERP) Software Engineering",
    "description": "Bespoke ERP software development for Indian manufacturers, distributors, and steel fabrication yards. Tailor-made workflow systems, multi-warehouse inventory, and GST billing with zero per-seat license fees.",
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
      "name": "ERP Development Modules",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manufacturing & Production ERP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Warehouse Inventory Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GST Billing & Automated E-Invoicing Engine"
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
        "name": "Who provides custom ERP development in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech provides end-to-end custom ERP software development in Chennai, based in Anna Nagar (PIN 600040). We engineer tailor-made ERP systems for Tamil Nadu manufacturers, fabricators, distributors, and engineering enterprises with 100% source code ownership and local on-site support."
        }
      },
      {
        "@type": "Question",
        "name": "What does ERP software cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom ERP software costs in India typically range from ₹2.5 Lakhs for focused modular systems (such as Inventory + GST Billing) to ₹8.5 Lakhs+ for comprehensive multi-plant manufacturing and distribution architectures. RexonSoftTech delivers fixed-price milestones with 100% source code ownership and zero recurring user licenses."
        }
      },
      {
        "@type": "Question",
        "name": "How does manufacturing ERP software work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A manufacturing ERP coordinates five critical stages: raw material receipt with weight reconciliation, multi-level Bill of Materials (BOM) explosion, job-work challan tracking with stage-gate QA, finished goods batch barcoding, and automated GST e-invoicing upon dispatch."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between custom ERP and ready-made ERP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ready-made ERP platforms like SAP, Tally, or Zoho enforce rigid generic workflows and charge perpetual per-user licensing fees. Custom ERP is engineered around your exact operational routines, models your real shop floor procedures, and gives you 100% source code ownership with zero recurring user penalties."
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
      },
      {
        "@type": "Question",
        "name": "How to choose the right custom ERP development company in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When evaluating ERP providers in Chennai, verify five criteria: 1) local engineering presence with on-site shop floor study capability, 2) full source code ownership without vendor lock-in, 3) proven experience migrating legacy Excel/Tally data, 4) native support for Indian GST/e-invoicing compliance, and 5) post-launch warranty and SLA support."
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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

        {/* Declarative AI Answer Snippet */}
        <section className="bg-slate-50 border-b border-slate-200/80 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-accent-600 uppercase tracking-widest block">
                  Quick Answer • Custom ERP Definition
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Custom ERP software development</strong> is the engineering of tailored enterprise resource management systems built around an organization&apos;s proprietary manufacturing, inventory, procurement, and accounting workflows. Unlike rigid off-the-shelf software with recurring per-user licensing fees, custom ERP delivers 100% database and source code ownership, zero recurring user penalties, and native integration with Indian statutory compliance including GST e-invoicing and E-Way bills.
                </p>
              </div>
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

        {/* Architecture Comparison Matrix Section */}
        <section className="py-16 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Architectural Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Custom ERP vs. Tier-1 Suites vs. Basic Accounting
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Why manufacturing and distribution enterprises transition from generic packages to tailored ERP architecture.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-900">
                    <th className="p-4 sm:p-5 font-bold">Decision Criteria</th>
                    <th className="p-4 sm:p-5 font-bold text-accent-400 bg-navy-900/80 border-x border-navy-800">
                      RexonSoftTech Custom ERP
                    </th>
                    <th className="p-4 sm:p-5 font-bold">Commercial Tier-1 (SAP / Oracle)</th>
                    <th className="p-4 sm:p-5 font-bold">Basic Accounting (Tally / Zoho)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Operational Logic Alignment</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      100% Bespoke; mirrors real shop floor, BOM, and warehouse workflows
                    </td>
                    <td className="p-4 sm:p-5">Rigid standardized processes; forces business to alter operational routines</td>
                    <td className="p-4 sm:p-5">Basic double-entry ledgers; zero native shop-floor manufacturing modeling</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Licensing & User Costs</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Zero per-user licensing; deploy across unlimited staff & terminals
                    </td>
                    <td className="p-4 sm:p-5">Escalating per-seat licensing fees and mandatory recurring maintenance contracts</td>
                    <td className="p-4 sm:p-5">Annual software subscription or per-company/user renewal licenses</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Manufacturing & Work-Order Fit</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Tailored multi-level BOM, cutting optimization, scrap tracking, and stage-gate audits
                    </td>
                    <td className="p-4 sm:p-5">Heavy, complex configuration requiring months of consultant implementation</td>
                    <td className="p-4 sm:p-5">Not supported natively; requires separate Excel spreadsheets and manual tracking</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Indian Statutory GST Compliance</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Direct automated CGST/SGST/IGST splits, E-Way bills, UPI QR codes, & GSTR digests
                    </td>
                    <td className="p-4 sm:p-5">Requires specialized localization packages, third-party middleware, or manual bridges</td>
                    <td className="p-4 sm:p-5">Built-in GST accounting, but lacks automated shop-floor to invoice integration</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Source Code & Data Ownership</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      100% Client-owned database, code assets, and server hosting control
                    </td>
                    <td className="p-4 sm:p-5">Proprietary vendor cloud lock-in with restricted direct database querying</td>
                    <td className="p-4 sm:p-5">Proprietary data formats; export hurdles and dependency on vendor ecosystem</td>
                  </tr>
                </tbody>
              </table>
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

        {/* Cost Factors & Pricing Guidance */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Investment Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                How Custom ERP Development Costs Are Calculated
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Understanding the technical determinants that shape enterprise ERP scope, rollout timelines, and total cost of ownership in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">1. Operational Modules</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Depth of functional modules: multi-tier BOM, cutting optimization, scrap tracking, job-work challans, and customer credit matrices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">2. Multi-Depot Locations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Single-plant operations vs. distributed multi-warehouse stock transfer challans with centralized headquarter auditing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">3. Hardware & API Bridges</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Integration with weighing scales, barcode/QR scanners, POS thermal printers, GST e-invoicing APIs, and WhatsApp alert gateways.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">4. Data Cleansing & Onboarding</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Extracting and cleansing historical customer ledgers and stock masters from Tally/Excel, plus hands-on staff onboarding.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-600 uppercase tracking-widest">
                Milestone-Driven Fixed Investment
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Unlike global enterprise ERP vendors that charge compounding monthly user subscriptions and steep implementation fees, RexonSoftTech builds custom ERP systems with <strong>fixed-scope milestone pricing</strong> and <strong>100% intellectual property transfer</strong>.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-accent-600 hover:text-accent-700 hover:underline"
                >
                  Request a Transparent ERP Feasibility Proposal <ArrowRight className="w-4 h-4 ml-1" />
                </a>
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
                  Who provides custom ERP development in Chennai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>RexonSoftTech</strong> provides end-to-end custom ERP software development in Chennai, based at Anna Nagar (PIN 600040). We engineer tailor-made ERP systems for Tamil Nadu manufacturers, fabricators, distributors, and engineering enterprises with 100% source code ownership, zero recurring user fees, and dedicated local on-site support.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What does ERP software cost in India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Custom ERP software in India typically costs between <strong>₹2.5 Lakhs and ₹8.5 Lakhs+</strong> depending on system scope (inventory, GST billing, multi-level BOM production, job-work challans, HRMS), number of plants/branches, and hardware/API integrations. RexonSoftTech operates on transparent fixed milestones with zero perpetual per-seat licensing penalties.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How does manufacturing ERP software work?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A manufacturing ERP connects the entire production pipeline into a single database: <strong>1) Raw Material Receipt & Weight Verification</strong>, <strong>2) Multi-Level BOM Explosion</strong> for component planning, <strong>3) Job-Work Challan Dispatch</strong> with vendor reconciliation, <strong>4) Stage-Gate Quality Checks</strong> on the shop floor, and <strong>5) Batch Barcoding with Automated GST E-Invoicing</strong> upon finished dispatch.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What is the difference between custom ERP and ready-made ERP?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ready-made ERP platforms (SAP, Tally, Zoho) enforce rigid generic workflows and charge perpetual per-user licensing fees. Custom ERP is engineered around your exact operational routines, models your real shop floor procedures, and gives you 100% source code ownership with zero recurring user penalties.
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
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How to choose the right custom ERP development company in Chennai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When evaluating ERP development companies in Chennai, look for five key indicators: <strong>1) Local engineering presence</strong> for on-site shop floor study, <strong>2) 100% IP and source code ownership</strong> to avoid vendor lock-in, <strong>3) Proven legacy data migration</strong> capabilities, <strong>4) Native Indian GST & e-invoicing compliance</strong>, and <strong>5) Direct post-launch warranty and SLA support</strong>.
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
