"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  Sparkles
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function HeroSection() {
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
    <section id="hero" className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
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
            <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/25 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-xs font-bold text-accent-400 uppercase tracking-wider">
                Full-Service Software Development Company
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] text-white">
              We Build Software That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-accent-500">
                Runs Your Business
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              From flagship custom ERP systems and business automation to high-performance corporate websites, mobile apps, and cybersecurity—we engineer custom technology solutions built around your exact workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-1">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-7 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-base"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-base"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" size={20} />
                WhatsApp Us
              </a>
            </div>

            {/* Balanced Capabilities Bar */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
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

          {/* Right Column - Multi-Layer Technology Architecture Blueprint */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/30 to-blue-600/20 rounded-3xl blur-3xl opacity-40 pointer-events-none" />

              {/* Multi-Service Architecture Panel */}
              <div className="relative glass-card rounded-2xl shadow-2xl border border-white/15 overflow-hidden backdrop-blur-xl bg-navy-950/75">
                
                {/* Header Bar */}
                <div className="bg-navy-950 px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-slate-400 font-mono ml-2">rexon-tech-stack.cloud</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] bg-accent-500/10 text-accent-400 border border-accent-500/20 px-2.5 py-0.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Full-Stack Platform</span>
                  </div>
                </div>

                {/* Body - Clean Layered Architecture */}
                <div className="p-6 space-y-3.5">
                  <div className="text-left pb-1">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      Integrated Software Stack
                    </span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Tailored Digital Infrastructure
                    </p>
                  </div>

                  {/* Layer 1: Flagship ERP & Core Automation */}
                  <div className="p-3 bg-white/5 border border-accent-500/30 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-left">
                      <div className="w-8 h-8 rounded-lg bg-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-xs font-bold text-white">Flagship Custom ERP</p>
                          <span className="text-[9px] bg-accent-500 text-white font-bold px-1.5 py-0.2 rounded">Core</span>
                        </div>
                        <p className="text-[10px] text-slate-400">GST billing, stock racks & production workflows</p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 2: Web Applications & Customer Portals */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-left">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Web & Mobile Platforms</p>
                        <p className="text-[10px] text-slate-400">High-conversion corporate sites, e-stores & apps</p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 3: Database & Cloud Integration */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-left">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Secure Relational Databases</p>
                        <p className="text-[10px] text-slate-400">Instant search indexing, role-based access & APIs</p>
                      </div>
                    </div>
                  </div>

                  {/* Security Footer in Mockup */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center text-green-400">
                      <Lock className="w-3.5 h-3.5 mr-1.5" />
                      <span>Security & VAPT Audited</span>
                    </div>
                    <span className="text-slate-500 font-mono">100% Owned Code</span>
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
