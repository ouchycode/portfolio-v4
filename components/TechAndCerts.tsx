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

export default function TechAndCerts() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useTechCertsAnimation(container);

  /* Disable manual scroll on mobile */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const preventScroll = (e: WheelEvent) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      el.removeEventListener("wheel", preventScroll);
    };
  }, []);

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

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const gap = window.innerWidth > 768 ? 24 : 20;
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
      px-4 py-24 md:px-8 md:py-32
      bg-[#fafafa] text-zinc-900
      dark:bg-[#0a0a0a] dark:text-zinc-50
      transition-colors duration-500
      "
    >
      {/* ============================================================ */}
      {/* BACKGROUND TECH & CERTS - Pixel Dot Pattern */}
      {/* ============================================================ */}
      {/* Gradient overlay dihapus agar pattern pixel tetap tajam */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] dark:bg-[radial-gradient(#3f3f46_2px,transparent_2px)] [background-size:24px_24px] opacity-70 pointer-events-none transition-colors duration-500 z-0"></div>

      {/* ============================================================ */}
      {/* CONTENT CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* ======================= */}
        {/* SECTION 1: TECH STACK   */}
        {/* ======================= */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Title Card (Span 4) */}
            <div className="cert-card md:col-span-4 h-full">
              {/* Shadow diseragamkan ke 5px */}
              <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-col justify-center transition-colors duration-500">
                <Cpu
                  className="absolute -bottom-16 -right-12 w-64 h-64 text-zinc-900/[0.04] dark:text-white/[0.03] rotate-12 pointer-events-none z-0"
                  strokeWidth={2}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-300 dark:bg-cyan-600 border-2 border-zinc-900 dark:border-zinc-100 rounded-sm w-fit mb-6 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                    <Sparkles
                      size={14}
                      className="text-cyan-950 dark:text-cyan-100"
                    />
                    <span className="font-pixel text-[8px] md:text-[10px] font-bold tracking-widest text-cyan-950 dark:text-cyan-50 uppercase">
                      Skills
                    </span>
                  </div>
                  <h2 className="font-pixel text-[12vw] md:text-[4vw] lg:text-[3.5vw] font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-white drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46] transition-colors duration-500">
                    TECH <br /> STACK
                  </h2>
                </div>
              </div>
            </div>

            {/* Tech Pills Card (Span 8) */}
            <div className="cert-card md:col-span-8 h-full">
              {/* Shadow diseragamkan ke 5px */}
              <div className="w-full h-full relative overflow-hidden bg-[#fafafa] dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-wrap content-start gap-3 md:gap-4 transition-colors duration-500">
                <div className="relative z-10 flex flex-wrap gap-3 md:gap-4">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="tech-tag">
                      <div
                        className="
                        group flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3
                        bg-white dark:bg-zinc-800
                        border-2 border-zinc-900 dark:border-zinc-100
                        rounded-sm
                        shadow-[3px_3px_0_0_#18181b] dark:shadow-[3px_3px_0_0_#e4e4e7]
                        font-pixel text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100
                        hover:bg-cyan-300 dark:hover:bg-cyan-600 hover:text-cyan-950 dark:hover:text-white
                        active:translate-y-1 active:translate-x-1 active:shadow-none
                        transition-all duration-200 cursor-default
                        "
                      >
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-4 h-4 md:w-5 md:h-5 object-contain transition-transform duration-300 group-hover:scale-110"
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

        {/* ======================= */}
        {/* SECTION 2: CREDENTIALS  */}
        {/* ======================= */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Header & Controls Bento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* TITLE CARD */}
            <div className="cert-card md:col-span-7 h-full">
              {/* Shadow diseragamkan ke 5px */}
              <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-col justify-center transition-colors duration-500">
                <Award
                  className="absolute -bottom-16 -left-12 w-80 h-80 text-zinc-900/[0.04] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0"
                  strokeWidth={2}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-300 dark:bg-emerald-600 border-2 border-zinc-900 dark:border-zinc-100 rounded-sm w-fit mb-6 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                    <Sparkles
                      size={14}
                      className="text-emerald-950 dark:text-emerald-100"
                    />
                    <span className="font-pixel text-[8px] md:text-[10px] font-bold tracking-widest text-emerald-950 dark:text-emerald-50 uppercase">
                      Achievements
                    </span>
                  </div>
                  <h2 className="font-pixel text-[12vw] md:text-[5vw] font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-white drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46] transition-colors duration-500">
                    CERTS
                  </h2>
                </div>
              </div>
            </div>

            {/* CONTROLS CARD */}
            <div className="cert-card md:col-span-5 h-full">
              {/* Shadow diseragamkan ke 5px */}
              <div className="w-full h-full bg-[#fafafa] dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-colors duration-500">
                <div className="flex flex-col gap-3">
                  <span className="font-pixel bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-50 px-3 py-2 rounded-sm text-[8px] md:text-[10px] uppercase font-bold tracking-widest w-fit shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                    Licenses
                  </span>
                  <span className="font-pixel text-[8px] md:text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest ml-1 mt-1 transition-colors duration-500">
                    & Certifications
                  </span>
                </div>

                {/* Retro Nav Buttons */}
                <div className="flex gap-4 shrink-0 mt-auto md:mt-0">
                  <button
                    onClick={() => slide("left")}
                    className="group flex items-center justify-center w-12 h-12 rounded-sm bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(228,228,231,1)] hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-200 active:translate-y-1 active:translate-x-1 active:shadow-none"
                  >
                    <ArrowLeft
                      size={24}
                      strokeWidth={3}
                      className="text-zinc-900 dark:text-zinc-100 group-hover:text-white transition-colors"
                    />
                  </button>
                  <button
                    onClick={() => slide("right")}
                    className="group flex items-center justify-center w-12 h-12 rounded-sm bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(228,228,231,1)] hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-200 active:translate-y-1 active:translate-x-1 active:shadow-none"
                  >
                    <ArrowRight
                      size={24}
                      strokeWidth={3}
                      className="text-zinc-900 dark:text-zinc-100 group-hover:text-white transition-colors"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cert Slider */}
          <div className="relative -mx-4 px-4 md:mx-0 md:px-0 mt-2">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 md:gap-6 py-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="cert-card snap-center shrink-0 w-[85vw] md:w-[420px] h-full min-h-[460px] md:min-h-[480px] z-10"
                >
                  {/* Hover effect diperbarui: translate-y-1 dengan shadow Emerald pop-up */}
                  <div
                    onClick={() => openCert(cert)}
                    className="group relative overflow-hidden w-full h-full bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-5 md:p-6 cursor-pointer flex flex-col shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(16,185,129,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(52,211,153,1)] transition-all duration-300 ease-out"
                  >
                    {/* WATERMARK ICON */}
                    <Medal
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-zinc-900/[0.04] dark:text-white/[0.03] pointer-events-none z-0 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      strokeWidth={2}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Top Meta */}
                      <div className="flex justify-between items-center mb-5">
                        <span className="font-pixel text-[10px] md:text-xs font-bold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 px-3 py-1.5 rounded-sm shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] group-hover:bg-emerald-300 dark:group-hover:bg-emerald-600 transition-colors duration-300">
                          FIG {cert.id}
                        </span>
                        <span className="font-pixel text-[8px] md:text-[10px] bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 px-3 py-1.5 rounded-sm uppercase font-bold shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-300">
                          {cert.year}
                        </span>
                      </div>

                      {/* Iframe Preview - Retro Monitor Style */}
                      <div className="relative aspect-[4/3] rounded-sm border-2 md:border-4 border-zinc-900 dark:border-zinc-100 overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-colors duration-300">
                        <iframe
                          src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                          className="w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        {/* Invisible overlay for capturing clicks over iframe */}
                        <div className="absolute inset-0 bg-zinc-900/10 dark:bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-300" />
                      </div>

                      {/* Bottom Detail */}
                      <div className="flex flex-col mt-auto pt-5 border-t-4 border-zinc-900 dark:border-zinc-100 mt-5">
                        <h3 className="font-pixel text-lg md:text-xl uppercase tracking-widest leading-relaxed text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                          {cert.title}
                        </h3>

                        <div className="flex items-center justify-between mt-4">
                          <span className="font-bold text-xs md:text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-500">
                            {cert.issuer}
                          </span>
                          <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 p-2 rounded-sm shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-all duration-300 shrink-0">
                            <ArrowUpRight
                              size={20}
                              strokeWidth={3}
                              className="text-zinc-900 dark:text-zinc-100 group-hover:text-white dark:group-hover:text-zinc-900 transition-transform duration-300 group-hover:rotate-45"
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
