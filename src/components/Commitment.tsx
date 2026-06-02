"use client";

import { Handshake } from "lucide-react";

export default function Commitment() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-50/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-accent-500 flex items-center justify-center mx-auto shadow-md shadow-accent-500/5">
          <Handshake className="w-8 h-8" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight max-w-2xl mx-auto">
          Our Executive Commitment to Your Digital Growth
        </h2>

        {/* Content Paragraph */}
        <p className="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto italic">
          “At RexonSoftTech, we build technology solutions that simplify business operations, improve productivity, and drive growth. We are committed to delivering high-quality software, exceptional customer service, and long-term technology partnerships.”
        </p>

        {/* Signature tag */}
        <div className="pt-2">
          <p className="text-xs font-bold text-navy-900 tracking-widest uppercase">The RexonSoftTech Team</p>
          <p className="text-[10px] text-accent-500 font-semibold tracking-wider uppercase mt-1">Chennai Corporate Office</p>
        </div>

      </div>
    </section>
  );
}
