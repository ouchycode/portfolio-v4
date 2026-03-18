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
    year: "2026",
    pdf: "/certs/DICODING_BELAJAR MEMBUAT APLIKASI WEB DENGAN REACT.pdf",
  },
  {
    id: "07",
    title: "Belajar Fundamental Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_BELAJAR FUNDAMENTAL APLIKASI WEB DENGAN REACT.pdf",
  },
  {
    id: "08",
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_BELAJAR BACK-END PEMULA DENGAN JAVASCRIPT.pdf",
  },
  {
    id: "09",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2025",
    pdf: "/certs/DICODING_BELAJAR DASAR PEMPROGRAMAN WEB.pdf",
  },
  {
    id: "10",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2025",
    pdf: "/certs/DICODING_BELAJAR DASAR AI.pdf",
  },
  {
    id: "11",
    title: "Control Design Onramp with Simulink",
    issuer: "MathWorks",
    year: "2025",
    pdf: "/certs/CONTROL DESIGN ONRAMP WITH SIMULINK.pdf",
  },
  {
    id: "12",
    title: "Matlab Onramp",
    issuer: "MathWorks",
    year: "2025",
    pdf: "/certs/MATLAP ONRAMP.pdf",
  },
  {
    id: "13",
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
    const gap = window.innerWidth > 768 ? 24 : 16;
    const cardWidth =
      window.innerWidth > 768 ? 380 + gap : window.innerWidth * 0.85 + gap;
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
        px-0 py-16 md:px-10 md:py-28
        text-[#202124] dark:text-[#E8EAED]
        transition-colors duration-500
      "
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-20 md:gap-28">
        {/* ══════════════════════════════════════ */}
        {/* SECTION 1: TECH STACK (Google Tags Style) */}
        {/* ══════════════════════════════════════ */}
        <div className="flex flex-col gap-6 md:gap-8 px-4 md:px-0">
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm w-fit">
              <Cpu size={16} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                Tech Stack
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="font-extrabold tracking-tight text-3xl md:text-5xl text-[#202124] dark:text-white">
                  Keahlian & Teknologi
                </h2>
                <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mt-2">
                  Koleksi alat, bahasa, dan framework yang saya gunakan untuk
                  mewujudkan ide menjadi produk digital.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Chips Grid */}
          <div className="w-full rounded-[24px] border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm p-6 md:p-10 transition-shadow duration-300">
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

        {/* ══════════════════════════════════════ */}
        {/* SECTION 2: CREDENTIALS (Google Drive Style) */}
        {/* ══════════════════════════════════════ */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Section Header */}
          <div className="flex flex-col gap-3 px-4 md:px-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm w-fit">
              <Award size={16} className="text-[#34A853] dark:text-[#81C995]" />{" "}
              {/* Google Green */}
              <span className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                Credentials
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-extrabold tracking-tight text-3xl md:text-5xl text-[#202124] dark:text-white">
                  Sertifikasi & Lisensi
                </h2>
                <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mt-2">
                  Validasi kompetensi dan komitmen saya terhadap pembelajaran
                  berkelanjutan.
                </p>
              </div>

              {/* Scroll Controls (Desktop Only) */}
              <div className="hidden md:flex gap-3 shrink-0">
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

          {/* Cert Cards Carousel (Mobile-First Swipeable) */}
          <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 md:gap-5 pb-8 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="cert-card snap-center shrink-0 w-[85vw] md:w-[380px] flex flex-col"
                >
                  <div
                    onClick={() => openCert(cert)}
                    className="group relative w-full h-[380px] rounded-[24px] border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm cursor-pointer flex flex-col p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    {/* Top Accent (Google Drive "Folder" feel) */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995] text-[11px] font-bold uppercase tracking-wider">
                        {cert.year}
                      </span>
                      <span className="text-[12px] font-bold text-[#DADCE0] dark:text-[#5F6368]">
                        FIG {cert.id}
                      </span>
                    </div>

                    {/* PDF Preview (Google Drive File Preview Style) */}
                    <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-5 border border-[#DADCE0] dark:border-[#3C4043] bg-[#F8F9FA] dark:bg-[#202124]">
                      <iframe
                        src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 bg-white"
                      />
                      {/* Click Capture Overlay */}
                      <div className="absolute inset-0 bg-transparent" />
                    </div>

                    {/* Cert Title & Issuer */}
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
