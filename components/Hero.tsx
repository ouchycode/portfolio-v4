"use client";

import { useRef, useState } from "react";
import { ArrowDownRight } from "lucide-react";
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
        bg-white text-black
        dark:bg-[#050505] dark:text-white
        px-5 pt-28 pb-8 md:px-16 md:pt-32
        "
      >
        {/* MAIN CONTAINER */}
        <div className="border border-black dark:border-white">
          {/* TOP BAR */}
          <div
            className="
            reveal-ui
            grid grid-cols-2
            border-b border-black dark:border-white
            text-[10px] font-mono uppercase tracking-widest
            "
          >
            <div className="p-4 border-r border-black dark:border-white">
              Portfolio ©2026
            </div>

            <div className="p-4 text-right text-zinc-500 dark:text-zinc-400">
              Tangerang, ID
            </div>
          </div>

          {/* HERO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* TITLE */}
            <div
              className="
              md:col-span-8
              border-b md:border-b-0 md:border-r
              border-black dark:border-white
              p-6 md:p-10
              "
            >
              <div className="overflow-hidden">
                <h1 className="reveal-text hero-right text-[20vw] md:text-[12vw] font-black leading-[0.85] tracking-tight">
                  FRONTEND
                </h1>
              </div>

              <div className="overflow-hidden">
                <h1
                  className="
                  reveal-text hero-left
                  text-[20vw] md:text-[12vw]
                  font-black leading-[0.85]
                  text-transparent
                  [-webkit-text-stroke:2px_black]
                  dark:[-webkit-text-stroke:2px_white]
                  "
                >
                  DEVELOPER
                </h1>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
              md:col-span-4
              border-b md:border-b-0
              border-black dark:border-white
              p-6 md:p-10
              flex items-end
              "
            >
              <p className="reveal-ui text-sm md:text-base font-mono uppercase text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Memadukan desain visual dengan kode terstruktur untuk
                menciptakan antarmuka{" "}
                <span className="text-indigo-500 font-semibold">
                  pixel-perfect
                </span>{" "}
                dan berkinerja tinggi.
              </p>
            </div>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-t border-black dark:border-white">
            {/* BUTTONS */}
            <div
              className="
              md:col-span-8
              border-b md:border-b-0 md:border-r
              border-black dark:border-white
              p-6 md:p-10
              flex flex-col md:flex-row gap-4
              "
            >
              {/* PROJECT BUTTON */}
              <a
                href="#projects"
                className="
                group
                flex items-center justify-between gap-6
                border border-black dark:border-white
                px-6 py-4
                font-mono text-xs uppercase font-bold
                transition
                hover:bg-indigo-500 hover:text-white
                "
              >
                Lihat Karya
                <ArrowDownRight
                  size={16}
                  className="
                  text-indigo-500
                  group-hover:text-white
                  group-hover:-rotate-45
                  transition-transform duration-300
                  "
                />
              </a>

              {/* CV BUTTON (SUDAH DIUBAH MENJADI TOMBOL MODAL) */}
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="
                group
                flex items-center justify-between gap-6
                border border-black dark:border-white
                px-6 py-4
                font-mono text-xs uppercase font-bold
                transition
                hover:bg-indigo-500 hover:text-white
                "
              >
                View CV
                <ArrowDownRight
                  size={16}
                  className="
                  text-indigo-500
                  group-hover:text-white
                  group-hover:-rotate-45
                  transition-transform duration-300
                  "
                />
              </button>
            </div>

            {/* STATUS */}
            <div
              className="
              md:col-span-4
              p-6 md:p-10
              flex items-center
              "
            >
              <div className="flex items-center gap-3 font-mono text-xs uppercase">
                {/* STATUS DOT */}
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>

                <span>
                  Available for <span className="text-indigo-500">Work</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RENDER MODAL DI LUAR SECTION HERO */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        cvUrl="/CV_KEVIN_ARDIANSYAH_2026.pdf"
      />
    </>
  );
}
