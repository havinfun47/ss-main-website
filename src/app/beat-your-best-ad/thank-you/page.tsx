import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const PIXEL_ID = "1839545210149861";
const PURCHASE_VALUE = 147;

export const metadata: Metadata = {
  title: "Order received — Beat Your Best Ad | Scale Science",
  description:
    "Order received. Here's exactly what to send over so we can start producing your new ad.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://scalescientist.com/beat-your-best-ad/thank-you",
  },
};

const EMAIL_BODY = `Hey Graydon,

Order's in. Here's everything you need to start:

1) My current winning Meta ad
Link to the ad in Ads Manager (or attach the video/image + the ad copy):
[paste link or attach files]

2) Last 30 days of performance on that ad
ROAS:
CPA:
Amount spent:

3) My creative assets library
Videos and images I use to make my ads — UGC, product shots, brand b-roll, photography. Drive/Dropbox folder is easiest:
[paste folder link]

4) Anything else helpful
Brand background, audience notes, what's worked or flopped before, anything I should know:


— [your name]
`;

const EMAIL_HREF = `mailto:graydon@scalescientist.com?subject=${encodeURIComponent(
  "Beat Your Best Ad — my assets"
)}&body=${encodeURIComponent(EMAIL_BODY)}`;

const checklist = [
  {
    n: "01",
    title: "Your current winning Meta ad",
    body: "The ad we're trying to beat. Send the Ads Manager link or attach the video/image and paste the ad copy. If it's a static, send the asset and the headline + primary text.",
  },
  {
    n: "02",
    title: "Last 30 days of performance",
    body: "ROAS, CPA, and amount spent on that winning ad over the last 30 days. This is what we benchmark against — so we know what \"beating\" actually looks like for your account.",
  },
  {
    n: "03",
    title: "Your creative asset library",
    body: "All the videos and images you use to produce ads — UGC, product shots, brand b-roll, photography, anything you've shot. The richer the library, the sharper the final ad. A shared Drive or Dropbox folder is the cleanest way to send.",
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

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-bg text-primary">
      {/* Meta Pixel — base + Purchase event on the thank-you page */}
      <Script id="meta-pixel-base" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
fbq('track', 'Purchase', {value: ${PURCHASE_VALUE}, currency: 'CAD'});
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

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
            href="/beat-your-best-ad"
            className="text-xs md:text-sm font-medium text-secondary hover:text-primary transition-colors"
          >
            ← Back to challenge page
          </Link>
        </div>
      </header>

      {/* Confirmation hero */}
      <section className="pt-12 md:pt-20 pb-10 md:pb-14 px-6">
        <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-7">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ border: "1px solid #E0DDD6", backgroundColor: "#FFFFFF" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span
              className="text-[11px] font-semibold uppercase text-secondary"
              style={{ letterSpacing: "0.14em" }}
            >
              Order received
            </span>
          </div>

          <h1
            className="tracking-tight leading-[1.05] text-primary font-medium"
            style={{ fontSize: "clamp(36px, 5.6vw, 72px)", textWrap: "balance" }}
          >
            You&rsquo;re in.{" "}
            <em className="font-serif italic text-accent font-normal">
              Now I need three things.
            </em>
          </h1>

          <p
            className="text-secondary text-base md:text-xl leading-relaxed max-w-2xl"
            style={{ textWrap: "balance" }}
          >
            The 5&#8209;business&#8209;day clock starts the moment all three are in my inbox.
            Send everything in one email and we&rsquo;ll move fast.
          </p>
        </div>
      </section>

      {/* The checklist */}
      <section
        className="py-16 md:py-20 px-6"
        style={{
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E0DDD6",
          borderBottom: "1px solid #E0DDD6",
        }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-14">
            <p
              className="text-[11px] font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              Your checklist
            </p>
            <h2
              className="font-medium tracking-tight leading-[1.08] text-primary max-w-2xl"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Here&rsquo;s exactly{" "}
              <em className="font-serif italic text-accent font-normal">
                what to send over.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {checklist.map((c) => (
              <div
                key={c.n}
                className="rounded-xl p-7 md:p-8 flex flex-col gap-5"
                style={{ backgroundColor: "#F5F3EE", border: "1px solid #E0DDD6" }}
              >
                <div
                  className="w-11 h-11 rounded-md flex items-center justify-center font-serif italic text-lg"
                  style={{ backgroundColor: "#2D5C3F", color: "#F5F3EE" }}
                >
                  {c.n.replace("0", "")}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-primary leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-secondary">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-20 md:py-24 px-6" style={{ backgroundColor: "#1C1C1A" }}>
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-7">
          <p
            className="text-[11px] font-semibold uppercase"
            style={{ color: "#9CC7A9", letterSpacing: "0.14em" }}
          >
            Send it over
          </p>
          <h2
            className="font-medium tracking-tight leading-[1.06]"
            style={{ fontSize: "clamp(30px, 4.4vw, 52px)", color: "#F5F3EE" }}
          >
            One click.{" "}
            <em
              className="font-serif italic font-normal"
              style={{ color: "#5C8F6E" }}
            >
              Pre&#8209;filled email.
            </em>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: "rgba(245,243,238,0.7)" }}
          >
            The button below opens a new email to me with the checklist already inside.
            Fill in your details, attach your files, hit send.
          </p>

          <Link
            href={EMAIL_HREF}
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded text-sm md:text-base font-semibold hover:bg-accent/90 transition-colors"
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
            Email me my assets — graydon@scalescientist.com
          </Link>

          <p className="text-xs" style={{ color: "rgba(245,243,238,0.45)" }}>
            Or copy: <span style={{ color: "rgba(245,243,238,0.85)" }}>graydon@scalescientist.com</span>
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-20 md:py-24 px-6">
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
              From inbox{" "}
              <em className="font-serif italic text-accent font-normal">
                to live test.
              </em>
            </h2>
          </div>

          <ol className="flex flex-col gap-4">
            {[
              {
                day: "Day 0",
                body: "I confirm receipt the same business day, flag anything missing, and lock in the start of your 5-day clock.",
              },
              {
                day: "Days 1–2",
                body: "Customer research. Reviews, Reddit, YouTube comments, competitor ads. We pull voice-of-customer language and map the belief stack.",
              },
              {
                day: "Days 3–4",
                body: "Script, edit, produce. New hook, new angle, built using your asset library. 9:16 and 1:1 versions.",
              },
              {
                day: "Day 5",
                body: "You receive the new ad, the Customer Avatar Brief, and the Psychology of the Winning Ad write-up. Spin up the test adset and the 7-day clock starts.",
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
                <p className="text-sm md:text-base leading-relaxed text-secondary">
                  {row.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final reassurance */}
      <section
        className="py-16 md:py-20 px-6"
        style={{
          backgroundColor: "#EDE9E0",
          borderTop: "1px solid #E0DDD6",
        }}
      >
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-5">
          <p className="font-serif italic text-2xl md:text-3xl text-primary leading-snug" style={{ textWrap: "balance" }}>
            Questions, missing assets, anything weird about your account &mdash;{" "}
            <span className="text-accent">just hit reply.</span>
          </p>
          <Link
            href={EMAIL_HREF}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#1C1C1A",
              border: "1px solid #2D5C3F",
            }}
          >
            Email me — graydon@scalescientist.com
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
