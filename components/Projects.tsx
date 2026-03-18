"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, FolderGit2, ArrowUpRight } from "lucide-react";
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

// Mapping warna cerdas menggunakan 4 warna utama Google
const getGoogleCategoryTheme = (category: string) => {
  if (["LMS Platform", "EdTech", "Web Application"].includes(category)) {
    return {
      bg: "bg-[#E8F0FE] dark:bg-[#1A73E8]/15",
      text: "text-[#1A73E8] dark:text-[#8AB4F8]",
    }; // Blue
  }
  if (["E-Commerce", "Mobile Application"].includes(category)) {
    return {
      bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
      text: "text-[#137333] dark:text-[#81C995]",
    }; // Green
  }
  if (["Event Management"].includes(category)) {
    return {
      bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
      text: "text-[#B06000] dark:text-[#FDE293]",
    }; // Yellow
  }
  return {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#EA4335] dark:text-[#F28B82]",
  }; // Red
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
    const gap = window.innerWidth > 768 ? 24 : 16;
    const cardWidth =
      window.innerWidth > 768 ? 400 + gap : window.innerWidth * 0.85 + gap;
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
        px-0 py-16 md:px-10 md:py-28
        text-[#202124] dark:text-[#E8EAED]
        transition-colors duration-500
      "
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-6 md:gap-10">
        {/* ── Section Header (Konsisten) ──────────────────────────────────────── */}
        <div className="flex flex-col gap-3 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm w-fit">
            <FolderGit2
              size={16}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              Projects
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-extrabold tracking-tight text-3xl md:text-5xl text-[#202124] dark:text-white">
                Karya Pilihan
              </h2>
              <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mt-2">
                Eksplorasi kode dan desain dalam membangun aplikasi web yang
                modern dan responsif.
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
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors"
                />
              </button>
              <button
                onClick={() => slide("right")}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-colors duration-200"
              >
                <ArrowRight
                  size={20}
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors"
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── Project Cards Carousel (Mobile-First Swipeable) ─────────────────────────────── */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
          >
            {projectsData.map((project) => {
              const theme = getGoogleCategoryTheme(project.category);

              return (
                <div
                  key={project.id}
                  className="project-card snap-center shrink-0 w-[85vw] md:w-[400px] flex flex-col"
                >
                  <div
                    onClick={() => openProject(project)}
                    className="group relative w-full h-full rounded-[24px] border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm cursor-pointer flex flex-col p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    {/* 1. Image Thumbnail (Google Play Style) */}
                    <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-5 border border-[#DADCE0] dark:border-[#3C4043] bg-[#F8F9FA] dark:bg-[#202124]">
                      <Image
                        src={project.image}
                        alt={`Preview of ${project.title}`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 85vw, 400px"
                      />
                      {/* Top Right Action Button */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight
                          size={18}
                          className="text-[#202124] dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 px-1">
                      {/* 2. Category Badge & ID */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase ${theme.bg} ${theme.text}`}
                        >
                          {project.category}
                        </span>
                        <span className="text-[12px] font-bold text-[#DADCE0] dark:text-[#5F6368]">
                          {project.id}
                        </span>
                      </div>

                      {/* 3. Title & Description */}
                      <h3 className="font-bold text-xl md:text-[22px] leading-tight text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[14px] md:text-[15px] text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed line-clamp-2 mb-5">
                        {project.description}
                      </p>

                      {/* 4. Tech Stack Chips (Horizontal Scroll on Mobile) */}
                      <div className="mt-auto flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-1">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="shrink-0 inline-flex items-center px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] text-[12px] font-medium text-[#5F6368] dark:text-[#E8EAED]"
                          >
                            {t}
                          </span>
                        ))}
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
