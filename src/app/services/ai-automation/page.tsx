import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Cpu, ArrowRight, CheckCircle2, Bot, Sparkles, FileText, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Business Automation Solutions Chennai | RexonSoftTech",
  description: "Custom AI automation solutions, intelligent chatbots, automated document processing, and predictive business intelligence for enterprises in Chennai.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/ai-automation",
  },
  openGraph: {
    title: "AI & Business Automation Solutions Chennai | RexonSoftTech",
    description: "Practical AI workflows and business automation engineered to eliminate manual data entry, PDF document processing, and repetitive customer support.",
    url: "https://rexonsofttech.in/services/ai-automation",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "AI Automation Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Business Automation Solutions Chennai | RexonSoftTech",
    description: "Practical AI and workflow automation for growing businesses.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function AIAutomationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rexonsofttech.in/services" },
      { "@type": "ListItem", "position": 3, "name": "AI & Automation", "item": "https://rexonsofttech.in/services/ai-automation" }
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
              Intelligent Workflow Engines
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              AI & Business Process Automation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We design practical AI engines that read purchase order PDFs, automate WhatsApp customer inquiries, and predict inventory stockouts.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Automate Your Workflows <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20interested%20in%20AI%20automation%20solutions." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Practical Automation That Directly Saves Staff Hours
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Not generic theoretical AI—concrete tools that replace repetitive clerical copy-pasting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Automated Document Parsing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Extract item codes, quantities, and GST numbers from incoming supplier PDF invoices and generate drafts in your ERP automatically.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">WhatsApp AI Chatbots</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  24/7 client response bots answering product availability questions, order tracking, and routing qualified leads to sales managers.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Predictive Business Reports</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scheduled automated executive summary reports delivered every morning to WhatsApp and email highlighting cash flow and inventory health.
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
