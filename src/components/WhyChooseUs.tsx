"use client";

import { Wrench, Layers, TrendingUp, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      number: "01",
      icon: Wrench,
      title: "Built Around Your Workflow",
      subtitle: "Zero Forced Templates",
      desc: "We don't force your operations into generic, inflexible software. Every module, field, formula, and approval chain is custom-engineered to match your exact shop-floor and business routine."
    },
    {
      number: "02",
      icon: Layers,
      title: "One Dedicated Technology Partner",
      subtitle: "Complete Technology Stack",
      desc: "No need to juggle multiple vendors. From central ERP systems and warehouse databases to customer-facing mobile apps, portals, and cloud infrastructure, our team handles the full lifecycle."
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Business-First Engineering & ROI",
      subtitle: "Measurable Cost Reduction",
      desc: "We build software with a single goal: eliminate manual paperwork, eliminate duplicate entries, reduce human calculation errors, and give leadership instant visibility into cash flow and inventory."
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Security & Compliance by Design",
      subtitle: "GST Ready & Role-Based",
      desc: "Your proprietary business data stays private and safe. We build enterprise-grade role-based access permissions, automated GST compliance, encrypted backups, and audit trails into every platform."
    },
    {
      number: "05",
      icon: HeartHandshake,
      title: "Hands-On Training & Long-Term Support",
      subtitle: "We Stand by Your Deployment",
      desc: "Our job doesn't end at deployment. We train your staff, migrate your legacy Excel records, and provide continuous technical maintenance and feature adjustments as your business scales."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            The RexonSoftTech Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Why Businesses Choose RexonSoftTech
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Five core reasons business owners trust us over rigid off-the-shelf software packages and generic freelancers.
          </p>
        </div>

        {/* 5 Differentiators Grid (2 on top, 3 below or structured flow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/60 border border-slate-200/70 hover:border-accent-500/30 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between relative"
              >
                <div className="space-y-5 text-left">
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-accent-500 transition-colors font-mono">
                      {diff.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-accent-500 uppercase tracking-wider">
                      {diff.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-600 transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {diff.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Assurance */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Guaranteed in every contract</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
