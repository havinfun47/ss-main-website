import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Scale Scientist",
  description: "Terms of service for Scale Scientist, the Meta ads management application by Scale Scientist Inc.",
};

const LAST_UPDATED = "April 20, 2026";
const SUPPORT_EMAIL = "support@scalescientist.com";
const BILLING_EMAIL = "billing@scalescientist.com";
const PRIVACY_EMAIL = "privacy@scalescientist.com";
const SECURITY_EMAIL = "security@scalescientist.com";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-bg-card px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-primary font-bold text-base tracking-tight">
            Scale Scientist
          </Link>
          <span className="text-tertiary text-xs">Terms of Service</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            Legal
          </p>
          <h1 className="text-4xl font-light tracking-tight text-primary mb-3">Terms of Service</h1>
          <p className="text-secondary text-sm">
            <strong className="text-primary font-semibold">Scale Scientist</strong> &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose-custom space-y-10 text-secondary text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">1. Acceptance of These Terms</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of <strong className="text-primary">Scale Scientist</strong> (&ldquo;Scale Scientist,&rdquo; &ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;), operated by Scale Scientist Inc., a company registered in British Columbia, Canada.
            </p>
            <p className="mt-3">
              By authorizing the App via Facebook Login, creating an account, or otherwise accessing the App, you (&ldquo;you,&rdquo; &ldquo;the User&rdquo;) agree to these Terms and to our{" "}
              <Link href="/privacy" className="text-accent hover:text-accent/80 underline underline-offset-2">
                Privacy Policy
              </Link>. If you do not agree, do not authorize or continue to use the App.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">2. Description of the Service</h2>
            <p>
              Scale Scientist is a software product that integrates with Meta&rsquo;s (Facebook and Instagram) Marketing API to help you manage, publish, and optimize Meta advertising campaigns. The App allows you to:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Connect one or more Meta ad accounts via OAuth.",
                "View campaigns, ad sets, ads, and performance metrics.",
                "Create, edit, pause, and optimize campaigns.",
                "Configure rules (“SOPs”) that trigger automated actions based on conditions you define.",
                "Review an audit log of every action the App has taken on your behalf.",
                "Receive AI-assisted optimization recommendations (see Section 8).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              You remain solely responsible for your advertising activity, including compliance with Meta&rsquo;s advertising policies and applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">3. Eligibility</h2>
            <p>To use the App you must:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Be at least 18 years of age and legally capable of entering into a binding contract.",
                "Be an authorized representative of the business whose Meta ad account(s) you intend to connect.",
                "Have an active Meta (Facebook) account and access to the ad accounts you wish to manage.",
                "Comply with Meta's Platform Terms, Advertising Standards, and Community Standards.",
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
              You may not use the App if you are a competitor accessing it for the purpose of building a competing product, or if you are on any government sanctions list applicable to our operations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">4. Account and Authorization</h2>
            <ul className="space-y-2 list-none">
              {[
                <>You grant the App access to your Meta data through Facebook Login. You may revoke this access at any time via{" "}
                  <a href="https://www.facebook.com/settings?tab=business_tools" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                    Facebook Business Integrations
                  </a>.
                </>,
                "You are responsible for the security of your Meta credentials and for all activity that occurs under your authenticated session.",
                <>If you suspect unauthorized use of your account, you must notify us promptly at{" "}
                  <a href={`mailto:${SECURITY_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                    {SECURITY_EMAIL}
                  </a>.
                </>,
                "We may require additional verification steps (including proof of authority over an ad account) before enabling certain features.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">5. User Responsibilities</h2>
            <p>You agree that you will:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Comply with all applicable laws, regulations, and industry codes of your jurisdiction and any jurisdiction in which your ads are delivered.",
                "Comply at all times with Meta's Platform Terms, Advertising Standards, Community Standards, and any other Meta policies applicable to your use of Meta's APIs.",
                "Advertise only legal products, services, and content, and ensure your ad creative is truthful and not misleading.",
                "Obtain and maintain all consents, authorizations, and rights necessary for the content, targeting, and conversion data you use in your ads.",
                "Not use the App to violate the rights of any person or entity, including intellectual property and privacy rights.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              You acknowledge that Scale Scientist executes actions on your behalf based on the rules you configure, and that you are solely responsible for reviewing those rules and the outcomes they produce.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">6. Prohibited Conduct</h2>
            <p>You will not:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Reverse engineer, decompile, or attempt to extract the source code of the App, except to the extent such restriction is prohibited by applicable law.",
                "Probe, scan, or test the vulnerability of the App, or breach or circumvent any security or authentication measures.",
                "Scrape, harvest, or otherwise collect data from the App for any purpose other than managing your own ad accounts.",
                "Resell, sublicense, or share access to the App with any third party.",
                "Use the App to send spam, phishing messages, or any form of unsolicited or harassing communication.",
                "Use the App to serve ads that violate Meta's Advertising Standards.",
                "Impersonate any person or entity, or misrepresent your affiliation with any person or entity.",
                "Use the App to build a competing product or service.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Violation of this Section may result in immediate suspension or termination of your account.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">7. Meta Platform Compliance</h2>
            <p>
              The App uses Meta&rsquo;s APIs and is subject to Meta&rsquo;s Platform Terms and Developer Policies. Your access to Meta data through the App is also subject to Meta&rsquo;s policies. You agree that:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                <>Your use of Meta data through the App is limited to the purposes described in the{" "}
                  <Link href="/privacy" className="text-accent hover:text-accent/80 underline underline-offset-2">
                    Privacy Policy
                  </Link>.
                </>,
                "You will not use Meta data in any manner inconsistent with Meta's terms.",
                "Meta may suspend or revoke the App's access to its APIs at any time, which may interrupt or disable features.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <strong className="text-primary">Disclaimer of Affiliation.</strong> Scale Scientist is an independent product and is <strong className="text-primary">not</strong> affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. &ldquo;Meta,&rdquo; &ldquo;Facebook,&rdquo; &ldquo;Instagram,&rdquo; and related marks are trademarks of Meta Platforms, Inc.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">8. AI-Assisted Recommendations</h2>
            <p>
              The App uses Anthropic&rsquo;s Claude AI to generate optimization recommendations and, where you have explicitly enabled automated rules, to trigger actions on your ad accounts.
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                <>AI-generated outputs may be <strong className="text-primary">incomplete, inaccurate, or suboptimal</strong> and must be reviewed by you.</>,
                "You are solely responsible for every automated action taken under a rule you have enabled, including its effect on ad spend and campaign performance.",
                "We make no performance guarantee of any kind (return on ad spend, conversions, reach, engagement, or otherwise).",
                "You may disable AI features and automated rules at any time from within the App.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">9. Third-Party Services</h2>
            <p>
              The App integrates with third-party services, including Meta Platforms, Inc. and Anthropic PBC, and is hosted on infrastructure provided by Vercel Inc. Your use of those services is also subject to the respective provider&rsquo;s terms. Scale Scientist is not responsible for the availability, accuracy, or behavior of any third-party service, and disruptions to those services may affect the App.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">10. Fees, Billing, and Cancellation</h2>
            <ul className="space-y-2 list-none">
              {[
                <><strong className="text-primary">Subscription fees</strong> (where applicable) are disclosed at signup and billed in advance on a recurring basis in the currency shown at checkout.</>,
                <><strong className="text-primary">Ad spend is paid directly to Meta</strong> and is not a charge from Scale Scientist. Scale Scientist has no control over, and does not take responsibility for, amounts you spend on Meta ads.</>,
                <><strong className="text-primary">Price changes</strong> require at least 30 days&rsquo; notice to you via email or in-app notice before taking effect. Continued use after the notice period constitutes acceptance of the new pricing.</>,
                <><strong className="text-primary">Cancellation.</strong> You may cancel your subscription at any time from within the App or by emailing{" "}
                  <a href={`mailto:${BILLING_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                    {BILLING_EMAIL}
                  </a>. Cancellation takes effect at the end of the current billing period, and you retain access through that period.
                </>,
                <><strong className="text-primary">Refunds.</strong> Fees already paid are non-refundable except where refunds are required by applicable consumer protection law.</>,
                <><strong className="text-primary">Account data after cancellation</strong> is retained and deleted according to Section 7 of our{" "}
                  <Link href="/privacy" className="text-accent hover:text-accent/80 underline underline-offset-2">
                    Privacy Policy
                  </Link>.
                </>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">11. Intellectual Property</h2>
            <ul className="space-y-2 list-none">
              {[
                "The App, including its software, interfaces, documentation, and design, is owned by Scale Scientist Inc. and protected by applicable intellectual property laws. These Terms grant you a limited, non-exclusive, non-transferable, revocable license to use the App in accordance with these Terms.",
                "You retain all rights to your ad creative, campaign configurations, rule definitions, and other content you supply or that we access on your behalf (“User Content”). You grant Scale Scientist a worldwide, non-exclusive, royalty-free license to host, process, and display User Content solely to operate the App for you.",
                "Feedback you voluntarily provide may be used by us without restriction and without obligation to you.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">12. Disclaimer of Warranties</h2>
            <p>
              <strong className="text-primary">THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</strong>
            </p>
            <p className="mt-3">Without limiting the foregoing, Scale Scientist does not warrant that:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "The App will be uninterrupted, error-free, secure, or free of harmful components.",
                "Any particular advertising result will be achieved.",
                "Meta's APIs will remain available, unchanged, or compatible with the App.",
                "AI-generated recommendations will be accurate or appropriate for your situation.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Some jurisdictions do not allow the exclusion of implied warranties; in those jurisdictions, the above disclaimer applies to the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">13. Limitation of Liability</h2>
            <p>
              <strong className="text-primary">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW</strong>, Scale Scientist Inc., its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including but not limited to damages for lost profits, lost revenue, lost goodwill, lost data, or wasted advertising spend, whether arising in contract, tort, or otherwise, and whether or not foreseeable.
            </p>
            <p className="mt-3">
              The aggregate liability of Scale Scientist to you for any claim arising out of or relating to the App or these Terms shall not exceed the greater of:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                <span>(a) the fees you paid to Scale Scientist in the twelve (12) months preceding the event giving rise to the claim; or</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                <span>(b) one hundred Canadian dollars (CAD $100).</span>
              </li>
            </ul>
            <p className="mt-3">
              Nothing in these Terms limits liability that cannot be limited by law, including for fraud, gross negligence, or willful misconduct.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">14. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Scale Scientist Inc. and its officers, directors, employees, and agents from and against any and all claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising out of or relating to: (a) your use of the App; (b) the content of your advertisements and targeting; (c) your violation of these Terms or any applicable law or Meta policy; or (d) your infringement of any third-party right.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">15. Termination</h2>
            <ul className="space-y-2 list-none">
              {[
                <><strong className="text-primary">By you:</strong> you may terminate at any time by cancelling your subscription and revoking the App&rsquo;s access via{" "}
                  <a href="https://www.facebook.com/settings?tab=business_tools" className="text-accent hover:text-accent/80 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                    Facebook Business Integrations
                  </a>.
                </>,
                <><strong className="text-primary">By us:</strong> we may suspend or terminate your access at any time, with or without notice, if we reasonably believe you have violated these Terms, Meta&rsquo;s policies, or applicable law, or if required by law or Meta.</>,
                <><strong className="text-primary">Effect of termination:</strong> your right to use the App ends immediately. Provisions that by their nature should survive termination (including Sections 11, 12, 13, 14, 17, and 18) will survive.</>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">16. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be communicated via email to registered users or via a prominent in-app notice at least 14 days before taking effect. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the App after changes take effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">17. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the <strong className="text-primary">Province of British Columbia, Canada</strong> and the federal laws of Canada applicable therein, without regard to conflict of laws principles.
            </p>
            <p className="mt-3">
              Any dispute, controversy, or claim arising out of or relating to these Terms or the App shall be brought exclusively in the courts of the Province of British Columbia located in Vancouver, and you and Scale Scientist hereby consent to the personal jurisdiction and venue of those courts. Nothing in this Section prevents either party from seeking injunctive or equitable relief in any court of competent jurisdiction to protect intellectual property or confidential information.
            </p>
            <p className="mt-3">
              If you are a consumer, mandatory consumer protection laws of your place of residence may apply in addition to the above.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">18. Miscellaneous</h2>
            <ul className="mt-3 space-y-2 list-none">
              {[
                ["Entire agreement", "These Terms, together with the Privacy Policy and any policies referenced herein, constitute the entire agreement between you and Scale Scientist regarding the App."],
                ["Severability", "If any provision of these Terms is held unenforceable, the remaining provisions remain in full force and effect."],
                ["No waiver", "Our failure to enforce any provision is not a waiver of our right to do so later."],
                ["Assignment", "You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, reorganization, or sale of assets."],
                ["Notices", "Notices to you may be sent to the email address associated with your account; notices to us must be sent to the address in Section 19."],
                ["Force majeure", "Neither party is liable for failure to perform due to events outside its reasonable control, including acts of God, war, terrorism, labor disputes, internet or utility outages, or acts of government."],
                ["Relationship", "Nothing in these Terms creates a partnership, employment, agency, or joint venture between the parties."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  <span><strong className="text-primary font-medium">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-primary mb-3">19. Contact</h2>
            <div className="mt-4 border border-border rounded-lg p-5 bg-bg-card">
              <p className="font-semibold text-primary">Scale Scientist Inc.</p>
              <p className="text-tertiary text-xs mt-1">British Columbia, Canada</p>
              <p className="mt-3 space-y-1">
                <span className="block">
                  General:{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                    {SUPPORT_EMAIL}
                  </a>
                </span>
                <span className="block">
                  Billing:{" "}
                  <a href={`mailto:${BILLING_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                    {BILLING_EMAIL}
                  </a>
                </span>
                <span className="block">
                  Legal &amp; privacy:{" "}
                  <a href={`mailto:${PRIVACY_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                    {PRIVACY_EMAIL}
                  </a>
                </span>
                <span className="block">
                  Security:{" "}
                  <a href={`mailto:${SECURITY_EMAIL}`} className="text-accent hover:text-accent/80 underline underline-offset-2">
                    {SECURITY_EMAIL}
                  </a>
                </span>
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
