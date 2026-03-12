"use client";

import { X, FileText, ArrowUpRight, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function CertificateModal({ isOpen, onClose, cert }: any) {
  // Mencegah body scroll saat modal aktif agar konsisten dengan modal lain
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
        <div
          className="
          fixed inset-0 z-[100]
          overflow-y-auto
          flex items-center justify-center
          px-4 py-10 md:p-6
          "
        >
          {/* OVERLAY */}
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
            w-full max-w-5xl
            max-h-[90vh]
            overflow-y-auto
            bg-white dark:bg-zinc-900
            text-zinc-900 dark:text-zinc-50
            border-2 md:border-4 border-zinc-900 dark:border-zinc-100
            rounded-md shadow-[10px_10px_0_0_#18181b] dark:shadow-[10px_10px_0_0_#e4e4e7]
            [&::-webkit-scrollbar]:hidden
            transition-colors duration-500
            "
          >
            {/* WATERMARK ICON HEADER */}
            <Award
              className="absolute -top-10 -left-10 w-72 h-72 text-zinc-900/[0.04] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0 transition-colors duration-500"
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
            <div className="relative z-10 border-b-2 md:border-b-4 border-zinc-900 dark:border-zinc-100 p-6 md:p-12 pr-20 bg-zinc-100 dark:bg-zinc-800 transition-colors duration-500">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {/* ID Badge */}
                <span className="bg-indigo-600 dark:bg-indigo-500 border-2 border-zinc-900 dark:border-zinc-100 text-white px-4 py-1.5 rounded-sm font-pixel text-[8px] md:text-[10px] uppercase font-bold tracking-widest shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                  FIG. {cert.id}
                </span>

                <div className="flex items-center gap-2 bg-yellow-300 dark:bg-yellow-600 border-2 border-zinc-900 dark:border-zinc-100 px-3 py-1.5 rounded-sm shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                  <Sparkles
                    size={12}
                    className="text-yellow-900 dark:text-yellow-100"
                  />
                  <span className="font-pixel text-[8px] md:text-[10px] uppercase font-bold text-yellow-950 dark:text-yellow-50 tracking-widest transition-colors duration-500">
                    Verified — {cert.year}
                  </span>
                </div>
              </div>

              <h2 className="font-pixel text-3xl md:text-5xl font-black uppercase tracking-widest text-zinc-900 dark:text-white leading-tight mb-6 transition-colors duration-500 drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46]">
                {cert.title}
              </h2>

              <div className="flex items-center gap-2 font-pixel text-[8px] md:text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-400 tracking-widest transition-colors duration-500">
                Issued by{" "}
                <span className="font-mono font-bold text-[10px] md:text-xs text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-200 dark:border-indigo-800 tracking-normal ml-1">
                  {cert.issuer}
                </span>
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 md:p-12 flex flex-col gap-8 bg-[#fafafa] dark:bg-zinc-900 transition-colors duration-500">
              {/* PDF VIEWER CONTAINER - Retro Screen Style */}
              <div
                className="
                relative w-full aspect-[16/10] md:h-[60vh]
                rounded-sm border-2 md:border-4 border-zinc-900 dark:border-zinc-100
                overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)] group
                transition-colors duration-500
                "
              >
                <iframe
                  src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title="Certificate Document"
                  className="w-full h-full border-none opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
                <div className="absolute inset-0 pointer-events-none bg-zinc-900/5 transition-colors group-hover:bg-transparent" />
              </div>

              {/* ACTION BUTTON */}
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
                flex items-center justify-between
                w-full md:w-fit md:min-w-[320px]
                bg-indigo-600 dark:bg-indigo-600
                text-white
                border-2 border-zinc-900 dark:border-zinc-100
                rounded-sm px-8 py-5
                shadow-[5px_5px_0_0_#18181b] dark:shadow-[5px_5px_0_0_#e4e4e7]
                hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#18181b] dark:hover:shadow-[6px_6px_0_0_#e4e4e7]
                active:translate-y-1 active:translate-x-1 active:shadow-none
                transition-all duration-200
                mx-auto md:mx-0
                "
              >
                <div className="flex items-center gap-3">
                  <FileText
                    size={20}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:rotate-12"
                  />
                  <span className="font-pixel text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    Open Full PDF
                  </span>
                </div>
                <div className="bg-white border-2 border-zinc-900 p-2 rounded-sm text-zinc-900 group-hover:bg-yellow-300 transition-colors duration-200">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={3}
                    className="group-hover:rotate-45 transition-transform duration-300"
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
