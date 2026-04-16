const phases = [
  {
    number: "01",
    title: "Foundation",
    description: "Lock in KPIs + breakeven ROAS. Connect Shopify, pixel, and tracking. Clean data flow before a dollar is spent.",
    outcome: "Clean foundation",
    highlight: false,
  },
  {
    number: "02",
    title: "Research",
    description: "Customer pains, desires, objections, beliefs. Competitor analysis. Define avatars and core conversion beliefs. Build the monthly testing plan.",
    outcome: "Angles + messaging",
    highlight: false,
  },
  {
    number: "03",
    title: "Build",
    description: "Video + static creative from data-driven briefs. Landing pages per angle. Campaign architecture structured for scale. All launch-ready.",
    outcome: "Creatives ready",
    highlight: false,
  },
  {
    number: "04",
    title: "Launch & Learn",
    description: "Deploy across angles and personas. Collect live data fast. Kill losers before they drain budget. Surface what actually converts.",
    outcome: "Live data",
    highlight: false,
  },
  {
    number: "05",
    title: "Scale",
    description: "Double down on proven angles. More creatives for winners. Evergreen campaigns. New geographies. The flywheel accelerates from here.",
    outcome: "Compounding",
    highlight: true,
  },
];

export default function Process() {
  return (
    <section className="py-20 px-6" id="process" style={{ backgroundColor: "#0F172A" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-accent" style={{ letterSpacing: "0.14em" }}>
              How It Works
            </p>
            <h2 className="text-5xl md:text-6xl leading-tight tracking-tight" style={{ color: "#F1F5F9", fontWeight: 300 }}>
              The EOS{" "}
              <span style={{ fontWeight: 600 }}>Proven Process.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed md:max-w-sm" style={{ color: "#64748B" }}>
            A compounding flywheel — not a one-time setup. Every phase builds on the last so results don&apos;t plateau, they accelerate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0.5">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="flex flex-col gap-4 p-7 rounded-sm"
              style={{
                backgroundColor: phase.highlight ? "#2563EB" : "rgba(255,255,255,0.04)",
                border: phase.highlight ? "none" : "1px solid transparent",
              }}
            >
              <span
                className="text-5xl font-bold leading-none tracking-tight"
                style={{ color: phase.highlight ? "#FFFFFF" : "#2563EB" }}
              >
                {phase.number}
              </span>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-sm font-semibold" style={{ color: phase.highlight ? "#FFFFFF" : "#F1F5F9" }}>
                  {phase.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: phase.highlight ? "rgba(255,255,255,0.7)" : "#64748B" }}>
                  {phase.description}
                </p>
              </div>
              <span
                className="self-start text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm"
                style={{
                  letterSpacing: "0.08em",
                  backgroundColor: phase.highlight ? "rgba(255,255,255,0.2)" : "rgba(37,99,235,0.15)",
                  color: phase.highlight ? "#FFFFFF" : "#2563EB",
                }}
              >
                {phase.outcome}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 overflow-x-auto">
          <div
            className="inline-flex items-center gap-2 px-6 py-4 rounded-sm shrink-0"
            style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest mr-3 whitespace-nowrap" style={{ color: "#475569", letterSpacing: "0.12em" }}>
              Ongoing flywheel
            </span>
            {["Test", "Learn", "Iterate", "Scale"].map((step) => (
              <span key={step} className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap" style={{ color: "#F1F5F9" }}>{step}</span>
                <span className="text-sm" style={{ color: "#2563EB" }}>→</span>
              </span>
            ))}
            <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "#2563EB" }}>Repeat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
