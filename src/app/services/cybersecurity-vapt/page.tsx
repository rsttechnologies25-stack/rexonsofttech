import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  FileCode,
  Search,
  KeyRound,
  Server,
  FileCheck2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity & VAPT Services in Chennai | RexonSoftTech",
  description: "VAPT and cybersecurity services in Chennai. OWASP Top 10 web application penetration testing, API vulnerability assessments & developer-ready remediation reports.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/cybersecurity-vapt",
  },
  openGraph: {
    title: "Cybersecurity & VAPT Services in Chennai | RexonSoftTech",
    description: "Protect your customer databases, cloud portals, and APIs from malicious breaches with structured VAPT penetration testing.",
    url: "https://rexonsofttech.in/services/cybersecurity-vapt",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Cybersecurity & VAPT Audits Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity & VAPT Services in Chennai | RexonSoftTech",
    description: "Vulnerability Assessment and Penetration Testing for business applications.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function CybersecurityVAPTPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/cybersecurity-vapt#service",
    "name": "Cybersecurity & VAPT Audit Services",
    "serviceType": "Vulnerability Assessment and Penetration Testing (VAPT)",
    "description": "Vulnerability Assessment and Penetration Testing (VAPT) for web applications, cloud APIs, and enterprise systems, providing actionable developer remediation reports.",
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
      "name": "Cybersecurity Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Penetration Testing (OWASP Top 10)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "REST API & Microservice Vulnerability Auditing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Security Posture & Database Access Review"
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
        "name": "What is the difference between vulnerability scanning and penetration testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vulnerability scanning is an automated scan identifying unpatched software libraries and open ports. Penetration testing is hands-on ethical hacking simulating human adversaries exploiting complex logic and authentication flaws."
        }
      },
      {
        "@type": "Question",
        "name": "Do we receive an actionable remediation report?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every audit concludes with an executive risk summary, CVSS severity ratings for each finding, step-by-step proof-of-concept exploits, and developer code-fix guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "Does VAPT disrupt our live production traffic or customer data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Testing can be scheduled on dedicated staging environments or during designated off-peak maintenance windows with non-destructive payloads, ensuring 100% operational uptime."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free re-testing after our developers patch the vulnerabilities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We include one complimentary round of validation testing after your engineering team deploys the fixes, followed by an updated closure certificate."
        }
      },
      {
        "@type": "Question",
        "name": "How is the cost of a VAPT assessment determined in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VAPT audit costs depend on target surface count (number of web dynamic forms, API endpoints, mobile application platforms, and network IP ranges), assessment methodology (black-box vs authenticated gray-box), and compliance framework requirements (CERT-In, RBI, ISO 27001). RexonSoftTech provides fixed-price quotes including free re-validation."
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
      { "@type": "ListItem", "position": 3, "name": "Cybersecurity & VAPT", "item": "https://rexonsofttech.in/services/cybersecurity-vapt" }
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
              OWASP-Aligned Security Audits
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Cybersecurity & VAPT Audits in Chennai
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Identify and fix exploitable vulnerabilities in your web applications, internal ERP systems, APIs, and cloud infrastructure before attackers discover them.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Request a Security Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20looking%20for%20a%20cybersecurity%20audit%20%2F%20VAPT." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
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
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-accent-600 uppercase tracking-widest block">
                  Quick Answer • VAPT Definition
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Vulnerability Assessment and Penetration Testing (VAPT)</strong> is an offensive cybersecurity audit methodology pairing automated vulnerability scanning with manual, certified ethical hacking. By rigorously testing web applications, APIs, networks, and cloud workloads against OWASP Top 10 vectors, VAPT discovers exploitable business logic flaws, authorization bypasses, and data leaks before malicious attackers can compromise sensitive corporate records.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Audit Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Rigorous Testing Covering the OWASP Top 10
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Actionable proof-of-concept reports with clear code remediation recommendations for developers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Web Application Penetration Testing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Testing against SQL Injection (SQLi), Cross-Site Scripting (XSS), Insecure Direct Object References (IDOR), SSRF, and broken authorization.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">API Security Testing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep inspection of RESTful endpoints, JWT tokens, authentication leaks, rate-limiting bypasses, and unauthorized data exposure.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileCode className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Actionable Developer Reports</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear step-by-step reproduction scripts, exact code-level patches, CVSS severity scores, and free post-remediation re-testing.
                </p>
              </div>
            </div>

            {/* Methodology & Regulatory Compliance */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Compliance & Best Practices
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Protecting Indian Businesses from Costly Data Breaches
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  With stringent regulatory expectations including CERT-In cybersecurity directives and India&apos;s Digital Personal Data Protection (DPDP) Act, periodic VAPT audits protect customer data, corporate IP, and brand trust for businesses across Chennai and pan-India.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Non-Destructive Testing</h4>
                  <p className="text-slate-600 mt-1">Carefully calibrated testing payloads that avoid data corruption or unplanned production downtime.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Strict Mutual NDA</h4>
                  <p className="text-slate-600 mt-1">Signed non-disclosure agreement before any security assessment begins to protect proprietary logic.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Re-Validation Included</h4>
                  <p className="text-slate-600 mt-1">Complimentary re-testing cycle to certify all identified vulnerabilities have been sealed.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Read Our Security Guide</span>
                <p className="text-sm font-bold text-navy-900">Cybersecurity for Indian SMBs: Why VAPT Testing Matters for Business Apps</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/services/web-application-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Web App Security →
                </Link>
                <Link href="/blog/cybersecurity-vapt-guide-for-indian-smbs" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-5 py-2.5 rounded-xl transition-all shadow-sm flex-shrink-0">
                  Read Guide <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Matrix Section */}
        <section className="py-16 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Technical Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                VAPT Penetration Testing vs. Automated Vulnerability Scanning
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Understanding the technical differences between automated script scanners and manual ethical hacking.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-900">
                    <th className="p-4 sm:p-5 font-bold">Audit Parameter</th>
                    <th className="p-4 sm:p-5 font-bold text-accent-400 bg-navy-900/80 border-x border-navy-800">
                      RexonSoftTech VAPT Assessment
                    </th>
                    <th className="p-4 sm:p-5 font-bold">Automated Vulnerability Scanning Alone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Testing Methodology</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Hybrid manual ethical hacking + targeted commercial tooling simulating human threat actors
                    </td>
                    <td className="p-4 sm:p-5">Automated bots matching known CVE vulnerability signatures against exposed ports</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Detection Scope</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Complex business logic flaws, privilege escalation, multi-stage IDOR, broken workflow logic
                    </td>
                    <td className="p-4 sm:p-5">Outdated software version banners, missing HTTP security headers, common defaults</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">False Positive Rate</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Near-zero; every vulnerability is manually verified with step-by-step proof-of-concept exploits
                    </td>
                    <td className="p-4 sm:p-5">High noise; generates dozens of theoretical flags requiring engineering triage</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Regulatory Acceptance</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Accepted for CERT-In directives, ISO 27001, RBI banking guidelines, and DPDP Act compliance
                    </td>
                    <td className="p-4 sm:p-5">Insufficient for compliance sign-offs; only serves as periodic surface hygiene</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Remediation & Closure</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Developer code-fix snippets, executive CVSS score summaries, and 1 free re-validation re-test
                    </td>
                    <td className="p-4 sm:p-5">Raw automated scanner export with generic boilerplates and no re-verification</td>
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
                Security Audit Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                How VAPT Security Audit Costs Are Determined
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Clear factors governing the scope, depth, and engineering investment for enterprise penetration testing in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">1. Attack Surface Scope</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Total target count: dynamic web application forms, REST/GraphQL API endpoints, iOS/Android mobile binaries, and public IP blocks.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">2. Testing Methodology</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  External unauthenticated black-box simulation vs. authenticated multi-role gray-box testing evaluating vertical privilege escalation.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">3. Compliance Frameworks</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Audit alignment with CERT-In directives, RBI banking and payment aggregator guidelines, ISO 27001 Annex A, and DPDP Act requirements.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">4. Re-Validation Testing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Remediation consultation call with developers, code-fix review, and 1 complimentary round of patch re-testing before final closure sign-off.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-600 uppercase tracking-widest">
                Fixed-Scope Confidential Auditing
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                RexonSoftTech provides <strong>transparent, fixed-scope proposals</strong> under strict bilateral Non-Disclosure Agreements (NDA). All testing is conducted by experienced ethical hackers with zero surprise surcharges.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-accent-600 hover:text-accent-700 hover:underline"
                >
                  Request a VAPT Audit Scoping Call <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              Cybersecurity & VAPT FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What is the difference between vulnerability scanning and penetration testing?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Vulnerability scanning is an automated scan identifying unpatched software libraries and open ports. Penetration testing is hands-on ethical hacking simulating human adversaries exploiting complex logic and authentication flaws.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Do we receive an actionable remediation report?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Every audit concludes with an executive risk summary, CVSS severity ratings for each finding, step-by-step proof-of-concept exploits, and developer code-fix guidelines.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Does VAPT disrupt our live production traffic or customer data?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Testing can be scheduled on dedicated staging environments or during designated off-peak maintenance windows with non-destructive payloads, ensuring 100% operational uptime.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Do you provide free re-testing after our developers patch the vulnerabilities?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. We include one complimentary round of validation testing after your engineering team deploys the fixes, followed by an updated closure certificate.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How is the cost of a VAPT assessment determined in India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  VAPT audit costs depend on target surface count (number of web dynamic forms, API endpoints, mobile application platforms, and network IP ranges), assessment methodology (black-box vs authenticated gray-box), and compliance framework requirements (CERT-In, RBI, ISO 27001). RexonSoftTech provides fixed-price quotes including free re-validation.
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
