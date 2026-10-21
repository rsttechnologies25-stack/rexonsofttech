"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Smartphone, 
  Terminal, 
  Layers, 
  Database,
  Lock,
  Sparkles,
  Activity,
  Server,
  Zap,
  Shield
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"erp" | "web" | "security">("erp");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const whatsappHeroUrl = `https://wa.me/917871654777?text=${encodeURIComponent(
    "Hi RexonSoftTech, I'm looking for custom software / ERP development for my business. Let's discuss."
  )}`;

  return (
    <section id="hero" className="relative bg-velvet-plum subtle-grain text-[#FFF3E6] pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Decorative Glows */}
      <div className="hero-glow" />
      <div className="hero-glow-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Full-Service Software Positioning */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Tag badge */}
            <div className="inline-flex items-center space-x-2 bg-[#FFF3E6]/10 border border-[#FFF3E6]/25 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FFF3E6] animate-pulse" />
              <span className="text-xs font-bold text-[#FFF3E6] uppercase tracking-wider">
                Full-Service Software Development Company
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] text-white">
              Custom ERP & Software Development for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3E6] via-[#E8BCA0] to-accent-300">
                Growing Businesses
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#EBD9C8] max-w-2xl leading-relaxed">
              From flagship custom ERP systems and business automation to high-performance corporate websites, mobile apps, and cybersecurity—we engineer custom technology solutions built around your exact workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => {
                  trackEvent("contact_form_start", { form_id: "hero_cta" });
                  scrollToContact();
                }}
                className="inline-flex items-center justify-center bg-[#FFF3E6] hover:bg-[#FCE9D7] text-[#381932] font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-black/25 transition-all text-sm group cursor-pointer active:scale-95"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero_button" })}
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-[#FFF3E6] font-bold px-6 py-3.5 rounded-xl border border-white/15 backdrop-blur-sm transition-all text-sm group cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" size={18} />
                WhatsApp Us
              </a>
            </div>

            {/* Balanced Capabilities Bar */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#D8B094] mb-3">
                Full Spectrum of Engineering Services
              </p>
              <div className="flex flex-wrap items-center gap-y-2 text-xs font-semibold text-slate-300">
                <span className="flex items-center text-accent-300">
                  <Sparkles className="w-3.5 h-3.5 mr-1" /> Flagship Custom ERP
                </span>
                <span className="mx-3 text-slate-600">•</span>
                <span className="flex items-center">
                  <Terminal className="w-3.5 h-3.5 text-accent-400 mr-1.5" /> Custom Software
                </span>
                <span className="mx-3 text-slate-600">•</span>
                <span className="flex items-center">
                  <Globe className="w-3.5 h-3.5 text-accent-400 mr-1.5" /> Websites & Apps
                </span>
                <span className="mx-3 text-slate-600">•</span>
                <span className="flex items-center">
                  <Smartphone className="w-3.5 h-3.5 text-accent-400 mr-1.5" /> Mobile Apps
                </span>
                <span className="mx-3 text-slate-600">•</span>
                <span className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-400 mr-1.5" /> Cybersecurity
                </span>
              </div>
            </div>

            {/* Quick Proof Pillars */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white">100%</p>
                <p className="text-xs text-slate-400 mt-0.5">Tailored to Workflows</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white">Zero</p>
                <p className="text-xs text-slate-400 mt-0.5">Recurring License Penalties</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white">Chennai</p>
                <p className="text-xs text-slate-400 mt-0.5">Direct Engineering Office</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Enterprise Software Control Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/25 to-[#381932]/50 rounded-3xl blur-3xl opacity-50 pointer-events-none" />

              {/* Multi-Service Architecture Panel */}
              <div className="relative glass-card rounded-2xl shadow-2xl border border-[#FFF3E6]/15 overflow-hidden backdrop-blur-xl bg-[#281225]/90">
                
                {/* Header Bar */}
                <div className="bg-[#1F0A1D] px-5 py-3.5 border-b border-[#FFF3E6]/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-[#D6BDAB] font-mono ml-2">rexonsofttech.in</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] bg-[#FFF3E6]/10 text-[#FFF3E6] border border-[#FFF3E6]/20 px-2.5 py-0.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Live Architecture</span>
                  </div>
                </div>

                {/* Interactive Mode Tabs */}
                <div className="bg-[#260E22]/80 p-2 border-b border-[#FFF3E6]/10 grid grid-cols-3 gap-1 text-center">
                  <button
                    type="button"
                    onClick={() => setActiveTab("erp")}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      activeTab === "erp"
                        ? "bg-[#FFF3E6] text-[#381932] shadow-sm"
                        : "text-[#D8B094] hover:text-[#FFF3E6] hover:bg-white/5"
                    }`}
                  >
                    Flagship ERP
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("web")}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      activeTab === "web"
                        ? "bg-[#FFF3E6] text-[#381932] shadow-sm"
                        : "text-[#D8B094] hover:text-[#FFF3E6] hover:bg-white/5"
                    }`}
                  >
                    Web & Apps
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("security")}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      activeTab === "security"
                        ? "bg-[#FFF3E6] text-[#381932] shadow-sm"
                        : "text-[#D8B094] hover:text-[#FFF3E6] hover:bg-white/5"
                    }`}
                  >
                    Cybersecurity
                  </button>
                </div>

                {/* Body - Active Tab View */}
                <div className="p-6 space-y-3.5 text-left">
                  <AnimatePresence mode="wait">
                    {activeTab === "erp" && (
                      <motion.div
                        key="erp"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        <div className="p-3 bg-white/5 border border-accent-500/30 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0">
                              <Cpu className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">GST 1 & 3B Engine</p>
                              <p className="text-[10px] text-slate-400">Automated e-invoice & ledger sync</p>
                            </div>
                          </div>
                          <span className="text-[10px] bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-md font-mono">
                            Auto-Synced
                          </span>
                        </div>

                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-[#FFF3E6]/10 text-[#FFF3E6] flex items-center justify-center flex-shrink-0">
                              <Layers className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">Multi-Rack Inventory</p>
                              <p className="text-[10px] text-slate-400">14,820 SKUs live indexed by bay & rack</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-300 font-mono">
                            Zero Delay
                          </span>
                        </div>

                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                              <Activity className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">Production Work Orders</p>
                              <p className="text-[10px] text-slate-400">Shop-floor cutting, assembly & dispatch flow</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono">
                            99.98% SLA
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "web" && (
                      <motion.div
                        key="web"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        <div className="p-3 bg-white/5 border border-accent-500/30 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-[#FFF3E6]/15 text-[#FFF3E6] flex items-center justify-center flex-shrink-0">
                              <Globe className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">Next.js 16 Web Core</p>
                              <p className="text-[10px] text-slate-400">Sub-second SSR & Core Web Vitals 99</p>
                            </div>
                          </div>
                          <span className="text-[10px] bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-md font-mono">
                            Score 99
                          </span>
                        </div>

                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                              <Server className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">Edge Global Delivery</p>
                              <p className="text-[10px] text-slate-400">Cloudflare Edge CDN routing</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-300 font-mono">
                            0.24s TTFB
                          </span>
                        </div>

                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                              <Smartphone className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">Mobile E-Store & PWA</p>
                              <p className="text-[10px] text-slate-400">Direct WhatsApp checkout pipeline</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-green-400 font-mono">
                            Connected
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "security" && (
                      <motion.div
                        key="security"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        <div className="p-3 bg-white/5 border border-accent-500/30 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                              <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">OWASP Top 10 Hardened</p>
                              <p className="text-[10px] text-slate-400">XSS, SQLi & CSRF defense verified</p>
                            </div>
                          </div>
                          <span className="text-[10px] bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-md font-mono">
                            A+ Grade
                          </span>
                        </div>

                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-[#FFF3E6]/10 text-[#FFF3E6] flex items-center justify-center flex-shrink-0">
                              <Lock className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">Role-Based Access (RBAC)</p>
                              <p className="text-[10px] text-slate-400">Restricted staff permissions & audit trails</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-300 font-mono">
                            Enforced
                          </span>
                        </div>

                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                              <Database className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">100% Owned Source Code</p>
                              <p className="text-[10px] text-slate-400">Zero vendor lock-in or recurring fees</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-amber-300 font-mono">
                            Client Owned
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Security Footer in Mockup */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center text-green-400">
                      <Lock className="w-3.5 h-3.5 mr-1.5" />
                      <span>Security & VAPT Audited</span>
                    </div>
                    <span className="text-slate-500 font-mono">Headquartered in Chennai</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
