import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Website Information | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Documentation for the IEEE Student Branch website — features, contact form, slider, team pages, events calendar, SEO and content management.",
      },
      { property: "og:title", content: "Website Information — IEEE Student Branch" },
      {
        property: "og:description",
        content: "Features and theme documentation for the IEEE Student Branch website at SRM IST.",
      },
      { property: "og:url", content: "/documentation" },
    ],
    links: [{ rel: "canonical", href: "/documentation" }],
  }),
  component: DocumentationPage,
});

const FEATURES = [
  { n: "1", title: "Contact Form", text: "A simple, accessible contact form for students and visitors to reach the branch committee." },
  { n: "2", title: "Responsive Slider", text: "A responsive image slider used on the home page for announcements and flagship events." },
  { n: "3", title: "Team Members", text: "Structured profiles for IEEE Student Branch leadership, chapter heads and members." },
  { n: "4", title: "Events Calendar", text: "A maintained listing of upcoming IEEE events with dates, venues and registration links." },
  { n: "5", title: "SEO", text: "Per-page titles, meta descriptions, Open Graph tags, semantic markup and structured data." },
  { n: "6", title: "Page Builder / Content Management", text: "Content is stored in separate data files so administrators can update pages without touching layout code." },
];

function DocumentationPage() {
  return (
    <>
      <PageHero
        title="Website Information"
        subtitle="How this site is structured, what features it provides and how content is maintained."
      />
      <Section>
        <SectionHeading eyebrow="Documentation" title="Plugins & Features" />
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <li
              key={f.n}
              className="rounded-md border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {f.n}
              </span>
              <h3 className="mt-4 text-base font-bold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Theme" title="Design & Accessibility" />
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          The IEEE Student Branch website uses a customized IEEE-inspired theme designed for
          accessibility, responsiveness and professional presentation. It follows the IEEE colour
          system, provides keyboard-navigable menus, visible focus states, descriptive alt text and
          a layout that adapts from 320px mobile screens to wide desktop displays.
        </p>
      </Section>
    </>
  );
}
