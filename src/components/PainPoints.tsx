const problems = [
  {
    number: "01",
    title: "Increasing Ad Cost",
    body: "It's tempting to rely on paid ads to keep customers flowing in. It feels like a sure bet—spend money, get traffic. But as competition heats up, the costs skyrocket. You keep paying more without seeing proportionate returns.",
  },
  {
    number: "02",
    title: "Low Conversion",
    body: "It's easy to get traffic, but turning visitors into buyers is another story. Many brands accept low conversion rates, thinking they&apos;ll eventually improve.",
  },
  {
    number: "03",
    title: "Low LTV",
    body: "Many brands are fixated on acquiring new customers, thinking volume equals success. But if those customers don&apos;t stick around or spend more over time, you won't grow.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3">
            What we&apos;ll build for you
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl">
            Snapshot of the backend eCommerce funnel we&apos;re building for you.
          </h2>
        </div>

        {/* Funnel visual */}
        <div className="grid grid-cols-3 gap-px bg-border mb-24 rounded-xl overflow-hidden">
          {["List Growth", "Conversion", "Retention"].map((step, i) => (
            <div key={step} className="bg-bg-card p-8 text-center">
              <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-secondary text-sm mx-auto mb-4">
                {i + 1}
              </div>
              <p className="font-medium text-primary">{step}</p>
            </div>
          ))}
        </div>

        {/* Problems */}
        <div className="mb-8">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3">
            Are you struggling with
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-12 max-w-xl">
            Many eCommerce brands struggle with these issues.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.number}
              className="border border-border rounded-xl p-8 bg-bg-card"
            >
              <span className="text-tertiary text-xs font-mono mb-4 block">
                {p.number}
              </span>
              <h3 className="text-xl font-medium mb-4 text-primary">
                {p.title}
              </h3>
              <p className="text-secondary leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
