const problems = [
  {
    number: "01",
    title: "Your ROAS is quietly eroding",
    body: "CPMs rise. Creative fatigue sets in every few weeks. You keep spending more each month but returns don't follow. Cost per acquisition climbs and profitability drifts further out of reach.",
  },
  {
    number: "02",
    title: "Your agency handed you off to a junior",
    body: "The pitch was senior. The execution isn't. Generic creative, vague monthly reports, and 'the algorithm changed' when results slip. You're paying for accountability you're not getting.",
  },
  {
    number: "03",
    title: "Your landing pages are leaking revenue",
    body: "Traffic lands on pages that weren't designed to convert. Every ad dollar is either amplified or wasted by where it takes people. Most brands have no idea how much is being left on the table.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 px-6 bg-bg" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            Sound familiar?
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-2xl text-primary tracking-tight">
            Three problems holding most eCom brands back.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {problems.map((p) => (
            <div
              key={p.number}
              className="border border-border rounded-lg p-8 bg-bg-card"
            >
              <span className="text-tertiary text-xs font-mono mb-5 block">{p.number}</span>
              <h3 className="text-base font-semibold mb-3 text-primary leading-snug">{p.title}</h3>
              <p className="text-secondary leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
