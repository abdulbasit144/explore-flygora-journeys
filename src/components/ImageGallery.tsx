import { useState } from "react";
import { cn } from "@/lib/utils";

export function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="overflow-hidden rounded-3xl shadow-card">
        <img
          src={images[active]}
          alt={`${alt} — photo ${active + 1}`}
          width={1024}
          height={768}
          className="aspect-[16/10] w-full object-cover transition-opacity duration-500"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              className={cn(
                "overflow-hidden rounded-xl border-2 transition-all duration-300",
                i === active ? "border-accent" : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <img
                src={img}
                alt={`${alt} thumbnail ${i + 1}`}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
