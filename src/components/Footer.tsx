import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { IeeeLogo } from "./IeeeLogo";
import { SocialLinks } from "./SocialLinks";

const QUICK_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Events", to: "/events" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Team", to: "/team" as const },
  { label: "Contact", to: "/contact" as const },
];

const RESOURCE_LINKS = [
  { label: "IEEE.org", href: "https://www.ieee.org/" },
  { label: "Student Resources", href: "https://students.ieee.org/" },
  { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/" },
  { label: "IEEE Collabratec", href: "https://ieee-collabratec.ieee.org/" },
  { label: "IEEE Madras Section", href: "https://ieeemadras.org/" },
];

const POLICY_LINKS = [
  "Home",
  "Sitemap",
  "Accessibility",
  "Nondiscrimination Policy",
  "IEEE Ethics Reporting",
  "IEEE Privacy Policy",
  "Terms",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px), radial-gradient(circle, currentColor 2.5px, transparent 3px)",
          backgroundSize: "56px 56px, 56px 56px, 56px 56px",
          backgroundPosition: "0 0, 0 0, 28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <IeeeLogo className="h-8 w-8 text-primary-foreground" />
              <span className="text-lg font-bold">{SITE.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
              A student-run branch of IEEE at {SITE.institution}, advancing technology for humanity
              through workshops, research, competitions and community outreach.
            </p>
            <a
              href="https://www.ieee.org/membership/join/"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex h-11 items-center rounded-md bg-accent px-5 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
            >
              Join IEEE
            </a>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-bold uppercase tracking-widest">Quick Links</h2>
            <span className="mt-2 block h-0.5 w-10 bg-accent" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-primary-foreground/85 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h2 className="text-sm font-bold uppercase tracking-widest">Resources</h2>
            <span className="mt-2 block h-0.5 w-10 bg-accent" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm">
              {RESOURCE_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary-foreground/85 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest">Contact</h2>
            <span className="mt-2 block h-0.5 w-10 bg-accent" aria-hidden="true" />
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="hover:underline">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>
            </ul>
            <SocialLinks className="mt-5" />
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/25 pt-6">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] font-bold uppercase tracking-wide">
            {POLICY_LINKS.map((label, i) => (
              <li key={label} className="flex items-center gap-3">
                <a href="#" className="underline-offset-4 hover:underline">
                  {label}
                </a>
                {i < POLICY_LINKS.length - 1 && (
                  <span className="text-primary-foreground/40" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-primary-foreground/80">
            © 2026 {SITE.name}. All Rights Reserved. Use of this website signifies your agreement to
            the IEEE Terms and Conditions. A public charity, IEEE is the world's largest technical
            professional organization dedicated to advancing technology for the benefit of humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}
