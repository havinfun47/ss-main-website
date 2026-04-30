"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxAESDc0GS8aJztfEv4r328Z8NC2Q4hPqoWzu_aprMDzl-rF9VXWVpTHFgW_N7hXaym/exec";

const DISQUALIFYING_SPEND = "$0–$9k";
const ACCESS_PAGE_PATH = "/meta-audit/access";
const REDIRECT_DELAY_MS = 1500;

const AD_SPEND_OPTIONS = [
  DISQUALIFYING_SPEND,
  "$10k–$15k",
  "$15k–$25k",
  "$25k–$50k",
  "Over $50k per month",
];

type Errors = Partial<Record<"fullName" | "companyName" | "website" | "email" | "adSpend", string>>;
type Outcome = "pending" | "qualified" | "disqualified";

export default function AuditForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [adSpend, setAdSpend] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [outcome, setOutcome] = useState<Outcome>("pending");
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    if (outcome !== "qualified") return;
    router.prefetch(ACCESS_PAGE_PATH);
    const t = setTimeout(() => {
      router.push(ACCESS_PAGE_PATH);
    }, REDIRECT_DELAY_MS);
    return () => clearTimeout(t);
  }, [outcome, router]);

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
    if (!adSpend) next.adSpend = "Please select your monthly ad spend.";
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
      source: "audit",
      fullName: fullName.trim(),
      companyName: companyName.trim(),
      website: website.trim(),
      email: email.trim(),
      adSpend: adSpend,
    });

    const qualifies = adSpend !== DISQUALIFYING_SPEND;

    fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      mode: "no-cors",
    })
      .then(() => {
        // Lead event fires on /meta-audit/access for qualified submitters only.
        setOutcome(qualifies ? "qualified" : "disqualified");
      })
      .catch(() => {
        setSubmitError(true);
        setSubmitting(false);
      });
  }

  if (outcome === "qualified") {
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
        <h2 className="font-serif text-2xl md:text-3xl text-primary leading-snug">
          You qualify. Redirecting&hellip;
        </h2>
        <p className="text-secondary leading-relaxed max-w-md">
          Sending you to the access instructions now. If it doesn&rsquo;t load automatically,{" "}
          <Link href={ACCESS_PAGE_PATH} className="text-accent font-semibold underline underline-offset-2 hover:text-primary transition-colors">
            click here
          </Link>
          .
        </p>
      </div>
    );
  }

  if (outcome === "disqualified") {
    return (
      <div
        className="rounded-2xl p-10 md:p-12 flex flex-col items-center text-center gap-4"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E0DDD6",
          boxShadow: "0 1px 2px rgba(28,28,26,0.04), 0 4px 16px rgba(28,28,26,0.06)",
        }}
      >
        <h2 className="font-serif text-2xl md:text-3xl text-primary leading-snug">
          Thanks for reaching out.
        </h2>
        <p className="text-secondary leading-relaxed max-w-md">
          Right now we only provide free audits for accounts spending{" "}
          <span className="text-primary font-semibold">over $10k/month</span> on Meta. The framework
          needs that much spend to draw real conclusions from the data.
        </p>
        <p className="text-secondary leading-relaxed max-w-md">
          Once you&rsquo;re past that threshold, come back and we&rsquo;ll dig in. In the meantime, if
          you have questions, email us at{" "}
          <Link
            href="mailto:support@scalescientist.com"
            className="text-accent font-semibold underline underline-offset-2 hover:text-primary transition-colors"
          >
            support@scalescientist.com
          </Link>
          .
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
      className="rounded-2xl p-8 md:p-12 flex flex-col gap-6"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0DDD6",
        boxShadow: "0 1px 2px rgba(28,28,26,0.04), 0 4px 16px rgba(28,28,26,0.06)",
      }}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fullName" className="text-sm font-medium text-primary">
          Full Name
        </label>
        <input
          id="fullName"
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
        <label htmlFor="companyName" className="text-sm font-medium text-primary">
          Company Name
        </label>
        <input
          id="companyName"
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
        <label htmlFor="website" className="text-sm font-medium text-primary">
          Website
        </label>
        <input
          id="website"
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
        <label htmlFor="email" className="text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="email"
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
        <label htmlFor="adSpend" className="text-sm font-medium text-primary">
          Average Monthly Meta Ad Spend
        </label>
        <select
          id="adSpend"
          name="adSpend"
          value={adSpend}
          onChange={(e) => setAdSpend(e.target.value)}
          className={inputClass}
          style={{
            borderColor: errors.adSpend ? "#DC2626" : "#E0DDD6",
            boxShadow: errors.adSpend ? "0 0 0 3px rgba(220,38,38,0.08)" : undefined,
            color: adSpend ? "#1c1c1a" : "#9A9690",
            appearance: "none",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%231c1c1a' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
            paddingRight: "36px",
          }}
        >
          <option value="" disabled>
            Select a range
          </option>
          {AD_SPEND_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.adSpend && (
          <span className="text-[13px] mt-0.5" style={{ color: "#DC2626" }}>
            {errors.adSpend}
          </span>
        )}
      </div>

      <div className="flex flex-col items-center gap-3 mt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-6 py-3.5 rounded-md text-[15px] font-semibold text-white bg-accent hover:bg-accent/90 transition-colors disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Request My Free Audit"}
        </button>
        <p className="text-xs text-tertiary">
          We&rsquo;ll email you within 48 hours
        </p>
        {submitError && (
          <p className="text-[13px]" style={{ color: "#DC2626" }}>
            Something went wrong. Please try again or email support@scalescientist.com.
          </p>
        )}
      </div>
    </form>
  );
}
