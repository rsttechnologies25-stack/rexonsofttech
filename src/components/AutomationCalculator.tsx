"use client";

import { useState } from "react";
import { CheckSquare, Square, Clock, ShieldCheck, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface ModuleOption {
  id: string;
  name: string;
  category: string;
  manualHoursPerWeek: number;
  description: string;
}

const MODULES: ModuleOption[] = [
  {
    id: "billing",
    name: "GST Billing & Invoicing",
    category: "Finance",
    manualHoursPerWeek: 6,
    description: "Automate invoice generation, GST tax split, client ledgers, and payment reminders."
  },
  {
    id: "inventory",
    name: "Inventory & Multi-Warehouse",
    category: "Operations",
    manualHoursPerWeek: 8,
    description: "Track real-time stock levels, batch/lot numbers, low-stock alerts, and rack locations."
  },
  {
    id: "purchase",
    name: "Purchase & Vendor POs",
    category: "Procurement",
    manualHoursPerWeek: 5,
    description: "Vendor quotations comparison, Purchase Order creation, and 3-way GRN matching."
  },
  {
    id: "production",
    name: "Production & BOM Tracking",
    category: "Manufacturing",
    manualHoursPerWeek: 9,
    description: "Bill of Materials (BOM), raw material consumption, scrap calculation, and stage audits."
  },
  {
    id: "hr_payroll",
    name: "HR, Biometric & Payroll",
    category: "Human Resources",
    manualHoursPerWeek: 5,
    description: "Biometric attendance sync, automated PF/ESI computation, and one-click salary slips."
  },
  {
    id: "crm",
    name: "CRM & Lead Pipeline",
    category: "Sales",
    manualHoursPerWeek: 4,
    description: "Centralize customer inquiries, sales rep follow-ups, and automated WhatsApp updates."
  },
  {
    id: "dispatch",
    name: "Dispatch & Logistics Gate Pass",
    category: "Logistics",
    manualHoursPerWeek: 4,
    description: "Packing slips, barcode scanning, delivery dispatch records, and gate pass verification."
  },
  {
    id: "reports",
    name: "Executive Dashboards & P&L",
    category: "Management",
    manualHoursPerWeek: 5,
    description: "Consolidated financial health, sales performance, cash flow, and tax readiness in real time."
  }
];

export default function AutomationCalculator() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "billing",
    "inventory",
    "purchase"
  ]);

  const toggleModule = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => setSelectedIds(MODULES.map((m) => m.id));
  const clearAll = () => setSelectedIds([]);

  const selectedModules = MODULES.filter((m) => selectedIds.includes(m.id));
  const totalHoursSaved = selectedModules.reduce(
    (acc, cur) => acc + cur.manualHoursPerWeek,
    0
  );
  const estimatedAnnualSavingsHours = totalHoursSaved * 52;
  const estimatedErrorReduction = selectedIds.length > 0 ? Math.min(95, 60 + selectedIds.length * 5) : 0;

  const selectedNames = selectedModules.map((m) => m.name).join(", ");
  const whatsappConsultationUrl = `https://wa.me/917871654777?text=${encodeURIComponent(
    `Hi RexonSoftTech, I used your Automation Assessment tool. I am interested in automating the following workflows for my business:\n\n${selectedNames || "General Consultation"}\n\nEstimated manual hours we want to eliminate: ~${totalHoursSaved} hrs/week. Could we schedule a free technical roadmap call?`
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
    <section id="automation-assessment" className="py-24 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-accent-500" />
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest">
              Interactive ROI Assessment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How Much Can Your Business Automate?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Select the daily manual tasks currently handled through Excel, paperwork, or WhatsApp. See how many operational hours a custom system can reclaim for your team.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Module Selector (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-navy-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-base font-bold text-white">Select Operational Bottlenecks</h3>
                <p className="text-xs text-slate-400 mt-0.5">Click to toggle the areas requiring software control</p>
              </div>
              <div className="flex space-x-3 text-xs">
                <button
                  type="button"
                  onClick={selectAll}
                  className="text-accent-400 hover:text-accent-300 font-semibold cursor-pointer"
                >
                  Select All
                </button>
                <span className="text-slate-600">•</span>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-slate-400 hover:text-slate-300 cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {MODULES.map((mod) => {
                const isSelected = selectedIds.includes(mod.id);
                return (
                  <div
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-start space-x-3.5 text-left select-none ${
                      isSelected
                        ? "bg-accent-500/15 border-accent-500 text-white shadow-md shadow-accent-500/10"
                        : "bg-white/5 border-white/5 hover:border-white/20 text-slate-300 hover:bg-white/[0.07]"
                    }`}
                  >
                    <div className="pt-0.5 flex-shrink-0">
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-accent-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white tracking-wide">
                          {mod.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results & Action Card (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-400 bg-accent-500/10 px-2.5 py-1 rounded">
                  Estimated Operational Impact
                </span>
                <h3 className="text-xl font-extrabold text-white mt-3">
                  {selectedIds.length} Workflows Selected
                </h3>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                  <div className="flex items-center text-slate-400 text-xs mb-1">
                    <Clock className="w-4 h-4 mr-1.5 text-accent-400" />
                    Weekly Hours Saved
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    ~{totalHoursSaved} <span className="text-sm font-normal text-slate-400">hrs</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    ~{estimatedAnnualSavingsHours} man-hours saved/year
                  </p>
                </div>

                <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                  <div className="flex items-center text-slate-400 text-xs mb-1">
                    <ShieldCheck className="w-4 h-4 mr-1.5 text-green-400" />
                    Error Reduction
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-green-400">
                    {estimatedErrorReduction}%
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Eliminates manual entry slips
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappConsultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/25 cursor-pointer text-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" size={18} />
                  Get Automation Plan via WhatsApp
                </a>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-full inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/35 cursor-pointer text-sm"
                >
                  Book Free Consultation Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                100% Free Consultation • Detailed Workflow Blueprint • No Obligation
              </p>
            </div>

            {/* Transparent Pricing Guidance Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left space-y-3">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-accent-400" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Transparent Investment Guidance
                </h4>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">Single Module / Custom Tool:</span>
                  <span className="font-semibold text-white">Starting from ₹25,000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">Departmental ERP (Billing + Stock):</span>
                  <span className="font-semibold text-white">Starting from ₹55,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Full Enterprise System:</span>
                  <span className="font-semibold text-white">Starting from ₹1,20,000</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 italic pt-1">
                *Every system is custom-built around your exact workflow with milestone-based delivery and no hidden licensing fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
