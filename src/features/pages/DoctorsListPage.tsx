import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { doctors } from "@/config/doctors.config";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { DoctorCard } from "@/components/cards/DoctorCard";

export function DoctorsListPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="pt-32 sm:pt-40">
      <Container>
        <Heading as="h1" eyebrow={dict.nav.doctors}>
          {dict.doctorsListPage.heading}
        </Heading>
        <p className="mt-4 max-w-xl text-muted-foreground">{dict.doctorsListPage.subheading}</p>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.slug}>
              <DoctorCard doctor={doctor} locale={locale} viewProfileLabel={dict.common.viewProfile} cursorLabel={dict.common.view} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
