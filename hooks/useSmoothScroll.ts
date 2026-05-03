"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Simpan referensi agar bisa di-removeEventListener dengan benar
    const onLoad = () => ScrollTrigger.refresh();

    let smoother: ScrollSmoother;

    const ctx = gsap.context(() => {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        normalizeScroll: false,
        smoothTouch: false,
        ignoreMobileResize: true,
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      window.addEventListener("load", onLoad);
    });

    return () => {
      smoother?.kill();
      ctx.revert();
      window.removeEventListener("load", onLoad);
    };
  }, []);
}
