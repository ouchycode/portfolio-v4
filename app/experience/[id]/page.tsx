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

  const data = t.experience.list.find((item: any) => item.id === id);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-medium tracking-widest uppercase">
          Memuat Data...
        </div>
      </div>
    );
  }

  const theme = googleTheme[data.type] || googleTheme["Education"];
  const Icon = theme.icon;

  return (
    // Padding top ekstra agar tidak tertutup Navbar
    <main className="min-h-screen flex flex-col items-center px-6 md:px-12 py-12 pt-32 md:pt-40 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500">
      <div
        className="
          relative w-full max-w-4xl flex flex-col
          rounded-3xl border border-[#DADCE0] dark:border-[#3C4043]
          bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
          shadow-md overflow-hidden transition-colors duration-500
        "
      >
        {/* HEADER HALAMAN */}
        <div className="relative border-b border-[#DADCE0] dark:border-[#3C4043] p-8 md:p-10 pr-20 bg-transparent flex flex-col gap-4">
          {/* Tombol Kembali */}
          <Link
            href="/#experience"
            className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F8F9FA] dark:bg-[#202124] hover:bg-[#F1F3F4] dark:hover:bg-[#3C4043] border border-[#DADCE0] dark:border-[#5F6368] transition-colors group"
          >
            <ArrowLeft
              size={18}
              strokeWidth={2}
              className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:-translate-x-1 group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-all"
            />
            <span className="hidden sm:block text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors">
              {language === "id" ? "Kembali" : "Back"}
            </span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${theme.bg} ${theme.text}`}
            >
              <Icon size={16} strokeWidth={2} />
              {getLocalizedType(data.type, language)}
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] text-xs font-semibold uppercase tracking-wider text-[#5F6368] dark:text-[#9AA0A6]">
              {data.period}
            </span>
          </div>

          <div>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight mb-2">
              {data.role}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-base font-medium">
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
        </div>

        {/* CONTENT UTAMA */}
        <div className="flex-1 p-8 md:p-10 bg-[#F8F9FA] dark:bg-[#202124] flex flex-col gap-10 md:gap-12">
          {/* Summary */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experienceModal.summary}
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-[#3C4043] dark:text-[#E8EAED]">
              {data.description}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#DADCE0] dark:bg-[#3C4043]" />

          {/* Achievements */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experienceModal.achievements}
            </h3>
            <div className="flex flex-col gap-4">
              {data.details.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 text-[#34A853] dark:text-[#81C995] shrink-0">
                    <CheckCircle2 size={22} strokeWidth={2} />
                  </div>
                  <span className="text-base md:text-lg text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#DADCE0] dark:bg-[#3C4043]" />

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experienceModal.skills}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {data.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-transparent text-sm font-medium text-[#3C4043] dark:text-[#E8EAED] cursor-default hover:bg-white dark:hover:bg-[#303134] transition-colors"
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
