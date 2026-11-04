import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Terminal, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Cpu, 
  CheckCircle2,
  Lock,
  Globe2,
  Server,
  Workflow,
  Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Application Development Company Chennai",
  description: "Enterprise web application development in Chennai. Custom cloud portals, internal business dashboards, database applications & secure APIs built on Next.js.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/web-application-development",
  },
  openGraph: {
    title: "Web Application Development Company in Chennai | RexonSoftTech",
    description: "Cloud web applications engineered with Next.js, Node.js, and PostgreSQL for complex business workflows.",
    url: "https://rexonsofttech.in/services/web-application-development",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Web Application Development Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application Development Company in Chennai | RexonSoftTech",
    description: "Enterprise web applications and cloud portals engineered in Chennai.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function WebApplicationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/web-application-development#service",
    "name": "Enterprise Web Application Development",
    "serviceType": "Cloud Web Application Engineering & Portal Development",
    "description": "Custom enterprise web application development in Chennai, building secure multi-role portals, real-time database dashboards, and scalable cloud systems.",
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
      "name": "Web Application Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Client & Vendor Self-Service Portals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Relational Cloud Database & Admin Dashboards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "REST & GraphQL API Engineering"
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
        "name": "What is the key difference between a website and a web application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard website primarily displays static or semi-static content to inform visitors. A web application is an interactive software system with user authentication, database operations, business logic, role-based permissions, and dynamic data processing."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure data security in custom web applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We enforce OWASP Top 10 security standards, encrypted database storage, HTTPS/TLS data in transit, strict RBAC (Role-Based Access Control), JWT/session protection, and automated database backups."
        }
      },
      {
        "@type": "Question",
        "name": "Can the web application integrate with our existing ERP or Tally software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build custom API connectors to sync master records, billing summaries, and inventory balances between your web application and legacy accounting or ERP systems."
        }
      },
      {
        "@type": "Question",
        "name": "How are custom web application development costs calculated in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web application costs in India depend on functional module count, user role hierarchies, relational database complexity, third-party API integrations, and cloud hosting architecture. RexonSoftTech provides transparent milestone-based fixed estimates after an initial architectural discovery session."
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
      { "@type": "ListItem", "position": 3, "name": "Web Application Development", "item": "https://rexonsofttech.in/services/web-application-development" }
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
              Full-Stack Cloud Engineering
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Enterprise Web Application Development in Chennai
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We engineer scalable, secure cloud web portals, customer self-service dashboards, and database applications that automate complex business interactions.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Discuss Your Web App Architecture <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20looking%20for%20web%20application%20development." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
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
                <Terminal className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-accent-600 uppercase tracking-widest block">
                  Quick Answer • Enterprise Web Application Definition
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Enterprise web application development</strong> is the engineering of custom, secure cloud software platforms built to execute an organization&apos;s specific operational workflows, role permissions, and database transactions. Unlike static marketing websites, web applications feature multi-role user authentication, real-time relational data pipelines, encrypted API microservices, and dedicated business logic with 100% proprietary code ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Robust Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Architected for High Security and Scale
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Granular role-based access control, encrypted database records, and automated backups built for high-throughput enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Client & Vendor Portals</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Self-service account portals where clients check invoice histories, track delivery statuses, and submit support tickets without manual agent calls.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Relational Cloud Databases</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  PostgreSQL data architectures with optimized query indices, automated daily snapshots, connection pooling, and SSL encrypted links.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Security & Authentication</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  OWASP-compliant session tokens, two-factor authentication (2FA), and strict role permission gates guarding sensitive commercial records.
                </p>
              </div>
            </div>

            {/* Regional Presence Section */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Chennai & Pan-India Scale
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Powering Critical Workflows for Growing Indian Enterprises
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  From wholesale distributors in <strong>Anna Nagar & George Town</strong> and manufacturing plants across <strong>Ambattur & Guindy</strong> to IT service teams along <strong>OMR</strong>, our web applications streamline multi-user workflows with zero software bloat.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Full Source Code Ownership</h4>
                  <p className="text-slate-600 mt-1">Deploy on your AWS, Cloudflare, or local private cloud with zero per-seat user subscription lock-in.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Real-Time Sync Engine</h4>
                  <p className="text-slate-600 mt-1">Instant updates across counter terminals, warehouse tablets, and headquarters management desks.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">VAPT-Hardened Code</h4>
                  <p className="text-slate-600 mt-1">Pre-tested against SQL injection, broken object-level authorization, and data leakage risks.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Read Our Technical Guide</span>
                <p className="text-sm font-bold text-navy-900">Website vs Web Application: What Does Your Business Actually Need?</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/services/custom-software-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Custom Software →
                </Link>
                <Link href="/services/website-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Website Dev →
                </Link>
                <Link href="/blog/website-vs-web-application-what-does-your-business-actually-need" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-xl transition-all shadow-sm">
                  Read Article <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Comparison Matrix */}
        <section className="py-16 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Stack Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Custom Web Application vs. SaaS vs. No-Code Tools
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Evaluating code ownership, database speed, and long-term costs when building enterprise web systems.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-900">
                    <th className="p-4 sm:p-5 font-bold">Engineering Dimension</th>
                    <th className="p-4 sm:p-5 font-bold text-accent-400 bg-navy-900/80 border-x border-navy-800">
                      RexonSoftTech Custom Web App
                    </th>
                    <th className="p-4 sm:p-5 font-bold">Off-the-Shelf SaaS</th>
                    <th className="p-4 sm:p-5 font-bold">No-Code / Low-Code (Bubble/Airtable)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Workflow Customization</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      100% Bespoke; tailored exactly around your team&apos;s role permissions & business rules
                    </td>
                    <td className="p-4 sm:p-5">Rigid pre-built feature sets; forces compromises in business operations</td>
                    <td className="p-4 sm:p-5">Constrained by visual builder limits and rigid pre-made plugin ecosystems</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Data Sovereignty & Security</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Client owns 100% of the relational database with private cloud network isolation
                    </td>
                    <td className="p-4 sm:p-5">Multi-tenant shared cloud; vendor owns data infrastructure and access logs</td>
                    <td className="p-4 sm:p-5">Locked into proprietary vendor hosting; severe data export and backup friction</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">High-Throughput Performance</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Optimized PostgreSQL queries, connection pooling, and sub-second response times
                    </td>
                    <td className="p-4 sm:p-5">Subject to vendor shared cloud throttling and unannounced downtime</td>
                    <td className="p-4 sm:p-5">Severe performance bottlenecks and rate-limits when record sets exceed thousands</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Long-Term Licensing Cost</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Zero recurring per-user fees; deploy across unlimited corporate staff and clients
                    </td>
                    <td className="p-4 sm:p-5">Escalating per-seat monthly license fees that grow exponentially with headcount</td>
                    <td className="p-4 sm:p-5">Monthly platform subscription tiers that penalize database record growth</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">API & ERP System Integration</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Unrestricted REST/GraphQL endpoints with direct connectors to Tally and ERP databases
                    </td>
                    <td className="p-4 sm:p-5">Restricted to approved marketplace apps; custom webhooks often require enterprise upgrades</td>
                    <td className="p-4 sm:p-5">Dependent on third-party webhook aggregators (Zapier/Make) with recurring execution costs</td>
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
                Engineering Cost Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                How Custom Web Application Costs Are Calculated
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Understanding the technical determinants that shape development investment for business-grade cloud portals in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">1. User Roles & State Complexity</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Depth of user hierarchies (clients, managers, auditors), granular RBAC permission matrix, and multi-step approval workflows.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">2. Database Schema & Aggregations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Relational table design, index tuning, transaction volume, and automated reporting engines requiring sub-second queries.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">3. API & Ecosystem Integrations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Third-party connectors for payment gateways, WhatsApp Business API, GST e-invoicing, legacy Tally exports, and webhooks.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">4. Cloud Infrastructure & SLA</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Production hosting architecture, automated database backups, SSL/TLS certificates, rate limiting, and post-launch maintenance SLA.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-600 uppercase tracking-widest">
                Milestone-Driven Transparency
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                RexonSoftTech delivers web applications with <strong>fixed-scope milestone contracts</strong>, eliminating runaway hourly billing. Your business retains 100% intellectual property ownership with zero ongoing per-seat license fees.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-accent-600 hover:text-accent-700 hover:underline"
                >
                  Schedule an Architecture Discussion <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              Web Application Development FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  What is the key difference between a website and a web application?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A standard website primarily displays static or semi-static content to inform visitors. A web application is an interactive software system with user authentication, database operations, business logic, role-based permissions, and dynamic data processing.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How do you ensure data security in custom web applications?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We enforce OWASP Top 10 security standards, encrypted database storage, HTTPS/TLS data in transit, strict RBAC (Role-Based Access Control), JWT/session protection, and automated database backups.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Can the web application integrate with our existing ERP or Tally software?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. We build custom API connectors to sync master records, billing summaries, and inventory balances between your web application and legacy accounting or ERP systems.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How are custom web application development costs calculated in India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Web application costs in India depend on functional module count, user role hierarchies, relational database complexity, third-party API integrations, and cloud hosting architecture. RexonSoftTech provides transparent milestone-based fixed estimates after an initial architectural discovery session.
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
