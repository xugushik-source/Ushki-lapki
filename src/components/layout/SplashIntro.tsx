"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clinicConfig } from "@/config/clinic.config";

const SESSION_KEY = "site-intro-shown";

function subscribe() {
  // sessionStorage never changes from outside this component (no other tab
  // shares it, no cross-tab "storage" event applies) — React still re-checks
  // getSnapshot() itself right after hydration, which is what lets a repeat
  // hard reload in the same tab pick up the flag without a manual effect.
  return () => {};
}

function getSnapshot(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  // Matches the prerendered static HTML: nothing has "already shown" yet.
  return false;
}

// Large-logo splash on first entry to the site, fading out to reveal the
// page underneath — shown once per browser tab (sessionStorage), not on
// every client-side route change, since this lives in [locale]/layout.tsx
// which doesn't remount on navigation, only on a hard page load. Always
// shows the English lockup regardless of the visitor's resolved locale —
// this is the clinic's brand mark, not translated UI copy.
export function SplashIntro() {
  const reduce = useReducedMotion();
  const alreadyShown = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (alreadyShown) return;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Storage unavailable (private mode, etc.) — still shows once below,
      // just won't remember it for the next hard reload in this tab.
    }
  }, [alreadyShown]);

  useEffect(() => {
    if (alreadyShown || reduce) return;
    const timer = setTimeout(() => setTimedOut(true), 1400);
    return () => clearTimeout(timer);
  }, [alreadyShown, reduce]);

  const visible = !alreadyShown && !timedOut;

  return (
    <>
      {/* Without JS neither effect above ever runs, so this would
          otherwise cover the whole site forever — force it away. */}
      <noscript>
        <style>{".site-intro-splash{display:none !important;}"}</style>
      </noscript>
      <AnimatePresence>
        {visible ? (
          <motion.div
            className="site-intro-splash fixed inset-0 z-[100] flex items-center justify-center bg-background p-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative h-[88vmin] w-[88vmin] max-h-[680px] max-w-[680px]"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/brand/logo-en-trimmed.png"
                alt={`${clinicConfig.name.en} — ${clinicConfig.legalSuffix.en}`}
                fill
                sizes="88vmin"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
