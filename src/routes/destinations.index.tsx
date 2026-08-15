import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { DestinationCard } from "@/components/DestinationCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { destinations } from "@/data/destinations";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: `Travel Destinations | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Explore curated destinations including Dubai, Turkey, Malaysia, Thailand, Azerbaijan, Saudi Arabia, the Maldives and Europe.",
      },
      { property: "og:title", content: `Travel Destinations | ${siteConfig.name}` },
      {
        property: "og:description",
        content: "Browse handpicked international destinations and plan your next journey.",
      },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <PageHeader
        title="Destinations We Love"
        subtitle="From iconic cities to breathtaking escapes, find the perfect place for your next adventure."
        crumbs={[{ label: "Home", to: "/" }, { label: "Destinations" }]}
      />
      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 70} className="h-full">
              <DestinationCard destination={d} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
