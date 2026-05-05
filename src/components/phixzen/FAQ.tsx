import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What is Phixzen Aqua-Clear used for?",
    a: "Aqua-Clear is a premium anti-fog spray designed to help reduce fog buildup on glass and plastic surfaces such as eyeglasses, goggles, mirrors, helmet visors and car windshields.",
  },
  {
    q: "Can Aqua-Clear be used on glasses and goggles?",
    a: "Yes. Aqua-Clear is designed for everyday use on eyeglasses, sunglasses, safety goggles, swim goggles, scuba masks and ski goggles.",
  },
  {
    q: "Does Aqua-Clear leave streaks?",
    a: "When applied as directed, clean, spray, then buff with a microfiber cloth. Aqua-Clear is designed to dry to a clean, streak free finish.",
  },
  {
    q: "What is Phixzen Anti Wrinkle Spray used for?",
    a: "Anti Wrinkle Spray is a quick fabric refresher designed to relax light creases and refresh clothing without ironing.",
  },
  {
    q: "Can Anti Wrinkle Spray replace ironing?",
    a: "It is designed for light creases and quick touch-ups. Heavy or set in wrinkles may still need a traditional iron, but Anti Wrinkle Spray is perfect for daily refreshes and travel.",
  },
  {
    q: "Is Anti Wrinkle Spray safe for all fabrics?",
    a: "We recommend testing on a small hidden area first. It is designed for everyday fabrics such as shirts, uniforms, synthetic blends and travel clothing.",
  },
  {
    q: "Are the products travel friendly?",
    a: "Yes, both bottles are compact and designed for daily life on the go, slipping easily into a bag, drawer or desk.",
  },
  {
    q: "Where are Phixzen products made?",
    a: "Phixzen is proudly made in Pakistan as a premium local brand crafted with refined, modern care.",
  },
];

export function FAQ() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">FAQ</span>
          <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Accordion
            type="single"
            collapsible
            className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`q-${i}`}
                className={`px-6 ${i === faqs.length - 1 ? "border-0" : "border-b border-border"}`}
              >
                <AccordionTrigger className="py-5 text-left font-display text-base text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
