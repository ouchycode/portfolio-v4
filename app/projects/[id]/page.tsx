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

const getGoogleCategoryTheme = (category: string) => {
  if (["LMS Platform", "EdTech", "Web Application"].includes(category)) {
    return {
      bg: "bg-[#E8F0FE] dark:bg-[#1A73E8]/15",
      text: "text-[#1A73E8] dark:text-[#8AB4F8]",
    };
  }
  if (["E-Commerce", "Mobile Application"].includes(category)) {
    return {
      bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
      text: "text-[#137333] dark:text-[#81C995]",
    };
  }
  if (["Event Management"].includes(category)) {
    return {
      bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
      text: "text-[#B06000] dark:text-[#FDE293]",
    };
  }
  return {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#EA4335] dark:text-[#F28B82]",
  };
};

export default function ProjectDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const id = params.id as string;

  // Cari data proyek berdasarkan ID dari URL
  const project = t.projects.list.find((item: any) => item.id === id);

  // Jika data tidak ditemukan atau masih memuat
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-bold tracking-widest uppercase">
          {language === "id" ? "Memuat Proyek..." : "Loading Project..."}
        </div>
      </div>
    );
  }

  const theme = getGoogleCategoryTheme(project.category);

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
        <div className="relative border-b border-black/5 dark:border-white/10 px-6 py-6 md:px-8 md:py-8 bg-transparent">
          {/* Tombol Kembali ke Beranda */}
          <Link
            href="/#projects"
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

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${theme.bg} ${theme.text}`}
            >
              {project.category}
            </span>
            <span className="text-[12px] font-bold text-[#DADCE0] dark:text-[#5F6368]">
              FIG. {project.id}
            </span>
          </div>

          <h1 className="font-extrabold text-2xl md:text-4xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight pr-10">
            {project.title}
          </h1>
        </div>

        {/* CONTENT UTAMA */}
        <div className="flex-1 p-6 md:p-8 bg-white/40 dark:bg-[#202124]/40 flex flex-col gap-8 md:gap-10">
          <div className="relative w-full aspect-[16/9] shrink-0 min-h-[200px] sm:min-h-[250px] md:min-h-[350px] rounded-[16px] overflow-hidden border border-[#DADCE0] dark:border-[#3C4043] bg-zinc-100 dark:bg-zinc-800 shadow-sm">
            <Image
              src={project.image}
              alt={`Preview of ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.projectModal.descTitle}
            </h3>
            <p className="text-base md:text-[17px] leading-relaxed text-[#3C4043] dark:text-[#E8EAED]">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.projectModal.featuresTitle}
            </h3>
            <div className="flex flex-col gap-3">
              {project.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-3 md:gap-4">
                  <div className="mt-0.5 text-[#1A73E8] dark:text-[#8AB4F8] shrink-0">
                    <CheckCircle2 size={20} strokeWidth={2} />
                  </div>
                  <span className="text-[15px] md:text-base text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {t.projectModal.techTitle}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm text-[13px] font-semibold text-[#5F6368] dark:text-[#E8EAED] shadow-sm cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER LINK KE PROJECT */}
        <div className="border-t border-black/5 dark:border-white/10 p-5 md:p-8 bg-transparent shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-2 text-[#5F6368] dark:text-[#9AA0A6]">
            <FolderGit2 size={20} />
            <span className="text-sm font-medium">Repository / Live Demo</span>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto h-14 px-8 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] dark:bg-[#8AB4F8] dark:hover:bg-[#aecbfa] text-white dark:text-[#202124] font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200"
          >
            {t.projectModal.btn}
            <ExternalLink
              size={18}
              strokeWidth={2.5}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
