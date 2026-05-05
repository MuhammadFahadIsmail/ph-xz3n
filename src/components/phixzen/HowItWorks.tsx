import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "./Reveal";
import { Sparkles, Droplets, Hand } from "lucide-react";

const aqua = [
  { n: 1, title: "Clean", desc: "Clean the surface properly to remove dust and debris.", icon: Sparkles },
  { n: 2, title: "Spray", desc: "Spray 1–2 pumps evenly across the surface.", icon: Droplets },
  { n: 3, title: "Buff", desc: "Wipe and buff with a microfiber cloth until dry and clear.", icon: Hand },
];
const smooth = [
  { n: 1, title: "Hang", desc: "Hang the garment or lay the clothing flat.", icon: Sparkles },
  { n: 2, title: "Spray", desc: "Lightly mist the wrinkled area from a short distance.", icon: Droplets },
  { n: 3, title: "Smooth", desc: "Gently tug and smooth the fabric, then let it dry.", icon: Hand },
];

function Steps({ steps }: { steps: typeof aqua }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((s, i) => (
        <Reveal key={s.n} delay={i * 100}>
          <div className="relative h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
            <div className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full bg-gold font-display text-sm text-gold-foreground shadow-md">
              {s.n}
            </div>
            <s.icon className="h-6 w-6 text-primary-glow" />
            <h4 className="mt-4 font-display text-xl text-primary">{s.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">How It Works</span>
          <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
            Three simple steps. Premium results.
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="aqua" className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 rounded-full bg-secondary p-1">
              <TabsTrigger value="aqua" className="rounded-full">
                Aqua-Clear
              </TabsTrigger>
              <TabsTrigger value="smooth" className="rounded-full">
                Anti Wrinkle Spray
              </TabsTrigger>
            </TabsList>
            <TabsContent value="aqua" className="mt-10">
              <Steps steps={aqua} />
            </TabsContent>
            <TabsContent value="smooth" className="mt-10">
              <Steps steps={smooth} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
