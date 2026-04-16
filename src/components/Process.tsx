import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "List Growth",
    description:
      "Turning cold visitors into HOT subscribers through the use of high-converting sign up forms so you don't waste your precious acquisition budget.",
  },
  {
    number: "02",
    title: "Conversion",
    description:
      "Automate the entire customer life journey, from awareness to loyalty. Turning first-time visitors into first-time buyers.",
  },
  {
    number: "03",
    title: "Retention",
    description:
      "We'll then work towards turning buyers into life long fans through valuable content. This will increase retention, and overall brand perceived value.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6" id="process">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-4">
            Our simple 3-step process to skyrocket your business.
          </h2>
          <p className="text-secondary">
            From supercharging your list to first-time conversions and life long
            retention.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border z-0" />
              )}
              <div className="border border-border rounded-xl p-8 bg-bg-card relative z-10 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-tertiary text-xs font-mono">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center text-secondary text-xs">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
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
