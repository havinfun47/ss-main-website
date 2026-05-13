export default function AgencyFailure() {
  return (
    <section className="py-24 px-6 bg-bg" id="why-agencies-fail">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-semibold uppercase text-accent"
              style={{ letterSpacing: "0.14em" }}
            >
              The real problem
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary font-normal tracking-tight">
              Why most agencies fail brands{" "}
              <em className="italic text-accent">spending $15K+/month on Meta.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col gap-5 text-secondary text-base md:text-lg leading-relaxed">
              <p>
                Most Meta ads agencies run on the same economic model: a senior closes the deal,
                then a junior runs the account.
              </p>
              <p>
                The math only works for the agency if your business is one of 30 accounts the junior
                is juggling. Your business doesn&rsquo;t work that way. You can&rsquo;t be account
                number 27 on someone&rsquo;s spreadsheet and expect compounding growth.
              </p>
              <p>
                Scale Science was built as the structural opposite. A small handful of clients per
                quarter. The senior strategist who pitched you is the same person in your account
                every week. Creative built in&#8209;house by the same team that runs the media
                &mdash; not outsourced to a separate vendor whose work doesn&rsquo;t talk to your
                campaigns. Landing pages built by the same team using the same conversion data.
              </p>
              <p className="text-primary font-semibold">
                One team. No handoffs. No seams where margin leaks out.
              </p>
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-24">
              <blockquote
                className="rounded-xl p-7 md:p-8 flex flex-col gap-4"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0DDD6",
                  boxShadow: "0 1px 2px rgba(28,28,26,0.04), 0 4px 16px rgba(28,28,26,0.06)",
                }}
              >
                <span
                  className="font-serif italic text-accent text-5xl leading-none select-none"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="font-serif italic text-xl md:text-2xl text-primary leading-snug">
                  That &ldquo;I&rsquo;m paying an agency to make this worse&rdquo; feeling? It&rsquo;s
                  not in your head.{" "}
                  <span className="text-accent">It&rsquo;s structural.</span>
                </p>
              </blockquote>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
