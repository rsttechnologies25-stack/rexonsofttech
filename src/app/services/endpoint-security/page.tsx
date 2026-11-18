import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SecuritySubnav from "@/components/SecuritySubnav";
import SecurityConsultationForm from "@/components/SecurityConsultationForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Laptop, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Lock, 
  Search, 
  Server, 
  Flame 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Endpoint Security & EDR/XDR Management Services India",
  description: "Managed Endpoint Security (EDR/XDR) in India by RexonSoftTech. Behavioral ransomware defense, rapid host quarantine, and fleet management for Microsoft Defender, CrowdStrike, and SentinelOne.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/endpoint-security",
  },
  openGraph: {
    title: "Endpoint Security & EDR/XDR Management | RexonSoftTech",
    description: "Protect servers and employee laptops with managed EDR/XDR. Behavioral ransomware blocking, threat containment, and zero vendor lock-in.",
    url: "https://rexonsofttech.in/services/endpoint-security",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Endpoint Security RexonSoftTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endpoint Security & EDR/XDR Management | RexonSoftTech",
    description: "Managed endpoint defense across workstations and servers.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function EndpointSecurityPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/endpoint-security#service",
    "name": "Endpoint Security & EDR/XDR Management Services",
    "serviceType": "Endpoint Detection & Response Management",
    "description": "Enterprise-grade managed endpoint security, EDR/XDR administration, ransomware behavioral blocking, host network isolation, and centralized agent management across Windows, macOS, and Linux.",
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
        "name": "How does Managed EDR differ from standard legacy antivirus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Legacy antivirus relies solely on known file signature databases, making it useless against zero-day exploits and fileless in-memory malware. Managed EDR monitors live process behaviors, script execution, and memory injections, allowing analysts to quarantine infected machines in real time."
        }
      },
      {
        "@type": "Question",
        "name": "Which EDR/XDR platforms do you manage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide policy configuration, telemetry monitoring, and triage expertise for Microsoft Defender for Endpoint, CrowdStrike Falcon, SentinelOne Singularity, and Sophos Intercept X."
        }
      },
      {
        "@type": "Question",
        "name": "Can an infected laptop be isolated if the employee is working remotely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Cloud-native EDR allows our security analysts to enforce instant host isolation on any compromised remote laptop, cutting off lateral network connectivity while retaining a secure tunnel for forensic inspection."
        }
      },
      {
        "@type": "Question",
        "name": "Does EDR slow down employee computer performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern enterprise EDR agents (like Defender and CrowdStrike) use lightweight kernel-level telemetry sensors rather than heavy disk-churning scans, operating with negligible CPU and RAM impact on user machines."
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
      { "@type": "ListItem", "position": 3, "name": "Endpoint Security", "item": "https://rexonsofttech.in/services/endpoint-security" }
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
              Host Protection & Threat Quarantine
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Endpoint Security & EDR/XDR Management
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Defend workstations, servers, and remote employee laptops with behavioral ransomware protection, process isolation, and centralized EDR administration.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="#security-consultation"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
              >
                Request Endpoint Audit <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/services/managed-security-services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                View Full MSS Suite
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
                  Quick Answer • Endpoint Security (EDR/XDR)
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Managed Endpoint Security (EDR/XDR)</strong> protects physical laptops, virtual desktops, and cloud servers against sophisticated malware, ransomware, and credential dumping. By continuously inspecting process behavior rather than static file hashes, EDR enables rapid containment actions—such as isolating an infected machine with a single click—to prevent lateral network spread.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Solved & Features */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">The Modern Threat</span>
                <h2 className="text-2xl font-extrabold text-navy-900">Why Traditional Antivirus is Dead</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Attackers rarely use compiled viruses with recognizable hashes. Instead, they leverage living-off-the-land techniques (PowerShell, WMI, unmanaged DLL injection) to steal passwords and encrypt file shares. Only behavioral EDR can identify and kill malicious processes as they execute.
                </p>
              </div>

              <div className="p-8 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">Core Protections</span>
                <h2 className="text-2xl font-extrabold text-navy-900">What Managed EDR Protects Against</h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Ransomware Execution:</strong> Detects and rolls back mass file encryption behavior before business files are destroyed.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Credential Dumping:</strong> Blocks LSASS memory reading and Mimikatz-style password theft attempts.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Lateral Movement:</strong> Stops an attacker on one remote laptop from pivoting to central ERP and file servers.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Supported EDR Ecosystem */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                  Supported EDR Platforms
                </span>
                <h3 className="text-2xl font-extrabold text-navy-900">Supported EDR/XDR Technologies</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">Microsoft Defender for Endpoint</h4>
                  <p className="text-slate-600">Native Windows, macOS, and Linux protection, automated investigation and remediation (AIR), and seamless Intune enrollment.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">CrowdStrike Falcon</h4>
                  <p className="text-slate-600">Cloud-native lightweight agent, kernel-level behavioral blocking, Threat Graph analytics, and instant host containment.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">SentinelOne Singularity</h4>
                  <p className="text-slate-600">Autonomous AI-powered behavioral protection, one-click Windows VSS ransomware rollback, and complete story-line tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
            <h3 className="text-2xl font-extrabold text-navy-900 text-center">Endpoint Security FAQs</h3>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">How does Managed EDR differ from standard legacy antivirus?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Legacy antivirus relies solely on known file signature databases, making it useless against zero-day exploits and fileless in-memory malware. Managed EDR monitors live process behaviors, script execution, and memory injections, allowing analysts to quarantine infected machines in real time.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Which EDR/XDR platforms do you manage?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We provide policy configuration, telemetry monitoring, and triage expertise for Microsoft Defender for Endpoint, CrowdStrike Falcon, SentinelOne Singularity, and Sophos Intercept X.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Can an infected laptop be isolated if the employee is working remotely?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Cloud-native EDR allows our security analysts to enforce instant host isolation on any compromised remote laptop, cutting off lateral network connectivity while retaining a secure tunnel for forensic inspection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <SecurityConsultationForm
          defaultService="Endpoint Security (EDR/XDR)"
          headline="Request Managed Endpoint Security Assessment"
          subheadline="Consult with our endpoint architects to review your fleet size, OS distribution, and ransomware mitigation controls."
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
