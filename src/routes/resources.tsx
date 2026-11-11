import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { RESOURCES } from "@/data/site";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Website and student resources for IEEE members at SRM IST — styling libraries, interactive components, customization, header, menus, footer and custom functions.",
      },
      { property: "og:title", content: "Resources — IEEE Student Branch" },
      {
        property: "og:description",
        content: "Useful website and member resources maintained by the IEEE Student Branch at SRM IST.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Reference material about how this website is built, maintained and kept accessible for every member."
      />
      <Section>
        <SectionHeading eyebrow="Reference" title="Website Resources" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <article
              key={r.title}
              className="group rounded-md border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-primary">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </article>
          ))}
        </div>
        <Link
          to="/documentation"
          className="mt-10 inline-flex h-12 items-center rounded-sm bg-primary px-6 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Website Information
        </Link>
      </Section>
    </>
  );
}
