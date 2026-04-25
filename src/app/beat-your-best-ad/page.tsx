import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Editable fields — update these by hand as the offer runs
const STRIPE_HREF = "https://buy.stripe.com/dRm3cudPnaaJ6MS3I03wQ01";
const VIDEO_SRC = "/videos/beat-your-best-ad-overview.mp4";
const WINS = 3;
const LOSSES = 0;
const LAST_UPDATED = "Launch day";
const SPOTS_LEFT = 5;

export const metadata: Metadata = {
  title: "Beat Your Best Meta Ad — Or You Don't Pay | Scale Science",
  description:
    "Send us your best-performing Meta ad. In 5 business days we'll produce a new one designed to beat it. Run both inside one adset for 7 days — if ours doesn't win on spend AND ROAS/CPA, full refund. $147.",
  alternates: { canonical: "https://scalescientist.com/beat-your-best-ad" },
  openGraph: {
    title: "Beat Your Best Meta Ad — Or You Don't Pay",
    description:
      "Send us your best-performing Meta ad. 5 business days. We beat it or you don't pay.",
    url: "https://scalescientist.com/beat-your-best-ad",
    type: "website",
  },
};

const proofScreenshots = [
  {
    file: "ads-proof-01.png",
    alt: "Meta Ads Manager: winning video ad drove 4.26 ROAS on $1,490.74 spend, producing $6,356.83 revenue",
  },
  {
    file: "ads-proof-02.png",
    alt: "Meta Ads Manager: winning static ad drove 5.87 ROAS on $1,033.24 spend, producing $6,066.22 revenue",
  },
  {
    file: "ads-proof-03.png",
    alt: "Meta Ads Manager: winning video ad drove 1.29 ROAS on $4,653.99 spend, producing $5,982.77 revenue",
  },
];

const caseStrip = [
  { brand: "Sepura Home", result: "ROAS 1.03 → 3.44 in 60 days" },
  { brand: "myco:soul", result: "Meta revenue +1,076% in 90 days" },
  { brand: "Health & wellness brand", result: "Scaled spend 4.3×, ROAS held" },
  { brand: "Kitchen appliance brand", result: "$0 → $122K in 60 days at 3.17 ROAS" },
];

const steps = [
  {
    n: "01",
    title: "You send us your winning ad",
    body: "Share the Meta ad that's performing best for you right now. Video or static, any angle. Include the last 30 days of performance data (ROAS, CPA, amount spent).",
  },
  {
    n: "02",
    title: "We research your market",
    body: "Two full days of customer research. Reviews, Reddit, YouTube comments, competitor ads. We find the language your buyers actually use and the angles nobody else is running.",
  },
  {
    n: "03",
    title: "We produce a new video ad",
    body: "Full production. New script. New hook. Edited video using your existing footage and content library. Ready to deploy the moment you upload it.",
  },
  {
    n: "04",
    title: "You test ours against yours",
    body: "Spin up a new adset inside your existing campaign. Publish both ads in it — yours as a fresh post (no Post ID) so both start at zero social proof. Run for 7 days.",
  },
  {
    n: "05",
    title: "We win or you get your money back",
    body: "Our ad has to win on more spend AND better ROAS or CPA. If it doesn't clear both bars in 7 days, screenshot the adset, email me, and I refund 100% — same week.",
  },
];

const deliverables = [
  {
    n: "01",
    title: "Your new Meta ad",
    body: "Fully produced video ad. Hook, body, CTA. Edited and ready to upload — no additional work on your end. 9:16 and 1:1 versions included.",
  },
  {
    n: "02",
    title: "The Customer Avatar Brief",
    body: "Who your buyer actually is — beyond demographics. Psychographics, pain points she'd never write on a survey, the specific triggers that tip her into buying, the voice-of-customer language pulled from reviews and forums. The same brief we build for our retainer clients. Use it for your emails, your landing pages, your organic content. Yours to keep regardless of how the test goes.",
  },
  {
    n: "03",
    title: "The Buyer Belief Chain",
    body: "The six psychological gates every buyer has to pass through — in this order — before they purchase. We map your audience to the chain, name the belief your control was missing, and show you which gate we attacked instead. From here on, every ad you run has a specific job and a specific place in the sequence, not just a hook. The diagnostic tool that separates creative that scales from creative that plateaus.",
  },
];

const faqs = [
  {
    q: "What if my current ad is already crushing it?",
    a: "Good. That means you have a real control to beat, which means if we win, the upside is enormous. If we lose, you get your money back and a full research report on why your winner works — so you can build more like it.",
  },
  {
    q: "What if I'm spending less than $5K/mo on Meta?",
    a: "The challenge still runs, but the 7-day window may produce a small sample at low budgets. We'll flag this before you buy if it looks like the test won't be conclusive.",
  },
  {
    q: "What counts as \"winning\"?",
    a: "Inside the new adset, our ad needs to beat yours on BOTH of the following over 7 days: more total spend allocated by Meta, AND a better ROAS or CPA. If we don't clear both bars, you screenshot the adset, email me, and I refund 100% of your money.",
  },
  {
    q: "Why does my ad have to be published without a Post ID?",
    a: "If you reuse a Post ID, your ad ports over all of its existing likes, comments, and shares — that's social proof our brand-new ad can't match. Publishing yours as a fresh post puts both ads at zero, so we're competing on the creative itself, not on accumulated history.",
  },
  {
    q: "Why does the win require more spend AND better ROAS/CPA — not just one?",
    a: "When two ads run in the same adset, Meta's algorithm pushes more budget toward the one it thinks is performing better. More spend means Meta's own algorithm picked our ad. Better ROAS or CPA means it actually paid off. Requiring both is the strictest version of the test — and the only version that proves our creative is genuinely stronger.",
  },
  {
    q: "Do I need to provide footage?",
    a: "Yes — we work from your existing content library. UGC, product shots, brand b-roll, anything you've shot. The richer the library, the sharper the final ad. If you're light on assets, flag it on the order form and we'll let you know whether there's enough to work with before we charge you.",
  },
  {
    q: "What platforms does this work for?",
    a: "Meta only (Facebook + Instagram). That's what we do. If you want help with TikTok, Google, or anywhere else — not us, and we'll tell you that on the call instead of taking your money.",
  },
  {
    q: "What happens after you beat my ad?",
    a: "Up to you. Some brands want us to scale the winner, produce more variations, and eventually run their whole Meta account. Others take the ad and research and run it themselves. Zero pressure either way.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes. Happy to, before we see anything.",
  },
  {
    q: "What about my data and the ad copy after the challenge?",
    a: "It's yours. We don't share, resell, or reuse client ads, research, or data. Ever.",
  },
  {
    q: "How long until I see results?",
    a: "Ad delivered in 5 business days. Test runs 7 days minimum. So: meaningful performance data inside of 3 weeks from the day you buy.",
  },
  {
    q: "Can I buy multiple challenges?",
    a: "Not in the same month. We cap at a set number of slots per month to protect delivery quality. If you want to work with us at scale, book a strategy call instead — link below.",
  },
];

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrimaryCTA({ className = "" }: { className?: string }) {
  return (
    <Link
      href={STRIPE_HREF}
      className={`inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded text-sm font-semibold hover:bg-accent/90 transition-colors ${className}`}
    >
      Get Your Ad Beat — $147
      <ArrowRight />
    </Link>
  );
}

export default function BeatYourBestAdPage() {
  return (
    <main className="min-h-screen bg-bg text-primary">
      {/* Minimal top bar */}
      <header className="px-6 pt-6 pb-2">
        <div className="max-w-[1216px] mx-auto flex items-center justify-between">
          <Link href="/" className="inline-block">
            <Image
              src={`${BASE}/images/scale-science-logo.png`}
              alt="Scale Science"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-xs md:text-sm font-medium text-secondary hover:text-primary transition-colors"
          >
            Back to main site →
          </Link>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="pt-10 md:pt-20 pb-12 md:pb-16 px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center gap-7 md:gap-9">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ border: "1px solid #E0DDD6", backgroundColor: "#FFFFFF" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span
              className="text-[11px] font-semibold uppercase text-secondary"
              style={{ letterSpacing: "0.14em" }}
            >
              The Beat Your Best Ad Challenge
            </span>
          </div>

          <h1
            className="tracking-tight leading-[1.05] text-primary font-medium max-w-5xl"
            style={{ fontSize: "clamp(36px, 6.2vw, 84px)", textWrap: "balance" }}
          >
            We&rsquo;ll beat your best Meta ad{" "}
            <em className="font-serif italic text-accent font-normal">
              &mdash; or you don&rsquo;t pay.
            </em>
          </h1>

          <p className="text-primary font-semibold text-lg md:text-2xl leading-snug max-w-3xl" style={{ textWrap: "balance" }}>
            100% refund if I lose. 5 business day turnaround.{" "}
            <span className="text-accent">{SPOTS_LEFT} spots left this month.</span>
          </p>
        </div>
      </section>

      {/* 2. Win/Loss Scoreboard */}
      <section className="pb-10 md:pb-14 px-6">
        <div className="max-w-[720px] mx-auto">
          <div
            className="rounded-xl overflow-hidden relative"
            style={{ backgroundColor: "#1C1C1A", border: "1px solid #2D5C3F" }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                top: "-80px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "320px",
                height: "320px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(45,92,63,0.35) 0%, rgba(45,92,63,0) 70%)",
              }}
            />
            <div className="relative px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-5">
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ backgroundColor: "#5C8F6E" }}
                  />
                  <p
                    className="text-[10px] font-semibold uppercase"
                    style={{ color: "#9CC7A9", letterSpacing: "0.14em" }}
                  >
                    Challenge record
                  </p>
                </div>
                <p className="text-xs" style={{ color: "rgba(245,243,238,0.45)" }}>
                  Updated {LAST_UPDATED} · First 10 at $147
                </p>
              </div>

              <div className="flex items-center gap-5 md:gap-7 shrink-0">
                <div className="flex flex-col items-center">
                  <p
                    className="text-[10px] font-semibold uppercase"
                    style={{ color: "rgba(245,243,238,0.4)", letterSpacing: "0.14em" }}
                  >
                    Wins
                  </p>
                  <p
                    className="font-serif font-normal leading-none mt-1"
                    style={{ fontSize: "44px", color: "#5C8F6E" }}
                  >
                    {WINS}
                  </p>
                </div>
                <span
                  className="block w-px h-12"
                  style={{ backgroundColor: "rgba(245,243,238,0.1)" }}
                />
                <div className="flex flex-col items-center">
                  <p
                    className="text-[10px] font-semibold uppercase"
                    style={{ color: "rgba(245,243,238,0.4)", letterSpacing: "0.14em" }}
                  >
                    Losses
                  </p>
                  <p
                    className="font-serif italic font-normal leading-none mt-1"
                    style={{ fontSize: "44px", color: "rgba(245,243,238,0.55)" }}
                  >
                    {LOSSES}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof: Meta Ads Manager screenshots */}
      <section className="pb-10 md:pb-14 px-6">
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col items-center text-center gap-3 mb-8 md:mb-10">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              Receipts
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary max-w-3xl"
              style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}
            >
              Real accounts.{" "}
              <em className="font-serif italic text-accent font-normal">Real numbers.</em>
            </h2>
            <p className="text-secondary max-w-xl leading-relaxed text-sm md:text-base">
              Pulled straight from Meta Ads Manager. These are ads we&rsquo;ve produced and shipped &mdash;
              no filters, no mock-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {proofScreenshots.map((s) => (
              <div
                key={s.file}
                className="rounded-xl overflow-hidden border"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E0DDD6" }}
              >
                <Image
                  src={`${BASE}/images/${s.file}`}
                  alt={s.alt}
                  width={680}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video overview */}
      <section className="pt-6 md:pt-10 pb-16 md:pb-20 px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-8 md:gap-10">
          <h2
            className="font-medium tracking-tight leading-[1.08] text-primary text-center max-w-3xl"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Who&rsquo;s the madman{" "}
            <em className="font-serif italic text-accent font-normal">
              behind this offer?
            </em>
          </h2>
          <div
            className="w-full rounded-xl overflow-hidden border"
            style={{ borderColor: "#E0DDD6", backgroundColor: "#1C1C1A" }}
          >
            <video
              src={`${VIDEO_SRC}#t=0.1`}
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video block"
            />
          </div>
          <div className="flex flex-col items-center gap-3 mt-2">
            <PrimaryCTA />
            <p className="text-xs text-tertiary">
              100% refund if I lose &middot; 5 business day turnaround &middot; {SPOTS_LEFT} spots left this month
            </p>
          </div>
        </div>
      </section>

      {/* 3. Social proof strip */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12 max-w-3xl mx-auto">
            <h2
              className="font-medium tracking-tight leading-[1.1] text-primary"
              style={{ fontSize: "clamp(26px, 3.2vw, 36px)" }}
            >
              Why we can make this offer &mdash;{" "}
              <em className="font-serif italic text-accent font-normal">
                we do this for a living.
              </em>
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              Send us your best performing ad and the content library you use to make ads. You&rsquo;ll
              receive your new winning ad in 5 days. If we don&rsquo;t beat your ad, you get a full
              refund&hellip; and you still keep all research so you can make more winning ads.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {caseStrip.map((c) => (
              <div
                key={c.brand}
                className="rounded-lg p-5 md:p-6 flex flex-col gap-2"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
              >
                <p
                  className="text-[11px] font-semibold uppercase"
                  style={{ color: "#4A7C5E", letterSpacing: "0.1em" }}
                >
                  {c.brand}
                </p>
                <p className="font-serif text-lg md:text-xl text-primary leading-snug">
                  {c.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What you get */}
      <section
        className="py-20 md:py-24 px-6"
        style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E0DDD6", borderBottom: "1px solid #E0DDD6" }}
      >
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              What you get
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary max-w-3xl"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              What&rsquo;s in{" "}
              <em className="font-serif italic text-accent font-normal">the box.</em>
            </h2>
            <p className="text-secondary max-w-xl leading-relaxed">
              All delivered within 5 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {deliverables.map((d) => (
              <div
                key={d.n}
                className="rounded-xl p-8 flex flex-col gap-5"
                style={{ backgroundColor: "#F5F3EE", border: "1px solid #E0DDD6" }}
              >
                <div
                  className="w-11 h-11 rounded-md flex items-center justify-center font-serif italic text-lg"
                  style={{ backgroundColor: "#2D5C3F", color: "#F5F3EE" }}
                >
                  {d.n.replace("0", "")}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-primary leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary">{d.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      {/* Sample deliverables — IG reel + Canva research report */}
      <section
        className="py-20 md:py-24 px-6"
        style={{
          backgroundColor: "#EDE9E0",
          borderTop: "1px solid #E0DDD6",
          borderBottom: "1px solid #E0DDD6",
        }}
      >
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16 max-w-3xl mx-auto">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              What to expect
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              See the bar{" "}
              <em className="font-serif italic text-accent font-normal">
                we&rsquo;re setting.
              </em>
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              The winning ad and the psychology report from past work. Same format you&rsquo;ll receive
              on day five of your challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* The winning ad */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p
                  className="text-[11px] font-semibold uppercase text-accent"
                  style={{ letterSpacing: "0.14em" }}
                >
                  01 &mdash; The winning ad
                </p>
                <h3
                  className="font-medium tracking-tight leading-[1.12] text-primary"
                  style={{ fontSize: "clamp(24px, 2.6vw, 32px)" }}
                >
                  Sepura Home &mdash;{" "}
                  <em className="font-serif italic text-accent font-normal">27M views.</em>
                </h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  Script, hook, and edit built from scratch. Scaled to 27M organic reach on
                  Instagram alone &mdash; the same format of ad we&rsquo;ll produce for your challenge.
                </p>
              </div>
              <div
                className="relative w-full mx-auto rounded-xl overflow-hidden border"
                style={{
                  maxWidth: "420px",
                  aspectRatio: "9 / 16",
                  borderColor: "#E0DDD6",
                  backgroundColor: "#1C1C1A",
                }}
              >
                <iframe
                  src="https://www.instagram.com/reel/C9iW2vbSMRv/embed"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Sepura Home Instagram reel — 27M views"
                />
              </div>
            </div>

            {/* The customer avatar brief */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p
                  className="text-[11px] font-semibold uppercase text-accent"
                  style={{ letterSpacing: "0.14em" }}
                >
                  02 &mdash; The Avatar + Belief Chain Brief
                </p>
                <h3
                  className="font-medium tracking-tight leading-[1.12] text-primary"
                  style={{ fontSize: "clamp(24px, 2.6vw, 32px)" }}
                >
                  The avatar and belief chain behind{" "}
                  <em className="font-serif italic text-accent font-normal">Sepura Home.</em>
                </h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  Both deliverables in one document. The customer avatar &mdash; psychographics, triggers,
                  voice&#8209;of&#8209;customer language &mdash; plus the full six&#8209;gate belief chain
                  mapped to her, with the missing belief named and the angle we attacked called out. This
                  is the actual brief we built for Sepura before we rebuilt their account around it &mdash;
                  the one that took ROAS from 1.03 to 3.44.
                </p>
              </div>
              <div
                className="relative w-full rounded-xl overflow-hidden border"
                style={{
                  aspectRatio: "4 / 3",
                  borderColor: "#E0DDD6",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <iframe
                  src="https://www.canva.com/design/DAHHz3V7ugo/dyp5lmbsyIS8LELXUoSc4w/view?embed"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  title="Sepura Home customer avatar brief"
                />
              </div>
              <div>
                <Link
                  href="https://canva.link/ebtdeh6u3tfrp81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
                >
                  View full screen
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M5.5 2H2v3.5M8.5 12H12V8.5M2 12l4.5-4.5M12 2L7.5 6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section
        className="py-20 md:py-24 px-6"
        style={{
          backgroundColor: "#EDE9E0",
          borderTop: "1px solid #E0DDD6",
          borderBottom: "1px solid #E0DDD6",
        }}
      >
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              The process
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary max-w-3xl"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              Simple. 5 steps.{" "}
              <em className="font-serif italic text-accent font-normal">
                5 business days.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-md p-7 flex flex-col gap-4"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-serif italic text-2xl"
                    style={{ color: "#2D5C3F" }}
                  >
                    {s.n}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-primary leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why we can guarantee */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              Why we can make{" "}
              <em className="font-serif italic text-accent font-normal">
                this guarantee.
              </em>
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-secondary text-base md:text-lg leading-relaxed">
            <p className="text-primary font-semibold">Let me be straight with you.</p>
            <p>
              We&rsquo;ve managed{" "}
              <span className="font-serif italic text-accent text-2xl md:text-3xl font-normal align-baseline">
                $346,465
              </span>{" "}
              in Meta ad spend across our client portfolio. That&rsquo;s not Fortune 500 numbers &mdash;
              but it&rsquo;s four documented case studies with real results, and enough live&#8209;fire
              reps to know what works and what doesn&rsquo;t.
            </p>
            <p>
              The bigger agencies won&rsquo;t offer a guarantee like this because the math doesn&rsquo;t
              work for them. At 50 clients, one refund a month is a rounding error. At our size, one
              refund actually costs us something.
            </p>
            <p className="text-primary font-semibold">That&rsquo;s exactly why we can offer it.</p>
            <p>
              We&rsquo;d rather put money on the table and earn the next case study than hide behind a
              pitch deck. If our ad beats yours, that&rsquo;s a client we wanted anyway. If we lose, we
              eat the cost, learn from it, and the refund proves we weren&rsquo;t bluffing.
            </p>
            <p>
              We don&rsquo;t start with clever headlines. We start with your customer. Two days of
              research before anyone writes a word. Reviews, Reddit, YouTube comments,
              voice&#8209;of&#8209;customer language. By the time we produce the ad, we know your
              buyer better than most of your team does.
            </p>
            <p>That&rsquo;s not a flex. That&rsquo;s just the work.</p>
            <div
              className="mt-4 rounded-xl p-6 md:p-8"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
            >
              <p className="font-serif italic text-xl md:text-2xl text-primary leading-snug">
                If you&rsquo;re picking between us and a bigger agency &mdash;{" "}
                <span className="text-accent">
                  the bigger agency won&rsquo;t offer you this.
                </span>{" "}
                That&rsquo;s the whole point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. The guarantee */}
      <section
        className="py-20 md:py-24 px-6"
        style={{ backgroundColor: "#1C1C1A" }}
      >
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ color: "#9CC7A9", letterSpacing: "0.14em" }}
            >
              The guarantee
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.06]"
              style={{ fontSize: "clamp(34px, 5vw, 64px)", color: "#F5F3EE" }}
            >
              The{" "}
              <em className="font-serif italic font-normal" style={{ color: "#5C8F6E" }}>
                Beat Your Best Ad
              </em>{" "}
              guarantee.
            </h2>
          </div>

          <div
            className="rounded-[20px] p-8 md:p-12 flex flex-col gap-5 relative overflow-hidden"
            style={{ backgroundColor: "#232320", border: "2px solid #2D5C3F" }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                top: "-120px",
                right: "-120px",
                width: "380px",
                height: "380px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(45,92,63,0.55) 0%, rgba(45,92,63,0) 70%)",
              }}
            />
            <div className="relative flex flex-col gap-5 text-base md:text-lg leading-relaxed" style={{ color: "rgba(245,243,238,0.85)" }}>
              <p className="font-semibold" style={{ color: "#F5F3EE" }}>The test runs in your account, on your terms. Here&rsquo;s exactly how it works.</p>
              <p>
                You create a{" "}
                <span className="font-semibold" style={{ color: "#F5F3EE" }}>new adset</span>{" "}
                inside your existing campaign. Inside that adset, you publish two ads: your control,
                and the one we built.
              </p>
              <p>
                You publish your ad{" "}
                <span className="font-semibold" style={{ color: "#F5F3EE" }}>without using a Post ID</span>{" "}
                &mdash; so both ads start at zero likes, zero comments, zero social proof. Same starting line.
              </p>
              <p>
                Run it for{" "}
                <span className="font-semibold" style={{ color: "#F5F3EE" }}>7 days.</span>{" "}
                Meta&rsquo;s algorithm will allocate budget toward whichever ad it thinks is performing better.
              </p>
              <p>
                For us to win, our ad needs to beat yours on{" "}
                <span className="font-semibold" style={{ color: "#F5F3EE" }}>both</span>{" "}
                of the following: more total spend allocated by Meta,{" "}
                <span className="font-semibold" style={{ color: "#F5F3EE" }}>and</span>{" "}
                a better ROAS or CPA.
              </p>
              <p>
                If our ad doesn&rsquo;t clear both bars after 7 days, you screenshot the adset
                results, email them to me, and I refund{" "}
                <span className="font-semibold" style={{ color: "#F5F3EE" }}>100% of your money.</span>
              </p>
              <p>Keep the ad. Keep the research. Keep the playbook.</p>
              <p className="font-serif italic text-xl md:text-2xl" style={{ color: "#5C8F6E" }}>
                No questions. No claw&#8209;back. No &ldquo;terms and conditions apply&rdquo; fine print.
              </p>
            </div>

            <div
              className="relative mt-4 rounded-lg p-5 md:p-6 flex flex-col gap-3"
              style={{ backgroundColor: "rgba(245,243,238,0.04)", border: "1px solid rgba(245,243,238,0.08)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase"
                style={{ color: "rgba(245,243,238,0.45)", letterSpacing: "0.14em" }}
              >
                The only rules
              </p>
              <ul className="flex flex-col gap-2 text-sm md:text-base" style={{ color: "rgba(245,243,238,0.75)" }}>
                {[
                  "New adset in your existing campaign — both ads live inside it together",
                  "Your ad is published as a new post, not a Post ID, so both ads start at zero social proof",
                  "Test runs 7 days, no early calls",
                  "Our ad must win on more spend AND better ROAS or CPA — not just one of the two",
                  "Screenshot the adset results, email me, and if my ad lost, I'll refund 100% of the money back",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#5C8F6E" }}
                    />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm" style={{ color: "rgba(245,243,238,0.5)" }}>
                Same campaign, same audience, same starting line. The only variable is the creative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-6">
          <p
            className="text-[11px] font-semibold uppercase text-accent"
            style={{ letterSpacing: "0.14em" }}
          >
            Pricing
          </p>
          <h2
            className="font-medium tracking-tight leading-[1.08] text-primary"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Why{" "}
            <em className="font-serif italic text-accent font-normal">$147?</em>
          </h2>

          <div className="flex flex-col gap-5 text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
            <p>Because this is a front-end offer, not a retainer.</p>
            <p>
              At $147, with the guarantee, most ecom brands say yes before their morning coffee.
              We deliver. We win. Some of those brands ask us to run their whole account after &mdash;
              and that&rsquo;s the business. The price goes up every time we beat an ad, so the
              cheapest this offer will ever be is right now.
            </p>
          </div>

          <div
            className="mt-4 rounded-xl p-6 md:p-8 w-full max-w-xl flex flex-col gap-3"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
          >
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              Launch pricing
            </p>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              <div className="flex items-center justify-between text-primary">
                <span>Right now</span>
                <span className="font-serif text-xl">$147</span>
              </div>
              <div className="flex items-center justify-between text-secondary">
                <span>After the next win</span>
                <span className="font-serif text-xl">$197</span>
              </div>
              <div className="flex items-center justify-between text-tertiary">
                <span>After 5 wins</span>
                <span className="font-serif text-xl">$247+</span>
              </div>
            </div>
            <p className="text-xs text-tertiary mt-2">
              Price goes up with every win. It doesn&rsquo;t come back down.
            </p>
          </div>

          <PrimaryCTA className="mt-4" />
        </div>
      </section>

      {/* 9. Loss ledger */}
      <section
        className="py-20 md:py-24 px-6"
        style={{ backgroundColor: "#EDE9E0", borderTop: "1px solid #E0DDD6", borderBottom: "1px solid #E0DDD6" }}
      >
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              Loss ledger
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary max-w-3xl"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              When we lose,{" "}
              <em className="font-serif italic text-accent font-normal">we show it.</em>
            </h2>
            <p className="text-secondary max-w-xl leading-relaxed">
              Every refund we&rsquo;ve issued will be listed here, in order, with the reason. Not because
              we&rsquo;re proud of losing &mdash; because the win record means nothing if you can&rsquo;t see
              the losses too.
            </p>
          </div>

          <div
            className="rounded-xl p-8 md:p-10 flex flex-col items-center text-center gap-2"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
          >
            <p className="font-serif italic text-2xl text-primary">No losses yet.</p>
            <p className="text-sm text-secondary">
              When we get our first one, it&rsquo;ll be here.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Retainer upsell — case study callouts */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-3xl mx-auto">
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              If you want to take this{" "}
              <em className="font-serif italic text-accent font-normal">a step further&hellip;</em>
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              Our winning ads + high&#8209;converting funnel = our happy clients. Below is what we
              helped our clients achieve. We only work with a handful of clients at a time, and only
              with brands we know we can help. Only{" "}
              <span className="text-primary font-semibold">2 client spots available</span>{" "}
              (as of April 24, 2026). Interested? Click below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                industry: "Sepura Home · Garbage Disposal Alternative",
                headline: "ROAS 1.03 → 3.44 in 60 days.",
                body: "Priced at 2× the market leader. Previous agency delivered 1.03 ROAS. We started with the customer — built the avatar brief, mapped the belief stack, then rebuilt the ads around what was actually true. ROAS hit 3.44 in 60 days.",
                stat: { label: "ROAS Improvement", value: "+234%" },
                image: "/images/case-01.jpeg",
              },
              {
                industry: "myco:soul · Mushroom Coffee",
                headline: "+1,076% Meta revenue in 90 days.",
                body: "Saturated category. We built a four-stage funnel — advertorials through to retargeting — unlocking explosive, sustainable scale.",
                stat: { label: "Meta Revenue", value: "+1,076%" },
                image: "/images/case-02.jpeg",
              },
              {
                industry: "Kitchen Appliance Brand",
                headline: "$0 → $122K in 60 days.",
                body: "No existing Meta presence. We built the full funnel from scratch and delivered $122K at a 3.17 ROAS within 60 days.",
                stat: { label: "Revenue", value: "$122K" },
                image: "/images/case-04.jpeg",
              },
            ].map((t) => (
              <div
                key={t.industry}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{ backgroundColor: "#1C1C1A" }}
              >
                <Image
                  src={`${BASE}${t.image}`}
                  alt={t.headline}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto block"
                />
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "#4A7C5E", letterSpacing: "0.06em" }}
                  >
                    {t.industry}
                  </p>
                  <h3
                    className="font-serif text-lg md:text-xl font-normal leading-snug"
                    style={{ color: "#F5F3EE" }}
                  >
                    {t.headline}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9A9690" }}>
                    {t.body}
                  </p>
                </div>
                <div
                  className="px-6 py-5 border-t"
                  style={{ borderColor: "rgba(245,243,238,0.06)" }}
                >
                  <p
                    className="font-serif text-2xl font-normal"
                    style={{ color: "#F5F3EE" }}
                  >
                    {t.stat.value}
                  </p>
                  <p
                    className="text-xs mt-1 font-medium"
                    style={{ color: "#4A4A46" }}
                  >
                    {t.stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="https://connect.scalescientist.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-colors border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white"
            >
              I Want To Scale My Meta Ads
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section
        className="py-20 md:py-24 px-6"
        style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E0DDD6", borderBottom: "1px solid #E0DDD6" }}
      >
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="md:w-72 flex-shrink-0">
              <p
                className="text-[11px] font-semibold uppercase text-accent mb-4"
                style={{ letterSpacing: "0.14em" }}
              >
                FAQ
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary font-normal">
                Questions before{" "}
                <em className="italic text-accent">you buy.</em>
              </h2>
            </div>
            <div className="flex-1">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA + P.S. */}
      <section
        className="py-24 md:py-28 px-6"
        style={{ backgroundColor: "#1C1C1A" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <p
            className="text-[11px] font-semibold uppercase"
            style={{ color: "#9CC7A9", letterSpacing: "0.14em" }}
          >
            Last call
          </p>
          <h2
            className="font-medium tracking-tight leading-[1.06]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#F5F3EE" }}
          >
            {SPOTS_LEFT} spots left{" "}
            <em className="font-serif italic font-normal" style={{ color: "#5C8F6E" }}>
              this month.
            </em>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: "rgba(245,243,238,0.7)" }}
          >
            After that, the next available slot is next month. If you want us to produce the ad
            while the price is still $147, now&rsquo;s the window.
          </p>
          <Link
            href={STRIPE_HREF}
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Get Your Ad Beat — $147
            <ArrowRight />
          </Link>
          <p className="text-xs" style={{ color: "rgba(245,243,238,0.4)" }}>
            100% guarantee · 5 business day delivery · Full refund if we don&rsquo;t win
          </p>

          <div className="flex flex-col items-center gap-2 mt-6">
            <p className="text-xs uppercase font-semibold" style={{ color: "rgba(245,243,238,0.4)", letterSpacing: "0.14em" }}>
              Questions before you buy?
            </p>
            <Link
              href="mailto:graydon@scalescientist.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
              style={{
                backgroundColor: "transparent",
                color: "#F5F3EE",
                border: "1px solid rgba(245,243,238,0.25)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <rect x="2" y="3.5" width="12" height="9" rx="1.25" stroke="currentColor" strokeWidth="1.4" />
                <path d="M2.5 4.5L8 9l5.5-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email me — graydon@scalescientist.com
            </Link>
          </div>

          <div
            className="mt-10 pt-10 w-full max-w-2xl flex flex-col gap-4 text-left"
            style={{ borderTop: "1px solid rgba(245,243,238,0.1)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ color: "rgba(245,243,238,0.4)", letterSpacing: "0.14em" }}
            >
              P.S.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(245,243,238,0.75)" }}
            >
              Every day you keep running the same ad is a day you&rsquo;re finding out less about your
              market, not more.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(245,243,238,0.75)" }}
            >
              For $147, you find out whether there&rsquo;s a better angle, a sharper hook, or a message
              your competitors aren&rsquo;t running. If there is &mdash; you&rsquo;ll have it in a week. If
              there isn&rsquo;t &mdash; you get your money back and a full research report proving your
              current winner is actually winning.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed font-serif italic"
              style={{ color: "#F5F3EE" }}
            >
              Either way, you know more on Friday than you do today.
            </p>
            <p className="text-sm" style={{ color: "rgba(245,243,238,0.55)" }}>
              &mdash; Graydon, Scale Science
            </p>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer
        className="px-6 py-10"
        style={{ backgroundColor: "#1C1C1A", borderTop: "1px solid rgba(245,243,238,0.08)" }}
      >
        <div className="max-w-[1216px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "rgba(245,243,238,0.35)" }}>
          <Link href="/">
            <Image
              src={`${BASE}/images/scale-science-logo.png`}
              alt="Scale Science"
              width={120}
              height={32}
              className="h-6 w-auto opacity-70"
            />
          </Link>
          <p>© {new Date().getFullYear()} Scale Science. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
