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
          {/* OVERLAY GELAP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/80 dark:bg-black/90 cursor-pointer transition-colors duration-500"
          />

          {/* MODAL CONTAINER - Neo-Brutalism Style */}
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
            bg-white dark:bg-zinc-900
            text-zinc-900 dark:text-zinc-50
            border-2 md:border-4 border-zinc-900 dark:border-zinc-100
            rounded-md shadow-[10px_10px_0_0_#18181b] dark:shadow-[10px_10px_0_0_#e4e4e7]
            overflow-hidden
            transition-colors duration-500
            "
          >
            {/* WATERMARK ICON HEADER */}
            <FileText
              className="absolute -top-10 -left-10 w-64 h-64 text-zinc-900/[0.04] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0 transition-colors duration-500"
              strokeWidth={2}
            />

            {/* CLOSE BUTTON - RETRO */}
            <button
              onClick={onClose}
              className="
              absolute top-0 right-0
              z-50
              flex items-center justify-center
              w-12 h-12 md:w-16 md:h-16
              bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500
              border-l-2 md:border-l-4 border-b-2 md:border-b-4 border-zinc-900 dark:border-zinc-100
              text-zinc-900 dark:text-white
              transition-colors duration-200
              "
            >
              <X size={28} strokeWidth={3} />
            </button>

            {/* HEADER AREA */}
            <div className="relative z-10 border-b-2 md:border-b-4 border-zinc-900 dark:border-zinc-100 p-6 md:p-10 pr-20 bg-zinc-100 dark:bg-zinc-800 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-yellow-300 dark:bg-yellow-600 border-2 border-zinc-900 dark:border-zinc-100 px-3 py-1.5 rounded-sm shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                  <Sparkles
                    size={14}
                    className="text-yellow-950 dark:text-yellow-50"
                  />
                  <span className="font-pixel text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-yellow-950 dark:text-yellow-50 transition-colors duration-500">
                    Official Document
                  </span>
                </div>

                <span className="font-pixel text-[8px] md:text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-400 tracking-widest hidden sm:block transition-colors duration-500">
                  REV {new Date().getFullYear()}
                </span>
              </div>

              <h2 className="font-pixel text-4xl md:text-5xl font-black uppercase tracking-widest text-zinc-900 dark:text-white leading-tight mb-4 transition-colors duration-500 drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46]">
                CURRICULUM <br className="sm:hidden" /> VITAE
              </h2>

              <div className="flex items-center gap-2 font-pixel text-[8px] md:text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-400 tracking-widest transition-colors duration-500">
                <span className="w-2.5 h-2.5 bg-emerald-500 border-2 border-zinc-900 dark:border-zinc-100 transition-colors duration-500"></span>
                Kevin Ardiansyah — Frontend Engineer
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 md:p-10 flex-1 overflow-y-auto flex flex-col gap-8 bg-[#fafafa] dark:bg-zinc-900 transition-colors duration-500">
              {/* PDF VIEWER CONTAINER - Retro Screen */}
              <div className="relative w-full h-[55vh] md:h-[60vh] rounded-sm border-2 md:border-4 border-zinc-900 dark:border-zinc-100 overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-colors duration-500">
                <iframe
                  src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="CV Document"
                  className="w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
                {/* BUTTON 1: SECONDARY (FULLSCREEN) */}
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  flex items-center justify-center gap-3
                  bg-white dark:bg-zinc-800
                  border-2 border-zinc-900 dark:border-zinc-100
                  text-zinc-900 dark:text-white
                  rounded-sm py-4 md:py-5
                  shadow-[5px_5px_0_0_#18181b] dark:shadow-[5px_5px_0_0_#e4e4e7]
                  hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#18181b] dark:hover:shadow-[6px_6px_0_0_#e4e4e7]
                  hover:bg-zinc-100 dark:hover:bg-zinc-700
                  active:translate-y-1 active:translate-x-1 active:shadow-none
                  transition-all duration-200
                  "
                >
                  <FileText
                    size={20}
                    strokeWidth={2.5}
                    className="text-zinc-900 dark:text-white transition-colors"
                  />
                  <span className="font-pixel text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    Fullscreen
                  </span>
                </a>

                {/* BUTTON 2: PRIMARY (DOWNLOAD) */}
                <a
                  href={cvUrl}
                  download
                  className="
                  group
                  flex items-center justify-center gap-3
                  bg-indigo-500 dark:bg-indigo-600
                  text-white
                  border-2 border-zinc-900 dark:border-zinc-100
                  rounded-sm py-4 md:py-5
                  shadow-[5px_5px_0_0_#18181b] dark:shadow-[5px_5px_0_0_#e4e4e7]
                  hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#18181b] dark:hover:shadow-[6px_6px_0_0_#e4e4e7]
                  hover:bg-indigo-600 dark:hover:bg-indigo-500
                  active:translate-y-1 active:translate-x-1 active:shadow-none
                  transition-all duration-200
                  "
                >
                  <Download
                    size={20}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:translate-y-1"
                  />
                  <span className="font-pixel text-[10px] md:text-xs font-bold uppercase tracking-widest">
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
