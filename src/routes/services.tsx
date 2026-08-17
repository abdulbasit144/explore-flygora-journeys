import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { services } from "@/data/content";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Travel Services — Flights, Hotels & Visas | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Flight and hotel booking, visa assistance, airport transfers, tour packages, honeymoon and group travel arranged end to end.",
      },
      { property: "og:title", content: `Travel Services | ${siteConfig.name}` },
      {
        property: "og:description",
        content: "Everything you need for a smooth journey, arranged by one team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const steps = [
  { title: "Share your plan", description: "Tell us your destination, dates and travel style." },
  { title: "Get a quotation", description: "We send a tailored itinerary with clear pricing." },
  { title: "Confirm & book", description: "Approve the plan and we handle the bookings." },
  { title: "Travel with support", description: "We stay reachable throughout your journey." },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Travel Services"
        subtitle="From a single flight to a fully arranged multi-city holiday — handled by one dedicated team."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 70} className="card-elevated h-full p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                <Icon name={s.icon} className="size-5" />
              </span>
              <h2 className="mt-4 text-lg">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Planning a Trip With Us"
            subtitle="Four simple steps from first enquiry to departure."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="card-elevated h-full p-6">
                <span className="font-display text-3xl font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
