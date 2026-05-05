import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";
import phixzenLogo from "../../assets/phixzen-logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#how", label: "How It Works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#safety", label: "Safety" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={phixzenLogo} alt="Phixzen logo" className="h-9 w-auto object-contain" />
          <span className="font-display text-xl tracking-tight text-primary">
            Phixzen
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden rounded-full bg-gold text-gold-foreground hover:bg-gold/90 md:inline-flex"
          >
            <a href="#contact">Order Now</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-8 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-4 w-full rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
                >
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Order Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
