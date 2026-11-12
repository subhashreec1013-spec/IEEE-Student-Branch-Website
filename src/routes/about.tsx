import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Branch | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Learn about the IEEE Student Branch at SRM IST — our mission, technical chapters, faculty guidance and student volunteer structure.",
      },
      { property: "og:title", content: "About the IEEE Student Branch" },
      {
        property: "og:description",
        content: "Mission, chapters and volunteer structure of the IEEE Student Branch at SRM IST.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const CHAPTERS = [
  { name: "IEEE Computer Society", focus: "Software engineering, AI and systems" },
  { name: "IEEE Power & Energy Society", focus: "Smart grids and renewable energy" },
  { name: "IEEE Women in Engineering", focus: "Mentoring and leadership programmes" },
  { name: "IEEE Signal Processing Society", focus: "DSP, imaging and computer vision" },
  { name: "IEEE Robotics & Automation", focus: "Autonomous systems and control" },
  { name: "IEEE Communications Society", focus: "Wireless networks and 5G research" },
];

function About() {
  return (
    <>
      <PageHero
        title="About Our Student Branch"
        subtitle={`A student-led IEEE community at ${SITE.institution}, advancing technology for the benefit of humanity.`}
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="Learn. Connect. Innovate." />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The IEEE Student Branch brings together undergraduate and postgraduate students across
              engineering disciplines. We provide a structured platform for technical learning
              outside the classroom — from hands-on workshops and design projects to research paper
              writing and professional networking.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every activity is planned and delivered by student volunteers with guidance from our
              faculty branch counsellor, and supported by the IEEE Madras Section.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "600+", label: "Active members" },
                { value: "45+", label: "Events per year" },
                { value: "6", label: "Technical chapters" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-md border border-border bg-surface p-5">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-border shadow-[var(--shadow-card)]">
            <img
              src={aboutImg}
              alt="Student volunteers assembling an electronics project"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Structure"
          title="Our Technical Chapters"
          description="Special-interest chapters run their own sessions, contests and project groups."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((c) => (
            <article
              key={c.name}
              className="rounded-md border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <span className="block h-1 w-10 bg-accent" aria-hidden="true" />
              <h3 className="mt-4 text-base font-bold text-primary">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.focus}</p>
            </article>
          ))}
        </div>
        <Link
          to="/membership"
          className="mt-10 inline-flex h-12 items-center rounded-sm bg-primary px-6 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Become a Member
        </Link>
      </Section>
    </>
  );
}
