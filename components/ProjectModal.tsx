"use client";

import { X, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProjectModal({ isOpen, onClose, project }: any) {
  if (!project) return null;

  // Diperbarui ke gaya Clean UI (Background soft + Text bold + Border tipis)
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "Academic System":
      case "LMS Platform":
      case "EdTech":
        return "bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20";
      case "E-Sports Tech":
      case "Event Management":
        return "bg-pink-50 text-pink-600 border border-pink-100 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/20";
      case "Journal & SEO":
        return "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";
      case "Web Application":
      case "Mobile Application":
      case "Web App":
        return "bg-cyan-50 text-cyan-600 border border-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20";
      default:
        return "bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700/50";
    }
  };

  const categoryStyle = getCategoryStyle(project.category);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="
          fixed inset-0 z-[100]
          overflow-y-auto
          flex items-start md:items-center justify-center
          px-4 md:p-6 py-10
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
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="
            relative z-10
            w-full max-w-4xl
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
              bg-white/80 dark:bg-black/50 backdrop-blur-md
              text-zinc-600 dark:text-zinc-300
              border border-zinc-200 dark:border-zinc-700
              hover:bg-zinc-100 dark:hover:bg-zinc-800
              hover:text-zinc-900 dark:hover:text-white
              transition-colors duration-300
              "
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* HEADER IMAGE SECTION */}
            <div className="relative border-b border-zinc-200/80 dark:border-zinc-800/80">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay gradient at the top for badge readability */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
              </div>

              {/* FIGURE BADGE */}
              <div
                className="
                absolute top-6 left-6 md:top-8 md:left-8
                font-mono text-[10px] md:text-xs uppercase font-bold tracking-widest
                border border-white/20 dark:border-white/10
                bg-white/90 dark:bg-black/70 backdrop-blur-md
                text-zinc-900 dark:text-white
                px-4 py-1.5 rounded-full shadow-sm
                "
              >
                FIG. {project.id}
              </div>
            </div>

            {/* TITLE BOX */}
            <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-10 bg-[#fafafa] dark:bg-[#0a0a0a]">
              <div
                className={`
                w-fit px-3 py-1.5 rounded-xl
                font-mono text-[10px] md:text-xs uppercase font-bold tracking-widest mb-5
                ${categoryStyle}
                `}
              >
                {project.category}
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-zinc-900 dark:text-white">
                {project.title}
              </h2>

              <p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* TECH STACK */}
              <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-10 bg-zinc-50/50 dark:bg-zinc-900/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">
                    Tech Stack
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
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
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div className="md:col-span-7 p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">
                    Key Features
                  </h3>
                </div>

                <ul className="space-y-4">
                  {project.features.map((f: string, i: number) => (
                    <li key={i} className="group flex gap-4 items-start">
                      <div className="bg-indigo-50 dark:bg-indigo-500/10 p-1.5 rounded-md shrink-0 mt-0.5 transition-colors group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20">
                        <ArrowRight
                          size={14}
                          className="text-indigo-600 dark:text-indigo-400"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* REPOSITORY BUTTON */}
              <div className="md:col-span-12 border-t border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  flex items-center justify-center gap-3
                  w-full md:w-auto
                  bg-indigo-600 dark:bg-indigo-500
                  text-white
                  rounded-2xl px-8 py-5
                  font-bold uppercase tracking-wider text-sm md:text-base
                  hover:bg-zinc-900 dark:hover:bg-white
                  hover:text-white dark:hover:text-black
                  shadow-md hover:shadow-xl hover:shadow-zinc-900/20 dark:hover:shadow-white/20
                  transition-all duration-300 hover:-translate-y-1
                  "
                >
                  View Repository
                  <div className="bg-white/20 dark:bg-black/10 p-2 rounded-full group-hover:bg-white/20 dark:group-hover:bg-black/10 transition-colors duration-300">
                    <ExternalLink
                      size={18}
                      className="group-hover:scale-110 transition-transform duration-300"
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
