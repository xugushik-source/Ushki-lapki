"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { clinicConfig } from "@/config/clinic.config";
import { images } from "@/config/images.config";
import { routePath } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[94vh] items-end overflow-hidden bg-primary">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: reduce ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={images.heroMain}
          alt={dict.hero.eyebrow}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <Container className="relative z-10 pb-16 pt-40 sm:pb-24 lg:pb-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {dict.hero.eyebrow}
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.03] text-white sm:text-6xl lg:text-7xl">
          <TextReveal lines={dict.hero.headlineLines} delayStart={0.5} />
        </h1>

        <motion.p
          className="mt-6 max-w-lg text-lg text-white/85"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          {dict.hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
        >
          <Magnetic className="inline-block">
            <Button href={routePath(locale, "booking")} size="lg">
              {dict.hero.ctaPrimary}
            </Button>
          </Magnetic>
          <Button href={`tel:${clinicConfig.emergency.phone}`} variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
            {dict.hero.ctaSecondary}
          </Button>
        </motion.div>

        <motion.ul
          className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <li>{dict.hero.trust1}</li>
          <li>{dict.hero.trust2}</li>
          <li>{dict.hero.trust3}</li>
        </motion.ul>
      </Container>
    </section>
  );
}
