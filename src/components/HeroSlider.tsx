import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const SLIDES = [
  {
    image: hero1,
    alt: "Engineering students building an electronics project together in a university lab",
    title: "Empowering Students Through Technology",
    text: "Learn. Connect. Innovate.",
    cta: "Explore Events",
    to: "/events" as const,
  },
  {
    image: hero2,
    alt: "Students attending a technical seminar in a university auditorium",
    title: "IEEE Student Branch",
    text: "Building the next generation of innovators.",
    cta: "Join IEEE",
    to: "/membership" as const,
  },
  {
    image: hero3,
    alt: "Students coding at laptops during an overnight hackathon",
    title: "Innovation Starts Here",
    text: "Discover workshops, events, projects and opportunities.",
    cta: "View Activities",
    to: "/activities" as const,
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      aria-label="Featured highlights"
      aria-roledescription="carousel"
      className="relative h-[360px] w-full overflow-hidden bg-primary-deep sm:h-[420px] lg:h-[460px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={900}
            loading={i === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.35 0.09 240 / 0.92) 0%, oklch(0.35 0.09 240 / 0.72) 45%, oklch(0.35 0.09 240 / 0.35) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-10 lg:px-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold leading-tight text-primary-foreground drop-shadow-sm sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>
                <p className="mt-3 text-base font-semibold text-primary-foreground/90 sm:text-lg">
                  {slide.text}
                </p>
                <Link
                  to={slide.to}
                  tabIndex={i === index ? 0 : -1}
                  className="mt-6 inline-flex h-12 items-center rounded-sm bg-background px-6 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-foreground/25 text-primary-foreground backdrop-blur transition-colors hover:bg-foreground/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-foreground/25 text-primary-foreground backdrop-blur transition-colors hover:bg-foreground/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
            aria-current={i === index}
            className={`h-3 w-3 rounded-full border border-primary-foreground/80 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background ${
              i === index ? "w-8 bg-accent" : "bg-primary-foreground/40 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
