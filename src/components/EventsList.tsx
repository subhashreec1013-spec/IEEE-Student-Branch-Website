import { CalendarDays, Clock, MapPin } from "lucide-react";
import about from "@/assets/about.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import events1 from "@/assets/events-1.jpg";
import events2 from "@/assets/events-2.jpg";
import yuvaMegathon from "@/assets/yuva-megathon.png";
import { EVENTS, type EventItem } from "@/data/site";

const CATEGORY_IMAGES: Record<string, string> = {
  Hackathon: yuvaMegathon,
};

const IMAGES = [hero1, hero2, hero3, yuvaMegathon, about];

export function EventsList({ limit }: { limit?: number }) {
  const items: EventItem[] = limit ? EVENTS.slice(0, limit) : EVENTS;

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((event, i) => {
        // First two cards use your new images
        const imageSrc =
          i === 0
            ? events1
            : i === 1
              ? events2
              : event.image ??
                CATEGORY_IMAGES[event.category] ??
                IMAGES[i % IMAGES.length];

        const isHackathon =
          event.category.toLowerCase() === "hackathon";

        const isHero2 = imageSrc === hero2;

        return (
          <article
            key={event.title}
            className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            {/* Event Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-white">
              <img
                src={imageSrc}
                alt={event.title}
                loading="lazy"
                className={`h-full w-full ${
                  isHero2
                    ? "object-contain bg-white"
                    : isHackathon
                      ? "object-cover object-top"
                      : "object-cover"
                } transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Category Badge */}
              <span className="absolute left-0 top-4 bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground">
                {event.category}
              </span>
            </div>

            {/* Event Content */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-bold leading-snug text-primary">
                {event.title}
              </h3>

              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CalendarDays
                    className="h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {event.date}
                </li>

                <li className="flex items-center gap-2">
                  <Clock
                    className="h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {event.time}
                </li>

                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {event.location}
                </li>
              </ul>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {event.description}
              </p>

              <a
                href={event.registerUrl ?? "#register"}
                {...(event.registerUrl?.startsWith("http")
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="mt-5 inline-flex h-11 items-center justify-center rounded-sm bg-primary px-5 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Register Now
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}