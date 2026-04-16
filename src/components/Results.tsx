import Link from "next/link";

const cases = [
  {
    id: "01",
    title: "40% less spend. 89% more revenue.",
    industry: "Sepura Home · Home Appliances",
    description:
      "Sepura Home was priced at 2× the market leader. Their previous agency was delivering a 1.03 ROAS and 97% MER. We rebuilt the entire funnel — messaging, audiences, landing pages. Turned it around in 60 days.",
    bullets: [
      "ROAS: 1.03 → 3.44 in 60 days (+234%)",
      "nCPA: $529 → $152 (−71%)",
      "Year-end: 60% less spend, 10% more revenue",
    ],
    stats: [
      { label: "ROAS Improvement", value: "+234%" },
      { label: "Cost Per Acquisition", value: "−71%" },
    ],
  },
  {
    id: "02",
    title: "+1,076% Meta revenue in 90 days.",
    industry: "myco:soul · Health & Wellness",
    description:
      "A saturated mushroom coffee market with acquisition costs that blocked profitability. We built a four-stage funnel — educational advertorials through to strategic retargeting — unlocking explosive, sustainable scale.",
    bullets: [
      "Meta attributed revenue +1,076%",
      "Cost per purchase −66%",
      "Ad spend scaled +510%",
    ],
    stats: [
      { label: "Meta Revenue", value: "+1,076%" },
      { label: "ROAS Improvement", value: "+583%" },
    ],
  },
  {
    id: "03",
    title: "+433% ad budget. Target ROAS held.",
    industry: "Health & Wellness Brand",
    description:
      "Every time this brand tried to scale, ROAS collapsed. We rebuilt the funnel, re-segmented audiences, and produced fresh creative that held efficiency as we tripled their monthly ad investment in under 3 months.",
    bullets: [
      "Monthly spend: $10K → $36K",
      "Target ROAS maintained throughout",
      "Full ramp in under 3 months",
    ],
    stats: [
      { label: "Spend Increase", value: "+433%" },
      { label: "Timeline", value: "90 Days" },
    ],
  },
  {
    id: "04",
    title: "$0 → $122K revenue in 60 days.",
    industry: "Kitchen Appliance Brand",
    description:
      "No existing Meta presence. We built the full funnel from scratch — research, creative, audiences, landing pages — and delivered $122K in revenue at a 3.17 ROAS within the first 60 days.",
    bullets: [
      "$0 to $122K in attributed revenue",
      "3.17 ROAS from day one",
      "Full funnel live in under 2 weeks",
    ],
    stats: [
      { label: "Revenue", value: "$122K" },
      { label: "ROAS", value: "3.17×" },
    ],
  },
];

export default function Results() {
  return (
    <section className="py-24 px-6 bg-bg-card" id="results">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-2xl text-primary tracking-tight mb-3">
            The results speak for themselves.
          </h2>
          <p className="text-secondary max-w-lg leading-relaxed text-sm">
            Real brands, real numbers — across home goods, health & wellness, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((c) => (
            <div key={c.id} className="border border-border rounded-lg overflow-hidden bg-bg flex flex-col">
              {/* Stats bar — visual hook at the top */}
              <div className="grid grid-cols-2 border-b border-border">
                {c.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`px-6 py-5 ${i === 0 ? "border-r border-border" : ""}`}
                    style={{ backgroundColor: i === 0 ? "#2563EB" : "#1D4ED8" }}
                  >
                    <p className="text-3xl font-bold text-white tracking-tight leading-none">{s.value}</p>
                    <p className="text-xs text-blue-200 mt-1.5 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-7 flex flex-col gap-4 flex-1">
                <div>
                  <span className="text-tertiary text-xs font-mono">Case Study #{c.id} · {c.industry}</span>
                  <h3 className="text-lg font-semibold mt-1.5 text-primary tracking-tight leading-snug">{c.title}</h3>
                </div>

                <p className="text-secondary text-sm leading-relaxed">{c.description}</p>

                <div>
                  <p className="text-xs text-tertiary uppercase tracking-widest mb-2.5 font-medium" style={{ letterSpacing: "0.1em" }}>After Scale Science:</p>
                  <ul className="space-y-1.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-secondary">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-accent mt-0.5">
                          <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="#contact" className="mt-auto pt-4 border-t border-border text-sm text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-1.5">
                  Get results like this →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Book a free strategy call
          </Link>
        </div>
      </div>
    </section>
  );
}
