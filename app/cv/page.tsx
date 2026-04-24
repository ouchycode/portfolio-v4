"use client";

import { Download, FileText, Maximize2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

export default function CVPage() {
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const cvUrl = "/CV_KEVIN_ARDIANSYAH_2026.pdf";

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 md:px-12 py-12 pt-32 md:pt-40 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500 overflow-hidden">
      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 right-0 w-[500px] h-[500px] rounded-full z-0 opacity-20 dark:opacity-10"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #1A73E8 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full z-0 opacity-15 dark:opacity-10"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, #34A853 0%, transparent 70%)",
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
        {/* Google 4-color top bar */}
        <div className="flex h-[3px] w-full shrink-0">
          {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
            <div key={c} className="flex-1 h-full" style={{ background: c }} />
          ))}
        </div>

        {/* ── HEADER ── */}
        <div className="border-b border-[#DADCE0]/60 dark:border-[#5F6368]/40 px-8 py-7 md:px-10 md:py-8 flex flex-col gap-5">
          {/* Top row: badge + back */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8]">
                <FileText size={20} strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6368] dark:text-[#9AA0A6]">
                {t.cvModal.badge}
              </span>
            </div>

            <Link
              href="/"
              onClick={() => startLoading(800)}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-sm hover:bg-[#E8F0FE] dark:hover:bg-[#1A73E8]/12 hover:border-[#1A73E8]/30 active:scale-95 transition-all duration-200"
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

          {/* Title block */}
          <div>
            <h1 className="font-black tracking-[-0.03em] text-3xl md:text-4xl lg:text-5xl text-[#202124] dark:text-[#E8EAED] leading-[1.05]">
              {t.cvModal.title}
            </h1>

            {/* G-color divider */}
            <div className="flex gap-1 mt-3 mb-3 w-28">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>

            <p className="text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
              {t.cvModal.subtitle}
            </p>
          </div>
        </div>

        {/* ── PDF PREVIEW ── */}
        <div className="p-6 md:p-8 flex flex-col gap-6 bg-[#F8F9FA]/80 dark:bg-[#202124]/40">
          {/* iframe wrapper */}
          <div
            className="relative w-full h-[65vh] md:h-[75vh] rounded-[1.5rem] overflow-hidden bg-white dark:bg-[#303134]"
            style={{
              border: "1px solid rgba(218,220,224,0.6)",
              boxShadow:
                "0 1px 3px rgba(60,64,67,.08), 0 2px 8px rgba(60,64,67,.06)",
            }}
          >
            {/* top mini bar inside iframe wrapper */}
            <div className="absolute top-0 left-0 right-0 z-10 flex h-[2px]">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <div
                  key={c}
                  className="flex-1 h-full opacity-40"
                  style={{ background: c }}
                />
              ))}
            </div>

            <iframe
              src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="CV Document"
              className="w-full h-full border-none"
            />
          </div>

          {/* ── Action buttons ── */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-1">
            {/* Secondary — Open full */}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 h-12 md:h-[52px] px-7 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-sm hover:bg-[#E8F0FE] dark:hover:bg-[#1A73E8]/12 hover:border-[#1A73E8]/30 text-[#1A73E8] dark:text-[#8AB4F8] font-semibold text-sm tracking-wide active:scale-95 transition-all duration-200"
            >
              <Maximize2
                size={17}
                strokeWidth={2.2}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              {t.cvModal.openFull}
            </a>

            {/* Primary — Download */}
            <a
              href={cvUrl}
              download
              className="group relative inline-flex items-center justify-center gap-2.5 h-12 md:h-[52px] px-7 rounded-full font-semibold text-sm tracking-wide text-white overflow-hidden active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
              style={{ background: "linear-gradient(135deg,#1A73E8,#4285F4)" }}
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
              <Download
                size={17}
                strokeWidth={2.2}
                className="relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
              <span className="relative z-10">{t.cvModal.download}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
