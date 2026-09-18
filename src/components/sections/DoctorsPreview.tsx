import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { doctors } from "@/config/doctors.config";
import { routePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { DoctorCard } from "@/components/cards/DoctorCard";

export function DoctorsPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const featured = doctors.slice(0, 4);

  return (
    <Section id="doctors">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <FadeUp>
            <Heading eyebrow={dict.nav.doctors}>{dict.doctorsSection.heading}</Heading>
            <p className="mt-4 max-w-lg text-muted-foreground">{dict.doctorsSection.subheading}</p>
          </FadeUp>
          <Button href={routePath(locale, "doctors")} variant="outline" className="shrink-0">
            {dict.doctorsSection.viewAll}
          </Button>
        </div>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.map((doctor) => (
            <StaggerItem key={doctor.slug}>
              <DoctorCard doctor={doctor} locale={locale} viewProfileLabel={dict.common.viewProfile} cursorLabel={dict.common.view} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
