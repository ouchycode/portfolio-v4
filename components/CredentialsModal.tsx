"use client";

import { X, ExternalLink, Award, BadgeCheck } from "lucide-react";
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
          {/* ── Backdrop (Solid Dark ala Google Dialog) ─────────────────────────────────────────── */}
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
              flex flex-col
              rounded-[24px] md:rounded-[28px]
              border border-[#DADCE0] dark:border-[#3C4043]
              bg-white dark:bg-[#303134]
              shadow-[0_24px_38px_3px_rgba(0,0,0,0.14),0_9px_46px_8px_rgba(0,0,0,0.12),0_11px_15px_-7px_rgba(0,0,0,0.2)]
              dark:shadow-[0_24px_38px_3px_rgba(0,0,0,0.4)]
              overflow-hidden
              transition-colors duration-500
            "
          >
            {/* ── Close Button ─────────────────────────────────── */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#F1F3F4] dark:hover:bg-[#3C4043] transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={24} className="text-[#5F6368] dark:text-[#9AA0A6]" />
            </button>

            {/* ── Header Modal ───────────────────────────────────────── */}
            <div className="relative z-10 border-b border-[#DADCE0] dark:border-[#3C4043] px-6 py-5 md:px-8 md:py-6 pr-16 bg-white dark:bg-[#303134] transition-colors duration-500 shrink-0">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {/* Verified Badge (Google Green) */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995]">
                  <BadgeCheck size={14} strokeWidth={2.5} />
                  Verified
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] text-[11px] font-bold uppercase tracking-wider text-[#5F6368] dark:text-[#9AA0A6]">
                  {cert.year}
                </span>
                <span className="text-[12px] font-bold text-[#DADCE0] dark:text-[#5F6368]">
                  FIG. {cert.id}
                </span>
              </div>

              <h2 className="font-extrabold text-2xl md:text-3xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight mb-2">
                {cert.title}
              </h2>

              <div className="flex items-center gap-2">
                <Award
                  size={16}
                  className="text-[#5F6368] dark:text-[#9AA0A6]"
                />
                <span className="text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6]">
                  Diterbitkan oleh{" "}
                  <span className="font-bold text-[#202124] dark:text-[#E8EAED]">
                    {cert.issuer}
                  </span>
                </span>
              </div>
            </div>

            {/* ── Content Body ──────────────────────────────────────── */}
            <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-8 bg-[#F8F9FA] dark:bg-[#202124] transition-colors duration-500 flex flex-col gap-6 md:gap-8">
              {/* PDF Viewer (Google Drive Style) */}
              <div className="relative w-full h-[55vh] md:h-[60vh] rounded-[16px] overflow-hidden border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm">
                <iframe
                  src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title="Certificate Document"
                  className="w-full h-full border-none bg-white"
                />
              </div>

              {/* Action Buttons (Material Pill Buttons) */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4 mt-auto">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#34A853] hover:bg-[#2b8f45] dark:bg-[#81C995] dark:hover:bg-[#6db581] text-white dark:text-[#202124] font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Buka Dokumen Asli
                  <ExternalLink
                    size={18}
                    strokeWidth={2.5}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
