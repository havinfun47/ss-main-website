import Link from "next/link";
import Image from "next/image";
import ConnectLeadForm from "./ConnectLeadForm";

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
        className="py-24 md:py-28 px-6 border-t border-border bg-bg-dark"
        id="contact"
      >
        <div className="max-w-[560px] mx-auto flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent" style={{ letterSpacing: "0.14em" }}>
            Apply for a free audit
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-normal leading-tight text-bg tracking-tight">
            See what&rsquo;s actually broken in your{" "}
            <em className="italic text-accent">Meta funnel.</em>
          </h2>
          <div className="flex flex-col gap-4 leading-relaxed text-sm max-w-md text-secondary">
            <p>
              Tell us about your brand below. If you look like a fit, we&apos;ll audit your ad
              account, your landing page, and your funnel on our own time &mdash; then walk you
              through what we&apos;d change on a 30&#8209;minute call.
            </p>
            <p>
              No pitch deck. No live screen&#8209;share scrambling to find insights. We do the
              homework before the call so you actually get value from the conversation.
            </p>
          </div>

          <div className="w-full mt-4">
            <ConnectLeadForm />
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
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/privacy" className="hover:text-bg transition-colors" style={{ color: "rgba(245,243,238,0.35)" }}>Privacy Policy</Link>
              <Link href="/terms" className="hover:text-bg transition-colors" style={{ color: "rgba(245,243,238,0.35)" }}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
