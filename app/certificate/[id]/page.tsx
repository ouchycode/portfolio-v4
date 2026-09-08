"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Award,
  BadgeCheck,
  FileText,
  Eye,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CertData } from "@/types";

const RETRO_COLORS = ["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"];

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

export default function CertificateDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const id = params.id as string;
  const [showPreview, setShowPreview] = useState(false);

  const cert = t.tech.certs.find((item: CertData) => item.id === id);

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="rv-pixel animate-pulse text-inkmute font-bold tracking-widest uppercase text-sm">
          {language === "id"
            ? "Memuat Sertifikat..."
            : "Loading Certificate..."}
        </p>
      </div>
    );
  }

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
      <div data-aos="zoom-in" className="relative z-10 w-full max-w-4xl rv-window flex flex-col">
        {/* Titlebar */}
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none truncate">
            CERT_{cert.id}.pdf — Acrobat Reader
          </span>
          <span className="ml-auto flex items-center gap-1 select-none">
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        <ColorBar />

        {/* Header */}
        <div className="relative border-b border-inkmute/40 p-6 md:p-9 pr-6 md:pr-24 flex flex-col gap-5 bg-paper">
          {/* Back button */}
          <Link
            href="/#tech"
            className="absolute top-5 right-5 md:top-7 md:right-7 group rv-btn rv-pixel flex items-center gap-2 px-4 h-9 text-[11px] font-bold uppercase tracking-wider z-10"
          >
            <ArrowLeft size={16} strokeWidth={2.5} className="relative z-10" />
            <span className="hidden sm:block relative z-10">
              {language === "id" ? "Kembali" : "Back"}
            </span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mt-10 sm:mt-0">
            <span className="rv-chip rv-pixel inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#DCF7F2] dark:bg-vtteal/20 text-vtteal">
              <BadgeCheck size={13} strokeWidth={2.5} />
              {t.certModal.verified}
            </span>
            <span className="rv-chip rv-pixel inline-flex items-center px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-vtcard text-ink">
              {cert.year}
            </span>
            <span className="rv-pixel text-[10px] font-bold uppercase tracking-widest text-inkmute">
              FIG. {cert.id}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1
              className="font-bold tracking-tight text-2xl md:text-3xl lg:text-[2.5rem] text-ink leading-[1.05] mb-3"
              style={{ fontFamily: "var(--vt-font-display)" }}
            >
              {cert.title}
            </h1>

            <div className="flex gap-1 w-24 mb-4">
              {RETRO_COLORS.map((c) => (
                <div
                  key={c}
                  className="h-1.5 flex-1 rv-sunken"
                  style={{ background: c, opacity: 0.75 }}
                />
              ))}
            </div>

            {cert.desc && (
              <p className="text-sm md:text-base leading-relaxed text-ink-soft max-w-2xl">
                {cert.desc}
              </p>
            )}

            {/* Issuer row */}
            <div className="rv-chip flex items-center gap-3 p-3 md:p-3.5 bg-vtcard text-ink w-fit">
              <div className="w-8 h-8 flex items-center justify-center rv-raised bg-chrome text-vtteal shrink-0">
                <Award size={15} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="rv-pixel text-[9px] font-bold uppercase tracking-[0.16em] text-inkmute">
                  {t.certModal.issuer}
                </span>
                <span className="text-xs md:text-sm font-bold text-ink">
                  {cert.issuer}
                </span>
              </div>
              <span
                aria-hidden
                className="ml-1 w-0.5 h-7 rv-sunken shrink-0 bg-linear-to-b from-vtteal to-transparent"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-8 bg-vtcard/60 flex flex-col gap-5">
          {/* PDF preview */}
          <div className="relative w-full h-[55vh] md:h-[65vh] rv-sunken overflow-hidden bg-paper">
            <div className="absolute top-0 left-0 right-0 z-10">
              <ColorBar opacity={0.5} height="2px" />
            </div>
            {showPreview ? (
              <iframe
                src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title="Certificate Document"
                className="w-full h-full border-none bg-white"
                loading="lazy"
              />
            ) : (
              <button
                onClick={() => setShowPreview(true)}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-paper cursor-pointer"
                aria-label={
                  language === "id"
                    ? "Tampilkan preview sertifikat"
                    : "Show certificate preview"
                }
              >
                <span className="rv-chip w-14 h-14 flex items-center justify-center rv-raised bg-chrome text-vtpink">
                  <FileText size={24} strokeWidth={2} />
                </span>
                <span className="rv-pixel inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-ink group">
                  <Eye size={14} className="text-vtcrt" />
                  {language === "id"
                    ? "Tampilkan Sertifikat"
                    : "Show Certificate"}
                </span>
                <span className="rv-pixel text-[9px] uppercase tracking-wider text-inkmute">
                  {language === "id"
                    ? "Preview dimuat saat diklik"
                    : "Preview loads on click"}
                </span>
              </button>
            )}
          </div>

          {/* Action button */}
          <div className="flex justify-end">
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rv-btn-primary rv-pixel group inline-flex items-center justify-center gap-2.5 h-11 md:h-12 px-7 md:px-8 text-[12px] font-bold uppercase tracking-wider"
            >
              <span className="relative z-10">{t.certModal.btn}</span>
              <ExternalLink
                size={15}
                strokeWidth={2.2}
                className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}