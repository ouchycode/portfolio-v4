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
        bg-[#fafafa] text-zinc-900
        dark:bg-[#0a0a0a] dark:text-zinc-50
        px-4 pt-28 pb-8 md:px-8 md:pt-32
        flex items-center justify-center
        overflow-hidden
        transition-colors duration-500
        "
      >
        {/* Pixel Dotted Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] dark:bg-[radial-gradient(#3f3f46_2px,transparent_2px)] [background-size:24px_24px] opacity-70 pointer-events-none transition-colors duration-500"></div>

        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto z-10">
          {/* BENTO 1: MAIN TITLE */}
          <div className="reveal-card col-span-1 sm:col-span-2 md:col-span-8 md:row-span-2 h-full">
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-12 flex flex-col justify-center shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(228,228,231,1)] transition-all duration-300">
              <Code
                className="absolute -bottom-12 -left-12 w-64 md:w-80 h-64 md:h-80 text-blue-500/[0.05] dark:text-blue-400/[0.05] -rotate-12 pointer-events-none z-0"
                strokeWidth={2}
              />
              <Palette
                className="absolute -top-12 -right-12 w-56 md:w-72 h-56 md:h-72 text-pink-500/[0.05] dark:text-pink-400/[0.05] rotate-12 pointer-events-none z-0"
                strokeWidth={2}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 border-2 border-blue-900 dark:border-blue-400 rounded-sm w-fit mb-4 md:mb-6 shadow-[2px_2px_0px_0px_rgba(30,58,138,1)] dark:shadow-[2px_2px_0px_0px_rgba(96,165,250,1)]">
                  <Sparkles
                    size={14}
                    className="text-blue-700 dark:text-blue-300"
                  />
                  <span className="font-pixel text-[10px] md:text-sm font-bold tracking-widest text-blue-900 dark:text-blue-100 uppercase">
                    Hi, I'm Kevin 👋
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="font-pixel text-[11vw] sm:text-[10vw] md:text-[6.5vw] font-black leading-none tracking-tighter text-zinc-900 dark:text-white transition-colors duration-500">
                    FRONTEND
                  </h1>
                  <h1 className="font-pixel text-[11vw] sm:text-[10vw] md:text-[6.5vw] font-black leading-none tracking-tighter text-violet-600 dark:text-violet-400 drop-shadow-[3px_3px_0_#18181b] dark:drop-shadow-[3px_3px_0_#e4e4e7] transition-all duration-500">
                    DEVELOPER
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO 2: INFO / LOKASI (Aksen Merah) */}
          <div className="reveal-card col-span-1 md:col-span-4 h-full">
            <div className="w-full h-full relative overflow-hidden bg-[#fafafa] dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-5 md:p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(228,228,231,1)] group transition-all duration-300">
              <div className="relative z-10 flex flex-col h-full justify-between gap-6 md:gap-0">
                <div>
                  <h3 className="font-pixel text-sm md:text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                    Portfolio
                  </h3>
                  <p className="font-pixel text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-2">
                    ©2026
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-zinc-900 dark:text-zinc-100 font-bold mt-auto">
                  <div className="bg-red-100 dark:bg-red-950/50 p-2 md:p-3 rounded-sm border-2 border-red-900 dark:border-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-[2px_2px_0px_0px_rgba(127,29,29,1)] dark:shadow-[2px_2px_0px_0px_rgba(239,68,68,1)]">
                    <MapPin
                      size={18}
                      className="text-red-700 dark:text-red-400 group-hover:text-white md:w-6 md:h-6"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-pixel text-xs md:text-sm tracking-wider">
                      Indonesia
                    </span>
                    <span className="font-pixel text-[8px] md:text-[10px] text-zinc-500 dark:text-zinc-400 mt-1">
                      Location
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO 3: STATUS KERJA (Aksen Hijau Retro) */}
          <div className="reveal-card col-span-1 md:col-span-4 h-full">
            <div className="w-full h-full relative overflow-hidden bg-lime-200 dark:bg-emerald-950/40 border-2 md:border-4 border-lime-900 dark:border-emerald-500 rounded-md p-5 md:p-8 flex items-center justify-center md:justify-start shadow-[4px_4px_0px_0px_rgba(54,83,20,1)] dark:shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] transition-colors duration-500">
              <div className="relative z-10 flex flex-col items-center md:items-start gap-4 w-full">
                <div className="flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 px-3 py-1.5 md:px-4 md:py-2 rounded-sm border-2 border-lime-900 dark:border-emerald-500 shadow-[2px_2px_0px_0px_rgba(54,83,20,1)] dark:shadow-[2px_2px_0px_0px_rgba(16,185,129,1)] w-full md:w-fit">
                  <div className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-emerald-500 opacity-80"></span>
                    <span className="relative inline-flex h-3 w-3 bg-emerald-500 border border-lime-900 dark:border-emerald-200"></span>
                  </div>
                  <span className="font-pixel text-[8px] md:text-[10px] uppercase font-bold text-lime-950 dark:text-emerald-400 tracking-widest">
                    Status
                  </span>
                </div>
                <h2 className="font-pixel text-sm sm:text-base md:text-xl text-lime-950 dark:text-emerald-400 tracking-wider text-center md:text-left leading-relaxed">
                  AVAILABLE <br className="hidden md:block" /> FOR WORK
                </h2>
              </div>
            </div>
          </div>

          {/* BENTO 4: ACTIONS / BUTTONS (Dinaikkan menggantikan deskripsi) */}
          <div className="col-span-1 sm:col-span-2 md:col-span-12 flex flex-col sm:flex-row gap-4 md:gap-6 mt-2 md:mt-0">
            {/* PRIMARY BUTTON: PROJECT */}
            <div className="reveal-card flex-1 h-full">
              <a
                href="#projects"
                className="w-full h-full relative overflow-hidden group flex items-center justify-between bg-violet-600 dark:bg-violet-600 text-white border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(228,228,231,1)] uppercase tracking-wide transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(228,228,231,1)] hover:bg-violet-700 active:translate-y-1 active:translate-x-1 active:shadow-none"
              >
                <div className="relative z-10 flex flex-col items-start gap-2">
                  <span className="font-pixel text-[8px] md:text-[10px] text-violet-200 uppercase tracking-widest">
                    Project
                  </span>
                  <span className="font-pixel text-sm md:text-base tracking-widest text-white">
                    Lihat Karya
                  </span>
                </div>
                <div className="relative z-10 bg-white border-2 border-zinc-900 p-2 md:p-3 rounded-sm text-zinc-900 group-hover:bg-yellow-300 transition-colors duration-200">
                  <ArrowDownRight
                    size={20}
                    strokeWidth={3}
                    className="md:w-6 md:h-6"
                  />
                </div>
              </a>
            </div>

            {/* SECONDARY BUTTON: CV */}
            <div className="reveal-card flex-1 h-full">
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="w-full h-full relative overflow-hidden group flex items-center justify-between bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-5 md:p-6 uppercase tracking-wide transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(228,228,231,1)] hover:bg-zinc-50 dark:hover:bg-zinc-700 active:translate-y-1 active:translate-x-1 active:shadow-none text-left"
              >
                <div className="relative z-10 flex flex-col items-start gap-2">
                  <span className="font-pixel text-[8px] md:text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                    CV
                  </span>
                  <span className="font-pixel text-sm md:text-base tracking-widest text-zinc-900 dark:text-zinc-100">
                    View CV
                  </span>
                </div>
                <div className="relative z-10 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 p-2 md:p-3 rounded-sm text-zinc-900 dark:text-zinc-100 group-hover:bg-violet-600 group-hover:dark:bg-violet-500 group-hover:text-white transition-colors duration-200">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={3}
                    className="md:w-6 md:h-6"
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
