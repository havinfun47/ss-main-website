import Link from "next/link";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Founder() {
  return (
    <section className="py-24 px-6 bg-bg" id="founder">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-start">
          {/* Photo (renders second on mobile, first on lg via order) */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <figure className="flex flex-col gap-3 max-w-[460px] mx-auto lg:ml-auto lg:mr-0">
              <div
                className="relative w-full overflow-hidden rounded-xl"
                style={{
                  aspectRatio: "4 / 5",
                  backgroundColor: "#EDE9E0",
                  border: "1px solid #E0DDD6",
                  boxShadow: "0 8px 28px rgba(28,28,26,0.08)",
                }}
              >
                <Image
                  src={`${BASE}/images/graydon-founder.png`}
                  alt="Graydon, founder of Scale Science, on a golf course."
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <figcaption className="font-serif italic text-sm text-tertiary text-center lg:text-left leading-relaxed">
                Luckily, I&rsquo;m better at scaling Meta accounts than I am at golf.
              </figcaption>
            </figure>
          </div>

          {/* Copy */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-6">
            <p
              className="text-xs font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              Who&rsquo;s behind this
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary font-normal tracking-tight">
              Hi, I&rsquo;m Graydon. I built Scale Science because I watched a top&#8209;tier
              agency{" "}
              <em className="italic text-accent">nearly sink the brand I was working for.</em>
            </h2>

            <div className="flex flex-col gap-5 text-secondary leading-relaxed text-base md:text-lg">
              <p>
                Before Scale Science, I was the in&#8209;house marketing lead at Sepura Home &mdash;
                a kitchen brand priced at 2&times; the market leader. Before me, they&rsquo;d handed
                their Meta account to one of the largest agencies in Canada. Six figures of ad spend
                later, ROAS was sitting at 1.03 and MER was at 97%. The brand was burning money on
                every order.
              </p>
              <p>
                They fired the agency and gave me the keys. Six months later, ROAS was at{" "}
                <span className="text-primary font-semibold">3.44 (+234%)</span>, nCPA was down 71%,
                MER down to 31% and the same creative I&rsquo;d built for ads crossed{" "}
                <span className="text-primary font-semibold">100M organic views</span> &mdash;
                including a single reel that hit 27M.
              </p>
              <p>
                That experience is the entire reason Scale Science exists. The problem isn&rsquo;t
                that good DTC brands can&rsquo;t grow on Meta. It&rsquo;s that most agencies are
                juggling 30 accounts and treat every brand like a template. Scale Science takes a
                small handful of clients per quarter, so I&rsquo;m personally in every account every
                week.
              </p>
              <p>
                If you&rsquo;re a DTC founder spending at least $15k/month on Meta &mdash; funded,
                bootstrapped, doesn&rsquo;t matter, the budget does &mdash; and you&rsquo;ve felt
                that &ldquo;I&rsquo;m paying an agency to make this worse&rdquo; feeling,
                that&rsquo;s exactly the problem I&rsquo;m built to solve.
              </p>
            </div>

            <div className="mt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Apply for a free Meta funnel audit
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
