"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Code,
  Users,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const googleTheme: Record<string, { bg: string; text: string; icon: any }> = {
  Education: {
    bg: "bg-[#E8F0FE] dark:bg-[#1A73E8]/15",
    text: "text-[#1A73E8] dark:text-[#8AB4F8]",
    icon: GraduationCap,
  },
  Bootcamp: {
    bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
    text: "text-[#137333] dark:text-[#81C995]",
    icon: Code,
  },
  Internship: {
    bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
    text: "text-[#B06000] dark:text-[#FDE293]",
    icon: Briefcase,
  },
  Organization: {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#C5221F] dark:text-[#F28B82]",
    icon: Users,
  },
};

const getLocalizedType = (type: string, lang: string) => {
  if (lang === "id") {
    const map: Record<string, string> = {
      Education: "Pendidikan",
      Bootcamp: "Pelatihan",
      Internship: "Magang",
      Organization: "Organisasi",
    };
    return map[type] || type;
  }
  return type;
};

export default function ExperienceDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const id = params.id as string;

  // Cari data pengalaman berdasarkan ID dari URL
  const data = t.experience.list.find((item: any) => item.id === id);

  // Loading state singkat jika data belum ter-load
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-bold tracking-widest uppercase">
          Memuat Data...
        </div>
      </div>
    );
  }

  const theme = googleTheme[data.type] || googleTheme["Education"];
  const Icon = theme.icon;

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 pt-32 md:pt-40 md:px-10">
      <div
        className="
          relative w-full max-w-4xl flex flex-col
          rounded-[24px] md:rounded-[28px]
          border border-white/60 dark:border-[#3C4043]
          bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
          shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)]
          overflow-hidden transition-colors duration-500
        "
      >
        {/* HEADER HALAMAN */}
        <div className="relative border-b border-black/5 dark:border-white/10 p-6 md:p-8 pr-16 bg-transparent">
          {/* Tombol Kembali */}
          <Link
            href="/#experience"
            className="absolute top-5 right-6 md:top-6 md:right-8 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:-translate-x-1 transition-transform"
            />
            <span className="hidden sm:block text-sm font-bold text-[#5F6368] dark:text-[#9AA0A6]">
              {language === "id" ? "Kembali" : "Back"}
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${theme.bg} ${theme.text}`}
            >
              <Icon size={14} strokeWidth={2.5} />
              {getLocalizedType(data.type, language)}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-md border border-[#DADCE0] dark:border-[#5F6368] bg-white/50 dark:bg-[#202124]/50 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider text-[#5F6368] dark:text-[#9AA0A6]">
              {data.period}
            </span>
          </div>

          <h1 className="font-extrabold text-2xl md:text-4xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight mb-2 pr-10">
            {data.role}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm md:text-base font-medium">
            <span className="text-[#1A73E8] dark:text-[#8AB4F8]">
              {data.company}
            </span>
            <span className="hidden sm:block text-[#DADCE0] dark:text-[#5F6368]">
              •
            </span>
            <span className="text-[#5F6368] dark:text-[#9AA0A6]">
              {data.location}
            </span>
          </div>
        </div>

        {/* CONTENT UTAMA */}
        <div className="flex-1 p-6 md:p-8 bg-white/40 dark:bg-[#202124]/40 flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experienceModal.summary}
            </h3>
            <p className="text-base md:text-[17px] leading-relaxed text-[#3C4043] dark:text-[#E8EAED]">
              {data.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experienceModal.achievements}
            </h3>
            <div className="flex flex-col gap-3">
              {data.details.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3 md:gap-4">
                  <div className="mt-0.5 text-[#1A73E8] dark:text-[#8AB4F8] shrink-0">
                    <CheckCircle2 size={20} strokeWidth={2} />
                  </div>
                  <span className="text-[15px] md:text-base text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experienceModal.skills}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {data.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm text-[13px] font-semibold text-[#5F6368] dark:text-[#E8EAED] shadow-sm cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
