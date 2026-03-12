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

  // Disamakan dengan palet warna retro brutalism dari halaman utama
  const getTypeStyle = (type: string) => {
    switch (type) {
      case "Education":
        return "bg-blue-300 dark:bg-blue-600 text-blue-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
      case "Bootcamp":
        return "bg-violet-300 dark:bg-violet-600 text-violet-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
      case "Internship":
        return "bg-orange-300 dark:bg-orange-600 text-orange-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
      case "Organization":
        return "bg-emerald-300 dark:bg-emerald-600 text-emerald-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
      default:
        return "bg-zinc-300 dark:bg-zinc-600 text-zinc-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
    }
  };

  const getWatermarkIcon = (type: string) => {
    const className =
      "absolute -bottom-10 -left-10 w-72 h-72 text-zinc-900/[0.04] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0 transition-colors duration-500";
    switch (type) {
      case "Education":
        return <GraduationCap className={className} strokeWidth={2} />;
      case "Bootcamp":
        return <Code className={className} strokeWidth={2} />;
      case "Internship":
        return <Briefcase className={className} strokeWidth={2} />;
      case "Organization":
        return <Users className={className} strokeWidth={2} />;
      default:
        return <Zap className={className} strokeWidth={2} />;
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
            className="fixed inset-0 bg-zinc-900/80 dark:bg-black/90 cursor-pointer transition-colors duration-500"
          />

          {/* MODAL CONTAINER - Neo Brutalism */}
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
            {getWatermarkIcon(data.type)}

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
                <span
                  className={`px-3 py-1.5 rounded-sm font-pixel text-[8px] md:text-[10px] uppercase font-bold tracking-widest transition-colors duration-500 ${typeStyle}`}
                >
                  {data.type}
                </span>

                <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-sm border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                  <Sparkles
                    size={12}
                    className="text-yellow-500 dark:text-yellow-400"
                  />
                  <span className="font-pixel text-[8px] md:text-[10px] uppercase font-bold text-zinc-900 dark:text-zinc-100 tracking-widest transition-colors duration-500">
                    {data.period}
                  </span>
                </div>
              </div>

              <h2 className="font-pixel text-3xl md:text-5xl font-black uppercase tracking-widest text-zinc-900 dark:text-white leading-tight mb-6 transition-colors duration-500 drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46]">
                {data.role}
              </h2>

              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className="font-pixel text-sm md:text-base font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest transition-colors duration-500">
                  {data.company}
                </span>
                <span className="hidden md:block font-pixel text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
                  |
                </span>
                <div className="flex items-center gap-2 font-pixel text-[8px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-bold tracking-widest transition-colors duration-500">
                  <span>{data.location}</span>
                </div>
              </div>
            </div>

            {/* CONTENT GRID */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 bg-[#fafafa] dark:bg-zinc-900 transition-colors duration-500">
              {/* OVERVIEW */}
              <div className="md:col-span-7 border-b-2 md:border-b-0 md:border-r-2 md:border-r-4 border-zinc-900 dark:border-zinc-100 p-8 md:p-12 transition-colors duration-500 bg-white dark:bg-zinc-800/50">
                <div className="flex items-center gap-3 mb-6 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
                  <div className="w-8 h-[4px] bg-zinc-900 dark:bg-zinc-100 rounded-sm"></div>
                  <h3 className="font-pixel text-[10px] md:text-xs uppercase font-bold tracking-widest">
                    OVERVIEW
                  </h3>
                </div>
                {/* Font mono untuk kesan retro/terminal */}
                <p className="font-mono text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 font-bold transition-colors duration-500">
                  {data.description}
                </p>
              </div>

              {/* TECH & SKILLS */}
              <div className="md:col-span-5 p-8 md:p-12 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-500 border-b-2 md:border-b-0 border-zinc-900 dark:border-zinc-100">
                <div className="flex items-center gap-3 mb-6 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
                  <div className="w-8 h-[4px] bg-zinc-900 dark:bg-zinc-100 rounded-sm"></div>
                  <h3 className="font-pixel text-[10px] md:text-xs uppercase font-bold tracking-widest">
                    COMPETENCIES
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {data.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="
                      bg-white dark:bg-zinc-800
                      border-2 border-zinc-900 dark:border-zinc-100
                      text-zinc-900 dark:text-zinc-100
                      px-3 py-2 rounded-sm
                      font-pixel text-[8px] md:text-[10px] uppercase font-bold tracking-widest
                      shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7]
                      transition-all duration-300
                      hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#18181b] dark:hover:shadow-[3px_3px_0_0_#e4e4e7]
                      hover:bg-violet-300 dark:hover:bg-violet-600 hover:text-violet-950 dark:hover:text-white
                      cursor-default
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* KEY RESPONSIBILITIES */}
              <div className="md:col-span-12 border-t-2 md:border-t-4 border-zinc-900 dark:border-zinc-100 p-8 md:p-12 bg-white dark:bg-[#121212] transition-colors duration-500">
                <div className="flex items-center gap-3 mb-8 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
                  <div className="w-8 h-[4px] bg-zinc-900 dark:bg-zinc-100 rounded-sm"></div>
                  <h3 className="font-pixel text-[10px] md:text-xs uppercase font-bold tracking-widest">
                    KEY CONTRIBUTIONS
                  </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2 md:gap-x-16">
                  {data.details.map((item: string, i: number) => (
                    <div key={i} className="group flex gap-4 items-start">
                      <div className="bg-indigo-500 border-2 border-zinc-900 dark:border-zinc-100 p-1 rounded-sm shrink-0 mt-1 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-transform duration-300 group-hover:scale-110">
                        <ArrowRight
                          size={14}
                          className="text-white dark:text-zinc-900"
                          strokeWidth={4}
                        />
                      </div>
                      <span className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-bold leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
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
