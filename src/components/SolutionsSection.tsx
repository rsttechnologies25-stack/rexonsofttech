"use client";

import { useState } from "react";
import { CheckCircle2, Star, Search, Plus, FileSpreadsheet, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function SolutionsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const mockInventory = [
    { id: "ITEM-8942", name: "Grade A Steel Sheet (2.5mm)", loc: "Rack B-4", qty: "42 Tons" },
    { id: "ITEM-1029", name: "Brass Heavy Rods 12mm", loc: "Rack D-1", qty: "18 Tons" },
    { id: "ITEM-7763", name: "Copper Wire Coils (4.0mm)", loc: "Rack A-9", qty: "65 Coils" }
  ];

  const filteredInventory = mockInventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const requestBillingDemo = () => {
    const url = `https://wa.me/917871654777?text=${encodeURIComponent(
      "Hi RexonSoftTech, I would like to request a live demo of the RexonSoft Billing & GST Invoicing software for my company."
    )}`;
    window.open(url, "_blank");
  };

  const requestInventoryDemo = () => {
    const url = `https://wa.me/917871654777?text=${encodeURIComponent(
      "Hi RexonSoftTech, I would like to request a live demo of the RexonSoft Storage, Warehouse & Multi-Rack Inventory ERP system."
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-accent-500" />
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest">
              Ready-to-Deploy Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Core Business Software Platforms
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Battle-tested software foundations customized specifically to your operational requirements—available for immediate demo and deployment.
          </p>
        </div>

        {/* Product 1: RexonSoft Billing & Invoicing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">
                Product 01 • Financial Operations
              </span>
              <span className="text-[11px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                Ready to Deploy
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
              RexonSoft Billing
              <span className="block text-lg font-semibold text-slate-500 mt-1">
                GST Billing & Business Accounting Software
              </span>
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Empower your sales, billing, and accounting teams with rapid GST invoice generation, automated tax calculations, customer ledgers, and real-time payment reconciliation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">Product Features</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Automated GST Splits (CGST/SGST/IGST)</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Real-Time Customer Ledgers & Statements</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Instant PDF Invoices & WhatsApp Sharing</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> One-Click GSTR-1 Tax Summary Export</li>
                </ul>
              </div>

              {/* Benefits List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">Business Impact</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Cut counter checkout time by 60%</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> 100% elimination of calculation mistakes</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Faster cash flow reconciliation</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={requestBillingDemo}
                className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" size={16} />
                Request Live Billing Demo
              </button>
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-bold text-navy-900 hover:text-accent-500 border border-slate-200 px-5 py-3 rounded-xl transition-colors"
              >
                Get Custom Quote
              </a>
            </div>
          </div>

          {/* Right Visual - Billing Ledger UI Mockup */}
          <div className="lg:col-span-6">
            <div className="relative glass-card-light rounded-2xl p-6 shadow-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center space-x-2">
                  <FileSpreadsheet className="w-5 h-5 text-accent-500" />
                  <span className="text-xs font-bold text-navy-900">RexonSoft GST Billing Console</span>
                </div>
                <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded">
                  E-Invoicing Compliant
                </span>
              </div>

              {/* Ledger Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-[10px] text-muted-text uppercase font-semibold">
                      <th className="py-2.5">Invoice ID</th>
                      <th className="py-2.5">Client</th>
                      <th className="py-2.5">Tax (GST)</th>
                      <th className="py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-slate-700 font-medium">
                    <tr className="border-b border-slate-50">
                      <td className="py-3 font-mono font-bold text-accent-600">#INV-89302</td>
                      <td className="py-3">Perambur Store</td>
                      <td className="py-3 text-slate-500">₹26,676 (18%)</td>
                      <td className="py-3"><span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded">Paid</span></td>
                    </tr>
                    <tr className="border-b border-slate-50">
                      <td className="py-3 font-mono font-bold text-accent-600">#INV-89301</td>
                      <td className="py-3">Vinod Tech</td>
                      <td className="py-3 text-slate-500">₹13,572 (18%)</td>
                      <td className="py-3"><span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded">Paid</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 font-mono font-bold text-accent-600">#INV-89300</td>
                      <td className="py-3">Naresh Systems</td>
                      <td className="py-3 text-slate-500">₹37,800 (18%)</td>
                      <td className="py-3"><span className="bg-yellow-50 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Status bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                <span>Multi-counter sync enabled</span>
                <span className="text-green-600 font-semibold">GSTR-1 Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: RexonSoft Warehouse & Storage ERP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Visual - Interactive Record Finder Mockup */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <div className="relative glass-card-light rounded-2xl p-6 shadow-xl border border-slate-200 bg-white">
              
              {/* Search Header */}
              <div className="pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-navy-900">Multi-Warehouse Inventory Core</span>
                  <span className="text-[10px] text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded">
                    Batch-Tracked
                  </span>
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by Item name, Rack or Serial..."
                    className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-accent-500 text-slate-700"
                  />
                </div>
              </div>

              {/* Records List */}
              <div className="space-y-2">
                {filteredInventory.length > 0 ? (
                  filteredInventory.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-accent-500/20 transition-colors">
                      <div>
                        <p className="text-xs font-bold text-navy-900">{item.name}</p>
                        <p className="text-[10px] text-muted-text font-mono mt-0.5">{item.id} • Location: <span className="font-semibold text-slate-700">{item.loc}</span></p>
                      </div>
                      <span className="text-xs font-extrabold text-accent-500 bg-accent-500/10 px-2.5 py-1 rounded">
                        {item.qty}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 text-xs text-slate-400">
                    No matching records found.
                  </div>
                )}
              </div>

              {/* Retrieve Speed Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-muted-text font-semibold">
                <span className="flex items-center text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500 mr-1" />
                  Stock Audit Verification
                </span>
                <span className="text-accent-600 font-bold">Location Indexed</span>
              </div>

            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">
                Product 02 • Storage & Operations
              </span>
              <span className="text-[11px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                Ready to Deploy
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
              RexonSoft Inventory & Warehouse ERP
              <span className="block text-lg font-semibold text-slate-500 mt-1">
                Multi-Rack, Batch & Dispatch Management
              </span>
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Designed specifically for multi-rack warehouses, steel yards, raw material processors, and high-density inventory setups. Eliminate lost stock, trace batch serials, and automate gate pass generation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">Product Features</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Exact Rack & Bin Location Mapping</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Raw Material & Scrap Wastage Tracking</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Barcode / QR Dispatch & Gate Pass Generation</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Automated Low-Stock Reorder Alerts</li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">Business Impact</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Zero inventory discrepancies during audits</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Instant retrieval by yard floor workers</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Real-time stock visibility for sales teams</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={requestInventoryDemo}
                className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" size={16} />
                Request Live Inventory Demo
              </button>
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-bold text-navy-900 hover:text-accent-500 border border-slate-200 px-5 py-3 rounded-xl transition-colors"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
