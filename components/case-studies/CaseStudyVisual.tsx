import Image from "@/components/ui/SiteImage";
import type { CaseStudy } from "@/lib/content/case-studies";

// Recovered from the site's WordPress media archive. Sector photos are not client evidence.
const media: Record<string, { src: string; alt: string; caption: string; logo?: boolean }> = {
  bakery: { src: "/images/case-studies/bakery.webp", alt: "A decorated cake on a bakery table", caption: "Bakery sector photography" },
  "car-showroom": { src: "/images/case-studies/automotive.webp", alt: "Vehicles displayed in a bright car showroom", caption: "Automotive sector photography" },
  "clothing-business": { src: "/images/case-studies/clothing.webp", alt: "A colourful range of retail accessories", caption: "Ecommerce sector photography" },
  "craft-business": { src: "/images/case-studies/craft.webp", alt: "Handcrafted wooden letter forms", caption: "Craft sector photography" },
  bar: { src: "/images/case-studies/bar.webp", alt: "A spacious restaurant dining room", caption: "Hospitality sector photography" },
  "fine-dining": { src: "/images/case-studies/restaurant.webp", alt: "A restaurant table set for dinner", caption: "Restaurant sector photography" },
  "fleming-verandas": { src: "/images/case-studies/fleming.webp", alt: "Fleming Verandas logo", caption: "Client brand", logo: true },
  "california-accounting": { src: "/images/Services/SEO 2.jpg", alt: "Search results being reviewed on a tablet", caption: "Search marketing illustration" },
  "allied-hands": { src: "/images/case-studies/allied.webp", alt: "A care worker accompanying an older person outdoors", caption: "Care sector photography" },
  "out-out-entry": { src: "/images/case-studies/out-out.webp", alt: "A group enjoying a pool party", caption: "Activity photography" },
};

export function CaseStudyVisual({ study, ratio = "16/10", className = "", frameClassName = "", priority = false, caption = false }: {
  study: CaseStudy;
  ratio?: string;
  className?: string;
  /** Classes for the image frame itself (radius, shadow), e.g. "rounded-none" inside a card. */
  frameClassName?: string;
  priority?: boolean;
  caption?: boolean;
}) {
  const image = media[study.slug];
  return (
    <figure className={className}>
      <div
        style={{ aspectRatio: ratio }}
        className={`image-hover-frame relative overflow-hidden rounded-media ${image.logo ? "bg-inverse" : "bg-soft"} ${frameClassName}`}
      >
        <Image src={image.src} alt={image.alt} fill priority={priority} sizes="(max-width: 767px) 100vw, 60vw" className={image.logo ? "object-contain p-[15%]" : "object-cover"} />
      </div>
      {caption && (
        <figcaption className="mt-4 text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">{image.caption}</figcaption>
      )}
    </figure>
  );
}
