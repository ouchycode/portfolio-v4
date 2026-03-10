"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
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
    title: "Sistem Pembayaran Iuran Warga",
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

    const gap = window.innerWidth > 768 ? 24 : 20; // Menyesuaikan gap (gap-5)
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
      px-4 py-24 md:px-8 md:py-32
      bg-[#fafafa] text-zinc-900
      dark:bg-[#0a0a0a] dark:text-zinc-50
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-5">
        {/* HEADER BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* TITLE CARD */}
          <div className="md:col-span-7 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex items-center">
            <h2 className="project-card text-[12vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-[0.85] tracking-tighter">
              Selected <br /> Works
            </h2>
          </div>

          {/* CONTROLS CARD */}
          <div className="md:col-span-5 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="project-card flex flex-col gap-2">
              <span className="bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-300 px-3.5 py-1.5 rounded-xl text-[10px] md:text-xs font-mono uppercase font-bold tracking-widest w-fit">
                Portfolio
              </span>
              <span className="font-mono text-[10px] md:text-xs text-zinc-500 dark:text-zinc-500 font-semibold uppercase tracking-widest">
                © 2026 Edition
              </span>
            </div>

            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => slide("left")}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300"
              >
                <ArrowLeft
                  size={20}
                  className="text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                />
              </button>

              <button
                onClick={() => slide("right")}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300"
              >
                <ArrowRight
                  size={20}
                  className="text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                />
              </button>
            </div>
          </div>
        </div>

        {/* PROJECT SCROLLER */}
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
            {projectsData.map((project) => (
              <div
                key={project.id}
                onClick={() => openProject(project)}
                className="
                group
                project-card
                snap-center shrink-0
                w-[85vw] md:w-[420px]
                bg-white dark:bg-[#121212]
                border border-zinc-200/80 dark:border-zinc-800/80
                rounded-[2rem] p-6 md:p-8
                cursor-pointer
                flex flex-col justify-between
                shadow-sm hover:shadow-xl hover:shadow-indigo-500/10
                hover:border-indigo-500/30 dark:hover:border-indigo-500/30
                hover:-translate-y-1
                transition-all duration-500 ease-out
                min-h-[360px] md:min-h-[400px]
                "
              >
                {/* TOP: ID & ARROW */}
                <div className="flex justify-between items-start font-mono text-xs uppercase">
                  <span className="font-bold text-zinc-400 dark:text-zinc-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    FIG {project.id}
                  </span>

                  <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-2.5 rounded-full group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:border-indigo-600 transition-all duration-300">
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* MIDDLE: TECH STACK (Lebih rapi pakai style pill) */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                      bg-zinc-50 dark:bg-zinc-800/30
                      border border-zinc-200/50 dark:border-zinc-700/50
                      text-zinc-600 dark:text-zinc-400
                      px-3 py-1.5 rounded-xl
                      text-[10px] md:text-xs
                      font-mono uppercase font-bold
                      group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10
                      group-hover:text-indigo-600 dark:group-hover:text-indigo-400
                      group-hover:border-indigo-200 dark:group-hover:border-indigo-500/20
                      transition-colors duration-300
                      "
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

                  <p className="font-mono text-xs uppercase mt-3 font-semibold text-zinc-500 dark:text-zinc-400 tracking-wide">
                    {project.category}
                  </p>
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
