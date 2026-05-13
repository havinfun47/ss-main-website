const phases = [
  {
    number: "01",
    title: "Set the breakeven number",
    description: "Lock in target KPIs and breakeven ROAS for your specific unit economics. Connect Shopify, pixel, and tracking. Clean data flow before a dollar is spent. Every decision downstream depends on knowing what \"winning\" actually means for your account.",
    outcome: "Clean foundation",
    highlight: false,
  },
  {
    number: "02",
    title: "Map the beliefs your customer needs to hold",
    description: "Customer pains, desires, objections, conversion beliefs. Competitor teardown. We define the avatars and the 6 beliefs that have to be in place before someone clicks \"buy,\" then build the monthly testing plan around them.",
    outcome: "Angles + messaging",
    highlight: false,
  },
  {
    number: "03",
    title: "One angle = one ad = one landing page",
    description: "Video and static creative from belief-driven briefs. A dedicated landing page for every angle. Sending three different ads to the same generic homepage is how conversion rates die. Campaign architecture structured for scale.",
    outcome: "Creatives ready",
    highlight: false,
  },
  {
    number: "04",
    title: "Kill losers before they drain budget",
    description: "Deploy across angles and personas. Collect live data fast. We make kill decisions early so spend concentrates on what's working, not on what we hoped would work.",
    outcome: "Live data",
    highlight: false,
  },
  {
    number: "05",
    title: "Compound the winners",
    description: "Double down on proven angles. More creatives in the winning direction. Evergreen campaigns layered on top of the testing engine. New geographies once the home market is locked. This is the phase that 99% of agencies never reach because their accounts plateau in step 4.",
    outcome: "Compounding",
    highlight: true,
  },
];

export default function Process() {
  return (
    <section className="py-20 px-6 bg-bg-dark" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-accent" style={{ letterSpacing: "0.14em" }}>
              How It Works
            </p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight tracking-tight text-bg font-normal">
              The Scale Science{" "}
              <span className="font-serif italic text-accent">Growth System.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed md:max-w-sm text-secondary">
            A compounding flywheel, not a one-time setup. Every phase builds on the last so results don&apos;t plateau, they accelerate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0.5">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="flex flex-col gap-4 p-7 rounded-sm"
              style={{
                backgroundColor: phase.highlight ? "#2D5C3F" : "rgba(245,243,238,0.04)",
              }}
            >
              <span
                className="font-serif text-5xl leading-none font-normal"
                style={{ color: phase.highlight ? "rgba(245,243,238,0.9)" : "#2D5C3F" }}
              >
                {phase.number}
              </span>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-sm font-semibold" style={{ color: phase.highlight ? "#F5F3EE" : "#E8E4DC" }}>
                  {phase.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: phase.highlight ? "rgba(245,243,238,0.7)" : "#6B6860" }}>
                  {phase.description}
                </p>
              </div>
              <span
                className="self-start text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm"
                style={{
                  letterSpacing: "0.08em",
                  backgroundColor: phase.highlight ? "rgba(245,243,238,0.15)" : "rgba(45,92,63,0.2)",
                  color: phase.highlight ? "#F5F3EE" : "#2D5C3F",
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
            style={{ backgroundColor: "rgba(245,243,238,0.04)" }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest mr-3 whitespace-nowrap" style={{ color: "#4A4A46", letterSpacing: "0.12em" }}>
              Ongoing flywheel
            </span>
            {["Test", "Learn", "Iterate", "Scale"].map((step) => (
              <span key={step} className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap" style={{ color: "#E8E4DC" }}>{step}</span>
                <span className="text-sm text-accent">→</span>
              </span>
            ))}
            <span className="text-sm font-semibold whitespace-nowrap text-accent">Repeat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
