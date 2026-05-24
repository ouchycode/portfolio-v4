"use client";

import { RefObject } from "react";
import { Award, ArrowLeft, ArrowRight } from "lucide-react";
import { CertCard } from "./CertCard";

import { CertData } from "@/types";

interface CertsSectionProps {
  scrollRef: RefObject<HTMLDivElement | null>;
  badgeCert: string;
  titleCert: string;
  subtitleCert: string;
  infiniteCerts: CertData[];
  setIsPaused: (v: boolean) => void;
  onSlide: (dir: "left" | "right") => void;
  onCardClick: () => void;
}

export function CertsSection({
  scrollRef,
  badgeCert,
  titleCert,
  subtitleCert,
  infiniteCerts,
  setIsPaused,
  onSlide,
  onCardClick,
}: CertsSectionProps) {
  return (
    <div className="flex flex-col gap-8 md:gap-12 w-full">
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-3 md:gap-4 px-6 md:px-12 lg:px-20">
        <div
          data-aos="zoom-in-left"
          className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] shadow-sm w-fit"
        >
          <Award size={14} className="text-[#34A853] dark:text-[#81C995]" />
          <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
            {badgeCert}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div data-aos="fade-up" data-aos-delay="100" className="flex items-end gap-4">
              <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
                {titleCert}
              </h2>
              <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
                <span className="w-2 h-2 rounded-full bg-[#34A853] dark:bg-[#81C995] shrink-0" />
                <div className="h-px w-16 bg-linear-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
              </div>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-sm md:text-base lg:text-lg text-[#5F6368] dark:text-[#9AA0A6] mt-2 leading-relaxed"
            >
              {subtitleCert}
            </p>
          </div>

          {/* Nav arrows */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="hidden md:flex gap-2.5 shrink-0 pb-1"
          >
            {(["left", "right"] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => onSlide(dir)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] hover:bg-[#E6F4EA] dark:hover:bg-[#34A853]/15 hover:border-[#34A853]/30 transition-colors duration-200 active:scale-95"
                style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
              >
                {dir === "left" ? (
                  <ArrowLeft
                    size={18}
                    className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors"
                  />
                ) : (
                  <ArrowRight
                    size={18}
                    className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full z-20">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-linear-to-r from-[#F8F9FA] dark:from-[#1c1c1e] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-linear-to-l from-[#F8F9FA] dark:from-[#1c1c1e] to-transparent" />

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex overflow-x-auto gap-5 sm:gap-6 py-8 px-6 md:px-20 touch-pan-x [&::-webkit-scrollbar]:hidden select-none"
        >
          {infiniteCerts.map((cert, index) => (
            <CertCard
              key={`${cert.id}-${index}`}
              cert={cert}
              onCardClick={onCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
