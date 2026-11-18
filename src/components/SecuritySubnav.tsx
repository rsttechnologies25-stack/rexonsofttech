"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Shield, 
  Activity, 
  Terminal, 
  Laptop, 
  Network, 
  AlertCircle, 
  Flame, 
  Cloud, 
  FileCheck, 
  FileText 
} from "lucide-react";

export default function SecuritySubnav() {
  const pathname = usePathname();

  const securityLinks = [
    { name: "MSS Overview", href: "/services/managed-security-services", icon: Shield },
    { name: "Managed SOC", href: "/services/managed-soc", icon: Activity },
    { name: "SIEM Management", href: "/services/siem-management", icon: Terminal },
    { name: "Endpoint Security", href: "/services/endpoint-security", icon: Laptop },
    { name: "Network Security", href: "/services/network-security", icon: Network },
    { name: "Vulnerability Mgmt", href: "/services/vulnerability-management", icon: AlertCircle },
    { name: "Incident Response", href: "/services/incident-response", icon: Flame },
    { name: "Cloud Security", href: "/services/cloud-security", icon: Cloud },
    { name: "VAPT Audits", href: "/services/vapt", icon: FileCheck },
    { name: "Compliance & Audits", href: "/services/security-compliance", icon: FileText },
  ];

  return (
    <div className="bg-[#1E101D] border-y border-white/10 sticky top-16 sm:top-20 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none text-xs">
          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400/90 whitespace-nowrap mr-2 hidden md:inline-flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-1.5 animate-pulse"></span>
            MSS Division:
          </span>
          {securityLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500 text-white font-bold shadow-sm shadow-orange-500/30"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 mr-1.5 ${isActive ? "text-white" : "text-orange-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
