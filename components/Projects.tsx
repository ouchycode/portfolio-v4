"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  FolderGit2,
  MonitorSmartphone,
  ShoppingCart,
  CalendarDays,
  Globe,
  Smartphone,
  Palette,
} from "lucide-react";
import { useProjectsAnimation } from "@/hooks/useAnimations";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: "01",
    title: "AkadMeet",
    category: "LMS Platform",
    image: "/projects/akadmeet.png",
    description:
      "Platform Learning Management System (LMS) komprehensif yang dirancang untuk mendigitalkan ekosistem akademik kampus.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    features: [
      "Manajemen mata kuliah",
      "Penyerahan tugas real-time",
      "Dashboard analitik",
    ],
    link: "https://github.com/ouchycode/akad-meet-v2",
  },
  {
    id: "02",
    title: "NexLearn",
    category: "EdTech",
    image: "/projects/nex-learn.png",
    description:
      "Platform pembelajaran digital interaktif dengan antarmuka modern.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Katalog kelas interaktif",
      "Tracking progres belajar",
      "Responsive design",
    ],
    link: "https://github.com/ouchycode/nexlearn",
  },
  {
    id: "03",
    title: "KampusTix",
    category: "Event Management",
    image: "/projects/kampustix.png",
    description:
      "Sistem manajemen acara dan distribusi tiket digital untuk kegiatan kampus.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    features: ["Registrasi event", "QR Code validation", "Dashboard panitia"],
    link: "https://github.com/ouchycode/kampustix",
  },
  {
    id: "04",
    title: "KryoShop",
    category: "E-Commerce",
    image: "/projects/kryo-shop.png",
    description:
      "Aplikasi e-commerce modern dengan pengalaman belanja interaktif.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Dynamic product catalog",
      "Real-time cart",
      "Payment integration",
    ],
    link: "https://github.com/ouchycode/toko-online",
  },
  {
    id: "05",
    title: "Crafted by Kevin",
    category: "Modern Portfolio",
    image: "/projects/portfolio.png",
    description:
      "Website portofolio personal interaktif dengan animasi modern.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Responsive design",
      "SEO optimization",
      "Dynamic content structure",
    ],
    link: "https://craftedbykevin.vercel.app/",
  },
  {
    id: "06",
    title: "Movie App Ultimate",
    category: "Web Application",
    image: "/projects/movie-app.png",
    description:
      "Aplikasi pencarian film dengan informasi rating dan sinopsis.",
    tech: ["React", "Tailwind CSS", "API Integration"],
    features: ["Search real-time", "Movie details", "Trending catalog"],
    link: "https://movie-app-ultimate-hlye7zg8p-ouchycodes-projects.vercel.app/",
  },
  {
    id: "07",
    title: "Sistem Pembayaran Iuran",
    category: "Mobile Application",
    image: "/projects/iuran-warga.png",
    description: "Aplikasi pencatatan iuran warga untuk kegiatan komunitas.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    features: [
      "Real-time payment tracking",
      "Dashboard dana",
      "Status pembayaran",
    ],
    link: "https://fkra-app.web.app/",
  },
];

export default function Projects() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useProjectsAnimation(container);

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

  const openProject = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

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

  // Icon watermark untuk efek retro di latar card
  const getWatermarkIcon = (category: string) => {
    const className =
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 text-zinc-900/[0.04] dark:text-white/[0.03] pointer-events-none z-0 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6";
    switch (category) {
      case "LMS Platform":
      case "EdTech":
        return <MonitorSmartphone className={className} strokeWidth={2} />;
      case "E-Commerce":
        return <ShoppingCart className={className} strokeWidth={2} />;
      case "Event Management":
        return <CalendarDays className={className} strokeWidth={2} />;
      case "Modern Portfolio":
        return <Palette className={className} strokeWidth={2} />;
      case "Mobile Application":
        return <Smartphone className={className} strokeWidth={2} />;
      default:
        return <Globe className={className} strokeWidth={2} />;
    }
  };

  return (
    <section
      id="projects"
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
      {/* BACKGROUND PROJECTS - Pixel Dot Pattern */}
      {/* ============================================================ */}
      {/* Gradient overlay dihapus agar pattern pixel tetap tajam/crisp */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] dark:bg-[radial-gradient(#3f3f46_2px,transparent_2px)] [background-size:24px_24px] opacity-70 pointer-events-none transition-colors duration-500 z-0"></div>

      {/* ============================================================ */}
      {/* CONTENT CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 md:gap-6">
        {/* HEADER BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* TITLE CARD */}
          <div className="project-card md:col-span-7 h-full">
            {/* Shadow diseragamkan ke 5px */}
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-col justify-center transition-colors duration-500">
              <FolderGit2
                className="absolute -bottom-16 -right-12 w-80 h-80 text-zinc-900/[0.04] dark:text-white/[0.03] rotate-12 pointer-events-none z-0"
                strokeWidth={2}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-pink-300 dark:bg-pink-600 border-2 border-zinc-900 dark:border-zinc-100 rounded-sm w-fit mb-6 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                  <Sparkles
                    size={14}
                    className="text-pink-900 dark:text-pink-100"
                  />
                  <span className="font-pixel text-[8px] md:text-[10px] font-bold tracking-widest text-pink-950 dark:text-pink-50 uppercase">
                    Showcase
                  </span>
                </div>
                <h2 className="font-pixel text-[12vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-white drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46] transition-colors duration-500">
                  SELECTED <br /> WORKS
                </h2>
              </div>
            </div>
          </div>

          {/* CONTROLS CARD */}
          <div className="project-card md:col-span-5 h-full">
            {/* Shadow diseragamkan ke 5px */}
            <div className="w-full h-full bg-[#fafafa] dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-colors duration-500">
              <div className="flex flex-col gap-3">
                <span className="font-pixel bg-cyan-300 dark:bg-cyan-700 border-2 border-zinc-900 dark:border-zinc-100 text-cyan-950 dark:text-cyan-50 px-3 py-2 rounded-sm text-[8px] md:text-[10px] uppercase font-bold tracking-widest w-fit shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                  Portfolio
                </span>
                <span className="font-pixel text-[8px] md:text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest ml-1 mt-1 transition-colors duration-500">
                  © 2026 Edition
                </span>
              </div>

              {/* Retro Nav Buttons */}
              <div className="flex gap-4 shrink-0 mt-auto md:mt-0">
                <button
                  onClick={() => slide("left")}
                  className="group flex items-center justify-center w-12 h-12 rounded-sm bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(228,228,231,1)] hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 transition-all duration-200 active:translate-y-1 active:translate-x-1 active:shadow-none"
                >
                  <ArrowLeft
                    size={24}
                    strokeWidth={3}
                    className="text-zinc-900 dark:text-zinc-100 group-hover:text-white transition-colors"
                  />
                </button>
                <button
                  onClick={() => slide("right")}
                  className="group flex items-center justify-center w-12 h-12 rounded-sm bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(228,228,231,1)] hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 transition-all duration-200 active:translate-y-1 active:translate-x-1 active:shadow-none"
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

        {/* PROJECT SCROLLER */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0 mt-2">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-6 py-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
          >
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="project-card snap-center shrink-0 w-[85vw] md:w-[420px] h-full min-h-[480px] md:min-h-[500px] z-10"
              >
                {/* Hover effect diperbarui: translate-y-1 dengan shadow Pink pop-up */}
                <div
                  onClick={() => openProject(project)}
                  className="group relative overflow-hidden w-full h-full bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-5 md:p-6 cursor-pointer flex flex-col shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(236,72,153,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(244,114,182,1)] transition-all duration-300 ease-out"
                >
                  {/* WATERMARK ICON */}
                  {getWatermarkIcon(project.category)}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* TOP: ID & ARROW */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-pixel text-[10px] md:text-xs font-bold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 px-3 py-1.5 rounded-sm shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] group-hover:bg-pink-300 dark:group-hover:bg-pink-600 transition-colors duration-300">
                        FIG {project.id}
                      </span>
                      <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 p-2 rounded-sm shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-all duration-300">
                        <ArrowUpRight
                          size={20}
                          strokeWidth={3}
                          className="text-zinc-900 dark:text-zinc-100 group-hover:text-white dark:group-hover:text-zinc-900 transition-transform duration-300 group-hover:rotate-45"
                        />
                      </div>
                    </div>

                    {/* IMAGE PREVIEW (Kotak retro brutalist) */}
                    <div className="relative w-full aspect-video border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-sm overflow-hidden mb-5 bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src={project.image}
                        alt={`Preview of ${project.title}`}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 85vw, 420px"
                      />
                      {/* Overlay tipis agar menyatu dengan border */}
                      <div className="absolute inset-0 border-2 border-zinc-900/10 dark:border-white/10 pointer-events-none"></div>
                    </div>

                    {/* MIDDLE: TECH STACK */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-pixel text-[8px] md:text-[10px] bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-sm uppercase font-bold shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* BOTTOM: TITLE & CATEGORY */}
                    <div className="mt-auto border-t-4 border-zinc-900 dark:border-zinc-100 pt-4">
                      <h3 className="font-pixel text-xl md:text-2xl uppercase tracking-widest leading-tight text-zinc-900 dark:text-zinc-50 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-[8px] md:text-[10px] uppercase mt-3 font-bold text-zinc-500 dark:text-zinc-400 tracking-widest transition-colors duration-300">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProject}
        project={selectedProject}
      />
    </section>
  );
}
