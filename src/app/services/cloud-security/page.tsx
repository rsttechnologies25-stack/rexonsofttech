import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SecuritySubnav from "@/components/SecuritySubnav";
import SecurityConsultationForm from "@/components/SecurityConsultationForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Cloud, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  Database, 
  Layers, 
  Server, 
  Cpu 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Security Posture Management (CSPM) Services India",
  description: "Managed cloud security and CSPM services for AWS, Microsoft Azure, and Google Cloud in India by RexonSoftTech. IAM audits, S3 bucket lockdowns, container security & compliance.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/cloud-security",
  },
  openGraph: {
    title: "Cloud Security Posture Management (CSPM) Services | RexonSoftTech",
    description: "Eliminate cloud misconfigurations, overly permissive IAM roles, and storage leaks across AWS, Azure, and Google Cloud.",
    url: "https://rexonsofttech.in/services/cloud-security",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Cloud Security RexonSoftTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Security Posture Management (CSPM) Services | RexonSoftTech",
    description: "Multi-cloud security posture management, IAM auditing, and container defense.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function CloudSecurityPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/cloud-security#service",
    "name": "Cloud Security Posture Management (CSPM) Services",
    "serviceType": "Cloud Workload & Infrastructure Security",
    "description": "Continuous cloud security posture management, IAM least-privilege auditing, object storage security, VPC network hardening, and container compliance across AWS, Azure, and Google Cloud.",
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
        "name": "What is Cloud Security Posture Management (CSPM)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CSPM is an automated security discipline that continuously audits cloud environments (AWS, Azure, Google Cloud) to identify and alert on security misconfigurations, overly permissive access rights, unencrypted databases, and compliance non-adherence."
        }
      },
      {
        "@type": "Question",
        "name": "Which cloud platforms do you secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech manages security architectures across Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), and hybrid on-premise cloud infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most frequent cloud security vulnerabilities you find?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common cloud risks include publicly exposed S3/Blob storage buckets, dormant IAM admin credentials lacking MFA, unmonitored security groups with 0.0.0.0/0 inbound SSH/RDP rules, and unencrypted database snapshots."
        }
      },
      {
        "@type": "Question",
        "name": "How does cloud security support regulatory compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our cloud security audits map your active AWS and Azure configurations directly against frameworks such as CIS Cloud Benchmarks, ISO 27001, SOC 2, and the Indian DPDP Act, providing verifiable evidence for auditors."
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
      { "@type": "ListItem", "position": 3, "name": "Cloud Security", "item": "https://rexonsofttech.in/services/cloud-security" }
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
              Multi-Cloud Posture & Workload Protection
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Cloud Security Posture Management (CSPM)
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Eliminate cloud misconfigurations, enforce IAM least-privilege, and lock down storage buckets across Microsoft Azure, AWS, and Google Cloud workloads.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="#security-consultation"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
              >
                Request Cloud Security Audit <ArrowRight className="w-4 h-4 ml-2" />
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
                  Quick Answer • Cloud Security (CSPM)
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Cloud Security Posture Management (CSPM)</strong> actively audits infrastructure-as-code and live cloud environments across AWS, Azure, and GCP. By continuously flagging open storage buckets, excessive IAM permissions, and unencrypted databases against CIS Cloud Benchmarks, CSPM prevents accidental public data leaks before threat actors scan them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Cloud Domains */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                Cloud Hardening Vectors
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">What We Protect in Your Cloud</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                <h3 className="font-bold text-navy-900 text-sm">IAM Least Privilege & Roles</h3>
                <p className="text-slate-600">Eliminating wildcard permissions, enforcing MFA on root/admin accounts, and auditing cross-account access keys.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                <h3 className="font-bold text-navy-900 text-sm">Object Storage & Database Hardening</h3>
                <p className="text-slate-600">Verifying private ACLs on AWS S3, Azure Blob, and GCP Cloud Storage, with KMS encryption at rest.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                <h3 className="font-bold text-navy-900 text-sm">VPC Security Groups & Ingress</h3>
                <p className="text-slate-600">Restricting 0.0.0.0/0 exposure on database ports (3306, 5432) and administrative protocols (RDP, SSH).</p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                <h3 className="font-bold text-navy-900 text-sm">Container & Kubernetes Security</h3>
                <p className="text-slate-600">Auditing Docker image vulnerabilities, cluster RBAC policies, and pod network isolation rules.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                <h3 className="font-bold text-navy-900 text-sm">Cloud Trail & Activity Logging</h3>
                <p className="text-slate-600">Centralizing immutable audit trails from AWS CloudTrail, Azure Activity Logs, and GCP Audit Logs into SIEM.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2 shadow-sm">
                <h3 className="font-bold text-navy-900 text-sm">CIS Benchmark Compliance</h3>
                <p className="text-slate-600">Automated gap assessment reports against CIS Foundation Benchmarks for SOC 2 and ISO 27001 readiness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
            <h3 className="text-2xl font-extrabold text-navy-900 text-center">Cloud Security FAQs</h3>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What is Cloud Security Posture Management (CSPM)?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  CSPM is an automated security discipline that continuously audits cloud environments (AWS, Azure, Google Cloud) to identify and alert on security misconfigurations, overly permissive access rights, unencrypted databases, and compliance non-adherence.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">Which cloud platforms do you secure?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  RexonSoftTech manages security architectures across Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), and hybrid on-premise cloud infrastructure.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">What are the most frequent cloud security vulnerabilities you find?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The most common cloud risks include publicly exposed S3/Blob storage buckets, dormant IAM admin credentials lacking MFA, unmonitored security groups with 0.0.0.0/0 inbound SSH/RDP rules, and unencrypted database snapshots.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <SecurityConsultationForm
          defaultService="Cloud Security (AWS/Azure/GCP)"
          headline="Request a Cloud Security Posture Audit"
          subheadline="Consult with our cloud security architects to evaluate your IAM hierarchy, public storage exposures, and workload defenses."
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
