import { Stethoscope, GraduationCap, FlaskConical, Scissors, BedDouble, MessageCircle } from "lucide-react";
import { Dictionary } from "@/locales";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/ui/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

const icons = [Stethoscope, GraduationCap, FlaskConical, Scissors, BedDouble, MessageCircle];

export function WhyUs({ dict }: { dict: Dictionary }) {
  return (
    <Section tone="surface">
      <Container>
        <FadeUp className="max-w-xl">
          <Heading eyebrow={dict.aboutPage.heading}>{dict.whyUs.heading}</Heading>
          <p className="mt-4 text-muted-foreground">{dict.whyUs.subheading}</p>
        </FadeUp>

        <StaggerContainer className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dict.whyUs.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <StaggerItem key={item.title} className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
