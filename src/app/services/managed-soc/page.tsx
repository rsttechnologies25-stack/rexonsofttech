import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SecuritySubnav from "@/components/SecuritySubnav";
import SecurityConsultationForm from "@/components/SecurityConsultationForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  Clock, 
  Layers, 
  FileText, 
  Check, 
  Eye, 
  Zap, 
  Server 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Managed SOC Services India | Security Operations Center",
  description: "Managed Security Operations Center (SOC) services in India by RexonSoftTech. Continuous log ingestion, high-fidelity threat detection, alert triage, and rapid incident escalation.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/managed-soc",
  },
  openGraph: {
    title: "Managed SOC Services India | RexonSoftTech",
    description: "Proactive threat detection, real-time alert triage, and continuous security telemetry monitoring without the expense of an in-house SOC.",
    url: "https://rexonsofttech.in/services/managed-soc",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Managed SOC Services RexonSoftTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed SOC Services India | RexonSoftTech",
    description: "Enterprise-grade Managed Security Operations Center (SOC) operations.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function ManagedSOCPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/managed-soc#service",
    "name": "Managed SOC Services",
    "serviceType": "Security Operations Center Management",
    "description": "Managed Security Operations Center (SOC) delivering continuous telemetry monitoring, SIEM event correlation, alert triage, proactive threat hunting, and coordinated incident escalation.",
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
        "name": "What is a Managed SOC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Managed Security Operations Center (SOC) is an outsourced service that provides human cybersecurity analysts, automated correlation tools, and continuous surveillance to monitor, detect, analyze, and respond to cyber threats across your infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "How does a Managed SOC reduce false-positive alert fatigue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our security engineers tune detection thresholds and write contextual correlation rules matching your specific business workflows. Benign administrative spikes are normalized, so your IT team only receives pre-validated, high-severity incident notifications."
        }
      },
      {
        "@type": "Question",
        "name": "Can we choose Co-Managed SOC if we have internal IT staff?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. In a Co-Managed SOC model, RexonSoftTech handles continuous telemetry ingestion, advanced threat hunting, and off-hours triage, while your internal team maintains authority over system access and on-premise remediation."
        }
      },
      {
        "@type": "Question",
        "name": "What monitoring shifts do you offer for Managed SOC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech provides Business-Hours (8x5) coverage, Extended Coverage (16x5 / 16x7), and evaluates 24/7 continuous SOC monitoring based on operational scope and enterprise SLA requirements."
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
      { "@type": "ListItem", "position": 3, "name": "Managed SOC", "item": "https://rexonsofttech.in/services/managed-soc" }
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
              Continuous Threat Detection & Triage
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Managed SOC Services in India
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Gain continuous threat surveillance, high-fidelity alert validation, and proactive incident response without the multi-crore expense of building an internal 24/7 SOC facility.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="#security-consultation"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
              >
                Request SOC Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/services/managed-security-services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                View Full MSS Portfolio
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
                  Quick Answer • Managed SOC
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Managed SOC (Security Operations Center)</strong> delivers centralized, continuous telemetry monitoring across cloud endpoints, identity providers, and network perimeters. By applying behavior-based correlation rules, human analysts filter false alarms, detect sophisticated attacker lateral movement, and escalate validated incidents with step-by-step remediation guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. What It Is & What Problems It Solves */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">Core Definition</span>
                <h2 className="text-2xl font-extrabold text-navy-900">What is Managed SOC?</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A Managed SOC acts as your outsourced command center for cyber defense. Rather than leaving firewall and antivirus logs unread, our security analysts ingest real-time telemetry from all connected corporate assets into a centralized SIEM, applying automated detection models and human threat intelligence to safeguard operations.
                </p>
              </div>

              <div className="p-8 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">Operational Risks</span>
                <h2 className="text-2xl font-extrabold text-navy-900">What Problems Does It Solve?</h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Unnoticed Breaches:</strong> Stops ransomware and adversaries from lurking undetected for weeks inside your network.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Alert Overload:</strong> Filters out hundreds of daily benign notifications so your internal IT isn&apos;t blinded by false positives.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Staffing Shortages:</strong> Eliminates the extreme payroll cost and turnover risk of hiring 6+ dedicated in-house SOC analysts.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What is Included */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                  Service Deliverables
                </span>
                <h3 className="text-2xl font-extrabold text-navy-900">What is Included in Managed SOC</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                  <h4 className="font-bold text-navy-900 text-sm">Log Normalization & Parsing</h4>
                  <p className="text-slate-600">Ingestion from Windows, Linux, firewalls, Azure AD/Entra ID, Google Workspace, and cloud APIs into unified formats.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                  <h4 className="font-bold text-navy-900 text-sm">Custom Detection Engineering</h4>
                  <p className="text-slate-600">Writing correlation logic tailored to your specific application stack, privileged user accounts, and data stores.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                  <h4 className="font-bold text-navy-900 text-sm">Human Tier-1 to Tier-3 Triage</h4>
                  <p className="text-slate-600">Certified security analysts inspect suspicious anomalies, cross-reference threat feeds, and eliminate benign alerts.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                  <h4 className="font-bold text-navy-900 text-sm">Rapid Incident Escalation</h4>
                  <p className="text-slate-600">High-confidence alerts trigger immediate incident notifications via dedicated hotline, email, and WhatsApp.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                  <h4 className="font-bold text-navy-900 text-sm">Monthly Threat Posture Reviews</h4>
                  <p className="text-slate-600">Detailed executive scorecards showing incident volumes, mean time to detect (MTTD), and hardening suggestions.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                  <h4 className="font-bold text-navy-900 text-sm">Compliance Log Retention</h4>
                  <p className="text-slate-600">Secure, encrypted long-term log archives meeting ISO 27001, DPDP Act, and RBI statutory auditing mandates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Approach & Engagement Options */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                Delivery Approach
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">How We Deliver Managed SOC</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <span className="text-orange-500 font-bold text-sm block">Phase 1</span>
                <h4 className="font-bold text-navy-900">Source Mapping</h4>
                <p className="text-slate-600">Audit firewalls, EDR agents, directory services, and cloud telemetry endpoints.</p>
              </div>
              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <span className="text-orange-500 font-bold text-sm block">Phase 2</span>
                <h4 className="font-bold text-navy-900">SIEM Calibration</h4>
                <p className="text-slate-600">Deploy collectors, tune parsers, establish asset baselines, and silence false alerts.</p>
              </div>
              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <span className="text-orange-500 font-bold text-sm block">Phase 3</span>
                <h4 className="font-bold text-navy-900">Active Surveillance</h4>
                <p className="text-slate-600">Live monitoring under agreed SLA coverage (8x5, extended 16x5/16x7, or 24/7 evaluation).</p>
              </div>
              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <span className="text-orange-500 font-bold text-sm block">Phase 4</span>
                <h4 className="font-bold text-navy-900">Coordinated Defense</h4>
                <p className="text-slate-600">Execute containment playbooks, isolate compromised hosts, and assist in remediation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
            <h3 className="text-2xl font-extrabold text-navy-900 text-center">Managed SOC FAQs</h3>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What is a Managed SOC?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A Managed Security Operations Center (SOC) is an outsourced service that provides human cybersecurity analysts, automated correlation tools, and continuous surveillance to monitor, detect, analyze, and respond to cyber threats across your infrastructure.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">How does a Managed SOC reduce false-positive alert fatigue?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our security engineers tune detection thresholds and write contextual correlation rules matching your specific business workflows. Benign administrative spikes are normalized, so your IT team only receives pre-validated, high-severity incident notifications.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Can we choose Co-Managed SOC if we have internal IT staff?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. In a Co-Managed SOC model, RexonSoftTech handles continuous telemetry ingestion, advanced threat hunting, and off-hours triage, while your internal team maintains authority over system access and on-premise remediation.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What monitoring shifts do you offer for Managed SOC?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  RexonSoftTech provides Business-Hours (8x5) coverage, Extended Coverage (16x5 / 16x7), and evaluates 24/7 continuous SOC monitoring based on operational scope and enterprise SLA requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <SecurityConsultationForm
          defaultService="Managed SOC"
          headline="Request a Managed SOC Consultation"
          subheadline="Discuss your log volume, endpoint count, and monitoring coverage requirements with our SOC architects."
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
