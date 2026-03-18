"use client";

import { useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Palette,
  Code,
} from "lucide-react";
import { useHeroAnimation } from "@/hooks/useAnimations";
import CVModal from "./CVModal";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useHeroAnimation(container);

  return (
    <>
      <section
        ref={container}
        className="
          relative
          min-h-screen
          bg-[#f5f3ef] text-zinc-900
          dark:bg-[#0c0c0e] dark:text-zinc-50
          px-4 pt-28 pb-10 md:px-10 md:pt-32
          flex items-center justify-center
          overflow-hidden
          transition-colors duration-500
        "
      >
        {/* Grain Texture Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />

        {/* Radial gradient accent */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-300/20 dark:bg-violet-700/10 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-200/20 dark:bg-amber-600/10 blur-[100px]" />
        </div>

        {/* Thin horizontal rule accent */}
        <div className="pointer-events-none absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300/60 dark:via-zinc-700/60 to-transparent z-0" />

        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto z-10">
          {/* ── BENTO 1: MAIN TITLE ─────────────────────────────────── */}
          <div className="reveal-card col-span-1 sm:col-span-2 md:col-span-8 md:row-span-2">
            <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-[0_2px_40px_0px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_40px_0px_rgba(0,0,0,0.4)] p-8 md:p-14 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_8px_60px_0px_rgba(109,40,217,0.10)] dark:hover:shadow-[0_8px_60px_0px_rgba(109,40,217,0.18)]">
              {/* Decorative ghost icons */}
              <Code
                className="absolute -bottom-16 -left-16 w-72 md:w-96 h-72 md:h-96 text-violet-400/[0.04] dark:text-violet-400/[0.06] -rotate-12 pointer-events-none z-0 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-105"
                strokeWidth={1.5}
              />
              <Palette
                className="absolute -top-16 -right-16 w-64 md:w-80 h-64 md:h-80 text-amber-400/[0.05] dark:text-amber-400/[0.07] rotate-12 pointer-events-none z-0 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105"
                strokeWidth={1.5}
              />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 md:mb-9 rounded-full border border-violet-200 dark:border-violet-800/60 bg-violet-50 dark:bg-violet-950/50 shadow-sm">
                  <Sparkles
                    size={13}
                    className="text-violet-500 dark:text-violet-400"
                  />
                  <span className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-violet-700 dark:text-violet-300 font-mono">
                    Hi, I'm Kevin 👋
                  </span>
                </div>

                {/* Headline */}
                <div className="flex flex-col gap-0.5 md:gap-1">
                  <h1
                    className="leading-[0.88] tracking-[-0.04em] font-extrabold text-[13vw] sm:text-[11vw] md:text-[7.5vw] text-zinc-900 dark:text-white"
                    style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}
                  >
                    FRONTEND
                  </h1>
                  <h1
                    className="leading-[0.88] tracking-[-0.04em] font-extrabold text-[13vw] sm:text-[11vw] md:text-[7.5vw]"
                    style={{
                      fontFamily: "'Syne', 'DM Sans', sans-serif",
                      WebkitTextStroke: "2px",
                      WebkitTextStrokeColor: "currentColor",
                      color: "transparent",
                      backgroundImage:
                        "linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #c4b5fd 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    DEVELOPER
                  </h1>
                </div>

                {/* Sub-text */}
                <p className="mt-6 md:mt-8 text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md tracking-wide">
                  Crafting elegant, high-performance web experiences — from
                  pixel-perfect UI to seamless interactions.
                </p>
              </div>
            </div>
          </div>

          {/* ── BENTO 2: LOCATION ───────────────────────────────────── */}
          <div className="reveal-card col-span-1 md:col-span-4">
            <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-red-300/60 dark:hover:border-red-800/40 hover:shadow-[0_4px_30px_0px_rgba(239,68,68,0.08)]">
              {/* Top accent line */}
              <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-red-400 to-pink-400 mb-4" />

              <div>
                <p className="text-[10px] md:text-[11px] font-mono font-semibold tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-500">
                  Portfolio
                </p>
                <p className="text-[9px] md:text-[10px] font-mono tracking-widest text-zinc-300 dark:text-zinc-600 mt-1">
                  ©2026
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6">
                <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 shadow-sm group-hover:bg-red-500 transition-colors duration-300">
                  <MapPin
                    size={18}
                    className="text-red-500 dark:text-red-400 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base text-zinc-800 dark:text-zinc-100 tracking-wide">
                    Indonesia
                  </p>
                  <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-0.5">
                    Location
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── BENTO 3: AVAILABLE FOR WORK ─────────────────────────── */}
          <div className="reveal-card col-span-1 md:col-span-4">
            <div className="w-full h-full relative overflow-hidden rounded-2xl border border-emerald-200/70 dark:border-emerald-800/40 bg-gradient-to-br from-emerald-50 to-teal-50/60 dark:from-emerald-950/30 dark:to-teal-950/20 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(16,185,129,0.08)] dark:shadow-[0_2px_20px_0px_rgba(16,185,129,0.05)] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_40px_0px_rgba(16,185,129,0.14)]">
              {/* Ping dot badge */}
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-white/70 dark:bg-zinc-900/60 border border-emerald-200 dark:border-emerald-700/50 shadow-sm mb-4">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                  Status
                </span>
              </div>

              <div className="mt-auto">
                <p
                  className="text-xl md:text-2xl font-extrabold leading-tight tracking-tight text-emerald-900 dark:text-emerald-300"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  AVAILABLE
                  <br />
                  FOR WORK
                </p>
                <p className="mt-2 text-[10px] md:text-xs font-mono text-emerald-600/70 dark:text-emerald-500/70 uppercase tracking-widest">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>

          {/* ── BENTO 4: ACTION BUTTONS ──────────────────────────────── */}
          <div className="col-span-1 sm:col-span-2 md:col-span-12 flex flex-col sm:flex-row gap-4 md:gap-5">
            {/* PRIMARY: Projects */}
            <div className="reveal-card flex-1">
              <a
                href="#projects"
                className="group w-full h-full relative overflow-hidden flex items-center justify-between rounded-2xl border border-violet-300/60 dark:border-violet-700/40 bg-gradient-to-br from-violet-600 to-violet-700 dark:from-violet-700 dark:to-violet-800 p-5 md:p-6 shadow-[0_4px_30px_0px_rgba(109,40,217,0.25)] dark:shadow-[0_4px_30px_0px_rgba(109,40,217,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_0px_rgba(109,40,217,0.35)] active:translate-y-0.5"
              >
                {/* Shine sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Project
                  </span>
                  <span
                    className="text-base md:text-lg font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Lihat Karya
                  </span>
                </div>

                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-white/15 border border-white/20 group-hover:bg-white group-hover:text-violet-700 transition-colors duration-300 shadow-inner">
                  <ArrowDownRight
                    size={20}
                    strokeWidth={2.5}
                    className="text-white group-hover:text-violet-700 transition-colors duration-300"
                  />
                </div>
              </a>
            </div>

            {/* SECONDARY: CV */}
            <div className="reveal-card flex-1">
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="group w-full h-full relative overflow-hidden flex items-center justify-between rounded-2xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md p-5 md:p-6 shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-[0_8px_30px_0px_rgba(0,0,0,0.09)] active:translate-y-0.5 text-left"
              >
                {/* Shine sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-zinc-100/40 dark:via-white/5 to-transparent skew-x-12 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Resume
                  </span>
                  <span
                    className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    View CV
                  </span>
                </div>

                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:bg-violet-600 group-hover:border-violet-600 transition-colors duration-300">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.5}
                    className="text-zinc-600 dark:text-zinc-300 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL CV */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        cvUrl="/CV_KEVIN_ARDIANSYAH_2026.pdf"
      />
    </>
  );
}
