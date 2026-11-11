import { Check } from "lucide-react";
import { MEMBERSHIP_BENEFITS } from "@/data/site";

export function MembershipSection() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-primary text-primary-foreground">
      <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Membership</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Become a Member</h2>
          <span className="mt-3 block h-1 w-14 bg-accent" aria-hidden="true" />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            Join IEEE and become part of a global community of students, engineers, researchers and
            technology professionals.
          </p>
          <a
            href="https://www.ieee.org/membership/join/"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex h-12 items-center rounded-sm bg-accent px-6 text-xs font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
          >
            Join IEEE
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {MEMBERSHIP_BENEFITS.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 rounded-md bg-primary-foreground/10 p-4 text-sm leading-relaxed"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
