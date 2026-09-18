import Image from "next/image";
import { Star } from "lucide-react";
import { Locale, ReviewEntry } from "@/types";
import { cn } from "@/lib/cn";

export function ReviewCard({
  review,
  locale,
  className,
}: {
  review: ReviewEntry;
  locale: Locale;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-[var(--radius)] bg-surface p-6 shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image src={review.petPhoto} alt={review.petName} fill sizes="48px" className="object-cover" />
        </div>
        <div>
          <p className="font-medium text-foreground">{review.ownerName}</p>
          <p className="text-sm text-muted-foreground">{review.petName} · {review.source}</p>
        </div>
      </div>
      <div className="flex gap-0.5 text-accent" aria-label={`${review.rating} / 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4" fill={i < review.rating ? "currentColor" : "none"} strokeWidth={1.5} />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{review.text[locale]}</p>
    </div>
  );
}
