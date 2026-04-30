import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AuditForm from "./AuditForm";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Free Meta Ad Account Audit — 7 Day Bottleneck Report | Scale Science",
  description:
    "Spending $15k+/mo on Meta ads? We'll audit your account, find your bottleneck, and email you an actionable plan to scale. Free.",
  alternates: {
    canonical: "https://scalescientist.com/meta-audit",
  },
  openGraph: {
    title: "We'll Find Your Meta Ad Account Bottleneck in 7 Days, For Free",
    description:
      "Spending $15k+/mo on Meta ads? We'll audit your account and email you an actionable plan to scale.",
    url: "https://scalescientist.com/meta-audit",
    type: "website",
  },
};

export default function MetaAuditPage() {
  return (
    <main className="min-h-screen bg-bg text-primary">
      {/* Top bar */}
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

      {/* Hero */}
      <section className="pt-10 md:pt-16 pb-8 md:pb-10 px-6">
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-7">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ border: "1px solid #E0DDD6", backgroundColor: "#FFFFFF" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span
              className="text-[11px] font-semibold uppercase text-secondary"
              style={{ letterSpacing: "0.14em" }}
            >
              Free Meta ad audit
            </span>
          </div>

          <h1
            className="tracking-tight leading-[1.05] text-primary font-medium"
            style={{ fontSize: "clamp(32px, 5.2vw, 64px)", textWrap: "balance" }}
          >
            We&rsquo;ll find your Meta ad account bottleneck in 7 days,{" "}
            <em className="font-serif italic text-accent font-normal">for free.</em>
          </h1>

          <div
            className="flex flex-col gap-4 text-secondary text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ textWrap: "balance" }}
          >
            <p>
              If you&rsquo;re spending{" "}
              <span className="text-primary font-semibold">$15k+ on Meta ads per month</span>, we&rsquo;ll
              audit your account, find your bottleneck, and email you an actionable plan to scale.
            </p>
            <p>
              If you qualify, follow the steps on the next page to provide us with view&#8209;only
              access so we can audit your account.
            </p>
          </div>

          <Link
            href="mailto:support@scalescientist.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-colors border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <rect
                x="2"
                y="3.5"
                width="12"
                height="9"
                rx="1.25"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M2.5 4.5L8 9l5.5-4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Questions? Email Us Here
          </Link>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 md:pb-28 px-6">
        <div className="max-w-[520px] mx-auto">
          <AuditForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-10"
        style={{
          backgroundColor: "#1C1C1A",
          borderTop: "1px solid rgba(245,243,238,0.08)",
        }}
      >
        <div
          className="max-w-[1216px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "rgba(245,243,238,0.35)" }}
        >
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
