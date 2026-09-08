"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("vt-hydrated");

    const reveal = () => {
      const height =
        window.innerHeight || document.documentElement.clientHeight || 800;
      const limit = height * 0.92;
      const targets = document.querySelectorAll<HTMLElement>(
        "[data-vt]:not(.vt-in)"
      );
      for (const el of targets) {
        const r = el.getBoundingClientRect();
        if (r.top < limit && r.bottom > 0) {
          el.classList.add("vt-in");
        }
      }
if (!document.querySelector("[data-vt]:not(.vt-in)")) {
        window.clearInterval(timer);
      }
    };

    const timer = window.setInterval(reveal, 250);
    reveal();
    return () => window.clearInterval(timer);
  }, []);

  return null;
}