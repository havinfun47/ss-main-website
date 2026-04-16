const rows = [
  {
    category: "Talent",
    them: "Handed off to a junior after the pitch",
    us: "Senior strategists on your account from day one",
  },
  {
    category: "Creative",
    them: "Generic templates recycled across clients",
    us: "Research-driven creative built for your customer",
  },
  {
    category: "Landing Pages",
    them: "Traffic sent to your existing homepage",
    us: "Custom pages engineered per ad angle",
  },
  {
    category: "Reporting",
    them: "Vanity metrics in a monthly PDF",
    us: "Real-time data, weekly strategy reviews",
  },
  {
    category: "Accountability",
    them: "\"It's the algorithm\" when results slip",
    us: "We own the outcome — full stop",
  },
];

export default function Comparison() {
  return (
    <section className="py-24 px-6 bg-bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            Why Scale Science
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-primary">
            Not all agencies are equal.
          </h2>
        </div>

        <div className="border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 border-b border-border">
            <div className="p-5 text-xs text-tertiary uppercase tracking-widest font-medium" />
            <div className="p-5 text-center border-l border-border">
              <p className="text-secondary text-sm font-medium">Typical Agency</p>
            </div>
            <div className="p-5 text-center border-l border-border bg-bg">
              <p className="text-primary text-sm font-semibold">Scale Science</p>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.category}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="p-5">
                <p className="text-secondary text-xs uppercase tracking-widest font-medium">{row.category}</p>
              </div>
              <div className="p-5 border-l border-border flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0 text-tertiary" fill="none">
                  <path d="M3 3l8 8M11 3L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p className="text-secondary text-sm">{row.them}</p>
              </div>
              <div className="p-5 border-l border-border bg-bg flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0 text-accent" fill="none">
                  <path d="M2 7l4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-primary text-sm font-medium">{row.us}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
