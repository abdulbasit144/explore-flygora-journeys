import { Link } from "@tanstack/react-router";
import { Clock, Check, MapPin } from "lucide-react";
import type { TravelPackage } from "@/data/packages";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "./EnquiryDialog";

export function PackageCard({ pkg }: { pkg: TravelPackage }) {
  return (
    <article className="card-elevated group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={pkg.image}
          alt={`${pkg.title} — ${pkg.destination}`}
          loading="lazy"
          width={1024}
          height={768}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {pkg.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-accent" /> {pkg.destination}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 text-accent" /> {pkg.duration}
          </span>
        </div>

        <h3 className="mt-3 text-xl">{pkg.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.shortDescription}</p>

        <ul className="mt-4 space-y-1.5">
          {pkg.inclusions.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
              <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <p className="text-sm text-muted-foreground">
            Starting from{" "}
            <span className="font-display text-xl font-semibold text-foreground">
              ${pkg.fromPrice}
            </span>{" "}
            <span className="text-xs">/ person</span>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild variant="default" size="sm" className="flex-1 rounded-full">
              <Link to="/packages/$slug" params={{ slug: pkg.slug }}>
                View Details
              </Link>
            </Button>
            <EnquiryDialog
              contextLabel={`${pkg.title} (${pkg.duration})`}
              defaultDestination={pkg.destination}
              title={`Enquire — ${pkg.title}`}
              trigger={
                <Button variant="gold" size="sm" className="flex-1 rounded-full">
                  Enquire Now
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </article>
  );
}
