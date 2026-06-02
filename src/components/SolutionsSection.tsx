"use client";

import { useState } from "react";
import { CheckCircle2, Star, Search, Plus, FileSpreadsheet, ShieldAlert, ArrowRight } from "lucide-react";

export default function SolutionsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const mockInventory = [
    { id: "ITEM-8942", name: "Grade A Steel Sheet", loc: "Rack B-4", qty: "42 Tons" },
    { id: "ITEM-1029", name: "Brass Alloys 12mm", loc: "Rack D-1", qty: "18 Tons" },
    { id: "ITEM-7763", name: "Copper Wire Coils", loc: "Rack A-9", qty: "65 Coils" }
  ];

  const filteredInventory = mockInventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Dedicated Business Software Solutions
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Off-the-shelf capability with completely custom flexibility. Discover our flagship enterprise products.
          </p>
        </div>

        {/* Section 1: Billing & Invoice Management */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">
              Financial Operations
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
              Billing & Invoice Management Software
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Empower your sales and finance teams with rapid invoice generation, automated tax calculations, and real-time ledger updates. Standardized with GST modules for stress-free tax auditing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">Key Features</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Local GST Billing Support</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Rapid Product Databases</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Customer Ledgers & Sync</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Financial Flow Dashboards</li>
                </ul>
              </div>

              {/* Benefits List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">Business Impact</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Faster Billing Operations</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Eliminate Calculation Errors</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Better Corporate Liquidity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Visual - Billing Ledger UI Mockup */}
          <div className="lg:col-span-6">
            <div className="relative glass-card-light rounded-2xl p-6 shadow-xl border border-slate-100 bg-white">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center space-x-2">
                  <FileSpreadsheet className="w-5 h-5 text-accent-500" />
                  <span className="text-xs font-bold text-navy-900">GST Ledger Panel</span>
                </div>
                <button className="bg-accent-500 hover:bg-accent-600 text-white text-[10px] font-bold px-2.5 py-1 rounded flex items-center">
                  <Plus className="w-3 h-3 mr-1" /> New Invoice
                </button>
              </div>

              {/* Ledger Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-[10px] text-muted-text uppercase font-semibold">
                      <th className="py-2.5">Invoice ID</th>
                      <th className="py-2.5">Amount</th>
                      <th className="py-2.5">Tax (GST)</th>
                      <th className="py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-slate-700 font-medium">
                    <tr className="border-b border-slate-50">
                      <td className="py-3 font-mono">#INV-89302</td>
                      <td className="py-3 font-bold">₹1,48,200</td>
                      <td className="py-3 text-slate-500">₹26,676 (18%)</td>
                      <td className="py-3"><span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded">Paid</span></td>
                    </tr>
                    <tr className="border-b border-slate-50">
                      <td className="py-3 font-mono">#INV-89301</td>
                      <td className="py-3 font-bold">₹75,400</td>
                      <td className="py-3 text-slate-500">₹13,572 (18%)</td>
                      <td className="py-3"><span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded">Paid</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 font-mono">#INV-89300</td>
                      <td className="py-3 font-bold">₹2,10,000</td>
                      <td className="py-3 text-slate-500">₹37,800 (18%)</td>
                      <td className="py-3"><span className="bg-yellow-50 text-yellow-600 text-[10px] font-bold px-2 py-0.5 rounded">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Storage & Retrieval Management */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Visual - Interactive Record Finder Mockup */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <div className="relative glass-card-light rounded-2xl p-6 shadow-xl border border-slate-100 bg-white">
              
              {/* Search Header */}
              <div className="pb-4 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold text-navy-900 block mb-3">Database Search Core</span>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by Item name or Serial..."
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
                        <p className="text-[10px] text-muted-text font-mono mt-0.5">{item.id} • {item.loc}</p>
                      </div>
                      <span className="text-xs font-extrabold text-accent-500 bg-accent-500/5 px-2.5 py-1 rounded">
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
                <span>Database Index Status: Optimal</span>
                <span className="text-green-500">Retrieval Speed: 0.18s</span>
              </div>

            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">
              Logistics & Database
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
              Storage & Retrieval Management Software
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Designed specifically for multi-rack warehouses, steel yards, and high-density inventory complexes. Rapidly query location mapping, weight records, and physical item statuses with zero lag.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">Key Features</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Precise Location Mapping</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> High-Performance Filters</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Automated Weight Calculators</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" /> Live Inventory Dashboards</li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">Business Impact</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Instant Access to Records</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Reduced Warehouse Wait-Times</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> 100% Audit Data Accuracy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
