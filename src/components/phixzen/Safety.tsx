import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldAlert } from "lucide-react";
import { Reveal } from "./Reveal";

const aqua = [
  "External use only",
  "Avoid eye contact",
  "Keep away from children and pets",
  "Store at room temperature in a dry place",
  "Keep away from open flames and high heat",
  "Do not ingest",
];
const smooth = [
  "External fabric use only",
  "Test on a small hidden fabric area first",
  "Avoid spraying directly on skin or eyes",
  "Keep away from children and pets",
  "Store in a cool, dry place",
  "Do not ingest",
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function Safety() {
  return (
    <section id="safety" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Safety</span>
          <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
            Use with care, every day.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Please review the safety guidance for each product before use.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Accordion
            type="single"
            collapsible
            className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]"
            defaultValue="aqua"
          >
            <AccordionItem value="aqua" className="border-b border-border px-6">
              <AccordionTrigger className="py-5 text-left">
                <span className="flex items-center gap-3">
                  <ShieldAlert className="h-5 w-5 text-primary-glow" />
                  <span className="font-display text-lg text-primary">
                    Aqua-Clear Anti Fog Spray — Safety
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <List items={aqua} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="smooth" className="border-0 px-6">
              <AccordionTrigger className="py-5 text-left">
                <span className="flex items-center gap-3">
                  <ShieldAlert className="h-5 w-5 text-gold" />
                  <span className="font-display text-lg text-primary">
                    Anti Wrinkle Spray — Safety
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <List items={smooth} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
