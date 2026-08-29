"use client";

import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const whatsappNumber = "917871654777";
  const defaultMessage = encodeURIComponent(
    "Hi RexonSoftTech, I would like to inquire about custom software / ERP development for my business."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover / desktop */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center mr-3 bg-white text-navy-900 text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-ping" />
        Chat on WhatsApp
      </a>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <WhatsAppIcon className="w-7 h-7 relative z-10 text-white" size={28} />
      </a>
    </div>
  );
}
