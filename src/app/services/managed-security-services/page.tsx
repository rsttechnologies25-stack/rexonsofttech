import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SecuritySubnav from "@/components/SecuritySubnav";
import SecurityConsultationForm from "@/components/SecurityConsultationForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  Activity, 
  Laptop, 
  Network, 
  AlertCircle, 
  Flame, 
  Cloud, 
  FileCheck, 
  FileText,
  Search,
  Eye,
  Server,
  Layers,
  Cpu,
  Clock,
  Building2,
  Stethoscope,
  Landmark,
  ShoppingBag,
  Briefcase,
  Zap,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: "Managed Security Services (MSS) | Enterprise Cybersecurity India",
  description: "Enterprise-grade Managed Security Services (MSS) by RexonSoftTech. Proactive threat monitoring, Managed SOC, SIEM engineering, EDR/XDR, and incident response for SMBs and enterprises.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/managed-security-services",
  },
  openGraph: {
    title: "Managed Security Services (MSS) | RexonSoftTech India",
    description: "Your Security. Our Responsibility. Strengthen your posture with managed cybersecurity, continuous SOC monitoring, endpoint defense, and rapid incident response.",
    url: "https://rexonsofttech.in/services/managed-security-services",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Managed Security Services RexonSoftTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Security Services (MSS) | RexonSoftTech",
    description: "Proactive Protection. Continuous Visibility. Stronger Cyber Resilience.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function ManagedSecurityServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/managed-security-services#service",
    "name": "Managed Security Services (MSS)",
    "serviceType": "Managed Cybersecurity & SOC Operations",
    "description": "Comprehensive Managed Security Services division providing continuous threat monitoring, Managed SOC, SIEM engineering, endpoint detection and response, firewall administration, vulnerability management, and incident response.",
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
      "name": "Managed Security Services Portfolio",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed Security Operations Center (SOC)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SIEM Deployment & Rule Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Endpoint Detection & Response (EDR/XDR)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Next-Gen Firewall & Network Security" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Continuous Vulnerability Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incident Response & Threat Hunting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Security Posture Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vulnerability Assessment & Penetration Testing (VAPT)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Governance & Audit Compliance" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are Managed Security Services (MSS)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Managed Security Services (MSS) provide outsourced cybersecurity monitoring, administration, and threat management. An MSS provider oversees SIEM telemetry, endpoint protection, firewall policies, vulnerability scanning, and rapid incident response to defend corporate assets without the overhead of building an in-house 24/7 security team."
        }
      },
      {
        "@type": "Question",
        "name": "Who needs Managed Security Services in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMBs, manufacturing plants, financial services, healthcare institutions, and IT/SaaS companies that hold sensitive customer data, face regulatory audit scrutiny (such as DPDP Act, RBI, ISO 27001), or lack internal tier-1 to tier-3 cybersecurity engineering staff benefit from Managed Security Services."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Managed Security and Co-Managed Security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under fully Managed Security, RexonSoftTech handles day-to-day security administration, tool tuning, alert triage, and remediation coordination. In a Co-Managed Security model, we collaborate alongside your existing internal IT or security staff, providing escalated threat hunting, advanced SIEM correlation, and off-hours coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Do we have to replace our existing firewalls and antivirus tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. RexonSoftTech integrates with your existing security tools—such as Microsoft Defender, CrowdStrike, Fortinet, Palo Alto Networks, Wazuh, or AWS GuardDuty. We optimize detection rules, centralize logging, and eliminate redundant software licenses rather than forcing vendor rip-and-replace."
        }
      },
      {
        "@type": "Question",
        "name": "What monitoring coverage options are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations can choose from standard business-hours coverage (8x5), extended coverage (16x5 or 16x7), or evaluate 24/7 SOC monitoring based on infrastructure complexity, regulatory requirements, and operational risk profile."
        }
      },
      {
        "@type": "Question",
        "name": "How does RexonSoftTech coordinate incident response?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a high-severity alert is validated, our team executes pre-approved containment actions—such as host network isolation, malicious credential revocation, or firewall IP blocking—while notifying your designated incident commanders with actionable forensic root-cause analysis."
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
      { "@type": "ListItem", "position": 3, "name": "Managed Security Services", "item": "https://rexonsofttech.in/services/managed-security-services" }
    ]
  };

  const serviceCategories = [
    {
      title: "Managed SOC",
      href: "/services/managed-soc",
      icon: Activity,
      description: "Continuous security telemetry monitoring, alert triage, and high-fidelity threat detection.",
      highlights: ["Alert noise reduction", "Log normalization", "Tier-1 to Tier-3 escalation"]
    },
    {
      title: "SIEM Deployment & Management",
      href: "/services/siem-management",
      icon: Terminal,
      description: "Architecture, parser engineering, and custom detection rule management for Splunk, Sentinel, and Wazuh.",
      highlights: ["Data ingestion tuning", "Correlation rule engineering", "Retention compliance"]
    },
    {
      title: "Endpoint Security (EDR/XDR)",
      href: "/services/endpoint-security",
      icon: Laptop,
      description: "Proactive host isolation, behavioral ransomware detection, and fleet-wide agent management.",
      highlights: ["Microsoft Defender / CrowdStrike", "Behavioral protection", "One-click host quarantine"]
    },
    {
      title: "Firewall & Network Security",
      href: "/services/network-security",
      icon: Network,
      description: "Next-gen firewall rule audits, zero-trust network segmentation, and secure remote VPN posture.",
      highlights: ["Fortinet, Palo Alto, Cisco", "Policy cleanup & hygiene", "Intrusion prevention (IPS)"]
    },
    {
      title: "Vulnerability Management",
      href: "/services/vulnerability-management",
      icon: AlertCircle,
      description: "Continuous internal and external vulnerability scanning paired with risk-based patch prioritization.",
      highlights: ["CVE risk scoring", "Asset discovery", "Developer patch guidance"]
    },
    {
      title: "Incident Response & Threat Hunting",
      href: "/services/incident-response",
      icon: Flame,
      description: "Rapid threat containment, digital forensics, root-cause analysis, and proactive compromise hunting.",
      highlights: ["Containment playbooks", "Digital artifact forensics", "Post-incident hardening"]
    },
    {
      title: "Cloud Security Posture",
      href: "/services/cloud-security",
      icon: Cloud,
      description: "Continuous posture auditing, IAM least-privilege enforcement, and container security on AWS, Azure, and GCP.",
      highlights: ["CSPM misconfiguration audits", "S3/Blob storage protection", "Kubernetes & container checks"]
    },
    {
      title: "VAPT Security Audits",
      href: "/services/vapt",
      icon: FileCheck,
      description: "Offensive ethical hacking and penetration testing across web portals, cloud APIs, and enterprise networks.",
      highlights: ["OWASP Top 10 exploits", "Business logic testing", "Complimentary re-testing"]
    },
    {
      title: "Security Governance & Compliance",
      href: "/services/security-compliance",
      icon: FileText,
      description: "Audit readiness assessments and control mapping for ISO 27001, SOC 2, RBI guidelines, and Indian DPDP Act.",
      highlights: ["Gap assessment & risk register", "Information security policies", "Evidence collection prep"]
    }
  ];

  const workflowSteps = [
    { num: "01", title: "Initial Consultation", desc: "Evaluate existing architecture, regulatory obligations, and threat exposure." },
    { num: "02", title: "Security Assessment", desc: "Audit active endpoints, firewalls, cloud workloads, and open vulnerability vectors." },
    { num: "03", title: "Asset Discovery & Onboarding", desc: "Catalog all network subnets, identity directories, databases, and critical servers." },
    { num: "04", title: "Tool Integration & Tuning", desc: "Ingest telemetry into SIEM/EDR, silence benign noise, and calibrate detection rules." },
    { num: "05", title: "Monitoring & Detection", desc: "Continuous surveillance of authentication anomalies, lateral movement, and malware." },
    { num: "06", title: "Alert Triage & Escalation", desc: "Filter false positives, validate real incidents, and classify severity levels." },
    { num: "07", title: "Remediation Coordination", desc: "Execute containment playbooks, isolate hosts, and assist IT in patching root cause." },
    { num: "08", title: "Periodic Reporting & Review", desc: "Deliver monthly executive risk scorecards, metric trends, and hardening roadmaps." }
  ];

  const industries = [
    {
      title: "Manufacturing & Heavy Engineering",
      icon: Building2,
      challenges: "Ransomware halting shop floor machinery, legacy OT/SCADA systems, supply-chain partner risks.",
      solution: "Network segmentation between IT and shop-floor OT, strict perimeter firewall audits, and endpoint ransomware shielding."
    },
    {
      title: "Healthcare & Pharmaceuticals",
      icon: Stethoscope,
      challenges: "Patient record confidentiality, connected diagnostic devices, stringent medical data protection norms.",
      solution: "Vulnerability management on clinical networks, granular access controls, and rapid containment playbooks."
    },
    {
      title: "Financial & Professional Services",
      icon: Landmark,
      challenges: "RBI & SEBI cyber compliance, credential harvesting, wire fraud, third-party vendor audit requirements.",
      solution: "Continuous SIEM log auditing, multi-factor enforcement monitoring, and ISO 27001 audit readiness."
    },
    {
      title: "IT & SaaS Companies",
      icon: Cpu,
      challenges: "Customer data breach liabilities, cloud IAM misconfigurations, CI/CD pipeline vulnerabilities, SOC 2 demands.",
      solution: "Cloud security posture management (AWS/Azure), API penetration testing, and 24/7 security event visibility."
    },
    {
      title: "Retail & E-Commerce",
      icon: ShoppingBag,
      challenges: "Payment gateway skimming, customer PII exposure, festive traffic volumetric surges, DDoS threats.",
      solution: "Web application firewall (WAF) tuning, PCI-DSS security posture checks, and credential-stuffing prevention."
    },
    {
      title: "Corporate & Multi-Branch Enterprises",
      icon: Briefcase,
      challenges: "Unmonitored branch office routers, distributed remote workers, inconsistent antivirus patch levels.",
      solution: "Centralized cloud EDR management, unified firewall policy administration, and automated executive reporting."
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <SecuritySubnav />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A0C19] via-[#240F21] to-[#160B16] text-[#FFF3E6] py-20 lg:py-24 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/25 px-4 py-1.5 rounded-full text-xs font-bold text-orange-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
              <span>Managed Security Services Division</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Managed Security Services That Keep Your Business Protected
            </h1>

            <p className="text-sm sm:text-base text-orange-200/90 font-medium max-w-xl mx-auto italic">
              &ldquo;Your Security. Our Responsibility.&rdquo;
            </p>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Strengthen your security posture with managed cybersecurity services covering threat monitoring, endpoint protection, network security, vulnerability management and incident response.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="#security-consultation"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-7 py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer group"
              >
                Request Security Assessment <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl transition-all"
              >
                Explore Our Security Services
              </a>
            </div>

            {/* Telemetry Indicator Mock */}
            <div className="pt-8 max-w-3xl mx-auto">
              <div className="bg-[#120712]/90 border border-white/15 rounded-2xl p-4 sm:p-5 text-left font-mono text-xs shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-[11px] text-slate-300 ml-2 font-sans font-bold">RexonSoftTech • MSS Telemetry Dashboard</span>
                  </div>
                  <span className="text-emerald-400 text-[11px] flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                    Monitoring Active
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-slate-200">
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Telemetry Stream</span>
                    <span className="font-bold text-orange-400 text-sm">SIEM Normalized</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Host Health</span>
                    <span className="font-bold text-emerald-400 text-sm">EDR Connected</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Threat Level</span>
                    <span className="font-bold text-slate-200 text-sm">Normal (Defended)</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Compliance</span>
                    <span className="font-bold text-amber-400 text-sm">Audit-Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Declarative AEO Quick-Answer Snippet */}
        <section className="bg-white border-b border-slate-200/80 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest block">
                  Quick Answer • Managed Security Services
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Managed Security Services (MSS)</strong> deliver continuous, enterprise-grade cybersecurity administration and threat monitoring for organizations without an in-house security operations center. RexonSoftTech MSS unifies SIEM event ingestion, endpoint protection (EDR/XDR), firewall rule hygiene, vulnerability management, and incident containment under transparent Service Level Agreements (SLAs).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Cybersecurity Challenges Businesses Face */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
                The Threat Reality
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
                Cybersecurity Challenges Modern Businesses Face
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Organizations today face an expanding attack surface, evolving threat vectors, and acute talent shortages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Alert Fatigue & Noise</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Firewalls and antivirus scanners generate thousands of daily alerts. Without dedicated triage, critical indicators of compromise get buried in noise.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Ransomware & Silent Dwell Time</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Adversaries average 8+ days inside an unmonitored network before encrypting files or exfiltrating data, moving laterally undetected.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Cyber Skills & Hiring Shortage</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Hiring, training, and retaining round-the-clock tier-1, tier-2, and tier-3 security engineers is cost-prohibitive for most SMBs and mid-market firms.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                  <Cloud className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Cloud Misconfigurations</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Overly permissive IAM roles, publicly accessible cloud storage buckets, and unmonitored API keys introduce silent vulnerabilities into cloud workloads.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Unpatched Vulnerabilities (CVEs)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Thousands of new software vulnerabilities emerge annually. IT teams lack the context to prioritize which CVEs pose immediate operational exploit risk.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Regulatory Compliance Pressures</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The Indian Digital Personal Data Protection (DPDP) Act, RBI cybersecurity circulars, and ISO 27001 mandate structured log retention and incident reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Managed Security Approach */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
                Engineering Methodology
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
                Our Managed Security Approach
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Proactive Protection. Continuous Visibility. Stronger Cyber Resilience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="font-bold text-navy-900 text-base">Asset-First Visibility</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You cannot defend what you cannot see. We inventory all endpoints, cloud instances, network switches, and databases before writing detection rules.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="font-bold text-navy-900 text-base">Signal over Noise</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We tune correlation rules to filter out benign telemetry, ensuring your team only receives high-confidence, actionable incident notifications.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="font-bold text-navy-900 text-base">Coordinated Containment</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Detection without action is useless. We partner with your IT team to execute pre-approved host isolation and firewall block playbooks during an incident.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-sm">4</div>
                <h3 className="font-bold text-navy-900 text-base">Continuous Hardening</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every month, we review threat trends, close discovered security gaps, patch vulnerable software, and update detection logic against emerging attacks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Service Portfolio (All 9 Services) */}
        <section id="portfolio" className="py-20 bg-[#1A0C19] text-[#FFF3E6] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 border border-orange-500/25 px-3.5 py-1.5 rounded-full">
                Service Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Comprehensive Managed Security Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Explore our specialized managed security divisions engineered for continuous protection and regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="p-6 bg-[#211120] border border-white/10 hover:border-orange-500/50 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-4 group">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5 pt-2 text-xs text-slate-400 border-t border-white/10">
                        {service.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-center">
                            <Check className="w-3.5 h-3.5 text-orange-400 mr-2 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center text-xs font-bold text-orange-400 hover:text-orange-300 pt-2 group-hover:translate-x-1 transition-transform"
                    >
                      Explore {service.title} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Security Monitoring and Response Workflow (8-Step) */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
                Structured Lifecycle
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
                8-Stage Security Monitoring & Response Workflow
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From initial onboarding to ongoing threat hunting and executive risk scorecards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step) => (
                <div key={step.num} className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl relative space-y-2">
                  <span className="text-2xl font-black text-orange-500/30 font-mono block">
                    {step.num}
                  </span>
                  <h3 className="font-bold text-navy-900 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Technology Ecosystem (Supported Expertise & Integration Options) */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
                Supported Platforms
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
                Technology Ecosystem & Tool Integration
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We engineer detections, ingest telemetry, and manage rules across leading enterprise security platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-xs">
              <div className="p-5 bg-white border border-slate-200/90 rounded-2xl space-y-2 shadow-sm">
                <span className="font-bold text-orange-600 uppercase tracking-wider block text-[10px]">SIEM & Analytics</span>
                <h3 className="font-bold text-navy-900 text-sm">SIEM Platforms</h3>
                <ul className="space-y-1.5 text-slate-600 pt-1">
                  <li>• Microsoft Sentinel</li>
                  <li>• Splunk Enterprise</li>
                  <li>• IBM QRadar</li>
                  <li>• Wazuh (Open Source)</li>
                </ul>
              </div>

              <div className="p-5 bg-white border border-slate-200/90 rounded-2xl space-y-2 shadow-sm">
                <span className="font-bold text-orange-600 uppercase tracking-wider block text-[10px]">Perimeter & Zero-Trust</span>
                <h3 className="font-bold text-navy-900 text-sm">Network Firewalls</h3>
                <ul className="space-y-1.5 text-slate-600 pt-1">
                  <li>• Fortinet FortiGate</li>
                  <li>• Palo Alto Networks</li>
                  <li>• Cisco Firepower / ASA</li>
                  <li>• Sophos XGS</li>
                </ul>
              </div>

              <div className="p-5 bg-white border border-slate-200/90 rounded-2xl space-y-2 shadow-sm">
                <span className="font-bold text-orange-600 uppercase tracking-wider block text-[10px]">Host & Workstation</span>
                <h3 className="font-bold text-navy-900 text-sm">Endpoint EDR/XDR</h3>
                <ul className="space-y-1.5 text-slate-600 pt-1">
                  <li>• Microsoft Defender for Endpoint</li>
                  <li>• CrowdStrike Falcon</li>
                  <li>• SentinelOne Singularity</li>
                  <li>• Sophos Intercept X</li>
                </ul>
              </div>

              <div className="p-5 bg-white border border-slate-200/90 rounded-2xl space-y-2 shadow-sm">
                <span className="font-bold text-orange-600 uppercase tracking-wider block text-[10px]">Multi-Cloud</span>
                <h3 className="font-bold text-navy-900 text-sm">Cloud Workloads</h3>
                <ul className="space-y-1.5 text-slate-600 pt-1">
                  <li>• Microsoft Azure</li>
                  <li>• Amazon Web Services (AWS)</li>
                  <li>• Google Cloud Platform (GCP)</li>
                  <li>• Cloudflare Edge Security</li>
                </ul>
              </div>

              <div className="p-5 bg-white border border-slate-200/90 rounded-2xl space-y-2 shadow-sm">
                <span className="font-bold text-orange-600 uppercase tracking-wider block text-[10px]">Offensive Testing</span>
                <h3 className="font-bold text-navy-900 text-sm">Security Assessment</h3>
                <ul className="space-y-1.5 text-slate-600 pt-1">
                  <li>• Tenable Nessus</li>
                  <li>• OpenVAS / Greenbone</li>
                  <li>• Burp Suite Professional</li>
                  <li>• Nmap & Metasploit</li>
                </ul>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 text-center max-w-2xl mx-auto italic">
              Note: Technologies listed represent supported integration expertise and engineering capabilities across our client engagements. All product names and trademarks remain the property of their respective owners.
            </p>
          </div>
        </section>

        {/* Section 6: Industry Solutions */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
                Sector Expertise
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
                Managed Security for Critical Industries
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tailored cybersecurity monitoring addressing specific operational, compliance, and threat realities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <div key={idx} className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-navy-900 text-base">{ind.title}</h3>
                    <div className="space-y-1.5 text-xs">
                      <span className="font-semibold text-rose-700 block">Core Challenges:</span>
                      <p className="text-slate-600 leading-relaxed">{ind.challenges}</p>
                    </div>
                    <div className="space-y-1.5 text-xs pt-1">
                      <span className="font-semibold text-emerald-700 block">MSS Mitigation:</span>
                      <p className="text-slate-600 leading-relaxed">{ind.solution}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 7: Service Delivery & Engagement Models */}
        <section className="py-20 bg-[#1A0C19] text-[#FFF3E6] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 border border-orange-500/25 px-3.5 py-1.5 rounded-full">
                Flexible Engagement
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Three Practical Service Delivery Models
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Choose the operational model that matches your internal team maturity and compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#211120] border border-white/10 rounded-2xl space-y-4">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">Model 1</span>
                <h3 className="text-lg font-bold text-white">Fully Managed Security</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  RexonSoftTech assumes end-to-end administration, continuous detection engineering, log monitoring, and coordinated incident containment under clear scope.
                </p>
                <div className="pt-2 text-xs text-slate-400 space-y-1.5 border-t border-white/10">
                  <p>• Ideal for companies with no internal security team</p>
                  <p>• Predictable monthly service agreements</p>
                  <p>• Direct escalation to senior architects</p>
                </div>
              </div>

              <div className="p-6 bg-[#211120] border border-orange-500/50 rounded-2xl space-y-4 relative shadow-lg shadow-orange-500/10">
                <span className="absolute -top-3 right-4 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
                  Most Popular
                </span>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">Model 2</span>
                <h3 className="text-lg font-bold text-white">Co-Managed Security</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We work side-by-side with your existing internal IT or security staff. Your team manages local systems; we handle SIEM correlation, threat hunting, and off-hours triage.
                </p>
                <div className="pt-2 text-xs text-slate-400 space-y-1.5 border-t border-white/10">
                  <p>• Augments existing IT personnel</p>
                  <p>• Tier-2 and Tier-3 advanced alert analysis</p>
                  <p>• Extended shift and weekend monitoring</p>
                </div>
              </div>

              <div className="p-6 bg-[#211120] border border-white/10 rounded-2xl space-y-4">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">Model 3</span>
                <h3 className="text-lg font-bold text-white">Security Assessment & Advisory</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Periodic security audits, external/internal VAPT assessments, architecture hardening reviews, and compliance gap assessments.
                </p>
                <div className="pt-2 text-xs text-slate-400 space-y-1.5 border-t border-white/10">
                  <p>• Fixed-scope project milestones</p>
                  <p>• Audit readiness (ISO 27001, DPDP Act)</p>
                  <p>• Actionable developer remediation roadmaps</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block">Operational Coverage Windows</span>
              <p className="text-xs sm:text-sm text-slate-300">
                Choose from <strong>Business-Hours (8x5)</strong>, <strong>Extended Hours (16x5 / 16x7)</strong>, or request an evaluation for <strong>24/7 continuous SOC monitoring</strong> subject to infrastructure scope and operational assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Comparison Matrix */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
                Evaluation Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                RexonSoftTech MSS vs. In-House Security vs. Traditional IT
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Understand how managed security engineering compares to common alternatives.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A0C19] text-white border-b border-white/10">
                    <th className="p-4 sm:p-5 font-bold">Evaluation Criteria</th>
                    <th className="p-4 sm:p-5 font-bold text-orange-400 bg-black/30">RexonSoftTech Managed Security</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-300">In-House Dedicated SOC</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-300">Traditional Generalist IT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Cost & Investment</td>
                    <td className="p-4 sm:p-5 font-semibold text-orange-700 bg-orange-50/30">Predictable monthly fee, zero hiring or tooling CAPEX</td>
                    <td className="p-4 sm:p-5 text-rose-600">High CAPEX (₹40L–₹1Cr+ annual salary for 24/7 staff)</td>
                    <td className="p-4 sm:p-5">Low initial cost, but high catastrophic breach risk</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Tool Tuning & SIEM Expertise</td>
                    <td className="p-4 sm:p-5 font-semibold text-orange-700 bg-orange-50/30">Continuous parser tuning, rule engineering, noise filtering</td>
                    <td className="p-4 sm:p-5">Dependent on retained internal staff proficiency</td>
                    <td className="p-4 sm:p-5 text-rose-600">Out-of-the-box defaults, high false positive noise</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Incident Containment Speed</td>
                    <td className="p-4 sm:p-5 font-semibold text-orange-700 bg-orange-50/30">Minutes to isolate host or block malicious IPs via playbooks</td>
                    <td className="p-4 sm:p-5">Fast if on shift, delayed during staff turnover</td>
                    <td className="p-4 sm:p-5 text-rose-600">Hours to days (often only discovered after ransom note)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-navy-900">Regulatory Compliance Readiness</td>
                    <td className="p-4 sm:p-5 font-semibold text-orange-700 bg-orange-50/30">Audit-ready reports for ISO 27001, SOC 2, DPDP, RBI</td>
                    <td className="p-4 sm:p-5">Requires manual documentation cycles</td>
                    <td className="p-4 sm:p-5 text-rose-600">Fragmented logs, failure during external audit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 9: Frequently Asked Questions */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
                Security FAQs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Managed Security Services Questions Answered
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What are Managed Security Services (MSS)?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Managed Security Services (MSS) provide outsourced cybersecurity monitoring, administration, and threat management. An MSS provider oversees SIEM telemetry, endpoint protection, firewall policies, vulnerability scanning, and rapid incident response to defend corporate assets without the overhead of building an in-house 24/7 security team.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Who needs Managed Security Services in India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  SMBs, manufacturing plants, financial services, healthcare institutions, and IT/SaaS companies that hold sensitive customer data, face regulatory audit scrutiny (such as DPDP Act, RBI, ISO 27001), or lack internal tier-1 to tier-3 cybersecurity engineering staff benefit from Managed Security Services.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What is the difference between Managed Security and Co-Managed Security?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Under fully Managed Security, RexonSoftTech handles day-to-day security administration, tool tuning, alert triage, and remediation coordination. In a Co-Managed Security model, we collaborate alongside your existing internal IT or security staff, providing escalated threat hunting, advanced SIEM correlation, and off-hours coverage.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Do we have to replace our existing firewalls and antivirus tools?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No. RexonSoftTech integrates with your existing security tools—such as Microsoft Defender, CrowdStrike, Fortinet, Palo Alto Networks, Wazuh, or AWS GuardDuty. We optimize detection rules, centralize logging, and eliminate redundant software licenses rather than forcing vendor rip-and-replace.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What monitoring coverage options are available?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Organizations can choose from standard business-hours coverage (8x5), extended coverage (16x5 or 16x7), or evaluate 24/7 SOC monitoring based on infrastructure complexity, regulatory requirements, and operational risk profile.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How does RexonSoftTech coordinate incident response?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When a high-severity alert is validated, our team executes pre-approved containment actions—such as host network isolation, malicious credential revocation, or firewall IP blocking—while notifying your designated incident commanders with actionable forensic root-cause analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Security Consultation & Assessment Form */}
        <SecurityConsultationForm
          defaultService="Managed SOC"
          headline="Request a Managed Security Assessment"
          subheadline="Consult directly with our cybersecurity architects in Chennai to evaluate your threat landscape, log ingestion scope, and managed defense strategy."
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
