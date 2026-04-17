"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navLinks = [
  { label: "Results", href: "#results" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={`${BASE}/images/scale-science-logo.png`}
            alt="Scale Science"
            width={140}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
            <span className="text-amber-700 text-xs font-semibold">2 spots left</span>
          </div>
          <Link
            href="https://connect.scalescientist.com/" target="_blank" rel="noopener noreferrer"
            className="bg-accent text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Let&apos;s Chat
          </Link>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://connect.scalescientist.com/" target="_blank" rel="noopener noreferrer"
              className="bg-accent text-white px-4 py-2.5 rounded text-sm font-semibold text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Let&apos;s Chat
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
