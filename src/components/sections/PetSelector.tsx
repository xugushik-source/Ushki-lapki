"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Locale, PetKind } from "@/types";
import { Dictionary } from "@/locales";
import { images } from "@/config/images.config";
import { services } from "@/config/services.config";
import { routePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/ui/FadeUp";
import { cn } from "@/lib/cn";

const recommendedByPet: Record<PetKind, string[]> = {
  dog: ["general-consultation", "vaccination", "dentistry", "preventive-care"],
  cat: ["general-consultation", "vaccination", "dermatology", "preventive-care"],
  other: ["exotic-animals", "general-consultation", "preventive-care"],
};

export function PetSelector({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [pet, setPet] = useState<PetKind>("dog");

  const options: { key: PetKind; label: string; image: string }[] = [
    { key: "dog", label: dict.petSelector.dog, image: images.pets.dog },
    { key: "cat", label: dict.petSelector.cat, image: images.pets.cat },
    { key: "other", label: dict.petSelector.other, image: images.pets.other },
  ];

  const recommended = services.filter((s) => recommendedByPet[pet].includes(s.slug.en));

  return (
    <Section tone="surface">
      <Container>
        <FadeUp className="max-w-xl">
          <Heading>{dict.petSelector.heading}</Heading>
          <p className="mt-4 text-muted-foreground">{dict.petSelector.subheading}</p>
        </FadeUp>

        <div className="mt-10 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
          <div className="flex gap-4">
            {options.map((option) => (
              <button
                key={option.key}
                onClick={() => setPet(option.key)}
                aria-pressed={pet === option.key}
                className={cn(
                  "group flex flex-col items-center gap-3 rounded-[var(--radius)] border-2 p-4 transition-colors",
                  pet === option.key ? "border-primary bg-primary/5" : "border-border",
                )}
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image src={option.image} alt={option.label} fill sizes="80px" className="object-cover" />
                </div>
                <span className="text-sm font-medium text-foreground">{option.label}</span>
              </button>
            ))}
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-secondary">
              {dict.petSelector.recommendedFor}
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={pet}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {recommended.map((service) => (
                  <Link
                    key={service.slug.en}
                    href={routePath(locale, "services", service.slug[locale])}
                    className="group flex items-center justify-between gap-2 rounded-2xl bg-background px-5 py-4"
                  >
                    <span className="font-medium text-foreground">{service.name[locale]}</span>
                    <ArrowUpRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
