import { createFileRoute } from "@tanstack/react-router";
import { ActivitiesGrid } from "@/components/ActivitiesGrid";
import { PageHero, Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Our Activities | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Technical workshops, hackathons, coding contests, seminars, webinars, exhibitions, career development and community service run by IEEE at SRM IST.",
      },
      { property: "og:title", content: "Our Activities — IEEE Student Branch" },
      {
        property: "og:description",
        content: "Ten programme areas run by IEEE student volunteers at SRM IST.",
      },
      { property: "og:url", content: "/activities" },
    ],
    links: [{ rel: "canonical", href: "/activities" }],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <>
      <PageHero
        title="Our Activities"
        subtitle="Year-round technical, professional and outreach programmes led by student volunteers."
      />
      <Section>
        <SectionHeading eyebrow="Programmes" title="What We Run" />
        <ActivitiesGrid />
      </Section>
    </>
  );
}
