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
import { ExperienceData } from "@/types";

const GOOGLE_COLORS = ["#EA4335", "#FABB05", "#34A853", "#1A73E8"];

const GOOGLE_THEME: Record<
  string,
  { bg: string; text: string; icon: React.ElementType; accent: string }
> = {
  Education: {
    bg: "bg-[#E8F0FE] dark:bg-[var(--google-blue)]/15",
    text: "text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]",
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

const TYPE_ID: Record<string, string> = {
  Education: "Pendidikan",
  Bootcamp: "Pelatihan",
  Internship: "Magang",
  Organization: "Organisasi",
};

function ColorBar({
  opacity = 1,
  height = "3px",
}: {
  opacity?: number;
  height?: string;
}) {
  return (
    <div className="flex w-full shrink-0" style={{ height }}>
      {GOOGLE_COLORS.map((c) => (
        <div
          key={c}
          className="flex-1 h-full"
          style={{ background: c, opacity }}
        />
      ))}
    </div>
  );
}

function SectionLabel({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ background: accent }}
      />
      <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6368] dark:text-[#9AA0A6]">
        {label}
      </h3>
    </div>
  );
}

export default function ExperienceDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const id = params.id as string;

  const data = t.experience.list.find((item: ExperienceData) => item.id === id);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-bold tracking-widest uppercase text-sm">
          Memuat Data...
        </p>
      </div>
    );
  }

  const theme = GOOGLE_THEME[data.type] ?? GOOGLE_THEME["Education"];
  const Icon = theme.icon;

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 md:px-12 py-12 pt-28 md:pt-36 overflow-hidden">
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.03,
        }}
      />

      {/* Main card */}
      <div
        className="relative z-10 w-full max-w-4xl flex flex-col rounded-4xl md:rounded-[2.5rem] bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 overflow-hidden"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 8px 32px rgba(60,64,67,.10)",
        }}
      >
        <ColorBar />

        {/* Header */}
        <div className="relative border-b border-[#DADCE0]/60 dark:border-[#5F6368]/40 p-6 md:p-10 pr-6 md:pr-20 flex flex-col gap-5">
          {/* Back button */}
          <Link
            href="/#experience"
            onClick={() => startLoading(800)}
            className="absolute top-5 right-5 md:top-9 md:right-9 group flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] hover:bg-[#E8F0FE] dark:hover:bg-[var(--google-blue)]/12 hover:border-[var(--google-blue)]/30 active:scale-95 transition-colors duration-200 z-10"
            style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
          >
            <ArrowLeft
              size={16}
              strokeWidth={2.5}
              className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:-translate-x-0.5 group-hover:text-[var(--google-blue)] dark:group-hover:text-[var(--google-blue-dark)] transition-all duration-200"
            />
            <span className="hidden sm:block text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[var(--google-blue)] dark:group-hover:text-[var(--google-blue-dark)] transition-colors">
              {language === "id" ? "Kembali" : "Back"}
            </span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mt-10 sm:mt-0">
            <span
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest ${theme.bg} ${theme.text}`}
            >
              <Icon size={13} strokeWidth={2.5} />
              {language === "id"
                ? (TYPE_ID[data.type] ?? data.type)
                : data.type}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] text-[11px] font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {data.period}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-black tracking-[-0.03em] text-2xl md:text-4xl lg:text-5xl text-[#202124] dark:text-[#E8EAED] leading-[1.05] mb-3">
              {data.role}
            </h1>

            <div className="flex gap-1 mb-4 w-24">
              {GOOGLE_COLORS.map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-sm md:text-base font-semibold">
              <span className="text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]">
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

        {/* Content */}
        <div className="flex-1 p-6 md:p-10 bg-[#F8F9FA] dark:bg-[#202124]/40 flex flex-col gap-8 md:gap-9">
          {/* Summary */}
          <div className="flex flex-col gap-2.5">
            <SectionLabel
              label={t.experienceModal.summary}
              accent={theme.accent}
            />
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#3C4043] dark:text-[#E8EAED] pl-4 border-l-2 border-[#DADCE0] dark:border-[#5F6368]/50">
              {data.description}
            </p>
          </div>

          <ColorBar opacity={0.2} height="1px" />

          {/* Achievements */}
          <div className="flex flex-col gap-4">
            <SectionLabel
              label={t.experienceModal.achievements}
              accent="#34A853"
            />
            <div className="flex flex-col gap-3">
              {data.details.map((item: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-3 md:gap-4 p-3.5 md:p-4 rounded-2xl bg-white dark:bg-[#303134] border border-[#DADCE0]/60 dark:border-[#5F6368]/30"
                  style={{ boxShadow: "0 1px 3px rgba(60,64,67,.05)" }}
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={2}
                    className="shrink-0 mt-0.5 text-[#34A853] dark:text-[#81C995]"
                  />
                  <span className="text-sm md:text-base text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ColorBar opacity={0.2} height="1px" />

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <SectionLabel
              label={t.experienceModal.skills}
              accent={theme.accent}
            />
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] text-xs font-semibold text-[#5F6368] dark:text-[#E8EAED] cursor-default"
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
