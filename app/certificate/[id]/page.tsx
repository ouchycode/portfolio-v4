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
        <div className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-bold tracking-widest uppercase text-sm">
          {language === "id"
            ? "Memuat Sertifikat..."
            : "Loading Certificate..."}
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 md:px-12 py-12 pt-32 md:pt-40 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500 overflow-hidden">
      {/* ── Grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow — green top right (cert accent) ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 right-0 w-[500px] h-[500px] rounded-full z-0 opacity-20 dark:opacity-10"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #34A853 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full z-0 opacity-15 dark:opacity-08"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, #1A73E8 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* ── Main card ── */}
      <div
        className="relative z-10 w-full max-w-4xl flex flex-col rounded-[2.5rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 overflow-hidden transition-colors duration-500"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 8px 32px rgba(60,64,67,.10)",
        }}
      >
        {/* G-4-color top bar */}
        <div className="flex h-[3px] w-full shrink-0">
          {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
            <div key={c} className="flex-1 h-full" style={{ background: c }} />
          ))}
        </div>

        {/* ── HEADER ── */}
        <div className="relative border-b border-[#DADCE0]/60 dark:border-[#5F6368]/40 p-8 md:p-10 pr-20 flex flex-col gap-5">
          {/* Back button */}
          <Link
            href="/#tech"
            className="absolute top-7 right-7 md:top-9 md:right-9 flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-sm hover:bg-[#E6F4EA] dark:hover:bg-[#34A853]/12 hover:border-[#34A853]/30 active:scale-95 transition-all duration-200 group z-10"
            style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
          >
            <ArrowLeft
              size={16}
              strokeWidth={2.5}
              className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:-translate-x-0.5 group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-all duration-200"
            />
            <span className="hidden sm:block text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors">
              {language === "id" ? "Kembali" : "Back"}
            </span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8 sm:mt-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995]">
              <BadgeCheck size={13} strokeWidth={2.5} />
              {t.certModal.verified}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50 text-[11px] font-bold uppercase tracking-[0.1em] text-[#5F6368] dark:text-[#9AA0A6]">
              {cert.year}
            </span>
            <span className="text-[11px] font-semibold text-[#9AA0A6] dark:text-[#5F6368]">
              FIG. {cert.id}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-black tracking-[-0.03em] text-3xl md:text-4xl text-[#202124] dark:text-[#E8EAED] leading-[1.05] mb-3">
              {cert.title}
            </h1>

            {/* G-color bar */}
            <div className="flex gap-1 w-24 mb-4">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>

            {/* Issuer row */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-[#202124]/50 border border-[#DADCE0]/60 dark:border-[#5F6368]/30 w-fit">
              <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#34A853] dark:text-[#81C995] shrink-0">
                <Award size={16} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9AA0A6] dark:text-[#5F6368]">
                  {t.certModal.issuer}
                </span>
                <span className="text-sm font-semibold text-[#202124] dark:text-[#E8EAED]">
                  {cert.issuer}
                </span>
              </div>
              {/* green accent bar */}
              <span
                aria-hidden
                className="ml-2 w-0.5 h-7 rounded-full shrink-0 bg-gradient-to-b from-[#34A853]/40 to-transparent"
              />
            </div>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="flex-1 p-6 md:p-8 bg-[#F8F9FA]/70 dark:bg-[#202124]/40 flex flex-col gap-6">
          {/* PDF preview */}
          <div
            className="relative w-full h-[55vh] md:h-[65vh] rounded-[1.5rem] overflow-hidden bg-white dark:bg-[#303134]"
            style={{
              border: "1px solid rgba(218,220,224,0.6)",
              boxShadow:
                "0 1px 3px rgba(60,64,67,.08), 0 4px 12px rgba(60,64,67,.06)",
            }}
          >
            {/* mini color bar */}
            <div className="absolute top-0 left-0 right-0 z-10 flex h-[2px]">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <div
                  key={c}
                  className="flex-1 h-full opacity-50"
                  style={{ background: c }}
                />
              ))}
            </div>
            <iframe
              src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title="Certificate Document"
              className="w-full h-full border-none bg-white"
            />
          </div>

          {/* Action button */}
          <div className="flex justify-end mt-1">
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 h-12 md:h-[52px] px-8 rounded-full font-semibold text-sm tracking-wide text-white overflow-hidden active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34A853]"
              style={{ background: "linear-gradient(135deg,#34A853,#2B8F45)" }}
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span className="relative z-10">{t.certModal.btn}</span>
              <ExternalLink
                size={16}
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
