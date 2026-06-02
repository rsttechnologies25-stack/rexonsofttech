"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Award, Briefcase, Cpu, Shield, Globe, Terminal, Smartphone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav-light py-3 shadow-md"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 bg-white flex items-center justify-center shadow-md">
              <Image src="/logo.png" alt="RexonSoftTech Logo" width={40} height={40} className="object-cover" />
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-navy-900" : "text-white"}`}>
                RexonSoftTech
              </span>
              <p className={`text-[10px] tracking-widest font-semibold uppercase leading-none ${isScrolled ? "text-accent-500" : "text-blue-300"}`}>
                Software Development
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled ? "text-slate-text hover:bg-slate-100" : "text-white/90 hover:bg-white/10"
                }`}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute left-0 mt-2 w-[520px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 gap-4 animate-fade-in">
                  <div>
                    <h4 className="text-xs font-bold text-accent-500 uppercase tracking-widest mb-3">Enterprise Systems</h4>
                    <div className="space-y-3">
                      <div className="flex items-start cursor-pointer hover:bg-slate-50 p-2 rounded-lg" onClick={() => scrollToSection("erp-solutions")}>
                        <Cpu className="w-5 h-5 text-navy-800 mr-3 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-navy-900">Enterprise ERP</p>
                          <p className="text-[10px] text-muted-text">Custom & steel solutions</p>
                        </div>
                      </div>
                      <div className="flex items-start cursor-pointer hover:bg-slate-50 p-2 rounded-lg" onClick={() => scrollToSection("services")}>
                        <Terminal className="w-5 h-5 text-navy-800 mr-3 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-navy-900">Custom Software</p>
                          <p className="text-[10px] text-muted-text">Tailored business automation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-accent-500 uppercase tracking-widest mb-3">Digital Platforms</h4>
                    <div className="space-y-3">
                      <div className="flex items-start cursor-pointer hover:bg-slate-50 p-2 rounded-lg" onClick={() => scrollToSection("services")}>
                        <Globe className="w-5 h-5 text-navy-800 mr-3 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-navy-900">Web Platforms</p>
                          <p className="text-[10px] text-muted-text">Portals & e-commerce applications</p>
                        </div>
                      </div>
                      <div className="flex items-start cursor-pointer hover:bg-slate-50 p-2 rounded-lg" onClick={() => scrollToSection("services")}>
                        <Smartphone className="w-5 h-5 text-navy-800 mr-3 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-navy-900">Mobile Applications</p>
                          <p className="text-[10px] text-muted-text">Hybrid iOS & Android systems</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ERP Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("erp")}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled ? "text-slate-text hover:bg-slate-100" : "text-white/90 hover:bg-white/10"
                }`}
              >
                ERP Solutions <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {activeDropdown === "erp" && (
                <div className="absolute left-0 mt-2 w-[280px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 space-y-2 animate-fade-in">
                  <div
                    onClick={() => scrollToSection("erp-solutions")}
                    className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer flex items-center"
                  >
                    <div className="w-8 h-8 rounded bg-blue-50 text-accent-500 flex items-center justify-center mr-3">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy-900">Custom ERP Solutions</p>
                    </div>
                  </div>
                  <div
                    onClick={() => scrollToSection("erp-solutions")}
                    className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer flex items-center"
                  >
                    <div className="w-8 h-8 rounded bg-blue-50 text-accent-500 flex items-center justify-center mr-3">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy-900">Steel Fabrication ERP</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("industries")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isScrolled ? "text-slate-text hover:bg-slate-100" : "text-white/90 hover:bg-white/10"
              }`}
            >
              Industries
            </button>

            <button
              onClick={() => scrollToSection("portfolio")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isScrolled ? "text-slate-text hover:bg-slate-100" : "text-white/90 hover:bg-white/10"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isScrolled ? "text-slate-text hover:bg-slate-100" : "text-white/90 hover:bg-white/10"
              }`}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("process")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isScrolled ? "text-slate-text hover:bg-slate-100" : "text-white/90 hover:bg-white/10"
              }`}
            >
              Careers
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isScrolled ? "text-slate-text hover:bg-slate-100" : "text-white/90 hover:bg-white/10"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Book Consultation Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md shadow-accent-500/10 hover:shadow-lg hover:shadow-accent-500/20 active:scale-95 ${
                isScrolled
                  ? "bg-accent-500 text-white hover:bg-accent-600"
                  : "bg-white text-navy-900 hover:bg-slate-100"
              }`}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-navy-900 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-b border-navy-800 text-white px-4 pt-4 pb-8 space-y-3">
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold hover:bg-navy-800"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("erp-solutions")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold hover:bg-navy-800 animate-slide-in"
          >
            ERP Solutions
          </button>
          <button
            onClick={() => scrollToSection("industries")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold hover:bg-navy-800"
          >
            Industries
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold hover:bg-navy-800"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold hover:bg-navy-800"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold hover:bg-navy-800"
          >
            Careers
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold hover:bg-navy-800"
          >
            Contact
          </button>
          <div className="pt-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg text-center font-bold"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
