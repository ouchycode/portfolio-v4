"use client";

import {
  X,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code,
  Users,
  Zap,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const typeConfig: Record<
  string,
  { pill: string; accent: string; dot: string }
> = {
  Education: {
    pill: "border-blue-200 dark:border-blue-700/50 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300",
    accent: "from-blue-400 to-indigo-400",
    dot: "bg-blue-500",
  },
  Bootcamp: {
    pill: "border-violet-200 dark:border-violet-700/50 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300",
    accent: "from-violet-400 to-purple-400",
    dot: "bg-violet-500",
  },
  Internship: {
    pill: "border-orange-200 dark:border-orange-700/50 bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300",
    accent: "from-orange-400 to-amber-400",
    dot: "bg-orange-500",
  },
  Organization: {
    pill: "border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300",
    accent: "from-emerald-400 to-teal-400",
    dot: "bg-emerald-500",
  },
};

const getWatermarkIcon = (type: string) => {
  const cls =
    "absolute -bottom-10 -left-10 w-72 h-72 text-zinc-900/[0.03] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0";
  switch (type) {
    case "Education":
      return <GraduationCap className={cls} strokeWidth={1.5} />;
    case "Bootcamp":
      return <Code className={cls} strokeWidth={1.5} />;
    case "Internship":
      return <Briefcase className={cls} strokeWidth={1.5} />;
    case "Organization":
      return <Users className={cls} strokeWidth={1.5} />;
    default:
      return <Zap className={cls} strokeWidth={1.5} />;
  }
};

export default function ExperienceModal({ isOpen, onClose, data }: any) {
  if (!data) return null;

  const cfg = typeConfig[data.type] ?? typeConfig["Education"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center px-4 md:p-6 py-10">
          {/* ── Backdrop ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* ── Modal Container ───────────────────────────────────── */}
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="
              relative z-10
              w-full max-w-5xl
              max-h-[90vh]
              overflow-y-auto
              rounded-2xl
              border border-zinc-200/80 dark:border-zinc-700/60
              bg-white/85 dark:bg-zinc-900/85
              backdrop-blur-xl
              shadow-[0_32px_80px_0px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_80px_0px_rgba(0,0,0,0.6)]
              [&::-webkit-scrollbar]:hidden
              transition-colors duration-500
            "
          >
            {/* Grain texture */}
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] rounded-2xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "128px",
              }}
            />

            {/* Inner gradient */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/20 via-transparent to-zinc-50/10 dark:from-zinc-800/20 dark:via-transparent dark:to-zinc-900/10 rounded-2xl" />

            {/* Watermark */}
            {getWatermarkIcon(data.type)}

            {/* ── Close Button ─────────────────────────────────── */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm hover:bg-red-50 dark:hover:bg-red-950/40 hover:border-red-300 dark:hover:border-red-700/50 transition-all duration-200 group"
            >
              <X
                size={18}
                strokeWidth={2}
                className="text-zinc-500 dark:text-zinc-400 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200"
              />
            </button>

            {/* ── Header ───────────────────────────────────────── */}
            <div className="relative z-10 border-b border-zinc-200/60 dark:border-zinc-700/40 p-7 md:p-12 pr-16 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm transition-colors duration-500">
              {/* Top accent line per type */}
              <div
                className={`absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r ${cfg.accent} opacity-60`}
              />

              <div className="flex flex-wrap items-center gap-3 mb-5">
                {/* Type pill */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-mono font-bold uppercase tracking-[0.18em] shadow-sm ${cfg.pill}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                  {data.type}
                </span>

                {/* Period pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/60 backdrop-blur-sm shadow-sm">
                  <Sparkles
                    size={11}
                    className="text-amber-500 dark:text-amber-400"
                  />
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300">
                    {data.period}
                  </span>
                </div>
              </div>

              <h2
                className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-3xl md:text-5xl text-zinc-900 dark:text-white mb-5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {data.role}
              </h2>

              <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-4">
                <span
                  className="font-semibold text-sm md:text-base text-violet-600 dark:text-violet-400 tracking-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {data.company}
                </span>
                <span className="hidden md:block text-zinc-300 dark:text-zinc-700">
                  ·
                </span>
                <span className="text-[10px] font-mono font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.18em]">
                  {data.location}
                </span>
              </div>
            </div>

            {/* ── Content Grid ─────────────────────────────────── */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12">
              {/* Overview */}
              <div className="md:col-span-7 border-b border-zinc-200/60 dark:border-zinc-700/40 md:border-b-0 md:border-r md:border-r-zinc-200/60 dark:md:border-r-zinc-700/40 p-7 md:p-10 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-sm transition-colors duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-6 h-0.5 rounded-full bg-gradient-to-r ${cfg.accent}`}
                  />
                  <h3 className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Overview
                  </h3>
                </div>
                <p className="text-sm md:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300 font-light">
                  {data.description}
                </p>
              </div>

              {/* Competencies */}
              <div className="md:col-span-5 p-7 md:p-10 bg-zinc-50/40 dark:bg-zinc-800/20 backdrop-blur-sm transition-colors duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-6 h-0.5 rounded-full bg-gradient-to-r ${cfg.accent}`}
                  />
                  <h3 className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Competencies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/60 backdrop-blur-sm text-[9px] font-mono font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 shadow-sm hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-600 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Contributions */}
              <div className="md:col-span-12 border-t border-zinc-200/60 dark:border-zinc-700/40 p-7 md:p-10 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-sm transition-colors duration-500">
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className={`w-6 h-0.5 rounded-full bg-gradient-to-r ${cfg.accent}`}
                  />
                  <h3 className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Key Contributions
                  </h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2 md:gap-x-10">
                  {data.details.map((item: string, i: number) => (
                    <div key={i} className="group flex gap-4 items-start">
                      <div className="flex-shrink-0 w-7 h-7 mt-0.5 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-700/50 shadow-sm group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-300">
                        <ArrowRight
                          size={13}
                          strokeWidth={2.5}
                          className="text-indigo-500 dark:text-indigo-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                        />
                      </div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </div>
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
