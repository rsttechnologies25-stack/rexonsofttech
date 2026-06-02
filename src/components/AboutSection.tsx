"use client";

import { Check, ShieldCheck, Target, Eye, BarChart3, Database } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Abstract structural designs */}
      <div className="absolute top-0 right-0 w-[400px] height-[400px] bg-slate-50/50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Mockup Dashboard Circular Card (Ref 2 Style) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Visual Wrapper */}
              <div className="relative glass-card-light rounded-2xl p-6 shadow-xl border border-slate-100 overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-widest">Operation Overview</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-500 animate-pulse" />
                </div>

                {/* Circular chart illustration */}
                <div className="relative w-48 h-48 mx-auto flex items-center justify-center mb-6">
                  {/* Outer circle */}
                  <svg className="w-full h-full transform -rotate-95" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
                    <circle cx="50" cy="50" r="40" stroke="#2563EB" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="50.2" strokeLinecap="round" />
                  </svg>
                  
                  {/* Inside content */}
                  <div className="absolute text-center">
                    <p className="text-3xl font-extrabold text-navy-900">80%</p>
                    <p className="text-[10px] text-muted-text uppercase font-semibold tracking-wider">Automation Rate</p>
                  </div>
                </div>

                {/* Automation statistics */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-2.5">
                      <BarChart3 className="w-4 h-4 text-accent-500" />
                      <span className="text-xs font-bold text-navy-900">Process Optimization</span>
                    </div>
                    <span className="text-xs font-bold text-green-500">+45%</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-2.5">
                      <Database className="w-4 h-4 text-accent-500" />
                      <span className="text-xs font-bold text-navy-900">Manual Error Reduction</span>
                    </div>
                    <span className="text-xs font-bold text-accent-500">92%</span>
                  </div>
                </div>

              </div>

              {/* Behind card shadows */}
              <div className="absolute -right-4 -bottom-4 w-full h-full bg-slate-100/50 rounded-2xl -z-10 border border-slate-100" />
            </div>
          </div>

          {/* Right Column: About Content & Mission/Vision (Ref 1 Style) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest border-b-2 border-accent-500 pb-1.5">
                About RexonSoftTech
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-2">
                Delivering High-Quality, Scalable Software Solutions
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              RexonSoftTech is a dedicated software development company focused on delivering innovative, scalable, and business-oriented digital solutions. We specialize in robust ERP systems, custom software development, business automation platforms, enterprise web portals, mobile apps, and digital transformation architectures.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Our core objective is to help businesses simplify operations, reduce manual effort, eliminate operational redundancies, and accelerate corporate growth through cutting-edge technology integrations.
            </p>

            {/* Quick benefits check list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-accent-500">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold">Custom-Engineered ERPs</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-accent-500">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold">Dedicated Engineering Support</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-accent-500">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold">Seamless GST Integration</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-accent-500">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold">Secure Deployment Architectures</span>
              </div>
            </div>

            {/* Vision & Mission Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-navy-900 tracking-wider uppercase">Our Vision</h4>
                <p className="text-xs text-muted-text leading-relaxed">
                  To become a trusted technology partner for global businesses by delivering reliable, scalable, and future-ready software solutions.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-navy-900 tracking-wider uppercase">Our Mission</h4>
                <p className="text-xs text-muted-text leading-relaxed">
                  To empower businesses through digital transformation and automation by building software solutions that improve productivity and operational efficiency.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
