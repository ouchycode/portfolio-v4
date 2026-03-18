"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Base configuration untuk tema Premium Glassmorphism
// Lebih smooth, ada efek kedalaman (scale), dan melayang.
const premiumReveal = {
  y: 50,
  opacity: 0,
  scale: 0.95, // Tambahan efek kedalaman
  duration: 1.2, // Sedikit diperpanjang agar terasa elegan
  ease: "power4.out", // Deceleration yang sangat halus dan "melayang"
  clearProps: "all", // INI PENTING: Bersihin inline style biar hover Tailwind (transform/shadow) jalan lagi!
};

/* ================= HERO ================= */
export const useHeroAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".reveal-card", {
        ...premiumReveal,
        stagger: 0.15, // Muncul bergantian dengan sangat mulus
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
          ...premiumReveal,
          delay: i * 0.1, // Stagger manual yang halus
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
          ...premiumReveal,
          delay: i * 0.1,
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
      // Menggunakan .snap-center agar otomatis menargetkan kartu di dalam carousel
      gsap.utils.toArray(".snap-center").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          ...premiumReveal,
          y: 40, // Y agak dikurangi khusus untuk carousel
          delay: i * 0.1,
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
      // Premium "Chip" Pop-in Effect (Untuk Tech Stack)
      gsap.utils.toArray(".tech-tag").forEach((tag: any, i) => {
        gsap.from(tag, {
          scrollTrigger: {
            trigger: tag,
            start: "top 95%",
            once: true,
          },
          y: 20,
          opacity: 0,
          scale: 0.85,
          duration: 0.7,
          ease: "back.out(1.5)", // Efek sedikit memantul elegan untuk badge kecil
          delay: i * 0.03, // Ekstra cepat agar pengguna tidak menunggu
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
          ...premiumReveal,
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
          ...premiumReveal,
          delay: i * 0.1,
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
          ...premiumReveal,
          delay: i * 0.1,
        });
      });
    },
    { scope: containerRef },
  );
};
