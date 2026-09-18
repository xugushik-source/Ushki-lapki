import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { demoReviews } from "@/data/demo/reviews";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/ui/FadeUp";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { cn } from "@/lib/cn";

export function ReviewsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section tone="surface">
      <Container>
        <FadeUp className="max-w-xl">
          <Heading>{dict.reviews.heading}</Heading>
          <p className="mt-4 text-muted-foreground">{dict.reviews.subheading}</p>
        </FadeUp>

        {/* Editorial masonry, not a uniform carousel: staggered vertical offsets per column. */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {demoReviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              locale={locale}
              className={cn(index % 3 === 1 && "lg:mt-8", index % 3 === 2 && "lg:mt-4")}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
