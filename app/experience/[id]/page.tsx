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
  MonitorUp,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { ExperienceData } from "@/types";

const RETRO_COLORS = ["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"];

const RETRO_THEME: Record<
  string,
  { bg: string; text: string; icon: React.ElementType; accent: string }
> = {
  Education: {
    bg: "bg-[#E2DDFF] dark:bg-vtblue/20",
    text: "text-vtblue",
    icon: GraduationCap,
    accent: "#3B2FD6",
  },
  Bootcamp: {
    bg: "bg-[#DCF7F2] dark:bg-vtteal/20",
    text: "text-vtteal",
    icon: Code,
    accent: "#22C7A9",
  },
  Internship: {
    bg: "bg-[#FFE0EF] dark:bg-vtpink/20",
    text: "text-vtpink",
    icon: Briefcase,
    accent: "#FF3E9A",
  },
  Organization: {
    bg: "bg-[#FFF6D6] dark:bg-vtamber/20",
    text: "text-vtamber",
    icon: Users,
    accent: "#FFD400",
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
      {RETRO_COLORS.map((c) => (
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
        className="w-2.5 h-2.5 rv-sunken shrink-0"
        style={{ background: accent }}
      />
      <h3 className="rv-pixel text-[11px] font-bold uppercase tracking-[0.18em] text-inkmute">
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
        <p className="rv-pixel animate-pulse text-inkmute font-bold tracking-widest uppercase text-sm">
          Memuat Data...
        </p>
      </div>
    );
  }

  const theme = RETRO_THEME[data.type] ?? RETRO_THEME["Education"];
  const Icon = theme.icon;

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 md:px-12 py-12 pt-28 md:pt-32 overflow-hidden">
      {/* Retro grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--vt-violet) 1px,transparent 1px),linear-gradient(90deg,var(--vt-violet) 1px,transparent 1px)",
          backgroundSize: "42px 42px",
          opacity: 0.05,
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Main window */}
      <div data-aos="zoom-in" className="relative z-10 w-full max-w-4xl rv-window flex flex-col">
        {/* Titlebar */}
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none truncate">
            {data.role} — {data.company}
          </span>
          <span className="ml-auto flex items-center gap-1 select-none">
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        <ColorBar />

        {/* Header */}
        <div className="relative border-b border-inkmute/40 p-6 md:p-9 pr-6 md:pr-24 flex flex-col gap-5 bg-paper">
          {/* Back button */}
          <Link
            href="/#experience"
            onClick={() => startLoading(800)}
            className="absolute top-5 right-5 md:top-7 md:right-7 group rv-btn rv-pixel flex items-center gap-2 px-4 h-9 text-[11px] font-bold uppercase tracking-wider z-10"
          >
            <ArrowLeft size={16} strokeWidth={2.5} className="relative z-10" />
            <span className="hidden sm:block relative z-10">
              {language === "id" ? "Kembali" : "Back"}
            </span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mt-10 sm:mt-0">
            <span
              className={`rv-chip rv-pixel inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest ${theme.bg} ${theme.text}`}
            >
              <Icon size={13} strokeWidth={2.5} />
              {language === "id"
                ? (TYPE_ID[data.type] ?? data.type)
                : data.type}
            </span>
            <span className="rv-chip rv-pixel inline-flex items-center px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-vtcard text-ink">
              {data.period}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1
              className="font-bold tracking-tight text-2xl md:text-4xl lg:text-[2.75rem] text-ink leading-[1.05] mb-3"
              style={{ fontFamily: "var(--vt-font-display)" }}
            >
              {data.role}
            </h1>

            <div className="flex gap-1 mb-4 w-24">
              {RETRO_COLORS.map((c) => (
                <div
                  key={c}
                  className="h-1.5 flex-1 rv-sunken"
                  style={{ background: c, opacity: 0.75 }}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-sm md:text-base font-bold">
              <span className="text-vtblue">{data.company}</span>
              <span className="rv-pixel text-inkmute hidden sm:inline" aria-hidden>
                {"//"}
              </span>
              <span className="text-ink-soft">{data.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-9 bg-vtcard/60 flex flex-col gap-7 md:gap-8">
          {/* Summary */}
          <div className="flex flex-col gap-2.5">
            <SectionLabel label={t.experienceModal.summary} accent={theme.accent} />
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-ink pl-4 border-l-2 border-vtblue/40">
              {data.description}
            </p>
          </div>

          <ColorBar opacity={0.2} height="1px" />

          {/* Achievements */}
          <div className="flex flex-col gap-4">
            <SectionLabel label={t.experienceModal.achievements} accent="#22C7A9" />
            <div className="flex flex-col gap-2.5">
              {data.details.map((item: string, i: number) => (
                <div
                  key={i}
                  className="rv-chip flex items-start gap-3 md:gap-4 p-3.5 md:p-4 bg-vtcard text-ink"
                >
                  <CheckCircle2
                    size={17}
                    strokeWidth={2}
                    className="shrink-0 mt-0.5 text-vtcrt"
                  />
                  <span className="text-[12px] md:text-[13px] leading-relaxed uppercase tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ColorBar opacity={0.2} height="1px" />

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <SectionLabel label={t.experienceModal.skills} accent={theme.accent} />
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="rv-chip rv-pixel inline-flex items-center px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide bg-vtcard text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer status */}
          <div className="mt-2 rv-chip rv-pixel bg-paper flex items-center gap-2.5 px-4 py-3 text-[10px] uppercase tracking-widest text-inkmute">
            <MonitorUp size={14} className="text-vtpink" />
            C:\Experience\{data.id}.dat — load complete
          </div>
        </div>
      </div>
    </main>
  );
}