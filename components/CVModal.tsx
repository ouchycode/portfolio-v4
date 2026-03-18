"use client";

import { X, Download, FileText, Maximize2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext"; // Pastikan path import benar

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
}

export default function CVModal({ isOpen, onClose, cvUrl }: CVModalProps) {
  const { isLoading, startLoading } = useLoading();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      startLoading(600); // Trigger loading global selama 0.8 detik
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, startLoading]);

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
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm cursor-pointer"
          />

          {/* ── Modal Container ───────────────────────────────────── */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="
              relative z-10
              w-full max-w-4xl
              max-h-[90vh]
              min-h-[400px]
              flex flex-col
              rounded-[24px] md:rounded-[28px]
              border border-white/60 dark:border-[#3C4043]
              bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
              shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)]
              overflow-hidden
              transition-colors duration-500
            "
          >
            {/* ── Close Button ─────────────────────────────────── */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-black/20 hover:bg-[#F1F3F4] dark:hover:bg-[#3C4043] backdrop-blur-sm transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={24} className="text-[#5F6368] dark:text-[#9AA0A6]" />
            </button>

            {/* LOGIKA LOADING */}
            {isLoading ? (
              <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] gap-4 bg-transparent">
                <Loader2
                  size={40}
                  className="animate-spin text-[#1A73E8] dark:text-[#8AB4F8]"
                />
                <p className="text-sm font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6] animate-pulse">
                  Menyiapkan Dokumen...
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col h-full overflow-hidden"
              >
                {/* ── Header Modal ───────────────────────────────────────── */}
                <div className="border-b border-black/5 dark:border-white/10 px-6 py-5 md:px-8 md:py-6 bg-transparent">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0FE] dark:bg-[#1A73E8]/15 text-[#1A73E8] dark:text-[#8AB4F8]">
                      <FileText size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                      Dokumen Resmi
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#202124] dark:text-[#E8EAED] tracking-tight pr-10">
                    Curriculum Vitae
                  </h2>
                  <p className="text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6] mt-1">
                    Kevin Ardiansyah — Frontend Engineer
                  </p>
                </div>

                {/* ── Content ──────────────────────────────────────── */}
                <div className="p-6 md:p-8 flex-1 overflow-y-auto flex flex-col gap-6 md:gap-8 bg-white/40 dark:bg-[#202124]/40 transition-colors duration-500">
                  {/* PDF Viewer */}
                  <div className="relative w-full h-[55vh] md:h-[60vh] rounded-[16px] overflow-hidden border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm">
                    <iframe
                      src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                      title="CV Document"
                      className="w-full h-full border-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4">
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 hover:bg-white dark:hover:bg-[#3C4043] backdrop-blur-sm text-[#1A73E8] dark:text-[#8AB4F8] font-bold text-sm transition-colors duration-200"
                    >
                      <Maximize2
                        size={18}
                        strokeWidth={2.5}
                        className="text-[#1A73E8] dark:text-[#8AB4F8]"
                      />
                      Buka Layar Penuh
                    </a>

                    <a
                      href={cvUrl}
                      download
                      className="group flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] dark:bg-[#8AB4F8] dark:hover:bg-[#aecbfa] text-white dark:text-[#202124] font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <Download size={18} strokeWidth={2.5} />
                      Unduh PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
