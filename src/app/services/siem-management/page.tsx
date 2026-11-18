import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SecuritySubnav from "@/components/SecuritySubnav";
import SecurityConsultationForm from "@/components/SecurityConsultationForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Terminal, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Database, 
  Cpu, 
  Search, 
  Check, 
  FileText, 
  Server 
} from "lucide-react";

export const metadata: Metadata = {
  title: "SIEM Deployment & Management Services India",
  description: "Enterprise SIEM deployment, log engineering, and rule management services in India. Expertise in Microsoft Sentinel, Splunk, IBM QRadar, and Wazuh.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/siem-management",
  },
  openGraph: {
    title: "SIEM Deployment & Management Services | RexonSoftTech India",
    description: "Architect, optimize, and manage your SIEM platform. Reduce ingestion costs, tune correlation rules, and ensure audit-ready log retention.",
    url: "https://rexonsofttech.in/services/siem-management",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "SIEM Management RexonSoftTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIEM Deployment & Management Services | RexonSoftTech",
    description: "Enterprise SIEM architecture, parser development, and detection rule tuning.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function SIEMManagementPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/siem-management#service",
    "name": "SIEM Deployment & Management Services",
    "serviceType": "SIEM Engineering & Telemetry Management",
    "description": "Enterprise SIEM architecture, data connector integration, log normalization, custom correlation rule tuning, and ongoing administration for Microsoft Sentinel, Splunk, QRadar, and Wazuh.",
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
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SIEM Management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SIEM (Security Information and Event Management) Management is the continuous engineering, rule tuning, data connector maintenance, and log analysis required to keep a SIEM platform operating effectively and detecting real threats."
        }
      },
      {
        "@type": "Question",
        "name": "Which SIEM platforms do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech provides deployment, rule tuning, and management expertise for Microsoft Sentinel, Splunk Enterprise, IBM QRadar, and open-source Wazuh architectures."
        }
      },
      {
        "@type": "Question",
        "name": "How do you help control SIEM data ingestion costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud SIEM platforms like Sentinel and Splunk charge based on data volume. We implement intelligent log filtering, drop repetitive benign events at the collection agent level, and route verbose logs to cold archival storage, drastically reducing ingestion bills."
        }
      },
      {
        "@type": "Question",
        "name": "Can you deploy an open-source SIEM like Wazuh to avoid commercial license fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. For organizations seeking robust SIEM and file integrity monitoring without recurring per-gigabyte vendor licenses, we architect, harden, and manage on-premise or cloud-hosted Wazuh clusters."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "Managed Security Services", "item": "https://rexonsofttech.in/services/managed-security-services" },
      { "@type": "ListItem", "position": 3, "name": "SIEM Management", "item": "https://rexonsofttech.in/services/siem-management" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <SecuritySubnav />

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1A0C19] via-[#240F21] to-[#160B16] text-[#FFF3E6] py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full inline-block">
              Detection Engineering & Telemetry Management
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              SIEM Deployment & Management Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Transform raw event logs into actionable security intelligence. We architect, tune, and manage Microsoft Sentinel, Splunk, QRadar, and Wazuh deployments.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="#security-consultation"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
              >
                Request SIEM Scoping Call <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/services/managed-soc"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                Explore Managed SOC
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="bg-white border-b border-slate-200/80 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest block">
                  Quick Answer • SIEM Management
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>SIEM Management</strong> is the technical discipline of configuring, optimizing, and monitoring a centralized log analytics platform. RexonSoftTech engineers custom parsers, tunes correlation rules to reduce noise, controls high data ingestion costs, and audits multi-cloud and on-premise event streams for continuous security visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What it is & Problems Solved */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">The Reality of SIEM</span>
                <h2 className="text-2xl font-extrabold text-navy-900">Why Most SIEM Projects Fail Without Management</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Purchasing a SIEM software license solves nothing on its own. Without seasoned security engineers to build custom log parsers, calibrate alert thresholds, and weed out benign noise, SIEMs quickly turn into costly data swamps full of false alarms.
                </p>
              </div>

              <div className="p-8 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">Core Solutions</span>
                <h2 className="text-2xl font-extrabold text-navy-900">What Problems We Solve</h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Runaway Cloud Ingestion Costs:</strong> We filter debug-level noise, drastically reducing your monthly Microsoft Sentinel or Splunk cloud data bills.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Unparsed Custom Application Logs:</strong> We author custom KQL/SPL regex parsers for proprietary business ERP and billing systems.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Compliance Retention Gaps:</strong> We automate tiering to low-cost immutable cold storage, satisfying ISO 27001, RBI, and DPDP mandates.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Supported SIEM Ecosystem */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                  Supported SIEM Expertise
                </span>
                <h3 className="text-2xl font-extrabold text-navy-900">Supported SIEM Platforms</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">Microsoft Sentinel</h4>
                  <p className="text-slate-600">Cloud-native SIEM with advanced KQL correlation, Azure Logic App playbooks, and Microsoft 365 Defender integration.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">Splunk Enterprise</h4>
                  <p className="text-slate-600">On-premise and cloud Splunk deployment, universal forwarder management, SPL search tuning, and data model acceleration.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">IBM QRadar</h4>
                  <p className="text-slate-600">DSM integration, flow analysis, offense management, and specialized financial sector compliance auditing.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">Wazuh (Open Source)</h4>
                  <p className="text-slate-600">Zero-license-fee open-source SIEM and XDR, providing file integrity monitoring (FIM), rootcheck, and centralized compliance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
            <h3 className="text-2xl font-extrabold text-navy-900 text-center">SIEM Management FAQs</h3>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What is SIEM Management?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  SIEM (Security Information and Event Management) Management is the continuous engineering, rule tuning, data connector maintenance, and log analysis required to keep a SIEM platform operating effectively and detecting real threats.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Which SIEM platforms do you support?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  RexonSoftTech provides deployment, rule tuning, and management expertise for Microsoft Sentinel, Splunk Enterprise, IBM QRadar, and open-source Wazuh architectures.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">How do you help control SIEM data ingestion costs?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cloud SIEM platforms like Sentinel and Splunk charge based on data volume. We implement intelligent log filtering, drop repetitive benign events at the collection agent level, and route verbose logs to cold archival storage, drastically reducing ingestion bills.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Can you deploy an open-source SIEM like Wazuh to avoid commercial license fees?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. For organizations seeking robust SIEM and file integrity monitoring without recurring per-gigabyte vendor licenses, we architect, harden, and manage on-premise or cloud-hosted Wazuh clusters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <SecurityConsultationForm
          defaultService="SIEM Management"
          headline="Request SIEM Architecture & Management Proposal"
          subheadline="Consult with our SIEM engineers in Chennai to evaluate your ingestion volume, log sources, and custom correlation requirements."
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
