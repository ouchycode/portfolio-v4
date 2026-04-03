"use client";

import { Download, FileText, Maximize2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext"; // Tambahkan import ini

export default function CVPage() {
  const { t, language } = useLanguage();
  const { startLoading } = useLoading(); // Inisialisasi useLoading
  const cvUrl = "/CV_KEVIN_ARDIANSYAH_2026.pdf";

  return (
    // Padding top ekstra agar tidak tertutup Navbar yang fixed/floating
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
        <div className="relative border-b border-[#DADCE0] dark:border-[#5F6368] px-8 py-6 md:px-10 md:py-8 bg-transparent flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            {/* Badge Resume */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-[1.25rem] bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8] shadow-sm">
                <FileText size={22} strokeWidth={2} />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                {t.cvModal.badge}
              </span>
            </div>

            {/* Tombol Kembali ke Beranda */}
            <Link
              href="/"
              onClick={() => startLoading(800)} // Panggil fungsi loading agar transisi mulus
              className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] border border-[#DADCE0] dark:border-[#5F6368] shadow-sm hover:shadow-md active:scale-95 transition-all duration-300"
              aria-label="Kembali"
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
          </div>

          <div className="mt-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight">
              {t.cvModal.title}
            </h1>
            <p className="text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] mt-2 md:mt-3 leading-relaxed">
              {t.cvModal.subtitle}
            </p>
          </div>
        </div>

        {/* CONTENT UTAMA (PREVIEW PDF) */}
        <div className="p-8 md:p-10 flex flex-col gap-8 bg-[#F8F9FA] dark:bg-[#202124]/50">
          <div className="relative w-full h-[65vh] md:h-[75vh] rounded-[1.25rem] overflow-hidden border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] shadow-sm">
            <iframe
              src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="CV Document"
              className="w-full h-full border-none"
            />
          </div>

          {/* TOMBOL AKSI */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-2">
            {/* Tombol Buka Penuh (Secondary) */}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] text-[#1A73E8] dark:text-[#8AB4F8] font-semibold text-base tracking-wide shadow-sm hover:shadow-md active:scale-95 transition-all duration-300"
            >
              <Maximize2
                size={20}
                strokeWidth={2.5}
                className="group-hover:scale-110 transition-transform"
              />
              {t.cvModal.openFull}
            </a>

            {/* Tombol Unduh (Primary) */}
            <a
              href={cvUrl}
              download
              className="group flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#1A73E8] hover:bg-[#1B66C9] dark:bg-[#8AB4F8] dark:hover:bg-[#AECBFA] text-white dark:text-[#202124] font-semibold text-base tracking-wide shadow-sm hover:shadow-md active:scale-95 transition-all duration-300"
            >
              <Download
                size={20}
                strokeWidth={2.5}
                className="group-hover:-translate-y-1 transition-transform"
              />
              {t.cvModal.download}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
