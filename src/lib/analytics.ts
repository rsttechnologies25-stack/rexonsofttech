// Lightweight GA4 & Meta Pixel event tracking utility
// Does NOT collect or transmit any personally identifiable information (PII)

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set" | "js",
      targetIdOrAction: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
    fbq?: (
      command: "track" | "trackCustom" | "init",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}

export type GAEvent =
  | "whatsapp_click"
  | "phone_click"
  | "lead_form_submit"
  | "contact_form_start"
  | "lead_magnet_download"
  | "case_study_view"
  | "erp_demo_click";

export function trackEvent(
  eventName: GAEvent,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined") return;

  // 1. Google Analytics (GA4)
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, params);
    } catch {
      // Fail silently if tracking blocked by browser ad blocker
    }
  }

  // 2. Meta (Facebook) Pixel
  if (typeof window.fbq === "function") {
    try {
      if (eventName === "lead_form_submit") {
        // Standard Meta 'Lead' event for conversion optimization
        window.fbq("track", "Lead", params);
      } else if (eventName === "whatsapp_click" || eventName === "phone_click") {
        // Standard Meta 'Contact' event for WhatsApp / Phone inquiries
        window.fbq("track", "Contact", params);
      } else if (eventName === "contact_form_start") {
        window.fbq("trackCustom", "ContactFormStart", params);
      } else if (eventName === "lead_magnet_download") {
        window.fbq("trackCustom", "LeadMagnetDownload", params);
      } else {
        window.fbq("trackCustom", eventName, params);
      }
    } catch {
      // Fail silently if tracking blocked
    }
  }
}
