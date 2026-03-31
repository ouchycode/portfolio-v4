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
import { useLoading } from "@/context/LoadingContext"; // <-- Import Loading

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
  const { startLoading } = useLoading(); // <-- Panggil fungsi loading
  const certificates = t.tech.certs;
  const [isPaused, setIsPaused] = useState(false);

  useTechCertsAnimation(container);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const preventScroll = (e: WheelEvent) => {
      if (window.innerWidth < 768) e.preventDefault();
    };
    el.addEventListener("wheel", preventScroll, { passive: false });
    return () => el.removeEventListener("wheel", preventScroll);
  }, []);

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = window.innerWidth > 768 ? 24 : 16;
    const cardWidth =
      window.innerWidth > 768 ? 380 + gap : window.innerWidth * 0.85 + gap;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) interval = setInterval(() => slide("right"), 3000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <section
      id="tech"
      ref={container}
      className="relative overflow-hidden px-0 py-16 md:px-10 md:py-28 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-20 md:gap-28">
        <div className="flex flex-col gap-6 md:gap-8 px-4 md:px-0">
          <div className="flex flex-col gap-3">
            <div className="tech-header inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm w-fit">
              <Cpu size={16} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                {t.tech.badgeStack}
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="tech-header font-extrabold tracking-tight text-3xl md:text-5xl text-[#202124] dark:text-white">
                  {t.tech.titleStack}
                </h2>
                <p className="tech-header text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mt-2">
                  {t.tech.subtitleStack}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-6 md:p-10 transition-shadow duration-300">
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-tag group flex items-center gap-3 px-4 py-2.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] hover:bg-white dark:hover:bg-[#3C4043] shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-5 h-5 md:w-6 md:h-6 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-sm md:text-base font-semibold text-[#3C4043] dark:text-[#E8EAED]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-3 px-6 md:px-0">
            <div className="cert-header inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm w-fit">
              <Award size={16} className="text-[#34A853] dark:text-[#81C995]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                {t.tech.badgeCert}
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="cert-header font-extrabold tracking-tight text-3xl md:text-5xl text-[#202124] dark:text-white">
                  {t.tech.titleCert}
                </h2>
                <p className="cert-header text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mt-2">
                  {t.tech.subtitleCert}
                </p>
              </div>
              <div className="cert-header hidden md:flex gap-3 shrink-0">
                <button
                  onClick={() => slide("left")}
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-colors duration-200"
                >
                  <ArrowLeft
                    size={20}
                    className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors"
                  />
                </button>
                <button
                  onClick={() => slide("right")}
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-colors duration-200"
                >
                  <ArrowRight
                    size={20}
                    className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full z-20">
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex overflow-x-auto gap-4 md:gap-6 pb-12 pt-6 px-6 md:px-0 snap-x snap-mandatory scroll-smooth touch-pan-x [&::-webkit-scrollbar]:hidden select-none"
            >
              {certificates.map((cert: any) => (
                <div
                  key={cert.id}
                  className="cert-card snap-center shrink-0 w-[85vw] md:w-[380px] z-10"
                >
                  {/* TAMBAHKAN ONCLICK DI SINI */}
                  <Link
                    href={`/certificate/${cert.id}`}
                    onClick={() => startLoading(800)}
                    className="group relative w-full h-full flex flex-col p-5 cursor-pointer transition-all duration-300 rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)]"
                  >
                    <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 z-20 p-2.5 bg-white dark:bg-[#303134] rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.4)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm -rotate-6 transition-transform duration-300 group-hover:rotate-0">
                      <BadgeCheck className="w-5 h-5 md:w-6 md:h-6 text-[#34A853] dark:text-[#81C995]" />
                    </div>
                    <div className="flex justify-between items-center mb-4 pl-6 md:pl-8">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995] text-[11px] font-bold uppercase tracking-wider">
                        {cert.year}
                      </span>
                      <span className="text-[12px] font-bold text-[#DADCE0] dark:text-[#5F6368]">
                        FIG {cert.id}
                      </span>
                    </div>
                    <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-5 border border-[#DADCE0] dark:border-[#3C4043] bg-[#F8F9FA] dark:bg-[#202124]">
                      <iframe
                        src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full pointer-events-none opacity-90 group-hover:opacity-100 transition-all duration-500 bg-white"
                        title={cert.title}
                      />
                      <div className="absolute inset-0 bg-transparent" />
                    </div>
                    <div className="flex flex-col flex-1 px-1">
                      <h3 className="font-bold text-lg md:text-xl leading-snug text-[#202124] dark:text-[#E8EAED] group-hover:text-[#34A853] dark:group-hover:text-[#81C995] transition-colors duration-300 line-clamp-2 mb-2">
                        {cert.title}
                      </h3>
                      <div className="mt-auto flex items-center justify-between">
                        <p className="text-[13px] md:text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6] truncate pr-2">
                          {cert.issuer}
                        </p>
                        <div className="w-8 h-8 shrink-0 rounded-full bg-[#F8F9FA] dark:bg-[#202124] border border-[#DADCE0] dark:border-[#5F6368] flex items-center justify-center group-hover:bg-[#34A853] group-hover:border-[#34A853] transition-colors duration-300">
                          <ArrowUpRight
                            size={16}
                            className="text-[#5F6368] dark:text-[#E8EAED] group-hover:text-white transition-colors"
                          />
                        </div>
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
