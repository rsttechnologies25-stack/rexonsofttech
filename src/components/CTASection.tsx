"use client";

import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import ScrollReveal from "./ScrollReveal";
import { trackEvent } from "@/lib/analytics";

export default function CTASection() {
  const whatsappUrl = `https://wa.me/917871654777?text=${encodeURIComponent(
    "Hi RexonSoftTech, I'd like to discuss custom software / ERP development for my business."
  )}`;

  const scrollToContact = () => {
    trackEvent("contact_form_start", { form_id: "cta_section" });
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
    <section className="py-24 bg-velvet-plum subtle-grain text-[#FFF3E6] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFF3E6]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <ScrollReveal>
          <div className="inline-flex items-center space-x-2 bg-[#FFF3E6]/10 border border-[#FFF3E6]/20 px-3.5 py-1.5 rounded-full mb-2">
            <Clock className="w-3.5 h-3.5 text-[#FFF3E6]" />
            <span className="text-xs font-bold text-[#FFF3E6] uppercase tracking-widest">
              Let's Build Your Solution
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFF3E6] max-w-3xl mx-auto leading-tight">
            Ready to Replace Manual Inefficiencies with Custom Software?
          </h2>

          <p className="text-base sm:text-lg text-[#EAD8C7] max-w-2xl mx-auto leading-relaxed mt-4">
            Whether you need a bespoke ERP system, automated GST billing tool, a corporate web portal, or a mobile app—our Chennai engineering team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              type="button"
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#FFF3E6] hover:bg-[#FCE9D7] text-[#381932] px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-black/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-base"
            >
              Book a Free Consultation Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "cta_section" })}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white px-7 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-base"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" size={20} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="pt-8 border-t border-[#FFF3E6]/15 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-[#EAD8C7] mt-8">
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-green-400 mr-1.5" />
              Contractual NDA Protected (
              <Link href="/privacy" className="text-[#FFF3E6] underline ml-0.5">
                Privacy Policy
              </Link>
              )
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-[#FFF3E6] mr-1.5" />
              Direct Access to Lead Architects
            </span>
            <a
              href="tel:+917871654777"
              onClick={() => trackEvent("phone_click", { location: "cta_section" })}
              className="flex items-center hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D8B094] mr-1.5" />
              Direct Support: +91 78716 54777
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
