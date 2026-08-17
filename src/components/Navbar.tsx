import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/flygora-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { siteConfig, navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent py-4"
          : "border-b border-border/70 bg-background/90 py-2 shadow-card backdrop-blur-md",
      )}
    >
      <nav className="container-page flex items-center justify-between" aria-label="Main">
        <Link to="/" className="group flex items-center gap-2.5">
          <span
            className={cn(
              "flex size-10 items-center justify-center overflow-hidden rounded-xl transition-colors",
              transparent ? "bg-primary-foreground/95 backdrop-blur-sm" : "bg-background",
            )}
          >
            <img
              src={logoAsset.url}
              alt={`${siteConfig.name} logo`}
              className="size-9 object-contain transition-transform group-hover:scale-105"
            />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-base font-semibold tracking-tight sm:text-lg",
                transparent ? "text-primary-foreground" : "text-foreground",
              )}
            >
              Destinations Flygora
            </span>
            <span
              className={cn(
                "hidden text-[10px] uppercase tracking-[0.2em] sm:block",
                transparent ? "text-primary-foreground/70" : "text-muted-foreground",
              )}
            >
              {siteConfig.tagline}
            </span>
          </span>
        </Link>


        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  transparent
                    ? "text-primary-foreground/85 hover:text-accent"
                    : "text-foreground/75 hover:text-accent",
                )}
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" size="lg" className="hidden sm:inline-flex">
            <Link to="/packages">Explore Packages</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant={transparent ? "onDark" : "outline"}
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm border-l border-border p-0">
              <SheetTitle className="sr-only">{siteConfig.name} navigation</SheetTitle>
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <span className="font-display text-lg font-semibold">{siteConfig.name}</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              </div>
              <ul className="flex flex-col px-3 py-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                      activeProps={{ className: "bg-secondary text-accent-foreground" }}
                      activeOptions={{ exact: link.to === "/" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-3 px-4">
                  <Button asChild variant="gold" size="lg" className="w-full">
                    <Link to="/packages">Explore Packages</Link>
                  </Button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
