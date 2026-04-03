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
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 mt-10 md:mt-0">
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="flex-1 flex flex-col items-start w-full max-w-2xl z-10">
          {/* Badge / Chip (Google Style) */}
          <div className="reveal-card inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <Sparkles
              size={16}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6]">
              {t.hero.greeting}
            </span>
          </div>

          {/* Judul Utama */}
          <h1 className="reveal-card flex flex-col gap-1 mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight">
            <span className="text-[#202124] dark:text-white">Frontend</span>
            <span className="text-[#1A73E8] dark:text-[#8AB4F8]">
              {t.hero.role}
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="reveal-card text-base md:text-lg lg:text-xl text-[#5F6368] dark:text-[#9AA0A6] max-w-xl leading-relaxed font-normal mb-10">
            {t.hero.desc}
          </p>

          {/* Tombol Aksi */}
          <div className="reveal-card flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Primary Button */}
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-full bg-[#1A73E8] hover:bg-[#1B66C9] hover:shadow-md active:bg-[#174EA6] dark:bg-[#8AB4F8] dark:hover:bg-[#AECBFA] dark:hover:shadow-[#8AB4F8]/20 dark:active:bg-[#82A9EA] text-white dark:text-[#202124] font-medium tracking-wide transition-all duration-300"
            >
              <Code2
                size={20}
                strokeWidth={2}
                className="group-hover:scale-110 transition-transform"
              />
              {t.hero.btnProject}
            </a>

            {/* Secondary Button */}
            <Link
              href="/cv"
              onClick={() => startLoading(800)}
              className="group flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-full bg-transparent border border-[#DADCE0] dark:border-[#5F6368] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:border-[#BDC1C6] active:bg-[#F1F3F4] dark:active:bg-[#4A4D51] text-[#1A73E8] dark:text-[#8AB4F8] font-medium tracking-wide transition-all duration-300"
            >
              {t.hero.btnResume}
              <ArrowUpRight
                size={20}
                strokeWidth={2}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Kolom Kanan: Widget Cards (Material You Style) */}
        <div className="relative w-full max-w-sm lg:w-[420px] flex flex-col gap-6 shrink-0 mt-12 lg:mt-0 z-10 px-4 sm:px-0">
          {/* Ornamen Ikon (Responsif agar tidak nabrak di mobile) */}
          <div className="reveal-card absolute -top-10 -left-2 sm:-top-12 sm:-left-10 z-20 pointer-events-none">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-md border border-[#F1F3F4] dark:border-[#5F6368] -rotate-12 hover:rotate-0 transition-transform duration-300">
              <Laptop className="w-6 h-6 text-[#1A73E8] dark:text-[#8AB4F8]" />
            </div>
          </div>

          <div className="reveal-card absolute -bottom-8 -right-2 sm:-bottom-10 sm:-right-8 z-20 pointer-events-none">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-full shadow-md border border-[#F1F3F4] dark:border-[#5F6368] rotate-12 hover:rotate-0 transition-transform duration-300">
              <Zap className="w-6 h-6 text-[#FABB05] fill-[#FABB05]/30" />
            </div>
          </div>

          <div className="reveal-card absolute top-[40%] -right-4 sm:-right-12 z-0 hidden sm:block pointer-events-none">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] rotate-12">
              <Palette className="w-5 h-5 text-[#EA4335] dark:text-[#F28B82]" />
            </div>
          </div>

          {/* Card 1: Lokasi */}
          <div className="reveal-card relative z-10 w-full group">
            <div className="flex items-center gap-5 p-5 sm:p-6 rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 flex shrink-0 items-center justify-center rounded-[1.25rem] bg-[#FCE8E6] dark:bg-[#F28B82]/15 text-[#EA4335] dark:text-[#F28B82] group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider">
                  {t.hero.locationLabel}
                </p>
                <p className="font-semibold text-lg text-[#202124] dark:text-[#E8EAED]">
                  {t.hero.locationValue}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Status */}
          <div className="reveal-card relative z-10 w-full group">
            <div className="flex items-center gap-5 p-5 sm:p-6 rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 flex shrink-0 items-center justify-center rounded-[1.25rem] bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#34A853] dark:text-[#81C995] group-hover:scale-110 transition-transform duration-300">
                <div className="relative flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-60" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#34A853]" />
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider">
                  {t.hero.statusLabel}
                </p>
                <p className="font-semibold text-lg text-[#202124] dark:text-[#E8EAED]">
                  {t.hero.statusValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
