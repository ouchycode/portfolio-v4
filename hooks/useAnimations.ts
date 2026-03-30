"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const premiumReveal = {
  y: 35,
  opacity: 0,
  scale: 0.98,
  duration: 0.9,
  ease: "power3.out",
  clearProps: "all",
};

// HERO
export const useHeroAnimation = (containerRef: any) => {
  useGSAP(
    () => {
      gsap.from(".reveal-card", {
        ...premiumReveal,
        stagger: 0.15,
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
          start: "top 80%",
          once: true,
        },
        ...premiumReveal,
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
        ...premiumReveal,
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
        ...premiumReveal,
        y: 25,
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
      gsap.from(".tech-header", {
        scrollTrigger: {
          trigger: ".tech-header",
          start: "top 85%",
          once: true,
        },
        ...premiumReveal,
        stagger: 0.1,
      });

      gsap.from(".tech-tag", {
        scrollTrigger: {
          trigger: ".tech-tag",
          start: "top 90%",
          once: true,
        },
        y: 15,
        opacity: 0,
        scale: 0.85,
        duration: 0.7,
        ease: "back.out(1.2)",
        stagger: 0.05,
        clearProps: "all",
      });

      gsap.from(".cert-header", {
        scrollTrigger: {
          trigger: ".cert-header",
          start: "top 85%",
          once: true,
        },
        ...premiumReveal,
        stagger: 0.1,
      });

      gsap.from(".cert-card", {
        scrollTrigger: {
          trigger: ".cert-card",
          start: "top 85%",
          once: true,
        },
        ...premiumReveal,
        stagger: 0.15,
      });
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
        ...premiumReveal,
        y: 20,
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
        ...premiumReveal,
        duration: 0.8,
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );
};
