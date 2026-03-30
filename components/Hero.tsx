"use client";

import { useRef, useState } from "react";
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
import CVModal from "./CVModal";
import { useLanguage } from "@/context/LanguageContext"; // Import context bahasa

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const { t } = useLanguage(); // Panggil fungsi translasi

  useHeroAnimation(container);

  return (
    <>
      <section
        ref={container}
        className="
          relative min-h-screen
          flex flex-col justify-center
          px-4 py-20 md:px-10
          text-[#202124] dark:text-[#E8EAED]
          transition-colors duration-500
          overflow-hidden
        "
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-10 md:mt-0">
          {/* TEKS UTAMA */}
          <div className="flex-1 flex flex-col items-start w-full">
            <div className="reveal-card inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm">
              <Sparkles
                size={16}
                className="text-[#1A73E8] dark:text-[#8AB4F8]"
              />
              <span className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6]">
                {t.hero.greeting}
              </span>
            </div>

            <h1 className="reveal-card flex flex-col gap-1 md:gap-2 mb-6 text-[14vw] sm:text-[10vw] md:text-[6.5vw] lg:text-[7vw] font-extrabold leading-[1.05] tracking-tighter">
              <span className="text-[#202124] dark:text-white">Frontend</span>
              <span className="text-[#1A73E8] dark:text-[#8AB4F8]">
                {t.hero.role}
              </span>
            </h1>

            <p className="reveal-card text-base md:text-xl text-[#5F6368] dark:text-[#9AA0A6] max-w-xl leading-relaxed font-medium mb-8">
              {t.hero.desc}
            </p>

            <div className="reveal-card flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] dark:bg-[#8AB4F8] dark:hover:bg-[#aecbfa] text-white dark:text-[#202124] font-bold tracking-wide transition-colors"
              >
                <Code2 size={20} strokeWidth={2.5} />
                {t.hero.btnProject}
              </a>
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#5F6368] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] text-[#1A73E8] dark:text-[#8AB4F8] font-bold tracking-wide transition-colors shadow-sm"
              >
                {t.hero.btnResume}
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* KARTU STATUS KANAN */}
          <div className="relative w-full md:w-[340px] flex flex-col gap-5 shrink-0 mt-12 md:mt-0 pt-4 md:pt-0">
            <div className="reveal-card absolute -top-6 -left-2 md:-top-8 md:-left-10 z-20 p-2.5 md:p-3.5 bg-white dark:bg-[#303134] rounded-xl md:rounded-2xl shadow-[0_15px_30px_rgba(26,115,232,0.15)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm -rotate-12">
              <Laptop className="w-5 h-5 md:w-7 md:h-7 text-[#1A73E8] dark:text-[#8AB4F8]" />
            </div>

            <div className="reveal-card absolute -bottom-4 -right-1 md:-bottom-6 md:-right-8 z-20 p-3 md:p-4 bg-white dark:bg-[#303134] rounded-full shadow-[0_15px_30px_rgba(250,187,5,0.15)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm rotate-12">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#FABB05] fill-[#FABB05]/20" />
            </div>

            <div className="reveal-card absolute top-[35%] -right-3 md:-right-12 z-0 p-2 md:p-3 bg-white dark:bg-[#303134] rounded-lg md:rounded-xl shadow-[0_15px_30px_rgba(234,67,53,0.15)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm rotate-12">
              <Palette className="w-5 h-5 md:w-6 md:h-6 text-[#EA4335] dark:text-[#F28B82]" />
            </div>

            <div className="reveal-card relative z-10 flex items-center gap-4 p-5 md:p-6 rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-300">
              <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-[#FCE8E6] dark:bg-[#F28B82]/15 text-[#EA4335] dark:text-[#F28B82]">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider mb-0.5">
                  {t.hero.locationLabel}
                </p>
                <p className="font-bold text-lg text-[#202124] dark:text-[#E8EAED]">
                  {t.hero.locationValue}
                </p>
              </div>
            </div>

            <div className="reveal-card relative z-10 flex items-center gap-4 p-5 md:p-6 rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-300">
              <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#34A853] dark:text-[#81C995]">
                <div className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34A853]" />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider mb-0.5">
                  {t.hero.statusLabel}
                </p>
                <p className="font-bold text-lg text-[#202124] dark:text-[#E8EAED]">
                  {t.hero.statusValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        cvUrl="/CV_KEVIN_ARDIANSYAH_2026.pdf"
      />
    </>
  );
}
