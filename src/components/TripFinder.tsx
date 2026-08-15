import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, MapPin, Compass, CalendarDays, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { destinations } from "@/data/destinations";
import { travelTypes } from "@/data/content";

export function TripFinder() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [travelType, setTravelType] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({
      to: "/packages",
      search: {
        destination: destination || undefined,
        type: travelType || undefined,
        date: date || undefined,
        travelers: travelers || undefined,
      },
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative z-20 -mt-16 rounded-3xl border border-border bg-card p-5 shadow-lift sm:p-7"
      aria-label="Trip finder"
    >
      <div className="grid gap-4 md:grid-cols-4">
        <div className="grid gap-2">
          <Label className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
            <MapPin className="size-3.5 text-accent" /> Destination
          </Label>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger>
              <SelectValue placeholder="Anywhere" />
            </SelectTrigger>
            <SelectContent>
              {destinations.map((d) => (
                <SelectItem key={d.slug} value={d.name}>
                  {d.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
            <Compass className="size-3.5 text-accent" /> Travel Type
          </Label>
          <Select value={travelType} onValueChange={setTravelType}>
            <SelectTrigger>
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
              {travelTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label
            htmlFor="finder-date"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground"
          >
            <CalendarDays className="size-3.5 text-accent" /> Departure Date
          </Label>
          <Input
            id="finder-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label
            htmlFor="finder-travelers"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground"
          >
            <Users className="size-3.5 text-accent" /> Travellers
          </Label>
          <Input
            id="finder-travelers"
            type="number"
            min={1}
            max={60}
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          />
        </div>
      </div>

      <Button type="submit" variant="gold" size="xl" className="mt-5 w-full md:w-auto">
        <Search className="size-4" /> Find Your Trip
      </Button>
    </form>
  );
}
