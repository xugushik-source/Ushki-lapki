import Image from "next/image";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { clinicConfig } from "@/config/clinic.config";
import { images } from "@/config/images.config";
import { routePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { Magnetic } from "@/components/ui/Magnetic";

export function EmergencySection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="absolute inset-0">
        <Image src={images.emergency} alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      </div>

      <Container className="relative z-10">
        <FadeUp className="max-w-2xl">
          {clinicConfig.emergency.is24_7 ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {dict.emergency.availability247}
            </p>
          ) : null}
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{dict.emergency.heading}</h2>
          <p className="mt-4 max-w-lg text-primary-foreground/80">{dict.emergency.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic className="inline-block">
              <Button href={`tel:${clinicConfig.emergency.phone}`} variant="secondary" size="lg">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {dict.common.callNow}
              </Button>
            </Magnetic>
            <Button href={clinicConfig.mapsUrl} variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {dict.common.directions}
            </Button>
            {clinicConfig.whatsappEnabled ? (
              <Button
                href={`https://wa.me/${clinicConfig.whatsappNumber}`}
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {dict.common.whatsapp}
              </Button>
            ) : (
              <Button href={routePath(locale, "contacts")} variant="ghost" size="lg" className="text-white hover:bg-white/10">
                {dict.emergency.bookContact}
              </Button>
            )}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
