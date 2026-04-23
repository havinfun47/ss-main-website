import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const CTA_HREF = "https://connect.scalescientist.com/";

export const metadata: Metadata = {
  title: "$0 → $122K in 60 days — E-Commerce Funnel Case Study · Scale Science",
  description:
    "Full breakdown of the exact ad account, creative, and landing page that took a kitchen appliance brand from $0 to $122K in 60 days. Built for funded DTC brands spending $20K+/month on Meta.",
  robots: { index: false, follow: false },
};

const results = [
  {
    id: "01",
    title: "40% less spend. 89% more revenue.",
    industry: "Sepura Home \u00B7 Garbage Disposal Alternative",
    description:
      "Sepura Home was priced at 2\u00D7 the market leader. Their previous agency was delivering a 1.03 ROAS and 97% MER. We rebuilt the entire funnel \u2014 messaging, audiences, landing pages. Turned it around in 60 days.",
    bullets: [
      "ROAS: 1.03 \u2192 3.44 in 60 days (+234%)",
      "nCPA: $529 \u2192 $152 (\u221271%)",
      "Year-end: 60% less spend, 10% more revenue",
    ],
    stats: [
      { label: "ROAS Improvement", value: "+234%" },
      { label: "Cost Per Acquisition", value: "\u221271%" },
    ],
    image: "/images/case-01.jpeg",
    featured: false,
  },
  {
    id: "02",
    title: "+1,076% Meta revenue in 90 days.",
    industry: "myco:soul \u00B7 Mushroom Coffee",
    description:
      "A saturated mushroom coffee market with acquisition costs that blocked profitability. We built a four-stage funnel \u2014 educational advertorials through to strategic retargeting \u2014 unlocking explosive, sustainable scale.",
    bullets: [
      "Meta attributed revenue +1,076%",
      "Cost per purchase \u221266%",
      "Ad spend scaled +510%",
    ],
    stats: [
      { label: "Meta Revenue", value: "+1,076%" },
      { label: "ROAS Improvement", value: "+583%" },
    ],
    image: "/images/case-02.jpeg",
    featured: false,
  },
  {
    id: "03",
    title: "+433% ad budget. Target ROAS held.",
    industry: "Health & Wellness Brand",
    description:
      "Every time this brand tried to scale, ROAS collapsed. We rebuilt the funnel, re-segmented audiences, and produced fresh creative that held efficiency as we tripled their monthly ad investment in under 3 months.",
    bullets: [
      "Monthly spend: $10K \u2192 $36K",
      "Target ROAS maintained throughout",
      "Full ramp in under 3 months",
    ],
    stats: [
      { label: "Spend Increase", value: "+433%" },
      { label: "Timeline", value: "90 Days" },
    ],
    image: "/images/case-03.jpeg",
    featured: false,
  },
  {
    id: "04",
    title: "$0 \u2192 $122K revenue in 60 days.",
    industry: "Kitchen Appliance Brand",
    description:
      "No existing Meta presence. We built the full funnel from scratch \u2014 research, creative, audiences, landing pages \u2014 and delivered $122K in revenue at a 3.17 ROAS within the first 60 days.",
    bullets: [
      "$0 to $122K in attributed revenue",
      "3.17 ROAS from day one",
      "Full funnel live in under 2 weeks",
    ],
    stats: [
      { label: "Revenue", value: "$122K" },
      { label: "ROAS", value: "3.17\u00D7" },
    ],
    image: "/images/case-04.jpeg",
    featured: true,
  },
];

type ServiceIcon = "star" | "chart" | "play" | "grid" | "page";

const services: { n: string; title: string; body: string; icon: ServiceIcon }[] = [
  {
    n: "01",
    title: "Creative Strategy",
    body: "Angle research, scripting, hook engineering. Every ad tied to a testable hypothesis.",
    icon: "star",
  },
  {
    n: "02",
    title: "Meta Ads Management",
    body: "Senior buyers running account structure, bidding, scaling, and retargeting \u2014 no juniors.",
    icon: "chart",
  },
  {
    n: "03",
    title: "Video Editing",
    body: "Performance-trained editors turning UGC, b-roll, and stock into ads built to convert.",
    icon: "play",
  },
  {
    n: "04",
    title: "Static Ads",
    body: "Design-led statics tested against scroll-stopping benchmarks. Variations by hook and offer.",
    icon: "grid",
  },
  {
    n: "05",
    title: "Landing Pages",
    body: "Funnel optimization \u2014 purpose-built LPs that match ad-to-page intent. Tested every two weeks.",
    icon: "page",
  },
];

function ServiceIconSvg({ icon }: { icon: ServiceIcon }) {
  const stroke = "#2D5C3F";
  switch (icon) {
    case "star":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z"
            stroke={stroke}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 16L7 10L10 13L17 5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 5H17V9" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "play":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke={stroke} strokeWidth="1.4" />
          <path d="M8.5 7.5L12.5 10L8.5 12.5V7.5Z" fill={stroke} />
        </svg>
      );
    case "grid":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="3" width="14" height="14" rx="1.5" stroke={stroke} strokeWidth="1.4" />
          <path d="M6 10H14M10 6V14" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "page":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2.5" y="3" width="15" height="14" rx="1.5" stroke={stroke} strokeWidth="1.4" />
          <path d="M2.5 7H17.5" stroke={stroke} strokeWidth="1.4" />
          <path d="M6 11H10M6 13H12" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
  }
}

const comparisonOther = [
  "Outsourced to junior account managers",
  "Meta ads only \u2014 blind to the funnel",
  "Run ads with zero product or avatar research",
  "Stacked roster \u2014 you\u2019re one of 30+ clients",
];

const comparisonUs = [
  "Senior media buyers lead strategy",
  "Full-funnel strategy \u2014 ads, creative, and landing pages",
  "Deep product + avatar research ads run",
  "Complete focus on a handful of clients at a time",
];

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-bg text-primary">
      {/* Hero */}
      <section className="pt-16 md:pt-28 pb-12 md:pb-16 px-6">
        <div className="max-w-[1216px] mx-auto flex flex-col items-center text-center gap-8 md:gap-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ border: "1px solid #E0DDD6", backgroundColor: "#FFFFFF" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span
              className="text-[11px] font-semibold uppercase text-secondary"
              style={{ letterSpacing: "0.14em" }}
            >
              Full case study · Watch now
            </span>
          </div>

          <h1
            className="tracking-tight leading-[1.08] text-primary font-medium max-w-5xl"
            style={{ fontSize: "clamp(34px, 6vw, 80px)", textWrap: "balance" }}
          >
            <em className="font-serif italic text-accent font-normal">$0 to $122K</em>
            <span> in 60 days E&#8209;Commerce Funnel</span>
          </h1>

          <p className="text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
            Watch the full breakdown of the exact ad account structure, creative angles, landing page, and testing cadence that got us there. Built for funded DTC brands spending $20K+/month on Meta and ready to scale past the plateau.
          </p>

          <div className="w-full">
            <VideoPlayer
              src={`${BASE}/videos/122k-Case-Study.mp4`}
              poster={`${BASE}/images/case-study-thumbnail.png`}
            />
          </div>

          <div className="flex flex-col items-center gap-3 w-full sm:w-auto max-w-sm">
            <Link
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded text-sm font-semibold hover:bg-accent/90 transition-colors w-full"
            >
              Book a call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-1.5 w-full"
              style={{ backgroundColor: "#FEF3C7", border: "1px solid #FDE68A" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
              <span className="text-amber-700 text-xs font-semibold">
                2 client slots remaining for Q2 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              The Results
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary max-w-3xl"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              Brands we&rsquo;ve scaled{" "}
              <em className="font-serif italic text-accent font-normal">profitably.</em>
            </h2>
            <p className="text-secondary max-w-xl leading-relaxed">
              Real numbers from real client accounts &mdash; not cherry-picked screenshots from a course.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {results.map((c) => (
              <div
                key={c.id}
                className="rounded-xl overflow-hidden flex flex-col relative"
                style={{ backgroundColor: "#1C1C1A" }}
              >
                {c.featured && (
                  <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg"
                    style={{ backgroundColor: "rgba(45,92,63,0.95)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                    <span className="text-white text-xs font-semibold">Featured above</span>
                  </div>
                )}

                <Image
                  src={`${BASE}${c.image}`}
                  alt={c.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto block"
                />

                <div className="flex flex-col gap-4 p-6 md:p-7 flex-1">
                  <div>
                    <p className="text-xs font-semibold mb-1.5" style={{ color: "#4A7C5E", letterSpacing: "0.06em" }}>{c.industry}</p>
                    <h3 className="font-serif text-lg md:text-xl font-normal leading-snug" style={{ color: "#F5F3EE" }}>
                      {c.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: "#6B6860" }}>{c.description}</p>

                  <div>
                    <p className="text-xs uppercase tracking-widest mb-2.5 font-semibold" style={{ color: "#4A4A46", letterSpacing: "0.1em" }}>
                      After Scale Science:
                    </p>
                    <ul className="space-y-1.5">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#9A9690" }}>
                          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 border-t" style={{ borderColor: "rgba(245,243,238,0.06)" }}>
                  {c.stats.map((s, i) => (
                    <div
                      key={s.label}
                      className={`px-6 md:px-7 py-5 ${i === 0 ? "border-r" : ""}`}
                      style={{ borderColor: "rgba(245,243,238,0.06)" }}
                    >
                      <p className="font-serif text-2xl font-normal" style={{ color: "#F5F3EE" }}>{s.value}</p>
                      <p className="text-xs mt-1 font-medium" style={{ color: "#4A4A46" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="px-6 md:px-7 py-5 border-t" style={{ borderColor: "rgba(245,243,238,0.06)" }}>
                  <Link
                    href={CTA_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded text-sm font-semibold transition-colors"
                    style={{ backgroundColor: "#2D5C3F", color: "#F5F3EE" }}
                  >
                    Get results like this &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-20 md:py-24 px-6"
        style={{ backgroundColor: "#EDE9E0", borderTop: "1px solid #E0DDD6", borderBottom: "1px solid #E0DDD6" }}
      >
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              What we do
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary max-w-3xl"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              The full{" "}
              <em className="font-serif italic text-accent font-normal">growth stack.</em>
            </h2>
            <p className="text-secondary max-w-xl leading-relaxed">
              Five services, one accountable team. No handoffs between 3 agencies, no finger-pointing when numbers slip. We take full accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {services.map((s, i) => {
              const bottomRow = i >= 3;
              const colClass = bottomRow
                ? i === 3
                  ? "md:col-span-2 md:col-start-2"
                  : "md:col-span-2 md:col-start-4"
                : "md:col-span-2";
              return (
                <div
                  key={s.title}
                  className={`${colClass} rounded-md p-8 flex flex-col gap-6`}
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
                    >
                      <ServiceIconSvg icon={s.icon} />
                    </div>
                    <span
                      className="font-serif italic text-lg"
                      style={{ color: "#9A9690" }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-primary leading-snug">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-secondary">{s.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              How we&rsquo;re different
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.06] text-primary max-w-3xl"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              Most agencies sell{" "}
              <em className="font-serif italic font-normal" style={{ color: "#9A9690" }}>
                reports.
              </em>{" "}
              We sell{" "}
              <em className="font-serif italic text-accent font-normal">outcomes.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Other Agencies */}
            <div className="flex flex-col gap-6">
              <p
                className="font-serif italic text-3xl md:text-4xl text-center"
                style={{ color: "#9A9690" }}
              >
                Other Agencies
              </p>
              <div
                className="rounded-[20px] p-7 md:p-11 flex flex-col gap-5 flex-1"
                style={{
                  backgroundColor: "#EDE9E0",
                  border: "1px solid #E0DDD6",
                }}
              >
                {comparisonOther.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-0.5 w-[22px] h-[22px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 2l6 6M8 2l-6 6" stroke="#9A9690" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <p className="text-base leading-snug text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scale Science */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center h-10 md:h-12">
                <Image
                  src={`${BASE}/images/scale-science-logo.png`}
                  alt="Scale Science"
                  width={200}
                  height={48}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
              <div
                className="rounded-[20px] p-7 md:p-11 flex flex-col gap-5 flex-1 relative overflow-hidden"
                style={{
                  backgroundColor: "#1C1C1A",
                  border: "1px solid #2D5C3F",
                }}
              >
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: "-80px",
                    right: "-80px",
                    width: "320px",
                    height: "320px",
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle, rgba(45,92,63,0.65) 0%, rgba(45,92,63,0) 70%)",
                  }}
                />
                {comparisonUs.map((item) => (
                  <div key={item} className="flex items-start gap-3 relative">
                    <span
                      className="shrink-0 mt-0.5 w-[22px] h-[22px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#2D5C3F" }}
                    >
                      <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
                        <path d="M1.5 4.5l2.5 2.5L9 1.5" stroke="#F5F3EE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-base leading-snug" style={{ color: "#F5F3EE" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 md:py-24 px-6"
        style={{ backgroundColor: "#1C1C1A" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <p
            className="text-[11px] font-semibold uppercase"
            style={{ color: "#9CC7A9", letterSpacing: "0.14em" }}
          >
            Ready to scale
          </p>
          <h2
            className="font-medium tracking-tight leading-[1.06]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#F5F3EE" }}
          >
            Ready to scale{" "}
            <em className="font-serif italic font-normal" style={{ color: "#5C8F6E" }}>
              profitably?
            </em>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: "rgba(245,243,238,0.7)" }}
          >
            Book a 30-minute strategy call. We&rsquo;ll audit your ad account, identify where revenue is leaking, and tell you if we can help.
          </p>
          <Link
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Book a strategy call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              backgroundColor: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            <span className="text-amber-400 text-xs font-semibold">
              2 client slots remaining for Q2 2026
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
