import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Locale, ServiceDetail } from "@/types";
import { routePath } from "@/lib/routes";
import { cn } from "@/lib/cn";

const sizeClasses: Record<ServiceDetail["bentoSize"], string> = {
  sm: "col-span-1 row-span-1 aspect-square",
  md: "col-span-1 row-span-1 aspect-4/5 sm:aspect-square",
  lg: "col-span-2 row-span-2 aspect-square sm:aspect-4/3",
  wide: "col-span-2 row-span-1 aspect-4/3 sm:aspect-16/9",
};

export function ServiceCard({
  service,
  locale,
  cardCta,
}: {
  service: ServiceDetail;
  locale: Locale;
  cardCta: string;
}) {
  return (
    <Link
      href={routePath(locale, "services", service.slug[locale])}
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius)] bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-500",
        sizeClasses[service.bentoSize],
      )}
    >
      <Image
        src={service.image}
        alt={service.name[locale]}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
        <h3 className="font-serif text-xl sm:text-2xl">{service.name[locale]}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-primary-foreground/80">
          {service.shortDescription[locale]}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          {cardCta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
