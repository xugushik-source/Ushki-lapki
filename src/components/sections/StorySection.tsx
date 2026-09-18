"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Dictionary } from "@/locales";
import { images } from "@/config/images.config";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/ui/FadeUp";

function Chapter({
  index,
  title,
  body,
  onEnter,
}: {
  index: number;
  title: string;
  body: string;
  onEnter: (i: number) => void;
}) {
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const inView = useInView(
    { current: node } as React.RefObject<HTMLDivElement>,
    { margin: "-45% 0px -45% 0px" },
  );

  useEffect(() => {
    if (inView) onEnter(index);
  }, [inView, index, onEnter]);

  return (
    <div
      ref={setNode}
      className="min-h-[60vh] py-10 lg:flex lg:min-h-[70vh] lg:flex-col lg:justify-center lg:py-0"
    >
      <span className="font-serif text-4xl text-secondary/40">{`0${index + 1}`}</span>
      <h3 className="mt-3 font-serif text-2xl text-foreground lg:text-3xl">{title}</h3>
      <p className="mt-4 max-w-md text-muted-foreground">{body}</p>
      <div className="mt-6 lg:hidden">
        <div className="relative aspect-4/5 overflow-hidden rounded-[var(--radius)]">
          <Image src={images.storyChapters[index]} alt={title} fill sizes="100vw" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export function StorySection({ dict }: { dict: Dictionary }) {
  const [active, setActive] = useState(0);

  return (
    <Section tone="surface" id="story">
      <Container>
        <FadeUp className="mb-14 max-w-xl">
          <Heading eyebrow={dict.aboutPage.storyHeading}>{dict.story.heading}</Heading>
        </FadeUp>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="hidden lg:sticky lg:top-28 lg:block lg:h-[70vh]">
            <div className="relative h-full overflow-hidden rounded-[var(--radius)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={images.storyChapters[active]}
                    alt={dict.story.chapters[active]?.title ?? ""}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div>
            {dict.story.chapters.map((chapter, index) => (
              <Chapter
                key={chapter.title}
                index={index}
                title={chapter.title}
                body={chapter.body}
                onEnter={setActive}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
