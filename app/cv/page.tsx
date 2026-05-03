"use client";

import { Download, FileText, Maximize2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

const GOOGLE_COLORS = ["#EA4335", "#FABB05", "#34A853", "#1A73E8"];
const CV_URL = "/CV_KEVIN_ARDIANSYAH_2026.pdf";

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

export default function CVPage() {
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();

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
        {/* Top color bar */}
        <ColorBar />

        {/* Header */}
        <div className="border-b border-[#DADCE0]/60 dark:border-[#5F6368]/40 px-6 py-6 md:px-10 md:py-8 flex flex-col gap-5">
          {/* Top row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-2xl bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8]">
                <FileText size={19} strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6368] dark:text-[#9AA0A6]">
                {t.cvModal.badge}
              </span>
            </div>

            <Link
              href="/"
              onClick={() => startLoading(800)}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] hover:bg-[#E8F0FE] dark:hover:bg-[#1A73E8]/12 hover:border-[#1A73E8]/30 active:scale-95 transition-colors duration-200"
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
          </div>

          {/* Title */}
          <div>
            <h1 className="font-black tracking-[-0.03em] text-2xl md:text-4xl lg:text-5xl text-[#202124] dark:text-[#E8EAED] leading-[1.05]">
              {t.cvModal.title}
            </h1>

            <div className="flex gap-1 mt-3 mb-3 w-24 md:w-28">
              {GOOGLE_COLORS.map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>

            <p className="text-sm md:text-base lg:text-lg text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
              {t.cvModal.subtitle}
            </p>
          </div>
        </div>

        {/* PDF preview */}
        <div className="p-5 md:p-8 flex flex-col gap-5 bg-[#F8F9FA] dark:bg-[#202124]/40">
          <div
            className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] rounded-[1.25rem] md:rounded-3xl overflow-hidden bg-white dark:bg-[#303134]"
            style={{
              border: "1px solid rgba(218,220,224,0.6)",
              boxShadow:
                "0 1px 3px rgba(60,64,67,.08), 0 2px 8px rgba(60,64,67,.06)",
            }}
          >
            {/* Mini color bar inside iframe wrapper */}
            <div className="absolute top-0 left-0 right-0 z-10 flex h-0.5">
              {GOOGLE_COLORS.map((c) => (
                <div
                  key={c}
                  className="flex-1 h-full opacity-40"
                  style={{ background: c }}
                />
              ))}
            </div>

            <iframe
              src={`${CV_URL}#toolbar=0&navpanes=0&scrollbar=0`}
              title="CV Document"
              className="w-full h-full border-none"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            {/* Secondary — Open full */}
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 h-11 md:h-12 px-6 md:px-7 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] hover:bg-[#E8F0FE] dark:hover:bg-[#1A73E8]/12 hover:border-[#1A73E8]/30 text-[#1A73E8] dark:text-[#8AB4F8] font-semibold text-sm tracking-wide active:scale-95 transition-colors duration-200"
            >
              <Maximize2
                size={16}
                strokeWidth={2.2}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              {t.cvModal.openFull}
            </a>

            {/* Primary — Download */}
            <a
              href={CV_URL}
              download
              className="group inline-flex items-center justify-center gap-2.5 h-11 md:h-12 px-6 md:px-7 rounded-full font-semibold text-sm tracking-wide text-white active:scale-95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
              style={{ background: "linear-gradient(135deg,#1A73E8,#4285F4)" }}
            >
              <Download
                size={16}
                strokeWidth={2.2}
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
              />
              {t.cvModal.download}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
