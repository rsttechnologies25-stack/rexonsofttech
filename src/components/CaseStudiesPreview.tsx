"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, CheckCircle2, Laptop } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CaseStudiesPreview() {
  const featuredCases = [
    {
      title: "Perambur Srinivasa",
      url: "https://www.perambursrinivasa.com/",
      category: "Retail E-Commerce",
      desc: "High-performance online ordering and delivery tracking system designed for rapid mobile checkout.",
      result: "100% automated direct digital orders with seamless payment integration.",
      img: "/project_perambur.png",
      techs: ["Next.js", "Payment Gateway", "Mobile Optimization"]
    },
    {
      title: "Vinod Computers",
      url: "https://vinodcomputers.in",
      category: "IT Services & Lead Capture",
      desc: "Centralized service portal automating customer support tickets, repair lookups, and inquiry routing.",
      result: "50% faster repair ticket logging and automated customer status follow-ups.",
      img: "/project_vinod.png",
      techs: ["Lead Capture Engine", "Tailwind CSS", "Support Routing"]
    },
    {
      title: "Paras Jewellers",
      url: "https://parasjewellers.in",
      category: "Luxury Jewellery Showcase",
      desc: "Aesthetic gold and diamond product catalog engineered for high-resolution mobile browsing.",
      result: "Over 3x surge in digital catalog shares and direct showroom visit inquiries.",
      img: "/project_paras.png",
      techs: ["Luxury UI/UX", "High-Res Assets", "Mobile Web"]
    }
  ];

  return (
    <section id="portfolio-preview" className="py-28 bg-lightBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
                Selected Client Case Studies
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                Explore a handpicked selection of custom systems, corporate web applications, and e-commerce platforms delivered for our clients.
              </p>
            </div>
            <Link
              href="/services#portfolio"
              className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700 bg-white border border-slate-200 px-5 py-3 rounded-xl shadow-sm hover:shadow transition-all self-start md:self-auto"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCases.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between overflow-hidden h-full">
                <div>
                  {/* Visual Mockup Header */}
                  <div className="h-44 bg-slate-50 border-b border-slate-100 relative p-3 flex items-end justify-center overflow-hidden group-hover:bg-blue-50/30 transition-colors">
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur border border-slate-200/80 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-accent-500 uppercase tracking-wider shadow-sm z-10">
                      {project.category}
                    </div>

                    <div className="w-[90%] h-[82%] border-t-[5px] border-x-[5px] border-slate-800 rounded-t-lg bg-slate-900 relative shadow-md flex flex-col overflow-hidden">
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

                  {/* Card Body */}
                  <div className="p-6 space-y-4 text-left">
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="pt-2">
                      <div className="inline-flex items-center text-[11px] font-semibold text-green-700 bg-green-50 border border-green-200/60 px-2.5 py-1 rounded-md">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-green-600" />
                        <span>{project.result}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom External Link */}
                <div className="p-6 pt-0">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center text-xs font-bold text-accent-600 bg-accent-500/10 hover:bg-accent-500 hover:text-white px-4 py-2.5 rounded-xl transition-all duration-200"
                  >
                    Visit Live Website
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
