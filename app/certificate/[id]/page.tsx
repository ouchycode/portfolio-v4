"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Award, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CertificateDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const id = params.id as string;

  const cert = t.tech.certs.find((item: any) => item.id === id);

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-medium tracking-widest uppercase">
          {language === "id"
            ? "Memuat Sertifikat..."
            : "Loading Certificate..."}
        </div>
      </div>
    );
  }

  return (
    // Padding top ekstra agar tidak tertutup Navbar
    <main className="min-h-screen flex flex-col items-center px-6 md:px-12 py-12 pt-32 md:pt-40 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500">
      <div
        className="
          relative w-full max-w-4xl flex flex-col
          rounded-3xl border border-[#DADCE0] dark:border-[#3C4043]
          bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
          shadow-md overflow-hidden transition-colors duration-500
        "
      >
        {/* HEADER HALAMAN */}
        <div className="relative border-b border-[#DADCE0] dark:border-[#3C4043] p-8 md:p-10 pr-20 bg-transparent flex flex-col gap-4">
          {/* Tombol Kembali ke Beranda */}
          <Link
            href="/#tech"
            className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F8F9FA] dark:bg-[#202124] hover:bg-[#F1F3F4] dark:hover:bg-[#3C4043] border border-[#DADCE0] dark:border-[#5F6368] transition-colors group"
          >
            <ArrowLeft
              size={18}
              strokeWidth={2}
              className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:-translate-x-1 group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-all"
            />
            <span className="hidden sm:block text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors">
              {language === "id" ? "Kembali" : "Back"}
            </span>
          </Link>

          {/* Badges Info */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995]">
              <BadgeCheck size={16} strokeWidth={2} />
              {t.certModal.verified}
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] text-xs font-semibold uppercase tracking-wider text-[#5F6368] dark:text-[#9AA0A6]">
              {cert.year}
            </span>
            <span className="text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6]">
              FIG. {cert.id}
            </span>
          </div>

          <div>
            <h1 className="font-bold text-3xl md:text-4xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight mb-2">
              {cert.title}
            </h1>

            <div className="flex items-center gap-2">
              <Award size={18} className="text-[#5F6368] dark:text-[#9AA0A6]" />
              <span className="text-base font-medium text-[#5F6368] dark:text-[#9AA0A6]">
                {t.certModal.issuer}{" "}
                <span className="font-semibold text-[#202124] dark:text-[#E8EAED]">
                  {cert.issuer}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* CONTENT UTAMA (PDF & TOMBOL) */}
        <div className="flex-1 p-8 md:p-10 bg-[#F8F9FA] dark:bg-[#202124] flex flex-col gap-8 md:gap-10">
          {/* Pratinjau Dokumen */}
          <div className="relative w-full h-[55vh] md:h-[65vh] rounded-2xl overflow-hidden border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm">
            <iframe
              src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title="Certificate Document"
              className="w-full h-full border-none bg-white"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-auto">
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#34A853] hover:bg-[#2B8F45] dark:bg-[#81C995] dark:hover:bg-[#6DB581] text-white dark:text-[#202124] font-medium text-base tracking-wide shadow-sm hover:shadow-md transition-all duration-300"
            >
              {t.certModal.btn}
              <ExternalLink
                size={20}
                strokeWidth={2}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
