"use client";

import { useEffect } from "react";

export default function FireLeadEvent() {
  useEffect(() => {
    try {
      const w = window as unknown as { fbq?: (...args: unknown[]) => void };
      if (typeof w.fbq === "function") {
        w.fbq("track", "Lead", { content_name: "Meta Ad Audit — Qualified ($10k+/mo)" });
      }
    } catch {}
  }, []);

  return null;
}
