"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Security (MSS)", href: "/services/managed-security-services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" }
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      const el = document.getElementById("contact");
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

  const isDarkNav = !isScrolled && (pathname === "/" || pathname === "/services" || pathname === "/about" || pathname === "/blog" || pathname === "/careers");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFF3E6]/95 backdrop-blur-md py-3 shadow-md border-b border-[#EAD8C7]"
          : "bg-[#381932]/90 backdrop-blur-md py-4 border-b border-[#FFF3E6]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 rounded-xl overflow-hidden mr-3 bg-white flex items-center justify-center shadow-md border border-slate-100 p-0.5">
              <Image src="/rst_logo.png" alt="RexonSoftTech Logo" width={40} height={40} className="object-contain w-full h-full" priority />
            </div>
            <div className="text-left">
              <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-[#381932]" : "text-[#FFF3E6]"}`}>
                RexonSoftTech
              </span>
              <p className={`text-[10px] tracking-widest font-semibold uppercase leading-none ${isScrolled ? "text-[#8C2969]" : "text-[#D8B094]"}`}>
                Software Development
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isScrolled
                      ? active
                        ? "text-[#381932] bg-[#381932]/10 font-bold"
                        : "text-[#5D4356] hover:text-[#381932] hover:bg-[#FAF0E4]"
                      : active
                      ? "text-[#FFF3E6] bg-white/20 shadow-sm font-bold"
                      : "text-[#EAD8C7] hover:text-[#FFF3E6] hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={scrollToContact}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                isScrolled
                  ? "text-[#5D4356] hover:text-[#381932] hover:bg-[#FAF0E4]"
                  : "text-[#EAD8C7] hover:text-[#FFF3E6] hover:bg-white/10"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={scrollToContact}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-md active:scale-95 cursor-pointer ${
                isScrolled
                  ? "bg-[#381932] hover:bg-[#2C1327] text-[#FFF3E6] shadow-black/20"
                  : "bg-[#FFF3E6] text-[#381932] hover:bg-[#F7EAE0] shadow-black/20"
              }`}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? "text-[#381932] hover:bg-[#FAF0E4]" : "text-[#FFF3E6] hover:bg-white/10"}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#381932] border-b border-[#FFF3E6]/10 text-[#FFF3E6] px-5 pt-4 pb-8 space-y-2 text-left animate-fade-in shadow-2xl">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  active ? "bg-accent-500 text-white font-bold" : "text-slate-300 hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <button
            onClick={scrollToContact}
            className="block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:bg-white/10 cursor-pointer"
          >
            Contact
          </button>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={scrollToContact}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3.5 rounded-xl text-center font-bold text-sm shadow-lg shadow-accent-500/25"
            >
              Book a Consultation
            </button>
            <a
              href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I'd%20like%20to%20inquire%20about%20your%20software%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 rounded-xl font-bold text-sm"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
