"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTypeStyle } from "../../data/experience/getTypeStyle";
import { ExperienceData } from "@/types";

interface ExperienceCardProps {
  exp: ExperienceData;
  onCardClick: () => void;
}

export function ExperienceCard({ exp, onCardClick }: ExperienceCardProps) {
  const { icon: Icon, bgColor, accentColor } = getTypeStyle(exp.type);

  return (
    <Link
      href={`/experience/${exp.id}`}
      onClick={onCardClick}
      className="group rv-window relative flex-1 flex flex-col"
    >
      {/* Left accent bar */}
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-1 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: accentColor }}
      />

      {/* Window titlebar */}
      <div className="rv-titlebar">
        <span className="rv-titlebar-label select-none truncate">
          {exp.company}
        </span>
        <span className="ml-auto flex items-center gap-1 select-none">
          <span className="rv-titlebar-btn text-[8px]">─</span>
          <span className="rv-titlebar-btn text-[8px]">□</span>
          <span className="rv-titlebar-btn text-[9px]">×</span>
        </span>
      </div>

      <div className="rv-panel flex-1 p-5 sm:p-7 flex flex-col">
        {/* Icon + role */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-11 h-11 md:w-12 md:h-12 shrink-0 flex items-center justify-center rv-raised ${bgColor}`}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="rv-pixel text-[10px] uppercase tracking-[0.18em] text-inkmute">
              {exp.period}
            </p>
            <h3
              className="text-base md:text-lg font-bold text-ink leading-snug group-hover:text-vtblue transition-colors"
              style={{ fontFamily: "var(--vt-font-display)" }}
            >
              {exp.role}
            </h3>
          </div>
        </div>

        {/* Type badge + divider */}
        <div className="flex items-center gap-2.5 mb-3">
          <span
            className="rv-chip rv-pixel px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
            style={{
              color: accentColor,
              borderColor: "color-mix(in srgb, " + accentColor + " 45%, transparent)",
            }}
          >
            {exp.type}
          </span>
          <span className="h-0.5 flex-1 rv-sunken" />
        </div>

        <p className="text-sm md:text-[15px] text-ink-soft leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {exp.skills.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="rv-chip rv-pixel px-2.5 py-1 text-[10px] uppercase tracking-wide text-ink bg-vtcard"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-5 pt-3 border-t border-inkmute/40 flex items-center justify-between">
          <span className="rv-pixel text-[10px] uppercase tracking-[0.2em] text-inkmute group-hover:text-vtpink transition-colors">
            buka detail exe
          </span>
          <span className="grid place-items-center w-7 h-7 rv-raised bg-chrome text-ink group-hover:bg-vtblue group-hover:text-white transition-colors">
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </span>
        </div>
      </div>
    </Link>
  );
}