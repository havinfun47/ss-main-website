"use client";

import { useState } from "react";

type Props = {
  label: string;
  prompt: string;
};

export default function CopyablePrompt({ label, prompt }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — do nothing
    }
  }

  return (
    <div className="rounded-lg border border-border bg-bg-card overflow-hidden my-5">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-border bg-bg-panel">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent" style={{ letterSpacing: "0.12em" }}>
          {label}
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="4.5" y="4.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" />
                <path d="M3 9V3.5C3 2.67 3.67 2 4.5 2H10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="px-4 py-4 text-sm text-primary font-mono leading-relaxed whitespace-pre-wrap break-words">
{prompt}
      </pre>
    </div>
  );
}
