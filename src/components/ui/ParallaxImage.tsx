"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

// Very light parallax — see brief section 15/16: subtle on desktop,
// switched off entirely for reduced-motion or when the element isn't in view.
export function ParallaxImage({
  src,
  alt,
  className,
  strength = 40,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -strength, reduce ? 0 : strength]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
