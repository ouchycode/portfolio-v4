"use client";

import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";

interface HeroCTAProps {
  btnProject: string;
  btnResume: string;
  onResumeClick: () => void;
}

export function HeroCTA({
  btnProject,
  btnResume,
  onResumeClick,
}: HeroCTAProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto"
    >
      {/* Primary — neon pink */}
      <a
        href="#projects"
        className="rv-btn-primary rv-pixel group inline-flex items-center justify-center gap-2.5 h-11 md:h-12 px-6 md:px-8 text-[13px] font-bold uppercase tracking-wider"
      >
        <Code2 size={16} strokeWidth={2.2} className="relative z-10" />
        <span className="relative z-10">{btnProject}</span>
      </a>

      {/* Secondary — chrome */}
      <Link
        href="/cv"
        onClick={onResumeClick}
        className="rv-btn rv-pixel group inline-flex items-center justify-center gap-2.5 h-11 md:h-12 px-6 md:px-8 text-[13px] font-bold uppercase tracking-wider"
      >
        {btnResume}
        <ArrowUpRight
          size={15}
          strokeWidth={2.2}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
        />
      </Link>
    </div>
  );
}