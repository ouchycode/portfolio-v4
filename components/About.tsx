"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAboutAnimation } from "@/hooks/useAnimations";
import { MapPin, GraduationCap } from "lucide-react";

export default function About() {
  const container = useRef<HTMLElement>(null);

  useAboutAnimation(container);

  return (
    <section
      id="about"
      ref={container}
      className="
        relative overflow-hidden
        px-4 py-24 md:px-10 md:py-32
        bg-[#f5f3ef] text-zinc-900
        dark:bg-[#0c0c0e] dark:text-zinc-50
        transition-colors duration-500
        z-10
      "
    >
      {/* ── Grain Texture ──────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Radial gradient accents ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-300/15 dark:bg-violet-700/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-200/20 dark:bg-blue-700/8 blur-[100px]" />
      </div>

      {/* ── Section label ──────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
            01 /
          </span>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-300">
            About Me
          </span>
        </div>
      </div>

      {/* ── Bento Grid ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto">
        {/* BENTO 1: PROFILE IMAGE */}
        <div className="about-animate md:col-span-5 md:row-span-3 h-full">
          <div className="group relative w-full aspect-[4/5] md:aspect-auto md:h-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_4px_40px_0px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_40px_0px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_8px_60px_0px_rgba(109,40,217,0.12)] dark:hover:shadow-[0_8px_60px_0px_rgba(109,40,217,0.18)] hover:-translate-y-1">
            <Image
              src="/profile_kevin_hd.png"
              alt="Kevin Ardiansyah"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
              priority
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/10 to-transparent" />

            {/* Name tag at bottom */}
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-white/90">
                  Kevin Ardiansyah
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BENTO 2: HEADER */}
        <div className="about-animate md:col-span-7 h-full">
          <div className="w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-7 md:p-10 flex flex-col justify-center gap-5 transition-colors duration-500">
            <h2
              className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-[14vw] md:text-[6vw] lg:text-[5.5vw] text-zinc-900 dark:text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              ABOUT
            </h2>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                [ Persona ]
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-200 dark:border-violet-700/50 bg-violet-50 dark:bg-violet-950/40 text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-violet-700 dark:text-violet-300 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                Frontend Engineer
              </span>
            </div>
          </div>
        </div>

        {/* BENTO 3: DESCRIPTION */}
        <div className="about-animate md:col-span-7 h-full">
          <div className="w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-7 md:p-10 flex flex-col gap-6 transition-colors duration-500">
            <p
              className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-zinc-800 dark:text-zinc-200"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Saya{" "}
              <span className="relative inline-block px-2 py-0.5 mx-0.5 -translate-y-0.5">
                <span className="absolute inset-0 rounded-lg bg-amber-300/70 dark:bg-amber-500/30 -rotate-1" />
                <span className="relative font-extrabold text-zinc-900 dark:text-amber-200">
                  Kevin
                </span>
              </span>
              , mahasiswa Universitas Yatsi Madani yang fokus membangun
              antarmuka web yang fungsional dan estetik.
            </p>

            <div className="w-12 h-px bg-gradient-to-r from-zinc-300 dark:from-zinc-600 to-transparent" />

            <p className="text-sm md:text-[15px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
              Berbasis di Tangerang, saya fokus pada pengembangan{" "}
              <span className="inline-flex items-center gap-1 px-2.5 py-1 mx-0.5 rounded-lg border border-indigo-200 dark:border-indigo-700/50 bg-indigo-50 dark:bg-indigo-950/40 text-[10px] font-mono font-semibold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 shadow-sm -translate-y-0.5 inline-block">
                Frontend Ecosystem
              </span>{" "}
              . Selain ngoding, saya juga mengeksplorasi desain grafis dan
              branding, serta memiliki ketertarikan pada fotografi dan dunia
              e-sports.
            </p>
          </div>
        </div>

        {/* BENTO 4: LOCATION */}
        <div className="about-animate md:col-span-3 h-full">
          <div className="group w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-red-300/60 dark:hover:border-red-800/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_0px_rgba(239,68,68,0.10)]">
            <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-red-400 to-pink-400 mb-4" />

            <div className="flex-1 flex flex-col justify-end gap-4">
              <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 shadow-sm group-hover:bg-red-500 transition-colors duration-300">
                <MapPin
                  size={20}
                  className="text-red-500 dark:text-red-400 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-1">
                  Location
                </p>
                <p
                  className="font-bold text-sm md:text-base text-zinc-800 dark:text-zinc-100 tracking-wide"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Tangerang, ID
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BENTO 5: EDUCATION */}
        <div className="about-animate md:col-span-4 h-full">
          <div className="group w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-br from-blue-50/60 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/10 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-blue-300/60 dark:hover:border-blue-700/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_0px_rgba(96,165,250,0.10)]">
            <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 mb-4" />

            <div className="flex-1 flex flex-col justify-end gap-4">
              <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 shadow-sm group-hover:bg-blue-500 transition-colors duration-300">
                <GraduationCap
                  size={20}
                  className="text-blue-500 dark:text-blue-400 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-1">
                  Education
                </p>
                <p
                  className="font-bold text-sm md:text-base text-zinc-800 dark:text-zinc-100 tracking-wide"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Univ. Yatsi Madani
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
