import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Contact the IEEE Student Branch at SRM Institute of Science and Technology — email, phone, campus location and enquiry form.",
      },
      { property: "og:title", content: "Contact the IEEE Student Branch" },
      {
        property: "og:description",
        content: "Reach the IEEE Student Branch committee at SRM IST by email, phone or the enquiry form.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Questions about events, membership or collaboration? The branch committee is happy to help."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Get in touch" title={SITE.name} description={SITE.institution} />
            <ul className="mt-8 space-y-4">
              <li className="flex gap-4 rounded-md border border-border bg-surface p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-primary">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-sm text-muted-foreground hover:underline">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-md border border-border bg-surface p-5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-primary">Phone</p>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:underline">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-md border border-border bg-surface p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-primary">Location</p>
                  <p className="text-sm text-muted-foreground">{SITE.address}</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-md border border-border">
              <iframe
                title="Campus location map"
<<<<<<< HEAD
                src="https://www.google.com/maps?q=SRM+Institute+of+Science+and+Technology+Tiruchirappalli&output=embed"
=======
                src="https://www.google.com/maps?q=SRM+Institute+of+Science+and+Technology+Kattankulathur&output=embed"
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
