import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Creative Strategy",
    items: [
      "Customer research (pains, motivations, language)",
      "Competitor + content research",
      "Customer avatars + angle map",
      "Monthly content + testing plan",
    ],
    variant: "dark",
  },
  {
    number: "02",
    title: "Video Ads",
    items: [
      "Strategy-backed video briefs",
      "Scripts + shotlists per angle",
      "Full video editing + AI B-roll",
      "Hook, body + CTA variations",
    ],
    variant: "light",
  },
  {
    number: "03",
    title: "Static Ads",
    items: [
      "AI product photography",
      "Graphic design briefs + copy",
      "Designed per angle",
      "Senior graphic designer",
    ],
    variant: "light",
  },
  {
    number: "04",
    title: "Landing Pages",
    items: [
      "Copy + media per section",
      "Built with your brand assets",
      "Shopify dev (staging → live)",
      "Aligned to each ad angle",
    ],
    variant: "light",
  },
  {
    number: "05",
    title: "Meta Ads Management",
    items: [
      "Optimized account structure",
      "Active daily optimization",
      "Ad copy per angle",
      "Publishing + real-time reporting",
    ],
    variant: "accent",
  },
] as const;

export default function Services() {
  return (
    <section className="py-20 px-6 bg-bg" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent" style={{ letterSpacing: "0.14em" }}>
              What&apos;s Included
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-primary font-normal">
              Everything needed<br />
              to go from <em className="italic text-accent">$0 to scale.</em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed md:max-w-xs text-secondary">
            One engagement. Five integrated service pillars. No loose ends, no hand-offs to contractors you&apos;ve never met.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-0.5">
          {services.map((s) => {
            const isDark = s.variant === "dark";
            const isAccent = s.variant === "accent";
            const bg = isAccent ? "#2D5C3F" : isDark ? "#1C1C1A" : "#EDE9E0";
            const titleColor = isDark || isAccent ? "#F5F3EE" : "#1C1C1A";
            const numColor = isAccent ? "rgba(245,243,238,0.5)" : "#2D5C3F";
            const bulletColor = isAccent ? "rgba(245,243,238,0.35)" : "#2D5C3F";
            const textColor = isAccent ? "rgba(245,243,238,0.72)" : "#6B6860";

            return (
              <div
                key={s.number}
                className="flex flex-col gap-5 p-7 rounded-sm"
                style={{ backgroundColor: bg }}
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: numColor, letterSpacing: "0.12em" }}>
                    {s.number}
                  </span>
                  <h3 className="font-serif text-base font-normal leading-snug" style={{ color: titleColor }}>
                    {s.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-xs leading-relaxed shrink-0 mt-0.5" style={{ color: bulletColor }}>—</span>
                      <span className="text-xs leading-relaxed" style={{ color: textColor }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end mt-6 pt-6 border-t border-border">
          <Link
            href="https://calendly.com/graydon-scalescientist/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-bg rounded px-6 py-3 text-xs font-semibold shrink-0 hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Book a free strategy call
            <span className="text-accent">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
