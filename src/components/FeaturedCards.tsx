import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import about from "@/assets/about.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { FEATURED } from "@/data/site";

const IMAGES = [hero1, hero3, hero2, about];

export function FeaturedCards() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURED.map((card, i) => (
        <article
          key={card.title}
          className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={IMAGES[i % IMAGES.length]}
              alt={card.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 bg-background px-2 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary">
              {card.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-base font-bold leading-snug text-primary">{card.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {card.description}
            </p>
            <Link
              to={card.to}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {card.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
