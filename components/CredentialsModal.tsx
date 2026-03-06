"use client";

import { X, FileText } from "lucide-react";
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
            className="absolute inset-0 bg-black/70"
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
              overflow-y-auto
              bg-white text-black
              dark:bg-[#050505] dark:text-white
              border border-black dark:border-white
              "
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                group
                absolute top-4 right-4
                border border-black dark:border-white
                p-2
                hover:bg-indigo-500 hover:text-white
                transition
                "
            >
              <X
                size={18}
                className="text-indigo-500 group-hover:text-white transition"
              />
            </button>

            {/* HEADER */}
            <div className="border-b border-black dark:border-white p-6 md:p-10">
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
                  FIG {cert.id}
                </span>

                <span className="font-mono text-xs uppercase text-zinc-500">
                  {cert.year}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase">
                {cert.title}
              </h2>

              <div className="mt-2 font-mono text-xs uppercase text-indigo-500">
                {cert.issuer}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-10">
              {/* PDF VIEWER */}
              <div className="border border-black dark:border-white h-[70vh] md:h-[60vh] overflow-auto mb-6">
                <iframe
                  src={`${cert.pdf}#toolbar=0`}
                  className="w-full h-full"
                />
              </div>

              {/* OPEN PDF */}
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex items-center justify-center gap-2
                  border border-black dark:border-white
                  py-3 font-bold uppercase
                  hover:bg-indigo-500 hover:text-white
                  transition
                  "
              >
                <FileText
                  size={16}
                  className="text-indigo-500 group-hover:text-white transition"
                />
                Open PDF
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
