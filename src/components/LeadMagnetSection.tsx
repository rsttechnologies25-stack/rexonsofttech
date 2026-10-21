"use client";

import { useState } from "react";
import { FileText, Download, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function LeadMagnetSection() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    company: "",
    businessType: "Manufacturing & Fabrication"
  });
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;

    trackEvent("lead_magnet_download", {
      resource: "erp_buyers_checklist_2026",
      business_type: form.businessType
    });

    setIsDownloaded(true);

    // Generate practical checklist printable resource
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>ERP Buyer's Checklist for Indian SMBs - RexonSoftTech</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #0f172a; line-height: 1.6; padding: 40px; max-width: 800px; mx-auto; }
            h1 { color: #0284c7; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; font-size: 24px; }
            h2 { color: #0f172a; margin-top: 28px; font-size: 18px; border-left: 4px solid #0284c7; padding-left: 10px; }
            ul { list-style: none; padding-left: 0; }
            li { margin-bottom: 10px; padding-left: 28px; position: relative; font-size: 14px; }
            li::before { content: "☐"; position: absolute; left: 0; font-size: 18px; color: #64748b; }
            .header-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; margin-bottom: 24px; font-size: 13px; }
            .footer-box { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
            @media print { body { padding: 0; } }
          </style>
        </head>
        <body>
          <h1>ERP Buyer's Evaluation Checklist for Indian SMBs (2026 Edition)</h1>
          <div class="header-box">
            <strong>Prepared for:</strong> ${form.name} | ${form.company || "Enterprise Client"} (${form.businessType})<br>
            <strong>Publisher:</strong> RexonSoftTech Architecture Team (Chennai, India) | contact: info@rexonsofttech.in
          </div>

          <h2>1. Core Operational & Workflow Fit</h2>
          <ul>
            <li>Does the system model your exact shop floor / sales processes without forcing generic workaround templates?</li>
            <li>Can custom fields, approval stages, and unique job cards be created without paying exorbitant change fees?</li>
            <li>Can existing data from Excel, Google Sheets, or Tally be seamlessly migrated with zero ledger discrepancies?</li>
            <li>Does it support role-based permissions (operators see only work orders; accounts see ledgers; management sees P&L)?</li>
          </ul>

          <h2>2. Statutory GST & Indian Tax Compliance</h2>
          <ul>
            <li>Automatic CGST, SGST, IGST tax split calculation based on customer/supplier state classification?</li>
            <li>Integrated GST E-Invoicing with direct QR code generation and IRN registration?</li>
            <li>E-Way bill number generation directly from dispatch delivery challans?</li>
            <li>HSN / SAC code validation and automated GSTR-1 / GSTR-3B summary exports?</li>
          </ul>

          <h2>3. Inventory, Warehouse & Batch Traceability</h2>
          <ul>
            <li>Real-time stock valuation with multiple methods (FIFO, Weighted Average, LIFO)?</li>
            <li>Batch number, heat code (for steel/metals), or serial number tracking from GRN to customer delivery?</li>
            <li>Multi-warehouse and rack/bin-level inventory location management?</li>
            <li>Automated reorder-level alerts on WhatsApp / Email before critical stockouts occur?</li>
          </ul>

          <h2>4. Total Cost of Ownership (TCO) & Code Freedom</h2>
          <ul>
            <li>Are there recurring per-seat monthly license penalties as your workforce grows? (Demand 100% source code ownership).</li>
            <li>Can the ERP run on your own dedicated cloud infrastructure (AWS/DigitalOcean/Cloudflare) or on-premise?</li>
            <li>Is there guaranteed post-launch staff training and direct access to software architects?</li>
            <li>Is there an SLA covering bug fixes, statutory GST updates, and regular database backups?</li>
          </ul>

          <div class="footer-box">
            RexonSoftTech — Custom ERP & Software Engineering | Block I, Anna Nagar, Chennai 600040<br>
            For a complimentary workflow evaluation: +91 78716 54777 | info@rexonsofttech.in | https://rexonsofttech.in
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden text-left my-12">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full text-xs font-bold text-accent-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complimentary Business Resource</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            ERP Buyer's Evaluation Checklist for Indian SMBs
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            Planning to replace fragmented Excel sheets or rigid accounting software? Download our 20-point practical evaluation checklist covering GST e-invoicing readiness, shop-floor traceability, data ownership, and TCO traps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent-400 flex-shrink-0" />
              <span>GST & Statutory Tax Criteria</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent-400 flex-shrink-0" />
              <span>Excel to Relational DB Migration</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent-400 flex-shrink-0" />
              <span>Multi-Warehouse Batch Tracking</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent-400 flex-shrink-0" />
              <span>100% Source Code Ownership TCO</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-7 rounded-2xl backdrop-blur-md">
          {!isDownloaded ? (
            <form onSubmit={handleDownload} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Ramesh Sundaram"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/90 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-accent-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  WhatsApp Number or Business Email *
                </label>
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="+91 98765 43210 or name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/90 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-accent-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Acme Corp"
                    className="w-full px-3 py-2.5 rounded-xl bg-navy-900/90 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-accent-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Industry
                  </label>
                  <select
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-navy-900/90 border border-white/15 text-white text-xs focus:outline-none focus:border-accent-400"
                  >
                    <option value="Manufacturing & Fabrication">Manufacturing</option>
                    <option value="Steel & Metal Yard">Steel & Metals</option>
                    <option value="Jewellery & Luxury Goods">Jewellery</option>
                    <option value="Retail & Distribution">Retail / POS</option>
                    <option value="Logistics & Warehousing">Logistics</option>
                    <option value="Healthcare & Pharma">Healthcare</option>
                    <option value="IT & Professional Services">Services</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-[#FFF3E6] hover:bg-[#FCE9D7] text-[#381932] font-bold py-3 px-5 rounded-xl text-xs shadow-lg shadow-black/25 transition-all cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Instant PDF Checklist
              </button>

              <div className="flex items-center justify-center text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-accent-400" />
                <span>Zero spam. No credit card required.</span>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">Checklist Opened!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your printable PDF evaluation checklist has been generated in a new window. You can save or print it for your internal technology committee discussions.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsDownloaded(false)}
                className="text-xs text-accent-400 hover:underline cursor-pointer"
              >
                Download again or enter different details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
