"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Konfigurasi Material Design: Halus, elegan, "Fast Out, Slow In"
const materialReveal = {
  y: 35, // Kembalikan ke 35 agar punya ruang untuk meluncur halus
  opacity: 0,
  scale: 0.95, // Efek pop-up sedikit lebih terasa dari 0.98
  duration: 1, // Diperpanjang agar tidak terburu-buru/kaku
  ease: "expo.out", // Easing terbaik untuk UI: Cepat di awal, sangat mulus di akhir
  clearProps: "all",
};

// HERO
export const useHeroAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".reveal-card", {
        ...materialReveal,
        stagger: 0.15, // Diperlambat sedikit agar mengalir seperti air
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
        stagger: 0.15,
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
        stagger: 0.15,
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
        y: 25,
        stagger: 0.15,
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
        stagger: 0.15,
      });

      // Tags Ikon Tech (Memberikan pantulan SANGAT MINOR agar terasa organik/taktil)
      gsap.from(".tech-tag", {
        scrollTrigger: {
          trigger: ".tech-tag",
          start: "top 90%",
          once: true,
        },
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.2)", // Pantulan elegan, tidak berlebihan
        stagger: 0.05,
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
        stagger: 0.15,
      });

      // Kartu Sertifikat
      gsap.from(".cert-card", {
        scrollTrigger: {
          trigger: ".cert-card",
          start: "top 85%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.2, // Kartu horizontal butuh stagger lebih lama agar matanya enak ngikutin
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
        y: 20,
        stagger: 0.15,
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
        duration: 0.8, // Footer sedikit lebih cepat tidak apa-apa
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );
};
