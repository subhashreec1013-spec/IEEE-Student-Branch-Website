<<<<<<< HEAD
import { useState } from "react";
import { Linkedin, Mail, Users, ArrowUpRight, UserPlus } from "lucide-react";
import {
  EXECUTIVE_MEMBERS,
  FUNCTIONAL_LEADS,
  WEB_TEAM,
  TREASURY_TEAM,
  type TeamMember,
} from "@/data/site";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import kishanbalaImg from "@/assets/team/kishanbala-pandiyan-chairperson.jpg";
import krittikkaImg from "@/assets/team/krittikka-mayilsamy-vice-chairperson.png";
import yezhilvananImg from "@/assets/team/yezhilvanan-secratary.png";
import krishwinImg from "@/assets/team/krishwin-joint-secretary.png";
import karthikImg from "@/assets/team/karthik-treasurer.png";
import archanaImg from "@/assets/team/archana-s-web-master.png";
import lakshmanImg from "@/assets/team/ch-shanmukha-venkata-lakshman-technical-head.jpg";
import gowthamImg from "@/assets/team/gowtham-a-event-organizer.png";
import lakshanaImg from "@/assets/team/lakshana-arulaprakasam-external-affairs.jpg";
import smitaImg from "@/assets/team/smita-a-social-media-manager.png";
import ramsaranImg from "@/assets/team/ramsaran-m-internal-affairs.png";
import bharathikImg from "@/assets/team/bharathik-rs-core-member.png";
import rutuvaaniImg from "@/assets/team/rutuvaani-d-core-member.png";
import subhaShreeImg from "@/assets/team/subha-shree-c-core-member.png";
import researchLeadImg from "@/assets/team/research-and-innovation-lead.png";

const MEMBER_IMAGES: Record<string, string> = {
  "Kishanbala Pandiyan": kishanbalaImg,
  "Krittikka Mayilsamy": krittikkaImg,
  Yezhilvanan: yezhilvananImg,
  Krishwin: krishwinImg,
  Karthik: karthikImg,
  Karthick: karthikImg,
  "Archana S": archanaImg,
  "Archana Sivakumar": archanaImg,
  "Ch Shanmukha Venkata Lakshman": lakshmanImg,
  "Gowtham A": gowthamImg,
  "K R Vaishak": researchLeadImg,
  "Research and Innovation Lead": researchLeadImg,
  "Lakshana Arulaprakasam": lakshanaImg,
  "Smita A": smitaImg,
  "Ramsaran M": ramsaranImg,
  "Bharathik RS": bharathikImg,
  "Rutuvaani D": rutuvaaniImg,
  "Subha Shree C": subhaShreeImg,
};
=======
import { Linkedin, Mail } from "lucide-react";
import { TEAM } from "@/data/site";
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

<<<<<<< HEAD
export function VacantSlotCard({
  position,
  department = "Position Open · 2026–27",
}: {
  position: string;
  department?: string;
}) {
  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-lg border-2 border-dashed border-border/80 bg-card/60 backdrop-blur-xs transition-all duration-300 hover:border-accent/60 hover:bg-card hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      {/* Empty slot placeholder area matching team image container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100/80 dark:bg-slate-900/40 border-b border-border/60 flex flex-col items-center justify-center p-6 text-center">
        <div className="grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-full border-2 border-dashed border-muted-foreground/30 bg-muted/40 text-muted-foreground transition-transform duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
          <UserPlus className="h-7 w-7 sm:h-8 sm:w-8 stroke-[1.5]" />
        </div>
        <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent">
          Vacant Position
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between p-5 text-center">
        <div>
          <h3 className="text-base font-bold text-muted-foreground transition-colors group-hover:text-foreground">
            To Be Appointed
          </h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-accent">{position}</p>
          <p className="mt-2 text-xs text-muted-foreground/80 line-clamp-2">{department}</p>
        </div>

        {/* Action Link / Note */}
        <div className="mt-4 flex items-center justify-center pt-2 border-t border-border/50">
          <span className="text-xs font-medium text-muted-foreground/70 italic">
            Applications Open
          </span>
        </div>
      </div>
    </article>
  );
}

export function TeamMemberCard({
  member,
  isSubcard = false,
}: {
  member: TeamMember;
  isSubcard?: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageSrc = MEMBER_IMAGES[member.name];

  const isWebmaster =
    member.name.startsWith("Archana") || member.position.toLowerCase() === "webmaster";
  const isTreasurer =
    member.name.startsWith("Karthik") ||
    member.name.startsWith("Karthick") ||
    member.position.toLowerCase() === "treasurer";
  const hasSubteam = !isSubcard && (isWebmaster || isTreasurer);

  const subteamMembers = isWebmaster ? WEB_TEAM : isTreasurer ? TREASURY_TEAM : [];
  const subteamCount = subteamMembers.length;
  const subteamLabel = isWebmaster ? "Web Team" : "Treasury Team";
  const subteamBadge = `${subteamCount} ${subteamCount === 1 ? "Member" : "Members"}`;
  const subteamCategory = isWebmaster ? "Web Operations" : "Financial Operations";
  const subteamTitle = isWebmaster ? "Web Team Core Members" : "Treasury Team Core Members";
  const subteamDescription = isWebmaster
    ? "Core team members working on website development, design, and technical operations for the IEEE Student Branch."
    : "Core team members managing budgeting, event accounts, fund allocations, and financial operations for the IEEE Student Branch.";

  return (
    <>
      <article
        key={member.name}
        onClick={() => {
          if (hasSubteam) setIsModalOpen(true);
        }}
        className={`group flex flex-col h-full overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${
          hasSubteam ? "cursor-pointer ring-1 ring-accent/30 hover:ring-2 hover:ring-accent" : ""
        }`}
      >
        {/* Member Headshot / Avatar - Professional contained portrait container */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100/80 dark:bg-slate-900/40 border-b border-border/60 flex items-center justify-center p-3">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={member.name}
              loading="lazy"
              className="h-full w-full object-contain drop-shadow-xs transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-secondary to-muted p-6">
              <span
                className="grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-md ring-4 ring-background transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              >
                {initials(member.name)}
              </span>
            </div>
          )}

          {hasSubteam && (
            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-accent shadow-sm border border-border transition-transform group-hover:scale-105">
              <Users className="h-3 w-3" />
              <span>{subteamBadge}</span>
            </span>
          )}
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
            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{member.department}</p>

            {hasSubteam && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer group-hover:scale-105"
                title={`Click to view ${subteamLabel} members`}
              >
                <Users className="h-3.5 w-3.5" />
                <span>
                  {subteamLabel} ({subteamCount})
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </button>
            )}
          </div>

          {/* Contact Links */}
          <div className="mt-4 flex items-center justify-center gap-2 pt-2 border-t border-border/50">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${member.name} on LinkedIn`}
              onClick={(e) => e.stopPropagation()}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              onClick={(e) => e.stopPropagation()}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      {hasSubteam && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            <DialogHeader className="text-left pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-accent">
                  {subteamCategory}
                </span>
                <span className="text-xs text-muted-foreground">
                  · Led by {member.name} ({member.position})
                </span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground mt-1.5">
                {subteamTitle}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">
                {subteamDescription}
              </DialogDescription>
            </DialogHeader>

            <div
              className={`mt-6 grid gap-6 sm:grid-cols-2 ${
                subteamMembers.length > 2 ? "lg:grid-cols-3" : "max-w-sm sm:max-w-md mx-auto"
              }`}
            >
              {subteamMembers.map((subMember) => (
                <TeamMemberCard key={subMember.name} member={subMember} isSubcard />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export function TeamGrid() {
  return (
    <div className="space-y-16">
      {/* Executive Members */}
      <div>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Executive Committee
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Executive Members
          </h2>
          <span className="mt-3 block h-1 w-14 bg-accent" aria-hidden="true" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The core student executive committee steering branch initiatives and leadership.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXECUTIVE_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      {/* Functional Leads */}
      <div className="pt-12 border-t border-border/60">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Operations & Domains
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Functional Leads
          </h2>
          <span className="mt-3 block h-1 w-14 bg-accent" aria-hidden="true" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Domain heads and coordinators managing technical initiatives, events, external outreach,
            and student relations.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FUNCTIONAL_LEADS.map((member) =>
            member.isVacant ? (
              <VacantSlotCard
                key={member.position}
                position={member.position}
                department={member.department}
              />
            ) : (
              <TeamMemberCard key={member.name} member={member} />
            ),
          )}
        </div>
      </div>
=======
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
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
    </div>
  );
}
