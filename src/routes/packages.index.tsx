import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { packages, packageCategories } from "@/data/packages";
import { siteConfig } from "@/config/site";

type PackageSearch = {
  destination?: string;
  type?: string;
  date?: string;
  travelers?: string;
};

export const Route = createFileRoute("/packages/")({
  validateSearch: (search: Record<string, unknown>): PackageSearch => ({
    destination: typeof search.destination === "string" ? search.destination : undefined,
    type: typeof search.type === "string" ? search.type : undefined,
    date: typeof search.date === "string" ? search.date : undefined,
    travelers: typeof search.travelers === "string" ? search.travelers : undefined,
  }),
  head: () => ({
    meta: [
      { title: `Travel Packages & Tours | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Browse family holidays, honeymoon packages, group tours, luxury escapes and adventure trips — all fully customisable.",
      },
      { property: "og:title", content: `Travel Packages & Tours | ${siteConfig.name}` },
      {
        property: "og:description",
        content: "Curated travel packages you can book as-is or tailor to your plans.",
      },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const search = Route.useSearch();
  const [category, setCategory] = useState<string>("All");

  const filtered = packages.filter((p) => {
    const byCategory = category === "All" || p.category === category;
    const byDestination = !search.destination || p.destination === search.destination;
    return byCategory && byDestination;
  });

  return (
    <>
      <PageHeader
        title="Popular Travel Packages"
        subtitle="Carefully built itineraries across our most-loved destinations. Every package can be adjusted to your dates and preferences."
        crumbs={[{ label: "Home", to: "/" }, { label: "Packages" }]}
      />

      <section className="section-y">
        <div className="container-page">
          {search.destination && (
            <p className="mb-6 rounded-xl bg-surface px-4 py-3 text-sm text-muted-foreground">
              Showing results for <span className="font-medium text-foreground">{search.destination}</span>
              {search.type ? ` · ${search.type}` : ""}
              {search.travelers ? ` · ${search.travelers} travellers` : ""}
              {search.date ? ` · departing ${search.date}` : ""}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {["All", ...packageCategories].map((c) => (
              <Button
                key={c}
                variant={category === c ? "default" : "soft"}
                size="sm"
                className="rounded-full"
                onClick={() => setCategory(c)}
              >
                {c}
              </Button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-14 text-center text-muted-foreground">
              No packages match that combination yet — send us an enquiry and we'll build one for you.
            </p>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 70} className="h-full">
                  <PackageCard pkg={p} />
                </Reveal>
              ))}
            </div>
          )}

          <p className="mt-10 text-center text-xs text-muted-foreground">{siteConfig.priceNote}</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
