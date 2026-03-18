"use client";

import {
  X,
  Briefcase,
  GraduationCap,
  Code,
  Users,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Pemetaan Warna Semantik Google (Konsisten dengan halaman Experience)
const googleTheme: Record<string, { bg: string; text: string; icon: any }> = {
  Education: {
    bg: "bg-[#E8F0FE] dark:bg-[#1A73E8]/15",
    text: "text-[#1A73E8] dark:text-[#8AB4F8]",
    icon: GraduationCap,
  },
  Bootcamp: {
    bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
    text: "text-[#137333] dark:text-[#81C995]",
    icon: Code,
  },
  Internship: {
    bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
    text: "text-[#B06000] dark:text-[#FDE293]",
    icon: Briefcase,
  },
  Organization: {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#C5221F] dark:text-[#F28B82]",
    icon: Users,
  },
};

export default function ExperienceModal({ isOpen, onClose, data }: any) {
  if (!data) return null;

  const theme = googleTheme[data.type] || googleTheme["Education"];
  const Icon = theme.icon;

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
              w-full max-w-3xl
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
            <div className="relative z-10 border-b border-[#DADCE0] dark:border-[#3C4043] p-6 md:p-8 pr-16 bg-white dark:bg-[#303134] transition-colors duration-500 shrink-0">
              {/* Type & Period Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${theme.bg} ${theme.text}`}
                >
                  <Icon size={14} strokeWidth={2.5} />
                  {data.type}
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-md border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] text-[11px] font-bold uppercase tracking-wider text-[#5F6368] dark:text-[#9AA0A6]">
                  {data.period}
                </span>
              </div>

              {/* Role Title */}
              <h2 className="font-extrabold text-2xl md:text-3xl text-[#202124] dark:text-[#E8EAED] tracking-tight leading-tight mb-2">
                {data.role}
              </h2>

              {/* Company & Location */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm md:text-base font-medium">
                <span className="text-[#1A73E8] dark:text-[#8AB4F8]">
                  {data.company}
                </span>
                <span className="hidden sm:block text-[#DADCE0] dark:text-[#5F6368]">
                  •
                </span>
                <span className="text-[#5F6368] dark:text-[#9AA0A6]">
                  {data.location}
                </span>
              </div>
            </div>

            {/* ── Content Body ──────────────────────────────────────── */}
            <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-8 bg-[#F8F9FA] dark:bg-[#202124] transition-colors duration-500 flex flex-col gap-8 md:gap-10">
              {/* 1. Overview */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                  Ringkasan
                </h3>
                <p className="text-base md:text-[17px] leading-relaxed text-[#3C4043] dark:text-[#E8EAED]">
                  {data.description}
                </p>
              </div>

              {/* 2. Key Contributions */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                  Kontribusi & Pencapaian
                </h3>
                <div className="flex flex-col gap-3">
                  {data.details.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4">
                      <div className="mt-0.5 text-[#1A73E8] dark:text-[#8AB4F8] shrink-0">
                        <CheckCircle2 size={20} strokeWidth={2} />
                      </div>
                      <span className="text-[15px] md:text-base text-[#3C4043] dark:text-[#E8EAED] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Competencies / Tech Stack */}
              <div className="flex flex-col gap-4 mt-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                  Keahlian & Teknologi
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {data.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] text-[13px] font-semibold text-[#5F6368] dark:text-[#E8EAED] shadow-sm hover:shadow transition-shadow cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
