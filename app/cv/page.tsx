"use client";

import { Download, FileText, Maximize2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CVPage() {
  const { t, language } = useLanguage();
  const cvUrl = "/CV_KEVIN_ARDIANSYAH_2026.pdf"; // Pastikan nama file ini sesuai di folder public

  return (
    // KUNCI: pt-32 md:pt-40 memastikan konten tidak tertutup Navbar yang melayang
    <main className="min-h-screen flex flex-col items-center px-4 py-12 pt-32 md:pt-40 md:px-10">
      <div
        className="
          relative w-full max-w-5xl flex flex-col
          rounded-[24px] md:rounded-[28px]
          border border-white/60 dark:border-[#3C4043]
          bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
          shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)]
          overflow-hidden transition-colors duration-500
        "
      >
        {/* HEADER HALAMAN */}
        <div className="relative border-b border-black/5 dark:border-white/10 px-6 py-5 md:px-8 md:py-6 bg-transparent flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E8F0FE] dark:bg-[#1A73E8]/15 text-[#1A73E8] dark:text-[#8AB4F8]">
                <FileText size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                {t.cvModal.badge}
              </span>
            </div>

            {/* Tombol Kembali ke Beranda */}
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors group"
              aria-label="Kembali"
            >
              <ArrowLeft
                size={18}
                className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:-translate-x-1 transition-transform"
              />
              <span className="hidden sm:block text-sm font-bold text-[#5F6368] dark:text-[#9AA0A6]">
                {language === "id" ? "Kembali" : "Back"}
              </span>
            </Link>
          </div>

          <div className="mt-2">
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#202124] dark:text-[#E8EAED] tracking-tight">
              {t.cvModal.title}
            </h1>
            <p className="text-sm md:text-base font-medium text-[#5F6368] dark:text-[#9AA0A6] mt-1.5">
              {t.cvModal.subtitle}
            </p>
          </div>
        </div>

        {/* CONTENT UTAMA */}
        <div className="p-6 md:p-8 flex flex-col gap-6 md:gap-8 bg-white/40 dark:bg-[#202124]/40">
          <div className="relative w-full h-[65vh] md:h-[75vh] rounded-[16px] overflow-hidden border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm">
            <iframe
              src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="CV Document"
              className="w-full h-full border-none"
            />
          </div>

          {/* TOMBOL AKSI */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 hover:bg-white dark:hover:bg-[#3C4043] backdrop-blur-sm text-[#1A73E8] dark:text-[#8AB4F8] font-bold text-sm transition-colors duration-200"
            >
              <Maximize2
                size={18}
                strokeWidth={2.5}
                className="text-[#1A73E8] dark:text-[#8AB4F8]"
              />
              {t.cvModal.openFull}
            </a>

            <a
              href={cvUrl}
              download
              className="group flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] dark:bg-[#8AB4F8] dark:hover:bg-[#aecbfa] text-white dark:text-[#202124] font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Download size={18} strokeWidth={2.5} />
              {t.cvModal.download}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
