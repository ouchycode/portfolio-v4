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
import { getProjectTheme } from "../../../data/projects/getProjectTheme";
import { ProjectData } from "@/types";

const RETRO_COLORS = ["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"];

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

export default function ProjectDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const id = params.id as string;

  const project = t.projects.list.find((item: ProjectData) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="rv-pixel animate-pulse text-inkmute font-bold tracking-widest uppercase text-sm">
          {language === "id" ? "Memuat Proyek..." : "Loading Project..."}
        </p>
      </div>
    );
  }

  const theme = getProjectTheme(project.category);

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
      <div data-aos="zoom-in" className="relative z-10 w-full max-w-5xl rv-window flex flex-col">
        {/* Titlebar */}
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none truncate">
            {project.title} — Slide Preview
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
            href="/#projects"
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
              className={`rv-chip rv-pixel inline-flex items-center px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest ${theme.bg} ${theme.text}`}
            >
              {project.category}
            </span>
            <span className="rv-chip rv-pixel inline-flex items-center px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-vtcard text-ink">
              FIG. {project.id}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1
              className="font-bold tracking-tight text-2xl md:text-4xl lg:text-[2.75rem] text-ink leading-[1.05] mb-3"
              style={{ fontFamily: "var(--vt-font-display)" }}
            >
              {project.title}
            </h1>
            <div className="flex gap-1 w-24">
              {RETRO_COLORS.map((c) => (
                <div
                  key={c}
                  className="h-1.5 flex-1 rv-sunken"
                  style={{ background: c, opacity: 0.75 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-9 bg-vtcard/60 flex flex-col gap-7 md:gap-8">
          {/* Image */}
          <div className="relative w-full aspect-video rv-sunken overflow-hidden bg-paper">
            <div className="absolute top-0 left-0 right-0 z-10 flex h-0.5">
              {RETRO_COLORS.map((c) => (
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
                <SectionLabel label={t.projectModal.descTitle} accent={theme.accent} />
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-ink pl-4 border-l-2 border-vtblue/40">
                  {project.description}
                </p>
              </div>

              <ColorBar opacity={0.2} height="1px" />

              {/* Tech chips */}
              <div className="flex flex-col gap-3">
                <SectionLabel label={t.projectModal.techTitle} accent="#3B2FD6" />
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="rv-chip rv-pixel inline-flex items-center px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide bg-vtcard text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <SectionLabel label={t.projectModal.featuresTitle} accent="#22C7A9" />
              <div className="flex flex-col gap-2.5">
                {project.features.map((feature: string, i: number) => (
                  <div
                    key={i}
                    className="rv-chip flex items-start gap-3 md:gap-3.5 p-3 md:p-3.5 bg-vtcard text-ink"
                  >
                    <CheckCircle2
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 mt-0.5 text-vtcrt"
                    />
                    <span className="text-xs md:text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t border-inkmute/40 p-5 md:p-8 bg-paper flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center rv-raised bg-chrome text-vtblue">
              <FolderGit2 size={17} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="rv-pixel text-[9px] font-bold uppercase tracking-[0.14em] text-inkmute">
                Live Project
              </span>
              <span className="rv-pixel text-[11px] font-bold text-ink">
                Repository / Demo
              </span>
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rv-btn-primary rv-pixel group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-11 md:h-12 px-7 md:px-8 text-[12px] font-bold uppercase tracking-wider"
          >
            <span className="relative z-10">{t.projectModal.btn}</span>
            <ExternalLink
              size={15}
              strokeWidth={2.2}
              className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </main>
  );
}