"use client";

import Link from "next/link";
import { ArrowUpRight, BadgeCheck, FileText } from "lucide-react";

import { CertData } from "@/types";

interface CertCardProps {
  cert: CertData;
  onCardClick: () => void;
}

export function CertCard({ cert, onCardClick }: CertCardProps) {
  return (
    <div data-vt="pop" className="cert-card shrink-0 w-[85vw] sm:w-85 md:w-95 lg:w-100">
      <Link
        href={`/certificate/${cert.id}`}
        onClick={onCardClick}
        className="group rv-window relative w-full h-full flex flex-col cursor-pointer"
      >
        {/* Top accent line */}
        <span
          aria-hidden
          className="absolute top-0 left-8 right-8 h-0.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-vtteal"
        />

        {/* Window titlebar */}
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none truncate">
            CERT_{cert.id}.pdf
          </span>
          <span className="ml-auto flex items-center gap-1 select-none">
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        <div className="rv-panel flex-1 flex flex-col p-4 sm:p-5">
          {/* Document area */}
          <div className="rv-sunken relative w-full aspect-4/3 overflow-hidden mb-4 md:mb-5 bg-vtcard">
            {/* Badge top-left */}
            <div className="absolute top-2.5 left-2.5 z-20 rv-chip bg-paper/95 p-1.5">
              <BadgeCheck className="w-4 h-4 text-vtteal" strokeWidth={2} />
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center transition-colors duration-300 bg-vtcard group-hover:bg-vtblue/10">
              <div className="w-16 h-16 md:w-20 md:h-20 rv-raised bg-chrome flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 text-vtblue">
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-vtblue" strokeWidth={1.5} />
              </div>
              <p className="rv-pixel text-[10px] md:text-[11px] text-inkmute uppercase tracking-[0.2em]">
                Document
              </p>
            </div>

            {/* Arrow on hover */}
            <div className="absolute top-2.5 right-2.5 z-20 rv-raised bg-chrome opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 grid place-items-center w-8 h-8 text-ink group-hover:bg-vtteal group-hover:text-white">
              <ArrowUpRight size={15} strokeWidth={2.6} />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center mb-3">
              <span className="rv-chip rv-pixel px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ink bg-vtcard">
                {cert.year}
              </span>
              <span className="rv-pixel text-[10px] uppercase tracking-wider text-inkmute">
                FIG {cert.id}
              </span>
            </div>

            <h3
              className="font-bold text-lg md:text-xl leading-snug text-ink group-hover:text-vtteal transition-colors duration-200 line-clamp-2 mb-3"
              style={{ fontFamily: "var(--vt-font-display)" }}
            >
              {cert.title}
            </h3>

            <div className="flex gap-1 mb-4">
              <div className="h-0.5 w-6 rv-sunken bg-vtteal opacity-70" />
              <div className="h-0.5 flex-1 rv-sunken" />
            </div>

            <p className="rv-pixel text-[11px] text-ink-soft truncate">
              {cert.issuer}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}