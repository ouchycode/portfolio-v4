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
          flex items-start md:items-center justify-center
          px-4 py-10
          "
        >
          {/* overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 cursor-pointer"
          />

          {/* modal */}
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="
            relative z-10
            w-full max-w-4xl
            max-h-[90vh]
            flex flex-col
            bg-white text-black
            dark:bg-[#050505] dark:text-white
            border border-black dark:border-white
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="
              group
              absolute top-4 right-4 md:top-6 md:right-6
              z-50
              border border-black dark:border-white
              p-2
              hover:bg-indigo-500 hover:text-white
              transition
              bg-white dark:bg-[#050505]
              "
            >
              <X
                size={18}
                className="text-indigo-500 group-hover:text-white transition"
              />
            </button>

            {/* HEADER */}
            <div className="border-b border-black dark:border-white p-6 md:p-10 pr-16">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="
                  border border-black dark:border-white
                  px-2 py-[2px]
                  text-[10px]
                  font-mono uppercase
                  text-indigo-500
                  "
                >
                  DOC
                </span>

                <span className="font-mono text-xs uppercase text-zinc-500">
                  {new Date().getFullYear()}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase">
                Curriculum Vitae
              </h2>

              <div className="mt-2 font-mono text-xs uppercase text-indigo-500">
                Kevin Ardiansyah
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-10 flex-1 overflow-y-auto">
              {/* PDF VIEWER */}
              <div className="border border-black dark:border-white h-[60vh] md:h-[65vh] overflow-hidden mb-6 bg-zinc-100 dark:bg-zinc-900">
                <iframe
                  src={`${cvUrl}#toolbar=0`}
                  title="CV Document"
                  className="w-full h-full border-none"
                />
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                {/* OPEN PDF IN NEW TAB */}
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  flex items-center justify-center gap-3
                  border border-black dark:border-white
                  py-4 font-bold uppercase
                  hover:bg-indigo-500 hover:text-white
                  transition
                  "
                >
                  <FileText
                    size={16}
                    className="text-indigo-500 group-hover:text-white transition"
                  />
                  View Fullscreen
                </a>

                {/* DOWNLOAD PDF */}
                <a
                  href={cvUrl}
                  download
                  className="
                  group
                  flex items-center justify-center gap-3
                  border border-black dark:border-white
                  py-4 font-bold uppercase
                  hover:bg-indigo-500 hover:text-white
                  transition
                  "
                >
                  <Download
                    size={16}
                    className="text-indigo-500 group-hover:text-white transition"
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
