"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

// Animates a number once when it enters the viewport (brief section 20).
// Accepts a numeric target plus an optional suffix/prefix for things like "24/7" or "20,000+".
export function Counter({
  value,
  suffix = "",
  prefix = "",
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || reduce) return;
    motionValue.set(value);
  }, [isInView, motionValue, reduce, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => setDisplay(Math.round(latest)));
    return unsubscribe;
  }, [spring]);

  // Reduced motion skips the spring entirely and just shows the final value.
  const shown = reduce && isInView ? value : display;

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {shown.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
