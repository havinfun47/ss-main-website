"use client";

import { useState } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxAESDc0GS8aJztfEv4r328Z8NC2Q4hPqoWzu_aprMDzl-rF9VXWVpTHFgW_N7hXaym/exec";

type Errors = Partial<
  Record<"fullName" | "companyName" | "website" | "email" | "revenue", string>
>;

export default function ConnectLeadForm() {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [revenue, setRevenue] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (companyName.trim().length < 1) next.companyName = "Please enter your company name.";
    try {
      const u = new URL(website.trim());
      if (u.protocol !== "https:" && u.protocol !== "http:") {
        next.website = "Please enter a valid URL (include https://).";
      }
    } catch {
      next.website = "Please enter a valid URL (include https://).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (revenue.trim().length < 1) {
      next.revenue = "Please enter your average monthly revenue.";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    setSubmitError(false);

    const params = new URLSearchParams({
      fullName: fullName.trim(),
      companyName: companyName.trim(),
      website: website.trim(),
      email: email.trim(),
      revenue: revenue.trim(),
    });

    fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      mode: "no-cors",
    })
      .then(() => {
        try {
          const w = window as unknown as { fbq?: (...args: unknown[]) => void };
          if (typeof w.fbq === "function") {
            w.fbq("track", "Contact", { content_name: "Connect Form Application" });
          }
        } catch {}
        setSuccess(true);
      })
      .catch(() => {
        setSubmitError(true);
        setSubmitting(false);
      });
  }

  if (success) {
    return (
      <div
        className="rounded-2xl p-10 md:p-12 flex flex-col items-center text-center gap-4"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E0DDD6",
          boxShadow: "0 1px 2px rgba(28,28,26,0.04), 0 4px 16px rgba(28,28,26,0.06)",
        }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#EAF1ED", color: "#2D5C3F" }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M7.5 12.5l3 3 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-primary leading-snug">
          You&rsquo;re all set.
        </h3>
        <p className="text-secondary leading-relaxed max-w-sm">
          Thanks for reaching out. We&rsquo;ll be in touch within 48 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-3.5 py-3 text-[15px] rounded-md border-[1.5px] bg-white outline-none transition focus:border-primary focus:shadow-[0_0_0_3px_rgba(28,28,26,0.07)]";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl p-8 md:p-10 flex flex-col gap-5 text-left"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0DDD6",
        boxShadow: "0 1px 2px rgba(28,28,26,0.04), 0 4px 16px rgba(28,28,26,0.06)",
      }}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="connect-fullName" className="text-sm font-medium text-primary">
          Full Name
        </label>
        <input
          id="connect-fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={inputClass}
          style={{
            borderColor: errors.fullName ? "#DC2626" : "#E0DDD6",
            boxShadow: errors.fullName ? "0 0 0 3px rgba(220,38,38,0.08)" : undefined,
          }}
        />
        {errors.fullName && (
          <span className="text-[13px] mt-0.5" style={{ color: "#DC2626" }}>
            {errors.fullName}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="connect-companyName" className="text-sm font-medium text-primary">
          Company Name
        </label>
        <input
          id="connect-companyName"
          name="companyName"
          type="text"
          autoComplete="organization"
          placeholder="Acme Inc."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className={inputClass}
          style={{
            borderColor: errors.companyName ? "#DC2626" : "#E0DDD6",
            boxShadow: errors.companyName ? "0 0 0 3px rgba(220,38,38,0.08)" : undefined,
          }}
        />
        {errors.companyName && (
          <span className="text-[13px] mt-0.5" style={{ color: "#DC2626" }}>
            {errors.companyName}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="connect-website" className="text-sm font-medium text-primary">
          Website
        </label>
        <input
          id="connect-website"
          name="website"
          type="url"
          autoComplete="url"
          placeholder="https://yoursite.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className={inputClass}
          style={{
            borderColor: errors.website ? "#DC2626" : "#E0DDD6",
            boxShadow: errors.website ? "0 0 0 3px rgba(220,38,38,0.08)" : undefined,
          }}
        />
        {errors.website && (
          <span className="text-[13px] mt-0.5" style={{ color: "#DC2626" }}>
            {errors.website}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="connect-email" className="text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="connect-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@yoursite.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          style={{
            borderColor: errors.email ? "#DC2626" : "#E0DDD6",
            boxShadow: errors.email ? "0 0 0 3px rgba(220,38,38,0.08)" : undefined,
          }}
        />
        {errors.email && (
          <span className="text-[13px] mt-0.5" style={{ color: "#DC2626" }}>
            {errors.email}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="connect-revenue" className="text-sm font-medium text-primary">
          Average Monthly Revenue
        </label>
        <input
          id="connect-revenue"
          name="revenue"
          type="text"
          inputMode="numeric"
          placeholder="e.g. $50,000"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          className={inputClass}
          style={{
            borderColor: errors.revenue ? "#DC2626" : "#E0DDD6",
            boxShadow: errors.revenue ? "0 0 0 3px rgba(220,38,38,0.08)" : undefined,
          }}
        />
        {errors.revenue && (
          <span className="text-[13px] mt-0.5" style={{ color: "#DC2626" }}>
            {errors.revenue}
          </span>
        )}
      </div>

      <div className="flex flex-col items-center gap-3 mt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-6 py-3.5 rounded-md text-[15px] font-semibold text-white bg-accent hover:bg-accent/90 transition-colors disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Get in Touch"}
        </button>
        <p className="text-xs text-tertiary">We&rsquo;ll email you within 48 hours</p>
        {submitError && (
          <p className="text-[13px]" style={{ color: "#DC2626" }}>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
