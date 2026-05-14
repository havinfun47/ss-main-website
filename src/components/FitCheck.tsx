const fitFor = [
  "DTC ecommerce brands spending $15K+/month on Meta",
  "At least $20k+/month in revenue",
  "Funded or bootstrapped: the budget matters, not the funding source",
  "Founders who want a senior strategist in the account every week",
];

const notFitFor = [
  "Brands spending under $15K/month on Meta (you'd be better off learning how to run your own ads at that stage)",
  "$1M+/month brands looking for a fourth opinion",
  "Service businesses, B2B SaaS, or info products (we're DTC-only)",
  "Brands that want us to optimize ROAS without rebuilding creative and landing pages",
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 mt-1">
      <circle cx="8" cy="8" r="7.25" stroke="#2D5C3F" strokeWidth="1.5" />
      <path
        d="M5 8.3l2.2 2.2L11 6.5"
        stroke="#2D5C3F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 mt-1">
      <circle cx="8" cy="8" r="7.25" stroke="#9A9690" strokeWidth="1.5" />
      <path
        d="M5.5 5.5l5 5M10.5 5.5l-5 5"
        stroke="#9A9690"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FitCheck() {
  return (
    <section className="py-24 px-6 bg-bg" id="fit-check">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-4 mb-12 md:mb-14">
          <p
            className="text-xs font-semibold uppercase text-accent"
            style={{ letterSpacing: "0.14em" }}
          >
            Fit Check
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary font-normal tracking-tight max-w-3xl">
            Who we work with{" "}
            <em className="italic text-accent">(and who we don&rsquo;t).</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div
            className="rounded-xl p-7 md:p-8 flex flex-col gap-5"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E0DDD6",
              boxShadow: "0 1px 2px rgba(28,28,26,0.04)",
            }}
          >
            <h3 className="font-serif text-xl md:text-2xl text-primary font-normal">
              We&rsquo;re built for:
            </h3>
            <ul className="flex flex-col gap-3.5">
              {fitFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-secondary leading-relaxed">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-7 md:p-8 flex flex-col gap-5"
            style={{
              backgroundColor: "#EDE9E0",
              border: "1px solid #E0DDD6",
            }}
          >
            <h3 className="font-serif text-xl md:text-2xl text-primary font-normal">
              We&rsquo;re not the right fit for:
            </h3>
            <ul className="flex flex-col gap-3.5">
              {notFitFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-secondary leading-relaxed">
                  <CrossIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
