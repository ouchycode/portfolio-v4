"use client";

import { X, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProjectModal({ isOpen, onClose, project }: any) {
  if (!project) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic System":
        return "text-indigo-500 border-indigo-500";
      case "E-Sports Tech":
        return "text-pink-500 border-pink-500";
      case "Journal & SEO":
        return "text-amber-500 border-amber-500";
      case "AI / ML":
        return "text-purple-500 border-purple-500";
      case "Web App":
        return "text-cyan-500 border-cyan-500";
      default:
        return "text-indigo-500 border-indigo-500";
    }
  };

  const categoryColor = getCategoryColor(project.category);

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
              z-50
              flex items-center justify-center
              w-10 h-10
              border border-black dark:border-white
              bg-white dark:bg-black
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

            {/* HEADER IMAGE */}
            <div className="border-b border-black dark:border-white relative">
              <div className="relative w-full aspect-[16/9] bg-zinc-200 dark:bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition duration-700"
                />
              </div>

              <div
                className={`
                absolute top-6 left-6
                font-mono text-xs uppercase
                border px-3 py-1
                bg-white dark:bg-black
                ${categoryColor}
                `}
              >
                FIG. {project.id}
              </div>
            </div>

            {/* HEADER BOX */}
            <div className="border-b border-black dark:border-white p-6 md:p-10">
              <div
                className={`
                font-mono text-xs uppercase mb-4
                ${categoryColor.split(" ")[0]}
                `}
              >
                {project.category}
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                {project.title}
              </h2>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                {project.description}
              </p>
            </div>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* TECH STACK */}
              <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-black dark:border-white p-6 md:p-10">
                <h3 className="font-mono text-xs uppercase mb-4 text-indigo-500">
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="
                      border border-black dark:border-white
                      px-3 py-1
                      font-mono text-xs uppercase
                      hover:border-indigo-500 hover:text-indigo-500
                      transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div className="md:col-span-7 p-6 md:p-10">
                <h3 className="font-mono text-xs uppercase mb-4 text-indigo-500">
                  Key Features
                </h3>

                <ul className="space-y-3">
                  {project.features.map((f: string, i: number) => (
                    <li key={i} className="flex gap-3 items-start">
                      <ArrowRight
                        size={16}
                        className="mt-[2px] text-indigo-500"
                      />

                      <span className="text-sm md:text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* REPOSITORY */}
              <div className="md:col-span-12 border-t border-black dark:border-white p-6 md:p-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  flex items-center justify-center gap-2
                  border border-black dark:border-white
                  py-4
                  font-bold uppercase
                  hover:bg-indigo-500 hover:text-white
                  transition
                  "
                >
                  View Repository
                  <ExternalLink
                    size={18}
                    className="text-indigo-500 group-hover:text-white transition"
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
