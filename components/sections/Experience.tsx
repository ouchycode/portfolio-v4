"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Code,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { useExperienceAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

const getTypeStyle = (type: string) => {
  switch (type) {
    case "Education":
      return {
        icon: GraduationCap,
        color: "text-[#1A73E8] dark:text-[#8AB4F8]",
        bgColor: "bg-[#E8F0FE] dark:bg-[#8AB4F8]/15",
        accentColor: "#1A73E8",
      };
    case "Bootcamp":
      return {
        icon: Code,
        color: "text-[#34A853] dark:text-[#81C995]",
        bgColor: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
        accentColor: "#34A853",
      };
    case "Organization":
      return {
        icon: Users,
        color: "text-[#FABB05] dark:text-[#FDE293]",
        bgColor: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
        accentColor: "#FABB05",
      };
    case "Internship":
      return {
        icon: Briefcase,
        color: "text-[#EA4335] dark:text-[#F28B82]",
        bgColor: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
        accentColor: "#EA4335",
      };
    default:
      return {
        icon: Briefcase,
        color: "text-[#5F6368] dark:text-[#9AA0A6]",
        bgColor: "bg-[#F1F3F4] dark:bg-[#3C4043]/50",
        accentColor: "#5F6368",
      };
  }
};

export default function Experience() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();

  useExperienceAnimation(container);

  return (
    <section
      id="experience"
      ref={container}
      className="relative overflow-visible md:overflow-hidden px-6 md:px-12 lg:px-20 py-24 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow — bottom left ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full z-0 opacity-20 dark:opacity-10"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, #34A853 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">
        {/* ── HEADER ── */}
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="exp-row inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-md shadow-sm w-fit">
            <Briefcase
              size={14}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experience.badge}
            </span>
          </div>

          <div className="exp-row flex items-end gap-4">
            <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
              {t.experience.title}
            </h2>
            <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
              <span className="w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
              <div className="h-px flex-1 bg-gradient-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
            </div>
          </div>

          <p className="exp-row text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-2xl mt-1 leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        {/* ── TIMELINE LIST ── */}
        <div className="relative flex flex-col gap-0 pt-2">
          {/* vertical timeline rail */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#DADCE0] via-[#DADCE0] to-transparent dark:from-[#5F6368]/50 dark:via-[#5F6368]/30 hidden sm:block" />

          {t.experience.list.map((exp: any, index: number) => {
            const {
              icon: Icon,
              color,
              bgColor,
              accentColor,
            } = getTypeStyle(exp.type);
            const isLast = index === t.experience.list.length - 1;

            return (
              <div
                key={exp.id}
                className={`exp-row relative z-10 flex gap-0 sm:gap-8 ${isLast ? "" : "mb-6 md:mb-8"}`}
              >
                {/* ── Timeline dot (desktop) ── */}
                <div className="hidden sm:flex flex-col items-center shrink-0 w-14 pt-8">
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#202124] shadow-sm shrink-0 z-10"
                    style={{ background: accentColor }}
                  />
                </div>

                {/* ── Card ── */}
                <Link
                  href={`/experience/${exp.id}`}
                  onClick={() => startLoading(800)}
                  className="group relative flex-1 flex flex-col sm:flex-row sm:items-start gap-5 md:gap-7 p-6 sm:p-8 rounded-[2rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
                  }}
                >
                  {/* left accent bar (color-coded by type) */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: accentColor }}
                  />

                  {/* ICON */}
                  <div
                    className={`w-13 h-13 w-[52px] h-[52px] shrink-0 flex items-center justify-center rounded-2xl ${bgColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${color}`} strokeWidth={2} />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col min-w-0 pt-0.5">
                    {/* Row: title + period badge */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-lg md:text-xl font-bold text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors leading-snug">
                        {exp.role}
                      </h3>
                      <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-[#F8F9FA] dark:bg-[#202124] border border-[#DADCE0] dark:border-[#5F6368] text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6] whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Company + type */}
                    <p className="text-sm font-semibold text-[#1A73E8] dark:text-[#8AB4F8] mb-4 flex items-center flex-wrap gap-2">
                      {exp.company}
                      <span
                        className="text-[#DADCE0] dark:text-[#5F6368] hidden sm:inline"
                        aria-hidden
                      >
                        •
                      </span>
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
                    </p>

                    <p className="text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Skill chips */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.skills.map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full border border-[#DADCE0] dark:border-[#5F6368] text-xs font-semibold text-[#5F6368] dark:text-[#E8EAED] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:border-[#BDC1C6] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow — desktop */}
                  <div className="hidden sm:flex shrink-0 w-10 h-10 items-center justify-center rounded-full text-[#DADCE0] dark:text-[#5F6368] group-hover:bg-[#E8F0FE] dark:group-hover:bg-[#1A73E8]/15 group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-0.5">
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
