"use client";

import { Award, ShieldAlert, Cpu, HeartHandshake } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { value: "7+", label: "Business Websites", desc: "Corporate showcases and e-catalogs" },
    { value: "100%", label: "Secure ERP Systems", desc: "For manufacturing and fabrication lines" },
    { value: "12s", label: "Average Billing Sync", desc: "Local GST automatic return compliance" },
    { value: "98.4%", label: "Operational Speedup", desc: "Reported warehouse retrieval speeds" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-y border-white/5 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute inset-0 bg-radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%) pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center space-y-3 backdrop-blur shadow-lg relative group hover:border-accent-500/20 transition-all duration-300"
            >
              {/* Outer hover border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent-500">
                {stat.value}
              </p>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wide">{stat.label}</h4>
                <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
