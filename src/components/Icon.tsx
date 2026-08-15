import {
  Plane,
  BedDouble,
  Map,
  FileCheck,
  Car,
  Sparkles,
  Users,
  UsersRound,
  Heart,
  Compass,
  MapPinned,
  ShieldCheck,
  Luggage,
  SlidersHorizontal,
  Headset,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Plane,
  BedDouble,
  Map,
  FileCheck,
  Car,
  Sparkles,
  Users,
  UsersRound,
  Heart,
  Compass,
  MapPinned,
  ShieldCheck,
  Luggage,
  SlidersHorizontal,
  Headset,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Compass;
  return <Cmp className={className} aria-hidden="true" />;
}
