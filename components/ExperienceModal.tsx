"use client";

import { X, ArrowRight } from "lucide-react";
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

  const typeStyle = getTypeStyle(data.type);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="
          fixed inset-0 z-[100]
          overflow-y-auto
          flex items-center justify-center
          px-4 md:p-6 py-10
          "
        >
          {/* OVERLAY DENGAN EFEK KACA (GLASSMORPHISM) */}
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
            {/* CLOSE BUTTON - FLOATING */}
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
                <span
                  className={`
                  px-3 py-1.5 rounded-xl
                  text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest
                  ${typeStyle}
                  `}
                >
                  {data.type}
                </span>

                <div className="font-mono text-[10px] md:text-xs uppercase font-semibold text-zinc-400 dark:text-zinc-500 tracking-widest">
                  {data.period}
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-tight">
                {data.role}
              </h2>

              <div className="mt-4 font-mono text-[11px] md:text-xs uppercase font-bold text-indigo-600 dark:text-indigo-400 tracking-wide flex flex-col md:flex-row gap-1 md:gap-3">
                <span>{data.company}</span>
                <span className="hidden md:inline text-zinc-300 dark:text-zinc-700">
                  •
                </span>
                <span className="text-zinc-500">{data.location}</span>
              </div>
            </div>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* OVERVIEW */}
              <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">
                    Overview
                  </h3>
                </div>

                <p className="text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
                  {data.description}
                </p>
              </div>

              {/* SKILLS */}
              <div className="md:col-span-5 p-6 md:p-10 flex flex-col gap-4 bg-zinc-50/50 dark:bg-zinc-900/20">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">
                    Tech & Skills
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="
                      bg-white dark:bg-[#121212]
                      border border-zinc-200/80 dark:border-zinc-800/80
                      text-zinc-600 dark:text-zinc-300
                      px-3.5 py-1.5 rounded-xl
                      font-mono text-[10px] md:text-xs uppercase font-bold
                      hover:border-indigo-300 dark:hover:border-indigo-500/50
                      hover:text-indigo-600 dark:hover:text-indigo-400
                      transition-colors duration-300 cursor-default
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* RESPONSIBILITIES */}
              <div className="md:col-span-12 border-t border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-10 pb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">
                    Key Responsibilities
                  </h3>
                </div>

                <ul className="grid gap-4 md:grid-cols-2 md:gap-x-12">
                  {data.details.map((item: string, i: number) => (
                    <li key={i} className="group flex gap-4 items-start">
                      <div className="bg-indigo-50 dark:bg-indigo-500/10 p-1.5 rounded-md shrink-0 mt-0.5 transition-colors group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20">
                        <ArrowRight
                          size={14}
                          className="text-indigo-600 dark:text-indigo-400"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
