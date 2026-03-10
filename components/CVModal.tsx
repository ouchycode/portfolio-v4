"use client";

import { X, Download, FileText } from "lucide-react";
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
            className="fixed inset-0 bg-zinc-900/40 dark:bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* MODAL CONTAINER */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="
            relative z-10
            w-full max-w-4xl
            max-h-[90vh]
            flex flex-col
            bg-white dark:bg-[#121212]
            text-zinc-900 dark:text-zinc-50
            border border-zinc-200/80 dark:border-zinc-800/80
            rounded-[2rem] shadow-2xl shadow-black/10 dark:shadow-black/50
            overflow-hidden
            "
          >
            {/* CLOSE BUTTON - FLOATING */}
            <button
              onClick={onClose}
              className="
              absolute top-6 right-6
              z-50
              flex items-center justify-center
              w-10 h-10 rounded-full
              bg-zinc-100 dark:bg-zinc-800/50
              text-zinc-500 dark:text-zinc-400
              hover:bg-zinc-200 dark:hover:bg-zinc-700
              hover:text-zinc-900 dark:hover:text-white
              transition-colors duration-300
              "
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* HEADER */}
            <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-8 pr-20 bg-[#fafafa] dark:bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="
                  bg-indigo-50 dark:bg-indigo-500/10
                  border border-indigo-100 dark:border-indigo-500/20
                  px-3 py-1 rounded-xl
                  text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest
                  text-indigo-600 dark:text-indigo-400
                  "
                >
                  DOC
                </span>

                <span className="font-mono text-[10px] md:text-xs uppercase font-semibold text-zinc-400 dark:text-zinc-500 tracking-widest">
                  REV {new Date().getFullYear()}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">
                Curriculum Vitae
              </h2>

              <div className="mt-3 font-mono text-[11px] md:text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400 tracking-wide">
                Kevin Ardiansyah — Frontend Engineer
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8 flex-1 overflow-y-auto flex flex-col gap-6">
              {/* PDF VIEWER */}
              <div className="relative w-full h-[55vh] md:h-[60vh] rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 group">
                <iframe
                  src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="CV Document"
                  className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-sm uppercase tracking-wide">
                {/* BUTTON 1: SECONDARY (VIEW FULLSCREEN) */}
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  flex items-center justify-center gap-3
                  bg-zinc-50 dark:bg-zinc-800/30
                  border border-zinc-200/80 dark:border-zinc-700/50
                  text-zinc-600 dark:text-zinc-300
                  rounded-2xl py-4
                  hover:border-indigo-500/50 dark:hover:border-indigo-500/50
                  hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                  hover:text-indigo-600 dark:hover:text-indigo-400
                  transition-all duration-300 hover:-translate-y-0.5
                  "
                >
                  <FileText
                    size={18}
                    className="text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                  />
                  Fullscreen
                </a>

                {/* BUTTON 2: PRIMARY (DOWNLOAD CV) */}
                <a
                  href={cvUrl}
                  download
                  className="
                  group
                  flex items-center justify-center gap-3
                  bg-indigo-600 dark:bg-indigo-500
                  text-white
                  rounded-2xl py-4
                  hover:bg-zinc-900 dark:hover:bg-white
                  hover:text-white dark:hover:text-zinc-900
                  shadow-md hover:shadow-xl hover:shadow-zinc-900/20 dark:hover:shadow-white/20
                  transition-all duration-300 hover:-translate-y-0.5
                  "
                >
                  <Download
                    size={18}
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
