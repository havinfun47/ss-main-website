"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What results can I realistically expect?",
    a: "Our case studies give you the honest picture: ROAS doubling, CPA dropping by half, ad spend scaling 4–5× while efficiency holds. The honest answer, though, is that results depend on your starting account, your product, and your category. The audit call exists so we can give you a specific take on your specific situation.",
  },
  {
    q: "What platforms do you run ads on?",
    a: "Meta only (Facebook and Instagram). We go deep on one channel rather than spreading thin across five. No TikTok, no Google, no Pinterest. If you need help anywhere else, we're not the right fit and we'll say so before the call.",
  },
  {
    q: "What ad budget do I need to get started?",
    a: "$15K+/month on Meta is the gate. Below that, the math doesn't justify a senior-led engagement. You'll get better ROI on a creative subscription or a freelancer at this stage, and we'll tell you that on the call if you're under the threshold.",
  },
  {
    q: "How is Scale Science different from other agencies?",
    a: "Most agencies run on the Junior Handoff: a senior closes the deal, then a junior runs the account alongside 30 other brands. That model only works for the agency, never for the brand. At Scale Science, the senior strategist who pitched you is in your account every week. Creative is built in-house by the same team running the media, not outsourced to a separate vendor whose work doesn't talk to your campaigns. Landing pages are built by the same team using the same conversion data. One team, no handoffs.",
  },
  {
    q: "What types of brands do you work with?",
    a: "DTC ecommerce only. Funded or bootstrapped: the budget matters, not the funding source. At least $20K+/month in revenue and spending $15K+/month on Meta. Across home goods, health & wellness, kitchen appliances, mushroom coffee, and similar high-consideration DTC categories. No service businesses, no B2B SaaS, no info products.",
  },
  {
    q: "How does the strategy call work?",
    a: "Apply through the form below. If you look like a fit, we'll audit your ad account, your landing page, and your funnel on our own time, then walk you through exactly what we'd change on a free 30-minute call. No pitch deck, no live screen-share scrambling to find insights. We do the homework before the call so you get value whether or not we end up working together.",
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
