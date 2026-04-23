import type { Metadata } from "next";
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

type ResultCard = {
  brand: string;
  category: string;
  metric: string;
  metricLabel: string;
  description: string;
  featured?: boolean;
};

const results: ResultCard[] = [
  {
    brand: "Sepura Home",
    category: "Garbage Disposal",
    metric: "+234%",
    metricLabel: "ROAS Improvement",
    description:
      "Rebuilt funnel messaging and audiences from the ground up. Moved blended ROAS from 1.03 \u2192 3.44 in 60 days.",
  },
  {
    brand: "myco:soul",
    category: "Mushroom Coffee",
    metric: "+1,076%",
    metricLabel: "Meta Revenue",
    description:
      "Built a four-stage funnel around their avatar. Meta revenue up 10x, cost per purchase down 66%.",
  },
  {
    brand: "Health & Wellness Brand",
    category: "Supplements",
    metric: "+433%",
    metricLabel: "Profitable Ad Spend",
    description:
      "Scaled from $10K \u2192 $36K in monthly Meta spend while holding target ROAS. Hit the quarterly plan by month two.",
  },
  {
    brand: "Kitchen Appliance Brand",
    category: "Featured above",
    metric: "$122K",
    metricLabel: "Monthly Revenue \u00B7 60 Days",
    description:
      "Built the full funnel from scratch \u2014 ad account, creative, landing page, offer. 3.17 blended ROAS in 60 days, from $0 baseline.",
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
      <section className="pt-20 md:pt-28 pb-14 md:pb-16 px-6">
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
            className="tracking-tight leading-[1.06] text-primary font-medium max-w-5xl"
            style={{ fontSize: "clamp(44px, 7vw, 80px)" }}
          >
            <em className="font-serif italic text-accent font-normal">$0 &rarr; $122K</em>
            <span> in 60 days</span>
            <br />
            E-Commerce Funnel
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
      <section className="py-20 md:py-24 px-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {results.map((r) => {
              const dark = !!r.featured;
              return (
                <div
                  key={r.brand}
                  className="rounded-md flex flex-col gap-6 p-9 relative"
                  style={{
                    backgroundColor: dark ? "#1C1C1A" : "#FFFFFF",
                    border: `1px solid ${dark ? "#2D5C3F" : "#E0DDD6"}`,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className="font-serif italic leading-tight"
                      style={{
                        fontSize: "clamp(22px, 2.2vw, 28px)",
                        color: dark ? "#F5F3EE" : "#1C1C1A",
                      }}
                    >
                      {r.brand}
                    </h3>
                    {!dark && (
                      <span
                        className="inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase"
                        style={{
                          backgroundColor: "#EDE9E0",
                          color: "#6B6860",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {r.category}
                      </span>
                    )}
                    {dark && (
                      <span
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase"
                        style={{
                          backgroundColor: "rgba(45,92,63,0.25)",
                          color: "#9CC7A9",
                          border: "1px solid rgba(45,92,63,0.5)",
                          letterSpacing: "0.1em",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "#5C8F6E" }}
                        />
                        Featured above
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <p
                      className="font-serif italic leading-none"
                      style={{
                        fontSize: "clamp(56px, 6.5vw, 80px)",
                        color: dark ? "#F5F3EE" : "#2D5C3F",
                      }}
                    >
                      {r.metric}
                    </p>
                    <p
                      className="text-[11px] font-semibold uppercase"
                      style={{
                        color: dark ? "rgba(245,243,238,0.5)" : "#9A9690",
                        letterSpacing: "0.14em",
                      }}
                    >
                      {r.metricLabel}
                    </p>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: dark ? "rgba(245,243,238,0.7)" : "#6B6860" }}
                  >
                    {r.description}
                  </p>
                </div>
              );
            })}
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
      <section className="py-20 md:py-24 px-6">
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
              </em>
              <br />
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
                className="rounded-[20px] p-11 flex flex-col gap-5 flex-1"
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
              <p className="font-serif italic text-3xl md:text-4xl text-center text-primary">
                SCALE SCIENCE.
              </p>
              <div
                className="rounded-[20px] p-11 flex flex-col gap-5 flex-1 relative overflow-hidden"
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
