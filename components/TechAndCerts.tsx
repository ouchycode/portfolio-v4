"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import CertificateModal from "./CredentialsModal";
import { useTechCertsAnimation } from "@/hooks/useAnimations";

const certificates = [
  {
    id: "01",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2025",
    pdf: "/certs/DICODING_BELAJAR DASAR AI.pdf",
  },
  {
    id: "02",
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_BELAJAR DASAR CLOUD DAN GEN AI DI AWS.pdf",
  },
  {
    id: "03",
    title: "Belajar Dasar Pemprograman JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_BELAJAR DASAR PEMPROGRAMAN JAVASCRIPT.pdf",
  },
  {
    id: "04",
    title: "Belajar Dasar Pemprograman Web",
    issuer: "Dicoding Indonesia",
    year: "2025",
    pdf: "/certs/DICODING_BELAJAR DASAR PEMPROGRAMAN WEB.pdf",
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
    title: "Programming Logic 101",
    issuer: "Dicoding Indonesia",
    year: "2026",
    pdf: "/certs/DICODING_PROGRAMMING LOGIC 101.pdf",
  },
  {
    id: "07",
    title: "Matlap Onramp",
    issuer: "MathWorks",
    year: "2025",
    pdf: "/certs/MATLAP ONRAMP.pdf",
  },
  {
    id: "08",
    title: "Simulink Onramp",
    issuer: "MathWorks",
    year: "2025",
    pdf: "/certs/SIMULINK ONRAMP.pdf",
  },
  {
    id: "09",
    title: "Control Desing Onramp With Simulink",
    issuer: "MathWorks",
    year: "2025",
    pdf: "/certs/CONTROL DESIGN ONRAMP WITH SIMULINK.pdf",
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

    const cardWidth =
      window.innerWidth > 768 ? 420 + 1 : window.innerWidth * 0.85 + 1;

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
      px-5 py-24 md:px-16 md:py-32
      bg-white text-black
      dark:bg-[#050505] dark:text-white
      "
    >
      <div className="border border-black dark:border-white grid grid-cols-1 md:grid-cols-12">
        {/* TECH STACK */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-black dark:border-white">
          <div className="p-6 md:p-10 border-b border-black dark:border-white">
            <h2 className="tech-tag text-[14vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-tight">
              Tech
            </h2>
          </div>

          <div className="p-6 md:p-10 grid grid-cols-2 gap-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="
                group
                tech-tag
                flex items-center gap-2
                px-3 py-2
                border border-black dark:border-white
                text-xs font-mono uppercase
                hover:bg-indigo-500 hover:text-white
                transition
                "
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="
                  w-[14px] h-[14px]
                  object-contain
                  transition-all
                  group-hover:brightness-0 group-hover:invert
                  "
                />

                {tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* CERTS */}
        <div className="md:col-span-8 flex flex-col">
          {/* HEADER */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black dark:border-white">
            <div className="md:col-span-9 border-b md:border-b-0 md:border-r border-black dark:border-white p-6 md:p-10">
              <h2 className="tech-tag text-[14vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-tight">
                Certs
              </h2>
            </div>

            <div className="md:col-span-3 p-6 md:p-10 flex items-end justify-end gap-2">
              <button
                onClick={() => slide("left")}
                className="
                group
                flex items-center justify-center
                w-10 h-10
                border border-black dark:border-white
                hover:bg-indigo-500 hover:text-white
                transition
                "
              >
                <ArrowLeft
                  size={18}
                  className="text-indigo-500 group-hover:text-white transition"
                />
              </button>

              <button
                onClick={() => slide("right")}
                className="
                group
                flex items-center justify-center
                w-10 h-10
                border border-black dark:border-white
                hover:bg-indigo-500 hover:text-white
                transition
                "
              >
                <ArrowRight
                  size={18}
                  className="text-indigo-500 group-hover:text-white transition"
                />
              </button>
            </div>
          </div>

          {/* CERT SCROLLER */}
          <div
            ref={scrollRef}
            className="
            flex overflow-x-auto
            snap-x snap-mandatory
            border-t border-black dark:border-white
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
                border-r border-black dark:border-white
                p-6 md:p-10
                cursor-pointer
                flex flex-col justify-between
                transition
                hover:bg-indigo-500 hover:text-white
                "
              >
                <div className="flex justify-between items-center font-mono text-xs uppercase opacity-70">
                  <span className="text-indigo-500 group-hover:text-white transition">
                    FIG {cert.id}
                  </span>

                  <span>{cert.year}</span>
                </div>

                <div className="relative aspect-[4/3] border border-black dark:border-white mt-10 overflow-hidden bg-white">
                  <iframe
                    src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full pointer-events-none"
                  />

                  <div className="absolute inset-0 bg-transparent" />
                </div>

                <div className="flex items-center justify-between mt-10">
                  <div>
                    <span className="text-sm md:text-base font-medium block">
                      {cert.title}
                    </span>

                    <span className="font-mono text-[10px] uppercase text-zinc-500 group-hover:text-white transition">
                      {cert.issuer}
                    </span>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-indigo-500 group-hover:text-white transition" />
                </div>
              </div>
            ))}
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
