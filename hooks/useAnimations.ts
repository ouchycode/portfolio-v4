"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Base configuration for a modern, snappy, and consistent reveal across all sections
const modernReveal = {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "expo.out",
  clearProps: "all", // INI PENTING: Bersihin inline style biar hover Tailwind jalan lagi!
};

/* ================= HERO ================= */
export const useHeroAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".reveal-card", {
        ...modernReveal,
        stagger: 0.12, // Muncul bergantian dari kiri ke kanan / atas ke bawah
      });
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
          ...modernReveal,
          delay: i * 0.08,
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
          ...modernReveal,
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
          ...modernReveal,
          delay: i * 0.08,
        });
      });
    },
    { scope: containerRef },
  );
};

/* ================= TECH & CERTIFICATIONS ================= */
export const useTechCertsAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      // Tags teknologi muncul dengan efek pop kecil (Satu-satunya pengecualian agar playful)
      gsap.utils.toArray(".tech-tag").forEach((tag: any, i) => {
        gsap.from(tag, {
          scrollTrigger: {
            trigger: tag,
            start: "top 95%",
            once: true,
          },
          y: 20,
          opacity: 0,
          scale: 0.8, // Efek membesar sedikit
          duration: 0.8,
          ease: "back.out(1.5)", // Efek memantul
          delay: i * 0.03, // Jeda sangat cepat karena itemnya banyak
          clearProps: "all",
        });
      });

      // Kartu bento dan sertifikat
      gsap.utils.toArray(".cert-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          ...modernReveal,
          delay: i * 0.08,
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
            start: "top 90%", // Sedikit lebih lambat ke bawah layarnya agar terlihat
            once: true,
          },
          ...modernReveal,
          delay: i * 0.08,
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
            start: "top 95%", // Paling bawah layar baru muncul
            once: true,
          },
          ...modernReveal,
          delay: i * 0.08,
        });
      });
    },
    { scope: containerRef },
  );
};
