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
import { useLoading } from "@/context/LoadingContext";

const googleTheme: Record<
  string,
  { bg: string; text: string; icon: any; accent: string }
> = {
  Education: {
    bg: "bg-[#E8F0FE] dark:bg-[#1A73E8]/15",
    text: "text-[#1A73E8] dark:text-[#8AB4F8]",
    icon: GraduationCap,
    accent: "#1A73E8",
  },
  Bootcamp: {
    bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
    text: "text-[#137333] dark:text-[#81C995]",
    icon: Code,
    accent: "#34A853",
  },
  Internship: {
    bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
    text: "text-[#B06000] dark:text-[#FDE293]",
    icon: Briefcase,
    accent: "#FABB05",
  },
  Organization: {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#C5221F] dark:text-[#F28B82]",
    icon: Users,
    accent: "#EA4335",
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
  const { startLoading } = useLoading();
  const id = params.id as string;

  const data = t.experience.list.find((item: any) => item.id === id);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-bold tracking-widest uppercase text-sm">
          Memuat Data...
        </div>
      </div>
    );
  }

  const theme = googleTheme[data.type] || googleTheme["Education"];
  const Icon = theme.icon;

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 md:px-12 py-12 pt-32 md:pt-40 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500 overflow-hidden">
      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow — type-colored ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 right-0 w-[500px] h-[500px] rounded-full z-0 opacity-20 dark:opacity-10"
        style={{
          background: `radial-gradient(circle at 80% 20%, ${theme.accent} 0%, transparent 70%)`,
          filter: "blur(90px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full z-0 opacity-15 dark:opacity-08"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, #1A73E8 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* ── Main card ── */}
      <div
        className="relative z-10 w-full max-w-4xl flex flex-col rounded-[2.5rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 overflow-hidden transition-colors duration-500"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 8px 32px rgba(60,64,67,.10)",
        }}
      >
        {/* Type-colored top bar */}
        <div className="h-[3px] w-full flex shrink-0">
          {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
            <div key={c} className="flex-1 h-full" style={{ background: c }} />
          ))}
        </div>

        {/* ── HEADER ── */}
        <div className="relative border-b border-[#DADCE0]/60 dark:border-[#5F6368]/40 p-8 md:p-10 pr-20 flex flex-col gap-5">
          {/* Back button */}
          <Link
            href="/#experience"
            onClick={() => startLoading(800)}
            className="absolute top-7 right-7 md:top-9 md:right-9 flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-sm hover:bg-[#E8F0FE] dark:hover:bg-[#1A73E8]/12 hover:border-[#1A73E8]/30 active:scale-95 transition-all duration-200 group z-10"
            style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
          >
            <ArrowLeft
              size={16}
              strokeWidth={2.5}
              className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:-translate-x-0.5 group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-all duration-200"
            />
            <span className="hidden sm:block text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors">
              {language === "id" ? "Kembali" : "Back"}
            </span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8 sm:mt-0">
            <span
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] ${theme.bg} ${theme.text}`}
            >
              <Icon size={14} strokeWidth={2.5} />
              {getLocalizedType(data.type, language)}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50 text-[11px] font-bold uppercase tracking-[0.1em] text-[#5F6368] dark:text-[#9AA0A6]">
              {data.period}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-black tracking-[-0.03em] text-3xl md:text-4xl lg:text-5xl text-[#202124] dark:text-[#E8EAED] leading-[1.05] mb-3">
              {data.role}
            </h1>

            {/* G-color bar */}
            <div className="flex gap-1 mb-4 w-24">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-base font-semibold">
              <span className="text-[#1A73E8] dark:text-[#8AB4F8]">
                {data.company}
              </span>
              <span
                className="hidden sm:block text-[#DADCE0] dark:text-[#5F6368]"
                aria-hidden
              >
                •
              </span>
              <span className="text-[#5F6368] dark:text-[#9AA0A6]">
                {data.location}
              </span>
            </div>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="flex-1 p-8 md:p-10 bg-[#F8F9FA]/70 dark:bg-[#202124]/40 flex flex-col gap-9">
          {/* Summary */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: theme.accent }}
              />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6368] dark:text-[#9AA0A6]">
                {t.experienceModal.summary}
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-[#3C4043] dark:text-[#E8EAED] pl-4 border-l-2 border-[#DADCE0] dark:border-[#5F6368]/50">
              {data.description}
            </p>
          </div>

          {/* Divider */}
          <div className="flex gap-1">
            {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
              <div
                key={c}
                className="h-px flex-1 opacity-20"
                style={{ background: c }}
              />
            ))}
          </div>

          {/* Achievements */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: "#34A853" }}
              />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6368] dark:text-[#9AA0A6]">
                {t.experienceModal.achievements}
              </h3>
            </div>
            <div className="flex flex-col gap-3.5">
              {data.details.map((item: string, i: number) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white/60 dark:bg-[#303134]/50 border border-[#DADCE0]/60 dark:border-[#5F6368]/30 hover:-translate-y-0.5 transition-all duration-200"
                  style={{ boxShadow: "0 1px 3px rgba(60,64,67,.05)" }}
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 mt-0.5 text-[#34A853] dark:text-[#81C995] group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="text-sm md:text-base text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex gap-1">
            {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
              <div
                key={c}
                className="h-px flex-1 opacity-20"
                style={{ background: c }}
              />
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: theme.accent }}
              />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6368] dark:text-[#9AA0A6]">
                {t.experienceModal.skills}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/60 dark:bg-[#303134]/50 text-xs font-semibold text-[#5F6368] dark:text-[#E8EAED] hover:bg-white dark:hover:bg-[#3C4043] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
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
