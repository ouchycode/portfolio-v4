"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reveal = {
  y: 50,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
};

/* ================= HERO ================= */

export const useHeroAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".reveal-text", {
        yPercent: 120,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
      }).from(
        ".reveal-ui",
        {
          ...reveal,
          stagger: 0.1,
        },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );
};

/* ================= ABOUT ================= */

export const useAboutAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.utils.toArray(".about-animate").forEach((el: any, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          ...reveal,
          delay: i * 0.05,
        });
      });
    },
    { scope: containerRef },
  );
};

/* ================= EXPERIENCE ================= */

export const useExperienceAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.utils.toArray(".exp-row").forEach((row: any, i) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            once: true,
          },
          ...reveal,
          delay: i * 0.08,
        });
      });
    },
    { scope: containerRef },
  );
};

/* ================= PROJECTS ================= */

export const useProjectsAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.utils.toArray(".project-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.08,
        });
      });
    },
    { scope: containerRef },
  );
};

/* ================= TECH ================= */

export const useTechCertsAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.utils.toArray(".tech-tag").forEach((tag: any, i) => {
        gsap.from(tag, {
          scrollTrigger: {
            trigger: tag,
            start: "top 90%",
            once: true,
          },
          ...reveal,
          duration: 0.6,
          delay: i * 0.03,
        });
      });

      gsap.utils.toArray(".cert-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          ...reveal,
          delay: i * 0.1,
        });
      });
    },
    { scope: containerRef },
  );
};

/* ================= CONTACT ================= */

export const useContactAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.utils.toArray(".contact-input").forEach((input: any, i) => {
        gsap.from(input, {
          scrollTrigger: {
            trigger: input,
            start: "top 90%",
            once: true,
          },
          ...reveal,
          duration: 0.6,
          delay: i * 0.05,
        });
      });
    },
    { scope: containerRef },
  );
};

/* ================= FOOTER ================= */

export const useFooterAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.utils.toArray(".footer-item").forEach((item: any, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
          ...reveal,
          duration: 0.8,
          delay: i * 0.05,
        });
      });
    },
    { scope: containerRef },
  );
};
