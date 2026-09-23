import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Smartphone, ArrowRight, Zap, CheckCircle2, ShieldCheck, WifiOff, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Company Chennai | iOS & Android | RexonSoftTech",
  description: "Cross-platform and native mobile application development in Chennai. Fast React Native and Flutter mobile apps with offline synchronization.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Company Chennai | RexonSoftTech",
    description: "Custom mobile app development for Android & iOS with offline data caching, camera barcode scanning, and push alerts.",
    url: "https://rexonsofttech.in/services/mobile-app-development",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Mobile App Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company Chennai | RexonSoftTech",
    description: "Native and hybrid mobile apps engineered for real-world enterprise operations.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function MobileAppPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexonsofttech.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rexonsofttech.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Mobile App Development", "item": "https://rexonsofttech.in/services/mobile-app-development" }
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
              iOS & Android Engineering
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Mobile Application Development in Chennai
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We build high-performance mobile apps for sales executives, delivery drivers, warehouse staff, and end consumers with offline data sync.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                Plan Your Mobile App <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'm%20looking%20for%20mobile%20app%20development." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all">
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Built for Enterprise Field & Counter Mobility
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Native camera scanning, offline local storage, and real-time push notifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <WifiOff className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Offline-First Data Sync</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Field sales reps can create order forms and scan inventory even inside underground basements or remote yards with zero internet.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Cross-Platform React Native</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unified codebase running natively on both iOS and Android devices, cutting development time and maintenance cost in half.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Instant ERP Synchronization</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mobile transactions immediately update central warehouse balances, dispatch ledgers, and accounts in real time.
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
