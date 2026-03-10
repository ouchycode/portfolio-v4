"use client";

import { X, FileText, ArrowUpRight } from "lucide-react";
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
            w-full max-w-5xl
            max-h-[90vh]
            overflow-y-auto
            bg-white dark:bg-[#121212]
            text-zinc-900 dark:text-zinc-50
            border border-zinc-200/80 dark:border-zinc-800/80
            rounded-[2rem] shadow-2xl shadow-black/10 dark:shadow-black/50
            [&::-webkit-scrollbar]:hidden
            "
          >
            {/* CLOSE BUTTON - FLOATING PILL */}
            <button
              onClick={onClose}
              className="
              absolute top-6 right-6 md:top-8 md:right-8
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
            <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-10 pr-20 bg-[#fafafa] dark:bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-5">
                {/* ID Badge */}
                <span
                  className="
                  bg-indigo-50 dark:bg-indigo-500/10
                  border border-indigo-100 dark:border-indigo-500/20
                  px-3 py-1.5 rounded-xl
                  text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest
                  text-indigo-600 dark:text-indigo-400
                  "
                >
                  FIG. {cert.id}
                </span>

                {/* Year */}
                <span className="font-mono text-[10px] md:text-xs uppercase font-semibold text-zinc-400 dark:text-zinc-500 tracking-widest">
                  {cert.year}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-tight">
                {cert.title}
              </h2>

              <div className="mt-4 font-mono text-[11px] md:text-xs uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-wide">
                Issued by{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  {cert.issuer}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-10 flex flex-col gap-6">
              {/* PDF VIEWER */}
              <div
                className="
                relative w-full aspect-[16/10] md:h-[60vh]
                rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80
                overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 group
                "
              >
                <iframe
                  src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title="Certificate Document"
                  className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* ACTION BUTTON */}
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
                flex items-center justify-center gap-3
                w-full
                bg-indigo-600 dark:bg-indigo-500
                text-white
                rounded-2xl py-4
                font-bold uppercase tracking-wider text-sm md:text-base
                hover:bg-zinc-900 dark:hover:bg-white
                hover:text-white dark:hover:text-zinc-900
                shadow-md hover:shadow-xl hover:shadow-zinc-900/20 dark:hover:shadow-white/20
                transition-all duration-300 hover:-translate-y-1
                "
              >
                <FileText
                  size={18}
                  className="transition-transform group-hover:scale-110"
                />
                Open Original PDF
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform duration-300 opacity-70 group-hover:opacity-100"
                />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
