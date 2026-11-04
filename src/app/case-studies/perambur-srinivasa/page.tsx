import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ArrowRight, ExternalLink, CheckCircle2, ShieldCheck, Building2, Layers, Cpu, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Perambur Srinivasa Platform Case Study",
  description: "How RexonSoftTech engineered a high-performance e-commerce platform and retail product catalog for Perambur Srinivasa in Chennai.",
  alternates: {
    canonical: "https://rexonsofttech.in/case-studies/perambur-srinivasa",
  },
  openGraph: {
    title: "Case Study: Perambur Srinivasa E-Commerce Platform | RexonSoftTech",
    description: "Retail e-commerce platform and digital sweets catalog engineered with Next.js for high festival concurrency.",
    url: "https://rexonsofttech.in/case-studies/perambur-srinivasa",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/project_perambur.png", width: 1200, height: 630, alt: "Perambur Srinivasa Case Study" }],
  }
};

export default function PeramburSrinivasaCaseStudy() {
    const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://rexonsofttech.in/case-studies/perambur-srinivasa#article",
    "headline": "Perambur Srinivasa: Traditional Sweets E-Commerce Platform",
    "description": "Engineering a high-performance digital presence with frictionless festive gifting workflows and multi-branch retail store locator.",
    "image": "https://rexonsofttech.in/project_perambur.png",
    "author": {
      "@type": "Organization",
      "@id": "https://rexonsofttech.in/#organization",
      "name": "RexonSoftTech Engineering Team"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://rexonsofttech.in/#organization",
      "name": "RexonSoftTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rexonsofttech.in/rst_logo.png"
      }
    },
    "about": {
      "@type": "Organization",
      "name": "Perambur Srinivasa Sweets and Snacks"
    },
    "inLanguage": "en-IN"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://rexonsofttech.in/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Perambur Srinivasa", "item": "https://rexonsofttech.in/case-studies/perambur-srinivasa" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-accent-400 uppercase tracking-widest">
              <span>Client Case Study</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Perambur Srinivasa: Modern Retail E-Commerce Architecture
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Engineering a high-performance digital storefront and product catalog for one of Chennai's premier traditional sweets and snack brands.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            
            {/* Meta Header Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs">
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Client</span>
                <span className="font-bold text-navy-900 text-sm mt-0.5 block">Perambur Srinivasa</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Industry</span>
                <span className="font-bold text-navy-900 text-sm mt-0.5 block">Retail Sweets & Snacks</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                <span className="font-bold text-navy-900 text-sm mt-0.5 block">Chennai, India</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block">Live Platform</span>
                <a href="https://www.perambursrinivasa.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-accent-600 hover:underline text-sm mt-0.5 inline-flex items-center">
                  Visit Site <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <Image src="/project_perambur.png" alt="Perambur Srinivasa Platform" fill className="object-cover object-top" />
            </div>

            {/* Structured Case Content */}
            <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">1. The Operational Challenge</h2>
                <p>
                  Perambur Srinivasa operates a beloved network of sweet and savouries retail stores across Chennai. During major festive periods (such as Diwali, Pongal, and New Year), order volumes surge exponentially. The brand needed an online presence that could present their complete, seasonal product catalog, handle high-concurrency customer browsing, and streamline digital inquiries without server crashes or visual lag.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">2. The Engineering Solution</h2>
                <p>
                  RexonSoftTech designed and developed a custom, high-speed digital storefront utilizing Next.js and React. By leveraging modern Static Site Generation (SSG) with optimized image assets, the platform renders product pages nearly instantaneously on mobile networks across Tamil Nadu.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">3. What We Built</h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> High-speed responsive product catalog categorized by sweets, savouries, and seasonal gift boxes.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> Frictionless bulk corporate gifting inquiry workflows with direct WhatsApp routing.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> Multi-branch store locator helping customers find the nearest physical retail outlet across Chennai.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" /> Mobile-first responsive UI engineered for smartphone shoppers.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">4. Technology Stack</h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 bg-slate-100 rounded-lg font-mono text-navy-900">Next.js</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-lg font-mono text-navy-900">React</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-lg font-mono text-navy-900">Tailwind CSS</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-lg font-mono text-navy-900">TypeScript</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-lg font-mono text-navy-900">Cloudflare CDN</span>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">5. Implementation Highlights & Results</h2>
                <p>
                  The platform successfully launched with sub-second page delivery speeds, zero downtime during high-traffic festival periods, and an intuitive mobile catalog that provides clear product information and seamless order inquiry channels.
                </p>
              </div>

              {/* Testimonial Box */}
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-500 italic">
                <span className="font-bold text-navy-900 block not-italic mb-1">Client Feedback</span>
                Client testimonial pending formal publication approval. Platform active and verified at perambursrinivasa.com.
              </div>

              {/* Related Services */}
              <div className="pt-6 border-t border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Related Services</span>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services/website-development" className="text-xs font-bold text-accent-600 hover:underline">
                    Website Development →
                  </Link>
                  <Link href="/services/custom-software-development" className="text-xs font-bold text-accent-600 hover:underline">
                    Custom Software Development →
                  </Link>
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
