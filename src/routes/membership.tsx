import { createFileRoute } from "@tanstack/react-router";
import { MembershipSection } from "@/components/MembershipSection";
import { PageHero, Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Join the IEEE Student Branch at SRM IST — benefits, membership steps and access to IEEE Xplore, scholarships and global networking.",
      },
      { property: "og:title", content: "Become an IEEE Member — SRM IST" },
      {
        property: "og:description",
        content: "Benefits and joining steps for IEEE student membership at SRM IST.",
      },
      { property: "og:url", content: "/membership" },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: MembershipPage,
});

const STEPS = [
  { step: "01", title: "Create an IEEE Account", text: "Register at ieee.org with your institutional email address." },
  { step: "02", title: "Select Student Membership", text: "Choose student grade membership and add optional society memberships." },
  { step: "03", title: "Link to Our Branch", text: "Select SRM Institute of Science and Technology as your student branch." },
  { step: "04", title: "Start Volunteering", text: "Email the branch and join a chapter, project team or event committee." },
];

function MembershipPage() {
  return (
    <>
      <PageHero
        title="Become a Member"
        subtitle="Join a global community of students, engineers, researchers and technology professionals."
      />
      <Section>
        <MembershipSection />
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="How to join" title="Four Simple Steps" />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.step}
              className="rounded-md border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <span className="text-3xl font-black text-secondary-foreground/25">{s.step}</span>
              <h3 className="mt-3 text-base font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
