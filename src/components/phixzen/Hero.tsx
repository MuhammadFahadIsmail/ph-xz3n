import { Button } from "@/components/ui/button";
import { ProductBottle } from "./ProductBottle.tsx";
import { Reveal } from "./Reveal";
import { MapPin, Award, Hand, Plane } from "lucide-react";

const badges = [
  { icon: MapPin, label: "Made in Pakistan" },
  { icon: Award, label: "Premium Quality" },
  { icon: Hand, label: "Easy Daily Use" },
  { icon: Plane, label: "Compact & Travel Friendly" },
];

export function Hero() {
  return (
    <section id="home" className="gradient-hero relative overflow-hidden">
      {/* Botanical accents */}
      <svg
        className="pointer-events-none absolute -left-16 top-20 h-72 w-72 text-primary/10"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden
      >
        <path d="M100 10c40 40 60 80 60 110-30 0-70-20-110-60 40-40 80-60 110-60-30 30-50 70-60 110z" />
      </svg>
      <svg
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 text-gold/15"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden
      >
        <circle cx="100" cy="100" r="80" />
      </svg>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary/80 backdrop-blur">
              Premium everyday essentials
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-primary sm:text-5xl md:text-6xl">
              Upgrade your life,
              <br />
              <span className="text-gradient">achieve your zen.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Premium everyday essentials designed for instant clarity, smoothness, and
              calm convenience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-7 text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90"
              >
                <a href="#products">Shop Products</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 bg-transparent px-7 text-primary hover:bg-primary/5"
              >
                <a href="#benefits">Explore Benefits</a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/60 px-3 py-3 backdrop-blur"
                >
                  <b.icon className="h-4 w-4 shrink-0 text-gold" />
                  <span className="text-xs leading-tight text-foreground/80">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-gold/10 blur-3xl" />
              <div className="glass flex flex-col items-center gap-8 rounded-[2.5rem] p-8 sm:flex-row sm:items-end sm:justify-center sm:gap-4">
                  <ProductBottle variant="aqua" label="Aqua-Clear" sub="Anti Fog Spray" size="hero" />
                  <ProductBottle
                    variant="smooth"
                    label="Anti Wrinkle Spray"
                    sub="Anti Wrinkle Spray"
                    size="hero"
                    className="sm:-mb-6"
                  />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
