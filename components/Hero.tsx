"use client";

import { useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
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
        min-h-screen
        bg-[#fafafa] text-zinc-900
        dark:bg-[#0a0a0a] dark:text-zinc-50
        px-4 pt-28 pb-8 md:px-8 md:pt-32
        flex items-center justify-center
        "
      >
        {/* BENTO GRID CONTAINER */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto">
          {/* BENTO 1: MAIN TITLE (Span 8 Kolom, 2 Baris) */}
          <div
            className="
            md:col-span-8 md:row-span-2
            bg-white dark:bg-[#121212] 
            border border-zinc-200/80 dark:border-zinc-800/80
            rounded-[2rem] p-8 md:p-12
            flex flex-col justify-center
            shadow-sm hover:shadow-md transition-shadow duration-500
            "
          >
            <div className="overflow-hidden mb-1">
              <h1 className="reveal-text hero-right text-[16vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter">
                FRONTEND
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className="
                reveal-text hero-left
                text-[16vw] md:text-[8vw]
                font-black leading-[0.85] tracking-tighter
                text-transparent
                [-webkit-text-stroke:1.5px_#18181b]
                dark:[-webkit-text-stroke:1.5px_#e4e4e7]
                "
              >
                DEVELOPER
              </h1>
            </div>
          </div>

          {/* BENTO 2: INFO / LOKASI (Span 4 Kolom) */}
          <div
            className="
            reveal-ui
            md:col-span-4
            bg-white dark:bg-[#121212] 
            border border-zinc-200/80 dark:border-zinc-800/80
            rounded-[2rem] p-6 md:p-8
            flex flex-col justify-between
            shadow-sm group
            "
          >
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold mb-6">
              Portfolio ©2026
            </p>
            <div className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 font-bold text-sm md:text-base">
              <div className="bg-zinc-100 dark:bg-zinc-800/50 p-2.5 rounded-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors duration-300">
                <MapPin
                  size={18}
                  className="text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                />
              </div>
              <span>Tangerang, ID</span>
            </div>
          </div>

          {/* BENTO 3: STATUS KERJA (Span 4 Kolom) */}
          <div
            className="
            md:col-span-4
            bg-white dark:bg-[#121212] 
            border border-zinc-200/80 dark:border-zinc-800/80
            rounded-[2rem] p-6 md:p-8
            flex items-center
            shadow-sm
            "
          >
            <div className="flex items-center gap-3 font-mono text-[11px] md:text-xs uppercase font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900/50 px-4 py-3 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for Work</span>
            </div>
          </div>

          {/* BENTO 4: DESKRIPSI (Span 5 Kolom) */}
          <div
            className="
            md:col-span-5
            bg-white dark:bg-[#121212] 
            border border-zinc-200/80 dark:border-zinc-800/80
            rounded-[2rem] p-6 md:p-8
            flex items-center
            shadow-sm
            "
          >
            <p className="reveal-ui text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Memadukan desain visual dengan kode terstruktur untuk menciptakan
              antarmuka{" "}
              <span className="text-indigo-700 dark:text-indigo-300 font-bold bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 px-2.5 py-1 rounded-lg transition-colors">
                pixel-perfect
              </span>{" "}
              dan berkinerja tinggi.
            </p>
          </div>

          {/* BENTO 5: ACTIONS / BUTTONS (Span 7 Kolom) */}
          <div
            className="
            md:col-span-7
            bg-transparent
            flex flex-col sm:flex-row gap-4 md:gap-5
            "
          >
            {/* PROJECT BUTTON - SLEEK PRIMARY */}
            <a
              href="#projects"
              className="
              flex-1 group
              flex items-center justify-between
              bg-zinc-900 dark:bg-zinc-50
              text-white dark:text-zinc-900
              rounded-[2rem] p-6 md:p-8
              font-bold uppercase tracking-wide text-sm md:text-base
              transition-all duration-300
              hover:bg-indigo-600 dark:hover:bg-indigo-500
              hover:text-white dark:hover:text-white
              hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1
              "
            >
              Lihat Karya
              <div className="bg-white/10 dark:bg-black/10 p-2.5 rounded-full group-hover:bg-white group-hover:text-indigo-600 transition-colors duration-300">
                <ArrowDownRight
                  size={20}
                  className="group-hover:-rotate-45 transition-transform duration-300"
                />
              </div>
            </a>

            {/* CV BUTTON - SLEEK SECONDARY */}
            <button
              onClick={() => setIsCVModalOpen(true)}
              className="
              flex-1 group
              flex items-center justify-between
              bg-white dark:bg-[#121212]
              text-zinc-900 dark:text-white
              border border-zinc-200/80 dark:border-zinc-800/80
              rounded-[2rem] p-6 md:p-8
              font-bold uppercase tracking-wide text-sm md:text-base
              transition-all duration-300
              hover:border-indigo-500 dark:hover:border-indigo-500
              hover:bg-indigo-50/50 dark:hover:bg-indigo-500/5
              hover:-translate-y-1
              "
            >
              View CV
              <div className="bg-zinc-100 dark:bg-zinc-800/50 p-2.5 rounded-full group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                <ArrowUpRight
                  size={20}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </div>
            </button>
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
