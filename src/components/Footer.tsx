"use client";

import Image from "next/image";
import Link from "next/link";
import { Terminal, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-20 pb-10 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-navy-900">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => scrollToSection("hero")}>
              <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 bg-white flex items-center justify-center shadow-md">
                <Image src="/logo.png" alt="RexonSoftTech Logo" width={40} height={40} className="object-cover" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  RexonSoftTech
                </span>
                <p className="text-[10px] tracking-widest font-semibold uppercase leading-none text-blue-300">
                  Software Development
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Building secure, scalable, and future-ready digital solutions that streamline corporate workflows, optimize inventory management, and trigger robust business growth.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@rexonsofttech.in" className="flex items-center text-sm hover:text-white transition-colors">
                <Mail className="w-4.5 h-4.5 text-accent-500 mr-3" />
                info@rexonsofttech.in
              </a>
              <a href="tel:+917871654777" className="flex items-center text-sm hover:text-white transition-colors">
                <Phone className="w-4.5 h-4.5 text-accent-500 mr-3" />
                +91 78716 54777
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 border-l-2 border-accent-500 pl-3">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors text-left flex items-center">
                  Enterprise ERP <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors text-left flex items-center">
                  Custom Software Development <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors text-left flex items-center">
                  Web & Mobile Applications <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors text-left flex items-center">
                  AI & Process Automation <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors text-left flex items-center">
                  Cyber Security Audits <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* ERP Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 border-l-2 border-accent-500 pl-3">
              ERP Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection("erp-solutions")} className="hover:text-white transition-colors text-left flex items-center">
                  Custom ERP Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("erp-solutions")} className="hover:text-white transition-colors text-left flex items-center">
                  Steel Fabrication ERP
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("erp-solutions")} className="hover:text-white transition-colors text-left flex items-center">
                  Inventory & Purchase Flow
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("erp-solutions")} className="hover:text-white transition-colors text-left flex items-center">
                  GST Billing Integration
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("erp-solutions")} className="hover:text-white transition-colors text-left flex items-center">
                  Attendance & HR Management
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 border-l-2 border-accent-500 pl-3">
              Corporate Office
            </h4>
            <div className="flex items-start text-sm leading-relaxed">
              <MapPin className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
              <span>
                Block I, 5/1049, West,<br />
                Aishwarya Colony, Thangam Colony, Anna Nagar,<br />
                Chennai, Tamil Nadu 600040
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RexonSoftTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
