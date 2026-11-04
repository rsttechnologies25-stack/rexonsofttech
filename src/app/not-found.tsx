import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { 
  Home, 
  ArrowRight, 
  Search, 
  Layers, 
  Database, 
  Receipt
} from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist or has been moved. Explore RexonSoftTech custom ERP and software development services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickLinks = [
    {
      name: "Custom ERP Development",
      description: "Tailored ERP systems for manufacturing, steel yards & distribution.",
      href: "/services/erp-development",
      icon: Layers,
    },
    {
      name: "Custom Software Engineering",
      description: "Bespoke business portals, CRM workflows & cloud databases.",
      href: "/services/custom-software-development",
      icon: Database,
    },
    {
      name: "GST Billing Software",
      description: "Fast Indian tax automation & instant UPI invoice dispatch.",
      href: "/erp/gst-billing",
      icon: Receipt,
    },
    {
      name: "All Services Hub",
      description: "Full-stack software engineering & technology solutions.",
      href: "/services",
      icon: Search,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20 bg-[#FFF3E6] min-h-[85vh] flex flex-col justify-center">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#260E22] via-[#381932] to-[#260E22] text-[#FFF3E6] py-20 border-b border-[#FFF3E6]/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFF3E6]/5 blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <span className="inline-flex items-center space-x-2 text-xs font-bold text-[#FFF3E6] uppercase tracking-widest bg-[#FFF3E6]/10 border border-[#FFF3E6]/20 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E8BCA0] animate-pulse" />
              <span>Error 404 • Page Not Found</span>
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Lost in the Codebase?
            </h1>

            <p className="text-base sm:text-lg text-[#EAD8C7] max-w-xl mx-auto leading-relaxed">
              The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let us help you get back on track.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-[#FFF3E6] hover:bg-[#FCE9D7] text-[#381932] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <Home className="w-4 h-4 mr-2" />
                Return to Homepage
              </Link>
              <a
                href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I%20reached%20a%20missing%20page%20and%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} />
                Need Help? Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Helpful Navigation Cards */}
        <section className="py-16 bg-[#FFF3E6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#8C2969] uppercase tracking-widest bg-[#381932]/10 border border-[#381932]/20 px-3 py-1 rounded-full">
                Popular Destinations
              </span>
              <h2 className="text-2xl font-extrabold text-[#381932]">
                Explore Key Sections
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="p-6 bg-[#FAF0E4] hover:bg-white border border-[#EAD8C7] rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md group flex items-start space-x-4 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF3E6] text-[#381932] border border-[#EAD8C7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#381932] group-hover:text-[#FFF3E6] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-[#381932] text-sm group-hover:text-[#8C2969] transition-colors flex items-center">
                        {item.name}
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h3>
                      <p className="text-xs text-[#5D4356] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
