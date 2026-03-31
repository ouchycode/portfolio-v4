"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Award, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CertificateDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const id = params.id as string;

  // Cari data sertifikat berdasarkan ID dari URL
  const cert = t.tech.certs.find((item: any) => item.id === id);

  // Jika data tidak ditemukan atau masih memuat
  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-bold tracking-widest uppercase">
          {language === "id"
            ? "Memuat Sertifikat..."
            : "Loading Certificate..."}
        </div>
      </div>
    );
  }

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
        <div className="relative border-b border-black/5 dark:border-white/10 px-6 py-5 md:px-8 md:py-6 pr-16 bg-transparent">
          {/* Tombol Kembali ke Beranda */}
          <Link
            href="/#tech"
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995]">
              <BadgeCheck size={14} strokeWidth={2.5} />
              {t.certModal.verified}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-[#DADCE0] dark:border-[#5F6368] bg-white/50 dark:bg-[#202124]/50 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider text-[#5F6368] dark:text-[#9AA0A6]">
              {cert.year}
            </span>
            <span className="text-[12px] font-bold text-[#DADCE0] dark:text-[#5F6368]">
              FIG. {cert.id}
            </span>
          </div>

          <h1 className="font-extrabold text-2xl md:text-3xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight mb-2 pr-10">
            {cert.title}
          </h1>

          <div className="flex items-center gap-2">
            <Award size={16} className="text-[#5F6368] dark:text-[#9AA0A6]" />
            <span className="text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6]">
              {t.certModal.issuer}{" "}
              <span className="font-bold text-[#202124] dark:text-[#E8EAED]">
                {cert.issuer}
              </span>
            </span>
          </div>
        </div>

        {/* CONTENT UTAMA (PDF & TOMBOL) */}
        <div className="flex-1 p-6 md:p-8 bg-white/40 dark:bg-[#202124]/40 flex flex-col gap-6 md:gap-8">
          <div className="relative w-full h-[55vh] md:h-[65vh] rounded-[16px] overflow-hidden border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm">
            <iframe
              src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title="Certificate Document"
              className="w-full h-full border-none bg-white"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4 mt-auto">
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#34A853] hover:bg-[#2b8f45] dark:bg-[#81C995] dark:hover:bg-[#6db581] text-white dark:text-[#202124] font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              {t.certModal.btn}
              <ExternalLink
                size={18}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
