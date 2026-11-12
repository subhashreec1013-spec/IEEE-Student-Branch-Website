import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { TeamGrid } from "@/components/TeamGrid";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "The executive committee and functional leads of the IEEE Student Branch at SRM IST — chair, vice chair, secretary, treasurer, webmaster, technical lead and counsellor.",
      },
      { property: "og:title", content: "Meet Our Team — IEEE Student Branch" },
      {
        property: "og:description",
        content: "The 2026–27 leadership team of the IEEE Student Branch at SRM IST.",
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
        <TeamGrid />
      </Section>
    </>
  );
}
