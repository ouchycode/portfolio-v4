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
import { useLoading } from "@/context/LoadingContext"; // 1. Tambahkan import ini

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
  const { startLoading } = useLoading(); // 2. Inisialisasi hook loading
  const id = params.id as string;

  const data = t.experience.list.find((item: any) => item.id === id);

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
    // Padding top ekstra agar tidak tertutup Navbar
    <main className="min-h-screen flex flex-col items-center px-6 md:px-12 py-12 pt-32 md:pt-40 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500">
      <div
        className="
          relative w-full max-w-4xl flex flex-col
          rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368]
          bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
          shadow-md overflow-hidden transition-colors duration-500
        "
      >
        {/* HEADER HALAMAN */}
        <div className="relative border-b border-[#DADCE0] dark:border-[#5F6368] p-8 md:p-10 pr-20 bg-transparent flex flex-col gap-4">
          {/* Tombol Kembali (Diperbarui dengan transisi dan onClick loading) */}
          <Link
            href="/#experience"
            onClick={() => startLoading(800)} // 3. Panggil fungsi startLoading saat diklik
            className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] border border-[#DADCE0] dark:border-[#5F6368] shadow-sm hover:shadow-md active:scale-95 transition-all duration-300 group z-10"
          >
            <ArrowLeft
              size={18}
              strokeWidth={2.5}
              className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:-translate-x-1 group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-all"
            />
            <span className="hidden sm:block text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors">
              {language === "id" ? "Kembali" : "Back"}
            </span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mt-8 sm:mt-0">
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${theme.bg} ${theme.text}`}
            >
              <Icon size={16} strokeWidth={2.5} />
              {getLocalizedType(data.type, language)}
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124]/50 text-xs font-bold uppercase tracking-wider text-[#5F6368] dark:text-[#9AA0A6] shadow-sm">
              {data.period}
            </span>
          </div>

          <div className="mt-2">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight mb-3 md:mb-4">
              {data.role}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-base md:text-lg font-semibold">
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
        <div className="flex-1 p-8 md:p-10 bg-[#F8F9FA] dark:bg-[#202124]/50 flex flex-col gap-10 md:gap-12">
          {/* Summary */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experienceModal.summary}
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-[#3C4043] dark:text-[#E8EAED]">
              {data.description}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#DADCE0] dark:bg-[#5F6368]" />

          {/* Achievements */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experienceModal.achievements}
            </h3>
            <div className="flex flex-col gap-4 md:gap-5">
              {data.details.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 text-[#34A853] dark:text-[#81C995] shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 size={24} strokeWidth={2} />
                  </div>
                  <span className="text-base md:text-lg text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#DADCE0] dark:bg-[#5F6368]" />

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.experienceModal.skills}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {data.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/50 dark:bg-[#303134]/50 text-sm font-semibold text-[#5F6368] dark:text-[#E8EAED] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#202124] dark:hover:text-white hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 cursor-default"
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
