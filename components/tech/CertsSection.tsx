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
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div data-vt="open" className="rv-window lg:mr-auto lg:max-w-3xl">
          <div className="rv-titlebar">
            <span className="rv-titlebar-label select-none">
              certificates.exe — Gallery
            </span>
            <span className="ml-auto flex items-center gap-1 select-none">
              <span className="rv-titlebar-btn text-[8px]">─</span>
              <span className="rv-titlebar-btn text-[8px]">□</span>
              <span className="rv-titlebar-btn text-[9px]">×</span>
            </span>
          </div>

          <div className="rv-panel p-5 sm:p-7 md:p-8 relative">
            <div className="flex flex-col gap-2.5 lg:pr-44">
              <span
                data-aos="fade-right"
                data-aos-delay="100"
                className="rv-pixel inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-vtteal"
              >
                <Award size={14} strokeWidth={2.4} />
                {badgeCert}
              </span>

              <h2
                data-aos="fade-right"
                data-aos-delay="150"
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-ink"
                style={{ fontFamily: "var(--vt-font-display)" }}
              >
                {titleCert}
              </h2>

              <p
                data-aos="fade-right"
                data-aos-delay="250"
                className="text-sm md:text-base text-ink-soft mt-1 max-w-[52ch] leading-relaxed"
              >
                {subtitleCert}
              </p>
            </div>

            {/* Nav arrows — desktop only */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="hidden lg:flex gap-2.5 shrink-0 absolute right-7 md:right-8 top-1/2 -translate-y-1/2"
            >
              {(["left", "right"] as const).map((dir) => (
                <button
                  key={dir}
                  onClick={() => onSlide(dir)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  aria-label={dir === "left" ? "Previous" : "Next"}
                  className="rv-btn rv-pixel flex items-center justify-center w-11 h-11"
                >
                  {dir === "left" ? (
                    <ArrowLeft size={18} className="relative z-10" strokeWidth={2.4} />
                  ) : (
                    <ArrowRight size={18} className="relative z-10" strokeWidth={2.4} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full z-20">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-linear-to-r from-desktop to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-linear-to-l from-desktop to-transparent" />

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex overflow-x-auto gap-5 sm:gap-6 py-8 px-4 md:px-8 touch-pan-x [&::-webkit-scrollbar]:hidden select-none"
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