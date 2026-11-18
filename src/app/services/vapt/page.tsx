import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SecuritySubnav from "@/components/SecuritySubnav";
import SecurityConsultationForm from "@/components/SecurityConsultationForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  FileCheck, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Terminal, 
  Search, 
  Layers, 
  Lock, 
  FileCode, 
  Server 
} from "lucide-react";

export const metadata: Metadata = {
  title: "VAPT Services in India | Vulnerability Assessment & Penetration Testing",
  description: "Comprehensive VAPT services in India by RexonSoftTech. OWASP Top 10 web application testing, mobile app penetration testing, API security audits, and network assessments.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/vapt",
  },
  openGraph: {
    title: "VAPT Services in India | RexonSoftTech",
    description: "Certified offensive security audits, manual ethical hacking, and developer-ready remediation reports with free re-testing.",
    url: "https://rexonsofttech.in/services/vapt",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "VAPT Audits RexonSoftTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAPT Services in India | RexonSoftTech",
    description: "Offensive ethical hacking and penetration testing.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function VAPTServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/vapt#service",
    "name": "VAPT & Penetration Testing Services",
    "serviceType": "Vulnerability Assessment and Penetration Testing",
    "description": "Certified VAPT services covering web application penetration testing, API vulnerability assessments, mobile application audits (iOS/Android), and external/internal network security testing.",
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
        "name": "What is the difference between Vulnerability Assessment (VA) and Penetration Testing (PT)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vulnerability Assessment (VA) is an automated scan identifying unpatched software, misconfigurations, and open ports. Penetration Testing (PT) is hands-on ethical hacking simulating a real attacker who manually exploits vulnerabilities to test real business impact and bypass authentication."
        }
      },
      {
        "@type": "Question",
        "name": "What testing methodologies do you follow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our security researchers execute audits following OWASP Top 10 (Web and API), SANS Top 25, NIST SP 800-115, and OSSTMM standards to ensure thorough, standardized coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Do we receive a free re-test after our developers apply patches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every VAPT engagement includes one complimentary round of validation testing after your engineering team deploys the fixes, followed by an updated closure certificate for regulatory auditors."
        }
      },
      {
        "@type": "Question",
        "name": "Does VAPT disrupt our live production systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Testing can be scheduled on dedicated staging/UAT environments or conducted during designated off-peak maintenance windows using non-destructive payloads, ensuring 100% production uptime."
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
      { "@type": "ListItem", "position": 3, "name": "VAPT Services", "item": "https://rexonsofttech.in/services/vapt" }
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
              Ethical Hacking & Security Audits
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              VAPT & Penetration Testing Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Uncover exploitable vulnerabilities in your web applications, internal ERP systems, mobile apps, and APIs before malicious actors exploit them.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="#security-consultation"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
              >
                Request VAPT Scope & Quote <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/services/cybersecurity-vapt"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                View Chennai VAPT Hub
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
                  Quick Answer • VAPT
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>VAPT (Vulnerability Assessment and Penetration Testing)</strong> is a comprehensive offensive cybersecurity evaluation combining automated vulnerability scanning with certified manual ethical hacking. Testing evaluates web applications, APIs, and networks against OWASP Top 10 vulnerabilities, providing CVSS-ranked proof-of-concept exploits, code-level remediation guidance, and a free verification re-test.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Scope Categories */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                Audit Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Four Dedicated VAPT Testing Streams</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <h3 className="font-bold text-navy-900 text-base">Web Application VAPT</h3>
                <p className="text-slate-600 leading-relaxed">
                  Deep testing against OWASP Top 10 vulnerabilities: SQL injection, cross-site scripting (XSS), broken object-level authorization (BOLA), and CSRF.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <h3 className="font-bold text-navy-900 text-base">API Security Audits</h3>
                <p className="text-slate-600 leading-relaxed">
                  Testing REST and GraphQL endpoints for authentication bypass, mass assignment, unmetered rate limits, and shadow API data leaks.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <h3 className="font-bold text-navy-900 text-base">Mobile App VAPT</h3>
                <p className="text-slate-600 leading-relaxed">
                  Android and iOS application security: reverse engineering defense, insecure local SQLite storage, hardcoded secrets, and certificate pinning.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <h3 className="font-bold text-navy-900 text-base">Network Penetration Testing</h3>
                <p className="text-slate-600 leading-relaxed">
                  External perimeter and internal network testing: unpatched services, default credentials, lateral privilege escalation, and Active Directory audits.
                </p>
              </div>
            </div>

            {/* Assessment Tooling Expertise */}
            <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">Ethical Hacking Tooling</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our testing engineers leverage professional assessment suites including <strong>Burp Suite Professional</strong>, <strong>Tenable Nessus</strong>, <strong>OpenVAS</strong>, <strong>Nmap</strong>, and <strong>Metasploit</strong> alongside custom Python exploitation scripts.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
            <h3 className="text-2xl font-extrabold text-navy-900 text-center">VAPT FAQs</h3>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What is the difference between Vulnerability Assessment (VA) and Penetration Testing (PT)?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Vulnerability Assessment (VA) is an automated scan identifying unpatched software, misconfigurations, and open ports. Penetration Testing (PT) is hands-on ethical hacking simulating a real attacker who manually exploits vulnerabilities to test real business impact and bypass authentication.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What testing methodologies do you follow?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our security researchers execute audits following OWASP Top 10 (Web and API), SANS Top 25, NIST SP 800-115, and OSSTMM standards to ensure thorough, standardized coverage.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Do we receive a free re-test after our developers apply patches?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Every VAPT engagement includes one complimentary round of validation testing after your engineering team deploys the fixes, followed by an updated closure certificate for regulatory auditors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <SecurityConsultationForm
          defaultService="VAPT Security Audits"
          headline="Request a Confidentially Scoped VAPT Assessment"
          subheadline="Consult with our ethical security researchers under mutual NDA to define your target testing scope."
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
