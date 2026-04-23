import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import VideoPlayer from "./VideoPlayer";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const CTA_HREF = "https://connect.scalescientist.com/";

export const metadata: Metadata = {
  title: "How We Took a Kitchen Appliance Brand From $0 → $122K in 60 Days — Scale Science",
  description:
    "The full funnel teardown for founders and operators spending $20K+/month on Meta. Watch the ad account, creative strategy, and landing page that drove 3.17 ROAS from day one.",
  robots: { index: false, follow: false },
};

const cases = [
  {
    id: "04",
    featured: true,
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
  {
    id: "01",
    featured: false,
    title: "40% less spend. 89% more revenue.",
    industry: "Sepura Home · Garbage Disposal Alternative",
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
    featured: false,
    title: "+1,076% Meta revenue in 90 days.",
    industry: "myco:soul · Mushroom Coffee",
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
    featured: false,
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
];

const services = [
  {
    title: "Creative Strategy",
    body: "Angles, hooks, and concepts rooted in real customer research — not whatever's trending on TikTok this week.",
  },
  {
    title: "Meta Ads Management",
    body: "Senior media buyers running your account. Campaign structure, testing cadence, and scaling built around your P&L.",
  },
  {
    title: "Video Editing",
    body: "UGC, founder-led, and studio-cut video ads edited for the scroll — hook in the first second, retention through the pitch.",
  },
  {
    title: "Static Ads",
    body: "High-contrast, high-clarity statics designed to win the feed. Iterated weekly off live performance data.",
  },
  {
    title: "Landing Pages",
    body: "Advertorials, PDPs, and quiz funnels that convert paid traffic. Built, tested, and optimized in-house — no dev handoff.",
  },
];

const comparisonPoints = [
  {
    them: "Strategy outsourced to a 22-year-old account manager.",
    us: "Senior media buyers own your strategy — end to end.",
  },
  {
    them: "Runs Meta ads and blames the landing page.",
    us: "Full-funnel ownership: ads, creative, and landing pages under one roof.",
  },
  {
    them: "Skips avatar and product research. Copies competitors.",
    us: "Deep product, avatar, and market research before a dollar is spent.",
  },
  {
    them: "100+ clients. You're a line item.",
    us: "A handful of clients at a time. Every account gets senior attention.",
  },
  {
    them: "Vanity ROAS screenshots. No P&L visibility.",
    us: "Reports on contribution margin and blended MER — the numbers that actually matter.",
  },
];

const testimonials = [
  {
    quote:
      "The creative is outstanding and completely on brand. We've seen a noticeable improvement in conversion rates and revenue since working with Scale Science.",
    name: "Andy Theng",
    title: "Co-Founder at Wick of Hope",
  },
  {
    quote:
      "We go to them for everything eCommerce and growth-related. They're proactive, data-driven, and they genuinely understand our customers better than most agencies we've worked with.",
    name: "Mike Trupiano",
    title: "CEO & Founder at The Feel Bar",
  },
  {
    quote:
      "They brought a level of strategic rigor we hadn't seen from any previous agency. Our ROAS and customer acquisition costs are the best they've ever been.",
    name: "Ralph Crescenzo",
    title: "Director of eCommerce & Digital Operations",
  },
];

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-bg text-primary">
      {/* Sticky nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={`${BASE}/images/scale-science-logo.png`}
              alt="Scale Science"
              width={140}
              height={40}
              className="h-7 w-auto"
            />
          </Link>
          <Link
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded text-xs md:text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Book a call
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 border border-border bg-bg-card rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0" />
            <span className="text-secondary text-xs font-medium">
              Case Study · Built for brands spending $20K+/mo on Meta
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl leading-[1.08] tracking-tight text-primary font-normal max-w-4xl">
            How we took a kitchen appliance brand from{" "}
            <em className="text-accent italic">$0 → $122K in 60 days.</em>
          </h1>

          <p className="text-secondary text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            I walk through the exact ad account, creative strategy, and landing page that hit a 3.17 ROAS from day one — with no existing Meta presence. If you&apos;re spending $20K+/month and scale keeps breaking, this is for you.
          </p>

          <div className="flex flex-col items-center gap-3 w-full sm:w-auto max-w-sm">
            <Link
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors w-full"
            >
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="inline-flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
              <span className="text-amber-700 text-xs font-semibold">2 client spots remaining for Q2 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto">
          <VideoPlayer
            src={`${BASE}/videos/122k-Case-Study.mp4`}
            poster={`${BASE}/images/case-04.jpeg`}
          />
          <p className="text-tertiary text-center text-xs mt-4">
            Full teardown · ad account + creative + landing page · approx 18 min
          </p>
        </div>
      </section>

      {/* Qualifier band */}
      <section className="border-y border-border bg-bg-panel py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6 text-center" style={{ letterSpacing: "0.14em" }}>
            Who this is for
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                h: "Funded startups scaling Meta",
                b: "You\u2019ve raised capital and need a growth engine that can deploy it efficiently — not another agency playing it safe with $500/day.",
              },
              {
                h: "Ecom brands doing $20K+/mo ad spend",
                b: "You\u2019ve proven the offer but ROAS flattens every time you try to scale. The ceiling is the funnel, not the ad account.",
              },
              {
                h: "Operators who want the real numbers",
                b: "You don\u2019t want platform ROAS screenshots — you want contribution margin, blended MER, and a partner who reports on the P&L.",
              },
            ].map((item) => (
              <div key={item.h} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0" />
                  <h3 className="font-serif text-lg leading-snug text-primary">{item.h}</h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{item.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
                More Case Studies
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary font-normal tracking-tight">
                Brands we&apos;ve scaled<br className="hidden md:block" /> <em className="text-accent italic">profitably.</em>
              </h2>
            </div>
            <p className="text-secondary max-w-xs leading-relaxed text-sm">
              The Kitchen Appliance teardown above is one of four. Here&apos;s the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {cases.map((c) => (
              <div
                key={c.id}
                className="rounded-xl overflow-hidden flex flex-col relative"
                style={{ backgroundColor: "#1C1C1A" }}
              >
                {c.featured && (
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 bg-accent/95 rounded-full px-3 py-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                    <span className="text-white text-xs font-semibold">Featured in video above</span>
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

                <div className="flex flex-col gap-4 p-7 flex-1">
                  <div>
                    <p className="text-xs font-semibold mb-1.5" style={{ color: "#4A7C5E", letterSpacing: "0.06em" }}>{c.industry}</p>
                    <h3 className="font-serif text-xl font-normal leading-snug" style={{ color: "#F5F3EE" }}>
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
                      className={`px-7 py-5 ${i === 0 ? "border-r" : ""}`}
                      style={{ borderColor: "rgba(245,243,238,0.06)" }}
                    >
                      <p className="font-serif text-2xl font-normal" style={{ color: "#F5F3EE" }}>{s.value}</p>
                      <p className="text-xs mt-1 font-medium" style={{ color: "#4A4A46" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="px-7 py-5 border-t" style={{ borderColor: "rgba(245,243,238,0.06)" }}>
                  <Link
                    href={CTA_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded text-sm font-semibold transition-colors"
                    style={{ backgroundColor: "#2D5C3F", color: "#F5F3EE" }}
                  >
                    Get results like this →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-bg-panel border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
              What we handle
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary font-normal tracking-tight">
              Full-funnel, <em className="text-accent italic">under one roof.</em>
            </h2>
            <p className="text-secondary mt-4 leading-relaxed">
              Most agencies only touch Meta. We own every lever that moves the ROAS — creative, media buying, and the pages your traffic actually lands on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-bg-card border border-border rounded-xl p-7 flex flex-col gap-3"
              >
                <p className="font-serif text-sm text-accent" style={{ letterSpacing: "0.08em" }}>
                  0{i + 1}
                </p>
                <h3 className="font-serif text-2xl leading-snug text-primary font-normal">{s.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
              The difference
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary font-normal tracking-tight max-w-3xl mx-auto">
              Why the results above aren&apos;t <em className="text-accent italic">an accident.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Other agencies */}
            <div className="rounded-xl border border-border bg-bg-card p-8 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-6" style={{ letterSpacing: "0.14em" }}>
                Other agencies
              </p>
              <ul className="flex flex-col gap-4 flex-1">
                {comparisonPoints.map((p) => (
                  <li key={p.them} className="flex items-start gap-3 text-secondary text-sm leading-relaxed">
                    <span className="shrink-0 mt-1 w-4 h-4 rounded-full border border-border flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 1l6 6M7 1l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    {p.them}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scale Science */}
            <div
              className="rounded-xl p-8 flex flex-col relative overflow-hidden"
              style={{ backgroundColor: "#1C1C1A" }}
            >
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
                style={{ background: "#2D5C3F" }}
              />
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6 relative" style={{ letterSpacing: "0.14em", color: "#4A7C5E" }}>
                Scale Science
              </p>
              <ul className="flex flex-col gap-4 flex-1 relative">
                {comparisonPoints.map((p) => (
                  <li key={p.us} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#F5F3EE" }}>
                    <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-accent flex items-center justify-center">
                      <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                        <path d="M1 3.5l2 2 4-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {p.us}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
              Client stories
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary font-normal tracking-tight">
              Don&apos;t take <em className="text-accent italic">our word for it.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-border rounded-xl p-6 bg-bg flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#2D5C3F">
                      <path d="M7 1l1.545 3.09 3.455.5-2.5 2.41.59 3.41L7 8.75l-3.09 1.66.59-3.41L2 4.59l3.455-.5L7 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="text-primary text-sm font-medium">{t.name}</p>
                  <p className="text-tertiary text-xs mt-0.5">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
