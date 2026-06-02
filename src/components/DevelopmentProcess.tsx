"use client";

import { useState } from "react";
import { Terminal, Database, LayoutTemplate, Layers, CheckSquare, CloudLightning, HeartHandshake, BookOpen } from "lucide-react";

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Terminal,
      title: "Requirement Analysis",
      desc: "Detailed workshops mapping your commercial objectives, software expectations, and key features to draft an exact product specification sheet."
    },
    {
      icon: Database,
      title: "Business Process Study",
      desc: "Deep analysis of your shop-floor, dispatch protocols, raw reserves, and invoicing ledgers to eliminate workflow redundancies."
    },
    {
      icon: LayoutTemplate,
      title: "System Design",
      desc: "Engineering custom relational database models, backend API schemas, page wireframes, and secure user permissions."
    },
    {
      icon: Layers,
      title: "Development",
      desc: "Executing production-ready code with Next.js, robust database languages, custom billing engines, and safe data pipelines."
    },
    {
      icon: CheckSquare,
      title: "Testing",
      desc: "Comprehensive integration, regression, load testing, and penetration security audits to identify and fix performance bottlenecks."
    },
    {
      icon: CloudLightning,
      title: "Deployment",
      desc: "Setting up production cloud servers, local database integrations, secure backups, and launching live systems."
    },
    {
      icon: BookOpen,
      title: "Training",
      desc: "Onboarding and training sessions for your inventory admins, sales dispatchers, and finance personnel to ensure maximum system utilization."
    },
    {
      icon: HeartHandshake,
      title: "Support & Maintenance",
      desc: "Continuous technical diagnostics, software updates, and custom modifications to align with your ongoing corporate transformations."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Engineering Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Our Structured Development Process
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Delivering corporate-grade software through systematic planning, extreme quality controls, and robust support models.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
          
          {/* Vertical Center Line */}
          <div className="absolute left-[20px] sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-100 -translate-x-1/2 hidden sm:block" />

          {/* Stepped Timeline Grid */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between relative group ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  
                  {/* Glowing Connection Point */}
                  <div
                    className={`absolute left-[20px] sm:left-1/2 w-9 h-9 rounded-full border-4 -translate-x-1/2 transition-all duration-500 z-10 flex items-center justify-center cursor-pointer ${
                      activeStep === idx
                        ? "bg-accent-500 border-blue-100 ring-4 ring-blue-50"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full transition-colors ${activeStep === idx ? "bg-white" : "bg-slate-300"}`} />
                  </div>

                  {/* Spacer Column (to push card to correct side) */}
                  <div className="w-full sm:w-[45%] hidden sm:block" />

                  {/* Card Content Column */}
                  <div
                    className={`w-full sm:w-[45%] bg-white border p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-300 relative text-left ${
                      activeStep === idx
                        ? "border-accent-500 shadow-md"
                        : "border-slate-100"
                    }`}
                  >
                    {/* Index Badge */}
                    <span className="absolute top-4 right-4 text-xs font-mono font-bold text-accent-500/20">
                      PHASE 0{idx + 1}
                    </span>

                    <div className="space-y-4">
                      {/* Icon */}
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        activeStep === idx ? "bg-accent-500 text-white" : "bg-blue-50 text-accent-500"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Header & Desc */}
                      <div className="space-y-2">
                        <h3 className="text-sm font-bold text-navy-900">
                          {step.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
