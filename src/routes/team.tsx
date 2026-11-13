import { createFileRoute } from "@tanstack/react-router";
<<<<<<< HEAD
import { PageHero, Section } from "@/components/Section";
=======
import { PageHero, Section, SectionHeading } from "@/components/Section";
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
import { TeamGrid } from "@/components/TeamGrid";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
<<<<<<< HEAD
          "The executive committee and functional leads of the IEEE Student Branch at SRM IST — chair, vice chair, secretary, treasurer, webmaster, technical lead and counsellor.",
=======
          "The executive committee of the IEEE Student Branch at SRM IST — chair, vice chair, secretary, treasurer, webmaster, technical head and counsellor.",
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
      },
      { property: "og:title", content: "Meet Our Team — IEEE Student Branch" },
      {
        property: "og:description",
<<<<<<< HEAD
        content: "The 2026–27 leadership team of the IEEE Student Branch at SRM IST.",
=======
        content: "The 2026–27 executive committee of the IEEE Student Branch at SRM IST.",
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
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
<<<<<<< HEAD
=======
        <SectionHeading eyebrow="Executive committee" title="Branch Leadership" />
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
        <TeamGrid />
      </Section>
    </>
  );
}
