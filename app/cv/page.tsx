"use client";

import { Download, FileText, Maximize2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

const RETRO_COLORS = ["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"];
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
      {RETRO_COLORS.map((c) => (
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
    <main className="relative min-h-screen flex flex-col items-center px-4 md:px-12 py-12 pt-28 md:pt-32 overflow-hidden">
      {/* Retro grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--vt-violet) 1px,transparent 1px),linear-gradient(90deg,var(--vt-violet) 1px,transparent 1px)",
          backgroundSize: "42px 42px",
          opacity: 0.05,
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Main window */}
      <div data-aos="zoom-in" className="relative z-10 w-full max-w-5xl rv-window flex flex-col">
        {/* Titlebar */}
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none truncate">
            CV_KEVIN_ARDIANSYAH_2026.pdf — Acrobat Reader
          </span>
          <span className="ml-auto flex items-center gap-1 select-none">
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        {/* Top color bar */}
        <ColorBar />

        {/* Header */}
        <div className="border-b border-inkmute/40 px-5 py-6 md:px-9 md:py-7 flex flex-col gap-5 bg-paper">
          {/* Top row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rv-raised bg-chrome text-vtblue">
                <FileText size={19} strokeWidth={2} />
              </div>
              <span className="rv-pixel text-[11px] font-bold uppercase tracking-[0.18em] text-inkmute">
                {t.cvModal.badge}
              </span>
            </div>

            <Link
              href="/"
              onClick={() => startLoading(800)}
              className="rv-btn rv-pixel group flex items-center gap-2 px-4 h-9 text-[11px] font-bold uppercase tracking-wider"
            >
              <ArrowLeft size={16} strokeWidth={2.5} className="relative z-10" />
              <span className="hidden sm:block relative z-10">
                {language === "id" ? "Kembali" : "Back"}
              </span>
            </Link>
          </div>

          {/* Title */}
          <div>
            <h1
              className="font-bold tracking-tight text-2xl md:text-4xl lg:text-[2.75rem] text-ink leading-[1.05]"
              style={{ fontFamily: "var(--vt-font-display)" }}
            >
              {t.cvModal.title}
            </h1>

            <div className="flex gap-1 mt-3 mb-3 w-24 md:w-28">
              {RETRO_COLORS.map((c) => (
                <div
                  key={c}
                  className="h-1.5 flex-1 rv-sunken"
                  style={{ background: c, opacity: 0.75 }}
                />
              ))}
            </div>

            <p className="text-sm md:text-base lg:text-lg text-ink-soft leading-relaxed">
              {t.cvModal.subtitle}
            </p>
          </div>
        </div>

        {/* PDF preview */}
        <div className="p-4 md:p-7 flex flex-col gap-5 bg-vtcard/60">
          <div
            className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] rv-sunken overflow-hidden bg-paper"
          >
            {/* Mini color bar inside */}
            <div className="absolute top-0 left-0 right-0 z-10 flex h-0.5">
              {RETRO_COLORS.map((c) => (
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
              className="rv-btn rv-pixel group flex items-center justify-center gap-2.5 h-11 md:h-12 px-6 md:px-7 text-[12px] font-bold uppercase tracking-wider"
            >
              <Maximize2
                size={16}
                strokeWidth={2.2}
                className="relative z-10 group-hover:scale-110 transition-transform duration-200"
              />
              <span className="relative z-10">{t.cvModal.openFull}</span>
            </a>

            {/* Primary — Download */}
            <a
              href={CV_URL}
              download
              className="rv-btn-primary rv-pixel group inline-flex items-center justify-center gap-2.5 h-11 md:h-12 px-6 md:px-7 text-[12px] font-bold uppercase tracking-wider"
            >
              <Download
                size={16}
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