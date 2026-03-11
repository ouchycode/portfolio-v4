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

export default function ExperienceModal({ isOpen, onClose, data }: any) {
  if (!data) return null;

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "Education":
        return "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
      case "Bootcamp":
        return "bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20";
      case "Internship":
        return "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";
      case "Organization":
        return "bg-purple-50 text-purple-600 border border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20";
      default:
        return "bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700/50";
    }
  };

  const getWatermarkIcon = (type: string) => {
    const className =
      "absolute -bottom-10 -left-10 w-72 h-72 text-zinc-900/[0.03] dark:text-white/[0.02] -rotate-12 pointer-events-none z-0 transition-colors duration-500";
    switch (type) {
      case "Education":
        return <GraduationCap className={className} />;
      case "Bootcamp":
        return <Code className={className} />;
      case "Internship":
        return <Briefcase className={className} />;
      case "Organization":
        return <Users className={className} />;
      default:
        return <Zap className={className} />;
    }
  };

  const typeStyle = getTypeStyle(data.type);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center px-4 md:p-6 py-10">
          {/* OVERLAY */}
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
            {getWatermarkIcon(data.type)}

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
                <span
                  className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black font-mono uppercase tracking-widest shadow-sm transition-colors duration-500 ${typeStyle}`}
                >
                  {data.type}
                </span>

                <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/60 px-4 py-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-700/50 transition-colors duration-500">
                  <Sparkles
                    size={12}
                    className="text-zinc-400 dark:text-zinc-500 transition-colors duration-500"
                  />
                  <span className="font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-wider transition-colors duration-500">
                    {data.period}
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-[0.9] mb-6 transition-colors duration-500">
                {data.role}
              </h2>

              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-tight transition-colors duration-500">
                  {data.company}
                </span>
                <span className="hidden md:block text-zinc-300 dark:text-zinc-700 transition-colors duration-500">
                  |
                </span>
                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium italic text-sm md:text-base transition-colors duration-500">
                  <span>{data.location}</span>
                </div>
              </div>
            </div>

            {/* CONTENT GRID */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 bg-white dark:bg-[#121212] transition-colors duration-500">
              {/* OVERVIEW */}
              <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-zinc-200/80 dark:border-zinc-800/80 p-8 md:p-12 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-6 text-zinc-400 dark:text-zinc-600 transition-colors duration-500">
                  <div className="w-8 h-[2px] bg-current rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">
                    Overview
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium transition-colors duration-500">
                  {data.description}
                </p>
              </div>

              {/* TECH & SKILLS */}
              <div className="md:col-span-5 p-8 md:p-12 bg-zinc-50/50 dark:bg-zinc-900/40 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-6 text-zinc-400 dark:text-zinc-600 transition-colors duration-500">
                  <div className="w-8 h-[2px] bg-current rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">
                    Competencies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {data.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="
                      bg-white dark:bg-[#18181b]
                      border border-zinc-200/80 dark:border-zinc-800
                      text-zinc-600 dark:text-zinc-300
                      px-4 py-2 rounded-2xl
                      font-mono text-[10px] md:text-xs uppercase font-bold
                      shadow-sm transition-all duration-300
                      hover:border-indigo-500/50 dark:hover:border-indigo-500/50
                      hover:text-indigo-600 dark:hover:text-indigo-400
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* KEY RESPONSIBILITIES */}
              <div className="md:col-span-12 border-t border-zinc-200/80 dark:border-zinc-800/80 p-8 md:p-12 bg-white dark:bg-[#0c0c0c] transition-colors duration-500">
                <div className="flex items-center gap-3 mb-8 text-zinc-400 dark:text-zinc-600 transition-colors duration-500">
                  <div className="w-8 h-[2px] bg-current rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">
                    Key Contributions
                  </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2 md:gap-x-16">
                  {data.details.map((item: string, i: number) => (
                    <div key={i} className="group flex gap-5 items-start">
                      <div className="bg-indigo-600 dark:bg-indigo-500 p-1.5 rounded-lg shrink-0 mt-1 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight
                          size={14}
                          className="text-white"
                          strokeWidth={4}
                        />
                      </div>
                      <span className="text-sm md:text-lg text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
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
