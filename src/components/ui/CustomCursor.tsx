"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Desktop-only, and only visible over elements tagged data-cursor="…"
// (ServiceCard, DoctorCard) — everywhere else the normal pointer stays
// untouched, per brief section 50.
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mql.matches && !reduceMql.matches);
    update();
    mql.addEventListener("change", update);
    reduceMql.addEventListener("change", update);
    return () => {
      mql.removeEventListener("change", update);
      reduceMql.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] flex items-center justify-center overflow-hidden rounded-full bg-accent text-primary"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: label ? 68 : 0, height: label ? 68 : 0, opacity: label ? 1 : 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wide">{label}</span>
    </motion.div>
  );
}
