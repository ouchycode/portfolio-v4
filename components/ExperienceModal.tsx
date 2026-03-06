"use client";

import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceModal({ isOpen, onClose, data }: any) {
  if (!data) return null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Education":
        return "text-emerald-500 border-emerald-500";
      case "Bootcamp":
        return "text-indigo-500 border-indigo-500";
      case "Internship":
        return "text-amber-500 border-amber-500";
      case "Organization":
        return "text-purple-500 border-purple-500";
      default:
        return "text-indigo-500 border-indigo-500";
    }
  };

  const typeColor = getTypeColor(data.type);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="
          fixed inset-0 z-[100]
          overflow-y-auto
          flex items-start md:items-center justify-center
          px-4 md:px-10 py-10
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
            w-full max-w-5xl
            max-h-[90vh]
            overflow-y-auto
            bg-white text-black
            dark:bg-[#050505] dark:text-white
            border border-black dark:border-white
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="
              group
              absolute top-4 right-4
              border border-black dark:border-white
              p-3
              hover:bg-indigo-500 hover:text-white
              transition
              "
            >
              <X
                size={18}
                strokeWidth={3}
                className="text-indigo-500 group-hover:text-white transition"
              />
            </button>

            {/* HEADER */}
            <div className="border-b border-black dark:border-white p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-mono text-xs uppercase opacity-60">
                  {data.period}
                </div>

                <span
                  className={`
                  border px-2 py-[2px]
                  text-[10px]
                  font-mono uppercase
                  ${typeColor}
                  `}
                >
                  {data.type}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                {data.role}
              </h2>

              <div className="mt-4 font-mono text-xs md:text-sm uppercase text-indigo-500">
                {data.company} — {data.location}
              </div>
            </div>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* OVERVIEW */}
              <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-black dark:border-white p-6 md:p-10">
                <h3 className="font-mono text-xs uppercase mb-4 text-indigo-500">
                  Overview
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {data.description}
                </p>
              </div>

              {/* SKILLS */}
              <div className="md:col-span-5 p-6 md:p-10">
                <h3 className="font-mono text-xs uppercase mb-4 text-indigo-500">
                  Skills
                </h3>

                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="
                      border border-black dark:border-white
                      px-3 py-1
                      font-mono text-xs uppercase
                      hover:border-indigo-500 hover:text-indigo-500
                      transition
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* RESPONSIBILITIES */}
              <div className="md:col-span-12 border-t border-black dark:border-white p-6 md:p-10 pb-16">
                <h3 className="font-mono text-xs uppercase mb-6 text-indigo-500">
                  Responsibilities
                </h3>

                <ul className="grid gap-4 md:grid-cols-2">
                  {data.details.map((item: string, i: number) => (
                    <li key={i} className="flex gap-3 items-start">
                      <ArrowRight
                        size={16}
                        className="mt-[2px] text-indigo-500"
                      />

                      <span className="text-sm md:text-base">{item}</span>
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
