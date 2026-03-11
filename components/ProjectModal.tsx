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

export default function ProjectModal({ isOpen, onClose, project }: any) {
  if (!project) return null;

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

  const getWatermarkIcon = (category: string) => {
    const className =
      "absolute -bottom-10 -right-10 w-64 h-64 text-zinc-900/[0.03] dark:text-white/[0.02] -rotate-12 pointer-events-none z-0 transition-colors duration-500";
    switch (category) {
      case "LMS Platform":
      case "EdTech":
        return <MonitorSmartphone className={className} />;
      case "E-Commerce":
        return <ShoppingCart className={className} />;
      case "Event Management":
        return <CalendarDays className={className} />;
      case "Modern Portfolio":
        return <Palette className={className} />;
      case "Mobile Application":
        return <Smartphone className={className} />;
      default:
        return <Globe className={className} />;
    }
  };

  const categoryStyle = getCategoryStyle(project.category);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto flex items-start md:items-center justify-center px-4 md:p-6 py-10">
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
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="
              absolute top-6 right-6 md:top-8 md:right-8
              z-50
              flex items-center justify-center
              w-12 h-12 rounded-full
              bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md
              text-zinc-500 dark:text-zinc-400
              hover:bg-indigo-600 dark:hover:bg-indigo-500
              hover:text-white dark:hover:text-white
              border border-zinc-200 dark:border-zinc-700
              transition-all duration-300 shadow-lg
              "
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* HEADER IMAGE SECTION */}
            <div className="relative border-b border-zinc-200/80 dark:border-zinc-800/80 group transition-colors duration-500">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/8] bg-zinc-100 dark:bg-zinc-900 overflow-hidden transition-colors duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* FIGURE BADGE */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 font-mono text-[10px] md:text-xs uppercase font-black tracking-[0.2em] border border-white/20 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-xl">
                FIG. {project.id}
              </div>
            </div>

            {/* TITLE BOX */}
            <div className="relative overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80 p-8 md:p-12 bg-gradient-to-br from-[#fafafa] to-white dark:from-[#0a0a0a] dark:to-[#121212] transition-colors duration-500">
              {getWatermarkIcon(project.category)}

              <div className="relative z-10">
                <div
                  className={`w-fit px-4 py-1.5 rounded-full font-mono text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 shadow-sm transition-colors duration-500 ${categoryStyle}`}
                >
                  {project.category}
                </div>

                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-white mb-6 transition-colors duration-500">
                  {project.title}
                </h2>

                <p className="text-base md:text-xl font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-4xl transition-colors duration-500">
                  {project.description}
                </p>
              </div>
            </div>

            {/* CONTENT GRID */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 bg-white dark:bg-[#121212] transition-colors duration-500">
              {/* TECH STACK */}
              <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-zinc-200/80 dark:border-zinc-800/80 p-8 md:p-12 bg-zinc-50/50 dark:bg-zinc-900/40 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-8 text-zinc-400 dark:text-zinc-600 transition-colors duration-500">
                  <div className="w-8 h-[2px] bg-current rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">
                    Core Technology
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
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
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div className="md:col-span-7 p-8 md:p-12 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-8 text-zinc-400 dark:text-zinc-600 transition-colors duration-500">
                  <div className="w-8 h-[2px] bg-current rounded-full"></div>
                  <h3 className="font-mono text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">
                    Key Functionalities
                  </h3>
                </div>

                <div className="grid gap-5">
                  {project.features.map((f: string, i: number) => (
                    <div key={i} className="group flex gap-5 items-start">
                      <div className="bg-indigo-50 dark:bg-indigo-500/10 p-2 rounded-lg shrink-0 transition-colors group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500">
                        <ArrowRight
                          size={14}
                          className="text-indigo-600 dark:text-indigo-400 group-hover:text-white"
                          strokeWidth={4}
                        />
                      </div>
                      <span className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="md:col-span-12 border-t border-zinc-200/80 dark:border-zinc-800/80 p-8 md:p-12 bg-zinc-50/30 dark:bg-[#0c0c0c] transition-colors duration-500">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  flex items-center justify-between
                  w-full md:w-fit md:min-w-[280px]
                  bg-zinc-900 dark:bg-indigo-600
                  text-white
                  rounded-[1.5rem] px-8 py-5
                  font-bold uppercase tracking-widest text-sm md:text-base
                  hover:bg-indigo-600 dark:hover:bg-indigo-500
                  shadow-xl shadow-zinc-900/10 dark:shadow-indigo-500/20
                  transition-all duration-300 hover:-translate-y-1
                  "
                >
                  <div className="flex items-center gap-3">
                    <Sparkles size={20} className="hidden md:block" />
                    <span>View Repository</span>
                  </div>
                  <div className="bg-white/20 dark:bg-black/10 p-2.5 rounded-full group-hover:rotate-45 transition-transform duration-500">
                    <ExternalLink size={20} />
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
