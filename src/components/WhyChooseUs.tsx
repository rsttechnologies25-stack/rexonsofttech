"use client";

import { Wrench, Award, ShieldAlert, Cpu, HeartHandshake, Zap, DollarSign, Scaling, Target } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Wrench,
      title: "Customized Software Solutions",
      desc: "No rigid structures. Every software module is custom-engineered to adapt perfectly to your operational workflows."
    },
    {
      icon: Target,
      title: "Business-Oriented Development",
      desc: "We focus on solving commercial bottlenecks, eliminating manual waste, and driving organizational revenue."
    },
    {
      icon: Cpu,
      title: "ERP & Automation Expertise",
      desc: "Deep domain capabilities in heavy processing, steel fabrication inventory, sales, and complex log flows."
    },
    {
      icon: ShieldAlert,
      title: "Secure Development Practices",
      desc: "Enterprise-grade security protocols, robust authentication filters, and complete data safety."
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      desc: "Tier-1 engineering standards at competitive budgets, maximizing your return on technology investments."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Technical Support",
      desc: "24/7 post-deployment monitoring, training, and custom adjustments to align with your evolving needs."
    },
    {
      icon: Zap,
      title: "Fast Project Delivery",
      desc: "Efficient development cycles mapping requirements to deployable applications with zero lag."
    },
    {
      icon: Scaling,
      title: "Scalable Business Solutions",
      desc: "Systems engineered to grow with you, handling larger data volumes and user rates smoothly."
    },
    {
      icon: Award,
      title: "Long-Term Partnership Approach",
      desc: "We align as your strategic technology advisor, ensuring your platform is always up-to-date."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Core Enterprise Differentiators
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Discover why global organizations trust RexonSoftTech to engineer their central corporate applications.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 hover:border-accent-500/30 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4 text-left">
                  {/* Icon Block */}
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-accent-500 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-navy-900 group-hover:text-accent-500 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
