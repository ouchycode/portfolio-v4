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
        return "bg-blue-300 dark:bg-blue-600 text-blue-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7]";
      case "E-Sports Tech":
      case "Event Management":
        return "bg-pink-300 dark:bg-pink-600 text-pink-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7]";
      case "Journal & SEO":
        return "bg-orange-300 dark:bg-orange-600 text-orange-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7]";
      case "Web Application":
      case "Mobile Application":
      case "Web App":
        return "bg-cyan-300 dark:bg-cyan-600 text-cyan-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7]";
      default:
        return "bg-zinc-300 dark:bg-zinc-600 text-zinc-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7]";
    }
  };

  const getWatermarkIcon = (category: string) => {
    const className =
      "absolute -bottom-10 -right-10 w-64 h-64 text-zinc-900/[0.04] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0 transition-colors duration-500";
    switch (category) {
      case "LMS Platform":
      case "EdTech":
        return <MonitorSmartphone className={className} strokeWidth={2} />;
      case "E-Commerce":
        return <ShoppingCart className={className} strokeWidth={2} />;
      case "Event Management":
        return <CalendarDays className={className} strokeWidth={2} />;
      case "Modern Portfolio":
        return <Palette className={className} strokeWidth={2} />;
      case "Mobile Application":
        return <Smartphone className={className} strokeWidth={2} />;
      default:
        return <Globe className={className} strokeWidth={2} />;
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
            className="fixed inset-0 bg-zinc-900/80 dark:bg-black/90 cursor-pointer transition-colors duration-500"
          />

          {/* MODAL CONTAINER - Neo Brutalist */}
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

            {/* HEADER IMAGE SECTION */}
            <div className="relative border-b-2 md:border-b-4 border-zinc-900 dark:border-zinc-100 group transition-colors duration-500">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/8] bg-zinc-200 dark:bg-zinc-800 overflow-hidden transition-colors duration-500">
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
              <div className="absolute top-4 left-4 md:top-6 md:left-6 font-pixel text-[8px] md:text-[10px] uppercase font-bold tracking-widest border-2 border-zinc-900 dark:border-zinc-100 bg-yellow-300 dark:bg-yellow-600 text-zinc-900 dark:text-white px-4 py-2 rounded-sm shadow-[3px_3px_0_0_#18181b] dark:shadow-[3px_3px_0_0_#000]">
                FIG. {project.id}
              </div>
            </div>

            {/* TITLE BOX */}
            <div className="relative overflow-hidden border-b-2 md:border-b-4 border-zinc-900 dark:border-zinc-100 p-8 md:p-12 bg-zinc-100 dark:bg-zinc-800 transition-colors duration-500">
              {getWatermarkIcon(project.category)}

              <div className="relative z-10">
                <div
                  className={`w-fit px-3 py-1.5 rounded-sm font-pixel text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-6 transition-colors duration-500 ${categoryStyle}`}
                >
                  {project.category}
                </div>

                <h2 className="font-pixel text-3xl md:text-5xl font-black uppercase tracking-widest leading-none text-zinc-900 dark:text-white mb-6 transition-colors duration-500 drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46]">
                  {project.title}
                </h2>

                {/* Font mono untuk deskripsi agar kesan retro/teknikalnya dapet */}
                <p className="font-mono text-sm md:text-base font-bold leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-4xl transition-colors duration-500">
                  {project.description}
                </p>
              </div>
            </div>

            {/* CONTENT GRID */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 bg-[#fafafa] dark:bg-zinc-900 transition-colors duration-500">
              {/* TECH STACK */}
              <div className="md:col-span-5 border-b-2 md:border-b-0 md:border-r-2 md:border-r-4 border-zinc-900 dark:border-zinc-100 p-8 md:p-12 bg-white dark:bg-zinc-800/50 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-8 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
                  <div className="w-8 h-[4px] bg-zinc-900 dark:bg-zinc-100 rounded-sm"></div>
                  <h3 className="font-pixel text-[10px] md:text-xs uppercase font-bold tracking-widest">
                    CORE TECHNOLOGY
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="
                      bg-white dark:bg-zinc-800
                      border-2 border-zinc-900 dark:border-zinc-100
                      text-zinc-900 dark:text-zinc-100
                      px-3 py-2 rounded-sm
                      font-pixel text-[8px] md:text-[10px] uppercase font-bold tracking-widest
                      shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7]
                      transition-all duration-300
                      hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#18181b] dark:hover:shadow-[3px_3px_0_0_#e4e4e7]
                      hover:bg-indigo-300 dark:hover:bg-indigo-600 hover:text-indigo-950 dark:hover:text-white
                      cursor-default
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div className="md:col-span-7 p-8 md:p-12 transition-colors duration-500 bg-white dark:bg-zinc-800/20">
                <div className="flex items-center gap-3 mb-8 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
                  <div className="w-8 h-[4px] bg-zinc-900 dark:bg-zinc-100 rounded-sm"></div>
                  <h3 className="font-pixel text-[10px] md:text-xs uppercase font-bold tracking-widest">
                    KEY FUNCTIONALITIES
                  </h3>
                </div>

                <div className="grid gap-5">
                  {project.features.map((f: string, i: number) => (
                    <div key={i} className="group flex gap-4 items-start">
                      <div className="bg-indigo-500 border-2 border-zinc-900 dark:border-zinc-100 p-1 rounded-sm shrink-0 mt-1 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-transform duration-300 group-hover:scale-110">
                        <ArrowRight
                          size={14}
                          className="text-white dark:text-zinc-900"
                          strokeWidth={4}
                        />
                      </div>
                      <span className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-bold leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="md:col-span-12 border-t-2 md:border-t-4 border-zinc-900 dark:border-zinc-100 p-8 md:p-12 bg-zinc-100 dark:bg-[#121212] transition-colors duration-500">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  flex items-center justify-between
                  w-full md:w-fit md:min-w-[320px]
                  bg-indigo-600 dark:bg-indigo-600
                  text-white
                  border-2 border-zinc-900 dark:border-zinc-100
                  rounded-sm px-8 py-5
                  shadow-[5px_5px_0_0_#18181b] dark:shadow-[5px_5px_0_0_#e4e4e7]
                  hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#18181b] dark:hover:shadow-[6px_6px_0_0_#e4e4e7]
                  active:translate-y-1 active:translate-x-1 active:shadow-none
                  transition-all duration-200
                  "
                >
                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={20}
                      strokeWidth={2.5}
                      className="hidden md:block"
                    />
                    <span className="font-pixel text-[10px] md:text-sm font-bold uppercase tracking-widest">
                      View Repository
                    </span>
                  </div>
                  <div className="bg-white border-2 border-zinc-900 p-2 rounded-sm text-zinc-900 group-hover:bg-yellow-300 transition-colors duration-200">
                    <ExternalLink
                      size={20}
                      strokeWidth={3}
                      className="group-hover:rotate-45 transition-transform duration-300"
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
