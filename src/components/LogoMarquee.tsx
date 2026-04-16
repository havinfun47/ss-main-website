const brands = [
  "Wick of Hope",
  "The Feel Bar",
  "Mattress On Demand",
  "StickerFab",
  "Primitive Star Quilt",
  "Blue Scorpion",
  "Scattered Kind",
  "Mr. Derk",
  "7-Figure Brand",
  "Supplement Co.",
];

export default function LogoMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <p className="text-center text-secondary text-xs uppercase tracking-widest mb-8">
        Trusted By Top eCommerce Brands
      </p>
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap marquee-track">
          {doubled.map((brand, i) => (
            <span
              key={i}
              className="text-tertiary font-medium text-sm shrink-0 px-4"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
