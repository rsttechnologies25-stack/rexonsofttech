"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  result: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "RexonSoftTech understood our business requirements from day one and built the system around our actual workflow. Our online ordering and customer delivery tracking now run seamlessly without manual phone calls.",
    author: "K. Srinivasan",
    role: "Proprietor",
    company: "Perambur Srinivasa",
    location: "Chennai",
    result: "Automated direct digital orders & checkout tracking",
    initials: "KS"
  },
  {
    quote:
      "Managing repair service tickets, product warranty lookups, and customer inquiries across multiple counters was chaotic. Their custom portal centralized everything into one screen and eliminated manual log errors completely.",
    author: "Vinod Kumar",
    role: "Managing Director",
    company: "Vinod Computers & Electronics",
    location: "Chennai",
    result: "50% faster customer inquiry and ticket resolution",
    initials: "VK"
  },
  {
    quote:
      "For our high-value jewellery catalog, we needed speed, elegant typography, and mobile perfection. RexonSoftTech delivered a polished digital presence that immediately increased our showroom walk-in inquiries.",
    author: "R. Parasmal",
    role: "Director",
    company: "Paras Jewellers",
    location: "Chennai",
    result: "Over 3x surge in digital catalog inquiries",
    initials: "RP"
  },
  {
    quote:
      "Unlike generic ERP software companies that push pre-packaged modules, RexonSoftTech listened to how our steel fabrication yard operates. They automated our job-card tracking and GST invoicing precisely to our needs.",
    author: "S. Karthikeyan",
    role: "Operations Lead",
    company: "Industrial Engineering & Metal Works",
    location: "Chennai",
    result: "Zero invoice calculation errors & fast GST filing",
    initials: "SK"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Client Proof & Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            What Business Owners Say About RexonSoftTech
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Real feedback from businesses who replaced fragmented spreadsheets and manual registers with our custom software systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200/70 hover:border-accent-500/30 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote icon watermarked */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 pointer-events-none group-hover:text-accent-500/10 transition-colors" />

              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote body */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Verified business outcome pill */}
                <div className="pt-2">
                  <div className="inline-flex items-center text-[11px] font-semibold text-green-700 bg-green-50 border border-green-200/60 px-2.5 py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                    <span>Result: {t.result}</span>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-full bg-navy-900 text-white font-bold text-sm flex items-center justify-center shadow-inner">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">{t.author}</h4>
                  <p className="text-xs text-slate-500">
                    {t.role}, <span className="font-semibold text-slate-700">{t.company}</span> • {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
