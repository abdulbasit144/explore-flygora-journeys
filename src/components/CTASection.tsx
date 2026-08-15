import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "./EnquiryDialog";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Ready to Plan Your Next Journey?",
  subtitle = "Tell us where you'd like to go and how you like to travel — we'll shape an itinerary around it.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-y bg-primary text-primary-foreground">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">{subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <EnquiryDialog
              trigger={
                <Button variant="gold" size="xl">
                  Plan Your Trip
                </Button>
              }
            />
            <Button asChild variant="onDark" size="xl">
              <Link to="/packages">Browse Packages</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
