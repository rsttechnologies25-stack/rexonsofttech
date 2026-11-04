import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Globe, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Search, 
  Layout,
  Smartphone,
  Gauge,
  Sparkles,
  ShoppingCart,
  Users,
  CreditCard,
  RefreshCw,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Company in Chennai",
  description: "High-performance website development in Chennai. Fast-loading, Next.js corporate websites and conversion-focused web portals engineered for growing businesses.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/website-development",
  },
  openGraph: {
    title: "Website Development Company in Chennai | RexonSoftTech",
    description: "High-conversion corporate websites, e-commerce storefronts, and web portals engineered with Next.js for blazing fast performance.",
    url: "https://rexonsofttech.in/services/website-development",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Website Development Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Chennai | RexonSoftTech",
    description: "High-performance corporate websites and e-commerce portals built with Next.js in Chennai.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function WebsiteDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/website-development#service",
    "name": "Corporate Website & Web Portal Development",
    "serviceType": "Website Engineering & High-Performance Web Development",
    "description": "Modern corporate websites, product landing engines, and custom web portals built on Next.js with sub-second page speeds, technical SEO, and conversion optimization.",
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
      "name": "Website Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "B2B Corporate Websites & Landing Engines"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js High-Performance Static Web Portals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "B2B E-Commerce & Wholesale Dealer Ordering Portals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO & Core Web Vitals Optimization"
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
        "name": "Who provides high-performance website development services in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech provides enterprise-grade, high-speed website development in Chennai, based in Anna Nagar (PIN 600040). We engineer custom Next.js websites optimized for sub-second load times, Core Web Vitals, Google SEO, and Generative Engine Optimization (GEO)."
        }
      },
      {
        "@type": "Question",
        "name": "Why do you use Next.js instead of WordPress for corporate websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Next.js provides sub-second load times, superior SEO indexability, zero plugin security vulnerabilities, and 95+ Core Web Vitals scores compared to legacy WordPress themes."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build a private B2B wholesale ordering portal for our distributors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We engineer secure B2B ordering portals where wholesale distributors log in with multi-tiered price lists, check real-time warehouse inventory, place bulk orders with custom credit limits, pay via dynamic UPI / net banking, and view automated ledger statements synced with your backend ERP or accounting system."
        }
      },
      {
        "@type": "Question",
        "name": "Is mobile responsiveness guaranteed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every website is engineered mobile-first with adaptive layouts tested across all modern iOS and Android device screen sizes."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a corporate website development project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most high-performance corporate websites launch within 2 to 4 weeks, including custom UI design, responsive development, technical SEO setup, and content integration."
        }
      },
      {
        "@type": "Question",
        "name": "Does the website include technical SEO and analytics setup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every website we build includes semantic HTML5 structure, OpenGraph cards, JSON-LD Schema.org structured data, dynamic XML sitemaps, robots.txt, and Google Analytics / Tag Manager integration by default."
        }
      },
      {
        "@type": "Question",
        "name": "How much does corporate website development cost in Chennai and India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website development costs in India depend on total page count, custom UI design depth, interactive functionality (forms, catalogs, portals), and technical SEO/GEO engineering. RexonSoftTech offers transparent milestone pricing for custom Next.js websites with zero recurring CMS plugin fees."
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
      { "@type": "ListItem", "position": 3, "name": "Website Development", "item": "https://rexonsofttech.in/services/website-development" }
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
              High-Performance Web Engineering
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Website Development in Chennai
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We engineer high-speed, SEO-first corporate websites and web portals that showcase your brand authority and convert visitors into qualified business leads.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Get a Website Quote <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20interested%20in%20website%20development%20services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} /> Discuss on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Declarative AI Answer Snippet */}
        <section className="bg-slate-50 border-b border-slate-200/80 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Globe className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-accent-600 uppercase tracking-widest block">
                  Quick Answer • Modern Website Engineering
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Modern enterprise website development</strong> is the engineering of high-performance web properties using headless frameworks like Next.js, React, and Edge CDN delivery. Unlike monolithic PHP or WordPress platforms burdened by vulnerable plugins, modern web engineering delivers sub-second page load times, 95+ Core Web Vitals, zero runtime database breach surfaces, and automated semantic JSON-LD structured data for dominant Google and AI answer engine visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Engineering Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Built With High-Performance Next.js Architecture
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Say goodbye to bloated WordPress plugins, sluggish mobile load times, and frequent security vulnerabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Corporate Brand Portals</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clean typographic hierarchy, authentic brand messaging, and friction-free inquiry forms tailored for B2B enterprises.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Sub-Second Page Speeds</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pre-rendered static HTML and edge delivery via Cloudflare CDN for immediate page loading on 4G and 5G mobile connections.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Technical SEO by Default</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Built-in OpenGraph cards, JSON-LD structured schema markup, dynamic sitemaps, and semantic HTML5 heading structures.
                </p>
              </div>
            </div>

            {/* Local Context & Corridor Presence */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Chennai & Pan-India Reach
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Powering Digital Presence for Growing B2B Businesses
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  From traditional enterprises in <strong>Anna Nagar, Guindy, and Mount Road</strong> seeking a modern corporate identity to high-growth tech ventures along <strong>OMR</strong> and manufacturers across Tamil Nadu, RexonSoftTech builds digital platforms that command credibility.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">95+ Core Web Vitals</h4>
                  <p className="text-slate-600 mt-1">Optimized LCP, CLS, and INP metrics ensuring top Google search ranking signals and user retention.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">High Conversion UX</h4>
                  <p className="text-slate-600 mt-1">Integrated WhatsApp action triggers, phone direct-dial links, and validated lead capture forms.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Zero Maintenance Pain</h4>
                  <p className="text-slate-600 mt-1">Static pre-rendering means virtually unhackable architecture with zero recurring plugin updates.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Modern Web Engineering</span>
                <p className="text-sm font-bold text-navy-900">Explore corporate websites and web platforms built by our Chennai team</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/services/web-application-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Web Applications →
                </Link>
                <Link href="/services/custom-software-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Custom Software →
                </Link>
                <Link href="/#contact" className="inline-flex items-center text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-xl transition-all shadow-sm flex-shrink-0">
                  Get a Free Quote <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* B2B E-Commerce & Wholesale Dealer Ordering Portals */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                B2B Commerce & Distribution
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                B2B E-Commerce & Wholesale Dealer Ordering Portals
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Automate distributor reordering, multi-tier pricing, and payment collection with high-speed web portals connected directly to your warehouse.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">Dealer Tiers & Custom Margins</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Role-gated pricing matrices where authorized distributors see negotiated wholesale rates, volume tiers, and MOQ rules automatically upon login.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">Live Inventory & Credit Limits</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct visibility into warehouse bin availability with automated credit ceiling checks, outstanding balance warnings, and dispatch holds.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">Dynamic UPI & Instant Settlement</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast B2B payment collection via dynamic invoice-matched UPI QR codes, virtual accounts (NEFT/RTGS), payment gateway checkout, and PDC logging.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">Real-Time Ledger & ERP Sync</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automatic order posting to your backend inventory database and accounting software for instant tax invoice dispatch and live statement downloads.
                </p>
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
                Next.js Modern Architecture vs. Legacy Monolithic CMS
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Why modern enterprises replace legacy WordPress sites with high-performance Next.js engineering.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-900">
                    <th className="p-4 sm:p-5 font-bold">Performance & Security Vector</th>
                    <th className="p-4 sm:p-5 font-bold text-accent-400 bg-navy-900/80 border-x border-navy-800">
                      RexonSoftTech Next.js Architecture
                    </th>
                    <th className="p-4 sm:p-5 font-bold">Traditional WordPress / PHP CMS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Page Load Speed & Edge Caching</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Sub-second (300ms–600ms) with pre-rendered static HTML cached globally on Cloudflare edge
                    </td>
                    <td className="p-4 sm:p-5">2.5s–5.0s; relies on runtime PHP processing and multiple MySQL database queries per visit</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Google Core Web Vitals</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Consistently 95–100 across mobile & desktop with zero layout shifts (CLS 0.00)
                    </td>
                    <td className="p-4 sm:p-5">Frequently fails LCP and CLS due to heavy visual builder scripts, unoptimized CSS, and bloated plugins</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Security & Attack Surface</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Zero exposed backend server or database on the frontend; immune to SQL injection and web shell exploits
                    </td>
                    <td className="p-4 sm:p-5">Frequent security vulnerabilities; constant target of automated plugin exploits and brute-force logins</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">GEO & AI Search Engine Readiness</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Clean semantic HTML5 DOM with automated, verified Schema.org JSON-LD graphs for ChatGPT & Perplexity
                    </td>
                    <td className="p-4 sm:p-5">Cluttered markup overloaded with visual builder shortcodes and conflicting third-party SEO plugins</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Ongoing Maintenance Overhead</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Zero plugin update breakage; zero database crashes; high reliability on immutable static hosting
                    </td>
                    <td className="p-4 sm:p-5">Weekly plugin updates, database optimization routines, security patches, and theme incompatibility crashes</td>
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
                Transparent Web Estimates
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                How Website Development Costs Are Determined
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Key technical parameters governing engineering investment for corporate websites and web portals in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">1. Page Count & Structure</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Single landing page vs. multi-page corporate website vs. multi-tier B2B distributor catalog portal.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">2. Bespoke UI/UX Design</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom Figma design system reflecting authentic brand typography and color palette vs. generic template styling.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">3. Technical SEO & GEO Graphs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured JSON-LD schema graphs, dynamic XML sitemaps, OpenGraph metadata, and Core Web Vitals optimization.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">4. Integrations & Interactivity</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  WhatsApp direct inquiry triggers, CRM lead routing webhooks, payment gateways, and interactive calculators.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-600 uppercase tracking-widest">
                Fixed-Price Delivery
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                RexonSoftTech provides <strong>clear, upfront quotes with zero recurring CMS plugin fees</strong> or hosting lock-ins. Every website is handed over with complete source code ownership and comprehensive deployment documentation.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-accent-600 hover:text-accent-700 hover:underline"
                >
                  Request a Free Website Estimate <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              Website Development FAQs
            </h2>
                        <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Who provides high-performance website development services in Chennai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>RexonSoftTech</strong> provides enterprise-grade, high-speed website development in Chennai, based in Anna Nagar (PIN 600040). We engineer custom Next.js websites optimized for sub-second load times, 95+ Core Web Vitals, Google SEO, and AI answer engine discoverability.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Why do you use Next.js instead of WordPress for corporate websites?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Next.js provides sub-second load times, superior SEO indexability, zero plugin security vulnerabilities, and 95+ Core Web Vitals scores compared to legacy WordPress themes that become bloated and fragile with third-party plugins.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Can you build a private B2B wholesale ordering portal for our distributors?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. We engineer secure B2B ordering portals where wholesale distributors log in with multi-tiered price lists, check real-time warehouse inventory, place bulk orders with custom credit limits, pay via dynamic UPI / net banking, and view automated ledger statements synced with your backend ERP or accounting system.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Is mobile responsiveness guaranteed?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Every website is engineered mobile-first with adaptive layouts tested across all modern iOS and Android device screen sizes.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How long does a corporate website development project take?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Most high-performance corporate websites launch within <strong>2 to 4 weeks</strong>, including custom UI design, responsive development, technical SEO setup, and content integration.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Does the website include technical SEO and analytics setup?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Every website we build includes semantic HTML5 structure, OpenGraph cards, JSON-LD Schema.org structured data, dynamic XML sitemaps, robots.txt, and Google Analytics / Tag Manager integration by default.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How much does corporate website development cost in Chennai and India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Website development costs in India depend on total page count, custom UI design depth, interactive functionality (forms, catalogs, portals), and technical SEO/GEO engineering. RexonSoftTech offers transparent milestone pricing for custom Next.js websites with zero recurring CMS plugin fees.
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
