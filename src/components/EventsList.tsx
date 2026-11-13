<<<<<<< HEAD
import { useState } from "react";
import { CalendarDays, Clock, MapPin, ZoomIn, Download, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
=======
import { CalendarDays, Clock, MapPin } from "lucide-react";
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
import about from "@/assets/about.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
import events1 from "@/assets/events-1.jpg";
import events2 from "@/assets/events-2.jpg";
import yuvaMegathon from "@/assets/yuva-megathon.png";
import epicsWheelchair from "@/assets/epics-wheelchair.png";
<<<<<<< HEAD
import engineerToAdmin from "@/assets/event-engineer-to-admin.jpg";
import researchRoute from "@/assets/event-research-route.jpg";
import inaugurationPoster from "@/assets/inauguration-poster.jpg";
import { EVENTS, type EventItem } from "@/data/site";

const CATEGORY_IMAGES: Record<string, string> = {
  "Upcoming Event": inaugurationPoster,
  "Public service": engineerToAdmin,
  "IEEE Research Route": researchRoute,
=======
import { EVENTS, type EventItem } from "@/data/site";

const CATEGORY_IMAGES: Record<string, string> = {
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
  Hackathon: yuvaMegathon,
  "IEEE EPICS": epicsWheelchair,
};

const IMAGES = [hero1, hero2, hero3, yuvaMegathon, about];

export function EventsList({ limit }: { limit?: number }) {
<<<<<<< HEAD
  const [selectedEvent, setSelectedEvent] = useState<{
    event: EventItem;
    imageSrc: string;
  } | null>(null);

  const items: EventItem[] = limit ? EVENTS.slice(0, limit) : EVENTS;

  return (
    <div
      className={`mt-10 ${
        items.length === 1 ? "max-w-md sm:max-w-lg" : "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((event, i) => {
        // Use category-specific poster images first, then fall back to numbered/generic images
        const imageSrc =
          CATEGORY_IMAGES[event.category] ??
          event.image ??
          (i === 2 ? events1 : i === 3 ? events2 : IMAGES[i % IMAGES.length]);
=======
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
        const isEpics = imageSrc === epicsWheelchair;
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73

        return (
          <article
            key={event.title}
<<<<<<< HEAD
            className="group flex flex-col h-full overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            {/* Clickable Event Poster / Image */}
            <div
              onClick={() => setSelectedEvent({ event, imageSrc })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedEvent({ event, imageSrc })}
              className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100/90 dark:bg-slate-900/50 p-3 flex items-center justify-center cursor-pointer group/poster border-b border-border"
              title="Click to view full clear poster & details"
            >
=======
            className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            {/* Event Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-white">
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
              <img
                src={imageSrc}
                alt={event.title}
                loading="lazy"
<<<<<<< HEAD
                className="h-full w-full object-contain drop-shadow-xs transition-transform duration-500 group-hover/poster:scale-105"
              />

              {/* Category Badge */}
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded bg-primary/95 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-primary-foreground shadow">
                {event.category}
              </span>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-200 group-hover/poster:opacity-100 p-4 text-center text-primary-foreground backdrop-blur-xs">
                <ZoomIn className="h-8 w-8 text-accent drop-shadow mb-1" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Click to View Clear Poster
                </span>
                <span className="text-[0.65rem] text-primary-foreground/80 mt-0.5">
                  High-definition view & full details
                </span>
              </div>
            </div>

            {/* Event Content */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h3 className="text-base font-bold leading-snug text-primary">{event.title}</h3>

                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {event.date}
                  </li>

                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {event.time}
                  </li>

                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {event.location}
                  </li>
                </ul>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </div>

              {/* Action bar like News page */}
              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedEvent({ event, imageSrc })}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent underline-offset-4 hover:text-primary hover:underline cursor-pointer focus-visible:outline-2 focus-visible:outline-ring"
                >
                  View Details & Poster
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>

                {event.pdfUrl && (
                  <a
                    href={event.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-muted-foreground hover:text-accent flex items-center gap-1"
                    title="Download Original PDF"
                  >
                    <Download className="h-3.5 w-3.5" />
                    PDF
                  </a>
                )}
              </div>
=======
                className={`h-full w-full ${
                  isHero2 || isEpics
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
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
            </div>
          </article>
        );
      })}
<<<<<<< HEAD

      {/* FULL POSTER & DETAILS LIGHTBOX MODAL */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-5 sm:p-7">
          {selectedEvent && (
            <div>
              <DialogHeader className="mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-sm bg-accent/15 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-accent">
                    {selectedEvent.event.category}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5 text-accent" />
                    {selectedEvent.event.date}
                  </span>
                </div>
                <DialogTitle className="text-xl font-bold leading-tight text-primary sm:text-2xl mt-1">
                  {selectedEvent.event.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                  {selectedEvent.event.description}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 md:grid-cols-12 items-start border-t border-border pt-4">
                {/* Poster Display */}
                <div className="md:col-span-6 flex flex-col items-center">
                  <div className="overflow-hidden rounded-lg border border-border bg-slate-100/90 dark:bg-slate-900/60 shadow-md p-3 w-full flex items-center justify-center">
                    <img
                      src={selectedEvent.imageSrc}
                      alt={selectedEvent.event.title}
                      className="max-h-[62vh] w-auto max-w-full object-contain rounded"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-3 w-full text-xs">
                    <a
                      href={selectedEvent.imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                    >
                      <ZoomIn className="h-3.5 w-3.5" />
                      Open Full Image
                    </a>
                    {selectedEvent.event.pdfUrl && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <a
                          href={selectedEvent.event.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                        >
                          <Download className="h-3.5 w-3.5" />
                          View Original PDF
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="md:col-span-6 space-y-3.5 text-xs">
                  {/* Venue & Time */}
                  <div className="space-y-2 rounded-md border border-border bg-muted/40 p-3.5">
                    <div className="flex items-start gap-2 text-foreground">
                      <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-primary">Venue: </strong>
                        <span>{selectedEvent.event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Clock className="h-4 w-4 text-accent shrink-0" />
                      <div>
                        <strong className="font-semibold text-primary">Time: </strong>
                        <span>{selectedEvent.event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <CalendarDays className="h-4 w-4 text-accent shrink-0" />
                      <div>
                        <strong className="font-semibold text-primary">Date: </strong>
                        <span>{selectedEvent.event.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Inaugurated By */}
                  {selectedEvent.event.inauguratedBy && (
                    <div className="space-y-1.5 rounded-md border border-border bg-muted/40 p-3.5">
                      <strong className="font-semibold uppercase tracking-wider text-accent block mb-1">
                        Inaugurated By
                      </strong>
                      <p className="font-medium text-foreground">
                        {selectedEvent.event.inauguratedBy}
                      </p>
                    </div>
                  )}

                  {/* Presided Over By */}
                  {selectedEvent.event.presidedBy && selectedEvent.event.presidedBy.length > 0 && (
                    <div className="space-y-1.5 rounded-md border border-border bg-muted/40 p-3.5">
                      <strong className="font-semibold uppercase tracking-wider text-accent block mb-1.5">
                        Presided Over By
                      </strong>
                      <ul className="space-y-1.5">
                        {selectedEvent.event.presidedBy.map((guest, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/90">
                            <span className="font-bold text-accent shrink-0">•</span>
                            <span>{guest}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Note / Tagline */}
                  {selectedEvent.event.note && (
                    <div className="rounded-md border border-border bg-primary/5 p-3.5 text-center italic text-primary font-medium">
                      "{selectedEvent.event.note}"
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
=======
    </div>
  );
}
=======
import { EVENTS, type EventItem } from "@/data/site";

const IMAGES = [hero1, hero2, hero3, about];

export function EventsList({ limit }: { limit?: number }) {
  const items: EventItem[] = limit ? EVENTS.slice(0, limit) : EVENTS;
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((event, i) => (
        <article
          key={event.title}
          className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={IMAGES[i % IMAGES.length]}
              alt={event.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-0 top-4 bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground">
              {event.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-base font-bold leading-snug text-primary">{event.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {event.date}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {event.time}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {event.location}
              </li>
            </ul>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {event.description}
            </p>
            <a
              href="#register"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-sm bg-primary px-5 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Register Now
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
