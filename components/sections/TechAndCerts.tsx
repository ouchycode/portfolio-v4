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

export default function TechAndCerts() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();
  const certificates = t.tech.certs;
  const [isPaused, setIsPaused] = useState(false);

  useTechCertsAnimation(container);

  // Gandakan data sertifikat untuk efek infinite marquee
  const infiniteCertsData = [
    ...certificates,
    ...certificates,
    ...certificates,
    ...certificates,
  ];

  // Navigasi manual untuk tombol (opsional)
  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = window.innerWidth > 768 ? 32 : 24;
    const cardWidth = window.innerWidth > 768 ? 380 : window.innerWidth * 0.85;

    if (direction === "right") {
      scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  // Logic "Running Text" (Marquee)
  useEffect(() => {
    let animationFrameId: number;
    const scrollNode = scrollRef.current;

    const loop = () => {
      if (scrollNode && !isPaused) {
        // Geser 1px per frame
        scrollNode.scrollLeft += 1;

        // Reset mulus saat mencapai setengah total scroll
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
      <div className="relative z-10 w-full mx-auto flex flex-col gap-24 md:gap-32">
        {/* ================= SECTION: TECH STACK ================= */}
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 md:gap-12 px-6 md:px-12 lg:px-20">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="tech-header inline-flex items-center gap-2 px-4 py-1.5 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm w-fit hover:shadow-md transition-shadow">
              <Cpu size={16} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
              <span className="text-sm font-medium tracking-wide text-[#5F6368] dark:text-[#9AA0A6]">
                {t.tech.badgeStack}
              </span>
            </div>
            <div>
              <h2 className="tech-header font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-tight">
                {t.tech.titleStack}
              </h2>
              <p className="tech-header text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-2xl mt-3 md:mt-4 leading-relaxed">
                {t.tech.subtitleStack}
              </p>
            </div>
          </div>

          <div className="tech-header w-full rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-md p-8 sm:p-10 md:p-12 transition-all duration-300">
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2.5 px-4 py-2 sm:py-2.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/50 dark:bg-[#303134]/50 hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-sm"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-sm font-semibold text-[#3C4043] dark:text-[#E8EAED] transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SECTION: CERTIFICATES ================= */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          {/* HEADER CERTIFICATES */}
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-3 md:gap-4 px-6 md:px-12 lg:px-20">
            <div className="cert-header inline-flex items-center gap-2 px-4 py-1.5 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm w-fit hover:shadow-md transition-shadow">
              <Award size={16} className="text-[#34A853] dark:text-[#81C995]" />
              <span className="text-sm font-medium tracking-wide text-[#5F6368] dark:text-[#9AA0A6]">
                {t.tech.badgeCert}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="cert-header font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-tight">
                  {t.tech.titleCert}
                </h2>
                <p className="cert-header text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] mt-3 md:mt-4 leading-relaxed">
                  {t.tech.subtitleCert}
                </p>
              </div>

              {/* Tombol Navigasi Manual (Hanya di Desktop) */}
              <div className="cert-header hidden md:flex gap-3 shrink-0 pb-1">
                <button
                  onClick={() => slide("left")}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-all hover:shadow-md active:scale-95"
                >
                  <ArrowLeft
                    size={20}
                    className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors"
                  />
                </button>
                <button
                  onClick={() => slide("right")}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-all hover:shadow-md active:scale-95"
                >
                  <ArrowRight
                    size={20}
                    className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* CAROUSEL RUNNING TEXT */}
          <div className="relative w-full z-20">
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex overflow-x-auto gap-5 sm:gap-6 lg:gap-8 py-8 px-6 md:px-12 lg:px-20 touch-pan-x [&::-webkit-scrollbar]:hidden select-none"
            >
              {infiniteCertsData.map((cert: any, index: number) => (
                <div
                  key={`${cert.id}-${index}`}
                  className="cert-card shrink-0 w-[85vw] sm:w-[340px] md:w-[380px] lg:w-[400px] z-10"
                >
                  <Link
                    href={`/certificate/${cert.id}`}
                    onClick={() => startLoading(800)}
                    className="group relative w-full h-full flex flex-col p-5 sm:p-6 cursor-pointer transition-all duration-500 rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-2"
                  >
                    {/* Gambar/PDF Thumbnail */}
                    <div className="relative w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden mb-6 border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124]">
                      {/* Ikon Kategori Kiri Atas */}
                      <div className="absolute top-3 left-3 z-20 p-2.5 bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md rounded-2xl shadow-sm border border-[#DADCE0] dark:border-[#5F6368]">
                        <BadgeCheck
                          className="w-5 h-5 text-[#34A853] dark:text-[#81C995]"
                          strokeWidth={2}
                        />
                      </div>
                      <iframe
                        src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full pointer-events-none opacity-90 group-hover:opacity-100 transition-all duration-500 bg-white"
                        title={cert.title}
                      />
                      <div className="absolute inset-0 bg-transparent" />{" "}
                      {/* Overlay anti-interaksi iframe */}
                      {/* Ikon Panah Pojok Kanan Atas saat Hover */}
                      <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-[#DADCE0] dark:border-[#5F6368] scale-75 group-hover:scale-100">
                        <ArrowUpRight
                          size={20}
                          className="text-[#34A853] dark:text-[#81C995]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    {/* Konten Teks */}
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-4">
                        <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995] text-xs font-bold tracking-wider uppercase">
                          {cert.year}
                        </span>
                        <span className="text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6] px-3 py-1 bg-[#F1F3F4] dark:bg-[#3C4043] rounded-full border border-[#DADCE0] dark:border-[#5F6368]">
                          FIG {cert.id}
                        </span>
                      </div>

                      <h3 className="font-bold text-2xl leading-tight text-[#202124] dark:text-[#E8EAED] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors duration-300 line-clamp-2 mb-4">
                        {cert.title}
                      </h3>

                      <div className="mt-auto flex items-center justify-between">
                        <p className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] truncate pr-4">
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
