"use client";

import {
  X,
  ExternalLink,
  CheckCircle2,
  FolderGit2,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext";

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

export default function ProjectModal({ isOpen, onClose, project }: any) {
  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      startLoading(800);
    } else {
      document.body.style.overflow = "auto";
      stopLoading();
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, startLoading, stopLoading]);

  if (!project) return null;

  const theme = getGoogleCategoryTheme(project.category);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center px-4 py-10 md:p-6">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm cursor-pointer"
          />

          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="
              relative z-10
              w-full max-w-3xl
              max-h-[90vh]
              min-h-[400px]
              flex flex-col
              rounded-[24px] md:rounded-[28px]
              border border-white/60 dark:border-[#3C4043]
              bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
              shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)]
              overflow-hidden
              transition-colors duration-500
            "
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-black/20 hover:bg-[#F1F3F4] dark:hover:bg-[#3C4043] backdrop-blur-sm transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={24} className="text-[#5F6368] dark:text-[#9AA0A6]" />
            </button>

            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 flex flex-col items-center justify-center min-h-[400px] gap-4"
                >
                  <Loader2
                    size={40}
                    className="animate-spin text-[#1A73E8] dark:text-[#8AB4F8]"
                  />
                  <p className="text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6] animate-pulse">
                    Memuat Proyek...
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="content-state"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full overflow-hidden"
                >
                  {/* HEADER MODAL */}
                  <div className="relative z-10 border-b border-black/5 dark:border-white/10 px-6 py-5 md:px-8 md:py-6 pr-16 bg-transparent transition-colors duration-500 shrink-0">
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

                    <h2 className="font-extrabold text-2xl md:text-3xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight">
                      {project.title}
                    </h2>
                  </div>

                  {/* CONTENT UTAMA */}
                  <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-8 bg-white/40 dark:bg-[#202124]/40 transition-colors duration-500 flex flex-col gap-8">
                    <div className="relative w-full aspect-[16/9] shrink-0 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] rounded-[16px] overflow-hidden border border-[#DADCE0] dark:border-[#3C4043] bg-zinc-100 dark:bg-zinc-800 shadow-sm">
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
                        Deskripsi Proyek
                      </h3>
                      <p className="text-base md:text-[17px] leading-relaxed text-[#3C4043] dark:text-[#E8EAED]">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                        Fitur Utama
                      </h3>
                      <div className="flex flex-col gap-3">
                        {project.features.map((feature: string, i: number) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 md:gap-4"
                          >
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
                        Teknologi yang Digunakan
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

                  <div className="border-t border-black/5 dark:border-white/10 p-4 md:p-6 bg-transparent transition-colors duration-500 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="hidden sm:flex items-center gap-2 text-[#5F6368] dark:text-[#9AA0A6]">
                      <FolderGit2 size={18} />
                      <span className="text-sm font-medium">
                        Repository / Live Demo
                      </span>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-8 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] dark:bg-[#8AB4F8] dark:hover:bg-[#aecbfa] text-white dark:text-[#202124] font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      Lihat Proyek
                      <ExternalLink
                        size={18}
                        strokeWidth={2.5}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
