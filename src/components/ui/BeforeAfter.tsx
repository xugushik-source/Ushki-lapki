"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function BeforeAfter({
  before,
  after,
  beforeLabel,
  afterLabel,
  className,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }

  return (
    <div
      ref={trackRef}
      className={cn(
        "relative aspect-4/3 w-full touch-none select-none overflow-hidden rounded-[var(--radius)]",
        className,
      )}
      onPointerDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <Image src={after} alt={afterLabel} fill sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={beforeLabel} fill sizes="100vw" className="object-cover" />
      </div>

      <div
        className="absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center bg-surface"
        style={{ left: `${position}%` }}
      >
        <span className="flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-surface text-xs font-semibold text-primary shadow-[var(--shadow-lift)]">
          ↔
        </span>
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-primary">
        {beforeLabel}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-primary">
        {afterLabel}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`${beforeLabel} / ${afterLabel} slider`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
