import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { destinations } from "@/data/destinations";
import { travelTypes } from "@/data/content";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  destination: z.string().min(1, "Select a destination"),
  travelDate: z.string().min(1, "Select your travel date"),
  travelers: z.string().min(1, "Enter number of travellers"),
  travelType: z.string().min(1, "Select a travel type"),
  message: z.string().max(1000).optional(),
});

export type EnquiryValues = z.infer<typeof schema>;

export function EnquiryForm({
  defaultDestination,
  contextLabel,
  className,
}: {
  defaultDestination?: string;
  contextLabel?: string;
  className?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      destination: defaultDestination ?? "",
      travelDate: "",
      travelers: "2",
      travelType: "",
      message: contextLabel ? `I'd like to know more about: ${contextLabel}` : "",
    },
  });

  const onSubmit = async (values: EnquiryValues) => {
    // Frontend-only submission. Connect this to your CRM, email service or database later.
    await new Promise((r) => setTimeout(r, 600));
    console.info("Travel enquiry submitted", values);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center rounded-2xl border border-accent/40 bg-surface p-8 text-center",
          className,
        )}
        role="status"
      >
        <CheckCircle2 className="size-10 text-accent" />
        <h3 className="mt-4 text-xl">Enquiry received</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you! Your travel enquiry has been received. Our team will get back to you soon.
        </p>
        <Button variant="soft" className="mt-6" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("grid gap-5 sm:grid-cols-2", className)} noValidate>
      <div className="grid gap-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" placeholder="Your name" {...register("fullName")} />
        {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+00 000 0000000" {...register("phone")} />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="destination">Destination</Label>
        <Controller
          control={control}
          name="destination"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="destination">
                <SelectValue placeholder="Choose a destination" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((d) => (
                  <SelectItem key={d.slug} value={d.name}>
                    {d.name}
                  </SelectItem>
                ))}
                <SelectItem value="Not decided yet">Not decided yet</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.destination && (
          <p className="text-xs text-destructive">{errors.destination.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="travelDate">Travel Date</Label>
        <Input id="travelDate" type="date" {...register("travelDate")} />
        {errors.travelDate && <p className="text-xs text-destructive">{errors.travelDate.message}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="travelers">Number of Travellers</Label>
        <Input id="travelers" type="number" min={1} max={60} {...register("travelers")} />
        {errors.travelers && <p className="text-xs text-destructive">{errors.travelers.message}</p>}
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="travelType">Travel Type</Label>
        <Controller
          control={control}
          name="travelType"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="travelType">
                <SelectValue placeholder="Select travel type" />
              </SelectTrigger>
              <SelectContent>
                {travelTypes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.travelType && <p className="text-xs text-destructive">{errors.travelType.message}</p>}
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Tell us what you have in mind — interests, budget range, preferred hotels…"
          {...register("message")}
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="gold" size="xl" className="w-full sm:w-auto" disabled={isSubmitting}>
          <Send className="size-4" />
          {isSubmitting ? "Sending…" : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}
