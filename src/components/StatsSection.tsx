"use client";

import { Award, Layers, Clock, ShieldCheck } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "15+",
      label: "Custom Systems Delivered",
      desc: "Bespoke ERPs, GST billing engines, and e-commerce portals"
    },
    {
      value: "8+",
      label: "Industries Served",
      desc: "Manufacturing, steel yards, retail, IT services, jewellery, logistics"
    },
    {
      value: "100%",
      label: "Custom Workflow Fit",
      desc: "Engineered around your exact shop floor and accounting practices"
    },
    {
      value: "24/7",
      label: "Direct SLA & Support",
      desc: "Hands-on staff onboarding, data backups, and technical maintenance"
    }
  ];

  return (
    <section className="relative bg-velvet-plum subtle-grain text-[#FFF3E6] py-20 border-y border-[#FFF3E6]/10 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-radial-gradient(circle, rgba(255, 243, 230, 0.08) 0%, transparent 70%) pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#FFF3E6] uppercase tracking-widest bg-[#FFF3E6]/10 border border-[#FFF3E6]/20 px-3.5 py-1.5 rounded-full">
            Verifiable Engineering Track Record
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFF3E6] mt-3">
            Built for Growing Indian Businesses
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#2A1225]/80 border border-[#FFF3E6]/15 p-6 rounded-2xl text-center space-y-3 backdrop-blur shadow-lg relative group hover:border-[#FFF3E6]/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FFF3E6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3E6] via-[#E8BCA0] to-accent-300">
                {stat.value}
              </p>
              <div>
                <h4 className="text-sm font-bold text-[#FFF3E6] tracking-wide">{stat.label}</h4>
                <p className="text-xs text-[#EAD8C7] mt-1 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
