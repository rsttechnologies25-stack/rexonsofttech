import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ShieldCheck, ArrowRight, Lock, AlertTriangle, CheckCircle2, Terminal, FileCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity & VAPT Audits in Chennai | RexonSoftTech",
  description: "Vulnerability Assessment and Penetration Testing (VAPT) in Chennai. OWASP web app testing, API security audits, and network vulnerability assessments for Indian SMBs.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/cybersecurity-vapt",
  },
  openGraph: {
    title: "Cybersecurity & VAPT Audits in Chennai | RexonSoftTech",
    description: "Protect your customer databases, cloud portals, and APIs from malicious breaches with structured VAPT penetration testing.",
    url: "https://rexonsofttech.in/services/cybersecurity-vapt",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Cybersecurity & VAPT Audits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity & VAPT Audits in Chennai | RexonSoftTech",
    description: "Vulnerability Assessment and Penetration Testing for business applications.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function CybersecurityVAPTPage() {
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

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Rigorous Testing Covering the OWASP Top 10
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Actionable proof-of-concept reports with clear code remediation recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Web Application Penetration Testing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Testing against SQL Injection (SQLi), Cross-Site Scripting (XSS), Insecure Direct Object References (IDOR), and broken authorization.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">API Security Testing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep inspection of RESTful endpoints, JWT tokens, authentication leaks, rate-limiting bypasses, and data exposure vulnerabilities.
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

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Read Our Security Guide</span>
                <p className="text-sm font-bold text-navy-900">Cybersecurity for Indian SMBs: Why VAPT Testing Matters for Business Apps</p>
              </div>
              <Link href="/blog/cybersecurity-vapt-guide-for-indian-smbs" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-5 py-2.5 rounded-xl transition-all shadow-sm flex-shrink-0">
                Read Guide <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
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
