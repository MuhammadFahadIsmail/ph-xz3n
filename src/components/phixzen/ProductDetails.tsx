import {
  Glasses,
  Eye,
  HardHat,
  RectangleHorizontal,
  Car,
  Shirt,
  Briefcase,
  Plane,
  Layers,
  Building2,
  Wind,
} from "lucide-react";
import { ProductBottle } from "./ProductBottle.tsx";
import { Reveal } from "./Reveal";

const aquaUses = [
  { icon: Glasses, label: "Eyeglasses" },
  { icon: Eye, label: "Goggles" },
  { icon: HardHat, label: "Helmet Visors" },
  { icon: RectangleHorizontal, label: "Mirrors" },
  { icon: Car, label: "Car Windshields" },
];

const smoothUses = [
  { icon: Shirt, label: "Shirts" },
  { icon: Briefcase, label: "Uniforms" },
  { icon: Plane, label: "Travel Outfits" },
  { icon: Layers, label: "Synthetic Fabrics" },
  { icon: Building2, label: "Office Wear" },
  { icon: Wind, label: "Daily Clothing" },
];

function DetailBlock({
  reverse,
  variant,
  label,
  type,
  heading,
  body,
  uses,
}: {
  reverse?: boolean;
  variant: "aqua" | "smooth";
  label: string;
  type: string;
  heading: string;
  body: string[];
  uses: { icon: React.ComponentType<{ className?: string }>; label: string }[];
}) {
  return (
    <div
      className={`grid items-center gap-12 lg:grid-cols-2 ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <div className="glass flex justify-center rounded-[2.5rem] p-10">
          <ProductBottle variant={variant} label={label} sub={type} size="feature" />
        </div>
      </Reveal>
      <Reveal delay={120}>
        <span
          className={`text-xs uppercase tracking-[0.3em] ${
            variant === "aqua" ? "text-primary-glow" : "text-gold"
          }`}
        >
          {type}
        </span>
        <h3 className="mt-3 font-display text-3xl leading-tight text-primary md:text-4xl">
          {heading}
        </h3>
        {body.map((p, i) => (
          <p key={i} className="mt-4 text-muted-foreground">
            {p}
          </p>
        ))}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {uses.map((u) => (
            <div
              key={u.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/60 p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <u.icon className="h-5 w-5" />
              </div>
              <span className="text-xs text-foreground/80">{u.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function ProductDetails() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-24 px-5 md:px-8">
        <DetailBlock
          variant="aqua"
          label="Aqua-Clear"
          type="Anti Fog Spray"
          heading="Clear vision, wherever the day takes you."
          body={[
            "Foggy lenses, mirrors, visors and goggles can quickly reduce comfort and visibility — whether you're driving, working out, or stepping into a humid room.",
            "Aqua-Clear is a simple spray-and-buff solution designed for everyday clarity, helping you keep a clean, streak-free view across glass and plastic surfaces.",
          ]}
          uses={aquaUses}
        />
        <DetailBlock
          reverse
          variant="smooth"
          label="Anti Wrinkle Spray"
          type="Anti Wrinkle Spray"
          heading="Smooth clothes in seconds."
          body={[
            "Creases happen — during travel, storage, school runs, work hours and daily wear. Reaching for an iron isn't always practical.",
            "Anti Wrinkle Spray is a quick mist-and-tug refresher that helps relax light wrinkles and revive the look of your clothing in moments.",
          ]}
          uses={smoothUses}
        />
      </div>
    </section>
  );
}
