"use client";

import { ArrowRight, Play, CheckCircle2, TrendingUp, ShieldCheck, Activity, Terminal } from "lucide-react";

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

  const scrollToServices = () => {
    const element = document.getElementById("services");
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

  return (
    <section id="hero" className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white pt-32 pb-24 overflow-hidden">
      {/* Decorative Glows */}
      <div className="hero-glow" />
      <div className="hero-glow-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest">
                Transforming Business Through Technology
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Enterprise Software & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent-500">ERP Solutions</span> Company
            </h1>

            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              RexonSoftTech delivers highly scalable ERP systems, business automation software, corporate websites, customized web platforms, and mobile apps that streamline operations and accelerate growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Explore Services <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-400">Custom Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Secure</p>
                <p className="text-xs text-slate-400">GST Integrated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-slate-400">Support Approach</p>
              </div>
            </div>
          </div>

          {/* Right Column - Premium ERP & Security Dashboard Visual Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative behind-image glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500 to-indigo-600 rounded-3xl opacity-20 filter blur-3xl" />

              {/* Main Dashboard Frame */}
              <div className="relative glass-card rounded-2xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl">
                
                {/* Header Bar */}
                <div className="bg-navy-950/80 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-slate-400 font-mono ml-3">rexon-erp-v4.0.cloud</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs bg-accent-500/10 text-accent-500 border border-accent-500/20 px-2.5 py-1 rounded">
                    <Activity className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
                    Live Metrics
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-6 space-y-6 bg-navy-900/40">
                  
                  {/* KPI Cards Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                      <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Active Orders</p>
                      <p className="text-lg font-bold text-white mt-1">1,482</p>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                      <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Efficiency</p>
                      <p className="text-lg font-bold text-green-400 mt-1">98.4%</p>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                      <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Billing Sync</p>
                      <p className="text-lg font-bold text-accent-500 mt-1">Success</p>
                    </div>
                  </div>

                  {/* Main Metric Visualization - SVG Area Chart */}
                  <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-slate-400 font-semibold">Manufacturing Output</p>
                        <p className="text-lg font-bold text-white">48,290 Tons</p>
                      </div>
                      <div className="flex items-center text-xs text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded">
                        <TrendingUp className="w-3.5 h-3.5 mr-1" />
                        +14.8%
                      </div>
                    </div>
                    
                    {/* SVG Chart */}
                    <div className="h-32 w-full flex items-end">
                      <svg viewBox="0 0 100 30" className="w-full h-full text-accent-500 overflow-visible" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path d="M 0 30 Q 15 22 25 18 T 50 15 T 75 8 T 100 5 L 100 30 Z" fill="url(#chartGradient)" />
                        {/* Line */}
                        <path d="M 0 30 Q 15 22 25 18 T 50 15 T 75 8 T 100 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        {/* Interactive Node */}
                        <circle cx="75" cy="8" r="2" className="fill-white stroke-accent-500 animate-ping" />
                        <circle cx="75" cy="8" r="1.5" className="fill-white stroke-accent-500" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom System Status */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                    <div className="flex items-center">
                      <ShieldCheck className="w-4.5 h-4.5 text-green-400 mr-2" />
                      <span>Security Core Activated</span>
                    </div>
                    <span>Data Retrieval: 0.2s</span>
                  </div>

                </div>
              </div>

              {/* Floating Widget 1 - Steel Fabrication Inventory Tracker */}
              <div className="absolute -left-10 -bottom-8 bg-navy-950 border border-white/10 rounded-2xl p-4 shadow-xl max-w-[200px] hidden md:block backdrop-blur-md animate-bounce" style={{ animationDuration: '6s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Steel Tracking</p>
                    <p className="text-xs font-extrabold text-white mt-0.5">GRN Dispatched</p>
                  </div>
                </div>
              </div>

              {/* Floating Widget 2 - Custom Billing API Status */}
              <div className="absolute -right-8 -top-8 bg-navy-950 border border-white/10 rounded-2xl p-4 shadow-xl max-w-[220px] hidden md:block backdrop-blur-md animate-bounce" style={{ animationDuration: '8s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Billing Integration</p>
                    <p className="text-xs font-extrabold text-white mt-0.5">GST Sync Completed</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
