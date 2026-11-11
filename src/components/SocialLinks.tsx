import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { SOCIALS } from "@/data/site";

const ICONS = { Linkedin, Instagram, Facebook, Youtube, Twitter } as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {SOCIALS.map((s) => {
        const Icon = ICONS[s.icon as keyof typeof ICONS];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
