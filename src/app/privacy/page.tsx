import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Ad Management by Scale Science",
  description: "Privacy policy for the Ad Management application by Scale Science.",
};

const LAST_UPDATED = "April 16, 2025";
const CONTACT_EMAIL = "graydon@scalescientist.com";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-bg-card px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-primary font-bold text-base tracking-tight">
            Scale Science
          </Link>
          <span className="text-tertiary text-xs">Ad Management · Privacy Policy</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            Legal
          </p>
          <h1 className="text-4xl font-light tracking-tight text-primary mb-3">Privacy Policy</h1>
          <p className="text-secondary text-sm">
            <strong className="text-primary font-semibold">Ad Management</strong> by Scale Science &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose-custom space-y-10 text-secondary text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">1. About This Policy</h2>
            <p>
              This Privacy Policy describes how <strong className="text-primary">Ad Management</strong> (&ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;), operated by Scale Science, collects, uses, and handles information when you connect the App to your Meta account. The App is a Meta platform application that enables authorised users to manage, publish, and optimise Meta advertising campaigns.
            </p>
            <p className="mt-3">
              By authorising the App via Meta Login, you agree to the practices described in this policy. If you do not agree, do not authorise or use the App.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">2. Data We Access</h2>
            <p>
              The App accesses data from Meta&rsquo;s APIs on your behalf using the permissions you grant during the OAuth authorisation flow. The following categories of data may be accessed:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Ad account data", "Campaigns, ad sets, ads, budgets, bidding strategies, and account settings."],
                ["Ad creative assets", "Images, videos, and copy associated with your ads, including creative performance metrics."],
                ["Performance metrics", "Impressions, reach, clicks, spend, ROAS, CPA, CPM, and other campaign analytics."],
                ["Media library", "Videos and static images stored in your Meta ad account or Business Manager."],
                ["Page and Instagram data", "Engagement data and content used in partnership ads or branded content placements."],
                ["Business Manager data", "Account structure, asset assignments, and permissions needed to manage ad accounts."],
                ["User identity", "Your Meta user ID, name, and email address, used solely to authenticate your session."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">3. Meta Permissions We Request</h2>
            <p>The App requests the following Meta platform permissions, limited to what is necessary to deliver its functionality:</p>
            <ul className="mt-3 space-y-1.5 list-none">
              {[
                "ads_management — create, edit, and delete campaigns, ad sets, and ads",
                "ads_read — read ad account performance data and campaign structures",
                "business_management — access Business Manager accounts and assets",
                "pages_manage_ads — manage ads associated with your Pages",
                "pages_read_engagement — read Page-level engagement data for ad targeting and partnership placements",
                "instagram_basic — access Instagram account data for Meta ad delivery",
                "instagram_content_publish — publish partnership and branded content ads to Instagram",
                "read_insights — access analytics and performance insights",
                "catalog_management — manage product catalogues for dynamic and shopping ads",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-border inline-block" />
                  <span className="font-mono text-xs text-primary leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We request only the permissions required for the features you use. You may revoke any permission at any time through your{" "}
              <a href="https://www.facebook.com/settings?tab=applications" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Facebook App Settings
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">4. How We Use Your Data</h2>
            <p>Data accessed through Meta&rsquo;s APIs is used exclusively to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Display your ad accounts, campaigns, creatives, and performance metrics within the App interface.",
                "Enable you to create, edit, publish, and optimise Meta ad campaigns directly from the App.",
                "Render and play video and static ad creatives so you can review and analyse creative performance.",
                "Pass real-time campaign and performance data to an AI system (see Section 5) that generates optimisation recommendations and executes actions on your behalf according to the operating procedures you configure.",
                "Authenticate your identity and maintain your session.",
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
              We do not use your data for advertising, profiling, resale, or any purpose unrelated to operating the App on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">5. AI Processing — Anthropic Claude</h2>
            <p>
              The App integrates with <strong className="text-primary">Anthropic&rsquo;s Claude AI</strong> (&ldquo;Claude&rdquo;) to provide intelligent ad optimisation. When you use AI-powered features, relevant real-time data from your Meta account — such as campaign performance metrics, ad structures, and creative assets — is transmitted to Anthropic&rsquo;s API for processing.
            </p>
            <p className="mt-3">
              This data is used solely to generate recommendations and execute actions within the App. Anthropic processes this data subject to their own{" "}
              <a href="https://www.anthropic.com/privacy" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://www.anthropic.com/legal/usage-policy" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Usage Policy
              </a>. We do not permit Anthropic to use your data to train their models beyond what their standard API terms permit.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">6. Data Storage and Retention</h2>
            <p>
              <strong className="text-primary">The App does not store your Meta data.</strong> All data accessed via Meta&rsquo;s APIs is processed in real time and is not persisted to any database or file system operated by Scale Science. Once your session ends or you revoke access, no residual data is retained.
            </p>
            <p className="mt-3">
              Standard server logs (IP addresses, timestamps, error logs) required for security and debugging purposes may be retained for up to 90 days and are then automatically deleted.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">7. Data Sharing</h2>
            <p>We do not sell, rent, or trade your data. Data is shared only as described below:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Anthropic (Claude AI)", "Real-time campaign and performance data for AI optimisation features, as described in Section 5."],
                ["Meta Platforms, Inc.", "Data flows to and from Meta's own APIs under Meta's Privacy Policy and Platform Terms."],
                ["Legal compliance", "We may disclose information if required by law, court order, or to protect the rights and safety of our users."],
              ].map(([party, desc]) => (
                <li key={party} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{party}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">8. Your Rights and Data Deletion</h2>
            <p>You have the right to:</p>
            <ul className="mt-3 space-y-1.5 list-none">
              {[
                "Revoke the App's access to your Meta account at any time via your Facebook App Settings.",
                "Request confirmation of what data, if any, we hold about you.",
                "Request deletion of any data associated with your account.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-accent mt-0.5">
                    <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>. We will respond within 30 days. Because the App does not store your data, deletion requests are typically fulfilled by confirming revocation of API access.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">9. Security</h2>
            <p>
              All communication between the App and Meta&rsquo;s APIs is encrypted via HTTPS/TLS. Access tokens are held only in memory for the duration of your session and are not written to disk or any persistent storage. We do not log or store Meta access tokens.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">10. Children&rsquo;s Privacy</h2>
            <p>
              The App is intended for business users managing Meta advertising accounts. It is not directed at children under the age of 13. We do not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be communicated via email to registered users or via a notice within the App. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the App after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">12. Contact</h2>
            <p>
              For any questions, concerns, or data requests regarding this Privacy Policy or the App&rsquo;s data practices, contact:
            </p>
            <div className="mt-4 border border-border rounded-lg p-5 bg-bg-card">
              <p className="font-semibold text-primary">Scale Science</p>
              <p className="mt-1">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-tertiary text-xs mt-2">App: Ad Management · Developer: Scale Science</p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-border px-6 py-8 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-tertiary">
          <p>© {new Date().getFullYear()} Scale Science. All rights reserved.</p>
          <Link href="/" className="hover:text-primary transition-colors">← Back to Scale Science</Link>
        </div>
      </footer>
    </div>
  );
}
