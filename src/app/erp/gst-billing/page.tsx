import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Receipt, ArrowRight, CheckCircle2, QrCode, FileSpreadsheet, ShieldCheck, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "GST Billing Software & E-Invoicing Engine | RexonSoftTech Chennai",
  description: "Automated GST billing and accounting software for Indian SMBs. Auto CGST/SGST/IGST tax splits, instant UPI payment QR codes, GSTR-1/3B summary exports, and customer ledger management.",
  alternates: {
    canonical: "https://rexonsofttech.in/erp/gst-billing",
  },
  openGraph: {
    title: "GST Billing Software & E-Invoicing Engine | RexonSoftTech",
    description: "High-speed GST billing engine with instant invoice dispatch, automated tax calculations, and zero recurring subscription fees.",
    url: "https://rexonsofttech.in/erp/gst-billing",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "GST Billing Engine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Billing Software & E-Invoicing Engine | RexonSoftTech",
    description: "Automated GST tax calculations, PDF dispatch, and ledger sync for Indian businesses.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function GSTBillingPage() {
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
              GST Billing Software & E-Invoicing Engine
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

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Speed Up Counter Billing & Prevent Month-End Tax Discrepancies
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Engineered to handle fast checkout lines and high-volume B2B wholesale distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Receipt className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Instant Tax Calculations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automatic HSN code lookup, cess rates, CGST/SGST/IGST tax breakdowns, and discount margin management.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Dynamic UPI Payment QR Codes</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every printed and WhatsApp-dispatched invoice includes a pre-filled UPI QR code with the exact invoice payable amount.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">GSTR-1 & GSTR-3B Exports</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  One-click monthly summaries categorized by B2B, B2C Large, B2C Small, and Nil-rated ready for your CA's review.
                </p>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Read the Billing Guide</span>
                <p className="text-sm font-bold text-navy-900">How GST Billing Automation Saves 10+ Hours Per Week</p>
              </div>
              <Link href="/blog/how-gst-billing-automation-saves-10-hours-per-week" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-5 py-2.5 rounded-xl transition-all shadow-sm flex-shrink-0">
                Read Billing Article <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
