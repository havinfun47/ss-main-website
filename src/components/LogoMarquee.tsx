const brands = [
  "Sepura Home",
  "myco:soul",
  "Wick of Hope",
  "The Feel Bar",
  "Mattress On Demand",
  "StickerFab",
  "Primitive Star Quilt",
  "Blue Scorpion",
  "Scattered Kind",
  "Mr. Derk",
];

export default function LogoMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-10 border-y border-border overflow-hidden bg-bg-card">
      <p className="text-center text-tertiary text-xs uppercase tracking-widest mb-6 font-medium">
        Trusted by 6-7 figure eCom brands
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
