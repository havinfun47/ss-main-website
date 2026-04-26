import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion Instructions — Scale Scientist",
  description: "How to remove your data from Scale Scientist. We complete any valid deletion request within 14 days.",
};

const LAST_UPDATED = "April 20, 2026";
const PRIVACY_EMAIL = "privacy@scalescientist.com";

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-bg-card px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-primary font-bold text-base tracking-tight">
            Scale Scientist
          </Link>
          <span className="text-tertiary text-xs">Data Deletion</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            Legal
          </p>
          <h1 className="text-4xl font-light tracking-tight text-primary mb-3">Data Deletion Instructions</h1>
          <p className="text-secondary text-sm">
            <strong className="text-primary font-semibold">Scale Scientist</strong> &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose-custom space-y-10 text-secondary text-sm leading-relaxed">

          <section>
            <p>
              This page explains how to remove your data from Scale Scientist. We will complete any valid deletion request within <strong className="text-primary">14 days</strong> of receiving it.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">What data is covered</h2>
            <p>
              When you use Scale Scientist we store a limited set of data needed to operate the service, including:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Your Meta user ID, name, and email.",
                "An encrypted Meta API access token, used to perform actions you have authorized.",
                "The rules (SOPs) you have configured.",
                "The audit log of actions Scale Scientist took on your behalf.",
                "Standard server and security logs.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              A full description is in our{" "}
              <Link href="/privacy" className="text-accent hover:text-accent/80 underline underline-offset-2">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">How to delete your data</h2>
            <p>
              You have two options. <strong className="text-primary">Either one</strong> will result in the deletion of your Scale Scientist account and the data above within 14 days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">Option 1 — Revoke access from Facebook (fastest)</h2>
            <p>
              This is the quickest way and immediately stops Scale Scientist from accessing your Meta account.
            </p>
            <ol className="mt-3 space-y-2 list-none">
              {[
                <>
                  Go to{" "}
                  <a href="https://www.facebook.com/settings?tab=business_tools" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                    Facebook Business Integrations
                  </a>{" "}
                  on Facebook.
                </>,
                <>Find <strong className="text-primary">Scale Scientist</strong> in the list of connected apps.</>,
                <>Click <strong className="text-primary">Remove</strong> and confirm.</>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent text-white text-xs font-semibold inline-flex items-center justify-center">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4">
              Once revoked, Meta notifies us that your authorization has been withdrawn. We will then delete your stored Scale Scientist data within 14 days and email a confirmation to the address on file.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">Option 2 — Email a deletion request</h2>
            <p>If you would prefer to submit a request directly to us:</p>
            <ol className="mt-3 space-y-2 list-none">
              {[
                <>
                  Send an email to{" "}
                  <a href={`mailto:${PRIVACY_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                    {PRIVACY_EMAIL}
                  </a>{" "}
                  from the email address associated with your Scale Scientist account.
                </>,
                <>Use the subject line: <strong className="text-primary">Data deletion request</strong>.</>,
                <>
                  Include:
                  <ul className="mt-2 space-y-1.5 list-none ml-1">
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-border inline-block" />
                      <span>The name of the Meta account you used to sign in, and</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-border inline-block" />
                      <span>A confirmation that you are the account holder or otherwise authorized to request deletion.</span>
                    </li>
                  </ul>
                </>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent text-white text-xs font-semibold inline-flex items-center justify-center">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4">We will:</p>
            <ul className="mt-2 space-y-2 list-none">
              {[
                <>Acknowledge your request within <strong className="text-primary">72 hours</strong>.</>,
                "Verify your identity (we may ask for additional information if the request was not sent from the account email).",
                <>Delete your data within <strong className="text-primary">14 days</strong> of verification.</>,
                "Email you a confirmation once deletion is complete.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-accent mt-0.5">
                    <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">What gets deleted</h2>
            <p>Once your request is completed, Scale Scientist will delete:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Your account record (Meta user ID, name, email).",
                "Your encrypted Meta API access token and any refresh tokens.",
                "All rules (SOPs) you configured.",
                "Your audit log.",
                "Any personal information we had on file.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 font-medium text-primary">What we retain, and why:</p>
            <ul className="mt-2 space-y-2 list-none">
              {[
                "Anonymized, aggregated usage statistics that cannot be linked back to you (used to improve the service).",
                "Records we are legally required to keep (such as billing/tax records), stored for the minimum period required by law.",
                "Standard server and security logs are automatically deleted after 90 days regardless of account status.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-border inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Meta&rsquo;s own records of the API calls we made on your behalf are governed by Meta&rsquo;s own data retention policies and are not under our control.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">Advertising data on Meta</h2>
            <p>
              Scale Scientist does not delete campaigns, ads, or data from your Meta ad account. To remove data on Meta&rsquo;s side, use Meta&rsquo;s own tools and policies:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                <a href="https://www.facebook.com/business/help" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                  Meta Business Help Center
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                <a href="https://www.facebook.com/help/contact/507739850846588" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                  Meta Ad Account Data Deletion
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">Contact</h2>
            <p>Questions about deletion, or a request that isn&rsquo;t going through?</p>
            <div className="mt-4 border border-border rounded-lg p-5 bg-bg-card">
              <p className="font-semibold text-primary">Scale Scientist Inc.</p>
              <p className="text-tertiary text-xs mt-1">British Columbia, Canada</p>
              <p className="mt-3">
                Email:{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                  {PRIVACY_EMAIL}
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-border px-6 py-8 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-tertiary">
          <p>© {new Date().getFullYear()} Scale Scientist Inc. All rights reserved.</p>
          <Link href="/" className="hover:text-primary transition-colors">← Back to Scale Scientist</Link>
        </div>
      </footer>
    </div>
  );
}
