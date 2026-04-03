"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    // Pastikan kode hanya berjalan di sisi klien (browser)
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother: ScrollSmoother;

    const ctx = gsap.context(() => {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",

        // Durasi kelembaman (inertia) scroll.
        // Nilai 1 memberikan rasa "premium" yang pas (tidak terlalu lelet, tidak terlalu kaku)
        smooth: 1,

        effects: true,

        // Biarkan false agar tidak bentrok dengan interaksi klik/fokus bawaan browser
        normalizeScroll: false,

        // SANGAT PENTING: Material Design mewajibkan scroll native di perangkat sentuh.
        // Jangan pernah di-true-kan agar pengguna mobile tidak merasa scroll-nya "berat/licin".
        smoothTouch: false,

        ignoreMobileResize: true,
      });

      // Mencegah BUG halaman terpotong:
      // Refresh ScrollTrigger setelah semua DOM selesai dimuat untuk mengkalkulasi ulang tinggi halaman yang sebenarnya.
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      // Opsi tambahan untuk memastikan jika ada gambar lambat yang merubah tinggi halaman
      window.addEventListener("load", () => ScrollTrigger.refresh());
    });

    return () => {
      if (smoother) smoother.kill();
      ctx.revert();
      window.removeEventListener("load", () => ScrollTrigger.refresh());
    };
  }, []);
}
