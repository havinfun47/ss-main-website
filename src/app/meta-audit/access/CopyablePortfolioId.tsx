"use client";

import { useState } from "react";

const PORTFOLIO_ID = "101492251721646";

export default function CopyablePortfolioId() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — do nothing
    }
  }

  return (
    <div
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 rounded-lg p-3 sm:p-4"
      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
    >
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span
          className="text-[10px] font-semibold uppercase text-tertiary"
          style={{ letterSpacing: "0.14em" }}
        >
          Scale Science portfolio ID
        </span>
        <span className="font-mono text-base md:text-lg text-primary tracking-wide select-all break-all">
          {PORTFOLIO_ID}
        </span>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold transition-colors shrink-0 bg-accent text-white hover:bg-accent/90"
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2 7l4 4 6-8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <rect x="4.5" y="4.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M3 9V3.5C3 2.67 3.67 2 4.5 2H10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            Copy ID
          </>
        )}
      </button>
    </div>
  );
}
