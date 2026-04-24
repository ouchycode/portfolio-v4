"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAboutAnimation } from "@/hooks/useAnimations";
import { User, Code2, GraduationCap, Camera, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useAboutAnimation(container);

  return (
    <section
      id="about"
      ref={container}
      className="relative overflow-visible md:overflow-hidden px-6 md:px-12 lg:px-20 py-24 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-120 h-120 rounded-full z-0 opacity-20 dark:opacity-15"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, #1A73E8 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        {/* ── HEADER ── */}
        <div className="flex flex-col gap-3 md:gap-4 mb-2 md:mb-4">
          <div className="about-animate inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-md shadow-sm w-fit">
            <User size={14} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
              {t.nav.about}
            </span>
          </div>

          <div className="about-animate flex items-end gap-4">
            <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
              {t.about.title}
            </h2>
            {/* decorative line extending from heading */}
            <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
              <span className="w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
              <div className="h-px flex-1 bg-linier-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* ──────────────────────────────
              LEFT: Profile photo
          ────────────────────────────── */}
          <div className="lg:col-span-5 relative flex flex-col justify-center w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto z-10 px-4 sm:px-0">
            {/* Floating icon — Camera */}
            <div className="about-animate absolute -top-6 -left-2 sm:-top-8 sm:-left-6 z-20 pointer-events-none hidden sm:block">
              <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-md border border-[#F1F3F4] dark:border-[#5F6368] -rotate-12 hover:rotate-0 transition-transform duration-500">
                <Camera className="w-5 h-5 text-[#1A73E8] dark:text-[#8AB4F8]" />
              </div>
            </div>

            {/* Floating icon — Gamepad */}
            <div className="about-animate absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 z-20 pointer-events-none">
              <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-md border border-[#F1F3F4] dark:border-[#5F6368] rotate-12 hover:rotate-0 transition-transform duration-500">
                <Gamepad2 className="w-5 h-5 text-[#EA4335] dark:text-[#F28B82]" />
              </div>
            </div>

            {/* Photo card */}
            <div className="about-animate relative w-full aspect-square sm:aspect-4/5 z-10 group">
              <div
                className="relative w-full h-full rounded-4xl md:rounded-[2.5rem] overflow-hidden transition-all duration-500"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(60,64,67,.10), 0 8px 24px rgba(60,64,67,.10)",
                  border: "1px solid rgba(218,220,224,0.6)",
                }}
              >
                <Image
                  src="/profile_kevin_hd.png"
                  alt="Kevin Ardiansyah"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/75 via-[#202124]/10 to-transparent transition-opacity duration-500" />

                {/* Google-style bottom info strip */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-6 py-5 flex items-end justify-between">
                  <div>
                    <p className="text-white/60 text-[11px] font-semibold tracking-[0.12em] uppercase mb-0.5">
                      Portfolio
                    </p>
                    <p className="text-white font-bold text-lg leading-tight tracking-tight">
                      Kevin Ardiansyah
                    </p>
                  </div>
                  {/* small G-color dot row */}
                  <div className="flex gap-1.5 items-center pb-1">
                    {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                      <span
                        key={c}
                        className="w-2 h-2 rounded-full opacity-90"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ──────────────────────────────
              RIGHT: Description + Education
          ────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-5 w-full">
            {/* ── Description card ── */}
            <div className="about-animate flex-1">
              <div
                className="h-full rounded-[2rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 p-8 sm:p-10 flex flex-col justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
                }}
              >
                {/* Role pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-[#E8F0FE] dark:bg-[#8AB4F8]/12 text-[#1A73E8] dark:text-[#8AB4F8] w-fit">
                  <Code2 size={15} strokeWidth={2.2} />
                  <span className="text-xs font-bold tracking-[0.08em] uppercase">
                    {t.about.tag}
                  </span>
                </div>

                {/* Headline */}
                <p className="text-2xl md:text-3xl lg:text-[2rem] font-black leading-[1.15] tracking-[-0.02em] text-[#202124] dark:text-[#E8EAED] mb-6">
                  {t.about.headline}
                </p>

                {/* Google-colored underline bar */}
                <div className="flex gap-1 mb-7">
                  {[
                    ["#EA4335", "flex-1"],
                    ["#FABB05", "w-3"],
                    ["#34A853", "flex-1"],
                    ["#1A73E8", "w-3"],
                  ].map(([color, size], i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full ${size}`}
                      style={{ background: color, opacity: 0.85 }}
                    />
                  ))}
                </div>

                <p className="text-base sm:text-[17px] text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
                  {t.about.description}
                </p>
              </div>
            </div>

            {/* ── Education card ── */}
            <div className="about-animate w-full group">
              <div
                className="w-full rounded-[2rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] dark:bg-[#8AB4F8]/12 text-[#1A73E8] dark:text-[#8AB4F8] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <GraduationCap size={26} strokeWidth={2} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
                    {t.about.eduLabel}
                  </p>
                  <p className="font-semibold text-base md:text-lg text-[#202124] dark:text-[#E8EAED] truncate">
                    {t.about.eduValue}
                  </p>
                </div>

                {/* Accent bar */}
                <span
                  aria-hidden
                  className="hidden sm:block ml-auto w-0.5 h-10 rounded-full shrink-0 bg-gradient-to-b from-[#1A73E8]/30 to-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
