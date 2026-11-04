import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  Layers, 
  Sparkles, 
  Workflow,
  Cpu,
  Server,
  Zap,
  Building2,
  Users,
  BarChart3,
  FileSpreadsheet,
  Clock,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development Company Chennai",
  description: "Custom software development company in Chennai. We engineer bespoke business software, internal operations portals, CRM workflows, and scalable cloud databases.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development Company in Chennai | RexonSoftTech",
    description: "Bespoke software engineered around your specific business logic. Fast, secure, scalable, and 100% owned by your company.",
    url: "https://rexonsofttech.in/services/custom-software-development",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Custom Software Development Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in Chennai | RexonSoftTech",
    description: "Bespoke business software and internal tools engineered in Chennai.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function CustomSoftwarePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/custom-software-development#service",
    "name": "Custom Software Development Services",
    "serviceType": "Custom Software Engineering & Cloud Application Development",
    "description": "End-to-end custom software engineering, internal workflow portals, custom CRM engines, and scalable cloud software for growing businesses in Chennai and across India.",
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
      "name": "Custom Software Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Internal Business Operations & Admin Portals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom CRM & Sales Pipeline Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom HRMS & Biometric Attendance Software"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Executive BI & Analytics KPI Dashboards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Legacy Excel & Tally Database Migration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Database Architecture & API Development"
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
        "name": "Who provides custom software development services in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech provides custom software engineering services in Chennai, based in Anna Nagar (PIN 600040). We specialize in bespoke ERP modules, internal admin portals, custom CRM engines, and HRMS platforms with 100% source code ownership and zero recurring user licensing."
        }
      },
      {
        "@type": "Question",
        "name": "What features are included in custom HRMS and payroll software for Indian companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A custom HRMS software engineered for Indian businesses includes: 1) Biometric fingerprint/facial attendance machine integration, 2) Multi-shift roster scheduling, 3) Automated statutory payroll deductions (Provident Fund/EPF, ESI, Professional Tax, and TDS), 4) One-click payslip generation and WhatsApp/email delivery, and 5) Employee self-service leave management."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the source code of custom software built by RexonSoftTech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your company owns 100% of the custom source code, database architecture, and intellectual property upon project completion. There are zero licensing lock-ins or recurring per-seat penalties."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stack do you use for custom software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build with modern, scalable, enterprise-grade stacks including Next.js, React, Node.js, TypeScript, PostgreSQL, and Redis, deployed on secure cloud infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "How does the custom software development process work from requirement to delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We start with a thorough operational workflow audit, construct clickable wireframes and database architecture schemas, execute phased sprint delivery, conduct rigorous security QA, and provide comprehensive deployment with staff onboarding."
        }
      },
      {
        "@type": "Question",
        "name": "How much does custom software development cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of custom software development in India depends on functional scope, system complexity, role-based workflows, and hardware/API integrations. Rather than unpredictable hourly billing, RexonSoftTech conducts a detailed technical requirements audit to deliver transparent, fixed-price milestones with 100% code ownership."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build a custom CRM or HRMS tailored specifically to our business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design custom CRM systems with pipeline automation, WhatsApp notifications, and role-based discount permissions, as well as custom HRMS platforms integrated with biometric attendance machines, shift schedules, and statutory PF/ESI payroll generation."
        }
      },
      {
        "@type": "Question",
        "name": "How do you migrate data from legacy Excel sheets or Tally into a new system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our data engineering team audits legacy Excel workbooks and accounting exports, performs automated deduplication and data cleansing, normalizes relationships, and securely seeds high-performance PostgreSQL databases without operational downtime."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-launch maintenance and feature enhancements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every custom software deployment includes a post-launch warranty period, followed by optional SLA-backed monthly maintenance covering performance optimization, security patches, and incremental feature rollouts."
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
      { "@type": "ListItem", "position": 3, "name": "Custom Software Development", "item": "https://rexonsofttech.in/services/custom-software-development" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full">
              Bespoke Engineering
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Custom Software Development in Chennai
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              When SaaS tools and generic software force expensive workarounds, we build software engineered around your exact operational routines.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Request a Technical Estimate
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20looking%20for%20custom%20software%20development%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} />
                Discuss on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Declarative AI Answer Snippet */}
        <section className="bg-slate-50 border-b border-slate-200/80 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-accent-600 uppercase tracking-widest block">
                  Quick Answer • Custom Software Definition
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Custom software development</strong> is the engineering of bespoke digital applications tailored precisely to an organization&apos;s unique operational logic, internal workflows, and integration requirements. Unlike off-the-shelf SaaS subscriptions with rigid constraints and recurring per-user fees, custom software delivers 100% intellectual property ownership, seamless legacy API integrations, and unbounded scalability as enterprise workloads grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Tailored Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Software Built to Match Your Exact Business Logic
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                From internal operations panels to customer-facing platforms, we design systems that eliminate manual human intervention and data bottlenecks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Custom CRM & Sales Pipelines</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lead capture pipelines with instant WhatsApp alerts, sales rep discount ceilings, customer interaction timelines, and automated PDF quotation generators.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">HRMS & Payroll Automation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Biometric attendance machine synchronization, shift rosters, leave request approvals, automated overtime calculations, and statutory PF/ESI salary slip generation.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Internal Operations Panels</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Centralized operational dashboards connecting branch offices, warehouse teams, and management with real-time audit trails and granular role-based permissions.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Executive BI & KPI Dashboards</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consolidated management reporting highlighting real-time gross margins, branch sales heatmaps, procurement trends, and automated morning WhatsApp digests.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Legacy Excel & Tally Migration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Data cleansing, deduplication, and schema normalization to migrate messy multi-sheet Excel files and legacy accounting data into high-speed PostgreSQL databases.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Multi-Tenant SaaS Architecture</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Secure multi-tenant software platforms engineered for commercial subscription models with automated billing, tenant isolation, and RESTful API endpoints.
                </p>
              </div>
            </div>

            {/* Local Context & Corridor Presence */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Chennai & Pan-India Presence
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Engineering Software for Chennai Enterprises & Growing Indian Businesses
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  From wholesale trading companies in <strong>George Town and Anna Nagar</strong> and corporate offices in <strong>Guindy, T. Nagar, and Mount Road</strong> to technology startups along <strong>OMR</strong>, RexonSoftTech builds robust, secure, and maintainable software systems tailored to Indian business workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">100% Code & IP Ownership</h4>
                  <p className="text-slate-600 mt-1">Full intellectual property transfer with complete access to git repositories and database schemas.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Modern Production Tech Stack</h4>
                  <p className="text-slate-600 mt-1">Engineered with Next.js, Node.js, TypeScript, PostgreSQL, and Redis for speed and rock-solid stability.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Security & VAPT-Tested</h4>
                  <p className="text-slate-600 mt-1">Built following OWASP secure-by-design principles to guard against injection, auth flaws, and data leaks.</p>
                </div>
              </div>
            </div>

            {/* Internal Links Callout */}
            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Proven Real-World Systems</span>
                <p className="text-sm font-bold text-navy-900">Explore complementary enterprise software and ERP solutions</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/services/erp-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Custom ERP Development →
                </Link>
                <Link href="/services/web-application-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Web App Development →
                </Link>
                <Link href="/#contact" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-xl transition-all shadow-sm">
                  Request Blueprint <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Architectural Evaluation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Custom Software vs. Commercial SaaS vs. Low-Code Builders
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                An objective technical comparison to help enterprises evaluate intellectual property, long-term costs, and workflow fit.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-navy-900 font-bold">
                  <tr>
                    <th className="p-4 sm:p-5">Architectural Dimension</th>
                    <th className="p-4 sm:p-5 text-accent-600 bg-accent-50/50 border-x border-slate-200">
                      RexonSoftTech Custom Software
                    </th>
                    <th className="p-4 sm:p-5">Commercial Off-The-Shelf SaaS</th>
                    <th className="p-4 sm:p-5">Low-Code / No-Code Builders</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">IP & Code Ownership</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      100% Client-owned; full source code, repositories, & DB schemas transferred
                    </td>
                    <td className="p-4 sm:p-5">0% ownership; vendor retains software IP and leases access</td>
                    <td className="p-4 sm:p-5">Locked into proprietary builder platform; export impossible or obfuscated</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Workflow Alignment</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Engineered around your exact SOPs, approval hierarchies, & formulas
                    </td>
                    <td className="p-4 sm:p-5">Rigid generic templates; forces business to adjust its internal processes</td>
                    <td className="p-4 sm:p-5">Constrained by visual widget limitations and formula workarounds</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Long-Term Total Cost (TCO)</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Fixed milestone investment; zero per-seat licensing penalties as team scales
                    </td>
                    <td className="p-4 sm:p-5">Compounding monthly/annual per-seat fees that escalate rapidly with headcount</td>
                    <td className="p-4 sm:p-5">Tier upgrades, record limits, and unexpected workflow trigger overage costs</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Integration Flexibility</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Direct integration with biometric machines, WhatsApp API, thermal printers, and legacy SQL/Tally
                    </td>
                    <td className="p-4 sm:p-5">Restricted to vendor app store or premium integration add-on tiers</td>
                    <td className="p-4 sm:p-5">Fragile webhooks, Zapier step limits, and high-frequency polling bottlenecks</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Data Sovereignty & Security</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Dedicated self-hosted or private cloud database; strict Indian data privacy compliance
                    </td>
                    <td className="p-4 sm:p-5">Multi-tenant shared cloud storage with vendor-controlled access logs</td>
                    <td className="p-4 sm:p-5">Vendor-hosted proprietary backend with minimal database backup control</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cost Factors & Pricing Guidance */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Transparent Engineering Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                How Custom Software Costs Are Determined in India
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Understanding the key technical variables that drive engineering investment for custom business platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">1. Workflow & Role Depth</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Number of custom user roles (admins, managers, operators, auditors), state machines, approval hierarchies, and complex automated validation rules.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">2. Hardware & API Integrations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct protocols for biometric attendance hardware, industrial thermal printers, payment gateways, GST e-invoicing portals, and WhatsApp Cloud APIs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">3. Data Migration & Cleansing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Volume of historical Excel sheets or legacy accounting databases requiring automated cleansing, entity relationship normalization, and verification scripts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">4. Architecture & SLA Tiers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Single-server vs. high-availability clustered cloud deployment, automated disaster recovery backups, security hardening, and dedicated monthly SLA support.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-600 uppercase tracking-widest">
                Milestone-Driven Transparency
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                RexonSoftTech eliminates billing surprises by providing <strong>fixed-scope, milestone-based quotes</strong> following an initial technical discovery session. You receive full architectural documentation, weekly sprint demos, and complete IP transfer without recurring user seat charges.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-accent-600 hover:text-accent-700 hover:underline"
                >
                  Book a Free Technical Discovery Call <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              Custom Software Development FAQs
            </h2>
                        <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Who provides custom software development services in Chennai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>RexonSoftTech</strong> provides end-to-end custom software engineering in Chennai, located in Anna Nagar (PIN 600040). We design, develop, and maintain tailor-made web portals, ERP platforms, CRM systems, and HRMS solutions with 100% source code ownership and zero vendor lock-in.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What features are included in custom HRMS and payroll software for Indian companies?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our custom HRMS engines feature: <strong>1) Biometric Device Integration</strong> (fingerprint, facial recognition, and RFID cards), <strong>2) Multi-Shift Roster & Overtime Rules</strong>, <strong>3) Indian Statutory Payroll Compliance</strong> (automated calculation of EPF, ESI, Professional Tax, and TDS), <strong>4) Form 16 & Payslip PDF Generation</strong> with WhatsApp delivery, and <strong>5) Employee Self-Service Mobile Web Portals</strong> for leave tracking.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Who owns the source code of custom software built by RexonSoftTech?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your company owns 100% of the custom source code, database architecture, and intellectual property upon project completion. There are zero licensing lock-ins or recurring per-seat penalties.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What tech stack do you use for custom software?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We build with modern, scalable, enterprise-grade stacks including Next.js, React, Node.js, TypeScript, PostgreSQL, and Redis, deployed on secure cloud infrastructure.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How does the custom software development process work from requirement to delivery?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We start with a thorough operational workflow audit, construct clickable wireframes and database architecture schemas, execute phased sprint delivery, conduct rigorous security QA, and provide comprehensive deployment with staff onboarding.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How much does custom software development cost in India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The cost of custom software development in India depends on functional scope, system complexity, role-based workflows, and hardware/API integrations. Rather than unpredictable hourly billing, RexonSoftTech conducts a detailed technical requirements audit to deliver transparent, fixed-price milestones with 100% code ownership.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Can you build a custom CRM or HRMS tailored specifically to our business?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. We design custom CRM systems with pipeline automation, WhatsApp notifications, and role-based discount permissions, as well as custom HRMS platforms integrated with biometric attendance machines, shift schedules, and statutory PF/ESI payroll generation.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How do you migrate data from legacy Excel sheets or Tally into a new system?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our data engineering team audits legacy Excel workbooks and accounting exports, performs automated deduplication and data cleansing, normalizes relationships, and securely seeds high-performance PostgreSQL databases without operational downtime.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Do you provide post-launch maintenance and feature enhancements?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Every custom software deployment includes a post-launch warranty period, followed by optional SLA-backed monthly maintenance covering performance optimization, security patches, and incremental feature rollouts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
