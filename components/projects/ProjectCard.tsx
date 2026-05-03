"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  getProjectTheme,
  getProjectIcon,
} from "../../data/projects/getProjectTheme";

interface ProjectCardProps {
  project: any;
  index: number;
  onCardClick: () => void;
}

export function ProjectCard({ project, index, onCardClick }: ProjectCardProps) {
  const theme = getProjectTheme(project.category);
  const ProjectIcon = getProjectIcon(project.category);

  return (
    <div className="project-animate shrink-0 w-[85vw] sm:w-90 md:w-100 lg:w-105">
      <Link
        href={`/projects/${project.id}`}
        onClick={onCardClick}
        className="group relative w-full h-full flex flex-col p-5 sm:p-6 cursor-pointer rounded-0.5 bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 hover:-translate-y-1 transition-transform duration-200"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
        }}
      >
        {/* Top accent line */}
        <span
          aria-hidden
          className="absolute top-0 left-8 right-8 h-0.5 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: theme.accent }}
        />

        {/* Thumbnail */}
        <div
          className="relative w-full aspect-16/10 rounded-[1.25rem] overflow-hidden mb-5 bg-[#F8F9FA] dark:bg-[#202124]"
          style={{ border: "1px solid rgba(218,220,224,0.5)" }}
        >
          {/* Icon badge */}
          <div className="absolute top-3 left-3 z-20 p-2.5 bg-white dark:bg-[#303134] rounded-xl border border-[#DADCE0]/60 dark:border-[#5F6368]/40">
            <ProjectIcon className={`w-4 h-4 ${theme.text}`} strokeWidth={2} />
          </div>

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 85vw, 420px"
          />

          {/* Arrow badge on hover */}
          <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white dark:bg-[#303134] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200 border border-[#DADCE0]/60 dark:border-[#5F6368]/40">
            <ArrowUpRight
              size={16}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
              strokeWidth={2.5}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase ${theme.bg} ${theme.text}`}
            >
              {project.category}
            </span>
            <span className="text-[11px] font-semibold text-[#9AA0A6] dark:text-[#5F6368]">
              {project.id}
            </span>
          </div>

          <h3 className="font-bold text-lg md:text-xl leading-snug mb-2 text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-[#5F6368] dark:text-[#9AA0A6] line-clamp-2 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Divider */}
          <div className="flex gap-1 mb-4">
            <div
              className="h-0.5 w-6 rounded-full"
              style={{ background: theme.accent }}
            />
            <div className="h-0.5 flex-1 rounded-full bg-[#F1F3F4] dark:bg-[#3C4043]" />
          </div>

          {/* Tech chips */}
          <div className="mt-auto flex items-center gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-0.5">
            {project.tech.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="shrink-0 px-3 py-1 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 text-[11px] font-semibold text-[#5F6368] dark:text-[#9AA0A6]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
