import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating ? "size-4 fill-accent text-accent" : "size-4 text-muted-foreground/40"
          }
        />
      ))}
    </div>
  );
}

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="card-elevated flex h-full flex-col p-7">
      <Quote className="size-7 text-accent" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
        “{t.review}”
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-5">
        <Stars rating={t.rating} />
        <p className="mt-3 font-display text-base font-semibold">{t.name}</p>
        <p className="text-xs text-muted-foreground">Travelled to {t.destination}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Travelers Say"
          subtitle="Placeholder reviews shown here — these are structured so real customer feedback can replace them easily."
        />

        {/* Mobile / tablet carousel */}
        <div className="mt-12 lg:hidden">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="basis-[88%] sm:basis-1/2">
                  <Card t={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop grid */}
        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <Reveal key={t.name} delay={i * 70} className="h-full">
              <Card t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
