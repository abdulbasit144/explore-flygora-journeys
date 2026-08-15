import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  onDark?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.22em]",
            onDark ? "text-accent" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]",
          onDark ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            onDark ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
