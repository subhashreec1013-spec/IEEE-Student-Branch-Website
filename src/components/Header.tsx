import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { NAV, SITE } from "@/data/site";
import { IeeeLogo } from "./IeeeLogo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
<<<<<<< HEAD
      {/* ================= HEADER TOP ================= */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          
          {/* LEFT: IEEE LOGO + SITE NAME */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            aria-label={`${SITE.name} home`}
          >
            <IeeeLogo
              className="h-12 w-12 shrink-0 text-primary sm:h-14 sm:w-14"
            />

=======
      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${SITE.name} home`}>
            <IeeeLogo className="h-9 w-9 shrink-0 text-primary" />
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
            <span className="min-w-0">
              <span className="block truncate text-lg font-bold leading-tight text-primary sm:text-xl lg:text-2xl">
                {SITE.name}
              </span>
<<<<<<< HEAD

=======
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
              <span className="hidden truncate text-xs text-muted-foreground sm:block">
                {SITE.institution}
              </span>
            </span>
          </Link>

<<<<<<< HEAD
          {/* RIGHT SIDE */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">

            {/* SEARCH */}
=======
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              className="grid h-11 w-11 place-items-center rounded-md text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
<<<<<<< HEAD

            {/* DIVIDER */}
            <span
              className="hidden h-7 w-px bg-border sm:block"
              aria-hidden="true"
            />

            {/* IEEE BRANDING */}
            <span className="hidden items-center gap-2 sm:flex">
              <IeeeLogo
                className="h-9 w-9 shrink-0 text-primary"
              />

              <span className="text-xl font-bold italic tracking-tight text-primary">
                IEEE
              </span>
            </span>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
=======
            <span className="hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
            <span className="hidden items-center gap-2 sm:flex">
              <IeeeLogo className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold italic tracking-tight text-primary">IEEE</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="grid h-11 w-11 place-items-center rounded-md text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
            >
<<<<<<< HEAD
              {open ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
=======
              {open ? <Menu className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
            </button>
          </div>
        </div>

<<<<<<< HEAD
        {/* SEARCH BAR */}
=======
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
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
<<<<<<< HEAD

=======
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
              <input
                id="site-search"
                type="search"
                placeholder="Search events, news, resources…"
                className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
<<<<<<< HEAD

=======
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
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

<<<<<<< HEAD
      {/* ================= BLUE NAVIGATION BAR ================= */}
      <nav
        aria-label="Primary"
        className="border-b-4 border-accent bg-primary"
      >
        {/* DESKTOP NAVIGATION */}
=======
      {/* Blue navigation bar */}
      <nav aria-label="Primary" className="border-b-4 border-accent bg-primary">
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
        <div className="mx-auto hidden max-w-7xl items-center px-4 sm:px-6 lg:flex lg:px-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
<<<<<<< HEAD
              activeProps={{
                className: "bg-primary-deep after:scale-x-100",
              }}
=======
              activeProps={{ className: "bg-primary-deep after:scale-x-100" }}
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
              className="relative px-4 py-3 text-[0.8rem] font-bold uppercase tracking-wide text-primary-foreground transition-colors after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:content-[''] hover:bg-primary-deep hover:after:scale-x-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-background"
            >
              {item.label}
            </Link>
          ))}
        </div>

<<<<<<< HEAD
        {/* MOBILE NAVIGATION */}
=======
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
        <div className="lg:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground">
              Menu
            </span>
<<<<<<< HEAD

=======
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="grid h-10 w-10 place-items-center rounded-md text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
            >
<<<<<<< HEAD
              {open ? (
                <X
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              )}

              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
            </button>
          </div>

          {/* MOBILE MENU ITEMS */}
          {open && (
            <ul
              id="mobile-nav"
              className="border-t border-primary-foreground/20 bg-primary-deep pb-2"
            >
=======
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
          {open && (
            <ul id="mobile-nav" className="border-t border-primary-foreground/20 bg-primary-deep pb-2">
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
<<<<<<< HEAD
                    activeProps={{
                      className:
                        "border-l-4 border-accent bg-primary",
                    }}
=======
                    activeProps={{ className: "border-l-4 border-accent bg-primary" }}
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
                    className="block px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-background"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
