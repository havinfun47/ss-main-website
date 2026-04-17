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

const socialLinks = [
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.8 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3L10 15z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.842L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
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

          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="hover:text-bg transition-colors"
                style={{ color: "rgba(245,243,238,0.35)" }}
                aria-label={s.label}
              >
                {s.icon}
              </Link>
            ))}
          </div>
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
