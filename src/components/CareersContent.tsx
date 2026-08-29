"use client";

import { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Zap, 
  Users, 
  Code2, 
  HeartHandshake,
  Mail,
  Copy,
  Check,
  X,
  ExternalLink
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { POSITIONS, JobPosition } from "@/lib/careers-data";

export default function CareersContent() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [copied, setCopied] = useState(false);

  const corporateEmail = "info@rexonsofttech.in";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(corporateEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSubject = (title: string) => `Application for ${title} - [Your Name]`;
  const getBody = (title: string) => 
`Hi RexonSoftTech Hiring Team,

I would like to apply for the ${title} position.

Full Name: 
Phone / WhatsApp: 
Current Location: 
Years of Experience: 
Portfolio / GitHub / LinkedIn: 

Attached is my resume for your review.

Best regards.`;

  const getGmailUrl = (title: string) => {
    const su = encodeURIComponent(getSubject(title));
    const body = encodeURIComponent(getBody(title));
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${corporateEmail}&su=${su}&body=${body}`;
  };

  const getMailtoUrl = (title: string) => {
    const su = encodeURIComponent(getSubject(title));
    const body = encodeURIComponent(getBody(title));
    return `mailto:${corporateEmail}?subject=${su}&body=${body}`;
  };

  const getWhatsAppUrl = (title: string) => {
    const text = encodeURIComponent(
`Hi RexonSoftTech Hiring Team, I am interested in applying for the ${title} position at your Chennai office. Here is my brief profile:

Name: 
Experience: 
Portfolio/Resume Link: `
    );
    return `https://wa.me/917871654777?text=${text}`;
  };

  return (
    <>
      {/* Culture & Why Join Us */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Why Work With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              Engineering-First Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-navy-900">Modern Tech Stack</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work with Next.js, React 19, TypeScript, PostgreSQL, and cloud infrastructure on production code.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-navy-900">Real-World Impact</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your code directly runs factories, retail stores, and warehouse logistics across India.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-navy-900">Fast Career Growth</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct mentorship from lead architects without bureaucratic corporate layers.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-navy-900">Healthy Work Balance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Predictable sprint planning, supportive team dynamics, and competitive compensation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Openings */}
      <section id="openings" className="py-24 bg-lightBg relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-3 py-1 rounded-full">
              Active Positions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
              Current Opportunities
            </h2>
            <p className="text-sm text-slate-500">
              Explore our open roles and find where your skills can make a difference.
            </p>
          </div>

          <div className="space-y-6">
            {POSITIONS.map((pos) => (
              <div
                key={pos.id}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all text-left space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold text-accent-500 uppercase tracking-wider bg-accent-500/10 px-2.5 py-0.5 rounded">
                      {pos.department}
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 mt-1.5">
                      {pos.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {pos.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {pos.type}
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-slate-700">
                      {pos.experience}
                    </span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pos.overview}
                </p>

                {/* Responsibilities & Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 pt-2">
                  <div className="space-y-2">
                    <h4 className="font-bold text-navy-900 uppercase tracking-wider text-[11px]">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5">
                      {pos.responsibilities.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-navy-900 uppercase tracking-wider text-[11px]">
                      Qualifications
                    </h4>
                    <ul className="space-y-1.5">
                      {pos.requirements.map((req, qIdx) => (
                        <li key={qIdx} className="flex items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply Button & Direct Options */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-500">
                    <span>Send resume to:</span>
                    <span className="font-semibold text-navy-900">{corporateEmail}</span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-accent-600 hover:text-accent-700 font-medium underline flex items-center cursor-pointer ml-1"
                    >
                      {copied ? <Check className="w-3 h-3 mr-0.5 text-green-600" /> : <Copy className="w-3 h-3 mr-0.5" />}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedJob(pos)}
                    className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md shadow-accent-500/25 transition-all cursor-pointer w-full sm:w-auto active:scale-95"
                  >
                    Apply for this Role
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* General Application Box */}
          <div className="mt-16 bg-white border border-slate-200/80 rounded-2xl p-8 text-center space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-navy-900">
              Don't see a role that matches your skills?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              We are always on the lookout for talented software engineers, ERP consultants, and frontend designers. Send your resume and portfolio directly to our engineering team.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedJob({
                  id: "general",
                  title: "General Software Engineering Application",
                  department: "Engineering / Consulting",
                  location: "Chennai, Tamil Nadu",
                  type: "Full-Time",
                  experience: "Open",
                  overview: "General application for software engineering, design, or ERP consulting roles.",
                  responsibilities: [],
                  requirements: []
                })}
                className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-950 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 mr-2" />
                Submit General Application
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 text-left relative space-y-6">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-[10px] font-bold text-accent-500 uppercase tracking-widest bg-accent-500/10 px-2.5 py-1 rounded-full">
                {selectedJob.department}
              </span>
              <h3 className="text-xl font-bold text-navy-900 mt-2">
                Apply for {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Choose your preferred way to send your application & resume:
              </p>
            </div>

            {/* 3 Direct Application Channels */}
            <div className="space-y-3">
              {/* Option 1: Gmail Web Compose (Direct browser tab) */}
              <a
                href={getGmailUrl(selectedJob.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-red-500/40 hover:bg-red-50/40 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-900 group-hover:text-red-700">
                      Compose in Gmail (Browser)
                    </p>
                    <p className="text-[10px] text-slate-500">Opens Gmail directly in a new tab with pre-filled details</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-red-600 flex-shrink-0" />
              </a>

              {/* Option 2: Default Mail App (Mailto) */}
              <a
                href={getMailtoUrl(selectedJob.title)}
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-accent-500/40 hover:bg-blue-50/40 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-accent-600 flex items-center justify-center flex-shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-900 group-hover:text-accent-700">
                      Open Default Email App
                    </p>
                    <p className="text-[10px] text-slate-500">Opens your system's default email client (Outlook, Mail, etc.)</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-accent-600 flex-shrink-0" />
              </a>

              {/* Option 3: WhatsApp Direct Application */}
              <a
                href={getWhatsAppUrl(selectedJob.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-green-500/40 hover:bg-green-50/40 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-green-100 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon className="w-5 h-5" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-900 group-hover:text-green-700">
                      Apply via WhatsApp
                    </p>
                    <p className="text-[10px] text-slate-500">Send your profile directly to our hiring team on WhatsApp</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-green-600 flex-shrink-0" />
              </a>
            </div>

            {/* Manual Email Copy Box */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Or copy email address</span>
                <span className="font-bold text-navy-900">{corporateEmail}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center text-xs font-bold text-accent-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-all cursor-pointer shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 mr-1 text-green-600" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>

            <div className="text-center pt-1">
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
              >
                Close window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
