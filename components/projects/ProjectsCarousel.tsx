"use client";

import { RefObject } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectData } from "@/types";

interface ProjectsCarouselProps {
  scrollRef: RefObject<HTMLDivElement | null>;
  list: ProjectData[];
  setIsPaused: (v: boolean) => void;
  onCardClick: () => void;
}

export function ProjectsCarousel({
  scrollRef,
  list,
  setIsPaused,
  onCardClick,
}: ProjectsCarouselProps) {
  return (
    <div className="relative w-full z-20">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-linear-to-r from-[#F8F9FA] dark:from-[#1c1c1e] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-linear-to-l from-[#F8F9FA] dark:from-[#1c1c1e] to-transparent" />

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex overflow-x-auto gap-5 sm:gap-6 py-8 px-6 md:px-20 touch-pan-x [&::-webkit-scrollbar]:hidden select-none"
      >
        {list.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${index}`}
            project={project}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}
