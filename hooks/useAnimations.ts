"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Konfigurasi Material Design: Cepat, responsif, dan tidak berlebihan
const materialReveal = {
  y: 25, // Dikurangi dari 35 agar tidak terlalu jauh melompat
  opacity: 0,
  scale: 0.98,
  duration: 0.6, // Dipercepat dari 0.9 agar terasa "snappy"
  ease: "power3.out", // Easing standar yang nyaman
  clearProps: "all",
};

// HERO (Muncul langsung setelah loading selesai)
export const useHeroAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".reveal-card", {
        ...materialReveal,
        stagger: 0.1, // Stagger dipercepat
        delay: 0.1,
      });
    },
    { scope: containerRef },
  );
};

// ABOUT
export const useAboutAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".about-animate", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );
};

// EXPERIENCE
export const useExperienceAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".exp-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );
};

// PROJECT
export const useProjectsAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".project-animate", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        ...materialReveal,
        y: 20, // Proyek muncul lebih halus
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );
};

// TECH & CERTS
export const useTechCertsAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      // Header Tech
      gsap.from(".tech-header", {
        scrollTrigger: {
          trigger: ".tech-header",
          start: "top 85%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.1,
      });

      // Tags Ikon Tech (Diubah dari back.out menjadi power3.out agar lebih elegan/tidak membal ala kartun)
      gsap.from(".tech-tag", {
        scrollTrigger: {
          trigger: ".tech-tag",
          start: "top 90%",
          once: true,
        },
        y: 15,
        opacity: 0,
        scale: 0.95, // Scale diperkecil perubahannya
        duration: 0.5,
        ease: "power3.out", // Material design menghindari efek membal berlebih
        stagger: 0.03, // Jeda kemunculan antar ikon dipercepat
        clearProps: "all",
      });

      // Header Certs
      gsap.from(".cert-header", {
        scrollTrigger: {
          trigger: ".cert-header",
          start: "top 85%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.1,
      });

      // Kartu Sertifikat
      gsap.from(".cert-card", {
        scrollTrigger: {
          trigger: ".cert-card",
          start: "top 85%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.15,
      });

      // Refresh ScrollTrigger setelah konten dimuat
      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );
};

// CONTACT
export const useContactAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".contact-input", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        ...materialReveal,
        y: 15,
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );
};

// FOOTER
export const useFooterAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".footer-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          once: true,
        },
        ...materialReveal,
        duration: 0.6,
        stagger: 0.05, // Footer muncul lebih cepat
      });
    },
    { scope: containerRef },
  );
};
