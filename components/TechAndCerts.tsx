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
      {/* BACKGROUND TECH & CERTS */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none z-0 transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa] dark:from-[#0a0a0a] dark:via-transparent dark:to-[#0a0a0a] opacity-80 pointer-events-none z-0 transition-colors duration-500"></div>

      {/* ============================================================ */}
      {/* CONTENT CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* ======================= */}
        {/* SECTION 1: TECH STACK   */}
        {/* ======================= */}
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Title Card (Span 4) */}
            <div className="cert-card md:col-span-4 h-full">
              <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col justify-center transition-colors duration-500">
                <Cpu
                  className="absolute -bottom-16 -right-12 w-64 h-64 text-zinc-900/[0.03] dark:text-white/[0.02] rotate-12 pointer-events-none z-0"
                  strokeWidth={1.5}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-full w-fit mb-6 border border-zinc-200/80 dark:border-zinc-700/50 transition-colors duration-500">
                    <Sparkles
                      size={14}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                    <span className="text-xs md:text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 transition-colors duration-500">
                      Skills
                    </span>
                  </div>
                  <h2 className="text-[12vw] md:text-[4vw] lg:text-[3.5vw] font-black uppercase leading-[0.9] tracking-tighter text-zinc-900 dark:text-white transition-colors duration-500">
                    Tech <br /> Stack
                  </h2>
                </div>
              </div>
            </div>

            {/* Tech Pills Card (Span 8) */}
            <div className="cert-card md:col-span-8 h-full">
              <div className="w-full h-full relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-wrap content-start gap-3 md:gap-4 transition-colors duration-500">
                <div className="relative z-10 flex flex-wrap gap-3 md:gap-4">
                  {techStack.map((tech) => (
                    // Wrapper untuk animasi GSAP (.tech-tag) agar bounce mulus
                    <div key={tech.name} className="tech-tag">
                      <div
                        className="
                        group flex items-center gap-3 px-4 py-3
                        bg-white dark:bg-[#18181b]
                        border border-zinc-200 dark:border-zinc-800
                        rounded-2xl
                        text-sm font-mono font-medium text-zinc-700 dark:text-zinc-300
                        hover:border-indigo-500/50 dark:hover:border-indigo-500/50
                        hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                        hover:text-indigo-600 dark:hover:text-indigo-400
                        hover:-translate-y-1 hover:shadow-md
                        transition-all duration-300 cursor-default
                        "
                      >
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
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
        <div className="flex flex-col gap-4 md:gap-5">
          {/* Header & Controls Bento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* TITLE CARD */}
            <div className="cert-card md:col-span-7 h-full">
              <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col justify-center transition-colors duration-500">
                <Award
                  className="absolute -bottom-16 -left-12 w-80 h-80 text-zinc-900/[0.03] dark:text-white/[0.02] -rotate-12 pointer-events-none z-0"
                  strokeWidth={1.5}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-full w-fit mb-6 border border-zinc-200/80 dark:border-zinc-700/50 transition-colors duration-500">
                    <Sparkles
                      size={14}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                    <span className="text-xs md:text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 transition-colors duration-500">
                      Achievements
                    </span>
                  </div>
                  <h2 className="text-[12vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-tighter text-zinc-900 dark:text-white transition-colors duration-500">
                    Certs
                  </h2>
                </div>
              </div>
            </div>

            {/* CONTROLS CARD */}
            <div className="cert-card md:col-span-5 h-full">
              <div className="w-full h-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-colors duration-500">
                <div className="flex flex-col gap-3">
                  <span className="bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-300 px-4 py-2 rounded-xl text-[10px] md:text-xs font-mono uppercase font-bold tracking-widest w-fit shadow-sm transition-colors duration-500">
                    Licenses
                  </span>
                  <span className="font-mono text-[10px] md:text-xs text-zinc-500 dark:text-zinc-500 font-semibold uppercase tracking-widest ml-1 transition-colors duration-500">
                    & Certifications
                  </span>
                </div>

                <div className="flex gap-3 shrink-0">
                  <button
                    onClick={() => slide("left")}
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300 shadow-sm"
                  >
                    <ArrowLeft
                      size={20}
                      className="text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    />
                  </button>
                  <button
                    onClick={() => slide("right")}
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300 shadow-sm"
                  >
                    <ArrowRight
                      size={20}
                      className="text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
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
              className="flex overflow-x-auto gap-4 md:gap-5 py-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
            >
              {certificates.map((cert) => (
                // Pembungkus GSAP (.cert-card)
                <div
                  key={cert.id}
                  className="cert-card snap-center shrink-0 w-[85vw] md:w-[420px] h-full z-10"
                >
                  {/* Isi Card dengan Styling Tailwind */}
                  <div
                    onClick={() => openCert(cert)}
                    className="group relative overflow-hidden w-full h-full bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-8 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-500 ease-out"
                  >
                    {/* WATERMARK ICON */}
                    <Medal
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-zinc-900/[0.03] dark:text-white/[0.02] pointer-events-none z-0 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      strokeWidth={1}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Top Meta */}
                      <div className="flex justify-between items-center font-mono text-xs uppercase font-semibold">
                        <span className="font-bold text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700/50">
                          FIG {cert.id}
                        </span>
                        <span className="bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-700/80 px-3.5 py-1.5 rounded-xl text-[10px] md:text-xs font-mono uppercase font-bold text-zinc-600 dark:text-zinc-300 shadow-sm transition-colors duration-500">
                          {cert.year}
                        </span>
                      </div>

                      {/* Iframe Preview */}
                      <div className="relative aspect-[4/3] rounded-[1.5rem] border border-zinc-200/80 dark:border-zinc-800/80 mt-8 overflow-hidden bg-zinc-50 dark:bg-zinc-900 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/50 transition-colors duration-300 shadow-inner">
                        <iframe
                          src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                          className="w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        {/* Invisible overlay for capturing clicks over iframe */}
                        <div className="absolute inset-0 bg-transparent" />
                      </div>

                      {/* Bottom Detail */}
                      <div className="flex items-center justify-between mt-8 border-t border-zinc-100 dark:border-zinc-800/50 pt-5 group-hover:border-indigo-100 dark:group-hover:border-indigo-900/50 transition-colors duration-300">
                        <div className="flex flex-col gap-1.5 pr-4">
                          <span className="text-xl md:text-2xl font-black leading-snug text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 tracking-tight">
                            {cert.title}
                          </span>
                          <span className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-400 font-bold tracking-widest mt-1 transition-colors duration-500">
                            {cert.issuer}
                          </span>
                        </div>

                        <div className="relative z-10 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-700/50 p-3 rounded-full group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-all duration-300 shadow-sm group-hover:border-transparent shrink-0">
                          <ArrowUpRight
                            size={20}
                            className="text-zinc-400 dark:text-zinc-500 group-hover:text-white group-hover:rotate-45 transition-transform duration-300"
                          />
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
