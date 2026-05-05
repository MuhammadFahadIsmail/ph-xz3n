import {
  Zap,
  Package,
  Timer,
  Sparkles,
  Plane,
  MapPin,
  CalendarDays,
  SprayCan,
} from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  { icon: Zap, title: "Everyday Convenience", desc: "Built for the moments that matter — fast, easy, ready when you are." },
  { icon: Package, title: "Compact Bottle Design", desc: "A premium silhouette that fits in any bag, drawer, or desk." },
  { icon: Timer, title: "Fast Application", desc: "Spray, wipe or smooth — done in seconds." },
  { icon: Sparkles, title: "Clean Finish", desc: "Designed to leave no streaks, residue, or hassle." },
  { icon: Plane, title: "Travel Friendly", desc: "Lightweight, sealed, and ready for the road." },
  { icon: MapPin, title: "Premium Local Brand", desc: "Proudly made in Pakistan with refined modern care." },
  { icon: CalendarDays, title: "Designed for Daily Routines", desc: "Made to slot effortlessly into your everyday." },
  { icon: SprayCan, title: "Simple Spray-Based Usage", desc: "No tools, no setup — just a clean, considered spray." },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Benefits</span>
          <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
            Crafted for clarity, comfort and calm.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
