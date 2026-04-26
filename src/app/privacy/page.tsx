import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Scale Scientist",
  description: "Privacy policy for Scale Scientist, the Meta ads management application by Scale Scientist Inc.",
};

const LAST_UPDATED = "April 20, 2026";
const PRIVACY_EMAIL = "privacy@scalescientist.com";
const SUPPORT_EMAIL = "support@scalescientist.com";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-bg-card px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-primary font-bold text-base tracking-tight">
            Scale Scientist
          </Link>
          <span className="text-tertiary text-xs">Privacy Policy</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            Legal
          </p>
          <h1 className="text-4xl font-light tracking-tight text-primary mb-3">Privacy Policy</h1>
          <p className="text-secondary text-sm">
            <strong className="text-primary font-semibold">Scale Scientist</strong> &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose-custom space-y-10 text-secondary text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">1. About This Policy</h2>
            <p>
              This Privacy Policy describes how <strong className="text-primary">Scale Scientist</strong> (&ldquo;Scale Scientist,&rdquo; &ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) collects, uses, stores, and shares information when you authorize the App to access your Meta (Facebook and Instagram) advertising accounts. Scale Scientist is operated by Scale Scientist Inc. (British Columbia, Canada).
            </p>
            <p className="mt-3">
              Scale Scientist is a software product that helps businesses manage, publish, and optimize Meta advertising campaigns using rules (&ldquo;SOPs&rdquo;) that you configure. It integrates directly with Meta&rsquo;s Marketing API on your behalf.
            </p>
            <p className="mt-3">
              By authorizing the App via Facebook Login, you agree to the practices described in this policy. If you do not agree, do not authorize or continue to use the App.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">2. Scope</h2>
            <p>
              This policy applies to data that Scale Scientist accesses, processes, and stores in connection with providing the App. It does not cover Meta&rsquo;s own collection and use of data, which is governed by{" "}
              <a href="https://www.facebook.com/privacy/policy/" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Meta&rsquo;s Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">3. Data We Access from Meta</h2>
            <p>
              When you authorize Scale Scientist via Facebook Login, we access the following categories of information through Meta&rsquo;s APIs, limited to the permissions you grant:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Authentication data", "your Meta user ID, name, and email address, used to authenticate your session."],
                ["Ad account structure", "ad accounts you have access to, including their IDs, currency, spend caps, and status."],
                ["Campaign data", "campaigns, ad sets, and ads — including names, objectives, budgets, schedules, targeting summaries, and status."],
                ["Ad creative", "images, videos, copy, and metadata associated with your ads."],
                ["Performance metrics", "impressions, reach, clicks, spend, conversions, CPA, CPM, ROAS, frequency, and similar campaign and ad-level analytics."],
                ["Page information", "the list of Facebook Pages you administer and their basic engagement data, used where ads are associated with a Page."],
                ["Business Manager structure", "the Business Manager accounts and assets your Meta user has access to, used to scope which ad accounts can be managed through the App."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not access your Facebook news feed, personal messages, friends list, photos unrelated to your ads, or any other Meta data outside the scope listed above.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">4. Meta Permissions We Request</h2>
            <p>
              Scale Scientist requests the following Meta platform permissions. We request only what is necessary to deliver the App&rsquo;s features, and you may revoke any permission at any time through your{" "}
              <a href="https://www.facebook.com/settings?tab=business_tools" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Facebook Business Integrations
              </a>{" "}
              settings.
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["public_profile", "Basic identity (name, user ID) to authenticate your account."],
                ["email", "To send account notifications and the audit log digest."],
                ["pages_show_list", "To list the Facebook Pages you administer so you can choose which to manage."],
                ["pages_read_engagement", "To read Page-level engagement data that informs ad optimization."],
                ["pages_manage_ads", "To manage Page-associated ads (pause, duplicate, create) in line with your configured rules."],
                ["business_management", "To identify the Business Manager accounts and assets associated with your Meta user."],
                ["ads_read", "To read campaign, ad set, ad, and performance data."],
                ["ads_management", "To create, edit, pause, and optimize campaigns, ad sets, and ads on your behalf."],
              ].map(([perm, desc]) => (
                <li key={perm} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-border inline-block" />
                  <span><span className="font-mono text-xs text-primary">{perm}</span> — {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              If new features require additional permissions, you will be prompted to grant them and this policy will be updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">5. How We Use Your Data</h2>
            <p>We use the data described above exclusively to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Authenticate you and maintain your session.",
                "Display your ad accounts, campaigns, creatives, and performance metrics within the App interface.",
                "Enable you to create, edit, publish, and pause Meta ad campaigns directly from the App.",
                "Evaluate the rules (SOPs) you have enabled and execute the actions you have authorized — such as pausing underperforming ads, shifting budget, or protecting target CPA.",
                "Generate AI-assisted optimization recommendations (see Section 6).",
                "Produce the audit log that records every action we take on your behalf.",
                "Send transactional email (account notifications, audit summaries, security alerts).",
                "Comply with legal obligations and enforce our Terms of Service.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-accent mt-0.5">
                    <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do <strong className="text-primary">not</strong> use your data for advertising to you, for profiling, for resale, or for any purpose unrelated to operating the App on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">6. AI Processing — Anthropic Claude</h2>
            <p>
              Scale Scientist uses Anthropic&rsquo;s Claude AI (&ldquo;Claude&rdquo;) to evaluate campaign performance against your configured rules and to generate optimization recommendations. When AI features are used, relevant data — typically anonymized campaign metrics, ad structures, and configured rules — is transmitted to Anthropic&rsquo;s API for processing.
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Data sent to Anthropic is used solely to return a result to Scale Scientist.",
                "Anthropic processes this data under its Commercial Terms and does not use it to train foundation models (per Anthropic's default commercial API terms).",
                "Personally identifying Meta user IDs and email addresses are not sent to Anthropic.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Anthropic&rsquo;s practices are governed by{" "}
              <a href="https://www.anthropic.com/legal/privacy" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Anthropic&rsquo;s Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">7. Data Storage and Retention</h2>
            <p>Scale Scientist is designed to minimize stored data. Specifically:</p>

            <p className="mt-4 font-medium text-primary">Stored (for the App to function):</p>
            <ul className="mt-2 space-y-2 list-none">
              {[
                "Your Meta user ID, name, and email, linked to your Scale Scientist account.",
                "An encrypted Meta API access token, used to perform the actions you authorize. Tokens are encrypted at rest using industry-standard encryption.",
                "The rules (SOPs) you have configured.",
                "The audit log of actions Scale Scientist has taken on your behalf.",
                "Standard server and security logs (IP addresses, request timestamps, error traces).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 font-medium text-primary">Not stored:</p>
            <ul className="mt-2 space-y-2 list-none">
              {[
                "Ad creative assets (images, videos, copy) — streamed from Meta on demand.",
                "Detailed Meta performance data — fetched live from Meta's APIs; cached briefly (under 5 minutes) only to reduce API load.",
                "Your Meta password (never accessed or stored).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-border inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 font-medium text-primary">Retention periods:</p>
            <ul className="mt-2 space-y-2 list-none">
              {[
                ["Account data and rules", "retained while your account is active, and deleted within 14 days of account closure or a verified deletion request."],
                ["Audit log", "retained for 30 days to enable rollback, then deleted."],
                ["Server/security logs", "retained for up to 90 days, then automatically deleted."],
                ["Inactive accounts", "if you do not log in or take action for 12 consecutive months, we will notify you and delete your account data within 14 days thereafter."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">8. Subprocessors</h2>
            <p>
              To operate the App, we share data with the following third-party service providers (&ldquo;subprocessors&rdquo;):
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Meta Platforms, Inc.", "Ad account integration (source and destination of Platform Data). All data described in Section 3, under Meta's own Privacy Policy."],
                ["Vercel Inc.", "Application hosting and edge network for ads.scalescientist.com. All traffic to and from the App passes through Vercel. Vercel does not store Platform Data except in transient request logs."],
                ["Anthropic PBC", "AI processing for optimization recommendations (see Section 6). Anonymized campaign metrics and rule definitions."],
              ].map(([party, desc]) => (
                <li key={party} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{party}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your data to any third party.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">9. Data Sharing</h2>
            <p>Beyond the subprocessors listed above, we only disclose your data when:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Legal compliance", "we are compelled by valid legal process (subpoena, court order, lawful request by a competent authority), or when disclosure is necessary to protect the rights, property, or safety of Scale Scientist, our users, or the public."],
                ["Business transfers", "in the event of a merger, acquisition, or sale of all or substantially all of our assets, your data may be transferred to the acquiring entity, subject to this policy or a successor policy at least as protective."],
                ["With your consent", "if you explicitly authorize us to share data for a specific purpose."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">10. Your Rights and How to Exercise Them</h2>
            <p>You have the right to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Access", "request confirmation of what data we hold about you and receive a copy."],
                ["Correction", "ask us to correct inaccurate or incomplete data."],
                ["Deletion", "ask us to delete your account and associated data."],
                ["Portability", "receive your data in a structured, commonly used, machine-readable format."],
                ["Objection and restriction", "object to or ask us to restrict certain processing."],
                ["Withdraw consent", "revoke the App's access to your Meta account at any time via Facebook Business Integrations. Revocation also triggers deletion of your stored Scale Scientist data within 14 days."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To submit a request, email us at{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                {PRIVACY_EMAIL}
              </a>{" "}
              or follow the instructions at{" "}
              <Link href="/data-deletion" className="text-accent hover:text-accent/80 underline underline-offset-2">
                scalescientist.com/data-deletion
              </Link>. We will acknowledge within 72 hours and complete the request within <strong className="text-primary">14 days</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">11. Your Rights under GDPR (EEA, UK, Switzerland)</h2>
            <p>
              If you are in the European Economic Area, the United Kingdom, or Switzerland, we process your personal data on the following legal bases under the GDPR / UK GDPR:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Contract (Article 6(1)(b))", "to perform the services you request."],
                ["Legitimate interests (Article 6(1)(f))", "to secure the App, prevent fraud, and improve reliability."],
                ["Consent (Article 6(1)(a))", "where required (e.g., optional communications)."],
                ["Legal obligation (Article 6(1)(c))", "to comply with applicable law."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              You have the rights set out in Section 10 and, in addition, the right to lodge a complaint with your local data protection authority. Scale Scientist acts as a data processor with respect to the Meta data we handle on your behalf; you are the data controller.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">12. Your Rights under CCPA / CPRA (California)</h2>
            <p>If you are a California resident, you have the right to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Know what personal information is collected, used, disclosed, and sold.",
                "Access, correct, and delete your personal information.",
                "Opt out of the sale or sharing of personal information — we do not sell or share personal information as defined by the CCPA/CPRA.",
                "Limit the use of sensitive personal information — we do not use personal information for cross-context behavioral advertising.",
                "Be free from discrimination for exercising these rights.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-accent mt-0.5">
                    <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To exercise these rights, email{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                {PRIVACY_EMAIL}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">13. International Data Transfers</h2>
            <p>
              Scale Scientist is operated from British Columbia, Canada, and uses subprocessors (Meta, Vercel, Anthropic) that operate globally, primarily in the United States. When data is transferred internationally, we rely on Standard Contractual Clauses, adequacy decisions, or equivalent safeguards as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">14. Security</h2>
            <p>We protect your data with commercially reasonable safeguards:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "All communication between the App, Meta's APIs, and your browser uses HTTPS/TLS.",
                "Meta API access tokens are encrypted at rest.",
                "Access to production systems is restricted to authorized personnel and logged.",
                "We follow industry best practices for secure development, including dependency scanning and regular security reviews.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              No system is perfectly secure. If we become aware of a breach affecting your data, we will notify you and the relevant authorities as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">15. Children&rsquo;s Privacy</h2>
            <p>
              Scale Scientist is intended for business users who are at least 18 years of age and who manage Meta advertising accounts. The App is not directed at children under 13 and we do not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">16. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be communicated via email to registered users or via a prominent in-app notice at least 14 days before taking effect. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the App after changes take effect constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">17. Contact</h2>
            <p>For questions, data requests, or concerns about this Privacy Policy:</p>
            <div className="mt-4 border border-border rounded-lg p-5 bg-bg-card">
              <p className="font-semibold text-primary">Scale Scientist Inc.</p>
              <p className="text-tertiary text-xs mt-1">British Columbia, Canada</p>
              <p className="mt-3 space-y-1">
                <span className="block">
                  Privacy:{" "}
                  <a href={`mailto:${PRIVACY_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                    {PRIVACY_EMAIL}
                  </a>
                </span>
                <span className="block">
                  Support:{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                    {SUPPORT_EMAIL}
                  </a>
                </span>
                <span className="block">
                  Data deletion:{" "}
                  <Link href="/data-deletion" className="text-accent hover:text-accent/80 underline underline-offset-2">
                    scalescientist.com/data-deletion
                  </Link>
                </span>
              </p>
            </div>
            <p className="text-tertiary text-xs mt-4">
              Scale Scientist is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. &ldquo;Meta,&rdquo; &ldquo;Facebook,&rdquo; and &ldquo;Instagram&rdquo; are trademarks of Meta Platforms, Inc.
            </p>
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
