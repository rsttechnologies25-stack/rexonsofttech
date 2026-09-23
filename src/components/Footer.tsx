"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-20 pb-10 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-navy-900 text-left">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-xl overflow-hidden mr-3 bg-white flex items-center justify-center shadow-md p-0.5">
                <Image src="/rst_logo.png" alt="RexonSoftTech Logo" width={40} height={40} className="object-contain w-full h-full" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  RexonSoftTech
                </span>
                <p className="text-[10px] tracking-widest font-semibold uppercase leading-none text-blue-300">
                  Software Development
                </p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Full-service software engineering company specializing in flagship custom ERP systems, business automation, web platforms, mobile apps, and cybersecurity in Chennai.
            </p>
            <div className="space-y-2.5 text-xs">
              <a
                href="mailto:info@rexonsofttech.in"
                className="flex items-center hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-500 mr-2.5 flex-shrink-0" />
                info@rexonsofttech.in
              </a>
              <a
                href="tel:+917871654777"
                onClick={() => trackEvent("phone_click", { location: "footer" })}
                className="flex items-center hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-accent-500 mr-2.5 flex-shrink-0" />
                +91 78716 54777
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6 border-l-2 border-accent-500 pl-3">
              Services & ERP
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/services/erp-development" className="hover:text-white transition-colors flex items-center">
                  Custom ERP Architecture
                </Link>
              </li>
              <li>
                <Link href="/erp/steel-fabrication" className="hover:text-white transition-colors flex items-center">
                  Steel Fabrication ERP
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software-development" className="hover:text-white transition-colors flex items-center">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/website-development" className="hover:text-white transition-colors flex items-center">
                  Website & E-Commerce Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-application-development" className="hover:text-white transition-colors flex items-center">
                  Web Applications & Portals
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-white transition-colors flex items-center">
                  Mobile App Development (iOS & Android)
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition-colors flex items-center">
                  AI & Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity-vapt" className="hover:text-white transition-colors flex items-center">
                  Cyber Security Audits & VAPT
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Company */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6 border-l-2 border-accent-500 pl-3">
              Company & Resources
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center">
                  About RexonSoftTech
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors flex items-center">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/erp" className="hover:text-white transition-colors flex items-center">
                  ERP Solutions Hub
                </Link>
              </li>
              <li>
                <Link href="/erp/inventory-management" className="hover:text-white transition-colors flex items-center">
                  Warehouse Inventory Module
                </Link>
              </li>
              <li>
                <Link href="/erp/gst-billing" className="hover:text-white transition-colors flex items-center">
                  GST Billing Engine
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors flex items-center">
                  Engineering Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center">
                  Careers & Open Roles
                </Link>
              </li>
              <li>
                <Link href="/about#faq" className="hover:text-white transition-colors flex items-center">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6 border-l-2 border-accent-500 pl-3">
              Corporate Office
            </h4>
            <div className="space-y-4 text-xs leading-relaxed text-slate-400">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-accent-500 mr-2.5 mt-0.5 flex-shrink-0" />
                <span>
                  Block I, 5/1049, West,<br />
                  Aishwarya Colony, Thangam Colony,<br />
                  Anna Nagar, Chennai, Tamil Nadu 600040
                </span>
              </div>
              <div className="p-4 bg-navy-900/60 rounded-xl border border-navy-800 space-y-2">
                <span className="font-bold text-white block">Immediate Engineering Inquiry</span>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Connect with software architects directly for custom technical evaluation.
                </p>
                <a
                  href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'd%20like%20to%20discuss%20custom%20software%20%2F%20ERP%20development."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
                  className="inline-flex items-center text-accent-400 hover:text-accent-300 font-bold text-xs pt-1 group"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-1.5" size={16} />
                  WhatsApp Direct Line
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} RexonSoftTech. All rights reserved. Headquartered in Chennai, India.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
            <a href="/.well-known/security.txt" className="hover:text-slate-400 transition-colors">
              security.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
