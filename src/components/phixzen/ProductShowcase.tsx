import { Check } from "lucide-react";
import { ProductBottle } from "./ProductBottle.tsx";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const products = [
  {
    variant: "aqua" as const,
    name: "Phixzen Aqua-Clear",
    type: "Anti Fog Spray",
    tagline: "Instant clarity, find calm.",
    desc: "A premium anti-fog lens essential designed to help reduce fog buildup on glass and plastic surfaces.",
    bestFor: [
      "Eyeglasses",
      "Sunglasses",
      "Safety Goggles",
      "Swim Goggles",
      "Scuba Masks",
      "Ski Goggles",
      "Helmet Visors",
      "Bathroom Mirrors",
      "Car Windshields",
    ],
    benefits: [
      "Helps prevent fogging",
      "Streak-free finish",
      "Works on glass and plastic surfaces",
      "Compact and easy to carry",
    ],
    accent: "text-primary-glow",
  },
  {
    variant: "smooth" as const,
    name: "Phixzen Anti Wrinkle Spray",
    type: "Anti Wrinkle Spray",
    tagline: "Instant crease recovery.",
    desc: "A quick fabric refresher designed to smooth visible creases and refresh clothing without ironing.",
    bestFor: [
      "Shirts",
      "Uniforms",
      "Travel Clothing",
      "Synthetic Fabrics",
      "Daily Wear",
      "Office Wear",
      "Quick Touch-ups",
    ],
    benefits: [
      "Helps reduce visible wrinkles",
      "Quick fabric refresh",
      "No iron needed for light creases",
      "Travel-friendly and easy to use",
    ],
    accent: "text-gold",
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Products</span>
          <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
            Two essentials. Endless everyday moments.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Thoughtfully designed sprays for clarity and care — beautifully simple to use.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div className="glass group h-full rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1">
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  <div className="shrink-0 transition-transform duration-500 group-hover:scale-105">
                    <ProductBottle variant={p.variant} label={p.name.replace("Phixzen ", "")} sub={p.type} size="card" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs uppercase tracking-[0.25em] ${p.accent}`}>
                      {p.type}
                    </div>
                    <h3 className="mt-2 font-display text-2xl text-primary">{p.name}</h3>
                    <p className="mt-2 italic text-foreground/70">"{p.tagline}"</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Best for
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.bestFor.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground/75"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Key benefits
                  </div>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className="mt-7 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="#contact">Order {p.name.replace("Phixzen ", "")}</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
