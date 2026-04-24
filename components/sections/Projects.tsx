"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FolderGit2,
  ArrowUpRight,
  BookOpen,
  Ticket,
  ShoppingCart,
  Palette,
  Globe,
  Smartphone,
} from "lucide-react";
import { useProjectsAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

const getGoogleCategoryTheme = (category: string) => {
  if (["LMS Platform", "EdTech", "Web Application"].includes(category))
    return {
      bg: "bg-[#E8F0FE] dark:bg-[#1A73E8]/15",
      text: "text-[#1A73E8] dark:text-[#8AB4F8]",
      accent: "#1A73E8",
    };
  if (["E-Commerce", "Mobile Application"].includes(category))
    return {
      bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
      text: "text-[#137333] dark:text-[#81C995]",
      accent: "#34A853",
    };
  if (["Event Management"].includes(category))
    return {
      bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
      text: "text-[#B06000] dark:text-[#FDE293]",
      accent: "#FABB05",
    };
  return {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#C5221F] dark:text-[#F28B82]",
    accent: "#EA4335",
  };
};

const getProjectIcon = (category: string) => {
  if (["LMS Platform", "EdTech"].includes(category)) return BookOpen;
  if (category === "Event Management") return Ticket;
  if (category === "E-Commerce") return ShoppingCart;
  if (category === "Modern Portfolio") return Palette;
  if (category === "Mobile Application") return Smartphone;
  return Globe;
};

export default function Projects() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();
  const [isPaused, setIsPaused] = useState(false);

  useProjectsAnimation(container);

  const baseProjects = t.projects.list;
  const infiniteProjectsData = [
    ...baseProjects,
    ...baseProjects,
    ...baseProjects,
    ...baseProjects,
  ];

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = 32;
    const cardWidth =
      scrollRef.current.offsetWidth > 768
        ? 420
        : scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let animationFrameId: number;
    const scrollNode = scrollRef.current;
    const loop = () => {
      if (scrollNode && !isPaused) {
        scrollNode.scrollLeft += 1;
        if (scrollNode.scrollLeft >= scrollNode.scrollWidth / 2) {
          scrollNode.scrollLeft -= scrollNode.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section
      id="projects"
      ref={container}
      className="relative overflow-hidden px-0 py-24 md:py-32 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow — center top ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full z-0 opacity-15 dark:opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #1A73E8 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 w-full mx-auto flex flex-col gap-8 md:gap-12">
        {/* ── HEADER ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-3 md:gap-4 px-6 md:px-12 lg:px-20">
          <div className="project-animate inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-md shadow-sm w-fit">
            <FolderGit2
              size={14}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
              {t.projects.badge}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="project-animate flex items-end gap-4">
                <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
                  {t.projects.title}
                </h2>
                <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
                  <span className="w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
                  <div className="h-px w-16 bg-gradient-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
                </div>
              </div>
              <p className="project-animate text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] mt-3 leading-relaxed">
                {t.projects.subtitle}
              </p>
            </div>

            {/* Nav buttons */}
            <div className="project-animate hidden md:flex gap-2.5 shrink-0 pb-1">
              <button
                onClick={() => slide("left")}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group flex items-center justify-center w-11 h-11 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm hover:bg-[#E8F0FE] dark:hover:bg-[#1A73E8]/15 hover:border-[#1A73E8]/30 transition-all duration-200 active:scale-95"
                style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
              >
                <ArrowLeft
                  size={18}
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors"
                />
              </button>
              <button
                onClick={() => slide("right")}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group flex items-center justify-center w-11 h-11 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm hover:bg-[#E8F0FE] dark:hover:bg-[#1A73E8]/15 hover:border-[#1A73E8]/30 transition-all duration-200 active:scale-95"
                style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
              >
                <ArrowRight
                  size={18}
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors"
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── CAROUSEL ── */}
        <div className="relative w-full z-20">
          {/* fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-r from-white dark:from-[#202124] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-l from-white dark:from-[#202124] to-transparent" />

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex overflow-x-auto gap-5 sm:gap-6 py-8 px-6 md:px-20 touch-pan-x [&::-webkit-scrollbar]:hidden select-none"
          >
            {infiniteProjectsData.map((project, index) => {
              const theme = getGoogleCategoryTheme(project.category);
              const ProjectIcon = getProjectIcon(project.category);

              return (
                <div
                  key={`${project.id}-${index}`}
                  className="project-animate shrink-0 w-[85vw] sm:w-[360px] md:w-[400px] lg:w-[420px] z-10"
                >
                  <Link
                    href={`/projects/${project.id}`}
                    onClick={() => startLoading(800)}
                    className="group relative w-full h-full flex flex-col p-5 sm:p-6 cursor-pointer transition-all duration-300 rounded-[2rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 hover:-translate-y-2"
                    style={{
                      boxShadow:
                        "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
                    }}
                  >
                    {/* top accent line — colored by category */}
                    <span
                      aria-hidden
                      className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: theme.accent }}
                    />

                    {/* Thumbnail */}
                    <div
                      className="relative w-full aspect-[16/10] rounded-[1.25rem] overflow-hidden mb-5 bg-[#F8F9FA] dark:bg-[#202124]"
                      style={{ border: "1px solid rgba(218,220,224,0.5)" }}
                    >
                      {/* icon badge top-left */}
                      <div
                        className="absolute top-3 left-3 z-20 p-2.5 bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md rounded-xl border border-[#DADCE0]/60 dark:border-[#5F6368]/40"
                        style={{ boxShadow: "0 1px 4px rgba(60,64,67,.12)" }}
                      >
                        <ProjectIcon
                          className={`w-4 h-4 ${theme.text}`}
                          strokeWidth={2}
                        />
                      </div>

                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 85vw, 420px"
                      />

                      {/* arrow badge top-right on hover */}
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 border border-[#DADCE0]/60 dark:border-[#5F6368]/40">
                        <ArrowUpRight
                          size={16}
                          className="text-[#1A73E8] dark:text-[#8AB4F8]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col flex-1">
                      {/* category + id row */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase ${theme.bg} ${theme.text}`}
                        >
                          {project.category}
                        </span>
                        <span className="text-[11px] font-semibold text-[#9AA0A6] dark:text-[#5F6368]">
                          {project.id}
                        </span>
                      </div>

                      <h3 className="font-bold text-xl leading-snug mb-2.5 text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#5F6368] dark:text-[#9AA0A6] line-clamp-2 mb-5 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Divider */}
                      <div className="flex gap-1 mb-4">
                        {[theme.accent, "#transparent"].map((c, i) => (
                          <div
                            key={i}
                            className={`h-[2px] rounded-full ${i === 0 ? "w-6" : "flex-1 bg-[#F1F3F4] dark:bg-[#3C4043]"}`}
                            style={i === 0 ? { background: c } : {}}
                          />
                        ))}
                      </div>

                      {/* Tech chips */}
                      <div className="mt-auto flex items-center gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-0.5">
                        {project.tech.map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="shrink-0 px-3 py-1 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 text-[11px] font-semibold text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
