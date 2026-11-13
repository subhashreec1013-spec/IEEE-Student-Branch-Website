import { createFileRoute, Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { FileText, Lightbulb } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { RESOURCES } from "@/data/site";

// ─── Google Form URL ──────────────────────────────────────────────────────────
// Replace this placeholder with the actual Google Form URL once you have created
// the form following the instructions provided by the agent.
const EVENT_PROPOSAL_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

// ─────────────────────────────────────────────────────────────────────────────

=======
import { FileText } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { RESOURCES } from "@/data/site";

>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
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
<<<<<<< HEAD
        content:
          "Useful website and member resources maintained by the IEEE Student Branch at SRM IST.",
=======
        content: "Useful website and member resources maintained by the IEEE Student Branch at SRM IST.",
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
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
<<<<<<< HEAD

      {/* ── Propose an Event ── */}
      <Section className="bg-secondary">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Core Committee"
            title="Propose an Event"
            description="Have an innovative idea for an event? IEEE Core Committee Members can submit their event proposals through our official Event Proposal Form."
          />

          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
            {/* Top accent strip */}
            <div className="h-1.5 bg-accent" aria-hidden="true" />

            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:gap-10 sm:p-8">
              {/* Icon block */}
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow"
                aria-hidden="true"
              >
                <Lightbulb className="h-8 w-8" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary">Event Proposal Submission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  IEEE Core Committee Members who wish to organise a workshop, hackathon, seminar,
                  webinar or any technical event can submit a formal proposal through our secure
                  Google Form. Proposals are reviewed by the branch executive committee.
                </p>
                <p className="mt-2 text-xs font-semibold text-accent">
                  🔒 Exclusive access — IEEE Core Committee Members only
                </p>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <a
                  href={EVENT_PROPOSAL_FORM_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-12 items-center rounded-md bg-accent px-6 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Submit Event Proposal
                </a>
              </div>
            </div>

            {/* Footer note */}
            <div className="border-t border-border bg-background px-6 py-3 sm:px-8">
              <p className="text-xs text-muted-foreground">
                This form is exclusively for IEEE Core Committee Members. Unauthorised submissions
                will not be processed. Sign in with your authorised Google account to access the
                form.
              </p>
            </div>
          </div>
        </div>
      </Section>
=======
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
    </>
  );
}
