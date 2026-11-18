import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SecuritySubnav from "@/components/SecuritySubnav";
import SecurityConsultationForm from "@/components/SecurityConsultationForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Network, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  Radio, 
  Layers, 
  Server, 
  KeyRound 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Managed Firewall & Network Security Services India",
  description: "Managed firewall, perimeter defense, and network security services in India by RexonSoftTech. Expert administration for Fortinet, Palo Alto Networks, Cisco, and Sophos.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/network-security",
  },
  openGraph: {
    title: "Managed Firewall & Network Security Services | RexonSoftTech",
    description: "Proactive firewall rule audits, zero-trust network segmentation, intrusion prevention, and secure VPN administration.",
    url: "https://rexonsofttech.in/services/network-security",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Network Security RexonSoftTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Firewall & Network Security Services | RexonSoftTech",
    description: "Next-gen firewall management, policy cleanup, and perimeter defense.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function NetworkSecurityPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/network-security#service",
    "name": "Managed Firewall & Network Security Services",
    "serviceType": "Network & Firewall Security Operations",
    "description": "Enterprise-grade managed firewall administration, policy optimization, zero-trust network segmentation, IPS/IDS signature tuning, and secure remote VPN management.",
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
        "name": "What is Managed Firewall and Network Security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Managed Firewall and Network Security is the continuous configuration, policy auditing, firmware patching, and intrusion prevention monitoring of your enterprise perimeter appliances and internal network switches by certified security specialists."
        }
      },
      {
        "@type": "Question",
        "name": "Which firewall hardware and software vendors do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech supports Fortinet FortiGate, Palo Alto Networks Next-Gen Firewalls (NGFW), Cisco Firepower/ASA, and Sophos XGS appliances across physical data centers and cloud VPCs."
        }
      },
      {
        "@type": "Question",
        "name": "Why is regular firewall rule cleanup necessary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over time, IT administrators create temporary &lsquo;any-to-any&rsquo; permit rules or open ports for troubleshooting that are never removed. Our security architects audit and eliminate obsolete rules, enforcing strict least-privilege traffic flow."
        }
      },
      {
        "@type": "Question",
        "name": "How does network micro-segmentation protect manufacturing and retail plants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Micro-segmentation isolates vulnerable shop-floor machinery (OT), payment POS registers, and guest Wi-Fi networks from core ERP servers. If a guest device or office workstation is compromised, the attacker cannot reach critical production systems."
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
      { "@type": "ListItem", "position": 3, "name": "Network Security", "item": "https://rexonsofttech.in/services/network-security" }
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
              Perimeter Defense & Zero-Trust Segmentation
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Managed Firewall & Network Security Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Harden your corporate network perimeter. We audit firewall policies, manage intrusion prevention (IPS), and enforce zero-trust segmentation for Fortinet, Palo Alto, Cisco, and Sophos.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="#security-consultation"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
              >
                Request Network Audit <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/services/managed-security-services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                Explore All MSS Divisions
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
                  Quick Answer • Network Security
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Managed Network Security</strong> ensures that next-generation firewalls (NGFW), switches, and secure remote VPNs are continuously maintained, updated against known CVEs, and locked down with strict least-privilege traffic rules. By eliminating permissive open ports and isolating sensitive internal subnets, we prevent attackers from penetrating perimeter boundaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Solved & Capabilities */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">Perimeter Weaknesses</span>
                <h2 className="text-2xl font-extrabold text-navy-900">Common Network Security Pitfalls</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Most network breaches occur through neglected perimeter loopholes: unpatched firewall firmware, legacy SSL-VPN vulnerabilities without MFA, flat internal networks where one compromised PC can sniff server traffic, and hundreds of forgotten allow-all rules.
                </p>
              </div>

              <div className="p-8 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">Engineered Defense</span>
                <h2 className="text-2xl font-extrabold text-navy-900">What We Manage & Maintain</h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Firewall Policy Audits:</strong> Periodic inspection to deprecate obsolete access rules and enforce strict protocol whitelisting.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>IPS/IDS Signature Tuning:</strong> Active blocking of known exploit payloads, malicious port sweeps, and botnet command-and-control calls.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Secure Remote Access & VPN:</strong> Enforcing MFA, geo-blocking suspicious IP ranges, and configuring zero-trust network access (ZTNA).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Supported Firewall Vendors */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                  Supported Firewall Hardware
                </span>
                <h3 className="text-2xl font-extrabold text-navy-900">Supported Network Firewalls</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">Fortinet FortiGate</h4>
                  <p className="text-slate-600">FortiOS policy hardening, security profiles (AV, IPS, Web Filtering), and SD-WAN branch management.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">Palo Alto Networks</h4>
                  <p className="text-slate-600">PAN-OS App-ID policy enforcement, User-ID mapping, Threat Prevention, and WildFire cloud sandboxing.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">Cisco Firepower / ASA</h4>
                  <p className="text-slate-600">FMC centralized policy control, Snort IPS tuning, AnyConnect VPN posture enforcement, and access lists.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                  <h4 className="font-bold text-navy-900 text-sm">Sophos XGS</h4>
                  <p className="text-slate-600">Synchronized Security integration with endpoint agents, deep packet inspection, and branch-office tunneling.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
            <h3 className="text-2xl font-extrabold text-navy-900 text-center">Network Security FAQs</h3>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What is Managed Firewall and Network Security?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Managed Firewall and Network Security is the continuous configuration, policy auditing, firmware patching, and intrusion prevention monitoring of your enterprise perimeter appliances and internal network switches by certified security specialists.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Which firewall hardware and software vendors do you support?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  RexonSoftTech supports Fortinet FortiGate, Palo Alto Networks Next-Gen Firewalls (NGFW), Cisco Firepower/ASA, and Sophos XGS appliances across physical data centers and cloud VPCs.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Why is regular firewall rule cleanup necessary?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Over time, IT administrators create temporary &lsquo;any-to-any&rsquo; permit rules or open ports for troubleshooting that are never removed. Our security architects audit and eliminate obsolete rules, enforcing strict least-privilege traffic flow.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">How does network micro-segmentation protect manufacturing and retail plants?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Micro-segmentation isolates vulnerable shop-floor machinery (OT), payment POS registers, and guest Wi-Fi networks from core ERP servers. If a guest device or office workstation is compromised, the attacker cannot reach critical production systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <SecurityConsultationForm
          defaultService="Firewall & Network Security"
          headline="Request Managed Firewall & Network Consultation"
          subheadline="Consult with our perimeter security architects in Chennai to audit your firewall rules and plan network segmentation."
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
