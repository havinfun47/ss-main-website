import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Ad Management by Scale Science",
  description: "Terms of service for the Ad Management application by Scale Science.",
};

const LAST_UPDATED = "April 19, 2026";
const CONTACT_EMAIL = "support@scalescientist.com";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-bg-card px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-primary font-bold text-base tracking-tight">
            Scale Science
          </Link>
          <span className="text-tertiary text-xs">Ad Management · Terms of Service</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            Legal
          </p>
          <h1 className="text-4xl font-light tracking-tight text-primary mb-3">Terms of Service</h1>
          <p className="text-secondary text-sm">
            <strong className="text-primary font-semibold">Ad Management</strong> by Scale Science &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose-custom space-y-10 text-secondary text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of <strong className="text-primary">Ad Management</strong> (&ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;), a Meta platform application operated by Scale Science. By authorising the App through Meta Login or otherwise accessing or using the App, you (&ldquo;you,&rdquo; &ldquo;user&rdquo;) agree to be bound by these Terms. If you do not agree, you must not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">2. Description of the Service</h2>
            <p>
              The App enables authorised users to manage, publish, and optimise Meta advertising campaigns by connecting to Meta&rsquo;s APIs via OAuth. The App provides campaign creation, editing, performance analytics, creative review, and AI-assisted optimisation recommendations powered by third-party AI services (see Section 8).
            </p>
            <p className="mt-3">
              The App is a tool that operates on your behalf according to the operating procedures you configure. You remain solely responsible for all advertising activity performed through your Meta ad accounts.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">3. Eligibility</h2>
            <p>To use the App you must:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Be at least 18 years of age and legally capable of entering binding contracts.",
                "Be an authorised representative of a business with an active Meta advertising account.",
                "Comply with Meta's Commerce Policies, Advertising Standards, Platform Terms, and Community Standards.",
                "Not be a competitor of Scale Science using the App solely to evaluate it for competitive purposes.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-accent mt-0.5">
                    <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">4. Account Access and Authorisation</h2>
            <p>
              Access to the App is granted by connecting your Meta account via OAuth. You authorise the App to access your Meta data and perform actions on your behalf according to the permissions you grant. You are responsible for:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Maintaining the security of your Meta login credentials.",
                "Any activity that occurs under your authorised session, including actions taken by the AI based on rules you configure.",
                "Promptly revoking access via your Facebook App Settings if you suspect unauthorised use.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">5. User Responsibilities</h2>
            <p>When using the App you agree to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Comply with all applicable laws, including advertising, consumer protection, data protection, and tax laws in the jurisdictions where you operate.",
                "Comply with Meta's Advertising Policies, Platform Terms, Commerce Policies, and Community Standards at all times.",
                "Only advertise products and services you have the legal right to market.",
                "Ensure all creative assets, copy, and targeting comply with applicable laws and platform policies.",
                "Not use the App to engage in deceptive, fraudulent, or misleading advertising.",
                "Not attempt to circumvent Meta's ad review systems, policy enforcement, or account restrictions.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">6. Prohibited Conduct</h2>
            <p>You must not, and must not permit any third party to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Reverse engineer, decompile, disassemble, or attempt to extract source code from the App.",
                "Interfere with, disrupt, or impose an unreasonable load on the App's infrastructure or Meta's APIs.",
                "Use the App to scrape, harvest, or collect Meta user data in violation of Meta's Platform Terms.",
                "Resell, sublicense, or make the App available to unauthorised third parties.",
                "Use the App to publish content prohibited by Meta's Advertising Policies (including but not limited to illegal products, hate speech, misinformation, and prohibited financial products).",
                "Use the App for any purpose other than managing your own (or your authorised client's) Meta advertising accounts.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">7. AI-Assisted Recommendations and Actions</h2>
            <p>
              The App uses artificial intelligence — including Anthropic&rsquo;s Claude — to generate recommendations and, where you have configured it to do so, to execute changes to your campaigns automatically.
            </p>
            <p className="mt-3">
              AI-generated outputs may be incomplete, inaccurate, or suboptimal. Advertising performance depends on many factors outside the App&rsquo;s control, including market conditions, creative quality, landing page conversion, and Meta&rsquo;s own algorithms. <strong className="text-primary">You are solely responsible for reviewing and approving any material changes and for all outcomes — including ad spend, campaign results, and compliance with platform policies.</strong>
            </p>
            <p className="mt-3">
              We make no guarantee of any specific advertising performance, return on ad spend, or business outcome.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">8. Third-Party Services</h2>
            <p>The App integrates with third-party services. Your use of the App is also governed by their terms:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Meta Platforms, Inc.", "All interactions with Meta's APIs are subject to Meta's Platform Terms, Advertising Policies, and Data Policy."],
                ["Anthropic PBC (Claude AI)", "AI features are powered by Anthropic's Claude API and are subject to Anthropic's Usage Policy and Commercial Terms of Service."],
              ].map(([party, desc]) => (
                <li key={party} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{party}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We are not responsible for third-party services or any actions they take. Disruption, policy changes, or termination of access to third-party services may affect the App&rsquo;s availability or functionality.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">9. Fees and Billing</h2>
            <p>
              Use of the App may be subject to subscription fees, as disclosed to you at the time of signup. All fees are billed in advance and are non-refundable except where required by law. Ad spend is charged directly by Meta to the payment method on your Meta ad account — Scale Science does not collect or hold ad spend funds on your behalf.
            </p>
            <p className="mt-3">
              We reserve the right to modify pricing with at least 30 days&rsquo; notice. Continued use of the App after the effective date constitutes acceptance of the updated pricing.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">10. Intellectual Property</h2>
            <p>
              The App, including all software, interfaces, designs, logos, and content (excluding your data and assets), is the exclusive property of Scale Science and is protected by copyright, trademark, and other intellectual property laws. These Terms grant you a limited, non-exclusive, non-transferable, revocable licence to use the App solely for its intended purpose.
            </p>
            <p className="mt-3">
              You retain all rights to your advertising assets, creative content, and data accessed through the App. By using the App, you grant Scale Science a limited licence to process your data solely as required to deliver the App&rsquo;s functionality.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">11. Disclaimers</h2>
            <p>
              <strong className="text-primary">THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND</strong>, whether express, implied, statutory, or otherwise, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, reliability, or uninterrupted availability.
            </p>
            <p className="mt-3">
              We do not warrant that the App will be error-free, that AI-generated outputs will be accurate, that defects will be corrected, or that the App or Meta&rsquo;s APIs will be available at any particular time.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">12. Limitation of Liability</h2>
            <p>
              <strong className="text-primary">TO THE MAXIMUM EXTENT PERMITTED BY LAW</strong>, Scale Science and its officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including but not limited to lost profits, lost revenue, lost advertising spend, loss of business opportunities, or loss of data, arising out of or related to your use of the App — even if advised of the possibility of such damages.
            </p>
            <p className="mt-3">
              Our aggregate liability to you for any claim arising out of or related to these Terms or the App shall not exceed the greater of (a) the fees you paid to Scale Science for the App in the 12 months preceding the claim, or (b) USD $100.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Scale Science and its officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to: (a) your use or misuse of the App; (b) your advertising content, campaigns, or targeting; (c) your violation of these Terms, Meta&rsquo;s policies, or applicable law; or (d) your violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">14. Termination</h2>
            <p>
              You may terminate your use of the App at any time by revoking access in your{" "}
              <a href="https://www.facebook.com/settings?tab=applications" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Facebook App Settings
              </a>.
            </p>
            <p className="mt-3">
              We may suspend or terminate your access to the App at any time, with or without notice, if we reasonably believe you have violated these Terms, Meta&rsquo;s policies, or applicable law, or if required to comply with a legal obligation. Sections 10 (Intellectual Property), 11 (Disclaimers), 12 (Limitation of Liability), 13 (Indemnification), and 16 (Governing Law) survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">15. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be communicated via email to registered users or via a notice within the App. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the App after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">16. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which Scale Science is established, without regard to conflict-of-laws principles. Any dispute arising out of or related to these Terms or the App shall be resolved in the competent courts of that jurisdiction, unless otherwise required by applicable consumer protection law.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">17. Miscellaneous</h2>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Entire agreement", "These Terms, together with the Privacy Policy, constitute the entire agreement between you and Scale Science regarding the App."],
                ["Severability", "If any provision of these Terms is held unenforceable, the remaining provisions will remain in full force and effect."],
                ["No waiver", "Our failure to enforce any provision does not constitute a waiver of that provision or any other."],
                ["Assignment", "You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">18. Contact</h2>
            <p>
              For any questions regarding these Terms, contact:
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
