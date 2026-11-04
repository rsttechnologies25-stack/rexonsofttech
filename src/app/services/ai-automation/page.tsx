import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Sparkles, 
  FileText, 
  BarChart3,
  Layers,
  Workflow,
  Zap,
  Database,
  Server,
  ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Business Automation Solutions Chennai",
  description: "AI and business automation in Chennai. Intelligent PDF invoice parsing, WhatsApp customer service bots & automated ERP reporting to eliminate manual clerical work.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/ai-automation",
  },
  openGraph: {
    title: "AI & Business Automation Solutions in Chennai | RexonSoftTech",
    description: "Practical AI workflows and business automation engineered to eliminate manual data entry, PDF document processing, and repetitive customer support.",
    url: "https://rexonsofttech.in/services/ai-automation",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "AI Automation Solutions Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Business Automation Solutions in Chennai | RexonSoftTech",
    description: "Practical AI and workflow automation for growing businesses in Chennai.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function AIAutomationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/ai-automation#service",
    "name": "AI & Business Process Automation Services",
    "serviceType": "Enterprise AI Engineering & Workflow Automation",
    "description": "Practical AI automation solutions in Chennai, including intelligent PDF document extraction, WhatsApp conversational bots, and predictive operational reporting.",
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
      "name": "AI Automation Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automated PDF Invoice & Purchase Order Data Extraction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 WhatsApp Conversational AI Customer Support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Predictive Stockout Alerts & Executive BI Digests"
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
        "name": "How does automated PDF document parsing work with diverse supplier invoices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI document models extract key tabular line items, GST numbers, HSN codes, and totals from unstructured scanned PDFs or image formats, matching them against your ERP vendor catalogs with high confidence scoring."
        }
      },
      {
        "@type": "Question",
        "name": "Can the WhatsApp AI chatbot handle Tamil and English queries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The conversational bots are trained on multi-lingual natural language models capable of understanding English, Tamil, and Tanglish queries for product inquiries, payment links, and order tracking."
        }
      },
      {
        "@type": "Question",
        "name": "Is our proprietary business data used to train public AI models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never. All AI pipelines are built with strict zero-data-retention enterprise API agreements and private isolated vector databases, ensuring your commercial data stays 100% confidential."
        }
      },
      {
        "@type": "Question",
        "name": "How is AI and business automation pricing structured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech provides transparent milestone pricing for the initial AI pipeline engineering, custom training, and ERP database integration, followed by direct pass-through compute/API costs (OpenAI/Anthropic enterprise APIs or self-hosted models) with zero hidden markups."
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
      { "@type": "ListItem", "position": 3, "name": "AI & Automation", "item": "https://rexonsofttech.in/services/ai-automation" }
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
              Intelligent Workflow Engines
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              AI & Business Process Automation in Chennai
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

        {/* Declarative AI Answer Snippet */}
        <section className="bg-slate-50 border-b border-slate-200/80 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-accent-600 uppercase tracking-widest block">
                  Quick Answer • Practical AI & Workflow Automation
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Practical AI and business process automation</strong> is the engineering of domain-specific machine learning pipelines and conversational agents to eliminate repetitive clerical operations. Unlike theoretical AI experiments, practical automation extracts tabular line items from supplier PDF invoices, reconciles data directly into ERP databases, powers bilingual customer support on WhatsApp, and schedules predictive inventory reorder alerts with enterprise data privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Tangible Business Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Practical Automation That Directly Saves Staff Hours
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Not generic theoretical AI—concrete tools that replace repetitive clerical copy-pasting and eliminate operational human error.
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

            {/* Local Context & Corridor Presence */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Applied AI for Indian Enterprises
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Automating Repetitive Back-Office Workflows
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Indian B2B businesses spend hundreds of clerical hours monthly re-entering data from supplier WhatsApp messages, paper bills, and emails. We build targeted AI solutions that integrate directly with your ERP, eliminating manual bottlenecks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">99% Data Accuracy</h4>
                  <p className="text-slate-600 mt-1">Intelligent OCR validation checks tax totals and HSN codes against master databases before booking entries.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Zero Data Leakage</h4>
                  <p className="text-slate-600 mt-1">Enterprise-grade API isolation guarantees your company data is never used to train public AI models.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Bilingual Language Support</h4>
                  <p className="text-slate-600 mt-1">Conversational workflows fluent in English and Tamil for seamless regional customer support.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Automate Your Accounting</span>
                <p className="text-sm font-bold text-navy-900">Explore how AI links with our automated GST Billing Engine</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/erp/gst-billing" className="text-xs font-bold text-accent-600 hover:underline">
                  GST Billing Engine →
                </Link>
                <Link href="/services/erp-development" className="text-xs font-bold text-accent-600 hover:underline">
                  ERP Development →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Comparison Matrix */}
        <section className="py-16 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Automation Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Bespoke Enterprise AI vs. Public LLMs vs. Generic Automation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Why growing Indian enterprises replace copy-pasting and fragile webhooks with dedicated AI pipeline engineering.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-900">
                    <th className="p-4 sm:p-5 font-bold">Automation Dimension</th>
                    <th className="p-4 sm:p-5 font-bold text-accent-400 bg-navy-900/80 border-x border-navy-800">
                      RexonSoftTech Custom AI Pipelines
                    </th>
                    <th className="p-4 sm:p-5 font-bold">Public LLM Web Tools (ChatGPT)</th>
                    <th className="p-4 sm:p-5 font-bold">Generic Webhook Bridges (Zapier/Make)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">ERP & Database Integration</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Direct automated read/write to your PostgreSQL database and ERP purchase order drafts
                    </td>
                    <td className="p-4 sm:p-5">Zero database integration; requires manual copy-pasting of text back and forth</td>
                    <td className="p-4 sm:p-5">Basic single-record webhooks; fails on nested multi-item invoices or dynamic tables</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">PDF Invoice & PO Data Extraction</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      High-precision tabular OCR extracting item descriptions, HSN codes, GST amounts, and totals
                    </td>
                    <td className="p-4 sm:p-5">Unstructured text dumps requiring manual human verification and line-item formatting</td>
                    <td className="p-4 sm:p-5">Rudimentary OCR plugins with high error rates on scanned, tilted, or stamped bills</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Enterprise Data Privacy</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Enterprise API agreements with strict zero-data-retention; data is never used to train public models
                    </td>
                    <td className="p-4 sm:p-5">Prompts and company financial figures may be retained or analyzed by public vendors</td>
                    <td className="p-4 sm:p-5">Data passes through multiple third-party US cloud relays creating data compliance liabilities</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Conversational WhatsApp Support</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Domain-trained agents fluent in English and Tamil with live ERP stock checks and payment links
                    </td>
                    <td className="p-4 sm:p-5">Generic translations lacking commercial context or regional Indian business terminology</td>
                    <td className="p-4 sm:p-5">Rigid numbered decision trees (Press 1 for Sales) that frustrate modern customers</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Operational Autonomy</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Fully autonomous scheduled cron jobs delivering daily morning WhatsApp digests and stockout warnings
                    </td>
                    <td className="p-4 sm:p-5">Requires an employee to sit at a browser window and type prompts manually</td>
                    <td className="p-4 sm:p-5">Limited by monthly task quota plans that charge penalties when volume surges</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cost Factors & Pricing Guidance */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Engineering Cost Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                How AI & Automation Solution Costs Are Structured
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                A transparent overview of the technical variables that shape enterprise AI deployment and operational ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">1. Document OCR Volume</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monthly volume of supplier invoices, scanned receipts, or purchase orders requiring tabular OCR parsing and HSN validation.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">2. WhatsApp Flow Complexity</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Meta Cloud API conversation tier, multi-lingual Tamil/English intent handling, and human agent handoff escalation rules.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">3. Model Selection & Embeddings</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enterprise LLM API token consumption, vector database hosting for private corporate documentation, and self-hosted models.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">4. ERP Bi-Directional Actions</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct database writes for automated purchase order creation, inventory stock balance deduction, and payment reconciliation.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-600 uppercase tracking-widest">
                Transparent Pass-Through Pricing
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                RexonSoftTech provides <strong>fixed engineering milestones</strong> for custom pipeline construction and database integration. Cloud model tokens and WhatsApp messaging fees are billed at actual pass-through provider rates with zero hidden markups.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-accent-600 hover:text-accent-700 hover:underline"
                >
                  Request an Automation Feasibility Audit <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              AI & Automation FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How does automated PDF document parsing work with diverse supplier invoices?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our AI document models extract key tabular line items, GST numbers, HSN codes, and totals from unstructured scanned PDFs or image formats, matching them against your ERP vendor catalogs with high confidence scoring.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Can the WhatsApp AI chatbot handle Tamil and English queries?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. The conversational bots are trained on multi-lingual natural language models capable of understanding English, Tamil, and Tanglish queries for product inquiries, payment links, and order tracking.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Is our proprietary business data used to train public AI models?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Never. All AI pipelines are built with strict zero-data-retention enterprise API agreements and private isolated vector databases, ensuring your commercial data stays 100% confidential.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How is AI and business automation pricing structured?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  RexonSoftTech provides transparent milestone pricing for the initial AI pipeline engineering, custom training, and ERP database integration, followed by direct pass-through compute/API costs (OpenAI/Anthropic enterprise APIs or self-hosted models) with zero hidden markups.
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
