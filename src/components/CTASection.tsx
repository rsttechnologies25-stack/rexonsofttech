"use client";

import { ArrowRight, Phone, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  const whatsappUrl = `https://wa.me/917871654777?text=${encodeURIComponent(
    "Hi RexonSoftTech, I'd like to discuss custom software / ERP development for my business."
  )}`;

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <ScrollReveal>
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 rounded-full mb-2">
            <Clock className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest">
              Let's Build Your Solution
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Replace Manual Inefficiencies with Custom Software?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-4">
            Whether you need a bespoke ERP system, automated GST billing tool, a corporate web portal, or a mobile app—our Chennai engineering team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              type="button"
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-base"
            >
              Book a Free Consultation Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white px-7 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-base"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" size={20} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-400 mt-8">
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-green-400 mr-1.5" />
              100% NDA Protected
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-accent-400 mr-1.5" />
              Direct Access to Lead Architects
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 text-sky-400 mr-1.5" />
              Direct Support: +91 78716 54777
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
