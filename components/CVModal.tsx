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
  // Mencegah body scroll saat modal aktif
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
        <div
          className="
          fixed inset-0 z-[100]
          overflow-y-auto
          flex items-center justify-center
          px-4 py-10 md:p-6
          "
        >
          {/* OVERLAY DENGAN EFEK KACA (GLASSMORPHISM) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-md cursor-pointer transition-colors duration-500"
          />

          {/* MODAL CONTAINER */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="
            relative z-10
            w-full max-w-4xl
            max-h-[90vh]
            flex flex-col
            bg-white dark:bg-[#121212]
            text-zinc-900 dark:text-zinc-50
            border border-zinc-200/80 dark:border-zinc-800/80
            rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]
            overflow-hidden
            transition-colors duration-500
            "
          >
            {/* WATERMARK ICON HEADER */}
            <FileText
              className="absolute -top-10 -left-10 w-64 h-64 text-zinc-900/[0.03] dark:text-white/[0.02] -rotate-12 pointer-events-none z-0 transition-colors duration-500"
              strokeWidth={1}
            />

            {/* CLOSE BUTTON - FLOATING */}
            <button
              onClick={onClose}
              className="
              absolute top-6 right-6
              z-50
              flex items-center justify-center
              w-12 h-12 rounded-full
              bg-zinc-100 dark:bg-zinc-800/80
              text-zinc-500 dark:text-zinc-400
              hover:bg-indigo-600 dark:hover:bg-indigo-500
              hover:text-white dark:hover:text-white
              shadow-sm hover:shadow-lg
              transition-all duration-300
              "
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* HEADER AREA */}
            <div className="relative z-10 border-b border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-10 pr-20 bg-gradient-to-br from-white/50 to-zinc-50/50 dark:from-[#121212]/50 dark:to-[#0a0a0a]/50 backdrop-blur-md transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 px-4 py-1.5 rounded-full shadow-sm transition-colors duration-500">
                  <Sparkles
                    size={14}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                  <span className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 transition-colors duration-500">
                    Official Document
                  </span>
                </div>

                <span className="font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-400 dark:text-zinc-600 tracking-widest hidden sm:block transition-colors duration-500">
                  REV {new Date().getFullYear()}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-none mb-4 transition-colors duration-500">
                Curriculum <br className="sm:hidden" /> Vitae
              </h2>

              <div className="flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-wide transition-colors duration-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 transition-colors duration-500"></span>
                Kevin Ardiansyah — Frontend Engineer
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 md:p-10 flex-1 overflow-y-auto flex flex-col gap-8 bg-zinc-50/50 dark:bg-zinc-900/30 transition-colors duration-500">
              {/* PDF VIEWER CONTAINER */}
              <div className="relative w-full h-[55vh] md:h-[60vh] rounded-[2rem] border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden bg-white dark:bg-zinc-900 shadow-inner group transition-colors duration-500">
                <iframe
                  src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="CV Document"
                  className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Subtle overlay to prevent iframe interaction from hijacking scroll if needed */}
                <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 dark:border-black/5 rounded-[2rem] transition-colors duration-500"></div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 font-bold text-sm uppercase tracking-widest relative z-10">
                {/* BUTTON 1: SECONDARY (FULLSCREEN) */}
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  flex items-center justify-center gap-3
                  bg-white dark:bg-[#18181b]
                  border border-zinc-200 dark:border-zinc-800
                  text-zinc-600 dark:text-zinc-300
                  rounded-2xl py-5
                  hover:border-indigo-500/50 dark:hover:border-indigo-500/50
                  hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                  hover:text-indigo-600 dark:hover:text-indigo-400
                  transition-all duration-300 hover:-translate-y-1 shadow-sm
                  "
                >
                  <FileText
                    size={20}
                    className="text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                  />
                  Fullscreen
                </a>

                {/* BUTTON 2: PRIMARY (DOWNLOAD) */}
                <a
                  href={cvUrl}
                  download
                  className="
                  group
                  flex items-center justify-center gap-3
                  bg-indigo-600 dark:bg-indigo-500
                  text-white
                  border border-indigo-600 dark:border-indigo-500
                  rounded-2xl py-5
                  hover:bg-indigo-700 dark:hover:bg-indigo-600
                  shadow-lg shadow-indigo-600/20 dark:shadow-indigo-500/10
                  hover:shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/30
                  transition-all duration-300 hover:-translate-y-1
                  "
                >
                  <Download
                    size={20}
                    className="transition-transform group-hover:-translate-y-1"
                  />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
