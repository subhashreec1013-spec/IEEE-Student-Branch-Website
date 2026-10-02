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
        content: "Workshop reports, awards and announcements from the IEEE Student Branch at SRM IST.",
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
        title="Latest News & Announcements"
        subtitle="Reports from recent activities, branch recognitions and updates for members."
      />
      <Section>
        <SectionHeading eyebrow="Newsroom" title="From the Branch" />
        <NewsList />
      </Section>
    </>
  );
}
