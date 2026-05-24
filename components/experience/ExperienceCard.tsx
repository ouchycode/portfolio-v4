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
  const { icon: Icon, color, bgColor, accentColor } = getTypeStyle(exp.type);

  return (
    <Link
      href={`/experience/${exp.id}`}
      onClick={onCardClick}
      className="group material-card relative flex-1 flex flex-col sm:flex-row sm:items-start gap-5 md:gap-7 p-5 sm:p-8 rounded-4xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 cursor-pointer"
    >
      {/* Left accent bar */}
      <span
        aria-hidden
        className="absolute left-0 top-6 bottom-6 w-0.75 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: accentColor }}
      />

      {/* Icon */}
      <div
        className={`w-12 h-12 md:w-13 md:h-13 shrink-0 flex items-center justify-center rounded-2xl ${bgColor}`}
      >
        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${color}`} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col min-w-0 pt-0.5">
        {/* Title + period */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-1.5">
          <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#202124] dark:text-[#E8EAED] group-hover:text-[var(--google-blue)] dark:group-hover:text-[var(--google-blue-dark)] transition-colors leading-snug">
            {exp.role}
          </h3>
          <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-[#F8F9FA] dark:bg-[#202124] border border-[#DADCE0] dark:border-[#5F6368] text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6] whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        {/* Company + type badge */}
        <div className="text-sm font-semibold text-[var(--google-blue)] dark:text-[var(--google-blue-dark)] mb-3 flex items-center flex-wrap gap-2">
          {exp.company}
          <span
            className="text-[#DADCE0] dark:text-[#5F6368] hidden sm:inline"
            aria-hidden
          >
            •
          </span>
          <span className="block h-0.5 w-6 rounded-full bg-[var(--google-blue)] dark:bg-[var(--google-blue-dark)] opacity-70" />
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-bold border"
            style={{
              color: accentColor,
              borderColor: `${accentColor}30`,
              background: `${accentColor}12`,
            }}
          >
            {exp.type}
          </span>
        </div>

        <p className="text-sm md:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {exp.skills.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full border border-[#DADCE0] dark:border-[#5F6368] text-xs font-semibold text-[#5F6368] dark:text-[#E8EAED]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow — desktop only */}
      <div className="hidden sm:flex shrink-0 w-9 h-9 md:w-10 md:h-10 items-center justify-center rounded-full text-[#DADCE0] dark:text-[#5F6368] group-hover:bg-[#E8F0FE] dark:group-hover:bg-[var(--google-blue)]/15 group-hover:text-[var(--google-blue)] dark:group-hover:text-[var(--google-blue-dark)] transition-colors duration-200 mt-0.5">
        <ArrowUpRight size={18} strokeWidth={2} />
      </div>
    </Link>
  );
}
