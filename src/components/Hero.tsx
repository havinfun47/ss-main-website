import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-40 pb-28 px-6 text-center bg-bg">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

        <div className="inline-flex items-center gap-2 border border-border bg-bg rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0" />
          <span className="text-secondary text-xs font-medium">Boutique Growth Partner · 6-7 Figure eCom Brands</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl leading-[1.06] tracking-tight text-primary font-normal">
          We build Meta funnels that turn ad spend into{" "}
          <em className="text-accent not-italic italic">predictable revenue.</em>
        </h1>

        <p className="text-secondary text-lg leading-relaxed max-w-xl font-sans">
          Senior strategists, data-backed creative, and landing pages engineered to convert — built around your customer&apos;s specific buying journey, not a template.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="https://connect.scalescientist.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Let&apos;s Chat
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

        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
          <span className="text-amber-700 text-xs font-semibold">2 client spots remaining for Q2 2026</span>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-lg mt-4">
          {[
            { value: "+234%", label: "ROAS Improvement" },
            { value: "$122K", label: "Revenue in 60 Days" },
            { value: "−71%", label: "Cost Per Acquisition" },
          ].map((s) => (
            <div key={s.label} className="bg-bg-panel rounded-lg px-4 py-5 text-center">
              <p className="font-serif text-2xl text-primary font-normal">{s.value}</p>
              <p className="text-xs text-secondary mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
