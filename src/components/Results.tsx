import Link from "next/link";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
    image: "/images/case-01.jpeg",
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
    image: "/images/case-02.jpeg",
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
    image: "/images/case-03.jpeg",
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
    image: "/images/case-04.jpeg",
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
            <div
              key={c.id}
              className="rounded-xl overflow-hidden flex flex-col"
              style={{ backgroundColor: "#0F172A" }}
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={`${BASE}${c.image}`}
                  alt={c.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto block"
                />
                {/* Case number badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-sm"
                    style={{ backgroundColor: "rgba(15,23,42,0.75)", color: "#94A3B8", letterSpacing: "0.08em" }}
                  >
                    Case Study #{c.id}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-7 flex-1">
                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-tight" style={{ color: "#F1F5F9" }}>
                    {c.title}
                  </h3>
                  <p className="text-xs mt-1 font-medium" style={{ color: "#475569" }}>{c.industry}</p>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{c.description}</p>

                <div>
                  <p className="text-xs uppercase tracking-widest mb-2.5 font-semibold" style={{ color: "#475569", letterSpacing: "0.1em" }}>
                    After Scale Science:
                  </p>
                  <ul className="space-y-1.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5" style={{ color: "#2563EB" }}>
                          <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                {c.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`px-7 py-5 ${i === 0 ? "border-r" : ""}`}
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <p className="text-2xl font-bold tracking-tight" style={{ color: "#F1F5F9" }}>{s.value}</p>
                    <p className="text-xs mt-1 font-medium" style={{ color: "#475569" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-7 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <Link
                  href="#contact"
                  className="text-sm font-semibold transition-colors"
                  style={{ color: "#2563EB" }}
                >
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
