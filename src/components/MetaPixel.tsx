"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function MetaPixel() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Track PageView on client-side SPA route changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
