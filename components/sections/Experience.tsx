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

// Hapus verticalMessyStyles karena Google UI mengutamakan list yang rapi dan terstruktur

const getTypeStyle = (type: string) => {
  switch (type) {
    case "Education":
      return {
        icon: GraduationCap,
        color: "text-[#1A73E8] dark:text-[#8AB4F8]",
        bgColor: "bg-[#E8F0FE] dark:bg-[#8AB4F8]/15",
      };
    case "Bootcamp":
      return {
        icon: Code,
        color: "text-[#34A853] dark:text-[#81C995]",
        bgColor: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
      };
    case "Organization":
      return {
        icon: Users,
        color: "text-[#FABB05] dark:text-[#FDE293]",
        bgColor: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
      };
    case "Internship":
      return {
        icon: Briefcase,
        color: "text-[#EA4335] dark:text-[#F28B82]",
        bgColor: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
      };
    default:
      return {
        icon: Briefcase,
        color: "text-[#5F6368] dark:text-[#9AA0A6]",
        bgColor: "bg-[#F1F3F4] dark:bg-[#3C4043]/50",
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
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">
        {/* HEADER */}
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="exp-row inline-flex items-center gap-2 px-4 py-1.5 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm w-fit hover:shadow-md transition-shadow">
            <Briefcase
              size={16}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-sm font-medium tracking-wide text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experience.badge}
            </span>
          </div>
          <h2 className="exp-row font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white">
            {t.experience.title}
          </h2>
          <p className="exp-row text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-2xl mt-1 leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        {/* LIST PENGALAMAN */}
        <div className="flex flex-col gap-6 md:gap-8 pt-2">
          {t.experience.list.map((exp: any, index: number) => {
            const { icon: Icon, color, bgColor } = getTypeStyle(exp.type);

            return (
              <div key={exp.id} className="exp-row relative w-full z-10">
                <Link
                  href={`/experience/${exp.id}`}
                  onClick={() => startLoading(800)}
                  className="group relative w-full cursor-pointer flex flex-col sm:flex-row sm:items-start gap-5 md:gap-8 p-6 sm:p-8 rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {/* ICON KIRI */}
                  <div
                    className={`w-14 h-14 shrink-0 flex items-center justify-center rounded-[1.25rem] ${bgColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${color}`} strokeWidth={2} />
                  </div>

                  {/* KONTEN TENGAH */}
                  <div className="flex-1 flex flex-col pt-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors leading-tight">
                        {exp.role}
                      </h3>
                      {/* Badge Tahun */}
                      <span className="inline-flex w-fit items-center px-3.5 py-1 rounded-full bg-[#F8F9FA] dark:bg-[#202124] border border-[#DADCE0] dark:border-[#5F6368] text-xs sm:text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] whitespace-nowrap shadow-sm">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-base font-semibold text-[#1A73E8] dark:text-[#8AB4F8] mb-4 flex items-center flex-wrap gap-2">
                      {exp.company}
                      <span className="text-[#DADCE0] dark:text-[#5F6368] hidden sm:inline">
                        •
                      </span>
                      <span className="text-[#34A853] dark:text-[#81C995] px-2 py-0.5 rounded-md bg-[#E6F4EA]/50 dark:bg-[#81C995]/10 text-sm border border-[#34A853]/20 dark:border-[#81C995]/20">
                        {exp.type}
                      </span>
                    </p>

                    <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* CHIPS SKILLS */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.skills.map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 rounded-full bg-transparent border border-[#DADCE0] dark:border-[#5F6368] text-xs font-semibold text-[#5F6368] dark:text-[#E8EAED] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#202124] dark:hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PANAH KANAN (Hanya muncul di layar sm ke atas agar tidak membuat sempit di mobile) */}
                  <div className="hidden sm:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-transparent group-hover:bg-[#E8F0FE] dark:group-hover:bg-[#1A73E8]/15 text-[#DADCE0] dark:text-[#5F6368] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-1">
                    <ArrowUpRight size={24} strokeWidth={2} />
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
