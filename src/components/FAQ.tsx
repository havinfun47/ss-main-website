"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What results can I expect in the first 60 days?",
    a: "We contractually guarantee $50k–$500k per month in email revenue within 60 days. During onboarding, we audit your current setup, implement high-converting flows, and launch optimized campaigns targeting your existing subscriber base.",
  },
  {
    q: "What platforms do you work with?",
    a: "We specialize in Klaviyo, the industry-leading email marketing platform for eCommerce. We can also work with other platforms depending on your existing setup.",
  },
  {
    q: "Do I need a large email list to get started?",
    a: "No. List growth is our first step—we turn your existing traffic into subscribers with high-converting opt-in forms. Even a small list can generate significant revenue when managed correctly.",
  },
  {
    q: "How is Scale Science different from other agencies?",
    a: "We're founded by former eCommerce merchants who scaled to $500K/month themselves. We don't outsource, we communicate proactively, and we back our work with a contractual revenue guarantee.",
  },
  {
    q: "What types of brands do you work with?",
    a: "We work with 7-8 figure eCommerce brands across a wide range of verticals including fashion, accessories, supplements, home goods, and more.",
  },
  {
    q: "How does the strategy call work?",
    a: "Book a free 30-minute strategy call. We'll audit your current email program, identify gaps and opportunities, and outline exactly what we'd build for your brand.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6" id="faqs">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Common questions answered.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-card transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-primary font-medium pr-4">{faq.q}</span>
                <span
                  className={`text-secondary shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                <div className="px-6 pb-6 text-secondary text-sm leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
