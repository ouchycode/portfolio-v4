"use client";

import {
  X,
  ExternalLink,
  ArrowRight,
  Sparkles,
  MonitorSmartphone,
  ShoppingCart,
  CalendarDays,
  Globe,
  Smartphone,
  Palette,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categoryConfig: Record<
  string,
  { pill: string; accent: string; dot: string }
> = {
  "LMS Platform": {
    pill: "border-blue-200 dark:border-blue-700/50 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300",
    accent: "from-blue-400 to-cyan-400",
    dot: "bg-blue-500",
  },
  EdTech: {
    pill: "border-cyan-200 dark:border-cyan-700/50 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300",
    accent: "from-cyan-400 to-teal-400",
    dot: "bg-cyan-500",
  },
  "Event Management": {
    pill: "border-amber-200 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300",
    accent: "from-amber-400 to-orange-400",
    dot: "bg-amber-500",
  },
  "E-Commerce": {
    pill: "border-pink-200 dark:border-pink-700/50 bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300",
    accent: "from-pink-400 to-rose-400",
    dot: "bg-pink-500",
  },
  "Modern Portfolio": {
    pill: "border-violet-200 dark:border-violet-700/50 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300",
    accent: "from-violet-400 to-purple-400",
    dot: "bg-violet-500",
  },
  "Web Application": {
    pill: "border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300",
    accent: "from-emerald-400 to-green-400",
    dot: "bg-emerald-500",
  },
  "Mobile Application": {
    pill: "border-indigo-200 dark:border-indigo-700/50 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300",
    accent: "from-indigo-400 to-blue-400",
    dot: "bg-indigo-500",
  },
};

const getWatermarkIcon = (category: string) => {
  const cls =
    "absolute -bottom-10 -right-10 w-64 h-64 text-zinc-900/[0.03] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0";
  switch (category) {
    case "LMS Platform":
    case "EdTech":
      return <MonitorSmartphone className={cls} strokeWidth={1.5} />;
    case "E-Commerce":
      return <ShoppingCart className={cls} strokeWidth={1.5} />;
    case "Event Management":
      return <CalendarDays className={cls} strokeWidth={1.5} />;
    case "Modern Portfolio":
      return <Palette className={cls} strokeWidth={1.5} />;
    case "Mobile Application":
      return <Smartphone className={cls} strokeWidth={1.5} />;
    default:
      return <Globe className={cls} strokeWidth={1.5} />;
  }
};

export default function ProjectModal({ isOpen, onClose, project }: any) {
  if (!project) return null;

  const cfg =
    categoryConfig[project.category] ?? categoryConfig["Web Application"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto flex items-start md:items-center justify-center px-4 md:p-6 py-10">
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

            {/* ── Close Button ─────────────────────────────────── */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-xl border border-white/30 dark:border-zinc-700/60 bg-black/20 dark:bg-zinc-800/80 backdrop-blur-md shadow-sm hover:bg-red-500/80 hover:border-red-400/50 transition-all duration-200 group"
            >
              <X
                size={18}
                strokeWidth={2}
                className="text-white/80 group-hover:text-white transition-colors duration-200"
              />
            </button>

            {/* ── Hero Image ───────────────────────────────────── */}
            <div className="relative overflow-hidden rounded-t-2xl group">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/8] bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/10 to-transparent" />

                {/* Top accent line on image */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cfg.accent} opacity-80`}
                />
              </div>

              {/* FIG badge on image */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md shadow-sm">
                <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-white/90">
                  FIG. {project.id}
                </span>
              </div>
            </div>

            {/* ── Title Section ─────────────────────────────────── */}
            <div className="relative overflow-hidden border-b border-zinc-200/60 dark:border-zinc-700/40 p-7 md:p-10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm transition-colors duration-500">
              {getWatermarkIcon(project.category)}

              <div className="relative z-10">
                {/* Category pill */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-mono font-bold uppercase tracking-[0.18em] shadow-sm ${cfg.pill}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                    {project.category}
                  </span>
                </div>

                <h2
                  className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-3xl md:text-5xl text-zinc-900 dark:text-white mb-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {project.title}
                </h2>

                <p className="text-sm md:text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400 font-light max-w-3xl">
                  {project.description}
                </p>
              </div>
            </div>

            {/* ── Content Grid ─────────────────────────────────── */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12">
              {/* Tech Stack */}
              <div className="md:col-span-5 border-b border-zinc-200/60 dark:border-zinc-700/40 md:border-b-0 md:border-r md:border-r-zinc-200/60 dark:md:border-r-zinc-700/40 p-7 md:p-10 bg-zinc-50/30 dark:bg-zinc-800/20 backdrop-blur-sm transition-colors duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-6 h-0.5 rounded-full bg-gradient-to-r ${cfg.accent}`}
                  />
                  <h3 className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Core Technology
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/60 backdrop-blur-sm text-[9px] font-mono font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 shadow-sm hover:-translate-y-0.5 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="md:col-span-7 p-7 md:p-10 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-sm transition-colors duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-6 h-0.5 rounded-full bg-gradient-to-r ${cfg.accent}`}
                  />
                  <h3 className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Key Functionalities
                  </h3>
                </div>
                <div className="grid gap-4">
                  {project.features.map((f: string, i: number) => (
                    <div key={i} className="group flex gap-4 items-start">
                      <div className="flex-shrink-0 w-7 h-7 mt-0.5 flex items-center justify-center rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-700/50 shadow-sm group-hover:bg-pink-500 group-hover:border-pink-500 transition-all duration-300">
                        <ArrowRight
                          size={13}
                          strokeWidth={2.5}
                          className="text-pink-500 dark:text-pink-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                        />
                      </div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="md:col-span-12 border-t border-zinc-200/60 dark:border-zinc-700/40 p-7 md:p-10 bg-zinc-50/30 dark:bg-zinc-900/30 backdrop-blur-sm transition-colors duration-500">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-between w-full md:w-fit md:min-w-[320px] rounded-2xl border border-indigo-400/60 dark:border-indigo-600/40 bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white px-7 py-5 shadow-[0_4px_24px_0px_rgba(99,102,241,0.25)] hover:shadow-[0_8px_36px_0px_rgba(99,102,241,0.38)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  {/* Shine sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-3">
                    <Sparkles
                      size={17}
                      strokeWidth={2}
                      className="hidden md:block text-indigo-200"
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-indigo-200">
                        Open Link
                      </span>
                      <span
                        className="text-sm md:text-base font-bold text-white tracking-tight"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        View Repository
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/15 border border-white/20 group-hover:bg-white transition-colors duration-300 ml-6 shrink-0">
                    <ExternalLink
                      size={16}
                      strokeWidth={2}
                      className="text-white group-hover:text-indigo-700 group-hover:rotate-45 transition-all duration-300"
                    />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
