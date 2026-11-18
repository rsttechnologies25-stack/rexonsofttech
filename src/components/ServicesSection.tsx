"use client";

import Link from "next/link";
import { Cpu, Terminal, Globe, LayoutGrid, Smartphone, BrainCircuit, ShieldAlert, Check, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Cpu,
      title: "Enterprise Resource Planning (ERP)",
      href: "/services/erp-development",
      description: "Complete ERP architecture tailored to unique enterprise workflows and custom processing industries.",
      items: [
        "Custom Workflow ERP Solutions",
        "Steel Fabrication Workflows",
        "Live Inventory Tracking",
        "HR & Automated Payroll Modules",
        "GST Invoicing & GST Returns Integration",
        "Production Status Dashboards"
      ]
    },
    {
      icon: Terminal,
      title: "Custom Software Development",
      href: "/services/custom-software-development",
      description: "Tailor-made software packages that adapt perfectly to your unique organizational pipelines.",
      items: [
        "Invoicing & Billing Software",
        "Advanced CRM Systems",
        "Workflow Automation Scripts",
        "Custom SaaS Platform Architecture",
        "Business Management Panels"
      ]
    },
    {
      icon: Globe,
      title: "Website Development",
      href: "/services/website-development",
      description: "Responsive, high-conversion web frontends optimized for SEO, speed, and brand credibility.",
      items: [
        "Premium Corporate Websites",
        "E-Commerce Solutions & Portals",
        "High-Conversion Landing Pages",
        "Client/Vendor Login Portals",
        "Responsive Device Optimization"
      ]
    },
    {
      icon: LayoutGrid,
      title: "Web Application Development",
      href: "/services/web-application-development",
      description: "Robust cloud-hosted web portals handling intricate logic and massive transactional loads.",
      items: [
        "Lead Generation Platforms",
        "Enterprise Business Portals",
        "Internal Operations Panels",
        "Secure APIs & Database Sync"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      href: "/services/mobile-app-development",
      description: "Native and cross-platform mobile apps providing seamless fluid experiences.",
      items: [
        "Native Android Applications",
        "iOS App Development",
        "Hybrid Apps (React Native/Flutter)",
        "Offline Database Synchronization"
      ]
    },
    {
      icon: BrainCircuit,
      title: "AI & Automation Solutions",
      href: "/services/ai-automation",
      description: "Leverage intelligent computing algorithms to reduce repetitive cognitive workflows.",
      items: [
        "Customer Support Chatbots",
        "Automated PDF Reporting",
        "Business Intelligence Tools",
        "AI Analytics Dashboards"
      ]
    },
    {
      icon: ShieldAlert,
      title: "Managed Security Services (MSS)",
      href: "/services/managed-security-services",
      description: "Continuous enterprise cybersecurity, Managed SOC, SIEM engineering, EDR/XDR defense, and VAPT security audits.",
      items: [
        "Managed SOC & Threat Triage",
        "SIEM Engineering (Sentinel, Splunk, Wazuh)",
        "Endpoint Security & EDR Ransomware Defense",
        "Firewall & Network Zero-Trust Rules",
        "Continuous Vulnerability Management",
        "Penetration Testing (VAPT) & Audits"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            High-Performance Enterprise Services
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            We provide comprehensive digital transformation assets engineered to solve core operational complexities and trigger structural business growth.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 hover:border-accent-500/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div className="space-y-6">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5 text-left">
                    <Link href={service.href}>
                      <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-500 transition-colors">
                        {service.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullets List */}
                  <div className="pt-4 border-t border-slate-50 space-y-2 text-left">
                    {service.items.map((bullet, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-slate-600">
                        <Check className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 text-left">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 group-hover:translate-x-1 transition-transform"
                  >
                    Explore Service Architecture <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
