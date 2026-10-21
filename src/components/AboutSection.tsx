"use client";

import { Check, ShieldCheck, Target, MapPin, Users, Award, Code2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FFF3E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Company Credibility Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              <div className="relative glass-card-light rounded-2xl p-6 sm:p-8 shadow-xl border border-[#EAD8C7] bg-[#FAF0E4] space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#EAD8C7]">
                  <span className="text-xs font-bold text-[#381932] uppercase tracking-widest">
                    Company Snapshot
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                </div>

                <div className="space-y-4 text-left text-xs">
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#EAD8C7] shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF3E6] text-[#381932] border border-[#EAD8C7] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#381932]">Headquarters</p>
                      <p className="text-[#5D4356] mt-0.5">Anna Nagar, Chennai 600040, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#EAD8C7] shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF3E6] text-[#381932] border border-[#EAD8C7] flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#381932]">Core Specialization</p>
                      <p className="text-[#5D4356] mt-0.5">Custom ERPs, GST Billing, Business Automation</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#EAD8C7] shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF3E6] text-[#381932] border border-[#EAD8C7] flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#381932]">Engineering Approach</p>
                      <p className="text-[#5D4356] mt-0.5">Zero Out-Sourcing • Direct Access to Software Architects</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#EAD8C7] shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF3E6] text-[#381932] border border-[#EAD8C7] flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#381932]">Post-Deployment Guarantee</p>
                      <p className="text-[#5D4356] mt-0.5">Staff Onboarding, Data Migration, Dedicated Maintenance</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#381932]/10 border border-[#381932]/20 rounded-xl text-center">
                  <p className="text-xs font-bold text-[#381932]">
                    Focused on SMBs & Enterprise Operations
                  </p>
                  <p className="text-[11px] text-[#5D4356] mt-0.5">
                    We turn complex manual operations into clear, automated digital systems.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Content & Mission */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#381932] uppercase tracking-widest bg-[#381932]/10 border border-[#381932]/20 px-3 py-1 rounded-full">
                About RexonSoftTech
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#381932] mt-2">
                We Turn Manual Business Operations into Automated Software Systems
              </h2>
            </div>

            <p className="text-base text-[#5D4356] leading-relaxed">
              Headquartered in Anna Nagar, Chennai, <strong>RexonSoftTech</strong> was established to solve a persistent challenge faced by growing Indian businesses: off-the-shelf ERP and billing software is too rigid, too complex, and filled with features you will never use—while your actual workflows still end up being tracked on Excel sheets and WhatsApp groups.
            </p>

            <p className="text-base text-[#5D4356] leading-relaxed">
              We engineer custom software, warehouse databases, and automated ERPs that model <em>your</em> exact business logic. From multi-rack steel yard inventory and jewel showcase catalogs to retail point-of-sale and GST returns, our platforms provide total operational visibility and eliminate human error.
            </p>

            {/* Core Pillars Check List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center space-x-3 text-[#5D4356]">
                <div className="w-5 h-5 rounded-full bg-[#381932]/10 flex items-center justify-center text-[#381932] flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold">Bespoke ERP Workflow Architecture</span>
              </div>
              <div className="flex items-center space-x-3 text-[#5D4356]">
                <div className="w-5 h-5 rounded-full bg-[#381932]/10 flex items-center justify-center text-[#381932] flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold">Native Indian GST & Tax Compliance</span>
              </div>
              <div className="flex items-center space-x-3 text-[#5D4356]">
                <div className="w-5 h-5 rounded-full bg-[#381932]/10 flex items-center justify-center text-[#381932] flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold">Legacy Excel & Tally Data Migration</span>
              </div>
              <div className="flex items-center space-x-3 text-[#5D4356]">
                <div className="w-5 h-5 rounded-full bg-[#381932]/10 flex items-center justify-center text-[#381932] flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold">Direct Engineering SLA Support</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-bold text-[#FFF3E6] hover:bg-[#2C1327] bg-[#381932] px-5 py-3 rounded-xl transition-colors shadow-sm"
              >
                Schedule a Consultation with our Engineers →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
