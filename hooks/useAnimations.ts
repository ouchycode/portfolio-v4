"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Base configuration for Material Design 3 Motion
// Cepat, tegas, dan jarak travel yang tidak terlalu jauh (40px saja)
const materialReveal = {
  y: 40,
  opacity: 0,
  duration: 0.8, // Dipercepat dari 1.2s agar terasa responsif seperti aplikasi Google
  ease: "power3.out", // Deceleration yang sangat halus khas Material Design
  clearProps: "all", // INI PENTING: Bersihin inline style biar hover Tailwind jalan lagi!
};

/* ================= HERO ================= */
export const useHeroAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".reveal-card", {
        ...materialReveal,
        stagger: 0.1, // Muncul bergantian dengan sangat mulus
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
          ...materialReveal,
          delay: i * 0.05, // Stagger manual yang cepat
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
          ...materialReveal,
          delay: i * 0.05,
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
          ...materialReveal,
          delay: i * 0.05,
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
      // Material Design "Chip" Pop-in Effect
      // Tidak pakai efek memantul berlebihan, melainkan scale-up bersih
      gsap.utils.toArray(".tech-tag").forEach((tag: any, i) => {
        gsap.from(tag, {
          scrollTrigger: {
            trigger: tag,
            start: "top 95%",
            once: true,
          },
          y: 15,
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          ease: "power2.out",
          delay: i * 0.02, // Ekstra cepat agar pengguna tidak menunggu
          clearProps: "all",
        });
      });

      // Kartu Sertifikat
      gsap.utils.toArray(".cert-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          ...materialReveal,
          delay: i * 0.05,
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
          ...materialReveal,
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
            start: "top 95%",
            once: true,
          },
          ...materialReveal,
          delay: i * 0.05,
        });
      });
    },
    { scope: containerRef },
  );
};
