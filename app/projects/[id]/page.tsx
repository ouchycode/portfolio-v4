"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { ProjectData } from "@/types";

const GOOGLE_COLORS = ["#EA4335", "#FABB05", "#34A853", "#1A73E8"];

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

function getTheme(category: string) {
  if (["LMS Platform", "EdTech", "Web Application"].includes(category))
    return {
      bg: "bg-[#E8F0FE] dark:bg-[var(--google-blue)]/15",
      text: "text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]",
      accent: "#1A73E8",
    };
  if (["E-Commerce", "Mobile Application"].includes(category))
    return {
      bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
      text: "text-[#137333] dark:text-[#81C995]",
      accent: "#34A853",
    };
  if (["Event Management"].includes(category))
    return {
      bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
      text: "text-[#B06000] dark:text-[#FDE293]",
      accent: "#FABB05",
    };
  return {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#C5221F] dark:text-[#F28B82]",
    accent: "#EA4335",
  };
}

export default function ProjectDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const id = params.id as string;

  const project = t.projects.list.find((item: ProjectData) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-bold tracking-widest uppercase text-sm">
          {language === "id" ? "Memuat Proyek..." : "Loading Project..."}
        </p>
      </div>
    );
  }

  const theme = getTheme(project.category);

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
        className="relative z-10 w-full max-w-5xl flex flex-col rounded-4xl md:rounded-[2.5rem] bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 overflow-hidden"
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
            href="/#projects"
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
              className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest ${theme.bg} ${theme.text}`}
            >
              {project.category}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] text-[11px] font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              FIG. {project.id}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-black tracking-[-0.03em] text-2xl md:text-4xl lg:text-5xl text-[#202124] dark:text-[#E8EAED] leading-[1.05] mb-3">
              {project.title}
            </h1>
            <div className="flex gap-1 w-24">
              {GOOGLE_COLORS.map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-10 bg-[#F8F9FA] dark:bg-[#202124]/40 flex flex-col gap-7 md:gap-8">
          {/* Image */}
          <div
            className="relative w-full aspect-video rounded-[1.25rem] md:rounded-3xl overflow-hidden bg-white dark:bg-[#303134]"
            style={{
              border: "1px solid rgba(218,220,224,0.6)",
              boxShadow:
                "0 1px 3px rgba(60,64,67,.08), 0 4px 12px rgba(60,64,67,.06)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 z-10 flex h-0.5">
              {GOOGLE_COLORS.map((c) => (
                <div
                  key={c}
                  className="flex-1 h-full opacity-50"
                  style={{ background: c }}
                />
              ))}
            </div>
            <Image
              src={project.image}
              alt={`Preview of ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Two-column */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-8">
            {/* Left: Description + Tech */}
            <div className="md:col-span-7 flex flex-col gap-6">
              {/* Description */}
              <div className="flex flex-col gap-2.5">
                <SectionLabel
                  label={t.projectModal.descTitle}
                  accent={theme.accent}
                />
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#3C4043] dark:text-[#E8EAED] pl-4 border-l-2 border-[#DADCE0] dark:border-[#5F6368]/50">
                  {project.description}
                </p>
              </div>

              <ColorBar opacity={0.2} height="1px" />

              {/* Tech chips */}
              <div className="flex flex-col gap-3">
                <SectionLabel
                  label={t.projectModal.techTitle}
                  accent="#1A73E8"
                />
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] text-xs font-semibold text-[#5F6368] dark:text-[#E8EAED] cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <SectionLabel
                label={t.projectModal.featuresTitle}
                accent="#34A853"
              />
              <div className="flex flex-col gap-2.5">
                {project.features.map((feature: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 md:gap-3.5 p-3 md:p-3.5 rounded-2xl bg-white dark:bg-[#303134] border border-[#DADCE0]/60 dark:border-[#5F6368]/30"
                    style={{ boxShadow: "0 1px 3px rgba(60,64,67,.05)" }}
                  >
                    <CheckCircle2
                      size={17}
                      strokeWidth={2}
                      className="shrink-0 mt-0.5 text-[#34A853] dark:text-[#81C995]"
                    />
                    <span className="text-xs md:text-sm text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t border-[#DADCE0]/60 dark:border-[#5F6368]/40 p-5 md:p-8 bg-white dark:bg-[#303134] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#E8F0FE] dark:bg-[var(--google-blue-dark)]/15 text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]">
              <FolderGit2 size={17} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9AA0A6] dark:text-[#5F6368]">
                Live Project
              </span>
              <span className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6]">
                Repository / Demo
              </span>
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-11 md:h-12 px-7 md:px-8 rounded-full font-semibold text-sm tracking-wide text-white active:scale-95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[var(--google-blue)]"
            style={{ background: "linear-gradient(135deg,#1A73E8,#4285F4)" }}
          >
            {t.projectModal.btn}
            <ExternalLink
              size={15}
              strokeWidth={2.2}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
