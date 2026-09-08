"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  getProjectTheme,
  getProjectIcon,
} from "../../data/projects/getProjectTheme";
import { ProjectData } from "@/types";

interface ProjectCardProps {
  project: ProjectData;
  onCardClick: () => void;
}

export function ProjectCard({ project, onCardClick }: ProjectCardProps) {
  const theme = getProjectTheme(project.category);
  const Icon = getProjectIcon(project.category);

  return (
    <div data-vt="pop" className="project-animate shrink-0 w-[85vw] sm:w-90 md:w-100 lg:w-105">
      <Link
        href={`/projects/${project.id}`}
        onClick={onCardClick}
        className="group rv-window relative w-full h-full flex flex-col cursor-pointer"
      >
        {/* Top accent line */}
        <span
          aria-hidden
          className="absolute top-0 left-8 right-8 h-0.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: theme.accent }}
        />

        {/* Window titlebar */}
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none truncate">
            {project.title}
          </span>
          <span className="flex items-center gap-1.5 ml-auto select-none">
            <span className="rv-pixel text-[9px] uppercase tracking-wider text-white/70 hidden sm:inline">
              {project.id}
            </span>
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        <div className="rv-panel flex-1 flex flex-col p-4 sm:p-5">
          {/* Screenshot area */}
          <div className="rv-sunken relative w-full aspect-16/10 overflow-hidden mb-4 bg-vtcard">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 768px) 85vw, 420px"
            />
            {/* Scanline overlay */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none mix-blend-multiply dark:mix-blend-screen"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent 0 2px, rgba(8,8,13,0.16) 2px 3px)",
              }}
            />

            {/* Icon badge */}
            <div className="absolute top-2.5 left-2.5 z-20 rv-chip rv-pixel bg-paper/95 p-1.5 text-[10px]">
              {/* eslint-disable-next-line */}
              <Icon className={`w-4 h-4 ${theme.text}`} strokeWidth={2.2} />
            </div>

            {/* Arrow badge on hover */}
            <div className="absolute top-2.5 right-2.5 z-20 rv-raised bg-chrome opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 grid place-items-center w-8 h-8 text-ink group-hover:bg-vtblue group-hover:text-white">
              <ArrowUpRight size={15} strokeWidth={2.6} />
            </div>

            {/* Category chip */}
            <div className="absolute bottom-2 left-2 z-20 rv-chip rv-pixel bg-paper/95 px-2 py-0.5 text-[9px] uppercase tracking-wider flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5"
                style={{ background: theme.accent }}
              />
              {project.category}
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col flex-1">
            <h3
              className="font-bold text-lg md:text-xl leading-snug mb-2 text-ink group-hover:text-vtblue transition-colors"
              style={{ fontFamily: "var(--vt-font-display)" }}
            >
              {project.title}
            </h3>

            <p className="text-sm text-ink-soft line-clamp-2 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Divider */}
            <div className="flex gap-1 mb-4">
              <div
                className="h-0.5 w-6 rv-sunken"
                style={{ background: theme.accent }}
              />
              <div className="h-0.5 flex-1 rv-sunken" />
            </div>

            {/* Tech chips */}
            <div className="mt-auto flex items-center gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-0.5">
              {project.tech.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="shrink-0 rv-chip rv-pixel px-2.5 py-1 text-[10px] uppercase tracking-wide text-ink bg-vtcard"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}