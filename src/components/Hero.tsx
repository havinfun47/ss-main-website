import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-border-subtle rounded-full px-4 py-1.5 text-secondary text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          Trusted By 200+ 7-8 Figure eCommerce Brands
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6">
          We{" "}
          <span className="font-serif italic">Contractually Guarantee</span>{" "}
          $50k&nbsp;–&nbsp;$500k Per Month In Email Revenue Within 60&nbsp;Days
        </h1>

        {/* Subheading */}
        <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We help you build your backend eCommerce funnel without spamming your
          list with discounts, spending an extra dollar on ads, or wasting your
          money on clueless freelancers.
        </p>

        {/* CTA */}
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-bg px-7 py-3.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          Book A Strategy Call
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
