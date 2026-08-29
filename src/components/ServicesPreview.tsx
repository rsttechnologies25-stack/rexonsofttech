"use client";

import Link from "next/link";
import { 
  Cpu, 
  Terminal, 
  Globe, 
  LayoutGrid, 
  Smartphone, 
  BrainCircuit, 
  ShieldAlert, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ServicesPreview() {
  const services = [
    {
      icon: Cpu,
      title: "Custom ERP Solutions",
      isFlagship: true,
      description: "Bespoke enterprise resource planning platforms tailored to manufacturing, steel yards, jewellery, and high-volume retail operations.",
      features: ["Custom Workflows", "Multi-Rack Stock", "GST E-Invoicing"],
      link: "/services#erp-solutions"
    },
    {
      icon: Terminal,
      title: "Custom Software Development",
      isFlagship: false,
      description: "Tailored business management software, billing modules, and automation tools built to match your operational logic with zero compromise.",
      features: ["Billing Engines", "Custom CRMs", "Internal Panels"],
      link: "/services"
    },
    {
      icon: Globe,
      title: "Website Development",
      isFlagship: false,
      description: "High-performance, SEO-optimized corporate websites and online storefronts designed for brand authority and lead conversion.",
      features: ["Corporate Showcases", "E-Commerce", "Speed & SEO"],
      link: "/services"
    },
    {
      icon: LayoutGrid,
      title: "Web Applications & Portals",
      isFlagship: false,
      description: "Complex, scalable cloud applications with secure multi-tenant architectures, interactive customer portals, and real-time APIs.",
      features: ["Client Portals", "Cloud Databases", "Secure APIs"],
      link: "/services"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      isFlagship: false,
      description: "Native and cross-platform iOS and Android mobile apps engineered for fluid performance, offline data sync, and field operations.",
      features: ["iOS & Android", "Field Staff Apps", "Offline Sync"],
      link: "/services"
    },
    {
      icon: BrainCircuit,
      title: "AI & Business Automation",
      isFlagship: false,
      description: "Intelligent workflow automation, AI assistants, automated report generation, and data analytics that cut repetitive cognitive labor.",
      features: ["Workflow Bots", "PDF Auto-Reports", "Smart Dashboards"],
      link: "/services"
    },
    {
      icon: ShieldAlert,
      title: "Cyber Security Services",
      isFlagship: false,
      description: "Vulnerability assessments, penetration testing, and security audits to protect your company's data and digital infrastructure.",
      features: ["Security Audits", "VAPT Testing", "OWASP Standards"],
      link: "/services"
    }
  ];

  return (
    <section id="services-preview" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-4 py-1.5 rounded-full">
              Full-Stack Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
              End-to-End Technology Solutions
            </h2>
            <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
              From enterprise-grade custom ERP systems to modern web applications, mobile platforms, and cybersecurity—we build software engineered for growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Balanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.06}>
                <div
                  className={`bg-slate-50/70 border rounded-2xl p-8 transition-all duration-300 group flex flex-col justify-between h-full hover:shadow-lg hover:bg-white hover:-translate-y-1 relative ${
                    service.isFlagship
                      ? "border-accent-500/40 ring-1 ring-accent-500/10 shadow-sm"
                      : "border-slate-200/80 hover:border-accent-500/30"
                  }`}
                >
                  {/* Flagship Badge */}
                  {service.isFlagship && (
                    <div className="absolute top-4 right-4 inline-flex items-center space-x-1 bg-accent-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Flagship</span>
                    </div>
                  )}

                  <div className="space-y-5 text-left">
                    {/* Icon Block */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {service.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="bg-white border border-slate-200/80 text-slate-600 text-[11px] font-medium px-2.5 py-1 rounded-md"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-6 mt-6 border-t border-slate-200/60">
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-xs font-bold text-accent-600 group-hover:text-accent-700 group-hover:translate-x-0.5 transition-all"
                    >
                      Explore Service Details
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All Services Action Banner */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-950 rounded-2xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                Looking for a tailored software or ERP architecture?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Explore our full service breakdowns, industry modules, and interactive automation assessment tool.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-sm font-bold px-7 py-3.5 rounded-xl transition-all shadow-md shadow-accent-500/25 hover:shadow-accent-500/35 flex-shrink-0 cursor-pointer"
            >
              View Full Services Page
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
