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
import { useLoading } from "@/context/LoadingContext"; // 1. Tambahkan import ini

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
    text: "text-[#C5221F] dark:text-[#F28B82]",
  };
};

export default function ProjectDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const { startLoading } = useLoading(); // 2. Inisialisasi hook loading
  const id = params.id as string;

  const project = t.projects.list.find((item: any) => item.id === id);

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
    // Padding top ekstra agar tidak tertutup Navbar
    <main className="min-h-screen flex flex-col items-center px-6 md:px-12 py-12 pt-32 md:pt-40 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500">
      <div
        className="
          relative w-full max-w-5xl flex flex-col
          rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368]
          bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
          shadow-md overflow-hidden transition-colors duration-500
        "
      >
        {/* HEADER HALAMAN */}
        <div className="relative border-b border-[#DADCE0] dark:border-[#5F6368] p-8 md:p-10 pr-20 bg-transparent flex flex-col gap-4">
          {/* Tombol Kembali ke Beranda */}
          <Link
            href="/#projects"
            onClick={() => startLoading(800)} // 3. Tambahkan fungsi loading saat klik
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

          {/* Badges Info */}
          <div className="flex flex-wrap items-center gap-3 mt-8 sm:mt-0">
            <span
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${theme.bg} ${theme.text}`}
            >
              {project.category}
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124]/50 text-xs font-bold uppercase tracking-wider text-[#5F6368] dark:text-[#9AA0A6] shadow-sm">
              FIG. {project.id}
            </span>
          </div>

          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight mt-2">
            {project.title}
          </h1>
        </div>

        {/* CONTENT UTAMA */}
        <div className="flex-1 p-8 md:p-10 bg-[#F8F9FA] dark:bg-[#202124]/50 flex flex-col gap-10 md:gap-12">
          {/* Pratinjau Gambar */}
          <div className="relative w-full aspect-[16/9] min-h-[250px] md:min-h-[400px] rounded-[1.25rem] overflow-hidden border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] shadow-sm">
            <Image
              src={project.image}
              alt={`Preview of ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Kolom Kiri: Deskripsi & Teknologi */}
            <div className="md:col-span-7 flex flex-col gap-10">
              {/* Deskripsi */}
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                  {t.projectModal.descTitle}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#3C4043] dark:text-[#E8EAED]">
                  {project.description}
                </p>
              </div>

              {/* Divider Mobile */}
              <div className="w-full h-px bg-[#DADCE0] dark:bg-[#5F6368] md:hidden" />

              {/* Teknologi */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                  {t.projectModal.techTitle}
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/50 dark:bg-[#303134]/50 text-sm font-semibold text-[#5F6368] dark:text-[#E8EAED] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#202124] dark:hover:text-white hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Fitur */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                {t.projectModal.featuresTitle}
              </h3>
              <div className="flex flex-col gap-4">
                {project.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 text-[#34A853] dark:text-[#81C995] shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 size={24} strokeWidth={2} />
                    </div>
                    <span className="text-base md:text-lg text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER AKSI */}
        <div className="border-t border-[#DADCE0] dark:border-[#5F6368] p-6 md:p-8 bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="hidden sm:flex items-center gap-3 text-[#5F6368] dark:text-[#9AA0A6]">
            <FolderGit2 size={24} strokeWidth={2} />
            <span className="text-sm font-semibold tracking-wide">
              Repository / Live Demo
            </span>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto h-14 px-10 rounded-full bg-[#1A73E8] hover:bg-[#1B66C9] dark:bg-[#8AB4F8] dark:hover:bg-[#AECBFA] text-white dark:text-[#202124] font-semibold text-base tracking-wide shadow-sm hover:shadow-md active:scale-95 transition-all duration-300"
          >
            {t.projectModal.btn}
            <ExternalLink
              size={20}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
