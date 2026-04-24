"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Cpu,
  BadgeCheck,
} from "lucide-react";
import { useTechCertsAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

const techStack = [
  {
    name: "HTML5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Dart",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "GSAP",
    image: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },
  {
    name: "Flutter",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PHP",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Firebase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Vercel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  {
    name: "MikroTik",
    image: "https://cdn.worldvectorlogo.com/logos/mikrotik.svg",
  },
];

// Group tech stack by category for structured display
const techGroups = [
  {
    label: "Languages",
    color: "#1A73E8",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Dart", "PHP"],
  },
  {
    label: "Frameworks",
    color: "#34A853",
    items: ["React", "Next.js", "Tailwind", "Flutter", "Laravel", "GSAP"],
  },
  {
    label: "Backend & DB",
    color: "#EA4335",
    items: ["Node.js", "MySQL", "Firebase"],
  },
  {
    label: "Tools",
    color: "#FABB05",
    items: ["Git", "Figma", "Vercel", "MikroTik"],
  },
];

export default function TechAndCerts() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();
  const certificates = t.tech.certs;
  const [isPaused, setIsPaused] = useState(false);

  useTechCertsAnimation(container);

  const infiniteCertsData = [
    ...certificates,
    ...certificates,
    ...certificates,
    ...certificates,
  ];

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = window.innerWidth > 768 ? 24 : 20;
    const cardWidth = window.innerWidth > 768 ? 400 : window.innerWidth * 0.85;
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
      id="tech"
      ref={container}
      className="relative overflow-visible md:overflow-hidden px-0 py-24 md:py-32 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
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

      {/* ── Ambient glow — top right ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-0 w-[500px] h-[500px] rounded-full z-0 opacity-20 dark:opacity-10"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #FABB05 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 w-full mx-auto flex flex-col gap-24 md:gap-32">
        {/* ═══════════════════════════════════════
            TECH STACK
        ═══════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 md:gap-10 px-6 md:px-12 lg:px-20">
          {/* Header */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="tech-header inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-md shadow-sm w-fit">
              <Cpu size={14} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
              <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
                {t.tech.badgeStack}
              </span>
            </div>

            <div className="tech-header flex items-end gap-4">
              <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
                {t.tech.titleStack}
              </h2>
              <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
                <span className="w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
                <div className="h-px flex-1 bg-gradient-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
              </div>
            </div>

            <p className="tech-header text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-2xl leading-relaxed">
              {t.tech.subtitleStack}
            </p>
          </div>

          {/* Tech stack card — grouped by category */}
          <div
            className="tech-header w-full rounded-[2rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 p-8 sm:p-10 transition-all duration-300"
            style={{
              boxShadow:
                "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
            }}
          >
            <div className="flex flex-col gap-8">
              {techGroups.map((group) => {
                const groupItems = techStack.filter((t) =>
                  group.items.includes(t.name),
                );
                return (
                  <div key={group.label} className="flex flex-col gap-3">
                    {/* Group label with color dot */}
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: group.color }}
                      />
                      <span
                        className="text-[11px] font-bold tracking-[0.12em] uppercase"
                        style={{ color: group.color, opacity: 0.85 }}
                      >
                        {group.label}
                      </span>
                      <div
                        className="h-px flex-1"
                        style={{ background: `${group.color}20` }}
                      />
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2.5">
                      {groupItems.map((tech) => (
                        <div
                          key={tech.name}
                          className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/60 dark:bg-[#202124]/40 hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                        >
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                          />
                          <span className="text-sm font-semibold text-[#3C4043] dark:text-[#E8EAED]">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom G-color bar */}
            <div className="flex gap-1 mt-8 pt-6 border-t border-[#F1F3F4] dark:border-[#5F6368]/30">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-60"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            CERTIFICATES
        ═══════════════════════════════════════ */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          {/* Header */}
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-3 md:gap-4 px-6 md:px-12 lg:px-20">
            <div className="cert-header inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-md shadow-sm w-fit">
              <Award size={14} className="text-[#34A853] dark:text-[#81C995]" />
              <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
                {t.tech.badgeCert}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="cert-header flex items-end gap-4">
                  <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
                    {t.tech.titleCert}
                  </h2>
                  <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
                    <span className="w-2 h-2 rounded-full bg-[#34A853] dark:bg-[#81C995] shrink-0" />
                    <div className="h-px w-16 bg-gradient-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
                  </div>
                </div>
                <p className="cert-header text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] mt-3 leading-relaxed">
                  {t.tech.subtitleCert}
                </p>
              </div>

              {/* Nav buttons */}
              <div className="cert-header hidden md:flex gap-2.5 shrink-0 pb-1">
                <button
                  onClick={() => slide("left")}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="group flex items-center justify-center w-11 h-11 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm hover:bg-[#E6F4EA] dark:hover:bg-[#34A853]/15 hover:border-[#34A853]/30 transition-all duration-200 active:scale-95"
                  style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
                >
                  <ArrowLeft
                    size={18}
                    className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors"
                  />
                </button>
                <button
                  onClick={() => slide("right")}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="group flex items-center justify-center w-11 h-11 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm hover:bg-[#E6F4EA] dark:hover:bg-[#34A853]/15 hover:border-[#34A853]/30 transition-all duration-200 active:scale-95"
                  style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
                >
                  <ArrowRight
                    size={18}
                    className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel */}
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
              {infiniteCertsData.map((cert: any, index: number) => (
                <div
                  key={`${cert.id}-${index}`}
                  className="cert-card shrink-0 w-[85vw] sm:w-[340px] md:w-[380px] lg:w-[400px] z-10"
                >
                  <Link
                    href={`/certificate/${cert.id}`}
                    onClick={() => startLoading(800)}
                    className="group relative w-full h-full flex flex-col p-5 sm:p-6 cursor-pointer transition-all duration-300 rounded-[2rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 hover:-translate-y-2"
                    style={{
                      boxShadow:
                        "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
                    }}
                  >
                    {/* top accent line */}
                    <span
                      aria-hidden
                      className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#34A853]"
                    />

                    {/* Thumbnail */}
                    <div
                      className="relative w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden mb-5 bg-[#F8F9FA] dark:bg-[#202124]"
                      style={{ border: "1px solid rgba(218,220,224,0.5)" }}
                    >
                      {/* badge top-left */}
                      <div
                        className="absolute top-3 left-3 z-20 p-2.5 bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md rounded-xl border border-[#DADCE0]/60 dark:border-[#5F6368]/40"
                        style={{ boxShadow: "0 1px 4px rgba(60,64,67,.12)" }}
                      >
                        <BadgeCheck
                          className="w-4 h-4 text-[#34A853] dark:text-[#81C995]"
                          strokeWidth={2}
                        />
                      </div>

                      <iframe
                        src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full pointer-events-none opacity-90 group-hover:opacity-100 transition-all duration-500 bg-white"
                        title={cert.title}
                      />
                      <div className="absolute inset-0 bg-transparent" />

                      {/* arrow top-right on hover */}
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 border border-[#DADCE0]/60 dark:border-[#5F6368]/40">
                        <ArrowUpRight
                          size={16}
                          className="text-[#34A853] dark:text-[#81C995]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-3.5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995] text-[11px] font-bold tracking-[0.08em] uppercase">
                          {cert.year}
                        </span>
                        <span className="text-[11px] font-semibold text-[#9AA0A6] dark:text-[#5F6368]">
                          FIG {cert.id}
                        </span>
                      </div>

                      <h3 className="font-bold text-xl leading-snug text-[#202124] dark:text-[#E8EAED] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors duration-300 line-clamp-2 mb-3">
                        {cert.title}
                      </h3>

                      {/* Divider */}
                      <div className="flex gap-1 mb-4">
                        <div className="h-[2px] w-6 rounded-full bg-[#34A853] opacity-70" />
                        <div className="h-[2px] flex-1 rounded-full bg-[#F1F3F4] dark:bg-[#3C4043]" />
                      </div>

                      <div className="mt-auto">
                        <p className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] truncate">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
