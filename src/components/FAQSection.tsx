"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: "Cost & Commercials",
    question: "How much does custom ERP and business software typically cost?",
    answer:
      "Unlike off-the-shelf software with expensive per-user monthly subscription fees that never end, our custom software is built specifically for your business with fixed milestone-based pricing. Single automation modules (like a custom GST billing tool or inventory tracker) start around ₹25,000 to ₹55,000, while complete end-to-end ERP platforms with multi-department workflows start from ₹1,20,000. You own the solution with zero recurring licensing penalties."
  },
  {
    category: "Data & Migration",
    question: "Can you migrate our existing records from Excel, Google Sheets, or Tally?",
    answer:
      "Yes. Data migration is a standard part of our onboarding. Our engineering team cleans, formats, and securely imports your historical customer lists, item masters, opening stock balances, and ledger records into the new relational database so your team doesn't lose a single historical entry."
  },
  {
    category: "Delivery Timeline",
    question: "How long does it take from concept to live deployment?",
    answer:
      "Focused departmental solutions and custom web portals are typically delivered within 2 to 4 weeks. Full enterprise ERP systems with multiple operational modules (BOM, Inventory, Production, Billing) take between 4 to 8 weeks, delivered in iterative phases so you can start using completed modules immediately."
  },
  {
    category: "Compliance & Taxation",
    question: "Does the system support Indian GST laws, HSN codes, and e-invoicing?",
    answer:
      "Yes, 100%. All financial modules are fully compliant with Indian GST requirements, including automatic CGST/SGST/IGST tax splits, HSN/SAC code lookups, reverse charge mechanisms, and exportable GSTR-1/3B summary reports to make monthly filing effortless for your accountant."
  },
  {
    category: "Mobility & Access",
    question: "Can multiple branches, warehouses, and mobile staff access the system?",
    answer:
      "Yes. Our systems are built as secure, cloud-enabled web applications. You can access the platform from anywhere—office PCs, warehouse tablets, or mobile smartphones. Granular role-based access control ensures sales reps only see their customers, warehouse staff only see inventory, and management sees complete financial overviews."
  },
  {
    category: "Training & Support",
    question: "Do you provide staff training and post-launch technical support?",
    answer:
      "Every project includes dedicated hands-on onboarding sessions for your staff and management. We provide user manuals, video walkthroughs, and guaranteed post-launch technical maintenance to handle any adjustments, backup monitoring, and future feature expansions."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const whatsappInquiryUrl = `https://wa.me/917871654777?text=${encodeURIComponent(
    "Hi RexonSoftTech, I have a specific question about ERP software development for my business."
  )}`;

  return (
    <section id="faq" className="py-24 bg-lightBg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-accent-500" />
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest">
              Answers for Business Leaders
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Everything you need to know before partnering with us to build your custom software system.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-accent-500 uppercase tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-bold text-navy-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-accent-500/10 text-accent-600" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions footer */}
        <div className="mt-12 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-navy-900">Have a specific question about your industry?</h4>
            <p className="text-xs text-slate-500">
              Speak directly with our engineering lead. No pushy sales calls—just practical technical answers.
            </p>
          </div>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-all flex-shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 mr-2" size={16} />
            Ask via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
