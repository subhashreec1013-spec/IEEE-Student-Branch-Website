import {
  Code2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Mic,
  Presentation,
  Rocket,
  Terminal,
  Video,
  Wrench,
} from "lucide-react";
import { ACTIVITIES } from "@/data/site";

const ICONS = {
  Wrench,
  Code2,
  Terminal,
  Presentation,
  Mic,
  Video,
  Lightbulb,
  GraduationCap,
  HeartHandshake,
  Rocket,
} as const;

export function ActivitiesGrid() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {ACTIVITIES.map((activity) => {
        const Icon = ICONS[activity.icon as keyof typeof ICONS];
        return (
          <article
            key={activity.title}
            className="group rounded-md border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-primary">
              {activity.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {activity.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
