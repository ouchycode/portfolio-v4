"use client";

import { X, Download, FileText, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
}

export default function CVModal({ isOpen, onClose, cvUrl }: CVModalProps) {
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
              w-full max-w-4xl
              max-h-[90vh]
              flex flex-col
              rounded-2xl
              border border-zinc-200/80 dark:border-zinc-700/60
              bg-white/80 dark:bg-zinc-900/80
              backdrop-blur-xl
              shadow-[0_32px_80px_0px_rgba(0,0,0,0.18)] dark:shadow-[0_32px_80px_0px_rgba(0,0,0,0.6)]
              overflow-hidden
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

            {/* Subtle inner gradient */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-violet-50/20 dark:from-indigo-950/20 dark:via-transparent dark:to-violet-950/10 rounded-2xl" />

            {/* Watermark */}
            <FileText
              className="absolute -top-10 -left-10 w-64 h-64 text-zinc-900/[0.03] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0"
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
            <div className="relative z-10 border-b border-zinc-200/60 dark:border-zinc-700/40 p-6 md:p-10 pr-16 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm transition-colors duration-500">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-700/50 bg-indigo-50 dark:bg-indigo-950/40 shadow-sm">
                  <Sparkles
                    size={12}
                    className="text-indigo-500 dark:text-indigo-400"
                  />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
                    Official Document
                  </span>
                </div>
                <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 hidden sm:block">
                  REV {new Date().getFullYear()}
                </span>
              </div>

              <h2
                className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-4xl md:text-5xl text-zinc-900 dark:text-white mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                CURRICULUM
                <br className="sm:hidden" /> VITAE
              </h2>

              <div className="flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  Kevin Ardiansyah — Frontend Engineer
                </span>
              </div>
            </div>

            {/* ── Content ──────────────────────────────────────── */}
            <div className="relative z-10 p-6 md:p-10 flex-1 overflow-y-auto flex flex-col gap-6 bg-transparent transition-colors duration-500">
              {/* PDF Viewer */}
              <div className="relative w-full h-[55vh] md:h-[60vh] rounded-xl overflow-hidden border border-zinc-200/60 dark:border-zinc-700/40 bg-zinc-100 dark:bg-zinc-800 shadow-[0_4px_20px_0px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)] transition-colors duration-500">
                <iframe
                  src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="CV Document"
                  className="w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {/* Fullscreen */}
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-2xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/80 dark:bg-zinc-800/60 backdrop-blur-sm py-4 md:py-5 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-600 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_0px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_24px_0px_rgba(0,0,0,0.3)] active:scale-95 transition-all duration-200"
                >
                  <FileText
                    size={18}
                    strokeWidth={2}
                    className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors"
                  />
                  <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
                    Fullscreen
                  </span>
                </a>

                {/* Download */}
                <a
                  href={cvUrl}
                  download
                  className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-2xl border border-indigo-400/60 dark:border-indigo-600/40 bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white py-4 md:py-5 shadow-[0_4px_20px_0px_rgba(99,102,241,0.25)] hover:shadow-[0_8px_30px_0px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  {/* Shine sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                  <Download
                    size={18}
                    strokeWidth={2}
                    className="relative z-10 transition-transform group-hover:translate-y-0.5"
                  />
                  <span className="relative z-10 text-xs font-mono font-semibold uppercase tracking-[0.2em]">
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
