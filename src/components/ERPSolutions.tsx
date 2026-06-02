"use client";

import { useState } from "react";
import { Cpu, Award, BarChart3, CheckCircle2, ChevronRight, Activity, TrendingUp } from "lucide-react";

export default function ERPSolutions() {
  const [activeTab, setActiveTab] = useState("custom");

  const erps = {
    custom: {
      title: "Custom ERP Solutions",
      desc: "Robust, fully-tailored workflow platforms designed specifically around your unique enterprise demands, business processes, and user requests.",
      bullets: [
        "Tailored Workflow & Process Automation",
        "Dynamic Task & Asset Allocations",
        "Custom Inventory & Serial Tracking Modules",
        "Work Order Management & Team Dispatching",
        "Robust Quality Control & Inspection Checklists",
        "Custom Reporting & Live API Integrations"
      ],
      visual: (
        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-navy-900 font-semibold">Workflow Process Steps</span>
            <span className="text-[10px] text-green-500 font-bold bg-green-50 px-2 py-0.5 rounded">Active</span>
          </div>
          
          <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            <div className="relative flex items-center space-x-3">
              <span className="absolute -left-5 w-2.5 h-2.5 rounded-full bg-accent-500 ring-4 ring-blue-50" />
              <p className="text-xs font-bold text-navy-900">Step 1: Request Intake & Study</p>
            </div>
            <div className="relative flex items-center space-x-3">
              <span className="absolute -left-5 w-2.5 h-2.5 rounded-full bg-accent-500 ring-4 ring-blue-50" />
              <p className="text-xs font-bold text-navy-900">Step 2: Custom Pipeline Allocation</p>
            </div>
            <div className="relative flex items-center space-x-3 text-slate-400">
              <span className="absolute -left-5 w-2.5 h-2.5 rounded-full bg-slate-200" />
              <p className="text-xs font-semibold">Step 3: Quality Control & Dispatch</p>
            </div>
          </div>
        </div>
      )
    },
    steel: {
      title: "Steel Fabrication ERP Systems",
      desc: "Specialized workflows handling structural raw metrics, heat codes, vendor purchase ledger syncs, and heavy structural fabrications.",
      bullets: [
        "GRN (Goods Receipt Note) Heat Code Trackers",
        "Purchase Workflows & Multi-stage Approvals",
        "Raw Steel Bar & Sheet Tracking",
        "Vendor Job Work & Out-sourced Processing",
        "Automatic GST Billing & Ledger Dispatching"
      ],
      visual: (
        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-navy-900 font-mono">Heat Code: #HC-894-A</span>
            <span className="text-[10px] text-accent-500 font-bold bg-blue-50 px-2 py-0.5 rounded">GRN Sync</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg">
              <p className="text-[9px] text-slate-400 font-semibold uppercase">Total Plates In Stock</p>
              <p className="text-sm font-bold text-navy-900 mt-1">450 Tons</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg">
              <p className="text-[9px] text-slate-400 font-semibold uppercase">Heat Inspected</p>
              <p className="text-sm font-bold text-green-500 mt-1">100% Passed</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg flex items-center justify-between text-xs font-medium text-slate-600">
            <span>GST Audit Ledger status</span>
            <span className="text-green-500 font-bold">Compliant</span>
          </div>
        </div>
      )
    },
    analytics: {
      title: "Dashboard & Live Analytics",
      desc: "Instant insight reports consolidating inventory rates, sales performance, factory operational metrics, and client accounts.",
      bullets: [
        "Real-Time Plant & Assembly Line Metrics",
        "Detailed Financial Reports & Ledger Syncs",
        "Automated Production Loggers",
        "Inventory Turnover Rate Analytics",
        "Performance Dashboards with Scheduled Reports"
      ],
      visual: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-semibold">Total Turnovers</p>
              <p className="text-base font-extrabold text-navy-900 mt-0.5">₹4,28,90,000</p>
            </div>
            <div className="flex items-center text-xs font-bold text-green-500 bg-green-50 px-2.5 py-0.5 rounded">
              <TrendingUp className="w-3.5 h-3.5 mr-1" /> +24%
            </div>
          </div>
          
          {/* SVG Bar Chart */}
          <div className="h-28 w-full flex items-end justify-between px-2 pt-4">
            <div className="w-[12%] h-[40%] bg-slate-100 rounded-t" />
            <div className="w-[12%] h-[60%] bg-slate-100 rounded-t" />
            <div className="w-[12%] h-[50%] bg-slate-100 rounded-t" />
            <div className="w-[12%] h-[80%] bg-accent-500 rounded-t" />
            <div className="w-[12%] h-[95%] bg-navy-800 rounded-t" />
          </div>
          <div className="flex justify-between text-[8px] text-slate-400 font-bold uppercase tracking-wider">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
          </div>
        </div>
      )
    }
  };

  const currentErp = erps[activeTab as keyof typeof erps];

  return (
    <section id="erp-solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Operational Engines
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Integrated Enterprise ERP Solutions
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Scalable, module-based systems engineered to map internal assets, optimize material turnovers, and provide clean financial auditing.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("custom")}
            className={`flex items-center px-6 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 shadow-sm ${
              activeTab === "custom"
                ? "bg-navy-900 text-white shadow-md shadow-navy-900/10"
                : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-100"
            }`}
          >
            <Cpu className="w-4.5 h-4.5 mr-2" /> Custom ERP Solutions
          </button>
          <button
            onClick={() => setActiveTab("steel")}
            className={`flex items-center px-6 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 shadow-sm ${
              activeTab === "steel"
                ? "bg-navy-900 text-white shadow-md shadow-navy-900/10"
                : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-100"
            }`}
          >
            <Award className="w-4.5 h-4.5 mr-2" /> Steel Fabrication ERP
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center px-6 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 shadow-sm ${
              activeTab === "analytics"
                ? "bg-navy-900 text-white shadow-md shadow-navy-900/10"
                : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-100"
            }`}
          >
            <BarChart3 className="w-4.5 h-4.5 mr-2" /> Dashboards & Analytics
          </button>
        </div>

        {/* Tab Content Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center bg-slate-50 border border-slate-100/50 p-8 sm:p-12 rounded-3xl">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-navy-900">
              {currentErp.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {currentErp.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100/80">
              {currentErp.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-slate-600">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs font-semibold">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Panel (Simulating Dashboard widgets) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-lg relative">
              <div className="absolute top-4 right-4 flex items-center space-x-1.5 text-[9px] bg-accent-500/10 text-accent-500 border border-accent-500/10 px-2 py-0.5 rounded font-bold uppercase tracking-widest">
                <Activity className="w-3 h-3 animate-pulse" /> Live Tracker
              </div>
              
              {currentErp.visual}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
