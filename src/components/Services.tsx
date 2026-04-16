const services = [
  {
    title: "Email Strategy",
    description:
      "Craft a unique strategy that deeply aligns with your brand's distinct goals. Using data, we ensure your campaigns achieve maximum impact.",
    icon: "✦",
  },
  {
    title: "Optimization",
    description:
      "First impressions matter. Through rigorous A/B tests, analytics, and industry insights, we fine-tune emails for top-tier engagement and conversion rates.",
    icon: "◈",
  },
  {
    title: "UX Design",
    description:
      "Every email is a visual journey. We artfully blend aesthetics with functionality, ensuring that your brand's message leaves a lasting mark.",
    icon: "◉",
  },
  {
    title: "Copywriting",
    description:
      "In the realm of content, our words reign supreme. We expertly weave compelling narratives, persuasive CTAs, and attention-grabbing headlines that captivate and convert.",
    icon: "◎",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-xl">
            Everything you need to dominate email.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-border rounded-xl p-8 bg-bg-card group hover:border-border-subtle transition-colors"
            >
              <div className="text-2xl mb-4 text-secondary">{s.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {s.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
