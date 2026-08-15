import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import aboutImage from "@/assets/about.jpg";
import { Button } from "@/components/ui/button";
import { TripFinder } from "@/components/TripFinder";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DestinationCard } from "@/components/DestinationCard";
import { PackageCard } from "@/components/PackageCard";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { EnquiryDialog } from "@/components/EnquiryDialog";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { services, whyChooseUs, faqs, instagramPosts } from "@/data/content";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} | Explore the World, Create Unforgettable Journeys` },
      {
        name: "description",
        content:
          "Destinations Flygora plans tailored holidays, honeymoons, group tours and luxury escapes to Dubai, Turkey, Thailand, the Maldives and beyond.",
      },
      { property: "og:title", content: `${siteConfig.name} | Explore the World` },
      { property: "og:description", content: siteConfig.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Aerial view of a turquoise coastline at golden hour"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-page relative z-10 py-32 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground backdrop-blur-sm">
              <Sparkles className="size-3.5 text-accent" /> Travel &amp; Tourism
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
              Explore the World. Create Unforgettable Journeys.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              {siteConfig.description}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <Link to="/destinations">
                  Explore Destinations <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/packages">View Packages</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-primary-foreground/70">
              {siteConfig.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trip finder */}
      <div className="container-page">
        <TripFinder />
      </div>

      {/* Destinations */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Destinations"
            title="Discover Your Next Destination"
            subtitle="From iconic cities to breathtaking escapes, find the perfect place for your next adventure."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.slice(0, 8).map((d, i) => (
              <Reveal key={d.slug} delay={(i % 4) * 70} className="h-full">
                <DestinationCard destination={d} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="soft" size="lg">
              <Link to="/destinations">
                View all destinations <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Packages"
            title="Popular Travel Packages"
            subtitle="Thoughtfully built itineraries you can book as they are — or reshape entirely around your plans."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70} className="h-full">
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">{siteConfig.priceNote}</p>
        </div>
      </section>

      {/* Services */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="Everything You Need for a Smooth Journey"
            subtitle="One team handling flights, stays, visas and everything in between."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 60} className="h-full">
                <div className="card-elevated group h-full p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-y bg-primary text-primary-foreground">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Travel With Destinations Flygora?"
            subtitle="A calmer way to plan travel — clear advice, careful arrangements and someone to call."
            onDark
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 60} className="h-full">
                <div className="h-full rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                  <Icon name={f.icon} className="size-6 text-accent" />
                  <h3 className="mt-4 text-lg text-primary-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={aboutImage}
                alt="Travel consultants planning journeys with a world map"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">About Us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Your Journey Starts With Us</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {siteConfig.name} helps travellers discover destinations and plan memorable journeys
              through carefully designed travel experiences. We listen first, then shape an
              itinerary around your dates, interests and pace.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From a short city break to a multi-country route, every detail — flights, stays,
              transfers and tours — is arranged so that your only job is to enjoy the trip.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="default" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
              <EnquiryDialog
                trigger={
                  <Button variant="gold" size="lg">
                    Plan Your Trip
                  </Button>
                }
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* Instagram */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Instagram"
            title="Follow Our Journeys"
            subtitle={`Travel moments, destination inspiration and trip updates — @${siteConfig.instagramUsername}`}
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {instagramPosts.map((post, i) => (
              <Reveal key={post.alt} delay={(i % 4) * 60}>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-end bg-primary/0 p-4 text-xs font-medium text-primary-foreground opacity-0 transition-all duration-300 group-hover:bg-primary/55 group-hover:opacity-100">
                    {post.caption}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="gold" size="lg">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer noopener">
                <Instagram className="size-4" /> Follow us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you might want to know before sending your first enquiry."
          />
          <Reveal>
            <FaqAccordion items={faqs.slice(0, 5)} />
            <div className="mt-6">
              <Button asChild variant="soft" size="lg">
                <Link to="/faq">See all FAQs</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
