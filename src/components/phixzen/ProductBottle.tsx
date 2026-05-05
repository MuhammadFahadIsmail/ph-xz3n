import antiWrinkleSprayImage from "../../assets/Anti Wrinkle Spray.png";
import aquaClearImage from "../../assets/Aqua Clear Spray.png";

type Size = "hero" | "card" | "feature";

const sizeConfig = {
  hero: {
    wrapper: "h-[360px] w-[260px]",
    imageHeight: "h-[330px]",
    aquaScale: 1.34,
    smoothScale: 1.25,
    aquaY: "-13px",
    smoothY: "-12px",
    shadow: "bottom-2 h-6 w-40",
  },
  card: {
    wrapper: "h-[260px] w-[220px]",
    imageHeight: "h-[250px]",
    aquaScale: 1.35,
    smoothScale: 1.25,
    aquaY: "0px",
    smoothY: "0px",
    shadow: "bottom-2 h-5 w-32",
  },
  feature: {
    wrapper: "h-[280px] w-[220px]",
    imageHeight: "h-[260px]",
    aquaScale: 1.45,
    smoothScale: 1.25,
    aquaY: "0px",
    smoothY: "0px",
    shadow: "bottom-2 h-5 w-32",
  },
} as const;

/**
 * ProductBottle
 * - Uses PNG product assets.
 * - `size` controls placement sizing.
 * - `aquaScale` and `smoothScale` visually enlarge the product inside PNGs
 *   that have transparent canvas/padding.
 */
export function ProductBottle({
  variant,
  label,
  sub,
  className = "",
  size = "card",
}: {
  variant: string;
  label: string;
  sub: string;
  className?: string;
  size?: Size;
}) {
  const normalizedVariant = String(variant).toLowerCase();

  const isAqua =
    normalizedVariant === "aqua" ||
    normalizedVariant.includes("aqua") ||
    normalizedVariant.includes("clear") ||
    normalizedVariant.includes("fog");

  const cfg = sizeConfig[size];

  const imageSrc = isAqua ? aquaClearImage : antiWrinkleSprayImage;
  const scale = isAqua ? cfg.aquaScale : cfg.smoothScale;
  const translateY = isAqua ? cfg.aquaY : cfg.smoothY;

  return (
    <div
      data-placeholder="product-image"
      className={`relative mx-auto flex ${cfg.wrapper} items-center justify-center overflow-visible ${className}`}
      aria-label={`${label} product photo`}
    >
      <div
        className={`absolute ${cfg.shadow} rounded-full bg-foreground/15 blur-xl`}
      />

      <img
        src={imageSrc}
        alt={`${label} product photo`}
        className={`relative z-10 ${cfg.imageHeight} w-auto max-w-none object-contain origin-center drop-shadow-[0_24px_28px_rgba(0,0,0,0.22)]`}
        style={{
          transform: `translateY(${translateY}) scale(${scale})`,
        }}
      />
    </div>
  );
}
