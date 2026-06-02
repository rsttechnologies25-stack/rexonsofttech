"use client";

import { Factory, Award, Flame, ShoppingCart, Cpu, Building2, Stethoscope, GraduationCap, Truck, Wrench } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    { icon: Factory, name: "Manufacturing" },
    { icon: Flame, name: "Steel Fabrication" },
    { icon: Award, name: "Jewellery Business" },
    { icon: ShoppingCart, name: "Retail & E-Commerce" },
    { icon: Cpu, name: "Electronics & Tech" },
    { icon: Building2, name: "Construction" },
    { icon: Stethoscope, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: Truck, name: "Logistics & Supply" },
    { icon: Wrench, name: "Service Industry" }
  ];

  return (
    <section id="industries" className="py-24 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Sectors We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Tailored Industry Deployments
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            We adapt our core ERP, software databases, and e-commerce architectures to the specific demands of each business sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 hover:border-accent-500/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center justify-center text-center space-y-4 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-accent-500 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-navy-900 group-hover:text-accent-500 transition-colors">
                  {ind.name}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
