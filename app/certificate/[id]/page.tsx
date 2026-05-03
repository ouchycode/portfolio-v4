"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Award, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GOOGLE_COLORS = ["#EA4335", "#FABB05", "#34A853", "#1A73E8"];

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

export default function CertificateDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const id = params.id as string;

  const cert = t.tech.certs.find((item: any) => item.id === id);

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="animate-pulse text-[#5F6368] dark:text-[#9AA0A6] font-bold tracking-widest uppercase text-sm">
          {language === "id"
            ? "Memuat Sertifikat..."
            : "Loading Certificate..."}
        </p>
      </div>
    );
  }

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
        className="relative z-10 w-full max-w-4xl flex flex-col rounded-4xl md:rounded-[2.5rem] bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 overflow-hidden"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 8px 32px rgba(60,64,67,.10)",
        }}
      >
        <ColorBar />

        {/* Header */}
        <div className="relative border-b border-[#DADCE0]/60 dark:border-[#5F6368]/40 p-6 md:p-10 pr-6 md:pr-20 flex flex-col gap-5">
          {/* Back button */}
          <Link
            href="/#tech"
            className="absolute top-5 right-5 md:top-9 md:right-9 group flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] hover:bg-[#E6F4EA] dark:hover:bg-[#34A853]/12 hover:border-[#34A853]/30 active:scale-95 transition-colors duration-200 z-10"
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
          <div className="flex flex-wrap items-center gap-2.5 mt-10 sm:mt-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995]">
              <BadgeCheck size={13} strokeWidth={2.5} />
              {t.certModal.verified}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] text-[11px] font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              {cert.year}
            </span>
            <span className="text-[11px] font-semibold text-[#9AA0A6] dark:text-[#5F6368]">
              FIG. {cert.id}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-black tracking-[-0.03em] text-2xl md:text-3xl lg:text-4xl text-[#202124] dark:text-[#E8EAED] leading-[1.05] mb-3">
              {cert.title}
            </h1>

            <div className="flex gap-1 w-24 mb-4">
              {GOOGLE_COLORS.map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>

            {/* Issuer row */}
            <div className="flex items-center gap-3 p-3 md:p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-[#202124] border border-[#DADCE0]/60 dark:border-[#5F6368]/30 w-fit">
              <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#34A853] dark:text-[#81C995] shrink-0">
                <Award size={15} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9AA0A6] dark:text-[#5F6368]">
                  {t.certModal.issuer}
                </span>
                <span className="text-xs md:text-sm font-semibold text-[#202124] dark:text-[#E8EAED]">
                  {cert.issuer}
                </span>
              </div>
              <span
                aria-hidden
                className="ml-2 w-0.5 h-7 rounded-full shrink-0 bg-linear-to-b from-[#34A853]/40 to-transparent"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-8 bg-[#F8F9FA] dark:bg-[#202124]/40 flex flex-col gap-5">
          {/* PDF preview */}
          <div
            className="relative w-full h-[55vh] md:h-[65vh] rounded-[1.25rem] md:rounded-3xl overflow-hidden bg-white dark:bg-[#303134]"
            style={{
              border: "1px solid rgba(218,220,224,0.6)",
              boxShadow:
                "0 1px 3px rgba(60,64,67,.08), 0 4px 12px rgba(60,64,67,.06)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 z-10">
              <ColorBar opacity={0.5} height="2px" />
            </div>
            <iframe
              src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title="Certificate Document"
              className="w-full h-full border-none bg-white"
            />
          </div>

          {/* Action button */}
          <div className="flex justify-end">
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 h-11 md:h-12 px-7 md:px-8 rounded-full font-semibold text-sm tracking-wide text-white active:scale-95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#34A853]"
              style={{ background: "linear-gradient(135deg,#34A853,#2B8F45)" }}
            >
              {t.certModal.btn}
              <ExternalLink
                size={15}
                strokeWidth={2.2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
