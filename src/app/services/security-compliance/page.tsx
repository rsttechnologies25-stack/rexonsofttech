import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SecuritySubnav from "@/components/SecuritySubnav";
import SecurityConsultationForm from "@/components/SecurityConsultationForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  FileCheck2, 
  Scale, 
  Layers, 
  BookOpen 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Governance, Risk & Compliance (GRC) Services India",
  description: "Cybersecurity compliance and audit readiness services in India by RexonSoftTech. Gap assessments and control mapping for ISO 27001, SOC 2, RBI guidelines, and DPDP Act.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/security-compliance",
  },
  openGraph: {
    title: "Security Governance, Risk & Compliance (GRC) | RexonSoftTech",
    description: "Prepare your organization for ISO 27001, SOC 2, RBI, and DPDP Act audits with structured gap assessments and security policy engineering.",
    url: "https://rexonsofttech.in/services/security-compliance",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Security Compliance RexonSoftTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Governance & Compliance Services | RexonSoftTech",
    description: "Audit readiness, ISO 27001, SOC 2, and DPDP Act security governance.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function SecurityCompliancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/security-compliance#service",
    "name": "Security Governance & Compliance Services",
    "serviceType": "Governance, Risk & Compliance (GRC) Advisory",
    "description": "Enterprise security governance, gap assessments, information security policy engineering, and audit readiness for ISO/IEC 27001, SOC 2, RBI Cybersecurity Framework, and the Indian DPDP Act.",
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
        "name": "What is Security Governance and Compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security Governance and Compliance (GRC) is the structured framework of organizational policies, operational controls, and risk management practices established to align with legal, regulatory, and customer audit standards."
        }
      },
      {
        "@type": "Question",
        "name": "Which compliance frameworks do you help companies prepare for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide gap assessments, policy authoring, and audit readiness for ISO/IEC 27001:2022, SOC 2 Type II, the Indian Digital Personal Data Protection (DPDP) Act 2023, RBI Cyber Security Framework, and CERT-In mandates."
        }
      },
      {
        "@type": "Question",
        "name": "Does RexonSoftTech issue the actual ISO or SOC 2 certification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Certifications must be officially issued by accredited third-party auditing bodies (such as BSI, TÜV, or AICPA-registered CPA firms). RexonSoftTech conducts the prerequisite technical gap assessments, implements security controls, authors documentation, and prepares your engineering team to pass the audit cleanly."
        }
      },
      {
        "@type": "Question",
        "name": "What requirements does the Indian DPDP Act impose on businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Digital Personal Data Protection (DPDP) Act mandates that Data Fiduciaries implement reasonable security safeguards to prevent personal data breaches, maintain granular consent records, restrict employee access, and report breaches to the Data Protection Board."
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
      { "@type": "ListItem", "position": 3, "name": "Security Compliance", "item": "https://rexonsofttech.in/services/security-compliance" }
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
              Audit Readiness & Regulatory Frameworks
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Security Governance & Compliance Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Achieve and sustain audit readiness. We perform gap assessments, author security policies, and build risk registers for ISO 27001, SOC 2, RBI, and the Indian DPDP Act.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="#security-consultation"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
              >
                Request Compliance Gap Review <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/services/managed-security-services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                Explore Full MSS Portfolio
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
                  Quick Answer • Security Governance & Compliance
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Security Governance and Compliance</strong> prepares organizations for regulatory certifications and client vendor security assessments. RexonSoftTech audits current operational workflows against standards like ISO 27001, SOC 2, and the Indian DPDP Act, authors tailored information security policies, and builds verifiable evidence repositories to ensure smooth audit clearance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Frameworks */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                Supported Frameworks
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Regulatory Frameworks We Align With</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <h3 className="font-bold text-navy-900 text-base">ISO/IEC 27001:2022</h3>
                <p className="text-slate-600 leading-relaxed">
                  Information Security Management System (ISMS) scoping, Statement of Applicability (SoA) authoring, internal audit, and Stage 1 / Stage 2 readiness.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <h3 className="font-bold text-navy-900 text-base">SOC 2 Type I & II</h3>
                <p className="text-slate-600 leading-relaxed">
                  Trust Services Criteria control mapping (Security, Availability, Confidentiality), automated evidence gathering, and auditor liaison.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <h3 className="font-bold text-navy-900 text-base">Indian DPDP Act 2023</h3>
                <p className="text-slate-600 leading-relaxed">
                  Data protection impact assessments (DPIA), data principal consent logging, access management controls, and mandatory breach notification playbooks.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 shadow-sm">
                <h3 className="font-bold text-navy-900 text-base">RBI & SEBI Cyber Norms</h3>
                <p className="text-slate-600 leading-relaxed">
                  Cyber crisis management plans (CCMP), baseline security controls for fintechs, NBFCs, and payment aggregators, and periodic compliance filings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
            <h3 className="text-2xl font-extrabold text-navy-900 text-center">Compliance FAQs</h3>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What is Security Governance and Compliance?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Security Governance and Compliance (GRC) is the structured framework of organizational policies, operational controls, and risk management practices established to align with legal, regulatory, and customer audit standards.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Which compliance frameworks do you help companies prepare for?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We provide gap assessments, policy authoring, and audit readiness for ISO/IEC 27001:2022, SOC 2 Type II, the Indian Digital Personal Data Protection (DPDP) Act 2023, RBI Cyber Security Framework, and CERT-In mandates.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Does RexonSoftTech issue the actual ISO or SOC 2 certification?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Certifications must be officially issued by accredited third-party auditing bodies (such as BSI, TÜV, or AICPA-registered CPA firms). RexonSoftTech conducts the prerequisite technical gap assessments, implements security controls, authors documentation, and prepares your engineering team to pass the audit cleanly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <SecurityConsultationForm
          defaultService="Security Governance & Compliance"
          headline="Request a Compliance Gap Assessment"
          subheadline="Consult with our GRC specialists to evaluate your audit deadlines, control maturity, and remediation roadmaps."
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
