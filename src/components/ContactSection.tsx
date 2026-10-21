"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    honeypot: ""
  });
  const [formLoadTime] = useState<number>(() => Date.now());
  const [formError, setFormError] = useState<string | null>(null);
  const [formStarted, setFormStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    whatsappUrl: string;
  } | null>(null);

  const sanitizeText = (input: string) => {
    return input
      .replace(/[<>'"`;]/g, "") // strip dangerous markup characters
      .replace(/\s+/g, " ")     // collapse excess whitespace
      .trim();
  };

  const handleFieldFocus = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("contact_form_start", { form_id: "consultation_form" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // 1. Spam honeypot protection: bots fill hidden fields
    if (formState.honeypot) {
      return;
    }

    // 2. Time-trap bot protection: reject submissions completed in under 1.5s
    const elapsedTime = Date.now() - formLoadTime;
    if (elapsedTime < 1500) {
      return; // Automated scraping submission
    }

    const cleanName = sanitizeText(formState.name);
    const cleanPhone = formState.phone.trim().replace(/[^\d+\-\s()]/g, "");
    const cleanEmail = formState.email.trim();
    const cleanCompany = sanitizeText(formState.company);
    const cleanMessage = sanitizeText(formState.message);

    // Strict validation
    if (!cleanName || cleanName.length < 2) {
      setFormError("Please enter your full name.");
      return;
    }

    const digitsOnly = cleanPhone.replace(/\D/g, "");
    if (digitsOnly.length < 8 || digitsOnly.length > 15) {
      setFormError("Please enter a valid phone number (minimum 8 digits).");
      return;
    }

    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (cleanName && cleanPhone) {
      trackEvent("lead_form_submit", { service: "consultation" });

      const messageText = 
`Hi RexonSoftTech Engineering Team,

I would like to request an automation consultation and custom software blueprint for our business.

Client Details:
- Name: ${cleanName}
- Phone: ${cleanPhone}
- Email: ${cleanEmail || "N/A"}
- Company: ${cleanCompany || "N/A"}

Manual Workflows to Automate:
${cleanMessage || "Looking for custom software / ERP automation consultation."}`;

      const whatsappUrl = `https://wa.me/917871654777?text=${encodeURIComponent(messageText)}`;

      setSubmittedData({
        name: cleanName,
        whatsappUrl
      });
      setIsSubmitted(true);

      // Automatically redirect the client to WhatsApp with prefilled message
      try {
        const link = document.createElement("a");
        link.href = whatsappUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch {
        window.location.href = whatsappUrl;
      }
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormStarted(false);
    setFormError(null);
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      honeypot: ""
    });
  };

  const directWhatsAppUrl = `https://wa.me/917871654777?text=${encodeURIComponent(
    "Hi RexonSoftTech, I have manual business processes I want to automate. Let's schedule a call."
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#FFF3E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#381932]/10 border border-[#381932]/20 px-3.5 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-[#381932]" />
            <span className="text-xs font-bold text-[#381932] uppercase tracking-widest">
              Free Technical Blueprint
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#381932] mt-3">
            Have a Business Process You Want to Automate?
          </h2>
          <p className="text-sm sm:text-base text-[#6B4E63] leading-relaxed">
            Tell us what you're currently managing in Excel, paper registers, or WhatsApp. We'll analyze your workflow and send you a practical, custom automation proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Channels & Direct Access */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#FAF0E4] border border-[#EAD8C7] rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#381932]">
                Direct Channels to Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[#6B4E63] leading-relaxed">
                Connect directly with our software architects. No junior call centers—you speak directly with the engineers building your solution.
              </p>

              {/* Direct WhatsApp Callout Button */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "contact_left_panel" })}
                className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-green-500/25 text-sm"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" size={20} />
                Chat Immediately on WhatsApp
              </a>

              {/* Direct Phone Call Button */}
              <a
                href="tel:+917871654777"
                onClick={() => trackEvent("phone_click", { location: "contact_left_panel" })}
                className="w-full inline-flex items-center justify-center bg-[#381932] hover:bg-[#2C1327] text-[#FFF3E6] px-5 py-3.5 rounded-xl font-bold transition-all shadow-md text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call an Expert: +91 78716 54777
              </a>

              <div className="pt-4 border-t border-[#EAD8C7] space-y-4">
                <div className="flex items-start space-x-3 text-xs text-[#5D4356]">
                  <Mail className="w-4 h-4 text-[#381932] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#381932] block">Corporate Email</span>
                    <a href="mailto:info@rexonsofttech.in" className="hover:text-[#8C2969]">
                      info@rexonsofttech.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs text-[#5D4356]">
                  <MapPin className="w-4 h-4 text-[#381932] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#381932] block">Development Center</span>
                    <span>Block I, 5/1049, West, Aishwarya Colony, Thangam Colony, Anna Nagar, Chennai 600040</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-start text-[11px] font-semibold text-[#5D4356]">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-green-700 flex-shrink-0 mt-0.5" />
                <span>
                  Client confidentiality is protected through contractual NDA and controlled access practices.{" "}
                  <Link href="/privacy" className="text-[#381932] font-bold hover:underline">
                    View Privacy Policy
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Structured Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#EAD8C7] rounded-2xl p-6 sm:p-8 shadow-sm">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Honeypot field for anti-spam bots */}
                  <input
                    type="text"
                    name="website_url"
                    value={formState.honeypot}
                    onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-[#381932] mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        maxLength={100}
                        onFocus={handleFieldFocus}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 border border-[#EAD8C7] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#381932] bg-[#FFFBF7] text-[#381932]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-[#381932] mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        maxLength={20}
                        onFocus={handleFieldFocus}
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 border border-[#EAD8C7] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#381932] bg-[#FFFBF7] text-[#381932]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-[#381932] mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        maxLength={100}
                        onFocus={handleFieldFocus}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="rajesh@company.com"
                        className="w-full px-3.5 py-2.5 border border-[#EAD8C7] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#381932] bg-[#FFFBF7] text-[#381932]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold text-[#381932] mb-1">
                        Company / Business Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        maxLength={120}
                        onFocus={handleFieldFocus}
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Kumar Industries"
                        className="w-full px-3.5 py-2.5 border border-[#EAD8C7] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#381932] bg-[#FFFBF7] text-[#381932]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-[#381932] mb-1">
                      What Manual Process Do You Want to Automate? *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      maxLength={1000}
                      onFocus={handleFieldFocus}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe what you are currently managing in Excel, paper registers, or WhatsApp (e.g. GST billing, warehouse inventory, production tracking, staff payroll)..."
                      className="w-full px-3.5 py-2.5 border border-[#EAD8C7] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#381932] bg-[#FFFBF7] text-[#381932] leading-relaxed"
                    />
                  </div>

                  {formError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-green-500/25 transition-all text-sm cursor-pointer active:scale-[0.99]"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" size={18} />
                    Submit & Connect on WhatsApp
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Instantly opens WhatsApp with your details to connect directly with our engineering team.
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 bg-green-50 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-inner border border-green-100">
                    <WhatsAppIcon className="w-9 h-9" size={36} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#381932]">Connecting to WhatsApp...</h3>
                    <p className="text-xs sm:text-sm text-[#5D4356] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-[#381932]">{submittedData?.name}</span>. We've prepared your inquiry details. Simply click send in WhatsApp to start chatting with our engineering team.
                    </p>
                  </div>

                  <div className="pt-2 flex justify-center">
                    <a
                      href={submittedData?.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("whatsapp_click", { location: "contact_success_button" })}
                      className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-green-500/25 transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 mr-2" size={18} />
                      Continue to WhatsApp
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
