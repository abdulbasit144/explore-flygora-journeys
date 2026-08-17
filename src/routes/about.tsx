import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { whyChooseUs } from "@/data/content";
import { siteConfig } from "@/config/site";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us | ${siteConfig.name} Travel Agency` },
      {
        name: "description",
        content:
          "Learn about Destinations Flygora — a Karachi-based travel agency crafting personalised holidays, tours and corporate travel worldwide.",
      },
      { property: "og:title", content: `About Us | ${siteConfig.name}` },
      {
        property: "og:description",
        content: "Who we are, how we plan trips, and why travellers choose Destinations Flygora.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Destinations Flygora"
        subtitle={siteConfig.tagline}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutImg}
              alt="Travel consultants planning an itinerary"
              width={1024}
              height={768}
              className="rounded-3xl object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={90}>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Our story</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Travel planned around people, not templates</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Destinations Flygora is a travel agency based in Karachi, Pakistan, helping travellers
              explore the world with confidence. From short city breaks to long-haul holidays,
              honeymoons, family trips and corporate travel, every journey we arrange starts with a
              conversation about how you actually like to travel.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We handle flights, hotels, visas, transfers and day-to-day plans so you can focus on
              the experience. Our team stays reachable before, during and after your trip — because
              good travel support matters most when plans change.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "Destinations", v: "8+" },
                { k: "Trip styles", v: "6" },
                { k: "Support", v: "7 days" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl bg-surface p-4 text-center">
                  <dd className="font-display text-2xl font-semibold">{s.v}</dd>
                  <dt className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.k}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our approach"
            title="Mission & Vision"
            subtitle="Simple principles that shape every itinerary we build."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="card-elevated p-8">
              <h3 className="text-xl">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To make international travel effortless and genuinely enjoyable for every traveller
                — with honest advice, well-planned itineraries and dependable service.
              </p>
            </Reveal>
            <Reveal delay={90} className="card-elevated p-8">
              <h3 className="text-xl">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be the travel partner people return to for every journey, known for care,
                transparency and thoughtfully designed travel experiences.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why us"
            title="Why Travellers Choose Us"
            subtitle="The details that make a trip feel easy from start to finish."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 70} className="card-elevated h-full p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <Icon name={f.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-lg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
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
