"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.phone) {
      setSubmittedData({ ...formState });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const whatsappUrl = submittedData
    ? `https://wa.me/917871654777?text=${encodeURIComponent(
        `Hi RexonSoftTech,\n\nI would like to book an automation consultation for my business.\n\nName: ${submittedData.name}\nCompany: ${submittedData.company || "N/A"}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\n\nManual Workflows to Automate:\n${submittedData.message}`
      )}`
    : `https://wa.me/917871654777?text=${encodeURIComponent(
        "Hi RexonSoftTech, I have manual business processes I want to automate. Let's schedule a call."
      )}`;

  const mailtoUrl = submittedData
    ? `mailto:info@rexonsofttech.in?subject=${encodeURIComponent(
        `Automation Consultation Request - ${submittedData.name} (${submittedData.company || "Business Owner"})`
      )}&body=${encodeURIComponent(
        `Hi RexonSoftTech,\n\nI would like to schedule a consultation to automate our business operations.\n\nName: ${submittedData.name}\nCompany: ${submittedData.company || "N/A"}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\n\nCurrent Manual Processes & Needs:\n${submittedData.message}\n\nBest regards,\n${submittedData.name}`
      )}`
    : "mailto:info@rexonsofttech.in";

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Sales & Urgency Driven */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-accent-500" />
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest">
              Free Technical Blueprint
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Have a Business Process You Want to Automate?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tell us what you're currently managing in Excel, paper registers, or WhatsApp. We'll analyze your workflow and send you a practical, custom automation proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Channels & Direct Access */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-navy-900">
                Direct Channels to Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Connect directly with our software architects. No junior call centers—you speak directly with the engineers building your solution.
              </p>

              {/* Direct WhatsApp Callout Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-green-500/25 text-sm"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" size={20} />
                Chat Immediately on WhatsApp
              </a>

              {/* Direct Phone Call Button */}
              <a
                href="tel:+917871654777"
                className="w-full inline-flex items-center justify-center bg-navy-900 hover:bg-navy-950 text-white px-5 py-3.5 rounded-xl font-bold transition-all shadow-md text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call an Expert: +91 78716 54777
              </a>

              <div className="pt-4 border-t border-slate-200/80 space-y-4">
                <div className="flex items-start space-x-3 text-xs text-slate-600">
                  <Mail className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy-900 block">Corporate Email</span>
                    <a href="mailto:info@rexonsofttech.in" className="hover:text-accent-500">
                      info@rexonsofttech.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy-900 block">Development Center</span>
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center text-[11px] font-semibold text-green-700">
                <ShieldCheck className="w-4 h-4 mr-1.5 flex-shrink-0" />
                <span>NDA & Business Data Confidentiality Assured</span>
              </div>
            </div>
          </div>

          {/* Right Column - Structured Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="rajesh@company.com"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Kumar Industries"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      What Manual Process Do You Want to Automate? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe what you are currently managing in Excel, paper registers, or WhatsApp (e.g. GST billing, warehouse inventory, production tracking, staff payroll)..."
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent-500 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-accent-500/25 transition-all text-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit & Request Free Automation Blueprint
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    We respond within 24 hours with an actionable architecture breakdown.
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center space-y-5">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-navy-900">Inquiry Received!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <span className="font-bold text-navy-900">{submittedData?.name}</span>. For immediate confirmation, you can forward this directly to our engineering WhatsApp or email:
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 mr-2" size={16} />
                      Forward on WhatsApp
                    </a>
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-950 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send via Email
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
