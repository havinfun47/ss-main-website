import Link from "next/link";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";


export default function Hero() {
  return (
    <section className="pt-24 md:pt-40 pb-16 md:pb-28 px-6 text-center bg-bg">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">

        <div className="inline-flex items-center gap-2 border border-border bg-bg rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0" />
          <span className="text-secondary text-xs font-medium uppercase" style={{ letterSpacing: "0.14em" }}>
            For DTC brands spending $15K+/month on Meta
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl leading-[1.06] tracking-tight text-primary font-normal">
          Scale your DTC brand on Meta{" "}
          <em className="text-accent not-italic italic">without watching ROAS collapse.</em>
        </h1>

        <p className="text-secondary text-lg leading-relaxed max-w-2xl font-sans">
          Senior&#8209;led Meta ads, in&#8209;house creative, and landing pages built around how
          your customer actually buys. One team. One engagement. No junior media buyers running
          your account.
        </p>

        <div className="flex flex-col items-center gap-3 w-full sm:w-auto sm:max-w-md">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors w-full"
          >
            Apply for a free Meta funnel audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className="text-tertiary text-xs leading-relaxed max-w-md text-center">
            Tell us about your brand. If we&apos;re a fit, we&apos;ll audit your account on our own
            time and walk you through what we&apos;d change on a 30&#8209;min call.
          </p>
          <div className="inline-flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
            <span className="text-amber-700 text-xs font-semibold">
              Currently accepting 2 new clients for Q2 2026. Once full, the next opening is Q3.
            </span>
          </div>
        </div>

        {/* Partner logos */}
        <div className="flex items-center gap-8 mt-2">
          <Image src={`${BASE}/images/meta-logo.png`} alt="Meta" width={80} height={24} className="h-6 w-auto opacity-70" />
          <Image src={`${BASE}/images/shopify-logo.png`} alt="Shopify" width={90} height={24} className="h-6 w-auto opacity-70" />
        </div>

      </div>
    </section>
  );
}
