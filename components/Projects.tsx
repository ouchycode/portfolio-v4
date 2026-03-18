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

const categoryConfig: Record<string, { accent: string; pill: string }> = {
  "LMS Platform": {
    accent: "from-blue-400 to-cyan-400",
    pill: "border-blue-200 dark:border-blue-700/50 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300",
  },
  EdTech: {
    accent: "from-cyan-400 to-teal-400",
    pill: "border-cyan-200 dark:border-cyan-700/50 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300",
  },
  "Event Management": {
    accent: "from-amber-400 to-orange-400",
    pill: "border-amber-200 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300",
  },
  "E-Commerce": {
    accent: "from-pink-400 to-rose-400",
    pill: "border-pink-200 dark:border-pink-700/50 bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300",
  },
  "Modern Portfolio": {
    accent: "from-violet-400 to-purple-400",
    pill: "border-violet-200 dark:border-violet-700/50 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300",
  },
  "Web Application": {
    accent: "from-emerald-400 to-green-400",
    pill: "border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300",
  },
  "Mobile Application": {
    accent: "from-indigo-400 to-blue-400",
    pill: "border-indigo-200 dark:border-indigo-700/50 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300",
  },
};

const getWatermarkIcon = (category: string) => {
  const cls =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 text-zinc-900/[0.03] dark:text-white/[0.03] pointer-events-none z-0 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6";
  switch (category) {
    case "LMS Platform":
    case "EdTech":
      return <MonitorSmartphone className={cls} strokeWidth={1.5} />;
    case "E-Commerce":
      return <ShoppingCart className={cls} strokeWidth={1.5} />;
    case "Event Management":
      return <CalendarDays className={cls} strokeWidth={1.5} />;
    case "Modern Portfolio":
      return <Palette className={cls} strokeWidth={1.5} />;
    case "Mobile Application":
      return <Smartphone className={cls} strokeWidth={1.5} />;
    default:
      return <Globe className={cls} strokeWidth={1.5} />;
  }
};

export default function Projects() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useProjectsAnimation(container);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const preventScroll = (e: WheelEvent) => {
      if (window.innerWidth < 768) e.preventDefault();
    };
    el.addEventListener("wheel", preventScroll, { passive: false });
    return () => el.removeEventListener("wheel", preventScroll);
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
    const gap = window.innerWidth > 768 ? 20 : 16;
    const cardWidth =
      window.innerWidth > 768 ? 420 + gap : window.innerWidth * 0.85 + gap;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
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
        <div className="absolute -top-40 right-1/4 w-[600px] h-[500px] rounded-full bg-pink-200/15 dark:bg-pink-800/8 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-violet-300/12 dark:bg-violet-700/8 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-5 md:gap-6">
        {/* ── Section label ──────────────────────────────────────── */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm w-fit">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
            03 /
          </span>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-300">
            Projects
          </span>
        </div>

        {/* ── Header Bento Row ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Title Card */}
          <div className="project-card md:col-span-7 h-full">
            <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-[0_2px_30px_0px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_30px_0px_rgba(0,0,0,0.35)] p-7 md:p-10 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_8px_50px_0px_rgba(236,72,153,0.10)] dark:hover:shadow-[0_8px_50px_0px_rgba(236,72,153,0.16)]">
              <FolderGit2
                className="absolute -bottom-16 -right-12 w-72 h-72 text-zinc-900/[0.03] dark:text-white/[0.03] rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-105"
                strokeWidth={1.5}
              />
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-pink-200 dark:border-pink-700/50 bg-pink-50 dark:bg-pink-950/40 shadow-sm">
                  <Sparkles
                    size={13}
                    className="text-pink-500 dark:text-pink-400"
                  />
                  <span className="text-[10px] md:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-pink-700 dark:text-pink-300">
                    Showcase
                  </span>
                </div>
                <h2
                  className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-[14vw] md:text-[6.5vw] lg:text-[5.5vw] text-zinc-900 dark:text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  SELECTED
                  <br />
                  WORKS
                </h2>
              </div>
            </div>
          </div>

          {/* Controls Card */}
          <div className="project-card md:col-span-5 h-full">
            <div className="w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-7 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-colors duration-500">
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-pink-200 dark:border-pink-700/50 bg-pink-50 dark:bg-pink-950/40 text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-pink-700 dark:text-pink-300 w-fit shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  Portfolio
                </span>
                <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] font-semibold ml-0.5">
                  © 2026 Edition
                </span>
              </div>

              {/* Scroll Controls */}
              <div className="flex gap-3 shrink-0 mt-auto md:mt-0">
                <button
                  onClick={() => slide("left")}
                  className="group/btn flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm hover:border-pink-300 dark:hover:border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/40 transition-all duration-200 active:scale-95"
                >
                  <ArrowLeft
                    size={18}
                    strokeWidth={2}
                    className="text-zinc-500 dark:text-zinc-400 group-hover/btn:text-pink-600 dark:group-hover/btn:text-pink-400 transition-colors"
                  />
                </button>
                <button
                  onClick={() => slide("right")}
                  className="group/btn flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm hover:border-pink-300 dark:hover:border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/40 transition-all duration-200 active:scale-95"
                >
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="text-zinc-500 dark:text-zinc-400 group-hover/btn:text-pink-600 dark:group-hover/btn:text-pink-400 transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Project Cards Carousel ─────────────────────────────── */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-5 py-3 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
          >
            {projectsData.map((project) => {
              const cfg =
                categoryConfig[project.category] ??
                categoryConfig["Web Application"];

              return (
                <div
                  key={project.id}
                  className="project-card snap-center shrink-0 w-[85vw] md:w-[420px] min-h-[480px] md:min-h-[500px]"
                >
                  <div
                    onClick={() => openProject(project)}
                    className="group relative overflow-hidden w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/65 dark:bg-zinc-900/55 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-5 md:p-6 cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_0px_rgba(236,72,153,0.13)] dark:hover:shadow-[0_16px_48px_0px_rgba(236,72,153,0.18)] hover:border-pink-200/60 dark:hover:border-pink-700/40"
                  >
                    {/* Top accent line per category */}
                    <div
                      className={`absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${cfg.accent} opacity-60`}
                    />

                    {/* Watermark icon */}
                    {getWatermarkIcon(project.category)}

                    <div className="relative z-10 flex flex-col h-full">
                      {/* TOP ROW: ID badge + arrow */}
                      <div className="flex justify-between items-center mb-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[9px] font-mono font-semibold uppercase tracking-widest ${cfg.pill} shadow-sm`}
                        >
                          FIG {project.id}
                        </span>
                        <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-700/60 backdrop-blur-sm shadow-sm group-hover:bg-pink-500 group-hover:border-pink-500 transition-all duration-300">
                          <ArrowUpRight
                            size={16}
                            strokeWidth={2}
                            className="text-zinc-500 dark:text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* IMAGE PREVIEW */}
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 border border-zinc-200/60 dark:border-zinc-700/40 bg-zinc-100 dark:bg-zinc-800 shadow-sm">
                        <Image
                          src={project.image}
                          alt={`Preview of ${project.title}`}
                          fill
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 85vw, 420px"
                        />
                        {/* Subtle gradient over image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                      </div>

                      {/* TECH STACK */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg border border-zinc-200/80 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/50 text-[8px] md:text-[9px] font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest backdrop-blur-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* TITLE & CATEGORY */}
                      <div className="mt-auto pt-4 border-t border-zinc-200/60 dark:border-zinc-700/40">
                        <h3
                          className="font-extrabold text-xl md:text-2xl uppercase tracking-tight leading-tight text-zinc-800 dark:text-zinc-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300 line-clamp-2"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] mt-2 text-zinc-400 dark:text-zinc-500">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
