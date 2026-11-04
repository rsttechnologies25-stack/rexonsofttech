import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Smartphone, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  WifiOff, 
  RefreshCw,
  QrCode,
  BellRing,
  Cpu,
  Database,
  Layers,
  Workflow,
  Server
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Chennai",
  description: "Mobile app development company in Chennai. Cross-platform React Native and Flutter mobile apps with offline data sync for sales, warehouse & logistics teams.",
  alternates: {
    canonical: "https://rexonsofttech.in/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Company in Chennai | RexonSoftTech",
    description: "Custom mobile app development for Android & iOS with offline data caching, camera barcode scanning, and push alerts.",
    url: "https://rexonsofttech.in/services/mobile-app-development",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://rexonsofttech.in/rst_logo.png", width: 640, height: 640, alt: "Mobile App Development Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company in Chennai | RexonSoftTech",
    description: "Native and hybrid mobile apps engineered for real-world enterprise operations.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function MobileAppPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://rexonsofttech.in/services/mobile-app-development#service",
    "name": "Mobile Application Development Services",
    "serviceType": "iOS & Android Mobile App Engineering",
    "description": "Cross-platform and native mobile app development in Chennai for field sales, warehouse inventory scanning, and enterprise customer mobility.",
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
      "name": "Mobile Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Native Cross-Platform Apps (iOS & Android)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Offline-First Field Sales & Order Booking Apps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehouse Barcode Scanning & Dispatch Mobile Tools"
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
        "name": "Who provides mobile app development services in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RexonSoftTech provides native and cross-platform mobile application development in Chennai, based in Anna Nagar (PIN 600040). We engineer enterprise Android and iOS apps with offline SQLite sync, barcode scanning, and direct ERP/CRM connectivity."
        }
      },
      {
        "@type": "Question",
        "name": "How long does mobile app development take from concept to Play Store and App Store release?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An MVP enterprise mobile application typically takes 6 to 10 weeks, encompassing UI/UX wireframing, frontend engineering in React Native/Flutter, offline sync database setup, backend API integration, and app store compliance submissions."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the mobile application source code and developer accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your company owns 100% of the mobile application source code, database architecture, and intellectual property. The application is published directly under your own Google Play Console and Apple Developer accounts."
        }
      },
      {
        "@type": "Question",
        "name": "Do you develop for both iOS and Android simultaneously?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Using modern cross-platform frameworks like React Native and Flutter, we engineer a single, high-performance codebase that deploys natively to both Apple iOS and Google Android, saving development time and maintenance cost."
        }
      },
      {
        "@type": "Question",
        "name": "Can the mobile app work when field staff have no cellular signal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design apps with an offline-first SQLite/watermelondb local database layer. Field personnel can create orders, register visits, and scan items offline; data syncs automatically to the central server when connectivity returns."
        }
      },
      {
        "@type": "Question",
        "name": "Does the app integrate with our existing ERP and inventory systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our mobile apps connect directly to your central backend APIs or ERP databases, ensuring immediate stock reconciliation, live price book updates, and instant invoice generation."
        }
      },
      {
        "@type": "Question",
        "name": "How much does mobile app development cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile application development costs in India are determined by platform target (iOS, Android, or cross-platform React Native), offline sync complexity, device hardware features (barcode scanning, Bluetooth printers, GPS tracking), and backend API requirements. RexonSoftTech provides transparent, fixed-scope milestone quotes with 100% source code ownership."
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
      { "@type": "ListItem", "position": 3, "name": "Mobile App Development", "item": "https://rexonsofttech.in/services/mobile-app-development" }
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
              iOS & Android Mobility
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

        {/* Declarative AI Answer Snippet */}
        <section className="bg-slate-50 border-b border-slate-200/80 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-accent-600 uppercase tracking-widest block">
                  Quick Answer • Enterprise Mobile App Engineering
                </span>
                <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                  <strong>Enterprise mobile application development</strong> is the creation of purpose-built iOS and Android apps engineered for frontline operational workers, field sales representatives, and warehouse logistics teams. Utilizing cross-platform frameworks like React Native and Flutter, these applications offer native camera barcode scanning, offline-first SQLite database synchronization, real-time GPS tracking, and seamless live synchronization with central ERP backends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
                Operational Mobility
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Built for Enterprise Field & Counter Mobility
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Native camera scanning, offline local storage, and real-time push notifications tailored for fast-paced operational workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <WifiOff className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Offline-First Data Sync</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Field sales reps can create order forms and scan inventory even inside underground basements or remote yards with zero internet connectivity.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Cross-Platform React Native</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unified codebase running natively on both iOS and Android devices, cutting development time and recurring maintenance costs in half.
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">Instant ERP Synchronization</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mobile transactions immediately update central warehouse balances, dispatch ledgers, and accounts in real time with automated conflict resolution.
                </p>
              </div>
            </div>

            {/* Regional Context & Corridor Presence */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Field Deployments Across Chennai & India
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  Equipping On-the-Ground Teams with Reliable Digital Tools
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Whether managing delivery runs across <strong>Chennai metropolitan corridors</strong>, field sales orders across retail networks in <strong>Tamil Nadu</strong>, or dispatch inspection checklists across logistics yards, our mobile applications keep operations connected.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Hardware Camera Barcodes</h4>
                  <p className="text-slate-600 mt-1">High-speed QR and 1D barcode scanning directly via device cameras—no separate scanner hardware required.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Bluetooth Thermal Receipts</h4>
                  <p className="text-slate-600 mt-1">Direct wireless printing to 2-inch and 3-inch thermal belt printers for instant customer delivery slips.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Role Security & Geofencing</h4>
                  <p className="text-slate-600 mt-1">Ensure sensitive pricing data stays protected with biometric login and optional site geofence verification.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block">Connect With Your Central ERP</span>
                <p className="text-sm font-bold text-navy-900">Discover how mobile apps integrate with our warehouse inventory engine</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/erp/inventory-management" className="text-xs font-bold text-accent-600 hover:underline">
                  Inventory ERP Module →
                </Link>
                <Link href="/services/erp-development" className="text-xs font-bold text-accent-600 hover:underline">
                  Custom ERP →
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
                Mobile Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                React Native Cross-Platform vs. Hybrid WebViews vs. App Templates
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                How our enterprise mobile engineering compares against cheap wrappers and rigid app templates.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-900">
                    <th className="p-4 sm:p-5 font-bold">Performance Criteria</th>
                    <th className="p-4 sm:p-5 font-bold text-accent-400 bg-navy-900/80 border-x border-navy-800">
                      RexonSoftTech React Native
                    </th>
                    <th className="p-4 sm:p-5 font-bold">Hybrid WebView Wrappers</th>
                    <th className="p-4 sm:p-5 font-bold">Off-the-Shelf App Templates</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">UI Responsiveness & Frame Rate</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      60 FPS fluid native gestures with direct bridge to iOS & Android native UI components
                    </td>
                    <td className="p-4 sm:p-5">Sluggish browser rendering; frequent scroll stutter and visible touch latency</td>
                    <td className="p-4 sm:p-5">Rigid generic interfaces that cannot be customized to complex field workflows</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Offline Functionality</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Robust SQLite / WatermelonDB offline storage with background sync when signal recovers
                    </td>
                    <td className="p-4 sm:p-5">Fails completely without active 4G/5G connection; unusable in basements & remote yards</td>
                    <td className="p-4 sm:p-5">Basic caching that frequently results in lost sales orders or duplicated entries</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Hardware Integration</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Direct native control of camera barcode scanners, Bluetooth receipt printers, and GPS
                    </td>
                    <td className="p-4 sm:p-5">Intermittent device bridge failures and high battery drain from continuous browser threads</td>
                    <td className="p-4 sm:p-5">Limited to basic camera photos; no support for industrial scanners or thermal printing</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">ERP Backend Synchronization</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Direct, encrypted API synchronization with central PostgreSQL inventory & billing registers
                    </td>
                    <td className="p-4 sm:p-5">Fragile web requests prone to timeout errors during bulk warehouse check-ins</td>
                    <td className="p-4 sm:p-5">Closed proprietary cloud database with difficult third-party integration options</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-navy-900">Enterprise Security & IP Ownership</td>
                    <td className="p-4 sm:p-5 bg-accent-50/30 border-x border-slate-200 font-medium text-accent-700">
                      Biometric login (FaceID / Fingerprint), encrypted local keychain, and 100% client code ownership
                    </td>
                    <td className="p-4 sm:p-5">Vulnerable to browser cache extraction, session hijacking, and unencrypted local data</td>
                    <td className="p-4 sm:p-5">Vendor subscription dependency; source code cannot be audited or self-hosted</td>
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
                How Mobile App Development Costs Are Determined
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                A transparent breakdown of technical factors that determine native and cross-platform mobile app investment in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">1. Target Platforms & Screens</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dual-platform delivery (iOS + Android) using React Native, custom tablet layouts, and total screen workflow count.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">2. Offline Sync & Local DB</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Embedded SQLite/WatermelonDB storage, background synchronization queues, and bi-directional conflict resolution logic.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">3. Native Device Hardware</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Camera barcode/QR scanners, Bluetooth ESC/POS thermal receipt printers, live GPS geofencing, and biometric authentication.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-sm">4. Backend APIs & App Stores</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Secure REST/GraphQL API integration with ERP systems, Apple App Store & Google Play Store submission and compliance.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-accent-600 uppercase tracking-widest">
                Milestone-Based Engineering
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We quote mobile application projects on <strong>clear milestone deliverables</strong> with transparent timelines. You receive full git source code access, signed APK/AAB and iOS builds, and comprehensive handover documentation.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-accent-600 hover:text-accent-700 hover:underline"
                >
                  Request a Detailed Mobile Proposal <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-lightBg border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center">
              Mobile Application Development FAQs
            </h2>
                        <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Who provides mobile app development services in Chennai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>RexonSoftTech</strong> provides native and cross-platform mobile application development in Chennai, based in Anna Nagar (PIN 600040). We engineer enterprise Android and iOS apps with offline SQLite sync, barcode scanning, and direct ERP/CRM connectivity.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How long does mobile app development take from concept to app store release?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An MVP enterprise mobile app typically takes <strong>6 to 10 weeks</strong>, covering interactive UI/UX prototyping, React Native/Flutter development, offline SQLite synchronization, backend REST API integration, and deployment to Google Play Console and Apple App Store.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Who owns the mobile application source code and developer accounts?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your business retains <strong>100% complete source code ownership</strong> and intellectual property rights. The binaries are released under your corporate Google Play and Apple Developer accounts with zero recurring vendor royalties.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Do you develop for both iOS and Android simultaneously?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Using modern cross-platform frameworks like React Native and Flutter, we engineer a single, high-performance codebase that deploys natively to both Apple iOS and Google Android, saving development time and maintenance cost.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Can the mobile app work when field staff have no cellular signal?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. We design apps with an offline-first SQLite/watermelondb local database layer. Field personnel can create orders, register visits, and scan items offline; data syncs automatically to the central server when connectivity returns.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  Does the app integrate with our existing ERP and inventory systems?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Yes. Our mobile apps connect directly to your central backend APIs or ERP databases, ensuring immediate stock reconciliation, live price book updates, and instant invoice generation.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                  How much does mobile app development cost in India?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mobile application development costs in India are determined by platform target (iOS, Android, or cross-platform React Native), offline sync complexity, device hardware features (barcode scanning, Bluetooth printers, GPS tracking), and backend API requirements. RexonSoftTech provides transparent, fixed-scope milestone quotes with 100% source code ownership.
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
