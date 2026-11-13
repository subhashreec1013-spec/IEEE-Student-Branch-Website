import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      )}
<<<<<<< HEAD
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
=======
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h2>
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
      <span
        className={`mt-3 block h-1 w-14 bg-accent ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function Section({
  children,
  tone = "default",
  className = "",
  ...rest
}: {
  children: ReactNode;
  tone?: "default" | "muted";
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      {...rest}
      className={`${tone === "muted" ? "bg-surface" : "bg-background"} py-14 sm:py-16 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

<<<<<<< HEAD
export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b-4 border-accent bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-primary-foreground/85">{subtitle}</p>
          </div>
          {children && <div className="shrink-0 self-start md:self-center">{children}</div>}
        </div>
=======
export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-b-4 border-accent bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
          {subtitle}
        </p>
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
      </div>
    </div>
  );
}
