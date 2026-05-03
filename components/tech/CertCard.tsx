"use client";

import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

interface CertCardProps {
  cert: any;
  index: number;
  onCardClick: () => void;
}

export function CertCard({ cert, index, onCardClick }: CertCardProps) {
  return (
    <div className="cert-card shrink-0 w-[85vw] sm:w-85 md:w-95 lg:w-100">
      <Link
        href={`/certificate/${cert.id}`}
        onClick={onCardClick}
        className="group relative w-full h-full flex flex-col p-5 sm:p-6 cursor-pointer rounded-4xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 hover:-translate-y-1 transition-transform duration-200"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
        }}
      >
        {/* Top accent line */}
        <span
          aria-hidden
          className="absolute top-0 left-8 right-8 h-0.5 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#34A853]"
        />

        {/* Thumbnail */}
        <div
          className="relative w-full aspect-4/3 rounded-[1.25rem] overflow-hidden mb-4 md:mb-5 bg-[#F8F9FA] dark:bg-[#202124]"
          style={{ border: "1px solid rgba(218,220,224,0.5)" }}
        >
          {/* Badge top-left */}
          <div className="absolute top-3 left-3 z-20 p-2 md:p-2.5 bg-white dark:bg-[#303134] rounded-xl border border-[#DADCE0]/60 dark:border-[#5F6368]/40">
            <BadgeCheck
              className="w-4 h-4 text-[#34A853] dark:text-[#81C995]"
              strokeWidth={2}
            />
          </div>

          <iframe
            src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full pointer-events-none opacity-90 bg-white"
            title={cert.title}
          />
          <div className="absolute inset-0 bg-transparent" />

          {/* Arrow on hover */}
          <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white dark:bg-[#303134] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200 border border-[#DADCE0]/60 dark:border-[#5F6368]/40">
            <ArrowUpRight
              size={16}
              className="text-[#34A853] dark:text-[#81C995]"
              strokeWidth={2.5}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995] text-[11px] font-bold tracking-[0.08em] uppercase">
              {cert.year}
            </span>
            <span className="text-[11px] font-semibold text-[#9AA0A6] dark:text-[#5F6368]">
              FIG {cert.id}
            </span>
          </div>

          <h3 className="font-bold text-lg md:text-xl leading-snug text-[#202124] dark:text-[#E8EAED] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors duration-200 line-clamp-2 mb-3">
            {cert.title}
          </h3>

          <div className="flex gap-1 mb-4">
            <div className="h-0.5 w-6 rounded-full bg-[#34A853] opacity-70" />
            <div className="h-0.5 flex-1 rounded-full bg-[#F1F3F4] dark:bg-[#3C4043]" />
          </div>

          <div className="mt-auto">
            <p className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] truncate">
              {cert.issuer}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
