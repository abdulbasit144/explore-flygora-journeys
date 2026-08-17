import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, X, Clock, MapPin, BedDouble, Info } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageGallery } from "@/components/ImageGallery";
import { PackageCard } from "@/components/PackageCard";
import { EnquiryDialog } from "@/components/EnquiryDialog";
import { CTASection } from "@/components/CTASection";
import { getPackage, packages } from "@/data/packages";
import { siteConfig, whatsappLink } from "@/config/site";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = getPackage(params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Package not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.pkg;
    const title = `${p.title} — ${p.duration} | ${siteConfig.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: p.shortDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/packages/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/packages/${params.slug}` }],
    };
  },
  component: PackageDetail,
});

function PackageDetail() {
  const { pkg } = Route.useLoaderData();
  const related = packages.filter((p) => p.slug !== pkg.slug && p.category === pkg.category).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[56vh] items-end overflow-hidden">
        <img
          src={pkg.image}
          alt={`${pkg.destination} scenery`}
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
                { label: "Packages", to: "/packages" },
                { label: pkg.title },
              ]}
            />
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">{pkg.title}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-accent" /> {pkg.destination}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-4 text-accent" /> {pkg.duration}
            </span>
            <span className="flex items-center gap-2">
              <BedDouble className="size-4 text-accent" /> {pkg.accommodation}
            </span>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <Reveal>
              <h2 className="text-2xl sm:text-3xl">Overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{pkg.overview}</p>
            </Reveal>

            <Reveal delay={60} className="mt-10 block">
              <ImageGallery images={pkg.gallery} alt={pkg.title} />
            </Reveal>

            <Reveal delay={80} className="mt-12 block">
              <h3 className="text-xl">Highlights</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
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

            <Reveal delay={80} className="mt-12 block">
              <h3 className="text-xl">Day-by-Day Itinerary</h3>
              <ol className="mt-6 space-y-5 border-l border-border pl-6">
                {pkg.itinerary.map((day) => (
                  <li key={day.day} className="relative">
                    <span className="absolute -left-[31px] flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
                      {day.day}
                    </span>
                    <p className="font-medium">{day.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {day.description}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Reveal className="card-elevated p-6">
                <h3 className="text-lg">What's Included</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
                  {pkg.inclusions.map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={70} className="card-elevated p-6">
                <h3 className="text-lg">Not Included</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {pkg.exclusions.map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      {i}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal className="mt-12 block rounded-2xl bg-surface p-6">
              <h3 className="flex items-center gap-2 text-lg">
                <Info className="size-4 text-accent" /> Important Information
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {pkg.importantInfo.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <aside className="card-elevated sticky top-28 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Starting from
              </p>
              <p className="font-display text-3xl font-semibold">${pkg.fromPrice}</p>
              <p className="text-xs text-muted-foreground">per person · {siteConfig.priceNote}</p>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="text-right font-medium">{pkg.duration}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Destination</dt>
                  <dd className="text-right font-medium">{pkg.destination}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Travel style</dt>
                  <dd className="text-right font-medium">{pkg.category}</dd>
                </div>
              </dl>

              <EnquiryDialog
                defaultDestination={pkg.destination}
                contextLabel={`${pkg.title} (${pkg.duration})`}
                title={`Enquire — ${pkg.title}`}
                trigger={
                  <Button variant="gold" size="lg" className="mt-6 w-full">
                    Enquire Now
                  </Button>
                }
              />
              <Button asChild variant="soft" size="lg" className="mt-3 w-full">
                <a
                  href={whatsappLink(`Hello ${siteConfig.name}, I'd like details about the ${pkg.title} package.`)}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="mt-1 w-full">
                <Link to="/packages">Back to packages</Link>
              </Button>
            </aside>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHeading
              eyebrow="You may also like"
              title="Similar Packages"
              subtitle="Other itineraries in the same travel style."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 70} className="h-full">
                  <PackageCard pkg={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
