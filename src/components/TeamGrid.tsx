import { Linkedin, Mail } from "lucide-react";
import { TEAM } from "@/data/site";
import kishanbalaImg from "@/assets/team/kishanbala-pandiyan-chairperson.jpg";
import krittikkaImg from "@/assets/team/krittikka-mayilsamy-vice-chairperson.png";
import yezhilvananImg from "@/assets/team/yezhilvanan-secratary.jpg";
import krishwinImg from "@/assets/team/krishwin-joint-secretary.png";
import karthikImg from "@/assets/team/karthik-treasurer.png";
import archanaImg from "@/assets/team/archana-s-web-master.png";
import lakshmanImg from "@/assets/team/ch-shanmukha-venkata-lakshman-technical-head.jpg";
import gowthamImg from "@/assets/team/gowtham-a-event-organizer.png";
import akhilImg from "@/assets/team/p-r-akhil-design-head.png";
import lakshanaImg from "@/assets/team/lakshana-arulaprakasam-external-affairs.jpg";
import smitaImg from "@/assets/team/smita-a-social-media-manager.png";

const MEMBER_IMAGES: Record<string, string> = {
  "Kishanbala Pandiyan": kishanbalaImg,
  "Krittikka Mayilsamy": krittikkaImg,
  "Yezhilvanan": yezhilvananImg,
  "Krishwin": krishwinImg,
  "Karthik": karthikImg,
  "Archana S": archanaImg,
  "Ch Shanmukha Venkata Lakshman": lakshmanImg,
  "Gowtham A": gowthamImg,
  "P.R Akhil": akhilImg,
  "Lakshana Arulaprakasam": lakshanaImg,
  "Smita A": smitaImg,
};

const MEMBER_FOCUS: Record<string, string> = {
  "P.R Akhil": "object-[center_38%]",
  "Krishwin": "object-[center_20%]",
  "Yezhilvanan": "object-[center_20%]",
  "Kishanbala Pandiyan": "object-[center_25%]",
  "Archana S": "object-[center_25%]",
  "Gowtham A": "object-[center_20%]",
  "Karthik": "object-[center_20%]",
};

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
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {TEAM.map((member) => {
        const imageSrc = MEMBER_IMAGES[member.name];
        const focusClass = MEMBER_FOCUS[member.name] ?? "object-center";

        return (
          <article
            key={member.name}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            {/* Member Headshot / Avatar */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted/30">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={member.name}
                  loading="lazy"
                  className={`h-full w-full object-cover ${focusClass} transition-transform duration-500 ease-out group-hover:scale-105`}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-secondary to-muted p-6">
                  <span
                    className="grid h-24 w-24 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-md ring-4 ring-background transition-transform duration-300 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    {initials(member.name)}
                  </span>
                </div>
              )}
              {/* Subtle gradient vignette at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Member Info */}
            <div className="flex flex-1 flex-col justify-between p-5 text-center">
              <div>
                <h3 className="text-base font-bold text-primary transition-colors group-hover:text-accent">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-accent">
                  {member.position}
                </p>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                  {member.department}
                </p>
              </div>

              {/* Contact Links */}
              <div className="mt-4 flex items-center justify-center gap-2 pt-2 border-t border-border/50">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${member.name} on LinkedIn`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
