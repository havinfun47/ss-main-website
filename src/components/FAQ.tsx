"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What results can I realistically expect?",
    a: "Results vary by brand, budget, and starting point — but our case studies give you a realistic picture. New brands can expect a profitable funnel live within 2 weeks. Established brands typically see meaningful ROAS improvement and CPA reduction within the first 30 days. We're designed to produce results in 60 days or less.",
  },
  {
    q: "What platforms do you run ads on?",
    a: "Our core expertise is Meta — Facebook and Instagram. We go deep on one channel rather than spreading thin across five. If you're looking for Google, TikTok, or Pinterest management, we're not the right fit.",
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
    <section className="py-24 px-6 bg-bg-card" id="faqs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">

          {/* Sticky heading */}
          <div className="md:w-72 flex-shrink-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4" style={{ letterSpacing: "0.14em" }}>
              FAQs
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary font-normal">
              Questions we get <em className="italic text-accent">all the time.</em>
            </h2>
          </div>

          {/* FAQ list */}
          <div className="flex-1">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-b border-border ${i === 0 ? "border-t" : ""}`}>
                <button
                  className="w-full flex items-center justify-between py-6 text-left gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-serif text-lg font-normal text-primary leading-snug">{faq.q}</span>
                  <span
                    className={`text-accent shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="pb-6 text-secondary text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
