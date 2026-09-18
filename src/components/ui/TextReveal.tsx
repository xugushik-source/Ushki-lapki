"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

// Mask reveal: each line slides up from behind an overflow-hidden mask,
// used for the hero headline (brief section 11).
export function TextReveal({
  lines,
  className,
  lineClassName,
  delayStart = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delayStart?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: reduce ? 0 : "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delayStart + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
