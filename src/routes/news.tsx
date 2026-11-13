import { createFileRoute } from "@tanstack/react-router";
import { NewsList } from "@/components/NewsList";
import { PageHero, Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Announcements | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Latest news, awards, chapter launches and announcements from the IEEE Student Branch at SRM Institute of Science and Technology.",
      },
      { property: "og:title", content: "News & Announcements — IEEE Student Branch" },
      {
        property: "og:description",
<<<<<<< HEAD
        content:
          "Workshop reports, awards and announcements from the IEEE Student Branch at SRM IST.",
=======
        content: "Workshop reports, awards and announcements from the IEEE Student Branch at SRM IST.",
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHero
<<<<<<< HEAD
        title="Recent Activities Done"
=======
        title="Latest News & Announcements"
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
        subtitle="Reports from recent activities, branch recognitions and updates for members."
      />
      <Section>
        <SectionHeading eyebrow="Newsroom" title="From the Branch" />
        <NewsList />
      </Section>
    </>
  );
}
