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

    const cardWidth =
      window.innerWidth > 768 ? 420 + 1 : window.innerWidth * 0.85 + 1;

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
      px-5 py-24 md:px-16 md:py-32
      bg-white text-black
      dark:bg-[#050505] dark:text-white
      "
    >
      <div className="border border-black dark:border-white">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black dark:border-white">
          <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-black dark:border-white p-6 md:p-10">
            <h2 className="project-card text-[14vw] md:text-[7vw] font-black uppercase leading-[0.85] tracking-tight">
              Selected <br /> Works
            </h2>
          </div>

          <div className="md:col-span-5 p-6 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="project-card font-mono text-xs uppercase tracking-widest text-indigo-500">
              [ Portfolio / 2026 ]
            </div>

            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => slide("left")}
                className="group flex items-center justify-center w-10 h-10 border border-black dark:border-white hover:bg-indigo-500 hover:text-white transition"
              >
                <ArrowLeft
                  size={18}
                  className="text-indigo-500 group-hover:text-white transition"
                />
              </button>

              <button
                onClick={() => slide("right")}
                className="group flex items-center justify-center w-10 h-10 border border-black dark:border-white hover:bg-indigo-500 hover:text-white transition"
              >
                <ArrowRight
                  size={18}
                  className="text-indigo-500 group-hover:text-white transition"
                />
              </button>
            </div>
          </div>
        </div>

        {/* PROJECT SCROLLER */}
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
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="
              group
              project-card
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
              <div className="flex justify-between items-start font-mono text-xs uppercase opacity-70">
                <span className="text-indigo-500 group-hover:text-white transition">
                  FIG {project.id}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-indigo-500 group-hover:text-white transition"
                />
              </div>

              <div className="flex flex-wrap gap-2 mt-10">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="
                    border border-black/30 dark:border-white/30
                    px-2 py-1
                    text-[10px]
                    font-mono uppercase
                    group-hover:border-white
                    transition
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-[0.9]">
                  {project.title}
                </h3>

                <p className="font-mono text-xs uppercase mt-2 text-indigo-500 group-hover:text-white transition">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
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
