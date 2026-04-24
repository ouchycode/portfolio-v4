"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Sparkles,
  Code2,
  Laptop,
  Zap,
  Palette,
} from "lucide-react";
import { useHeroAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();

  useHeroAnimation(container);

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500 overflow-visible md:overflow-hidden"
    >
      {/* ── Subtle grid texture overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full z-0 opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #1A73E8 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full z-0 opacity-20 dark:opacity-15"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, #34A853 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 mt-10 md:mt-0">
        {/* ────────────────────────────────────────
            LEFT COLUMN
        ──────────────────────────────────────── */}
        <div className="flex-1 flex flex-col items-start w-full max-w-2xl z-10">
          {/* ── Eyebrow badge ── */}
          <div className="reveal-card inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-md shadow-sm">
            <Sparkles
              size={14}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#5F6368] dark:text-[#9AA0A6]">
              {t.hero.greeting}
            </span>
          </div>

          {/* ── Main headline ── */}
          <h1 className="reveal-card mb-6 leading-[1.05] tracking-[-0.03em]">
            {/* "Frontend" — neutral, heavy */}
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black text-[#202124] dark:text-[#E8EAED]"
              style={{ fontVariationSettings: "'wght' 900" }}
            >
              Frontend
            </span>

            {/* Role — Google-blue gradient stroke effect */}
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black relative"
              style={{
                background:
                  "linear-gradient(135deg, #1A73E8 0%, #4285F4 45%, #34A853 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.hero.role}
            </span>
          </h1>

          {/* ── Thin divider with dot ── */}
          <div className="reveal-card flex items-center gap-3 mb-8 w-full max-w-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
            <div className="h-px flex-1 bg-gradient-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
          </div>

          {/* ── Description ── */}
          <p className="reveal-card text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-[44ch] leading-relaxed mb-12">
            {t.hero.desc}
          </p>

          {/* ── CTA buttons ── */}
          <div className="reveal-card flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Primary — Google Blue pill */}
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 h-12 md:h-[52px] px-8 rounded-full font-semibold text-sm tracking-wide text-white overflow-hidden transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
              style={{ background: "linear-gradient(135deg,#1A73E8,#4285F4)" }}
            >
              {/* hover shimmer */}
              <span
                aria-hidden
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Code2
                size={18}
                strokeWidth={2.2}
                className="relative z-10 group-hover:rotate-[8deg] transition-transform duration-300"
              />
              <span className="relative z-10">{t.hero.btnProject}</span>
            </a>

            {/* Secondary — ghost pill */}
            <Link
              href="/cv"
              onClick={() => startLoading(800)}
              className="group inline-flex items-center justify-center gap-2.5 h-12 md:h-[52px] px-8 rounded-full font-semibold text-sm tracking-wide border border-[#DADCE0] dark:border-[#5F6368] bg-white/60 dark:bg-[#303134]/60 backdrop-blur-sm text-[#1A73E8] dark:text-[#8AB4F8] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:border-[#BDC1C6] dark:hover:border-[#9AA0A6] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
            >
              {t.hero.btnResume}
              <ArrowUpRight
                size={16}
                strokeWidth={2.2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>

        {/* ────────────────────────────────────────
            RIGHT COLUMN  — stacked info cards
        ──────────────────────────────────────── */}
        <div className="relative w-full max-w-sm lg:w-[400px] flex flex-col gap-4 shrink-0 mt-12 lg:mt-0 z-10 px-4 sm:px-0">
          {/* ── Floating decorative icons ── */}
          <div className="reveal-card absolute -top-10 -left-4 sm:-top-14 sm:-left-10 z-20 pointer-events-none select-none">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-md border border-[#F1F3F4] dark:border-[#5F6368] -rotate-12 hover:rotate-0 transition-transform duration-500">
              <Laptop className="w-5 h-5 text-[#1A73E8] dark:text-[#8AB4F8]" />
            </div>
          </div>

          <div className="reveal-card absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-8 z-20 pointer-events-none select-none">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-full shadow-md border border-[#F1F3F4] dark:border-[#5F6368] rotate-12 hover:rotate-0 transition-transform duration-500">
              <Zap className="w-5 h-5 text-[#FABB05] fill-[#FABB05]/25" />
            </div>
          </div>

          <div className="reveal-card absolute top-[38%] -right-4 sm:-right-12 z-0 hidden sm:block pointer-events-none select-none">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] rotate-12">
              <Palette className="w-4 h-4 text-[#EA4335] dark:text-[#F28B82]" />
            </div>
          </div>

          {/* ── Card 1 : Location ── */}
          <div className="reveal-card group relative z-10 w-full">
            <div
              className="flex items-center gap-5 p-5 rounded-3xl bg-white/80 dark:bg-[#303134]/80 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow:
                  "0 1px 3px rgba(60,64,67,.08), 0 4px 12px rgba(60,64,67,.06)",
              }}
            >
              {/* icon container */}
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl bg-[#FCE8E6] dark:bg-[#F28B82]/10 text-[#EA4335] dark:text-[#F28B82] group-hover:scale-110 transition-transform duration-300">
                <MapPin size={22} strokeWidth={2} />
              </div>

              {/* text */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
                  {t.hero.locationLabel}
                </p>
                <p className="font-semibold text-base text-[#202124] dark:text-[#E8EAED] truncate">
                  {t.hero.locationValue}
                </p>
              </div>

              {/* subtle right-side accent bar */}
              <span
                aria-hidden
                className="ml-auto w-0.5 h-8 rounded-full shrink-0 bg-gradient-to-b from-[#EA4335]/30 to-transparent"
              />
            </div>
          </div>

          {/* ── Card 2 : Status ── */}
          <div className="reveal-card group relative z-10 w-full">
            <div
              className="flex items-center gap-5 p-5 rounded-3xl bg-white/80 dark:bg-[#303134]/80 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow:
                  "0 1px 3px rgba(60,64,67,.08), 0 4px 12px rgba(60,64,67,.06)",
              }}
            >
              {/* ping dot icon container */}
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl bg-[#E6F4EA] dark:bg-[#81C995]/10 text-[#34A853] dark:text-[#81C995] group-hover:scale-110 transition-transform duration-300">
                <div className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34A853]" />
                </div>
              </div>

              {/* text */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
                  {t.hero.statusLabel}
                </p>
                <p className="font-semibold text-base text-[#202124] dark:text-[#E8EAED] truncate">
                  {t.hero.statusValue}
                </p>
              </div>

              {/* subtle right-side accent bar */}
              <span
                aria-hidden
                className="ml-auto w-0.5 h-8 rounded-full shrink-0 bg-gradient-to-b from-[#34A853]/30 to-transparent"
              />
            </div>
          </div>

          {/* ── Card 3 : Skill chips (bonus info card) ── */}
          <div className="reveal-card group relative z-10 w-full">
            <div
              className="flex flex-wrap items-center gap-2 p-5 rounded-3xl bg-white/80 dark:bg-[#303134]/80 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow:
                  "0 1px 3px rgba(60,64,67,.08), 0 4px 12px rgba(60,64,67,.06)",
              }}
            >
              {[
                { label: "React", color: "#61DAFB", bg: "#E8F8FD" },
                { label: "Next.js", color: "#202124", bg: "#F1F3F4" },
                { label: "TypeScript", color: "#3178C6", bg: "#E8F0FD" },
                { label: "Tailwind", color: "#06B6D4", bg: "#E0F7FA" },
                { label: "Figma", color: "#F24E1E", bg: "#FEE8E4" },
              ].map(({ label, color, bg }) => (
                <span
                  key={label}
                  className="inline-flex items-center h-7 px-3 rounded-full text-xs font-semibold transition-transform duration-200 hover:scale-105"
                  style={{
                    color,
                    background: bg,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
