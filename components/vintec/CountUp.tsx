"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  active = true,
  delay = 0,
  duration = 1500,
  decimals = 0,
) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const rafId = requestAnimationFrame(() => setVal(target));
      return () => cancelAnimationFrame(rafId);
    }

    let raf = 0;
    let startTime = 0;

    const timer = window.setTimeout(() => {
      const tick = (now: number) => {
        if (!startTime) startTime = now;
        const p = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const next = target * eased;
        setVal(
          decimals > 0
            ? Number(next.toFixed(decimals))
            : Math.round(next),
        );
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        }
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [active, target, delay, duration, decimals]);

  return decimals > 0 ? val.toFixed(decimals) : String(val);
}
