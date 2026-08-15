import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, CalendarRange, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryDialog } from "@/components/EnquiryDialog";
import { CTASection } from "@/components/CTASection";
import { getDestination } from "@/data/destinations";
import { packages } from "@/data/packages";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = getDestination(params.slug);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Destination not found" }, { name: "robots", content: "noindex" }] };
    }
    const d = loaderData.destination;
    const title = `${d.name} Travel Packages & Guide | ${siteConfig.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: d.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: d.shortDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/destinations/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/destinations/${params.slug}` }],
    };
  },
  component: DestinationDetail,
});

function DestinationDetail() {
  const { destination } = Route.useLoaderData();
  const related = packages.filter((p) => p.destinationSlug === destination.slug);

  return (
    <>
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name} landscape`}
          width={1024}
          height={768}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-page relative z-10 pb-14 pt-32 text-primary-foreground">
          <div className="[&_a]:text-primary-foreground/70 [&_li>span]:text-primary-foreground [&_ol]:text-primary-foreground/70">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Destinations", to: "/destinations" },
                { label: destination.name },
              ]}
            />
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl">{destination.name}</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">
            {destination.shortDescription}
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">About {destination.name}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {destination.longDescription}
            </p>

            <h3 className="mt-10 text-xl">Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {destination.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 rounded-xl bg-surface p-4 text-sm text-foreground/80"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <aside className="card-elevated sticky top-28 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Region</p>
              <p className="mt-1 font-medium">{destination.region}</p>
              <p className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <CalendarRange className="size-3.5 text-accent" /> Best time to visit
              </p>
              <p className="mt-1 font-medium">{destination.bestTime}</p>
              {destination.fromPrice !== null && (
                <>
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Packages from
                  </p>
                  <p className="font-display text-3xl font-semibold">${destination.fromPrice}</p>
                  <p className="text-xs text-muted-foreground">{siteConfig.priceNote}</p>
                </>
              )}
              <EnquiryDialog
                defaultDestination={destination.name}
                contextLabel={`${destination.name} trip`}
                title={`Plan your ${destination.name} trip`}
                trigger={
                  <Button variant="gold" size="lg" className="mt-6 w-full">
                    Plan This Trip
                  </Button>
                }
              />
            </aside>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHeading
              eyebrow="Packages"
              title={`${destination.name} Packages`}
              subtitle="Ready-made itineraries you can book or customise."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 70} className="h-full">
                  <PackageCard pkg={p} />
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="soft" size="lg">
                <Link to="/packages">
                  All packages <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
