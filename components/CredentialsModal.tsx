"use client";

import { X, FileText, ArrowUpRight, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function CertificateModal({ isOpen, onClose, cert }: any) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center px-4 py-10 md:p-6">
          {/* ── Backdrop ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* ── Modal Container ───────────────────────────────────── */}
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="
              relative z-10
              w-full max-w-5xl
              max-h-[90vh]
              overflow-y-auto
              rounded-2xl
              border border-zinc-200/80 dark:border-zinc-700/60
              bg-white/85 dark:bg-zinc-900/85
              backdrop-blur-xl
              shadow-[0_32px_80px_0px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_80px_0px_rgba(0,0,0,0.6)]
              [&::-webkit-scrollbar]:hidden
              transition-colors duration-500
            "
          >
            {/* Grain texture */}
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] rounded-2xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "128px",
              }}
            />

            {/* Inner gradient */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-emerald-50/20 via-transparent to-teal-50/10 dark:from-emerald-950/15 dark:via-transparent dark:to-teal-950/10 rounded-2xl" />

            {/* Watermark */}
            <Award
              className="absolute -top-10 -left-10 w-72 h-72 text-zinc-900/[0.03] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0"
              strokeWidth={1.5}
            />

            {/* ── Close Button ─────────────────────────────────── */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm hover:bg-red-50 dark:hover:bg-red-950/40 hover:border-red-300 dark:hover:border-red-700/50 transition-all duration-200 group"
            >
              <X
                size={18}
                strokeWidth={2}
                className="text-zinc-500 dark:text-zinc-400 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200"
              />
            </button>

            {/* ── Header ───────────────────────────────────────── */}
            <div className="relative z-10 border-b border-zinc-200/60 dark:border-zinc-700/40 p-7 md:p-10 pr-16 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm transition-colors duration-500">
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-60" />

              <div className="flex flex-wrap items-center gap-3 mb-5">
                {/* FIG badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-700/50 bg-indigo-50 dark:bg-indigo-950/40 text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  FIG. {cert.id}
                </span>

                {/* Verified year pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-950/40 shadow-sm">
                  <Sparkles
                    size={11}
                    className="text-amber-500 dark:text-amber-400"
                  />
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                    Verified — {cert.year}
                  </span>
                </div>
              </div>

              <h2
                className="font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-2xl md:text-4xl text-zinc-900 dark:text-white mb-5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {cert.title}
              </h2>

              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                  Issued by
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide">
                  {cert.issuer}
                </span>
              </div>
            </div>

            {/* ── Content ──────────────────────────────────────── */}
            <div className="relative z-10 p-7 md:p-10 flex flex-col gap-6 bg-transparent transition-colors duration-500">
              {/* PDF Viewer */}
              <div className="group relative w-full aspect-[16/10] md:h-[60vh] rounded-xl overflow-hidden border border-zinc-200/60 dark:border-zinc-700/40 bg-zinc-100 dark:bg-zinc-800 shadow-[0_4px_24px_0px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_0px_rgba(0,0,0,0.3)] transition-colors duration-500">
                <iframe
                  src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title="Certificate Document"
                  className="w-full h-full border-none opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
                <div className="absolute inset-0 pointer-events-none bg-zinc-900/5 dark:bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* CTA Button */}
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-between w-full md:w-fit md:min-w-[300px] rounded-2xl border border-emerald-400/60 dark:border-emerald-600/40 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-700 dark:to-teal-800 text-white px-7 py-5 shadow-[0_4px_24px_0px_rgba(16,185,129,0.25)] hover:shadow-[0_8px_36px_0px_rgba(16,185,129,0.38)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 mx-auto md:mx-0"
              >
                {/* Shine sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />

                <div className="relative z-10 flex items-center gap-3">
                  <FileText
                    size={17}
                    strokeWidth={2}
                    className="text-emerald-200 transition-transform group-hover:rotate-12 duration-300"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-emerald-200">
                      View Document
                    </span>
                    <span
                      className="text-sm md:text-base font-bold text-white tracking-tight"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Open Full PDF
                    </span>
                  </div>
                </div>

                <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/15 border border-white/20 group-hover:bg-white transition-colors duration-300 ml-6 shrink-0">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="text-white group-hover:text-emerald-700 group-hover:rotate-45 transition-all duration-300"
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
