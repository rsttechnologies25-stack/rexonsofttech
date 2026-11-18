import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SecuritySubnav from "@/components/SecuritySubnav";
import SecurityConsultationForm from "@/components/SecurityConsultationForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Flame, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Layers, 
  Search, 
  Lock 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Incident Response & Threat Hunting Services India",
  description: "Rapid incident response, digital forensics, and proactive threat hunting services in India by RexonSoftTech. 24/7 emergency containment, root-cause analysis, and malware recovery.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/incident-response",
  },
  openGraph: {
    title: "Incident Response & Threat Hunting Services | RexonSoftTech",
    description: "Contain active cyber threats, isolate compromised hosts, and perform forensic root-cause analysis with experienced incident commanders.",
    url: "https://rexonsofttech.in/services/incident-response",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Incident Response RexonSoftTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Incident Response & Threat Hunting Services | RexonSoftTech",
    description: "Rapid threat containment and digital forensics in India.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function IncidentResponsePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/incident-response#service",
    "name": "Incident Response & Threat Hunting Services",
    "serviceType": "Cybersecurity Incident Response & Forensics",
    "description": "Rapid cyber incident response, threat containment playbooks, digital artifact forensics, root-cause investigation, proactive threat hunting, and regulatory breach notification assistance.",
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
        "name": "What is Incident Response?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Incident Response is the structured, methodological approach taken by security specialists to contain, investigate, eradicate, and recover from an active cyber attack, data breach, or unauthorized system compromise."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can RexonSoftTech respond to an active security breach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For organizations on our Incident Response Retainer, initial triage and containment actions (such as host isolation and firewall IP blocks) begin within 60 minutes of alert declaration. For emergency non-retainer incidents, our emergency response team engages immediately upon NDA execution."
        }
      },
      {
        "@type": "Question",
        "name": "What is proactive threat hunting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Threat hunting is the proactive hypothesis-driven search through endpoint and network logs to discover stealthy adversaries who have bypassed automated security controls and are currently dwelling inside the network undetected."
        }
      },
      {
        "@type": "Question",
        "name": "Do you assist with CERT-In and regulatory data breach reporting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We prepare detailed technical forensics reports documenting timeline of compromise, affected data fields, indicators of compromise (IOCs), and root cause to satisfy mandatory reporting requirements under CERT-In, RBI, and the Indian DPDP Act."
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
      { "@type": "ListItem", "position": 3, "name": "Incident Response", "item": "https://rexonsofttech.in/services/incident-response" }
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
              Rapid Threat Containment & Digital Forensics
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Incident Response & Threat Hunting Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              When breaches strike, every minute counts. We isolate infected machines, determine attacker root-cause, eradicate malware persistence, and restore operations securely.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="#security-consultation"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
              >
                Inquire About IR Retainer <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://wa.me/917871654777?text=EMERGENCY%3A%20I%20need%20urgent%20incident%20response%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} />
                Emergency Incident Hotline
              </a>
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
                  Quick Answer • Incident Response
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Incident Response & Threat Hunting</strong> provides immediate, structured containment when an organization experiences ransomware, data theft, business email compromise (BEC), or credential leaks. Our specialists isolate compromised systems, perform digital forensics to trace entry vectors, evict the adversary, and furnish compliance-grade root cause reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Phases of Incident Response */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                Incident Lifecycle
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">The 4 Phases of Incident Handling</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold">1</div>
                <h3 className="font-bold text-navy-900 text-base">Triage & Containment</h3>
                <p className="text-slate-600 leading-relaxed">
                  Immediate isolation of infected hosts from the network, revocation of compromised credentials, and blocking malicious C2 IP ranges at the firewall.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold">2</div>
                <h3 className="font-bold text-navy-900 text-base">Forensic Investigation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Memory analysis, registry hive inspection, event log preservation, and timeline reconstruction to identify exact initial patient zero.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold">3</div>
                <h3 className="font-bold text-navy-900 text-base">Eradication & Remediation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Removing persistence mechanisms, scheduled tasks, web shells, and backdoor user accounts across all directory trees.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold">4</div>
                <h3 className="font-bold text-navy-900 text-base">Hardening & Reporting</h3>
                <p className="text-slate-600 leading-relaxed">
                  Comprehensive post-incident report with CVSS findings, executive summary, policy recommendations, and CERT-In compliance documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
            <h3 className="text-2xl font-extrabold text-navy-900 text-center">Incident Response FAQs</h3>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What is Incident Response?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Incident Response is the structured, methodological approach taken by security specialists to contain, investigate, eradicate, and recover from an active cyber attack, data breach, or unauthorized system compromise.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">How quickly can RexonSoftTech respond to an active security breach?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For organizations on our Incident Response Retainer, initial triage and containment actions (such as host isolation and firewall IP blocks) begin within 60 minutes of alert declaration. For emergency non-retainer incidents, our emergency response team engages immediately upon NDA execution.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What is proactive threat hunting?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Threat hunting is the proactive hypothesis-driven search through endpoint and network logs to discover stealthy adversaries who have bypassed automated security controls and are currently dwelling inside the network undetected.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Do you assist with CERT-In and regulatory data breach reporting?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. We prepare detailed technical forensics reports documenting timeline of compromise, affected data fields, indicators of compromise (IOCs), and root cause to satisfy mandatory reporting requirements under CERT-In, RBI, and the Indian DPDP Act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <SecurityConsultationForm
          defaultService="Incident Response & Threat Hunting"
          headline="Inquire About an Incident Response Retainer"
          subheadline="Secure guaranteed response SLAs and pre-negotiated hourly rates before an emergency strike occurs."
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
