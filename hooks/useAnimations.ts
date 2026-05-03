"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ContainerRef = React.RefObject<HTMLElement | null>;

// ── Base configs ─────────────────────────────────────────────────────
const materialReveal = {
  y: 28,
  opacity: 0,
  scale: 0.97,
  duration: 0.85,
  ease: "expo.out",
  clearProps: "all",
} as const;

const subtleReveal = {
  y: 16,
  opacity: 0,
  scale: 0.98,
  duration: 0.7,
  ease: "expo.out",
  clearProps: "all",
} as const;

// ── Shared ScrollTrigger factory ─────────────────────────────────────
function makeTrigger(trigger: HTMLElement | null | string, start = "top 82%") {
  return { scrollTrigger: { trigger, start, once: true } };
}

// ── HERO ─────────────────────────────────────────────────────────────
export const useHeroAnimation = (containerRef: ContainerRef) => {
  useGSAP(
    () => {
      gsap.from(".reveal-card", {
        ...materialReveal,
        stagger: 0.11,
        delay: 0.06,
      });
    },
    { scope: containerRef },
  );
};

// ── ABOUT ────────────────────────────────────────────────────────────
export const useAboutAnimation = (containerRef: ContainerRef) => {
  useGSAP(
    () => {
      gsap.from(".about-animate", {
        ...makeTrigger(containerRef.current),
        ...materialReveal,
        stagger: 0.12,
      });
    },
    { scope: containerRef },
  );
};

// ── EXPERIENCE ───────────────────────────────────────────────────────
export const useExperienceAnimation = (containerRef: ContainerRef) => {
  useGSAP(
    () => {
      gsap.from(".exp-row", {
        ...makeTrigger(containerRef.current),
        ...materialReveal,
        stagger: 0.13,
      });
    },
    { scope: containerRef },
  );
};

// ── PROJECTS ─────────────────────────────────────────────────────────
export const useProjectsAnimation = (containerRef: ContainerRef) => {
  useGSAP(
    () => {
      gsap.from(".project-animate", {
        ...makeTrigger(containerRef.current),
        ...subtleReveal,
        stagger: 0.09,
      });
    },
    { scope: containerRef },
  );
};

// ── TECH & CERTS ─────────────────────────────────────────────────────
export const useTechCertsAnimation = (containerRef: ContainerRef) => {
  useGSAP(
    () => {
      gsap.from(".tech-header", {
        ...makeTrigger(".tech-header"),
        ...materialReveal,
        stagger: 0.11,
      });

      gsap.from(".cert-header", {
        ...makeTrigger(".cert-header"),
        ...materialReveal,
        stagger: 0.11,
      });

      gsap.from(".cert-card", {
        ...makeTrigger(".cert-card", "top 88%"),
        ...subtleReveal,
        stagger: 0.16,
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );
};

// ── CONTACT ──────────────────────────────────────────────────────────
export const useContactAnimation = (containerRef: ContainerRef) => {
  useGSAP(
    () => {
      gsap.from(".contact-input", {
        ...makeTrigger(containerRef.current),
        ...subtleReveal,
        stagger: 0.11,
      });
    },
    { scope: containerRef },
  );
};

// ── FOOTER ───────────────────────────────────────────────────────────
export const useFooterAnimation = (containerRef: ContainerRef) => {
  useGSAP(
    () => {
      gsap.from(".footer-item", {
        ...makeTrigger(containerRef.current, "top 92%"),
        ...materialReveal,
        duration: 0.7,
        stagger: 0.08,
      });
    },
    { scope: containerRef },
  );
};
