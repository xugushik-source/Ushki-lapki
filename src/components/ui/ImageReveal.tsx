"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  priority,
  fill = true,
  sizes = "100vw",
  scaleFrom = 1.08,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  scaleFrom?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="h-full w-full"
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="h-full w-full"
          initial={{ scale: reduce ? 1 : scaleFrom }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className={cn("object-cover", imageClassName)}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={900}
              priority={priority}
              className={cn("h-full w-full object-cover", imageClassName)}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
