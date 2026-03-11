"use client";

import { X, FileText, ArrowUpRight, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificateModal({ isOpen, onClose, cert }: any) {
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
          {/* OVERLAY GLASSMORPHISM */}
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
            w-full max-w-5xl
            max-h-[90vh]
            overflow-y-auto
            bg-white dark:bg-[#121212]
            text-zinc-900 dark:text-zinc-50
            border border-zinc-200/80 dark:border-zinc-800/80
            rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]
            [&::-webkit-scrollbar]:hidden
            transition-colors duration-500
            "
          >
            {/* WATERMARK ICON HEADER */}
            <Award
              className="absolute -top-10 -left-10 w-72 h-72 text-zinc-900/[0.03] dark:text-white/[0.02] -rotate-12 pointer-events-none z-0 transition-colors duration-500"
              strokeWidth={1}
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="
              absolute top-6 right-6 md:top-8 md:right-8
              z-50
              flex items-center justify-center
              w-12 h-12 rounded-full
              bg-zinc-100 dark:bg-zinc-800/80
              text-zinc-500 dark:text-zinc-400
              hover:bg-indigo-600 dark:hover:bg-indigo-500
              hover:text-white dark:hover:text-white
              transition-all duration-300 shadow-sm
              "
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* HEADER AREA */}
            <div className="relative z-10 border-b border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-12 pr-20 bg-gradient-to-br from-white/50 to-zinc-50/50 dark:from-[#121212]/50 dark:to-[#0a0a0a]/50 backdrop-blur-md transition-colors duration-500">
              <div className="flex items-center gap-3 mb-6">
                {/* ID Badge */}
                <span className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black font-mono uppercase tracking-widest shadow-md shadow-indigo-500/20 transition-colors duration-500">
                  FIG. {cert.id}
                </span>

                <div className="flex items-center gap-2 bg-white dark:bg-zinc-800/60 px-4 py-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm transition-colors duration-500">
                  <Sparkles
                    size={12}
                    className="text-amber-500 dark:text-amber-400 transition-colors duration-500"
                  />
                  <span className="font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-wider transition-colors duration-500">
                    Verified Credential — {cert.year}
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-[0.9] mb-6 transition-colors duration-500">
                {cert.title}
              </h2>

              <div className="flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-widest transition-colors duration-500">
                Issued by{" "}
                <span className="text-indigo-600 dark:text-indigo-400 ml-1 transition-colors duration-500">
                  {cert.issuer}
                </span>
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 md:p-12 flex flex-col gap-8 bg-zinc-50/30 dark:bg-black/20 transition-colors duration-500">
              {/* PDF VIEWER CONTAINER */}
              <div
                className="
                relative w-full aspect-[16/10] md:h-[60vh]
                rounded-[2rem] border border-zinc-200/80 dark:border-zinc-800/80
                overflow-hidden bg-white dark:bg-zinc-900 shadow-inner group
                transition-colors duration-500
                "
              >
                <iframe
                  src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title="Certificate Document"
                  className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Subtle frame overlay */}
                <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 dark:border-black/5 rounded-[2rem] transition-colors duration-500"></div>
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
                bg-indigo-600 dark:bg-indigo-500
                text-white
                rounded-[1.5rem] px-8 py-5
                font-bold uppercase tracking-widest text-sm md:text-base
                hover:bg-zinc-900 dark:hover:bg-white
                hover:text-white dark:hover:text-zinc-900
                shadow-xl shadow-indigo-600/20 dark:shadow-indigo-500/10
                transition-all duration-300 hover:-translate-y-1
                mx-auto md:mx-0
                "
              >
                <div className="flex items-center gap-3">
                  <FileText
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>Open Full PDF</span>
                </div>
                <div className="bg-white/20 dark:bg-black/10 p-2 rounded-full group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={20} />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
