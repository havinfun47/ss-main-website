import Link from "next/link";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];


export default function Footer() {
  return (
    <footer>
      <section
        className="py-28 px-6 text-center border-t border-border bg-bg-dark"
        id="contact"
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent" style={{ letterSpacing: "0.14em" }}>
            Ready to scale
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-normal leading-tight text-bg tracking-tight">
            Ready to scale <em className="italic text-accent">profitably?</em>
          </h2>
          <p className="text-secondary mb-1 leading-relaxed text-sm max-w-md">
            We only take on brands we&apos;re genuinely confident we can scale. Book a free
            30-minute strategy call — we&apos;ll audit your ad account, identify where
            revenue is leaking, and tell you exactly what we&apos;d do differently.
          </p>
          <p className="text-tertiary text-xs max-w-sm" style={{ color: "rgba(245,243,238,0.3)" }}>
            No pitch deck. No hard sell. If we&apos;re not the right fit, we&apos;ll tell you.
          </p>
          <Link
            href="https://connect.scalescientist.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded text-sm font-semibold hover:bg-accent/90 transition-colors mt-2"
          >
            Let&apos;s Chat
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="inline-flex items-center gap-2 bg-amber-900/30 border border-amber-700/40 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
            <span className="text-amber-400 text-xs font-semibold">2 client spots remaining for Q2 2026</span>
          </div>
        </div>
      </section>

      <div className="border-t px-6 py-12 bg-bg-dark" style={{ borderColor: "rgba(245,243,238,0.08)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/">
            <Image
              src={`${BASE}/images/scale-science-logo.png`}
              alt="Scale Science"
              width={140}
              height={40}
              className="h-8 w-auto opacity-70"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-6 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-bg transition-colors text-sm"
                style={{ color: "rgba(245,243,238,0.45)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: "1px solid rgba(245,243,238,0.06)", color: "rgba(245,243,238,0.2)" }}>
          <p>© {new Date().getFullYear()} Scale Science. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Results may vary. Individual outcomes depend on brand, budget, and market conditions.</p>
            <Link href="/privacy" className="hover:text-bg transition-colors shrink-0" style={{ color: "rgba(245,243,238,0.35)" }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
