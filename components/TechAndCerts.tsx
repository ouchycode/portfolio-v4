"use client";

import { useRef, useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Cpu,
  Sparkles,
  Medal,
} from "lucide-react";

import CertificateModal from "./CredentialsModal";
import { useTechCertsAnimation } from "@/hooks/useAnimations";

const certificates = [
  {
    id: "01",
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_BELAJAR DASAR CLOUD DAN GEN AI DI AWS.pdf",
  },
  {
    id: "02",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_BELAJAR DASAR PEMPROGRAMAN JAVASCRIPT.pdf",
  },
  {
    id: "03",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_BELAJAR MEMBUAT FRONT-END WEB UNTUK PEMULA.pdf",
  },
  {
    id: "04",
    title: "Programming Logic 101",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_PROGRAMMING LOGIC 101.pdf",
  },
  {
    id: "05",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_INTRODUCTION TO FINANCIAL LITERACY.pdf",
  },
  {
    id: "06",
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    year: "2025",
    pdf: "/certs/DICODING_BELAJAR MEMBUAT APLIKASI WEB DENGAN REACT.pdf",
  },
  {
    id: "07",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2025",
    pdf: "/certs/DICODING_BELAJAR DASAR PEMPROGRAMAN WEB.pdf",
  },
  {
    id: "08",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2025",
    pdf: "/certs/DICODING_BELAJAR DASAR AI.pdf",
  },
  {
    id: "09",
    title: "Control Design Onramp with Simulink",
    issuer: "MathWorks",
    year: "2025",
    pdf: "/certs/CONTROL DESIGN ONRAMP WITH SIMULINK.pdf",
  },
  {
    id: "10",
    title: "Matlab Onramp",
    issuer: "MathWorks",
    year: "2025",
    pdf: "/certs/MATLAP ONRAMP.pdf",
  },
  {
    id: "11",
    title: "Simulink Onramp",
    issuer: "MathWorks",
    year: "2025",
    pdf: "/certs/SIMULINK ONRAMP.pdf",
  },
];

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

  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    const gap = window.innerWidth > 768 ? 20 : 16;
    const cardWidth =
      window.innerWidth > 768 ? 420 + gap : window.innerWidth * 0.85 + gap;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const openCert = (cert: any) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCert = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="tech"
      ref={container}
      className="
        relative overflow-hidden
        px-4 py-24 md:px-10 md:py-32
        bg-[#f5f3ef] text-zinc-900
        dark:bg-[#0c0c0e] dark:text-zinc-50
        transition-colors duration-500
      "
    >
      {/* ── Grain Texture ──────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Radial gradient accents ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 left-0 w-[500px] h-[500px] rounded-full bg-cyan-200/15 dark:bg-cyan-800/8 blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] rounded-full bg-emerald-200/15 dark:bg-emerald-800/8 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-300/10 dark:bg-violet-700/6 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20 md:gap-28">
        {/* ══════════════════════════════════════ */}
        {/* SECTION 1: TECH STACK                 */}
        {/* ══════════════════════════════════════ */}
        <div className="flex flex-col gap-5 md:gap-6">
          {/* Section label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm w-fit">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
              04 /
            </span>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-300">
              Tech Stack
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Title Card */}
            <div className="cert-card md:col-span-4 h-full">
              <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-[0_2px_30px_0px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_30px_0px_rgba(0,0,0,0.35)] p-7 md:p-10 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_8px_50px_0px_rgba(6,182,212,0.10)] dark:hover:shadow-[0_8px_50px_0px_rgba(6,182,212,0.16)]">
                <Cpu
                  className="absolute -bottom-16 -right-12 w-64 h-64 text-zinc-900/[0.03] dark:text-white/[0.03] rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
                  strokeWidth={1.5}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-cyan-200 dark:border-cyan-700/50 bg-cyan-50 dark:bg-cyan-950/40 shadow-sm">
                    <Sparkles
                      size={13}
                      className="text-cyan-500 dark:text-cyan-400"
                    />
                    <span className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-cyan-700 dark:text-cyan-300">
                      Skills
                    </span>
                  </div>
                  <h2
                    className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-[12vw] md:text-[4vw] lg:text-[3.5vw] text-zinc-900 dark:text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    TECH
                    <br />
                    STACK
                  </h2>
                </div>
              </div>
            </div>

            {/* Tech Pills Card */}
            <div className="cert-card md:col-span-8 h-full">
              <div className="w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-6 md:p-10 transition-colors duration-500">
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="tech-tag">
                      <div className="group flex items-center gap-2 md:gap-2.5 px-3 py-2 md:px-3.5 md:py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/60 backdrop-blur-sm shadow-sm text-[8px] md:text-[9px] font-mono font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:border-cyan-300 dark:hover:border-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-200 cursor-default">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-4 h-4 md:w-[18px] md:h-[18px] object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════ */}
        {/* SECTION 2: CREDENTIALS                */}
        {/* ══════════════════════════════════════ */}
        <div className="flex flex-col gap-5 md:gap-6">
          {/* Section label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm w-fit">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
              05 /
            </span>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-300">
              Credentials
            </span>
          </div>

          {/* Header & Controls Bento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Title Card */}
            <div className="cert-card md:col-span-7 h-full">
              <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-[0_2px_30px_0px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_30px_0px_rgba(0,0,0,0.35)] p-7 md:p-10 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_8px_50px_0px_rgba(16,185,129,0.10)] dark:hover:shadow-[0_8px_50px_0px_rgba(16,185,129,0.16)]">
                <Award
                  className="absolute -bottom-16 -left-12 w-72 h-72 text-zinc-900/[0.03] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-6"
                  strokeWidth={1.5}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-950/40 shadow-sm">
                    <Sparkles
                      size={13}
                      className="text-emerald-500 dark:text-emerald-400"
                    />
                    <span className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-emerald-700 dark:text-emerald-300">
                      Achievements
                    </span>
                  </div>
                  <h2
                    className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-[14vw] md:text-[6.5vw] lg:text-[5.5vw] text-zinc-900 dark:text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    CERTS
                  </h2>
                </div>
              </div>
            </div>

            {/* Controls Card */}
            <div className="cert-card md:col-span-5 h-full">
              <div className="w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-7 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-colors duration-500">
                <div className="flex flex-col gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/60 text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300 w-fit shadow-sm">
                    Licenses
                  </span>
                  <span className="text-[9px] font-mono font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] ml-0.5">
                    & Certifications
                  </span>
                </div>

                {/* Scroll Controls */}
                <div className="flex gap-3 shrink-0 mt-auto md:mt-0">
                  <button
                    onClick={() => slide("left")}
                    className="group/btn flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm hover:border-emerald-300 dark:hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-all duration-200 active:scale-95"
                  >
                    <ArrowLeft
                      size={18}
                      strokeWidth={2}
                      className="text-zinc-500 dark:text-zinc-400 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors"
                    />
                  </button>
                  <button
                    onClick={() => slide("right")}
                    className="group/btn flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm hover:border-emerald-300 dark:hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-all duration-200 active:scale-95"
                  >
                    <ArrowRight
                      size={18}
                      strokeWidth={2}
                      className="text-zinc-500 dark:text-zinc-400 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Cert Cards Carousel ─────────────────────────────── */}
          <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 md:gap-5 py-3 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="cert-card snap-center shrink-0 w-[85vw] md:w-[420px] min-h-[460px] md:min-h-[480px]"
                >
                  <div
                    onClick={() => openCert(cert)}
                    className="group relative overflow-hidden w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/65 dark:bg-zinc-900/55 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-5 md:p-6 cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_0px_rgba(16,185,129,0.13)] dark:hover:shadow-[0_16px_48px_0px_rgba(16,185,129,0.18)] hover:border-emerald-200/60 dark:hover:border-emerald-700/40"
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-60" />

                    {/* Watermark */}
                    <Medal
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 text-zinc-900/[0.03] dark:text-white/[0.03] pointer-events-none z-0 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      strokeWidth={1.5}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Top Meta */}
                      <div className="flex justify-between items-center mb-5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-950/40 text-[9px] font-mono font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-300 shadow-sm group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          FIG {cert.id}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/50 text-[9px] font-mono font-semibold text-zinc-500 dark:text-zinc-400 tracking-widest uppercase backdrop-blur-sm shadow-sm">
                          {cert.year}
                        </span>
                      </div>

                      {/* PDF Preview */}
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200/60 dark:border-zinc-700/40 bg-zinc-100 dark:bg-zinc-800 shadow-sm mb-5">
                        <iframe
                          src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                          className="w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        {/* Click capture overlay */}
                        <div className="absolute inset-0 bg-zinc-900/8 dark:bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-300" />
                      </div>

                      {/* Bottom detail */}
                      <div className="mt-auto pt-4 border-t border-zinc-200/60 dark:border-zinc-700/40 flex flex-col gap-3">
                        <h3
                          className="font-bold text-base md:text-lg uppercase tracking-tight leading-snug text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {cert.title}
                        </h3>

                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                            {cert.issuer}
                          </span>
                          <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-700/60 backdrop-blur-sm shadow-sm group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                            <ArrowUpRight
                              size={16}
                              strokeWidth={2}
                              className="text-zinc-500 dark:text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={closeCert}
        cert={selectedCert}
      />
    </section>
  );
}
