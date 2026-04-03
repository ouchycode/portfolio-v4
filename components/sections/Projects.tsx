"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FolderGit2,
  ArrowUpRight,
  BookOpen,
  Ticket,
  ShoppingCart,
  Palette,
  Globe,
  Smartphone,
} from "lucide-react";
import { useProjectsAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

// Tema warna khas Google (Dipertahankan karena sudah sangat Material Design)
const getGoogleCategoryTheme = (category: string) => {
  if (["LMS Platform", "EdTech", "Web Application"].includes(category))
    return {
      bg: "bg-[#E8F0FE] dark:bg-[#1A73E8]/15",
      text: "text-[#1A73E8] dark:text-[#8AB4F8]",
    };
  if (["E-Commerce", "Mobile Application"].includes(category))
    return {
      bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
      text: "text-[#137333] dark:text-[#81C995]",
    };
  if (["Event Management"].includes(category))
    return {
      bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
      text: "text-[#B06000] dark:text-[#FDE293]",
    };
  return {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#C5221F] dark:text-[#F28B82]",
  };
};

const getProjectIcon = (category: string) => {
  if (["LMS Platform", "EdTech"].includes(category)) return BookOpen;
  if (category === "Event Management") return Ticket;
  if (category === "E-Commerce") return ShoppingCart;
  if (category === "Modern Portfolio") return Palette;
  if (category === "Mobile Application") return Smartphone;
  return Globe;
};

export default function Projects() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();

  // State untuk mengontrol pause saat hover/disentuh
  const [isPaused, setIsPaused] = useState(false);

  useProjectsAnimation(container);

  const baseProjects = t.projects.list;

  // Digandakan 4x agar aman untuk layar monitor ultrawide dan mempermudah kalkulasi loop tak terbatas
  const infiniteProjectsData = [
    ...baseProjects,
    ...baseProjects,
    ...baseProjects,
    ...baseProjects,
  ];

  // Tombol navigasi manual (opsional, tetap dipertahankan jika user ingin melompat cepat)
  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = 32;
    const cardWidth =
      scrollRef.current.offsetWidth > 768
        ? 400
        : scrollRef.current.offsetWidth * 0.85;

    if (direction === "right") {
      scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  // Logic "Running Text" (Marquee) menggunakan requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    const scrollNode = scrollRef.current;

    const loop = () => {
      if (scrollNode && !isPaused) {
        // Kecepatan scroll (1 pixel per frame). Ubah angka ini jika ingin lebih cepat/lambat
        scrollNode.scrollLeft += 1;

        // Reset mulus: jika sudah lewat separuh total lebar konten, kembalikan ke awal
        // Ini menciptakan ilusi running text yang tidak pernah habis
        if (scrollNode.scrollLeft >= scrollNode.scrollWidth / 2) {
          scrollNode.scrollLeft -= scrollNode.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section
      id="projects"
      ref={container}
      className="relative overflow-hidden px-0 py-24 md:py-32 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      <div className="relative z-10 w-full mx-auto flex flex-col gap-8 md:gap-12">
        {/* HEADER */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-3 md:gap-4 px-6 md:px-12 lg:px-20">
          <div className="project-animate inline-flex items-center gap-2 px-4 py-1.5 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm w-fit hover:shadow-md transition-shadow">
            <FolderGit2
              size={16}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-sm font-medium tracking-wide text-[#5F6368] dark:text-[#9AA0A6]">
              {t.projects.badge}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="project-animate font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-tight">
                {t.projects.title}
              </h2>
              <p className="project-animate text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] mt-3 md:mt-4 leading-relaxed">
                {t.projects.subtitle}
              </p>
            </div>

            {/* Navigasi Manual (Hanya muncul di desktop) */}
            <div className="project-animate hidden md:flex gap-3 shrink-0 pb-1">
              <button
                onClick={() => slide("left")}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-all hover:shadow-md active:scale-95"
              >
                <ArrowLeft
                  size={20}
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors"
                />
              </button>
              <button
                onClick={() => slide("right")}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-all hover:shadow-md active:scale-95"
              >
                <ArrowRight
                  size={20}
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors"
                />
              </button>
            </div>
          </div>
        </div>

        {/* CAROUSEL RUNNING TEXT */}
        <div className="relative w-full z-20">
          <div
            ref={scrollRef}
            // Event ini yang membuat running text berhenti saat user fokus melihat/menyentuh
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            // snap-x dan snap-mandatory dihapus agar scroll bebas
            className="flex overflow-x-auto gap-5 sm:gap-6 lg:gap-8 py-8 px-6 md:px-12 lg:px-20 touch-pan-x [&::-webkit-scrollbar]:hidden select-none"
          >
            {infiniteProjectsData.map((project, index) => {
              const theme = getGoogleCategoryTheme(project.category);
              const ProjectIcon = getProjectIcon(project.category);

              return (
                <div
                  key={`${project.id}-${index}`}
                  className="project-animate shrink-0 w-[85vw] sm:w-[360px] md:w-[400px] lg:w-[420px] z-10"
                >
                  <Link
                    href={`/projects/${project.id}`}
                    onClick={() => startLoading(800)}
                    className="group relative w-full h-full flex flex-col p-5 sm:p-6 cursor-pointer transition-all duration-500 rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-2"
                  >
                    {/* Gambar Thumbnail */}
                    <div className="relative w-full aspect-[16/10] rounded-[1.25rem] overflow-hidden mb-6 border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124]">
                      {/* Icon Overlay Kiri Atas */}
                      <div className="absolute top-3 left-3 z-20 p-2.5 bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md rounded-2xl shadow-sm border border-[#DADCE0] dark:border-[#5F6368]">
                        <ProjectIcon
                          className={`w-5 h-5 ${theme.text}`}
                          strokeWidth={2}
                        />
                      </div>

                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 85vw, 420px"
                      />

                      {/* Icon Panah Kanan Atas (Muncul saat hover) */}
                      <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-[#DADCE0] dark:border-[#5F6368] scale-75 group-hover:scale-100">
                        <ArrowUpRight
                          size={20}
                          className="text-[#1A73E8] dark:text-[#8AB4F8]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    {/* Konten Teks */}
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.bg} ${theme.text}`}
                        >
                          {project.category}
                        </span>
                        <span className="text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6] px-3 py-1 bg-[#F1F3F4] dark:bg-[#3C4043] rounded-full border border-[#DADCE0] dark:border-[#5F6368]">
                          {project.id}
                        </span>
                      </div>

                      <h3 className="font-bold text-2xl leading-tight mb-3 text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] line-clamp-2 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Chips Teknologi */}
                      <div className="mt-auto flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-1">
                        {project.tech.map((t: string, idx: number) => (
                          <span
                            key={idx}
                            className="shrink-0 px-3.5 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-transparent text-xs font-semibold text-[#5F6368] dark:text-[#E8EAED] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#202124] dark:hover:text-white transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
