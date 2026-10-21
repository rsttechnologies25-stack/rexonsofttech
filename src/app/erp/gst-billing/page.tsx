import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Receipt, 
  ArrowRight, 
  CheckCircle2, 
  QrCode, 
  FileSpreadsheet, 
  ShieldCheck, 
  DollarSign,
  FileCheck2,
  Zap,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST Billing Software & E-Invoicing Engine | RexonSoftTech Chennai",
  description: "Fast GST billing software in Chennai for Indian SMBs. Auto CGST/SGST/IGST tax splits, instant UPI payment QR codes, GSTR summary digests, and customer ledgers.",
  alternates: {
    canonical: "https://rexonsofttech.in/erp/gst-billing",
  },
  openGraph: {
    title: "GST Billing Software & E-Invoicing Engine | RexonSoftTech Chennai",
    description: "High-speed GST billing engine with instant invoice dispatch, automated tax calculations, and zero recurring subscription fees.",
    url: "https://rexonsofttech.in/erp/gst-billing",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "GST Billing Engine Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Billing Software & E-Invoicing Engine | RexonSoftTech Chennai",
    description: "Automated GST tax calculations, PDF dispatch, and ledger sync for Indian businesses.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function GSTBillingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/erp/gst-billing#service",
    "name": "GST Billing Software & E-Invoicing Engine",
    "serviceType": "GST Compliance & Invoicing Software Development",
    "description": "Automated GST billing, e-invoicing, and customer ledger software engineered for Indian SMBs in Chennai with auto tax splits and zero recurring user licenses.",
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
      "name": "Billing Engine Modules",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intrastate & Interstate Automated GST Tax Calculation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dynamic UPI QR Code Payment Generation on Invoices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "One-Click GSTR-1 and GSTR-3B Summary Digests"
          }
        }
      ]
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://rexonsofttech.in/erp/gst-billing#software",
    "name": "RexonSoft Billing Engine",
    "operatingSystem": "Web, Windows, macOS, Linux, Android, iOS",
    "applicationCategory": "BusinessApplication",
    "softwareVersion": "2.4",
    "description": "Enterprise GST billing and automated invoicing software by RexonSoftTech for Indian businesses. Features automated CGST/SGST/IGST tax splits, dynamic UPI QR payment codes, WhatsApp invoice dispatch, customer ledgers, and zero recurring user licenses.",
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
      "Automated CGST/SGST/IGST tax calculation engine",
      "Dynamic UPI QR code on generated PDF invoices",
      "WhatsApp & email instant invoice dispatch",
      "GSTR-1 and GSTR-3B summary reports",
      "Multi-counter cashier synchronization",
      "100% source code ownership with zero recurring per-user fees"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does the system support interstate and intrastate GST tax calculations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Based on customer delivery state and GSTIN prefix, the software automatically splits tax into CGST + SGST (intrastate) or IGST (interstate) without manual cashier selection."
        }
      },
      {
        "@type": "Question",
        "name": "Can invoices be automatically sent to customers on WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Invoices can be automatically formatted as branded PDFs and dispatched immediately to the customer's WhatsApp number alongside an embedded dynamic UPI payment QR code."
        }
      },
      {
        "@type": "Question",
        "name": "Are there recurring monthly per-user licensing fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Unlike commercial SaaS billing platforms, RexonSoftTech provides 100% source code and database ownership with zero recurring per-user or per-counter penalty fees."
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
      { "@type": "ListItem", "position": 3, "name": "GST Billing Software", "item": "https://rexonsofttech.in/erp/gst-billing" }
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
              Financial Operations Engine
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              GST Billing Software & E-Invoicing Engine in Chennai
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Fast, 100% compliant Indian GST invoicing engine. Automatic tax splits, instant UPI payment QR codes, GSTR summary exports, and customer outstanding ledgers.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Request Billing Demo <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20interested%20in%20GST%20Billing%20Software." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
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
                <Receipt className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-accent-600 uppercase tracking-widest block">
                  Quick Answer • Platform Overview
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>RexonSoft Billing Engine</strong> is an enterprise-grade GST billing and invoicing software engineered for Indian retailers, wholesalers, and manufacturers. It automates intrastate CGST/SGST and interstate IGST tax splits, embeds dynamic instant UPI QR codes on PDF invoices, dispatches bills via WhatsApp, generates GSTR-1 and GSTR-3B summary reports, and eliminates recurring per-user software licensing penalties with complete database ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Compliance Built-In
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Engineered for High-Volume Counter & B2B Billing
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Speed through checkout queues with sub-second invoice generation and instant WhatsApp dispatch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Receipt className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Automatic Tax Splits</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calculates CGST, SGST, and IGST based on the customer&apos;s state code and GSTIN format with zero cashier error.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Dynamic UPI Payment QR</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every printed and WhatsApp PDF invoice features a dynamic UPI QR preloaded with exact invoice bill amounts for faster payment collection.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">One-Click GSTR Exports</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Export reconciled monthly sales registers pre-formatted for seamless upload into standard GST filing software.
                </p>
              </div>
            </div>

            {/* Local Context & Commercial Scope */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Retail & Wholesale Billing
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Customized for Chennai Wholesale & Retail Businesses
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  From high-volume trading markets in <strong>George Town and Sowcarpet</strong> to multi-branch retail stores in <strong>Anna Nagar, T. Nagar, and Tambaram</strong>, our billing engine handles thousands of daily transactions without lag.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Customer Outstanding Ledgers</h4>
                  <p className="text-slate-600 mt-1">Real-time credit tracking with automated WhatsApp payment reminder alerts and account statement PDFs.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Multi-Counter Sync</h4>
                  <p className="text-slate-600 mt-1">Run multiple cashiers and billing terminals simultaneously against a single centralized inventory database.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Thermal & A4 Invoice Formats</h4>
                  <p className="text-slate-600 mt-1">Seamless printing on 3-inch POS thermal receipt rolls or standard A4/A5 laser invoices.</p>
                </div>
              </div>
            </div>

            {/* Real-World Retail & Billing Deployments */}
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Proven Field Deployments
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Real-World Retail & Showcase Deployments
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  See how Chennai retailers and distributors leverage RexonSoftTech digital platforms for operations and customer transactions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 border border-slate-200/90 rounded-2xl flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-accent-600 uppercase tracking-wider block">Luxury Retail & Jewellery</span>
                    <h4 className="font-bold text-navy-900 text-base">Paras Jewellers</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Custom digital showcase and product catalog engineered for high-value gold and bridal jewellery collections in Chennai, enabling instant customer inquiries and digital catalog browsing.
                    </p>
                  </div>
                  <Link href="/case-studies/paras-jewellers" className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 hover:underline">
                    Read Paras Jewellers Case Study <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/90 rounded-2xl flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-accent-600 uppercase tracking-wider block">Consumer Tech & Multi-Brand Retail</span>
                    <h4 className="font-bold text-navy-900 text-base">Vinod Electronics</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      High-speed digital product showcase and consumer electronics retail catalog featuring multi-brand specifications, WhatsApp order inquiries, and fast mobile navigation.
                    </p>
                  </div>
                  <Link href="/case-studies/vinod-electronics" className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 hover:underline">
                    Read Vinod Electronics Case Study <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Need Multi-Location Stock Tracking?</span>
                <p className="text-sm font-bold text-navy-900">Pair GST Billing with our Warehouse & Inventory ERP module</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/erp/inventory-management" className="text-xs font-bold text-accent-600 hover:underline">
                  Inventory Module →
                </Link>
                <Link href="/services/erp-development" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-xl transition-all shadow-sm">
                  Explore Full ERP <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              GST Billing Software FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Does the system support interstate and intrastate GST tax calculations?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Based on customer delivery state and GSTIN prefix, the software automatically splits tax into CGST + SGST (intrastate) or IGST (interstate) without manual cashier selection.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Can invoices be automatically sent to customers on WhatsApp?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Invoices can be automatically formatted as branded PDFs and dispatched immediately to the customer&apos;s WhatsApp number alongside an embedded dynamic UPI payment QR code.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Are there recurring monthly per-user licensing fees?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No. Unlike commercial SaaS billing platforms, RexonSoftTech provides 100% source code and database ownership with zero recurring per-user or per-counter penalty fees.
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
