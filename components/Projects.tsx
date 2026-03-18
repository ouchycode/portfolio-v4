"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
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

const getGoogleCategoryTheme = (category: string) => {
  if (["LMS Platform", "EdTech", "Web Application"].includes(category)) {
    return {
      bg: "bg-[#E8F0FE] dark:bg-[#1A73E8]/15",
      text: "text-[#1A73E8] dark:text-[#8AB4F8]",
    };
  }
  if (["E-Commerce", "Mobile Application"].includes(category)) {
    return {
      bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
      text: "text-[#137333] dark:text-[#81C995]",
    };
  }
  if (["Event Management"].includes(category)) {
    return {
      bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
      text: "text-[#B06000] dark:text-[#FDE293]",
    };
  }
  return {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#C5221F] dark:text-[#F28B82]",
  };
};

// Fungsi helper baru untuk menentukan ikon berdasarkan kategori
const getProjectIcon = (category: string) => {
  if (["LMS Platform", "EdTech"].includes(category)) return BookOpen;
  if (category === "Event Management") return Ticket;
  if (category === "E-Commerce") return ShoppingCart;
  if (category === "Modern Portfolio") return Palette;
  if (category === "Mobile Application") return Smartphone;
  return Globe; // Default icon
};

export default function Projects() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  useProjectsAnimation(container);

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = 16;
    const cardWidth = scrollRef.current.offsetWidth * 0.85;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    scrollRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused) {
      interval = setInterval(() => {
        slide("right");
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused]);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIsPaused(true);
  };

  const closeProject = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsPaused(false);
  };

  return (
    <section
      id="projects"
      ref={container}
      className="relative overflow-hidden px-0 py-16 md:px-10 md:py-28 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="relative z-10 flex flex-col gap-3 px-6 md:px-0">
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
              <h2 className="font-extrabold tracking-tight text-3xl md:text-5xl">
                Karya Pilihan
              </h2>
              <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mt-2">
                Eksplorasi kode dan desain dalam membangun aplikasi web yang
                modern dan responsif.
              </p>
            </div>

            <div className="hidden md:flex gap-3 shrink-0">
              <button
                onClick={() => slide("left")}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-colors"
              >
                <ArrowLeft
                  size={20}
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8]"
                />
              </button>
              <button
                onClick={() => slide("right")}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] transition-colors"
              >
                <ArrowRight
                  size={20}
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8]"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full z-20">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="
              flex overflow-x-auto gap-4 md:gap-6 
              pb-12 pt-6 px-6 md:px-0
              snap-x snap-mandatory 
              scroll-smooth
              touch-pan-x
              [&::-webkit-scrollbar]:hidden 
              select-none
            "
          >
            {projectsData.map((project) => {
              const theme = getGoogleCategoryTheme(project.category);
              const ProjectIcon = getProjectIcon(project.category);

              return (
                <div
                  key={project.id}
                  className="snap-center shrink-0 w-[85vw] md:w-[400px] flex flex-col"
                >
                  <div
                    onClick={() => openProject(project)}
                    className="
                      group relative w-full h-full flex flex-col p-4 md:p-5 cursor-pointer transition-all duration-300
                      rounded-[24px] border border-white/60 dark:border-[#3C4043] 
                      bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md 
                      shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] 
                      hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)]
                    "
                  >
                    {/* --- ICON MELAYANG DI KARTU --- */}
                    <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 z-20 p-2.5 bg-white dark:bg-[#303134] rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.4)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm -rotate-6 transition-transform duration-300 group-hover:rotate-0">
                      <ProjectIcon
                        className={`w-5 h-5 md:w-6 md:h-6 ${theme.text}`}
                      />
                    </div>

                    <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-5 border border-[#DADCE0] dark:border-[#3C4043] bg-[#F8F9FA] dark:bg-[#202124]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 85vw, 400px"
                      />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight
                          size={18}
                          className="text-[#202124] dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 px-1">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase ${theme.bg} ${theme.text}`}
                        >
                          {project.category}
                        </span>
                        <span className="text-[12px] font-bold text-[#DADCE0] dark:text-[#5F6368]">
                          {project.id}
                        </span>
                      </div>

                      <h3 className="font-bold text-xl md:text-[22px] leading-tight mb-2 group-hover:text-[#1A73E8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[14px] text-[#5F6368] dark:text-[#9AA0A6] line-clamp-2 mb-5">
                        {project.description}
                      </p>

                      <div className="mt-auto flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-1">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="shrink-0 px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] text-[12px] font-medium text-[#5F6368] dark:text-[#E8EAED]"
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
