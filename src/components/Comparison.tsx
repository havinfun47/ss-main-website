const rows = [
  {
    category: "Communication",
    them: "Slow, reactive communication",
    us: "Constant, proactive communication",
  },
  {
    category: "Strategy",
    them: "Single channel approach",
    us: "Omni-channel approach",
  },
  {
    category: "Growth",
    them: "Outdated growth strategies",
    us: "Tailored best-fit solutions",
  },
  {
    category: "Research",
    them: "Lack of industry research",
    us: "Provides industry specific expertise",
  },
  {
    category: "Talent",
    them: "Outsourced to mediocre talent",
    us: "Founders with 5+ years of experience",
  },
];

export default function Comparison() {
  return (
    <section className="py-24 px-6 bg-bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3">
            Why Scale Science
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Not all agencies are created equal.
          </h2>
        </div>

        <div className="border border-border rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-border">
            <div className="p-5 text-xs text-tertiary uppercase tracking-widest" />
            <div className="p-5 text-center border-l border-border">
              <p className="text-secondary text-sm font-medium">Typical Agency</p>
            </div>
            <div className="p-5 text-center border-l border-border bg-bg">
              <p className="text-primary text-sm font-semibold">Scale Science</p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.category}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="p-5">
                <p className="text-secondary text-xs uppercase tracking-widest">
                  {row.category}
                </p>
              </div>
              <div className="p-5 border-l border-border flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="shrink-0 text-tertiary"
                  fill="none"
                >
                  <path
                    d="M3 3l8 8M11 3L3 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-secondary text-sm">{row.them}</p>
              </div>
              <div className="p-5 border-l border-border bg-bg flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="shrink-0 text-primary"
                  fill="none"
                >
                  <path
                    d="M2 7l4 4 6-8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-primary text-sm">{row.us}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
