import { Sparkles, Instagram, MessageCircle } from "lucide-react";
import phixzenLogo from "../../assets/phixzen-logo.png";

const quick = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how" },
  { label: "Benefits", href: "#benefits" },
  { label: "Safety", href: "#safety" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { Icon: Instagram, href: "https://www.instagram.com/phix.zen", label: "Instagram" },
  { Icon: MessageCircle, href: "https://wa.me/923477450917", label: "WhatsApp" },
  // { Icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={phixzenLogo} alt="Phixzen logo" className="h-9 w-auto object-contain" />
            <span className="font-display text-2xl">Phixzen</span>
          </div>
          <p className="mt-4 max-w-md font-display text-lg italic text-primary-foreground/80">
            "Upgrade your life, achieve your zen."
          </p>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            Premium everyday essentials designed for instant clarity, smoothness and
            calm convenience.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {quick.map((q) => (
              <li key={q.href}>
                <a href={q.href} className="hover:text-gold">
                  {q.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>www.phixzen.com</li>
            <li>info@phixzen.com</li>
            <li>+92 347 7450917</li>
            <li>Islamabad, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-primary-foreground/60 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Phixzen. All rights reserved.</span>
          <span>Made with care in Islamabad, Pakistan.</span>
        </div>
      </div>
    </footer>
  );
}
