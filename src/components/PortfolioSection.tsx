"use client";

import Image from "next/image";
import { ExternalLink, CheckCircle2, ArrowRight, Laptop, AlertCircle } from "lucide-react";

interface CaseStudy {
  title: string;
  url: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  techs: string[];
  img: string;
}

export default function PortfolioSection() {
  const caseStudies: CaseStudy[] = [
    {
      title: "Perambur Srinivasa",
      url: "https://www.perambursrinivasa.com/",
      category: "Retail & E-Commerce",
      problem: "Manual telephone ordering process, untracked local deliveries, and limited digital reach.",
      solution: "Engineered a high-performance Next.js online storefront with instant payment integration, automated customer notifications, and mobile checkout.",
      result: "Direct online customer ordering channel launched with zero dropped checkout sessions.",
      techs: ["Next.js", "Payment Gateway", "Mobile Optimization", "Real-Time Tracking"],
      img: "/project_perambur.png"
    },
    {
      title: "Vinod Computers",
      url: "https://vinodcomputers.in",
      category: "IT Services & Lead Capture",
      problem: "Customer service calls and hardware repair tickets recorded manually on paper logs, leading to delayed turnaround times.",
      solution: "Centralized service portal with automated customer lead forms, ticket routing, and instant WhatsApp inquiry links.",
      result: "50% faster repair ticket logging and automated follow-ups for warranty status.",
      techs: ["Lead Capture Engine", "Corporate Branding", "Tailwind CSS", "Support Routing"],
      img: "/project_vinod.png"
    },
    {
      title: "Vinod Electronics",
      url: "https://vinod-electronics.com",
      category: "Consumer Tech Showcase",
      problem: "Lack of a digital catalog for distribution partners and retailers seeking product specs and stock verification.",
      solution: "Clean, ultra-fast single-brand digital portal optimized for distributors, dealers, and retail buyers.",
      result: "Instant digital product verification resulting in higher channel partner onboarding.",
      techs: ["Digital Catalog", "UX Optimization", "Next.js Core", "SEO Architecture"],
      img: "/project_vinod.png"
    },
    {
      title: "Naresh Computers",
      url: "https://nareshcomputers.co.in",
      category: "Hardware & GST Invoicing",
      problem: "Complex custom PC configuration requests and delayed GST invoice generation during peak retail counter hours.",
      solution: "Custom hardware configuration showcase coupled with swift invoice lookup and service categorization.",
      result: "Streamlined counter inquiries and transparent component pricing for retail buyers.",
      techs: ["Custom Configurator", "GST Ready", "Service Directory", "SEO Engine"],
      img: "/project_vinod.png"
    },
    {
      title: "Paras Jewellers",
      url: "https://parasjewellers.in",
      category: "Luxury Jewellery Showcase",
      problem: "High-value collections could not be effectively presented to prospective walk-in clients browsing on mobile devices.",
      solution: "High-definition, aesthetic gold and diamond digital catalog engineered for lightning-fast mobile loading and brand elegance.",
      result: "Significant boost in digital catalog shares and direct showroom walk-in inquiries.",
      techs: ["Luxury UI/UX", "High-Resolution Assets", "Mobile Responsiveness", "Product Showcases"],
      img: "/project_paras.png"
    },
    {
      title: "Interior Match",
      url: "https://interior-match.rexonsofttech.in",
      category: "Design Lead Platform",
      problem: "Fragmented lead onboarding between interior designers, residential homeowners, and contractor teams.",
      solution: "Custom client onboarding and matching network with structured questionnaires, portfolio galleries, and inquiry routing.",
      result: "Structured project requirements delivered directly to design specialists with complete scope clarity.",
      techs: ["Onboarding Engine", "Lead Scoring", "Cloud Database", "Dynamic Forms"],
      img: "/project_interior.png"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Real Proof of Delivery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Client Case Studies & Realized Assets
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            See how we diagnose manual business bottlenecks, architect tailored software systems, and deliver measurable operational results.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Header / Mockup */}
                <div className="h-44 bg-slate-50 border-b border-slate-100 relative p-3 flex items-end justify-center overflow-hidden group-hover:bg-blue-50/40 transition-colors">
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur border border-slate-200/80 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-accent-500 uppercase tracking-wider shadow-sm z-10">
                    {project.category}
                  </div>

                  {/* Browser Shell Mockup */}
                  <div className="w-[88%] h-[82%] border-t-[5px] border-x-[5px] border-slate-800 rounded-t-lg bg-slate-900 relative shadow-md flex flex-col overflow-hidden">
                    <div className="bg-slate-950 px-2 py-1 flex items-center space-x-1 border-b border-slate-800 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                      <div className="bg-slate-900 text-[6px] text-slate-400 font-mono px-2 py-0.5 rounded overflow-hidden max-w-[120px] whitespace-nowrap">
                        {project.url.replace("https://", "").replace("http://", "")}
                      </div>
                    </div>
                    <div className="flex-grow relative bg-slate-900">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="p-6 space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-500 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-3 text-xs">
                    <div className="bg-red-50/70 border border-red-100 rounded-lg p-2.5 space-y-1">
                      <div className="flex items-center font-bold text-red-700 uppercase tracking-wider text-[10px]">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        The Problem
                      </div>
                      <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="bg-blue-50/60 border border-blue-100 rounded-lg p-2.5 space-y-1">
                      <div className="flex items-center font-bold text-accent-700 uppercase tracking-wider text-[10px]">
                        <Laptop className="w-3 h-3 mr-1 text-accent-500" />
                        What We Built
                      </div>
                      <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                    </div>

                    <div className="bg-green-50/70 border border-green-100 rounded-lg p-2.5 space-y-1">
                      <div className="flex items-center font-bold text-green-700 uppercase tracking-wider text-[10px]">
                        <CheckCircle2 className="w-3 h-3 mr-1 text-green-600" />
                        Business Result
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">{project.result}</p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Button to visit website */}
              <div className="p-6 pt-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center text-xs font-bold text-accent-600 bg-accent-500/10 hover:bg-accent-500 hover:text-white px-4 py-2.5 rounded-xl transition-all duration-200"
                >
                  Visit Live Web Asset
                  <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
