import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { ActivitiesGrid } from "@/components/ActivitiesGrid";
import { EventsList } from "@/components/EventsList";
import { FeaturedCards } from "@/components/FeaturedCards";
import { HeroSlider } from "@/components/HeroSlider";
import { MembershipSection } from "@/components/MembershipSection";
import { NewsList } from "@/components/NewsList";
import { Section, SectionHeading } from "@/components/Section";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IEEE Student Branch | SRM Institute of Science and Technology" },
      {
        name: "description",
        content:
          "The official IEEE Student Branch at SRM IST — technical workshops, hackathons, guest lectures, membership benefits and student-led innovation.",
      },
      { property: "og:title", content: "IEEE Student Branch | SRM IST" },
      {
        property: "og:description",
        content:
          "Learn. Connect. Innovate. Events, activities, membership and news from the IEEE Student Branch at SRM IST.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <h1 className="sr-only">
        {SITE.name} — {SITE.institution}
      </h1>
      <HeroSlider />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Welcome"
              title="Welcome to IEEE Student Branch"
              description="IEEE Student Branch is a platform for students to learn, collaborate, innovate and connect with the global engineering and technology community."
            />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Based at {SITE.institution}, our volunteers run technical workshops, chapter
              activities, competitions and outreach programmes throughout the academic year — all
              organised by students, for students.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex h-12 items-center rounded-sm bg-primary px-6 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Learn More
            </Link>
          </div>
          <div className="overflow-hidden rounded-md border border-border shadow-[var(--shadow-card)]">
            <img
              src={aboutImg}
              alt="Students testing a circuit prototype in a university makerspace"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Highlights" title="Featured" />
        <FeaturedCards />
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Calendar" title="Upcoming Events" />
          <Link
            to="/events"
            className="inline-flex h-11 items-center rounded-sm border border-primary px-5 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View All Events
          </Link>
        </div>
        <EventsList limit={3} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="What we do"
          title="Our Activities"
          description="Ten programme areas run by branch volunteers and technical chapters through the year."
        />
        <ActivitiesGrid />
      </Section>

      <Section>
        <MembershipSection />
      </Section>

      <Section tone="muted">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Newsroom" title="Latest News & Announcements" />
          <Link
            to="/news"
            className="inline-flex h-11 items-center rounded-sm border border-primary px-5 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            All News
          </Link>
        </div>
        <NewsList limit={3} />
      </Section>
    </>
  );
}
