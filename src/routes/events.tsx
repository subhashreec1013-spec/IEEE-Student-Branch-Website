import { createFileRoute } from "@tanstack/react-router";
import { EventsList } from "@/components/EventsList";
import { PageHero, Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Workshops | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Upcoming IEEE Student Branch events at SRM IST — technical workshops, hackathons, guest lectures, bootcamps and flagship celebrations.",
      },
      { property: "og:title", content: "Events & Workshops — IEEE Student Branch" },
      {
        property: "og:description",
        content: "Register for upcoming IEEE workshops, hackathons and guest lectures at SRM IST.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHero
        title="Upcoming Events"
        subtitle="Workshops, hackathons, seminars and flagship IEEE celebrations hosted by the branch this academic year."
      />
      <Section>
        <SectionHeading eyebrow="Calendar 2026–27" title="What's Coming Up" />
        <EventsList />
      </Section>
    </>
  );
}
