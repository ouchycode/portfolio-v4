"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Award, Cpu } from "lucide-react";

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

    // Kalkulasi gap bento grid
    const gap = window.innerWidth > 768 ? 24 : 20; // Menyesuaikan gap (gap-5)
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
      px-4 py-24 md:px-8 md:py-32
      bg-[#fafafa] text-zinc-900
      dark:bg-[#0a0a0a] dark:text-zinc-50
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* ======================= */}
        {/* SECTION 1: TECH STACK   */}
        {/* ======================= */}
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Title Card (Span 4) */}
            <div className="md:col-span-4 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-col justify-center">
              <div className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 w-fit p-3.5 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-6 transition-colors">
                <Cpu size={28} />
              </div>
              <h2 className="tech-tag text-[12vw] md:text-[4vw] lg:text-[3.5vw] font-black uppercase leading-[0.9] tracking-tighter">
                Tech <br /> Stack
              </h2>
            </div>

            {/* Tech Pills Card (Span 8) */}
            <div className="md:col-span-8 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-wrap content-start gap-3 md:gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="
                  group
                  tech-tag
                  flex items-center gap-3
                  px-4 py-3
                  bg-zinc-50 dark:bg-zinc-900/50
                  border border-zinc-200/80 dark:border-zinc-800/80
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
                    className="
                    w-5 h-5
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-110
                    "
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ======================= */}
        {/* SECTION 2: CREDENTIALS  */}
        {/* ======================= */}
        <div className="flex flex-col gap-4 md:gap-5">
          {/* Header & Controls Bento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            <div className="md:col-span-7 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex items-center gap-6">
              <div className="hidden md:flex bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 p-4 rounded-2xl text-amber-500 transition-colors">
                <Award size={32} />
              </div>
              <h2 className="tech-tag text-[12vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-tighter">
                Certs
              </h2>
            </div>

            <div className="md:col-span-5 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex items-center justify-between gap-6">
              <span className="font-mono text-sm text-zinc-500 font-medium">
                Sertifikasi & <br className="hidden md:block" /> Penghargaan
              </span>

              <div className="flex gap-3 shrink-0">
                <button
                  onClick={() => slide("left")}
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300"
                >
                  <ArrowLeft
                    size={20}
                    className="text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-600 transition-colors"
                  />
                </button>

                <button
                  onClick={() => slide("right")}
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300"
                >
                  <ArrowRight
                    size={20}
                    className="text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-600 transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Cert Slider */}
          <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
            <div
              ref={scrollRef}
              className="
              flex overflow-x-auto gap-4 md:gap-5 py-2
              snap-x snap-mandatory
              [&::-webkit-scrollbar]:hidden
              touch-none md:touch-auto
              select-none
              "
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => openCert(cert)}
                  className="
                  group
                  snap-center shrink-0
                  w-[85vw] md:w-[420px]
                  bg-white dark:bg-[#121212]
                  border border-zinc-200/80 dark:border-zinc-800/80
                  rounded-[2rem] p-6 md:p-8
                  cursor-pointer
                  flex flex-col justify-between
                  shadow-sm hover:shadow-xl hover:shadow-indigo-500/10
                  hover:border-indigo-500/50 dark:hover:border-indigo-500/50
                  hover:-translate-y-1
                  transition-all duration-500 ease-out
                  "
                >
                  {/* Top Meta */}
                  <div className="flex justify-between items-center font-mono text-xs uppercase font-semibold">
                    <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      FIG {cert.id}
                    </span>
                    <span className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 px-3 py-1.5 rounded-xl text-zinc-500 dark:text-zinc-400">
                      {cert.year}
                    </span>
                  </div>

                  {/* Iframe Preview (Rounded Corners) */}
                  <div className="relative aspect-[4/3] rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 mt-8 overflow-hidden bg-zinc-50 dark:bg-zinc-900 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/50 transition-colors duration-300">
                    <iframe
                      src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    {/* Invisible overlay for capturing clicks over iframe */}
                    <div className="absolute inset-0 bg-transparent" />
                  </div>

                  {/* Bottom Detail */}
                  <div className="flex items-center justify-between mt-8 border-t border-zinc-100 dark:border-zinc-800/50 pt-5">
                    <div className="flex flex-col gap-1.5 pr-4">
                      <span className="text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 tracking-tight">
                        {cert.title}
                      </span>
                      <span className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 font-medium tracking-wide">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-2.5 rounded-full group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:border-indigo-600 transition-all duration-300 shrink-0">
                      <ArrowUpRight
                        size={18}
                        className="text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-transform duration-300"
                      />
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
