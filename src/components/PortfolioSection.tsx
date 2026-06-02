"use client";

import Image from "next/image";
import { ExternalLink, Laptop, Smartphone, Monitor } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Perambur Srinivasa",
      url: "https://perambursrinivasa.co.in/shop",
      category: "E-Commerce Shop",
      desc: "Full-scale online retail shopping portal optimized for mobile checkouts, catalog navigation, and local delivery tracking.",
      techs: ["E-Commerce Core", "Payment Integration", "Mobile Optimization"],
      img: "/project_perambur.png"
    },
    {
      title: "Vinod Computers",
      url: "https://vinodcomputers.in",
      category: "IT Services & Lead Gen",
      desc: "Corporate service website featuring dynamic lead forms, interactive support queues, and automated customer routing panels.",
      techs: ["Lead Capture APIs", "Corporate Branding", "Tailwind CSS"],
      img: "/project_vinod.png"
    },
    {
      title: "Vinod Electronics",
      url: "https://vinod-electronics.com",
      category: "Product Branding",
      desc: "High-impact single-product and brand portal engineered to drive product awareness and channel partner acquisitions.",
      techs: ["Brand Systems", "UX Optimization", "Next.js Core"],
      img: "/project_vinod.png"
    },
    {
      title: "Naresh Computers",
      url: "https://nareshcomputers.co.in",
      category: "Sales & Support Portal",
      desc: "E-storefront showcasing computing systems, custom configurations, local hardware services, and invoice lookup panels.",
      techs: ["Service Catalogs", "GST Setup", "SEO Optimization"],
      img: "/project_vinod.png"
    },
    {
      title: "Adhithya Electronics",
      url: "https://adhithyaelectronics.netlify.app",
      category: "Electronics E-Catalog",
      desc: "A lightweight, rapid loading digital product catalog designed for instant client reviews and high conversions.",
      techs: ["React.js", "Netlify Deployment", "Ultra-Fast Assets"],
      img: "/project_vinod.png"
    },
    {
      title: "Interior Match",
      url: "https://interior-match.rexonsofttech.in",
      category: "Design Lead Platform",
      desc: "Dedicated high-fidelity customer onboarding and matching network for interior design and architecture professionals.",
      techs: ["Customer Onboarding", "Match Algorithms", "Cloud Database"],
      img: "/project_interior.png"
    },
    {
      title: "RexonSoftTech Portal",
      url: "https://rexonsofttech.in",
      category: "Enterprise Corporate",
      desc: "High-end corporate showcase representing company solutions, client logs, active support links, and resource downloads.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      img: "/project_rexon.png"
    },
    {
      title: "Paras Jewellers",
      url: "https://parasjewellers.in",
      category: "Jewellery E-Showcase",
      desc: "Premium gold & diamond product showcase, featuring ultra-responsive layout and high-end typography matching the brand's luxury identity.",
      techs: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      img: "/project_paras.png"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-500 uppercase tracking-widest bg-accent-500/5 border border-accent-500/10 px-3.5 py-1.5 rounded-full">
            Proven Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900 mt-3">
            Realized Digital Assets
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Discover a handpicked selection of premium business applications, corporate portals, and custom e-stores delivered to our clients.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Visual Mockup - Laptop/Device shell simulation */}
                <div className="h-44 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden flex items-end justify-center relative p-3 group-hover:bg-blue-50/30 transition-all duration-300">
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-slate-200/50 px-2 py-0.5 rounded text-[10px] font-bold text-accent-500 uppercase tracking-wider shadow-sm">
                    {project.category}
                  </div>
                  
                  {/* Laptop Mockup Shell */}
                  <div className="w-[85%] h-[80%] border-t-[6px] border-x-[6px] border-slate-800 rounded-t-lg bg-slate-900 relative shadow-md flex flex-col overflow-hidden">
                    {/* Top address bar simulation */}
                    <div className="bg-slate-950 px-2 py-1 flex items-center space-x-1 border-b border-slate-800 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                      <div className="bg-slate-900/50 text-[6px] text-slate-500 font-mono px-2 py-0.5 rounded overflow-hidden max-w-[120px] whitespace-nowrap leading-none">
                        {project.url.replace("https://", "")}
                      </div>
                    </div>
                    {/* Inner page visual representation */}
                    <div className="flex-grow relative bg-slate-900 overflow-hidden">
                      <Image
                        src={project.img}
                        alt={`${project.title} Preview`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="space-y-3 text-left">
                  <h3 className="text-base font-bold text-navy-900 group-hover:text-accent-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[64px]">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Action Button & Tech badging */}
              <div className="mt-6 pt-4 border-t border-slate-50 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((tech, tIdx) => (
                    <span key={tIdx} className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-slate-50 hover:bg-accent-500 border border-slate-200 hover:border-accent-500 text-slate-700 hover:text-white py-2.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm group-hover:shadow-md"
                >
                  Visit Platform <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
