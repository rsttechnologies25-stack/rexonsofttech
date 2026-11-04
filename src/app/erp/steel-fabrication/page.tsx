import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck, 
  Layers, 
  Scale, 
  Sparkles,
  Scissors,
  FileSpreadsheet
} from "lucide-react";

export const metadata: Metadata = {
  title: "Steel Fabrication ERP Software in Chennai",
  description: "Specialized steel fabrication ERP in Chennai for PEB fabricators and metal yards. MTC heat code tracking, remnant scrap inventory recovery & job work challans.",
  alternates: {
    canonical: "https://rexonsofttech.in/erp/steel-fabrication",
  },
  openGraph: {
    title: "Steel Fabrication ERP Software in Chennai | RexonSoftTech",
    description: "End-to-end ERP engineered for structural steel yards, PEB fabricators, and cutting centers. Track raw plates, beams, heat numbers, and remnant scrap.",
    url: "https://rexonsofttech.in/erp/steel-fabrication",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Steel Fabrication ERP Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Fabrication ERP Software in Chennai | RexonSoftTech",
    description: "Heat code tracking, scrap recovery, and job work management for steel fabricators.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function SteelFabricationERPPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/erp/steel-fabrication#service",
    "name": "Steel Fabrication ERP Software",
    "serviceType": "Structural Steel & PEB Manufacturing ERP Engineering",
    "description": "Specialized ERP software engineered for structural steel fabricators, PEB manufacturers, and cutting yards in Chennai with heat code traceability and remnant off-cut recovery.",
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
      "name": "Steel ERP Features",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mill Test Certificate (MTC) Heat Code Traceability"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plate & Beam Remnant Off-Cut Scrap Recovery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Job Work Subcontractor Tracking & Material Reconciliation"
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
      },
      {
        "@type": "Question",
        "name": "Can the software generate vendor job work challans for outsourced galvanizing or machining?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The ERP generates statutory Job Work Outward Delivery Challans tracking raw material weight sent out, expected scrap percentage, and finished goods reconciliation upon return."
        }
      },
      {
        "@type": "Question",
        "name": "How much does steel fabrication ERP software cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Steel fabrication ERP software typically ranges from ₹3.5 Lakhs for single-yard cutting and MTC tracking modules to ₹10–14 Lakhs for multi-plant structural steel ERP systems with CNC nesting integration, job-work reconciliations, and weighbridge automation. RexonSoftTech offers milestone-based pricing with zero per-user software licensing fees."
        }
      },
      {
        "@type": "Question",
        "name": "How does remnant scrap inventory recovery increase steel yard margins?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In conventional yards, cut plate remnants and beam off-cuts are treated as scrap or lost in yard clutter. RexonSoftTech's ERP catalogs remnant pieces with dimensional length, breadth, thickness, and heat numbers in a reusable scrap register, enabling fabricators to reuse off-cuts on secondary jobs and recover 15% to 20% of raw material costs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to implement steel fabrication ERP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementation typically takes 4 to 8 weeks, including initial shop-floor routing analysis, raw material GRN and MTC database setup, weighbridge API calibration, worker training, and live trial fabrication dispatches."
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
              Steel Fabrication ERP Software in Chennai
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
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Shop-Floor Control
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                End-to-End Metal Traceability & Remnant Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Eliminate unbilled remnant scrap loss and prevent quality audit failures with complete heat number pedigree.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Heat Number & MTC Traceability</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Attach supplier Mill Test Certificates to raw batch GRNs and automatically inherit heat numbers on finished assemblies.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Scissors className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Remnant Scrap Inventory Recovery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Log off-cut plate remnants with exact length, breadth, and thickness, reusing scrap on smaller jobs to recover 15-20% margin.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Job Work Challan Management</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Track material sent to outsourced bending, shot-blasting, or galvanizing vendors with automated scrap and weight reconciliations.
                </p>
              </div>
            </div>

            {/* Local Context & Corridor Presence */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Heavy Engineering Belts
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Engineered for Chennai & Tamil Nadu Fabrication Corridors
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  From heavy fabrication units in <strong>Ambattur and Guindy</strong> to structural PEB manufacturers across <strong>Sriperumbudur, Oragadam, Ranipet, and Coimbatore</strong>, our ERP system handles multi-stage bill of materials (BOM), weight-based job work, and strict client inspection sign-offs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Stage-Gate QA Inspections</h4>
                  <p className="text-slate-600 mt-1">Record ultrasonic, magnetic particle, and dimensional QA checks before generating final dispatch releases.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Weight Tolerance Billing</h4>
                  <p className="text-slate-600 mt-1">Calculate theoretical vs actual weighbridge gross weights to prevent billing discrepancies on heavy dispatches.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Zero Monthly Subscription Fees</h4>
                  <p className="text-slate-600 mt-1">Full source code and database ownership with zero per-user software licensing penalties.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Read the Technical Case Study</span>
                <p className="text-sm font-bold text-navy-900">How Custom ERP Solves Steel Fabrication Remnant Scrap Loss & MTC Compliance</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/services/erp-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Full ERP System →
                </Link>
                <Link href="/blog/erp-for-steel-fabrication-production-management" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-xl transition-all shadow-sm">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How much does custom steel fabrication ERP software cost in India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bespoke steel fabrication ERP typically ranges between <strong>₹3.5 Lakhs and ₹12 Lakhs</strong> depending on factory scale, CNC machine integrations, and multi-location yard synchronization. RexonSoftTech provides milestone contracts with zero recurring user license fees.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How does remnant off-cut recovery increase yard profit margins?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Instead of writing off plate and structural beam off-cuts as scrap, the ERP assigns barcodes and dimensional coordinates to usable remnants, ensuring estimators consume existing yard remnants before approving new steel coil or plate purchases.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How long does implementation take for a structural fabrication yard?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A typical fabrication yard implementation takes <strong>4 to 8 weeks</strong>. It covers raw material master setup, nesting routing, weighbridge calibration, job-work dispatch workflows, and hands-on yard worker onboarding.
                </p>
              </div>
            </div>
          </div>
        </section>

                {/* Comparison Table: Steel Fabrication ERP vs Spreadsheets */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Engineering Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Bespoke Steel Fabrication ERP vs. Generic Accounting & Spreadsheets
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Why structural steel fabricators and PEB plants require purpose-built dimensional tracking.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-900">
                    <th className="p-4 sm:p-5 font-bold">Operational Requirement</th>
                    <th className="p-4 sm:p-5 font-bold text-accent-400 bg-navy-900/80">RexonSoftTech Steel ERP</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-300">Generic Accounting / Excel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Heat Number & MTC Traceability</td>
                    <td className="p-4 sm:p-5 font-semibold text-accent-700 bg-accent-50/30">Automated GRN mapping to cut pieces and final inspection dossier</td>
                    <td className="p-4 sm:p-5 text-rose-600">Manual paper certificate matching, high compliance audit risk</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Remnant Off-Cut Scrap Tracking</td>
                    <td className="p-4 sm:p-5 font-semibold text-accent-700 bg-accent-50/30">Dimensional recovery register; re-allocated to secondary jobs</td>
                    <td className="p-4 sm:p-5 text-rose-600">Off-cuts written off as scrap loss (15-20% margin drain)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Outsourced Job Work Challans</td>
                    <td className="p-4 sm:p-5 font-semibold text-accent-700 bg-accent-50/30">Statutory delivery challans with weight reconciliation & scrap variance</td>
                    <td className="p-4 sm:p-5 text-rose-600">Uncontrolled material leakage at galvanizing/cutting vendors</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Weighbridge & Billing Reconciliation</td>
                    <td className="p-4 sm:p-5 font-semibold text-accent-700 bg-accent-50/30">Direct weighbridge integration with automated tolerance billing</td>
                    <td className="p-4 sm:p-5 text-rose-600">Manual weight ticket data entry prone to billing disputes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              Steel Fabrication ERP FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How does the ERP track heat numbers and mill test certificates (MTC)?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every steel batch arriving at the yard is assigned a digital Goods Receipt Note (GRN) linked to the manufacturer&apos;s Mill Test Certificate. When sections or plates are cut, the ERP automatically maps heat codes to the finished fabricated component.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How are remnant off-cuts managed in inventory?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When a full plate or beam is nested and cut, off-cut remnant pieces exceeding threshold dimensions are automatically cataloged as usable remnant inventory with exact measurements, preventing unnecessary new plate procurement.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Can the software generate vendor job work challans for outsourced galvanizing or machining?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. The ERP generates statutory Job Work Outward Delivery Challans tracking raw material weight sent out, expected scrap percentage, and finished goods reconciliation upon return.
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
