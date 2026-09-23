import { Linkedin, Mail } from "lucide-react";
import { TEAM } from "@/data/site";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function TeamGrid() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {TEAM.map((member) => (
        <article
          key={member.name}
          className="group overflow-hidden rounded-md border border-border bg-card text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
        >
          <div className="flex items-center justify-center bg-secondary py-8">
            <span
              className="grid h-24 w-24 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground ring-4 ring-background transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              {initials(member.name)}
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-base font-bold text-primary">{member.name}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-accent">
              {member.position}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{member.department}</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${member.name} on LinkedIn`}
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
