import { Reveal } from "./Reveal";

export function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</span>
          <h2 className="mt-3 font-display text-3xl text-primary md:text-5xl">Meet Phixzen</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Phixzen creates premium everyday essentials that make daily routines easier,
            cleaner, and calmer. From clear lenses to smoother clothing, our products are
            designed for practical results with a refined, modern feel.
          </p>
          <div className="mx-auto mt-10 h-px w-24 bg-gold/60" />
          <p className="mt-6 font-display text-xl italic text-primary/80">
            "Upgrade your life, achieve your zen."
          </p>
        </Reveal>
      </div>
    </section>
  );
}
