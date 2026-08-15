import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-gold transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
