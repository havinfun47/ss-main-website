import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 text-center bg-bg">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

        <div className="inline-flex items-center gap-2 border border-border bg-bg-card rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block shrink-0" />
          <span className="text-secondary text-xs font-medium">Boutique Growth Partner · 6-7 Figure eCom Brands</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-light leading-[1.06] tracking-tight text-primary">
          We build Meta funnels that turn ad spend into{" "}
          <span className="font-bold text-accent">predictable revenue.</span>
        </h1>

        <p className="text-secondary text-lg leading-relaxed max-w-xl">
          Senior strategists, data-backed creative, and landing pages engineered to convert — built around your customer&apos;s specific buying journey, not a template.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="https://calendly.com/graydon-scalescientist/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Book a free strategy call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="#results"
            className="text-sm text-secondary hover:text-primary transition-colors font-medium"
          >
            See case studies →
          </Link>
        </div>

      </div>
    </section>
  );
}
