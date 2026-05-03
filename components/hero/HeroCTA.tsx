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
    <div className="reveal-card flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      {/* Primary */}
      <a
        href="#projects"
        className="group inline-flex items-center justify-center gap-2.5 h-11 md:h-13 px-6 md:px-8 rounded-full font-semibold text-sm tracking-wide text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
        style={{ background: "linear-gradient(135deg,#1A73E8,#4285F4)" }}
      >
        <Code2
          size={17}
          strokeWidth={2.2}
          className="group-hover:rotate-[8deg] transition-transform duration-200"
        />
        {btnProject}
      </a>

      {/* Secondary */}
      <Link
        href="/cv"
        onClick={onResumeClick}
        className="group inline-flex items-center justify-center gap-2.5 h-11 md:h-13 px-6 md:px-8 rounded-full font-semibold text-sm tracking-wide border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] text-[#1A73E8] dark:text-[#8AB4F8] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
      >
        {btnResume}
        <ArrowUpRight
          size={16}
          strokeWidth={2.2}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
        />
      </Link>
    </div>
  );
}
