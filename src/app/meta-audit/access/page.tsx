import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CopyablePortfolioId from "./CopyablePortfolioId";
import FireLeadEvent from "./FireLeadEvent";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Grant View-Only Access — Meta Ad Audit | Scale Science",
  description:
    "Two quick steps inside Meta Business Suite to grant Scale Science view-only access. Once granted, we audit, find your bottleneck, and email you an actionable plan within 7 days.",
  alternates: {
    canonical: "https://scalescientist.com/meta-audit/access",
  },
  robots: { index: false, follow: false },
};

const EMAIL_HREF = "mailto:support@scalescientist.com";

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

function StepNumber({ n }: { n: string }) {
  return (
    <div
      className="w-11 h-11 rounded-md flex items-center justify-center font-serif italic text-lg shrink-0"
      style={{ backgroundColor: "#2D5C3F", color: "#F5F3EE" }}
    >
      {n}
    </div>
  );
}

export default function GrantAccessPage() {
  return (
    <main className="min-h-screen bg-bg text-primary">
      <FireLeadEvent />
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
            href="/meta-audit"
            className="text-xs md:text-sm font-medium text-secondary hover:text-primary transition-colors"
          >
            ← Back to audit page
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-10 md:pt-16 pb-10 md:pb-14 px-6">
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-6">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ border: "1px solid #E0DDD6", backgroundColor: "#FFFFFF" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span
              className="text-[11px] font-semibold uppercase text-secondary"
              style={{ letterSpacing: "0.14em" }}
            >
              Step 2 of 2 &middot; Grant access
            </span>
          </div>

          <h1
            className="tracking-tight leading-[1.05] text-primary font-medium"
            style={{ fontSize: "clamp(32px, 5.2vw, 64px)", textWrap: "balance" }}
          >
            Grant view&#8209;only access.{" "}
            <em className="font-serif italic text-accent font-normal">
              We&rsquo;ll take it from here.
            </em>
          </h1>

          <p
            className="text-secondary text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ textWrap: "balance" }}
          >
            Two quick steps inside Meta Business Suite. Once we have view&#8209;only access,
            we&rsquo;ll audit your account, find your biggest bottleneck, and email you an actionable
            plan to scale &mdash;{" "}
            <span className="text-primary font-semibold">within 7 days.</span>
          </p>

          <Link
            href={EMAIL_HREF}
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

      {/* Step 1 */}
      <section
        className="py-16 md:py-20 px-6"
        style={{
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E0DDD6",
          borderBottom: "1px solid #E0DDD6",
        }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 mb-8 md:mb-10">
            <StepNumber n="1" />
            <div className="flex flex-col gap-3 max-w-2xl">
              <p
                className="text-[11px] font-semibold uppercase text-accent"
                style={{ letterSpacing: "0.14em" }}
              >
                Step 1
              </p>
              <h2
                className="font-medium tracking-tight leading-[1.1] text-primary"
                style={{ fontSize: "clamp(26px, 3.4vw, 40px)" }}
              >
                Add Scale Science{" "}
                <em className="font-serif italic text-accent font-normal">as a partner.</em>
              </h2>
              <ol className="flex flex-col gap-2 text-secondary text-base md:text-lg leading-relaxed list-none">
                <li className="flex gap-3">
                  <span className="text-accent font-semibold w-5 shrink-0">a.</span>
                  <span>
                    Open{" "}
                    <Link
                      href="https://business.facebook.com/latest/settings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-semibold underline underline-offset-2 hover:text-primary transition-colors"
                    >
                      business.facebook.com/latest/settings
                    </Link>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold w-5 shrink-0">b.</span>
                  <span>
                    In the left sidebar, click <span className="text-primary font-semibold">Partners</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold w-5 shrink-0">c.</span>
                  <span>
                    Click <span className="text-primary font-semibold">Add</span> &rarr;{" "}
                    <span className="text-primary font-semibold">Give partner access to your assets</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold w-5 shrink-0">d.</span>
                  <span>
                    In the dialog, paste the Scale Science portfolio ID below into the{" "}
                    <span className="text-primary font-semibold">Partner Business ID</span> field, then
                    click <span className="text-primary font-semibold">Next</span>.
                  </span>
                </li>
              </ol>

              <div className="mt-3">
                <CopyablePortfolioId />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <figure
              className="rounded-xl overflow-hidden border"
              style={{
                backgroundColor: "#F5F3EE",
                borderColor: "#E0DDD6",
                boxShadow: "0 8px 28px rgba(28,28,26,0.06)",
              }}
            >
              <Image
                src={`${BASE}/images/audit-access-step-1.png`}
                alt="Meta Business Suite settings page showing Partners tab and Add → Give partner access to your assets dropdown highlighted"
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto block"
              />
              <figcaption className="text-xs text-tertiary px-4 py-2.5 border-t" style={{ borderColor: "#E0DDD6" }}>
                Settings &rarr; Partners &rarr; Add &rarr; Give partner access to your assets
              </figcaption>
            </figure>

            <figure
              className="rounded-xl overflow-hidden border"
              style={{
                backgroundColor: "#F5F3EE",
                borderColor: "#E0DDD6",
                boxShadow: "0 8px 28px rgba(28,28,26,0.06)",
              }}
            >
              <Image
                src={`${BASE}/images/audit-access-step-2.png`}
                alt="Add a new partner dialog with the Partner Business ID field filled with 101492251721646"
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto block"
              />
              <figcaption className="text-xs text-tertiary px-4 py-2.5 border-t" style={{ borderColor: "#E0DDD6" }}>
                Paste 101492251721646 into the Partner Business ID field
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 mb-8 md:mb-10">
            <StepNumber n="2" />
            <div className="flex flex-col gap-3 max-w-2xl">
              <p
                className="text-[11px] font-semibold uppercase text-accent"
                style={{ letterSpacing: "0.14em" }}
              >
                Step 2
              </p>
              <h2
                className="font-medium tracking-tight leading-[1.1] text-primary"
                style={{ fontSize: "clamp(26px, 3.4vw, 40px)" }}
              >
                Assign{" "}
                <em className="font-serif italic text-accent font-normal">view&#8209;only access</em> to
                your ad account.
              </h2>
              <ol className="flex flex-col gap-2 text-secondary text-base md:text-lg leading-relaxed list-none">
                <li className="flex gap-3">
                  <span className="text-accent font-semibold w-5 shrink-0">a.</span>
                  <span>
                    In the asset list on the left, click{" "}
                    <span className="text-primary font-semibold">Ad accounts</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold w-5 shrink-0">b.</span>
                  <span>Select the ad account you want us to audit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold w-5 shrink-0">c.</span>
                  <span>
                    Under <span className="text-primary font-semibold">Partial access</span>, toggle on{" "}
                    <span className="text-primary font-semibold">View performance</span> only &mdash;
                    nothing else
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold w-5 shrink-0">d.</span>
                  <span>
                    Click <span className="text-primary font-semibold">Assign assets</span>. That&rsquo;s it.
                  </span>
                </li>
              </ol>

              <div
                className="mt-2 rounded-lg p-4 text-sm leading-relaxed"
                style={{ backgroundColor: "#EAF1ED", border: "1px solid rgba(45,92,63,0.2)", color: "#244D33" }}
              >
                <strong>View&#8209;only means view&#8209;only.</strong> We can read reports and ad
                performance, but we cannot edit campaigns, change budgets, run ads, or access billing.
                You can revoke access at any time from the same Partners screen.
              </div>
            </div>
          </div>

          <figure
            className="rounded-xl overflow-hidden border max-w-[900px] mx-auto"
            style={{
              backgroundColor: "#F5F3EE",
              borderColor: "#E0DDD6",
              boxShadow: "0 8px 28px rgba(28,28,26,0.06)",
            }}
          >
            <Image
              src={`${BASE}/images/audit-access-step-3.png`}
              alt="Assign assets and permissions dialog: Ad accounts selected on the left, the ad account chosen, View performance toggled on under Partial access, Assign assets button highlighted"
              width={1600}
              height={1100}
              sizes="(max-width: 768px) 100vw, 900px"
              className="w-full h-auto block"
            />
            <figcaption className="text-xs text-tertiary px-4 py-2.5 border-t" style={{ borderColor: "#E0DDD6" }}>
              Toggle on View performance only under Partial access &rarr; Assign assets
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What happens next */}
      <section
        className="py-16 md:py-20 px-6"
        style={{
          backgroundColor: "#EDE9E0",
          borderTop: "1px solid #E0DDD6",
          borderBottom: "1px solid #E0DDD6",
        }}
      >
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-col items-center text-center gap-3 mb-10">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              What happens next
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary max-w-3xl"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Your audit{" "}
              <em className="font-serif italic text-accent font-normal">in 7 days.</em>
            </h2>
          </div>

          <ol className="flex flex-col gap-4">
            {[
              {
                day: "Day 0",
                body: "I confirm view-only access landed in my Business Suite the same business day. The 7-day audit clock starts.",
              },
              {
                day: "Days 1–4",
                body: "I dig through your campaigns, audiences, creative, attribution, funnel, and historical performance. Looking for the single biggest lever between you and the next plateau.",
              },
              {
                day: "Days 5–6",
                body: "I write up the findings — your account's biggest bottleneck, why it's there, what to change, and the order to change things in.",
              },
              {
                day: "Day 7",
                body: "You receive the actionable plan in your inbox. Execute it yourself, or talk to me about doing it together.",
              },
            ].map((row) => (
              <li
                key={row.day}
                className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 rounded-lg p-5 md:p-6"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DDD6" }}
              >
                <p
                  className="text-[11px] md:text-xs font-semibold uppercase shrink-0 md:w-20 text-accent"
                  style={{ letterSpacing: "0.14em" }}
                >
                  {row.day}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-secondary">{row.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA / email */}
      <section className="py-20 md:py-24 px-6" style={{ backgroundColor: "#1C1C1A" }}>
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-6">
          <p
            className="text-[11px] font-semibold uppercase"
            style={{ color: "#9CC7A9", letterSpacing: "0.14em" }}
          >
            Stuck on a step?
          </p>
          <h2
            className="font-medium tracking-tight leading-[1.06]"
            style={{ fontSize: "clamp(28px, 4.4vw, 48px)", color: "#F5F3EE" }}
          >
            Just{" "}
            <em className="font-serif italic font-normal" style={{ color: "#5C8F6E" }}>
              email me directly.
            </em>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: "rgba(245,243,238,0.7)" }}
          >
            If anything in your Business Suite looks different, the screenshots don&rsquo;t match, or
            you just want to confirm before granting access &mdash; reply with a screenshot and I&rsquo;ll
            walk you through it.
          </p>

          <Link
            href={EMAIL_HREF}
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-sm md:text-base font-semibold hover:bg-accent/90 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
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
            Email support@scalescientist.com
            <ArrowRight />
          </Link>
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
