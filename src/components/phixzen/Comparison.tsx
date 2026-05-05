import { Reveal } from "./Reveal";

const rows = [
  {
    product: "Aqua-Clear Anti Fog Spray",
    purpose: "Helps reduce fogging",
    bestFor: "Lenses, goggles, mirrors, visors",
    usage: "Clean, spray, buff",
  },
  {
    product: "Anti Wrinkle Spray",
    purpose: "Helps reduce light creases",
    bestFor: "Clothes, uniforms, travel wear",
    usage: "Hang, spray, smooth",
  },
];

export function Comparison() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Compare</span>
          <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
            Choose the spray for your moment.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          {/* Desktop table */}
          <div className="mt-12 hidden overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] md:block">
            <table className="w-full text-left">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  {["Product", "Purpose", "Best For", "Usage"].map((h) => (
                    <th key={h} className="px-6 py-4 text-xs font-semibold uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.product}
                    className={i % 2 ? "bg-secondary/40" : ""}
                  >
                    <td className="px-6 py-5 font-display text-primary">{r.product}</td>
                    <td className="px-6 py-5 text-foreground/80">{r.purpose}</td>
                    <td className="px-6 py-5 text-foreground/80">{r.bestFor}</td>
                    <td className="px-6 py-5 text-foreground/80">{r.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 grid gap-5 md:hidden">
            {rows.map((r) => (
              <div key={r.product} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-lg text-primary">{r.product}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Purpose</dt>
                    <dd className="text-foreground/85">{r.purpose}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Best For</dt>
                    <dd className="text-foreground/85">{r.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Usage</dt>
                    <dd className="text-foreground/85">{r.usage}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
