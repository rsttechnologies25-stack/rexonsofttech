"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  Building, 
  User, 
  Mail, 
  Phone, 
  ArrowRight 
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

interface SecurityConsultationFormProps {
  defaultService?: string;
  headline?: string;
  subheadline?: string;
}

export default function SecurityConsultationForm({
  defaultService = "Managed SOC",
  headline = "Request a Managed Security Assessment",
  subheadline = "Consult with our certified security architects to evaluate your threat landscape, coverage requirements, and remediation strategy."
}: SecurityConsultationFormProps) {
  const [formState, setFormState] = useState({
    companyName: "",
    contactPerson: "",
    businessEmail: "",
    phoneNumber: "",
    companySize: "26 - 100 employees",
    requiredServices: [defaultService],
    currentTools: "Microsoft Defender / Sentinel",
    monitoringRequirements: "Extended Coverage (16x5 / 16x7)",
    message: "",
    consent: true,
    honeypot: ""
  });

  const [formLoadTime] = useState<number>(() => Date.now());
  const [formError, setFormError] = useState<string | null>(null);
  const [formStarted, setFormStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    company: string;
    whatsappUrl: string;
  } | null>(null);

  const availableServices = [
    "Managed SOC",
    "SIEM Management",
    "Endpoint Security (EDR/XDR)",
    "Firewall & Network Security",
    "Vulnerability Management",
    "Incident Response & Threat Hunting",
    "Cloud Security (AWS/Azure/GCP)",
    "VAPT Security Audits",
    "Security Governance & Compliance"
  ];

  const toggleService = (service: string) => {
    setFormState((prev) => {
      const exists = prev.requiredServices.includes(service);
      if (exists) {
        if (prev.requiredServices.length === 1) return prev; // keep at least one
        return { ...prev, requiredServices: prev.requiredServices.filter((s) => s !== service) };
      }
      return { ...prev, requiredServices: [...prev.requiredServices, service] };
    });
  };

  const sanitizeText = (input: string) => {
    return input
      .replace(/[<>'"`;]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const handleFieldFocus = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("contact_form_start", { form_id: "security_consultation_form" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Honeypot check
    if (formState.honeypot) return;

    // Time-trap check (< 1.5s is a bot)
    const elapsed = Date.now() - formLoadTime;
    if (elapsed < 1500) return;

    const cleanCompany = sanitizeText(formState.companyName);
    const cleanPerson = sanitizeText(formState.contactPerson);
    const cleanEmail = formState.businessEmail.trim();
    const cleanPhone = formState.phoneNumber.trim().replace(/[^\d+\-\s()]/g, "");
    const cleanMessage = sanitizeText(formState.message);

    if (!cleanCompany || cleanCompany.length < 2) {
      setFormError("Please enter your company or organization name.");
      return;
    }

    if (!cleanPerson || cleanPerson.length < 2) {
      setFormError("Please enter the contact person's full name.");
      return;
    }

    const digitsOnly = cleanPhone.replace(/\D/g, "");
    if (digitsOnly.length < 8 || digitsOnly.length > 15) {
      setFormError("Please enter a valid phone number (minimum 8 digits).");
      return;
    }

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setFormError("Please enter a valid business email address.");
      return;
    }

    if (!formState.consent) {
      setFormError("Please consent to the privacy and security consultation terms.");
      return;
    }

    trackEvent("lead_form_submit", { service: "managed_security_services" });

    const messageText = 
`Hi RexonSoftTech Managed Security Services Team,

I would like to request an enterprise cybersecurity assessment and consultation.

Company & Contact Details:
- Company: ${cleanCompany}
- Contact Person: ${cleanPerson}
- Business Email: ${cleanEmail}
- Phone Number: ${cleanPhone}
- Company Size: ${formState.companySize}

Security Scope & Requirements:
- Selected Services: ${formState.requiredServices.join(", ")}
- Current Security Tools: ${formState.currentTools}
- Monitoring Requirements: ${formState.monitoringRequirements}

Infrastructure / Project Scope:
${cleanMessage || "Requesting an initial security posture assessment and scoping call."}`;

    const whatsappUrl = `https://wa.me/917871654777?text=${encodeURIComponent(messageText)}`;

    setSubmittedData({
      name: cleanPerson,
      company: cleanCompany,
      whatsappUrl
    });
    setIsSubmitted(true);

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
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormStarted(false);
    setFormError(null);
  };

  return (
    <section id="security-consultation" className="py-20 bg-[#160B16] text-[#FFF3E6] relative overflow-hidden border-t border-white/10">
      {/* Background ambient security grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
            <Lock className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
            Confidential Consultation • NDA Backed
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="bg-[#211120] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {isSubmitted && submittedData ? (
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Security Assessment Request Initiated
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Thank you, <strong>{submittedData.name}</strong> from <strong>{submittedData.company}</strong>. Your consultation brief has been compiled. If your WhatsApp chat did not open automatically, click the button below to connect with our security architects immediately.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <a
                  href={submittedData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" size={18} />
                  Open WhatsApp Chat
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
                >
                  Submit Another Scope
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
              {/* Hidden Honeypot */}
              <input
                type="text"
                name="security_honeypot_field"
                value={formState.honeypot}
                onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {formError && (
                <div className="p-4 bg-rose-500/15 border border-rose-500/30 rounded-xl text-xs sm:text-sm text-rose-300 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Company & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center">
                    <Building className="w-3.5 h-3.5 mr-1 text-orange-400" />
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Manufacturing Ltd."
                    value={formState.companyName}
                    onFocus={handleFieldFocus}
                    onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                    className="w-full bg-[#180C17] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center">
                    <User className="w-3.5 h-3.5 mr-1 text-orange-400" />
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formState.contactPerson}
                    onFocus={handleFieldFocus}
                    onChange={(e) => setFormState({ ...formState, contactPerson: e.target.value })}
                    className="w-full bg-[#180C17] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center">
                    <Mail className="w-3.5 h-3.5 mr-1 text-orange-400" />
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formState.businessEmail}
                    onFocus={handleFieldFocus}
                    onChange={(e) => setFormState({ ...formState, businessEmail: e.target.value })}
                    className="w-full bg-[#180C17] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-1 text-orange-400" />
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formState.phoneNumber}
                    onFocus={handleFieldFocus}
                    onChange={(e) => setFormState({ ...formState, phoneNumber: e.target.value })}
                    className="w-full bg-[#180C17] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              {/* Company Size & Monitoring Tier */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Company Size
                  </label>
                  <select
                    value={formState.companySize}
                    onChange={(e) => setFormState({ ...formState, companySize: e.target.value })}
                    className="w-full bg-[#180C17] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="1 - 25 employees">1 - 25 employees (Startup / Early SMB)</option>
                    <option value="26 - 100 employees">26 - 100 employees (Mid-Market SMB)</option>
                    <option value="101 - 500 employees">101 - 500 employees (Growth Enterprise)</option>
                    <option value="500+ employees">500+ employees (Multi-Location Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Monitoring Requirements
                  </label>
                  <select
                    value={formState.monitoringRequirements}
                    onChange={(e) => setFormState({ ...formState, monitoringRequirements: e.target.value })}
                    className="w-full bg-[#180C17] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="Business Hours (8x5)">Business Hours (8x5 Core Shift)</option>
                    <option value="Extended Coverage (16x5 / 16x7)">Extended Coverage (16x5 / 16x7)</option>
                    <option value="24/7 SOC Monitoring Evaluation">24/7 SOC Monitoring Evaluation</option>
                    <option value="Periodic Assessment / Audit Only">Periodic Assessment / One-Time Audit</option>
                  </select>
                </div>
              </div>

              {/* Current Security Tools */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Current Security Stack / Primary Tool
                </label>
                <select
                  value={formState.currentTools}
                  onChange={(e) => setFormState({ ...formState, currentTools: e.target.value })}
                  className="w-full bg-[#180C17] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="Microsoft Defender / Sentinel">Microsoft Defender / Microsoft Sentinel</option>
                  <option value="CrowdStrike / Splunk">CrowdStrike Falcon / Splunk</option>
                  <option value="Fortinet / Palo Alto Firewalls">Fortinet / Palo Alto Networks Firewalls</option>
                  <option value="Wazuh / Open-Source SIEM">Wazuh / Open-Source Telemetry</option>
                  <option value="AWS GuardDuty / Azure Defender">AWS GuardDuty / Azure Defender Cloud Stack</option>
                  <option value="None / Evaluating Solutions">None / Currently Evaluating Solutions</option>
                  <option value="Other Commercial Stack">Other Commercial Endpoint / Firewall Stack</option>
                </select>
              </div>

              {/* Required Security Services (Multi-Select Pills) */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  Select Required Managed Security Services (Choose all that apply):
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((service) => {
                    const isSelected = formState.requiredServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`text-xs px-3.5 py-2 rounded-xl border transition-all text-left flex items-center ${
                          isSelected
                            ? "bg-orange-500/20 border-orange-500 text-orange-200 font-bold"
                            : "bg-[#180C17] border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-full mr-2 flex items-center justify-center border text-[9px] ${
                          isSelected ? "border-orange-400 bg-orange-500 text-white" : "border-slate-500"
                        }`}>
                          {isSelected ? "✓" : ""}
                        </span>
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message / Scope Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Infrastructure Details or Specific Security Concerns (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Number of endpoints, cloud workload count (AWS/Azure), upcoming compliance audits (ISO 27001 / DPDP), or recent security incidents."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#180C17] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Privacy Consent */}
              <div className="flex items-start space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="mss-consent"
                  checked={formState.consent}
                  onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-orange-500 rounded border-white/20 bg-[#180C17]"
                />
                <label htmlFor="mss-consent" className="text-[11px] sm:text-xs text-slate-400 leading-normal">
                  I agree to RexonSoftTech processing our organization's information to deliver a confidential security assessment and consultation in accordance with the{" "}
                  <Link href="/privacy" className="text-orange-400 underline hover:text-orange-300">
                    Privacy Policy
                  </Link>. All communications are handled under strict confidentiality.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                  Submit Security Assessment Request
                </button>
                <a
                  href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'd%20like%20to%20speak%20with%20a%20security%20architect%20regarding%20Managed%20Security%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" size={18} />
                  Direct WhatsApp Hotline
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
