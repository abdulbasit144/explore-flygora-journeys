import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import type { Destination } from "@/data/destinations";
import { Button } from "@/components/ui/button";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="card-elevated group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name} travel destination`}
          loading="lazy"
          width={1024}
          height={768}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          <MapPin className="size-3 text-accent" />
          {destination.region}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl">{destination.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {destination.shortDescription}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          {destination.fromPrice !== null && (
            <p className="text-sm text-muted-foreground">
              From{" "}
              <span className="font-display text-lg font-semibold text-foreground">
                ${destination.fromPrice}
              </span>
            </p>
          )}
          <Button asChild variant="soft" size="sm" className="rounded-full">
            <Link to="/destinations/$slug" params={{ slug: destination.slug }}>
              Explore <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
