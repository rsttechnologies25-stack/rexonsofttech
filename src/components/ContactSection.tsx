"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";

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
    ? `https://wa.me/919566261950?text=${encodeURIComponent(
        `Hi RexonSoftTech,\n\nI would like to book a consultation. Here are my details:\n\nName: ${submittedData.name}\nCompany: ${submittedData.company || "N/A"}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\n\nProject Brief:\n${submittedData.message}`
      )}`
    : "#";

  const mailtoUrl = submittedData
    ? `mailto:rsttechnologies25@gmail.com?subject=${encodeURIComponent(
        `Consultation Inquiry from ${submittedData.name}`
      )}&body=${encodeURIComponent(
        `Hi RexonSoftTech,\n\nI would like to book a consultation. Here are my details:\n\nName: ${submittedData.name}\nCompany: ${submittedData.company || "N/A"}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\n\nProject Brief:\n${submittedData.message}\n\nBest regards,\n${submittedData.name}`
      )}`
    : "#";

  return (
    <section id="contact" className="py-24 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Initiate Consultation
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Ready to streamline your operational workflows? Let's discuss your next custom software or ERP deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6 text-left">
              <h3 className="text-xl font-bold text-navy-900">
                RexonSoftTech Headquarters
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                “Building Secure, Scalable & Future-Ready Digital Solutions”
              </p>

              {/* Direct Metrics */}
              <div className="space-y-4">
                <a
                  href="mailto:info@rexonsofttech.in"
                  className="flex items-center p-3 bg-white border border-slate-100 rounded-xl text-xs font-semibold text-slate-700 hover:text-accent-500 transition-colors shadow-sm"
                >
                  <Mail className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                  info@rexonsofttech.in
                </a>
                <a
                  href="tel:+919566261950"
                  className="flex items-center p-3 bg-white border border-slate-100 rounded-xl text-xs font-semibold text-slate-700 hover:text-accent-500 transition-colors shadow-sm"
                >
                  <Phone className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                  +91 95662 61950
                </a>
                <div className="flex items-start p-3 bg-white border border-slate-100 rounded-xl text-xs font-semibold text-slate-700 shadow-sm leading-relaxed">
                  <MapPin className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>
                    Block I, 5/1049, West,<br />
                    Aishwarya Colony, Thangam Colony, Anna Nagar,<br />
                    Chennai, Tamil Nadu 600040
                  </span>
                </div>
              </div>

              {/* WhatsApp Call To Action */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919566261950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-xs font-bold transition-all duration-300 shadow-md shadow-green-500/10 cursor-pointer hover:shadow-lg hover:shadow-green-500/20 active:scale-95"
                >
                  <MessageSquare className="w-4.5 h-4.5 mr-2" /> Connect on WhatsApp
                </a>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative">
              <iframe
                title="RexonSoftTech Corporate Office Chennai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1264350170425!2d80.1983057!3d13.0848037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265000b248bfb%3A0x4165426eb0142038!2sRexonSoftTech!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            {isSubmitted ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center shadow-inner animate-pulse">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-navy-900">Inquiry Form Validated!</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                  Your consultation details have been successfully prepared. Select one or both channels below to send your brief directly to our team:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 shadow-md shadow-green-500/10 cursor-pointer"
                  >
                    <MessageSquare className="w-4.5 h-4.5 mr-2" /> Send via WhatsApp
                  </a>
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 shadow-md shadow-accent-500/10 cursor-pointer"
                  >
                    <Mail className="w-4.5 h-4.5 mr-2" /> Send via Corporate Email
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs text-accent-500 hover:text-accent-600 font-bold transition-colors pt-4 cursor-pointer"
                >
                  ← Submit a New Inquiry / Edit Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-sm font-bold text-navy-900">Consultation Form</span>
                  <p className="text-[10px] text-slate-400">Fill in details for immediate operational analysis.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 block">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-accent-500 text-slate-700 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 block">Corporate Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-accent-500 text-slate-700 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 block">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-accent-500 text-slate-700 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-bold text-slate-700 block">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="e.g. RexonSoftTech Ltd"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-accent-500 text-slate-700 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 block">Operational Bottlenecks / Project Brief *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe your requirements or structural bottlenecks..."
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-accent-500 text-slate-700 font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white py-3.5 rounded-xl font-bold text-xs transition-all duration-300 shadow-md shadow-accent-500/10 cursor-pointer hover:shadow-lg hover:shadow-accent-500/20 active:scale-95"
                >
                  Submit Inquiry <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
