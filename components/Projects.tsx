"use client";

import { useRef, useState, useEffect } from "react";
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

  const getWatermarkIcon = (category: string) => {
    const className =
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 text-zinc-900/[0.03] dark:text-white/[0.02] pointer-events-none z-0 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6";
    switch (category) {
      case "LMS Platform":
      case "EdTech":
        return <MonitorSmartphone className={className} strokeWidth={1} />;
      case "E-Commerce":
        return <ShoppingCart className={className} strokeWidth={1} />;
      case "Event Management":
        return <CalendarDays className={className} strokeWidth={1} />;
      case "Modern Portfolio":
        return <Palette className={className} strokeWidth={1} />;
      case "Mobile Application":
        return <Smartphone className={className} strokeWidth={1} />;
      default:
        return <Globe className={className} strokeWidth={1} />;
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
      {/* BACKGROUND PROJECTS */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none z-0 transition-colors duration-500"></div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-[120px] opacity-40 pointer-events-none z-0 -translate-x-1/3 -translate-y-1/3 transition-colors duration-500"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zinc-300 dark:bg-zinc-800/40 rounded-full blur-[120px] opacity-30 pointer-events-none z-0 translate-x-1/3 translate-y-1/3 transition-colors duration-500"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa] dark:from-[#0a0a0a] dark:via-transparent dark:to-[#0a0a0a] opacity-80 pointer-events-none z-0 transition-colors duration-500"></div>

      {/* ============================================================ */}
      {/* CONTENT CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 md:gap-5">
        {/* HEADER BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* TITLE CARD */}
          <div className="project-card md:col-span-7 h-full">
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col justify-center transition-colors duration-500">
              <FolderGit2
                className="absolute -bottom-16 -right-12 w-80 h-80 text-zinc-900/[0.03] dark:text-white/[0.02] rotate-12 pointer-events-none z-0"
                strokeWidth={1.5}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-full w-fit mb-6 border border-zinc-200/80 dark:border-zinc-700/50 transition-colors duration-500">
                  <Sparkles
                    size={14}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                  <span className="text-xs md:text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 transition-colors duration-500">
                    Showcase
                  </span>
                </div>
                <h2 className="text-[12vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-[0.85] tracking-tighter text-zinc-900 dark:text-white transition-colors duration-500">
                  Selected <br /> Works
                </h2>
              </div>
            </div>
          </div>

          {/* CONTROLS CARD */}
          <div className="project-card md:col-span-5 h-full">
            <div className="w-full h-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-colors duration-500">
              <div className="flex flex-col gap-3">
                <span className="bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-300 px-4 py-2 rounded-xl text-[10px] md:text-xs font-mono uppercase font-bold tracking-widest w-fit shadow-sm transition-colors duration-500">
                  Portfolio
                </span>
                <span className="font-mono text-[10px] md:text-xs text-zinc-500 dark:text-zinc-500 font-semibold uppercase tracking-widest ml-1 transition-colors duration-500">
                  © 2026 Edition
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

        {/* PROJECT SCROLLER */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0 mt-2">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-5 py-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
          >
            {projectsData.map((project, index) => (
              // Pembungkus GSAP (.project-card)
              <div
                key={project.id}
                className="project-card snap-center shrink-0 w-[85vw] md:w-[420px] h-full min-h-[360px] md:min-h-[400px] z-10"
              >
                {/* Isi Card dengan Styling Tailwind */}
                <div
                  onClick={() => openProject(project)}
                  className="group relative overflow-hidden w-full h-full bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-8 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-500 ease-out"
                >
                  {/* WATERMARK ICON */}
                  {getWatermarkIcon(project.category)}

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* TOP: ID & ARROW */}
                    <div className="flex justify-between items-start font-mono text-xs uppercase">
                      <span className="font-bold text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700/50">
                        FIG {project.id}
                      </span>
                      <div className="relative z-10 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/80 p-3 rounded-full group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-all duration-300 shadow-sm border border-zinc-200 dark:border-zinc-700/50 group-hover:border-transparent">
                        <ArrowUpRight
                          size={20}
                          className="text-zinc-400 dark:text-zinc-500 group-hover:text-white group-hover:rotate-45 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* MIDDLE: TECH STACK */}
                    <div className="flex flex-wrap gap-2 mt-8">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-700/80 text-zinc-600 dark:text-zinc-300 px-3.5 py-1.5 rounded-xl text-[10px] md:text-xs font-mono uppercase font-bold shadow-sm group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 group-hover:border-indigo-200 dark:group-hover:border-indigo-500/40 transition-colors duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* BOTTOM: TITLE & CATEGORY */}
                    <div className="mt-auto pt-8">
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="font-mono text-[10px] md:text-xs uppercase mt-4 font-bold text-zinc-500 dark:text-zinc-400 tracking-widest border-t border-zinc-100 dark:border-zinc-800/50 pt-4 group-hover:border-indigo-100 dark:group-hover:border-indigo-900/50 transition-colors duration-300">
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
