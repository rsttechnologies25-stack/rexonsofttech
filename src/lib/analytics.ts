// Lightweight GA4 event tracking utility
// Does NOT collect or transmit any personally identifiable information (PII)

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set" | "js",
      targetIdOrAction: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
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
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, params);
    } catch {
      // Fail silently if tracking blocked by browser ad blocker
    }
  }
}
