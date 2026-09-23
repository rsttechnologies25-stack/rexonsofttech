import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Terminal, Database, ShieldCheck, ArrowRight, Layers, Cpu, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Application Development Chennai | Cloud Portals | RexonSoftTech",
  description: "Enterprise web application development in Chennai. We engineer client portals, internal dashboards, cloud databases, and multi-user business systems.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/web-application-development",
  },
  openGraph: {
    title: "Web Application Development Chennai | RexonSoftTech",
    description: "Cloud web applications engineered with Next.js, Node.js, and PostgreSQL for complex business workflows.",
    url: "https://rexonsofttech.in/services/web-application-development",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Web Application Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application Development Chennai | RexonSoftTech",
    description: "Enterprise web applications and cloud portals engineered in Chennai.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function WebApplicationPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full">
              Full-Stack Cloud Platforms
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Enterprise Web Application Development
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

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Architected for High Security and Scale
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Granular role-based access control, encrypted database records, and automated backups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Client & Vendor Portals</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Self-service account portals where clients check invoice histories, track delivery statuses, and submit support tickets.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Relational Cloud Databases</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  PostgreSQL data architectures with optimized query indices, automated daily snapshots, and SSL encrypted connections.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Security & Authentication</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  OWASP-compliant session tokens, two-factor authentication (2FA), and strict role permission gates.
                </p>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Read Our Technical Guide</span>
                <p className="text-sm font-bold text-navy-900">Website vs Web Application: What Does Your Business Actually Need?</p>
              </div>
              <Link href="/blog/website-vs-web-application-what-does-your-business-actually-need" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-5 py-2.5 rounded-xl transition-all shadow-sm flex-shrink-0">
                Read Article <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
