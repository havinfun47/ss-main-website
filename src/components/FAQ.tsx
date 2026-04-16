"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What results can I realistically expect?",
    a: "Results vary by brand, budget, and starting point — but our case studies give you a realistic picture. New brands can expect a profitable funnel live within 2 weeks. Established brands typically see meaningful ROAS improvement and CPA reduction within the first 30 days. We're designed to produce results in 60 days or less.",
  },
  {
    q: "What platforms do you run ads on?",
    a: "Our core expertise is Meta — Facebook and Instagram. We also coordinate with complementary channels including Google and TikTok where the data supports it.",
  },
  {
    q: "What ad budget do I need to get started?",
    a: "We typically work with brands spending at least $20K/month in ad spend. Our sweet spot is $20K–$100K/month, where our systems create the most leverage. If you're below that threshold, we'll be straightforward on the call about whether we're the right fit.",
  },
  {
    q: "How is Scale Science different from other agencies?",
    a: "We don't use juniors. We don't outsource. We're a boutique shop which means your account gets real senior attention — not a rotating cast of account managers. We communicate proactively, we build custom landing pages as standard, and we own our results.",
  },
  {
    q: "What types of brands do you work with?",
    a: "We work with 6-7 figure eCommerce brands across high-consideration categories: home goods, health & wellness, kitchen, outdoor, supplements, and more. We're selective — we only take on brands we're genuinely confident we can scale.",
  },
  {
    q: "How does the strategy call work?",
    a: "Book a free 30-minute call. We'll review your current ad setup, identify the top opportunities you're missing, and outline exactly what our system would look like for your brand. No pitch decks, no hard sell — just a real conversation about your growth.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-bg" id="faqs">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-primary tracking-tight">
            Common questions, straight answers.
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
