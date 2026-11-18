import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  DollarSign,
  Trophy,
  Code2,
  Users,
  Megaphone,
  X,
} from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Official IEEE Student Branch resources — training, funding, SAC programs, technical tools, membership tools, and communication resources for SRM IST branch members.",
      },
      { property: "og:title", content: "Resources — IEEE Student Branch" },
      {
        property: "og:description",
        content:
          "IEEE student branch resources for training, funding, programs, and membership tools at SRM IST.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

/* ─────────────────────────── Types ─────────────────────────── */
interface SubItem {
  title: string;
  description: string;
}

interface SubSection {
  heading?: string;
  items: SubItem[];
}

interface ResourceCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  sections: SubSection[];
}

/* ─────────────────────────── Data ─────────────────────────── */
const RESOURCE_CARDS: ResourceCard[] = [
  {
    title: "Training & Branch Management",
    description:
      "Center for Leadership Excellence (CLE) training modules, Student Branch Officer Training sessions, and vTools for managing events, officer reporting, and local activity monitoring.",
    icon: GraduationCap,
    sections: [
      {
        items: [
          {
            title: "Center for Leadership Excellence",
            description:
              "One-stop leadership training designed to serve the multiple and diverse range of IEEE user communities.",
          },
          {
            title: "Student Branch Officer Training",
            description:
              "1-hour session on officer roles, resources, tools, and best practices for Student Branches.",
          },
          {
            title: "Student Branch Counselor Training",
            description:
              "1-hour training on the counselor's role and how to support students.",
          },
          {
            title: "Guide for Student Branch Officers",
            description:
              "Slide deck highlighting various aspects of Student Activities and Student Branch operations.",
          },
          {
            title: "MGA Operations Manual",
            description:
              "IEEE Member and Geographic Activities (MGA) manual on governance, policies, and geographic unit operations. See Section 9.8 for Student Branches.",
          },
          {
            title: "Formations & Petitions",
            description:
              "Learn more about how to form a Student Branch, Student Branch Chapter, or Student Branch Affinity Group.",
          },
          {
            title: "vTools Student Branch Reporting",
            description:
              "Submit an Annual Plan of your Student Branch for the upcoming year.",
          },
          {
            title: "vTools Events",
            description: "Report your Student Branch events.",
          },
          {
            title: "vTools Officer Reporting",
            description:
              "Maintain an updated roster of your Student Branch officers.",
          },
          {
            title: "IEEE Officer Qualifications",
            description:
              "Verify eligibility before recruiting members for officer positions. Applies to all positions except Webmaster (anyone may hold that position).",
          },
          {
            title: "Student Branch Vitality Dashboard",
            description:
              "Dashboard with Student Branch data to allow volunteers to better understand the status of their Student Branch(es).",
          },
          {
            title: "IEEE Volunteering",
            description:
              "Platform to discover local or remote volunteering opportunities requiring different skills.",
          },
        ],
      },
    ],
  },
  {
    title: "Funding Opportunities",
    description:
      "Grants and financial support mechanisms to help student branches execute local projects, technical meetings, humanitarian initiatives, and outreach programmes.",
    icon: DollarSign,
    sections: [
      {
        items: [
          {
            title: "Student Branch Rebates",
            description:
              "Learn more about the requirements for your Student Branch to be eligible to receive a rebate.",
          },
          {
            title: "SPAx",
            description:
              "Funding for professional awareness programs at your Student Branch.",
          },
          {
            title: "STEP Events",
            description:
              "Student Transition and Elevation Partnership helps bridge student-to-young-professional transition. Connect with your local Young Professional Affinity Group.",
          },
          {
            title: "EPICS in IEEE",
            description:
              "IEEE Educational Activities Board (EAB) funding and mentorship for service-learning tech projects.",
          },
          {
            title: "STEM Grant",
            description:
              "Support STEM outreach to pre-university students in your community.",
          },
          {
            title: "Tech4Good",
            description:
              "Grants for grassroots tech projects addressing local sustainability challenges.",
          },
          {
            title: "Society Funding",
            description:
              "Student Branch Chapters can contact their sponsoring Society for additional funds.",
          },
          {
            title: "WIE Funding",
            description:
              "Initial and special funding for Women In Engineering Student Branch Affinity Groups.",
          },
          {
            title: "IEEE-HKN Student Chapter Support Grant",
            description:
              "Support for community service, academic, and chapter-building activities. Grant applications are accepted on a rolling basis.",
          },
          {
            title: "Section Funding",
            description:
              "Student Branches can request additional funding and support from their parent Section. Contact your section through IEEE Section Hub.",
          },
          {
            title: "Industry Partnerships",
            description:
              "Training and resources for engaging industry sponsors.",
          },
        ],
      },
    ],
  },
  {
    title: "SAC Programs",
    description:
      "SAC Awards, Virtual Speakers Bureau, IEEEXtreme programming competition, Keyboard Typing Marathon, IEEE Five Minutes micro-learning videos, and IEEE Potentials Magazine.",
    icon: Trophy,
    sections: [
      {
        items: [
          {
            title: "SAC Awards Programs",
            description:
              "Awards to recognize and reward the efforts of Student Branch volunteers and members.",
          },
          {
            title: "Virtual Speakers Bureau (VSB)",
            description:
              "Free speakers on 300+ topics in 17 languages for your Student Branch events.",
          },
          {
            title: "IEEEXtreme",
            description:
              "24-hour global programming challenge for IEEE student teams.",
          },
          {
            title: "IEEE Keyboard Typing Marathon",
            description:
              "A global competition to showcase their typing speed and accuracy through a 60-second typing test.",
          },
          {
            title: "IEEE Five Minutes",
            description:
              "Quick microlearning videos providing an all-in-one training hub for essential IEEE resources.",
          },
          {
            title: "IEEE Potentials",
            description:
              "Publication for students, graduate students, and young professionals.",
          },
        ],
      },
      {
        heading: "Regional SAC Websites",
        items: [
          {
            title: "IEEE Region 1 SAC",
            description:
              "Student activities, resources and contacts for Student Branches in the Northeastern US.",
          },
          {
            title: "IEEE Region 2 SAC",
            description:
              "Support, events and opportunities for Student Branches in the Eastern US.",
          },
          {
            title: "IEEE Region 3 SAC",
            description:
              "Student programs, competitions and branch support across the Southern US.",
          },
          {
            title: "IEEE Region 4 SAC",
            description:
              "Resources, events and leadership contacts for Student Branches in the Central US.",
          },
          {
            title: "IEEE Region 5 SAC",
            description:
              "Student activities, conferences and opportunities across the Southwestern US.",
          },
          {
            title: "IEEE Region 6 SAC",
            description:
              "Programs, funding and support for Student Branches in the Western US.",
          },
          {
            title: "IEEE Region 7 SAC",
            description:
              "Student activities, events and branch resources across IEEE Canada.",
          },
          {
            title: "IEEE Region 8 SAC",
            description:
              "Student programs and support for branches in Europe, Middle East and Africa.",
          },
          {
            title: "IEEE Region 9 SAC",
            description:
              "Student activities, congresses and opportunities across Latin America.",
          },
          {
            title: "IEEE Region 10 SAC",
            description:
              "Student programs, awards and branch support across Asia and Pacific.",
          },
        ],
      },
    ],
  },
  {
    title: "Technical Resources",
    description:
      "IEEE Collabratec professional networking platform, free web hosting for IEEE organizational units, and official email alias service for branch communications.",
    icon: Code2,
    sections: [
      {
        items: [
          {
            title: "IEEE Collabratec",
            description:
              "Professional networking, mentor matching, and global STEM community.",
          },
          {
            title: "Web Hosting",
            description: "IEEE-hosted websites for organizational units.",
          },
          {
            title: "Email Alias",
            description:
              "Request an sb-xxx@ieee.org address for your Student Branch.",
          },
          {
            title: "vTools Applications",
            description:
              "Web-based volunteer tools for managing events, officers, and local activities.",
          },
          {
            title: "vTools Knowledge Base",
            description:
              "Tutorials for all vTools applications and workflows.",
          },
        ],
      },
    ],
  },
  {
    title: "Membership Tools",
    description:
      "Membership development materials, OU Analytics dashboard, IEEE Rosters management, Membership Validator tool, and group payment options to support member drives.",
    icon: Users,
    sections: [
      {
        heading: "Membership Tools & Resources",
        items: [
          {
            title: "Membership Development Materials",
            description:
              "Student Branch Chairs can order materials for recruitment and membership drives.",
          },
          {
            title: "OU Analytics",
            description:
              "Student Branch Chairs and Counselors can view membership data and trends for your Student Branch.",
          },
          {
            title: "IEEE Rosters",
            description:
              "Student Branch Chairs and Counselors can find contact information for all IEEE volunteers.",
          },
          {
            title: "Membership Validator",
            description:
              "Verify an individual's current IEEE membership status.",
          },
          {
            title: "Group Payment Option",
            description:
              "Submit one payment for multiple members joining or renewing.",
          },
        ],
      },
    ],
  },
  {
    title: "Communication Resources",
    description:
      "Official IEEE social media channels, IEEE eNotice and LISTSERV mailing tools, and the IEEE Visual Identity Toolkit with brand standards, logos, and design templates.",
    icon: Megaphone,
    sections: [
      {
        items: [
          {
            title: "IEEE Students Facebook",
            description: "Follow for updates and opportunities.",
          },
          {
            title: "IEEE Students Instagram",
            description: "Follow for program updates and student opportunities.",
          },
          {
            title: "IEEE Students LinkedIn",
            description: "Professional updates and networking for students.",
          },
          {
            title: "IEEE Students YouTube",
            description:
              "Subscribe to watch videos on various student activities.",
          },
          {
            title: "Collabratec Global Student Exchange",
            description:
              "Communication forum for IEEE Student Members worldwide.",
          },
          {
            title: "eNotice",
            description:
              "Email distribution for newsletters, meeting notices, and events.",
          },
          {
            title: "Why IEEE Communication Bundles",
            description:
              "Marketing materials to deliver a message about the value of IEEE. Note, you must be an active IEEE volunteer to access these resources.",
          },
          {
            title: "Brand Identity Guidelines",
            description:
              "Unified brand standards for IEEE communications and materials.",
          },
          {
            title: "Student Visual Identity Toolkit",
            description:
              "Print-ready and editable versions of collateral templates and visuals.",
          },
          {
            title: "Student Branch Leadership Newsletter",
            description:
              "Sent to Student Branch officers with helpful information.",
          },
          {
            title: "Students Quarterly Newsletter",
            description:
              "Sent to all Student and Graduate Student members with opportunities.",
          },
        ],
      },
    ],
  },
];

/* ─────────────────────────── Detail Modal ─────────────────────────── */
function ResourceModal({
  card,
  open,
  onClose,
}: {
  card: ResourceCard | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!card) return null;
  const Icon = card.icon;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[85vh] max-w-4xl overflow-y-auto p-0">
        {/* Header */}
        <DialogHeader className="sticky top-0 z-10 border-b border-border bg-card px-6 py-5">
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <DialogTitle className="text-xl font-bold text-foreground">
              {card.title}
            </DialogTitle>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm text-muted-foreground opacity-70 transition hover:opacity-100 focus-visible:outline-2 focus-visible:outline-ring"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>

        {/* Body */}
        <div className="space-y-8 px-6 py-6">
          {card.sections.map((sec, si) => (
            <div key={si}>
              {sec.heading && (
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {sec.heading}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
              )}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sec.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="rounded-md border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {/* numbered badge for regional sections */}
                    {sec.heading === "Regional SAC Websites" && (
                      <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-sm bg-primary text-xs font-bold text-primary-foreground">
                        {ii + 1}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */
function ResourcesPage() {
  const [activeCard, setActiveCard] = useState<ResourceCard | null>(null);

  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Official IEEE Student Branch resources — training, funding opportunities, SAC programs, technical tools, and membership support for every branch member."
      />

      {/* IEEE Student Branch Resources */}
      <Section>
        <SectionHeading
          eyebrow="IEEE Student Branch"
          title="Branch Resources"
          description="Click any card to explore the full details — from officer training and funding to technical platforms and communication tools."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.title}
                onClick={() => setActiveCard(card)}
                className="group cursor-pointer rounded-md border border-border bg-card p-6 text-left shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  View details →
                </span>
              </button>
            );
          })}
        </div>
      </Section>

      {/* Resource Detail Modal */}
      <ResourceModal
        card={activeCard}
        open={activeCard !== null}
        onClose={() => setActiveCard(null)}
      />
    </>
  );
}
