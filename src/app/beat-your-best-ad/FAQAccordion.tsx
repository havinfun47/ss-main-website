"use client";

import { useState } from "react";

type FAQ = { q: string; a: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className={`border-b border-border ${i === 0 ? "border-t" : ""}`}>
          <button
            className="w-full flex items-center justify-between py-6 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-serif text-lg md:text-xl font-normal text-primary leading-snug">
              {faq.q}
            </span>
            <span
              className={`text-accent shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3v10M3 8h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="pb-6 text-secondary text-sm md:text-base leading-relaxed max-w-3xl">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
