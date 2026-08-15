import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnquiryForm } from "./EnquiryForm";

export function EnquiryDialog({
  trigger,
  title = "Plan Your Trip",
  contextLabel,
  defaultDestination,
}: {
  trigger: ReactNode;
  title?: string;
  contextLabel?: string;
  defaultDestination?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Share a few details and our team will get back to you with a tailored plan.
          </DialogDescription>
        </DialogHeader>
        <EnquiryForm
          className="mt-2"
          contextLabel={contextLabel}
          defaultDestination={defaultDestination}
        />
      </DialogContent>
    </Dialog>
  );
}
