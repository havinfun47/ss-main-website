const testimonials = [
  {
    quote:
      "The creative is outstanding and completely on brand. We've seen a noticeable improvement in conversion rates and revenue since working with Scale Science.",
    name: "Andy Theng",
    title: "Co-Founder at Wick of Hope",
  },
  {
    quote:
      "We go to them for everything eCommerce and growth-related. They're proactive, data-driven, and they genuinely understand our customers better than most agencies we've worked with.",
    name: "Mike Trupiano",
    title: "CEO & Founder at The Feel Bar",
  },
  {
    quote:
      "Working with Scale Science transformed our paid acquisition completely. The results have been outstanding and the communication is always proactive.",
    name: "Anthony Campos",
    title: "CEO & Founder at Mattress On Demand",
  },
  {
    quote:
      "They brought a level of strategic rigor we hadn't seen from any previous agency. Our ROAS and customer acquisition costs are the best they've ever been.",
    name: "Ralph Crescenzo",
    title: "Director of eCommerce & Digital Operations",
  },
  {
    quote:
      "Within 60 days we were seeing revenue numbers we thought were impossible for our brand size. The funnel they built just works.",
    name: "Chris R.",
    title: "Founder at StickerFab",
  },
  {
    quote:
      "Would absolutely recommend Scale Science to any brand serious about scaling profitably. They do what they say they'll do — which is rarer than it should be.",
    name: "Jacki Alcorn",
    title: "Owner at Primitive Star Quilt",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-bg-card" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-4">
            Don&apos;t take our word for it.
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Founders and operators who&apos;ve been through bad agencies before
            — and know the difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-border rounded-xl p-6 bg-bg flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#fcfcfa"
                  >
                    <path d="M7 1l1.545 3.09 3.455.5-2.5 2.41.59 3.41L7 8.75l-3.09 1.66.59-3.41L2 4.59l3.455-.5L7 1z" />
                  </svg>
                ))}
              </div>

              <p className="text-secondary text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-3 border-t border-border">
                <p className="text-primary text-sm font-medium">{t.name}</p>
                <p className="text-tertiary text-xs mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
