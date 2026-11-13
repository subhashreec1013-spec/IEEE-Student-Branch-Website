import { Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import inaugurationPoster from "@/assets/inauguration-poster.jpg";
=======
<<<<<<< HEAD
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
import epicsWheelchair from "@/assets/epics-wheelchair.png";
import tensor26New from "@/assets/tensor26-new.jpg";
import activities2 from "@/assets/activities-2.jpg";
import yuvaMegathon from "@/assets/yuva-megathon.png";
<<<<<<< HEAD
import ieeeMembershipPoster from "@/assets/ieee-membership-poster.png";
=======
import ieeeRecruiting from "@/assets/ieee-recruiting.jpg";
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
import membershipQr from "@/assets/ieee-membership-qr.jpg";

import { FEATURED } from "@/data/site";

const CATEGORY_IMAGES: Record<string, string> = {
<<<<<<< HEAD
  Events: inaugurationPoster,
  Activities: tensor26New,
  "IEEE EPICS": epicsWheelchair,
  Learning: epicsWheelchair,
  Membership: ieeeMembershipPoster,
};

const ACTIVITY_IMAGES = [tensor26New, yuvaMegathon, activities2];
=======
  Events: yuvaMegathon,
  Activities: tensor26New,
  "IEEE EPICS": epicsWheelchair,
  Learning: epicsWheelchair,
  Membership: ieeeRecruiting,
};

const ACTIVITY_IMAGES = [tensor26New, activities2];
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73

export function FeaturedCards() {
  const [activityIndex, setActivityIndex] = useState(0);

  // Automatically change Activities image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivityIndex((current) => (current + 1) % ACTIVITY_IMAGES.length);
    }, 4000);

<<<<<<< HEAD
    return () => clearInterval(timer);
  }, []);

  const previousActivityImage = () => {
    setActivityIndex((current) => (current - 1 + ACTIVITY_IMAGES.length) % ACTIVITY_IMAGES.length);
=======
  return () => clearInterval(timer);
  }, []);

  const previousActivityImage = () => {
    setActivityIndex(
      (current) =>
        (current - 1 + ACTIVITY_IMAGES.length) % ACTIVITY_IMAGES.length,
    );
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
  };

  const nextActivityImage = () => {
    setActivityIndex((current) => (current + 1) % ACTIVITY_IMAGES.length);
  };

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURED.map((card, i) => {
        const isActivities = card.category === "Activities";

        const image = isActivities
          ? ACTIVITY_IMAGES[activityIndex]
<<<<<<< HEAD
          : (CATEGORY_IMAGES[card.category] ??
            [inaugurationPoster, tensor26New, epicsWheelchair, ieeeMembershipPoster][i % 4]);
=======
          : CATEGORY_IMAGES[card.category] ??
            [yuvaMegathon, tensor26New, epicsWheelchair, ieeeRecruiting][
              i % 4
            ];
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73

        return (
          <article
            key={card.title}
<<<<<<< HEAD
            className="group flex flex-col h-full overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            {/* IMAGE CONTAINER - Clean, consistent height with object-contain */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100/90 dark:bg-slate-900/50 p-2.5 flex items-center justify-center border-b border-border/60">
=======
            className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            {/* IMAGE */}
            <div className="relative aspect-[16/10] overflow-hidden bg-white">
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
              <img
                src={image}
                alt={card.title}
                loading="lazy"
<<<<<<< HEAD
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
=======
                className={`h-full w-full ${
                  image === epicsWheelchair
                    ? "object-contain bg-white"
                    : "object-cover object-top"
                } transition-transform duration-500 group-hover:scale-105`}
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
              />

              {/* Activities slider controls */}
              {isActivities && (
                <>
                  <button
                    type="button"
                    onClick={previousActivityImage}
                    aria-label="Previous activity image"
                    className="absolute left-2 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={nextActivityImage}
                    aria-label="Next activity image"
                    className="absolute right-2 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
                    {ACTIVITY_IMAGES.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        type="button"
                        onClick={() => setActivityIndex(dotIndex)}
                        aria-label={`Show activity image ${dotIndex + 1}`}
                        className={`h-2 w-2 rounded-full transition-all ${
<<<<<<< HEAD
                          dotIndex === activityIndex ? "w-5 bg-white" : "bg-white/60"
=======
                          dotIndex === activityIndex
                            ? "w-5 bg-white"
                            : "bg-white/60"
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* QR overlay — Membership only */}
              {card.category === "Membership" && (
                <div
<<<<<<< HEAD
                  className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-slate-900/95 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
=======
                  className="absolute inset-0 flex items-center justify-center bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
                  aria-label="IEEE Membership QR Code"
                >
                  <img
                    src={membershipQr}
                    alt="IEEE Membership QR Code — Scan to join"
<<<<<<< HEAD
                    className="h-full w-full object-contain"
=======
                    className="h-full w-full object-contain p-2"
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
                  />
                </div>
              )}

              {/* Category */}
<<<<<<< HEAD
              <span className="absolute left-3 top-3 z-10 rounded bg-background/95 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest text-primary border border-border shadow-xs">
=======
              <span className="absolute left-3 top-3 z-10 bg-background px-2 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary">
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
                {card.category}
              </span>
            </div>

            {/* CONTENT */}
<<<<<<< HEAD
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h3 className="text-base font-bold leading-snug text-primary">{card.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
=======
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-bold leading-snug text-primary">
                {card.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73

              <Link
                to={card.to}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {card.cta}

                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
<<<<<<< HEAD
=======
=======
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
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
