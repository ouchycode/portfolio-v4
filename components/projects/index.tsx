"use client";

import { useRef, useState, useEffect } from "react";
import { useProjectsAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectsCarousel } from "./ProjectsCarousel";

export default function Projects() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();
  const [isPaused, setIsPaused] = useState(false);

  useProjectsAnimation(container);

  const infiniteList = [
    ...t.projects.list,
    ...t.projects.list,
    ...t.projects.list,
    ...t.projects.list,
  ];

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = 24;
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
    let rafId: number;
    const node = scrollRef.current;
    const loop = () => {
      if (node && !isPaused) {
        node.scrollLeft += 1;
        if (node.scrollLeft >= node.scrollWidth / 2) {
          node.scrollLeft -= node.scrollWidth / 2;
        }
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <section
      id="projects"
      ref={container}
      className="relative overflow-hidden px-0 py-24 md:py-32"
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 w-full flex flex-col gap-8 md:gap-12">
        <ProjectsHeader
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          onSlide={slide}
          onNavEnter={() => setIsPaused(true)}
          onNavLeave={() => setIsPaused(false)}
        />
        <ProjectsCarousel
          scrollRef={scrollRef}
          list={infiniteList}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          onCardClick={() => startLoading(800)}
        />
      </div>
    </section>
  );
}
