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

const getGoogleCategoryTheme = (category: string) => {
  if (["LMS Platform", "EdTech", "Web Application"].includes(category))
    return {
      bg: "bg-[#E8F0FE] dark:bg-[#1A73E8]/15",
      text: "text-[#1A73E8] dark:text-[#8AB4F8]",
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
};

export default function ProjectDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const id = params.id as string;

  const project = t.projects.list.find((item: any) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-bold tracking-widest uppercase text-sm">
          {language === "id" ? "Memuat Proyek..." : "Loading Project..."}
        </div>
      </div>
    );
  }

  const theme = getGoogleCategoryTheme(project.category);

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 md:px-12 py-12 pt-32 md:pt-40 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500 overflow-hidden">
      {/* ── Grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow — category-colored top right ── */}
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
        className="relative z-10 w-full max-w-5xl flex flex-col rounded-[2.5rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 overflow-hidden transition-colors duration-500"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 8px 32px rgba(60,64,67,.10)",
        }}
      >
        {/* G-4-color top bar */}
        <div className="flex h-[3px] w-full shrink-0">
          {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
            <div key={c} className="flex-1 h-full" style={{ background: c }} />
          ))}
        </div>

        {/* ── HEADER ── */}
        <div className="relative border-b border-[#DADCE0]/60 dark:border-[#5F6368]/40 p-8 md:p-10 pr-20 flex flex-col gap-5">
          {/* Back button */}
          <Link
            href="/#projects"
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
              className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] ${theme.bg} ${theme.text}`}
            >
              {project.category}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50 text-[11px] font-bold uppercase tracking-[0.1em] text-[#5F6368] dark:text-[#9AA0A6]">
              FIG. {project.id}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-black tracking-[-0.03em] text-3xl md:text-4xl lg:text-5xl text-[#202124] dark:text-[#E8EAED] leading-[1.05] mb-3">
              {project.title}
            </h1>
            {/* G-color bar */}
            <div className="flex gap-1 w-24">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="flex-1 p-8 md:p-10 bg-[#F8F9FA]/70 dark:bg-[#202124]/40 flex flex-col gap-8">
          {/* Image preview */}
          <div
            className="relative w-full aspect-[16/9] min-h-[220px] md:min-h-[380px] rounded-[1.5rem] overflow-hidden bg-white dark:bg-[#303134] group"
            style={{
              border: "1px solid rgba(218,220,224,0.6)",
              boxShadow:
                "0 1px 3px rgba(60,64,67,.08), 0 4px 12px rgba(60,64,67,.06)",
            }}
          >
            {/* mini color bar on image */}
            <div className="absolute top-0 left-0 right-0 z-10 flex h-[2px]">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
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
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Two-column content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Description + Tech */}
            <div className="md:col-span-7 flex flex-col gap-7">
              {/* Description */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: theme.accent }}
                  />
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6368] dark:text-[#9AA0A6]">
                    {t.projectModal.descTitle}
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-[#3C4043] dark:text-[#E8EAED] pl-4 border-l-2 border-[#DADCE0] dark:border-[#5F6368]/50">
                  {project.description}
                </p>
              </div>

              {/* G-color divider */}
              <div className="flex gap-1">
                {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                  <div
                    key={c}
                    className="h-px flex-1 opacity-20"
                    style={{ background: c }}
                  />
                ))}
              </div>

              {/* Tech chips */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full shrink-0 bg-[#1A73E8]" />
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6368] dark:text-[#9AA0A6]">
                    {t.projectModal.techTitle}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/60 dark:bg-[#303134]/50 text-xs font-semibold text-[#5F6368] dark:text-[#E8EAED] hover:bg-white dark:hover:bg-[#3C4043] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-[#34A853]" />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6368] dark:text-[#9AA0A6]">
                  {t.projectModal.featuresTitle}
                </h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {project.features.map((feature: string, i: number) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/60 dark:bg-[#303134]/50 border border-[#DADCE0]/60 dark:border-[#5F6368]/30 hover:-translate-y-0.5 transition-all duration-200"
                    style={{ boxShadow: "0 1px 3px rgba(60,64,67,.05)" }}
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={2}
                      className="shrink-0 mt-0.5 text-[#34A853] dark:text-[#81C995] group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-sm text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ACTIONS ── */}
        <div className="border-t border-[#DADCE0]/60 dark:border-[#5F6368]/40 p-6 md:p-8 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8]">
              <FolderGit2 size={18} strokeWidth={2} />
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
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-12 md:h-[52px] px-8 rounded-full font-semibold text-sm tracking-wide text-white overflow-hidden active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
            style={{ background: "linear-gradient(135deg,#1A73E8,#4285F4)" }}
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
            <span className="relative z-10">{t.projectModal.btn}</span>
            <ExternalLink
              size={16}
              strokeWidth={2.2}
              className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
