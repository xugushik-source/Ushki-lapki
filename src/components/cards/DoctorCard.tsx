import Image from "next/image";
import Link from "next/link";
import { DoctorConfig, Locale } from "@/types";
import { routePath } from "@/lib/routes";

export function DoctorCard({
  doctor,
  locale,
  viewProfileLabel,
  cursorLabel,
}: {
  doctor: DoctorConfig;
  locale: Locale;
  viewProfileLabel: string;
  cursorLabel?: string;
}) {
  return (
    <Link
      href={routePath(locale, "doctors", doctor.slug)}
      data-cursor={cursorLabel}
      className="group relative block overflow-hidden rounded-[var(--radius)] bg-primary shadow-[var(--shadow-lift)] cursor-none-desktop"
    >
      <div className="relative aspect-3/4 overflow-hidden">
        <Image
          src={doctor.photo}
          alt={doctor.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h3 className="font-serif text-lg text-primary-foreground">{doctor.name}</h3>
          <p className="mt-1 text-sm text-primary-foreground/75">{doctor.specialty[locale]}</p>
          <span className="mt-3 inline-block w-fit translate-y-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {viewProfileLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
