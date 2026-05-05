import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/phixzen/Header";
import { Hero } from "@/components/phixzen/Hero";
import { ProductShowcase } from "@/components/phixzen/ProductShowcase";
import { ProductDetails } from "@/components/phixzen/ProductDetails";
import { HowItWorks } from "@/components/phixzen/HowItWorks";
import { Benefits } from "@/components/phixzen/Benefits";
import { BrandStory } from "@/components/phixzen/BrandStory";
import { Safety } from "@/components/phixzen/Safety";
import { Comparison } from "@/components/phixzen/Comparison";
import { FAQ } from "@/components/phixzen/FAQ";
import { ContactForm } from "@/components/phixzen/ContactForm";
import { Footer } from "@/components/phixzen/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phixzen — Upgrade your life, achieve your zen." },
      {
        name: "description",
        content:
          "Phixzen — premium everyday sprays for instant clarity and smoothness. Aqua-Clear Anti Fog Spray and Anti Wrinkle Spray. Made in Pakistan.",
      },
      { property: "og:title", content: "Phixzen — Premium Everyday Essentials" },
      {
        property: "og:description",
        content:
          "Aqua-Clear Anti Fog Spray and Anti Wrinkle Spray. Designed for instant clarity, smoothness and calm convenience.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <ProductDetails />
        <HowItWorks />
        <Benefits />
        <BrandStory />
        <Safety />
        <Comparison />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
