"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Base reveal config ──────────────────────────────────────────────
// "Fast Out, Slow In" — identik dengan Material Design motion spec
const materialReveal = {
  y: 32,
  opacity: 0,
  scale: 0.96,
  duration: 0.9,
  ease: "expo.out",
  clearProps: "all",
};

// Varian lebih ringan untuk elemen dalam-halaman (form fields, chips)
const subtleReveal = {
  y: 18,
  opacity: 0,
  scale: 0.98,
  duration: 0.75,
  ease: "expo.out",
  clearProps: "all",
};

// ── HERO ────────────────────────────────────────────────────────────
// Tidak pakai ScrollTrigger — langsung muncul saat halaman load
export const useHeroAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".reveal-card", {
        ...materialReveal,
        stagger: 0.12,
        delay: 0.08,
      });
    },
    { scope: containerRef },
  );
};

// ── ABOUT ───────────────────────────────────────────────────────────
export const useAboutAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".about-animate", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.13,
      });
    },
    { scope: containerRef },
  );
};

// ── EXPERIENCE ──────────────────────────────────────────────────────
// Cards slide up satu per satu — stagger sedikit lebih panjang
// agar timeline rail terasa seperti "mengisi" dari atas ke bawah
export const useExperienceAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".exp-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.14,
      });
    },
    { scope: containerRef },
  );
};

// ── PROJECTS ────────────────────────────────────────────────────────
// Cards carousel — y lebih kecil karena elemen sudah compact horizontal
export const useProjectsAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".project-animate", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          once: true,
        },
        ...subtleReveal,
        y: 22,
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );
};

// ── TECH & CERTS ─────────────────────────────────────────────────────
export const useTechCertsAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      // Tech stack header + card
      gsap.from(".tech-header", {
        scrollTrigger: {
          trigger: ".tech-header",
          start: "top 82%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.12,
      });

      // Certificates header
      gsap.from(".cert-header", {
        scrollTrigger: {
          trigger: ".cert-header",
          start: "top 82%",
          once: true,
        },
        ...materialReveal,
        stagger: 0.12,
      });

      // Certificate cards in carousel
      // Stagger lebih panjang agar mata bisa mengikuti horizontal flow
      gsap.from(".cert-card", {
        scrollTrigger: {
          trigger: ".cert-card",
          start: "top 88%",
          once: true,
        },
        ...subtleReveal,
        y: 20,
        stagger: 0.18,
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );
};

// ── CONTACT ─────────────────────────────────────────────────────────
export const useContactAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".contact-input", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          once: true,
        },
        ...subtleReveal,
        stagger: 0.12,
      });
    },
    { scope: containerRef },
  );
};

// ── FOOTER ──────────────────────────────────────────────────────────
// Footer sering muncul setelah scroll panjang —
// trigger lebih awal (95%) dan durasi sedikit lebih cepat
export const useFooterAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".footer-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          once: true,
        },
        ...materialReveal,
        duration: 0.75,
        stagger: 0.09,
      });
    },
    { scope: containerRef },
  );
};
