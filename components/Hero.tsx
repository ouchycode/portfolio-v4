"use client";

import { useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Code2,
  Palette,
  MonitorSmartphone,
  Code,
  Layers,
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
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none transition-colors duration-500"></div>

        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-5 auto-rows-auto z-10">
          {/* BENTO 1: MAIN TITLE */}
          <div className="reveal-card col-span-2 md:col-span-8 md:row-span-2 h-full">
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 flex flex-col justify-center shadow-sm hover:shadow-md transition-all duration-500">
              <Code
                className="absolute -bottom-16 -left-12 w-64 md:w-80 h-64 md:h-80 text-zinc-900/[0.03] dark:text-white/[0.02] -rotate-12 pointer-events-none z-0"
                strokeWidth={1.5}
              />
              <Palette
                className="absolute -top-16 -right-12 w-56 md:w-72 h-56 md:h-72 text-zinc-900/[0.03] dark:text-white/[0.02] rotate-12 pointer-events-none z-0"
                strokeWidth={1.5}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800/80 rounded-full w-fit mb-4 md:mb-6 border border-zinc-200/80 dark:border-zinc-700/50 transition-colors duration-500">
                  <Sparkles
                    size={14}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                  <span className="text-xs md:text-base font-semibold tracking-wide text-zinc-700 dark:text-zinc-300">
                    Hi, I'm Kevin 👋
                  </span>
                </div>

                <div className="overflow-hidden mb-1">
                  <h1 className="text-[15vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter text-zinc-900 dark:text-white transition-colors duration-500">
                    FRONTEND
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="text-[15vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-400 [-webkit-text-stroke:1px_#18181b] dark:[-webkit-text-stroke:1.5px_#e4e4e7] dark:from-zinc-100 dark:to-zinc-500 transition-all duration-500">
                    DEVELOPER
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO 2: INFO / LOKASI */}
          <div className="reveal-card col-span-1 md:col-span-4 h-full">
            <div className="w-full h-full relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 flex flex-col justify-between shadow-sm group transition-all duration-500 hover:shadow-md">
              <div className="relative z-10 flex flex-col h-full justify-between gap-6 md:gap-0">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-zinc-800 dark:text-zinc-200 leading-tight transition-colors duration-500">
                    Portfolio
                  </h3>
                  <p className="text-[9px] md:text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold mt-1 transition-colors duration-500">
                    ©2026
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-3 text-zinc-800 dark:text-zinc-200 font-bold text-xs md:text-base mt-auto">
                  <div className="bg-white dark:bg-zinc-800 p-2 md:p-3 rounded-full group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-colors duration-300 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                    <MapPin
                      size={16}
                      className="text-zinc-500 dark:text-zinc-400 group-hover:text-white transition-colors duration-300 md:w-5 md:h-5"
                    />
                  </div>
                  <div className="flex flex-col transition-colors duration-500">
                    <span>Indonesia</span>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">
                      Location
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO 3: STATUS KERJA */}
          <div className="reveal-card col-span-1 md:col-span-4 h-full">
            <div className="w-full h-full relative overflow-hidden bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 flex items-center justify-center md:justify-start shadow-sm transition-colors duration-500">
              <div className="relative z-10 flex flex-col items-center md:items-start gap-3 md:gap-4 w-full">
                <div className="flex items-center justify-center gap-2 bg-emerald-100/80 dark:bg-emerald-900/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald-200 dark:border-emerald-800/80 w-full md:w-fit transition-colors duration-500">
                  <span className="relative flex h-2 md:h-3 w-2 md:w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-60"></span>
                    <span className="relative inline-flex h-2 md:h-3 w-2 md:w-3 rounded-full bg-emerald-600 dark:bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] md:text-xs uppercase font-bold text-emerald-800 dark:text-emerald-200 tracking-wider transition-colors duration-500">
                    Status
                  </span>
                </div>
                <h2 className="text-base sm:text-lg md:text-3xl font-bold text-emerald-950 dark:text-emerald-50 tracking-tight text-center md:text-left leading-tight transition-colors duration-500">
                  Available
                  <br className="hidden md:block" /> for Work
                </h2>
              </div>
            </div>
          </div>

          {/* BENTO 4: DESKRIPSI */}
          <div className="reveal-card col-span-2 md:col-span-5 h-full">
            <div className="w-full h-full relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-center gap-3 md:gap-4 shadow-sm transition-colors duration-500">
              <Layers
                className="absolute -bottom-8 -right-8 w-40 md:w-56 h-40 md:h-56 text-zinc-900/[0.03] dark:text-white/[0.02] pointer-events-none z-0"
                strokeWidth={1}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500 mb-3 md:mb-4 transition-colors duration-500">
                  <Code2 size={18} />
                  <Palette size={18} />
                  <MonitorSmartphone size={18} />
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-500">
                  Fokus pada pengembangan antarmuka web yang interaktif.
                  Memadukan pemahaman desain visual dengan struktur kode untuk
                  menciptakan pengalaman digital yang{" "}
                  <span className="text-indigo-700 dark:text-indigo-300 font-bold bg-indigo-100/50 dark:bg-indigo-900/30 border border-indigo-200/50 dark:border-indigo-800/50 px-2 py-0.5 md:px-2.5 md:py-1 rounded-md md:rounded-lg transition-colors inline-block mt-1">
                    pixel-perfect
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* BENTO 5: ACTIONS / BUTTONS */}
          <div className="col-span-2 md:col-span-7 flex flex-col sm:flex-row gap-3 md:gap-5">
            {/* PROJECT BUTTON */}
            <div className="reveal-card flex-1 h-full">
              <a
                href="#projects"
                className="w-full h-full relative overflow-hidden group flex items-center justify-between bg-indigo-600 dark:bg-indigo-500 text-white border border-indigo-600 dark:border-indigo-500 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 font-bold uppercase tracking-wide transition-all duration-300 hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1"
              >
                <div className="relative z-10 flex flex-col items-start gap-1">
                  <span className="text-[9px] md:text-[10px] text-indigo-200 dark:text-indigo-100 group-hover:text-white transition-colors capitalize normal-case font-medium">
                    Project
                  </span>
                  <span className="text-sm md:text-lg">Lihat Karya</span>
                </div>
                <div className="relative z-10 bg-white/20 dark:bg-white/10 p-2 md:p-3 rounded-full group-hover:bg-white group-hover:text-indigo-700 dark:group-hover:text-indigo-600 transition-colors duration-300">
                  <ArrowDownRight
                    size={20}
                    className="group-hover:-rotate-45 transition-transform duration-300 md:w-6 md:h-6"
                  />
                </div>
              </a>
            </div>

            {/* CV BUTTON */}
            <div className="reveal-card flex-1 h-full">
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="w-full h-full relative overflow-hidden group flex items-center justify-between bg-white dark:bg-[#121212] text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 font-bold uppercase tracking-wide transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/50 text-left"
              >
                <div className="relative z-10 flex flex-col items-start gap-1">
                  <span className="text-[9px] md:text-[10px] text-zinc-500 dark:text-zinc-400 capitalize normal-case font-medium transition-colors duration-500">
                    CV
                  </span>
                  <span className="text-sm md:text-lg transition-colors duration-500">
                    View CV
                  </span>
                </div>
                <div className="relative z-10 bg-zinc-100 dark:bg-zinc-800 p-2 md:p-3 rounded-full group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors duration-300">
                  <ArrowUpRight
                    size={20}
                    className="group-hover:rotate-45 transition-transform duration-300 md:w-6 md:h-6 text-zinc-700 dark:text-zinc-300"
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
