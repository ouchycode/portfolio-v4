"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother: ScrollSmoother;

    const ctx = gsap.context(() => {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",

        smooth: 0.8,

        effects: true,

        normalizeScroll: false,

        smoothTouch: false,

        ignoreMobileResize: true,
      });
    });

    return () => {
      if (smoother) smoother.kill();
      ctx.revert();
    };
  }, []);
}
