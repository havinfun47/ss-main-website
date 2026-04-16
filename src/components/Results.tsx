import Link from "next/link";

const cases = [
  {
    id: "01",
    title: "+$114,000 Per Month In 57 Days",
    industry: "Outdoor Brand",
    description:
      "For an outdoor brand with underperforming email marketing, we implemented lifecycle flows and value-driven campaigns, adding $114k in monthly email-attributed revenue.",
    bullets: [
      "30% increase in campaign revenue",
      "54.30% in email attributed revenue",
      "$137,320 increase in total revenue",
    ],
    stats: [
      { label: "Repeat Purchases", value: "+32%" },
      { label: "Flow Revenue", value: "+108%" },
    ],
  },
  {
    id: "02",
    title: "+$1.5 Million In 6 Months",
    industry: "Men's Accessories",
    description:
      "For a men's accessories brand, we drove $1.5M in email revenue within 6 months, a 170.69% increase from the previous period.",
    bullets: [
      "$800K generated in a single month during BFCM",
      "Increased email opt-in by 182%",
      "99.40% increase in flow revenue",
    ],
    stats: [
      { label: "Email Revenue", value: "+170%" },
      { label: "Flow Revenue", value: "+99%" },
    ],
  },
  {
    id: "03",
    title: "$71K+ In 2 Months",
    industry: "Fashion Drop Brand",
    description:
      "For a fashion drop brand, we introduced a new drop campaign strategy, resulting in $71K in email revenue in less than 2 months of working together.",
    bullets: [
      "31.23% in email attributed revenue",
      "All-time highs in email revenue",
      "Increasing email revenue by $38K",
    ],
    stats: [
      { label: "Returning Customers", value: "+45%" },
      { label: "Campaign Revenue", value: "+115%" },
    ],
  },
  {
    id: "04",
    title: "$54K Increase In Email Revenue",
    industry: "Gummy Brand",
    description:
      "A gummy brand came to us to optimize their flows and campaigns, increasing their email-attributed revenue from $28K to $83K.",
    bullets: [
      "35.96% in email attributed revenue",
      "More time working on their business",
      "2x list growth rate",
    ],
    stats: [
      { label: "Campaign Revenue", value: "+144%" },
      { label: "Flow Revenue", value: "+238%" },
    ],
  },
  {
    id: "05",
    title: "Extra +$498K In 12 Months",
    industry: "Men's Wallets",
    description:
      "A men's wallet brand approached us after facing communication issues with their previous agency. We stepped in and boosted their email-attributed revenue by 41.91%.",
    bullets: [
      "70.75% increase in campaign revenue",
      "41% in email attributed revenue",
      "Savings hours of founder's time",
    ],
    stats: [
      { label: "Repeat Purchases", value: "+15%" },
      { label: "Email Revenue", value: "+41%" },
    ],
  },
  {
    id: "06",
    title: "$39,446 Increase In Email Revenue",
    industry: "Supplement Brand",
    description:
      "A supplement brand approached us due to stagnant growth. We boosted their email-attributed revenue from 29.18% to 42.07%, driving significant results.",
    bullets: [
      "Generating revenue on autopilot",
      "42.07% in email attributed revenue",
      "12 flows covering all customer journey",
    ],
    stats: [
      { label: "List Growth", value: "+107%" },
      { label: "Campaign Revenue", value: "+206%" },
    ],
  },
];

export default function Results() {
  return (
    <section className="py-24 px-6 bg-bg-card" id="results">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3">
            Results
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl mb-4">
            Results speak for themselves.
          </h2>
          <p className="text-secondary max-w-xl leading-relaxed">
            We&apos;ve worked across a number of industries and have achieved some
            incredible results with some incredible people and brands.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div
              key={c.id}
              className="border border-border rounded-xl p-8 bg-bg flex flex-col gap-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-tertiary text-xs font-mono">
                    Results #{c.id}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 text-primary">
                    {c.title}
                  </h3>
                  <span className="text-xs text-secondary">{c.industry}</span>
                </div>
              </div>

              <p className="text-secondary text-sm leading-relaxed">
                {c.description}
              </p>

              <div>
                <p className="text-xs text-secondary uppercase tracking-widest mb-3">
                  After Scale Science:
                </p>
                <ul className="space-y-1.5">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-secondary"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="shrink-0 text-primary"
                      >
                        <path
                          d="M2 7l4 4 6-8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-semibold text-primary">
                      {s.value}
                    </p>
                    <p className="text-xs text-secondary mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className="text-sm text-secondary hover:text-primary transition-colors underline underline-offset-4"
              >
                Book A Strategy Call →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-bg px-7 py-3.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Book A Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
