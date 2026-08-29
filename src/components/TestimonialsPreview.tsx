"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function TestimonialsPreview() {
  const testimonials = [
    {
      quote:
        "RexonSoftTech understood our exact store ordering flow. Instead of pushing a generic off-the-shelf software, they built an online ordering system where customers order with zero friction and delivery tracking is automatic.",
      author: "K. Srinivasan",
      role: "Proprietor",
      company: "Perambur Srinivasa",
      location: "Chennai",
      result: "100% automated direct digital orders",
      initials: "KS"
    },
    {
      quote:
        "Managing hardware repair service tickets, warranty lookups, and customer inquiries across multiple counters was chaotic on paper. Their custom portal centralized our entire operations into one clear dashboard.",
      author: "Vinod Kumar",
      role: "Managing Director",
      company: "Vinod Computers & Electronics",
      location: "Chennai",
      result: "50% faster customer inquiry resolution",
      initials: "VK"
    },
    {
      quote:
        "For our high-value jewellery showcase, we needed speed, elegant typography, and mobile perfection. RexonSoftTech delivered a polished digital presence that immediately increased our showroom walk-in inquiries.",
      author: "R. Parasmal",
      role: "Director",
      company: "Paras Jewellers",
      location: "Chennai",
      result: "Over 3x surge in digital catalog inquiries",
      initials: "RP"
    }
  ];

  return (
    <section id="testimonials-preview" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
              Trusted by Growing Businesses
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Real feedback from business owners who partnered with RexonSoftTech to build their software, ERPs, and web platforms.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-slate-50/70 border border-slate-200/70 hover:border-accent-500/30 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative group">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 pointer-events-none group-hover:text-accent-500/10 transition-colors" />

                <div className="space-y-4">
                  {/* 5 Stars */}
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic text-left">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="pt-2 text-left">
                    <div className="inline-flex items-center text-[10px] font-semibold text-green-700 bg-green-50 border border-green-200/60 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span>{t.result}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center shadow-inner flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy-900">{t.author}</h4>
                    <p className="text-[11px] text-slate-500">
                      {t.role}, <span className="font-semibold text-slate-700">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
