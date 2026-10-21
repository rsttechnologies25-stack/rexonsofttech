import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ArrowRight, ExternalLink, CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Case Studies & Engineering Portfolio | RexonSoftTech Chennai",
  description: "Explore real-world software engineering case studies from RexonSoftTech. Retail e-commerce, IT services portals, consumer electronics showcases, and luxury jewellery systems.",
  alternates: {
    canonical: "https://rexonsofttech.in/case-studies",
  },
  openGraph: {
    title: "Client Case Studies & Engineering Portfolio | RexonSoftTech",
    description: "Real software platforms engineered for regional businesses in Tamil Nadu. Detailed technical case studies and solutions.",
    url: "https://rexonsofttech.in/case-studies",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Client Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Engineering Portfolio | RexonSoftTech",
    description: "Explore enterprise software and web platforms engineered by RexonSoftTech.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

const FEATURED_STUDIES = [
  {
    slug: "perambur-srinivasa",
    client: "Perambur Srinivasa",
    industry: "Retail Sweets & E-Commerce",
    location: "Chennai, Tamil Nadu",
    image: "/project_perambur.png",
    url: "https://www.perambursrinivasa.com/",
    summary: "Complete digital storefront and retail catalog platform engineered for high-concurrency festival orders and instant customer checkout.",
    tags: ["E-Commerce", "Next.js", "Payment Gateway", "Order Management"]
  },
  {
    slug: "vinod-computers",
    client: "Vinod Computers",
    industry: "IT Hardware & Repair Services",
    location: "Chennai, Tamil Nadu",
    image: "/project_vinod.png",
    url: "https://vinodcomputers.in",
    summary: "Hardware service catalog, customer repair inquiry pipeline, and WhatsApp lead capture platform for consumer and enterprise hardware maintenance.",
    tags: ["Web Portal", "Lead Capture", "WhatsApp Automation"]
  },
  {
    slug: "vinod-electronics",
    client: "Vinod Electronics",
    industry: "Consumer Electronics Retail",
    location: "Chennai, Tamil Nadu",
    image: "/project_rexon.png",
    url: "https://vinod-electronics.com",
    summary: "Responsive consumer technology showcase catalog featuring product specs, warranty inquiries, and store locator for multi-brand retail.",
    tags: ["Product Showcase", "Mobile Responsive", "Catalog Engine"]
  },
  {
    slug: "paras-jewellers",
    client: "Paras Jewellers",
    industry: "Fine Jewellery & Bullion",
    location: "Chennai, Tamil Nadu",
    image: "/project_paras.png",
    url: "https://parasjewellers.in",
    summary: "Luxury jewellery showcase catalog with high-resolution collection galleries, bridal suite showcases, and VIP consultation booking.",
    tags: ["Luxury Showcase", "Visual Catalog", "Inquiry Routing"]
  }
];

export default function CaseStudiesIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://rexonsofttech.in/case-studies" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-br from-[#260E22] via-[#381932] to-[#260E22] text-[#FFF3E6] py-20 border-b border-[#FFF3E6]/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFF3E6]/5 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-[#FFF3E6] uppercase tracking-widest bg-[#FFF3E6]/10 border border-[#FFF3E6]/20 px-4 py-1.5 rounded-full">
              Proven Deployments
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFF3E6] leading-tight">
              Client Case Studies & Engineering Portfolio
            </h1>
            <p className="text-base sm:text-lg text-[#EAD8C7] max-w-2xl mx-auto leading-relaxed">
              Explore how we engineer custom software, web platforms, and operational systems for commercial businesses across Tamil Nadu.
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#FFF3E6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-16">
            
            {/* Featured Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {FEATURED_STUDIES.map((study) => (
                <div key={study.slug} className="bg-[#FAF0E4] border border-[#EAD8C7] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.client} platform screenshot`}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#260E22]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[11px] font-bold text-accent-400 uppercase tracking-wider block">
                          {study.industry}
                        </span>
                        <h3 className="text-lg font-bold">{study.client}</h3>
                      </div>
                      <span className="text-xs text-slate-300 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {study.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-5 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {study.summary}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((t) => (
                          <span key={t} className="text-[11px] font-semibold bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 group"
                      >
                        Read Full Technical Case Study
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-navy-900 text-xs inline-flex items-center"
                        title="Visit live site"
                      >
                        Live Site <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Confidential Enterprise Deployments */}
            <div className="p-8 bg-lightBg border border-slate-200/80 rounded-3xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                  Confidential Deployments
                </span>
                <h3 className="text-xl font-bold text-navy-900">
                  Additional Enterprise Implementations (Under NDA)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Client identities protected per contractual non-disclosure agreements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-navy-900 flex items-center">
                    <Building2 className="w-4 h-4 text-accent-500 mr-2" />
                    PEB & Structural Steel Yard ERP (Chennai Industrial Estate)
                  </div>
                  <p className="text-xs text-slate-500">
                    Mill test certificate heat code tracking, remnant plate recovery, and vendor job work challan accounting.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-navy-900 flex items-center">
                    <Building2 className="w-4 h-4 text-accent-500 mr-2" />
                    Multi-Branch Retail Hardware GST Invoicing Engine
                  </div>
                  <p className="text-xs text-slate-500">
                    High-speed counter POS, automated intrastate/interstate GST calculation, and central stock balance sync.
                  </p>
                </div>
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
