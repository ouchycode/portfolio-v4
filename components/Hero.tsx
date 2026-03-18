"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, MapPin, Sparkles, Code2 } from "lucide-react";
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
          relative min-h-screen
          flex flex-col justify-center
          px-4 py-20 md:px-10
          text-[#202124] dark:text-[#E8EAED]
          transition-colors duration-500
          overflow-hidden
        "
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-10 md:mt-0">
          {/* KIRI: Teks Utama */}
          <div className="flex-1 flex flex-col items-start w-full reveal-card">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm">
              <Sparkles
                size={16}
                className="text-[#1A73E8] dark:text-[#8AB4F8]"
              />
              <span className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6]">
                Hi, I'm Kevin
              </span>
            </div>

            <h1 className="flex flex-col gap-1 md:gap-2 mb-6 text-[14vw] sm:text-[10vw] md:text-[6.5vw] lg:text-[7vw] font-extrabold leading-[1.05] tracking-tighter">
              <span className="text-[#202124] dark:text-white">Frontend</span>
              <span className="text-[#1A73E8] dark:text-[#8AB4F8]">
                Developer.
              </span>
            </h1>

            <p className="text-base md:text-xl text-[#5F6368] dark:text-[#9AA0A6] max-w-xl leading-relaxed font-medium mb-8">
              Membangun antarmuka web yang cepat, estetik, dan fungsional. Fokus
              pada pengalaman pengguna yang intuitif dan kode yang bersih.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] dark:bg-[#8AB4F8] dark:hover:bg-[#aecbfa] text-white dark:text-[#202124] font-bold tracking-wide transition-colors"
              >
                <Code2 size={20} strokeWidth={2.5} />
                Lihat Karya
              </a>
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#5F6368] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] text-[#1A73E8] dark:text-[#8AB4F8] font-bold tracking-wide transition-colors"
              >
                View Resume
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* KANAN: Kartu Status (Google Material Cards) */}
          <div className="w-full md:w-[320px] flex flex-col gap-4 shrink-0 reveal-card">
            <div className="flex items-center gap-4 p-5 rounded-[24px] border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm">
              <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-[#FCE8E6] dark:bg-[#F28B82]/15 text-[#EA4335] dark:text-[#F28B82]">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider mb-0.5">
                  Location
                </p>
                <p className="font-bold text-lg text-[#202124] dark:text-[#E8EAED]">
                  Tangerang, ID
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-[24px] border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm">
              <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#34A853] dark:text-[#81C995]">
                <div className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34A853]" />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider mb-0.5">
                  Status
                </p>
                <p className="font-bold text-lg text-[#202124] dark:text-[#E8EAED]">
                  Available to work
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
