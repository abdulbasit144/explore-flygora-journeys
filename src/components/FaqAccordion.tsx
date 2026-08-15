import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/content";

export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq, i) => (
        <AccordionItem
          key={faq.question}
          value={`item-${i}`}
          className="mb-3 overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-card"
        >
          <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
