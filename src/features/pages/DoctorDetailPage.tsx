import { notFound } from "next/navigation";
import Image from "next/image";
import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { doctors } from "@/config/doctors.config";
import { services } from "@/config/services.config";
import { clinicConfig } from "@/config/clinic.config";
import { routePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export function DoctorDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const dict = getDictionary(locale);
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) notFound();

  const doctorServices = services.filter((s) => doctor.serviceSlugs.includes(s.slug.en));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: doctor.name,
    jobTitle: doctor.specialty[locale],
    worksFor: {
      "@type": "VeterinaryCare",
      name: `${clinicConfig.name[locale]} ${clinicConfig.legalSuffix[locale]}`,
    },
    knowsLanguage: doctor.languages,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section className="pt-32 sm:pt-40">
        <Container className="grid gap-12 lg:grid-cols-[380px_1fr]">
          <FadeUp>
            <div className="relative aspect-3/4 overflow-hidden rounded-[var(--radius)]">
              <Image src={doctor.photo} alt={doctor.name} fill sizes="380px" className="object-cover" priority />
            </div>
          </FadeUp>

          <div>
            <FadeUp>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                {doctor.specialty[locale]}
              </p>
              <h1 className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">{doctor.name}</h1>
              <p className="mt-4 max-w-xl text-muted-foreground">{doctor.bio[locale]}</p>
            </FadeUp>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <FadeUp>
                <h3 className="font-serif text-lg text-foreground">{dict.doctorDetail.educationHeading}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {doctor.education[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </FadeUp>
              <FadeUp>
                <h3 className="font-serif text-lg text-foreground">{dict.doctorDetail.certificatesHeading}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {doctor.certificates[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </FadeUp>
              <FadeUp>
                <h3 className="font-serif text-lg text-foreground">{dict.doctorDetail.expertiseHeading}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {doctor.areasOfExpertise[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </FadeUp>
              <FadeUp>
                <h3 className="font-serif text-lg text-foreground">{dict.doctorDetail.languagesHeading}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{doctor.languages.join(", ")}</p>
                <p className="mt-1 text-sm text-muted-foreground">{doctor.experienceYears}+ years of experience</p>
              </FadeUp>
            </div>

            {doctorServices.length ? (
              <FadeUp className="mt-10">
                <h3 className="font-serif text-lg text-foreground">{dict.doctorDetail.servicesHeading}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doctorServices.map((s) => (
                    <a
                      key={s.slug.en}
                      href={routePath(locale, "services", s.slug[locale])}
                      className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground hover:border-primary"
                    >
                      {s.name[locale]}
                    </a>
                  ))}
                </div>
              </FadeUp>
            ) : null}

            <FadeUp className="mt-10">
              <Button href={routePath(locale, "booking")}>{dict.doctorDetail.ctaHeading}</Button>
            </FadeUp>
          </div>
        </Container>
      </Section>
    </>
  );
}
