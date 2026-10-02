import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { TeamGrid } from "@/components/TeamGrid";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "The executive committee of the IEEE Student Branch at SRM IST — chair, vice chair, secretary, treasurer, webmaster, technical head and counsellor.",
      },
      { property: "og:title", content: "Meet Our Team — IEEE Student Branch" },
      {
        property: "og:description",
        content: "The 2026–27 executive committee of the IEEE Student Branch at SRM IST.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="The student volunteers and faculty counsellor leading the branch through 2026–27."
      />
      <Section>
        <SectionHeading eyebrow="Executive committee" title="Branch Leadership" />
        <TeamGrid />
      </Section>
    </>
  );
}
