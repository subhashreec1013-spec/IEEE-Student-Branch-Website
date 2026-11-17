import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { NAV, SITE } from "@/data/site";
import { IeeeLogo } from "./IeeeLogo";
import { SrmLogo } from "./SrmLogo";
import ieeeLogoFull from "../assets/ieee-logo-full.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ================= HEADER TOP ================= */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* LEFT: IEEE LOGO + SRM LOGO + SITE NAME */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2.5 sm:gap-3.5 md:gap-4"
            aria-label={`${SITE.name} home`}
          >
            <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
              <IeeeLogo className="h-9 sm:h-12 md:h-13 w-auto shrink-0 drop-shadow-xs" />
              <span className="h-6 sm:h-7 w-px bg-border" aria-hidden="true" />
              <SrmLogo className="h-7 sm:h-10 md:h-11 w-auto shrink-0" />
            </div>

            <span className="min-w-0">
              <span className="block truncate text-base font-bold leading-tight text-primary sm:text-xl lg:text-2xl">
                {SITE.name}
              </span>

              <span className="hidden truncate text-xs text-muted-foreground sm:block">
                {SITE.institution}
              </span>
            </span>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            {/* SEARCH */}
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              className="grid h-11 w-11 place-items-center rounded-md text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* DIVIDER */}
            <span className="hidden h-7 w-px bg-border md:block" aria-hidden="true" />

            {/* IEEE & SRM BRANDING */}
            <span className="hidden items-center gap-2.5 md:flex">
              <img
                src={ieeeLogoFull}
                alt="IEEE Student Branch Logo"
                className="h-9 sm:h-11 w-auto shrink-0 drop-shadow-xs object-contain"
              />
              <span className="h-6 w-px bg-border" aria-hidden="true" />
              <SrmLogo className="h-8 sm:h-9 w-auto shrink-0" />
            </span>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="grid h-11 w-11 place-items-center rounded-md text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
            >
              {open ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* SEARCH BAR */}
        {searchOpen && (
          <div className="border-t border-border bg-secondary">
            <form
              className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:px-6 lg:px-8"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <label htmlFor="site-search" className="sr-only">
                Search this website
              </label>

              <input
                id="site-search"
                type="search"
                placeholder="Search events, news, resources…"
                className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />

              <button
                type="submit"
                className="h-11 shrink-0 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ================= BLUE NAVIGATION BAR ================= */}
      <nav aria-label="Primary" className="border-b-4 border-accent bg-primary">
        {/* DESKTOP NAVIGATION */}
        <div className="mx-auto hidden max-w-7xl items-center px-4 sm:px-6 lg:flex lg:flex-wrap lg:px-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "bg-primary-deep after:scale-x-100",
              }}
              className="relative px-2.5 xl:px-3.5 py-3 text-[0.72rem] xl:text-[0.78rem] font-bold uppercase tracking-wide text-primary-foreground transition-colors whitespace-nowrap after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:content-[''] hover:bg-primary-deep hover:after:scale-x-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-background"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="lg:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground">
              Menu
            </span>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="grid h-10 w-10 place-items-center rounded-md text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}

              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>

          {/* MOBILE MENU ITEMS */}
          {open && (
            <div
              id="mobile-nav"
              className="border-t border-primary-foreground/20 bg-primary-deep pb-2"
            >
              <div className="flex items-center justify-center gap-3 border-b border-primary-foreground/15 bg-primary/40 px-6 py-3">
                <IeeeLogo variant="white" className="h-8 w-auto shrink-0 drop-shadow-xs" />
                <span className="h-5 w-px bg-primary-foreground/30" aria-hidden="true" />
                <SrmLogo variant="card" className="h-6 w-auto" />
              </div>
              <ul>
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{
                        className: "border-l-4 border-accent bg-primary",
                      }}
                      className="block px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-background"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
