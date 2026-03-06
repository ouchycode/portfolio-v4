"use client";

import { useRef, useState } from "react";
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
      "Platform Learning Management System (LMS) komprehensif yang dirancang untuk mendigitalkan ekosistem akademik kampus. Fitur unggulan mencakup manajemen mata kuliah, penyerahan tugas real-time, serta dashboard analitik untuk dosen dan mahasiswa guna memantau progres pembelajaran secara efisien.",
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
      "Platform pembelajaran digital interaktif yang menyediakan akses materi edukasi modern dengan antarmuka pengguna yang intuitif.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Katalog kelas interaktif",
      "Sistem pelacakan progres belajar",
      "Desain responsif",
    ],
    link: "https://github.com/ouchycode/nexlearn",
  },
  {
    id: "03",
    title: "KampusTix",
    category: "Event Management",
    image: "/projects/kampustix.png",
    description:
      "Sistem manajemen acara dan distribusi tiket digital yang dirancang khusus untuk memfasilitasi event dan kegiatan mahasiswa di lingkungan kampus.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    features: [
      "Registrasi acara dan ticketing",
      "Validasi tiket QR Code",
      "Dashboard panitia penyelenggara",
    ],
    link: "https://github.com/ouchycode/kampustix",
  },
  {
    id: "04",
    title: "KryoShop",
    category: "E-Commerce",
    image: "/projects/kryo-shop.png",
    description:
      "Aplikasi e-commerce modern dengan pengalaman belanja pengguna yang interaktif, cepat, dan dioptimalkan untuk berbagai perangkat.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Katalog produk dinamis",
      "Keranjang belanja real-time",
      "Integrasi gateway pembayaran",
    ],
    link: "https://github.com/ouchycode/toko-online",
  },
  {
    id: "05",
    title: "Crafted by Kevin",
    category: "Modern Portfolio",
    image: "/projects/portfolio.png",
    description:
      "Website portofolio personal interaktif dengan desain UI/UX modern, animasi halus, dan optimasi SEO teknikal untuk menampilkan identitas profesional dan karya pengembangan web.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Desain responsif dengan animasi transisi",
      "Optimasi performa dan SEO (Lighthouse Score tinggi)",
      "Struktur data dinamis untuk manajemen konten",
    ],
    link: "https://craftedbykevin.vercel.app/",
  },
  {
    id: "06",
    title: "Movie App Ultimate",
    category: "Web Application",
    image: "/projects/movie-app.png",
    description:
      "Aplikasi pencarian dan penelusuran film yang memungkinkan pengguna untuk menemukan film-film terbaru, membaca sinopsis, dan melihat rating secara interaktif.",
    tech: ["React", "Tailwind CSS", "API Integration"],
    features: [
      "Pencarian judul film secara real-time",
      "Detail informasi film (sinopsis, rating, rilis)",
      "Katalog film populer dan trending",
    ],
    link: "https://movie-app-ultimate-hlye7zg8p-ouchycodes-projects.vercel.app/",
  },

  {
    id: "07",
    title: "Sistem Pembayaran Iuran Warga",
    category: "Mobile Application",
    image: "/projects/iuran-warga.png",
    description:
      "Aplikasi ini dibuat untuk membantu pencatatan iuran warga dalam rangka kegiatan 17 Agustusan. Dengan antarmuka modern yang mudah digunakan, aplikasi ini sangat cocok untuk panitia RT/RW, pengurus warga, atau komunitas lokal.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    features: [
      "Pencatatan data iuran warga secara real-time",
      "Dashboard rekapitulasi total dana terkumpul",
      "Manajemen status pelunasan dan transparansi pembayaran",
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

    const scrollAmount = window.innerWidth > 768 ? 520 : 340;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic System":
        return "text-indigo-500";
      case "E-Sports Tech":
        return "text-pink-500";
      case "Journal & SEO":
        return "text-amber-500";
      case "AI / ML":
        return "text-purple-500";
      case "Web App":
        return "text-cyan-500";
      default:
        return "text-indigo-500";
    }
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
            <h2
              className="
              project-card
              text-[14vw] md:text-[7vw]
              font-black uppercase
              leading-[0.85] tracking-tight
              "
            >
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
        </div>

        {/* PROJECT SCROLLER */}
        <div
          ref={scrollRef}
          className="
          flex overflow-x-auto
          snap-x snap-mandatory
          border-t border-black dark:border-white
          [&::-webkit-scrollbar]:hidden
          "
        >
          {projectsData.map((project) => {
            const categoryColor = getCategoryColor(project.category);

            return (
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
                {/* HEADER */}
                <div className="flex justify-between items-start font-mono text-xs uppercase opacity-70">
                  <span className="text-indigo-500 group-hover:text-white transition">
                    FIG {project.id}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-indigo-500 group-hover:text-white transition"
                  />
                </div>

                {/* TECH */}
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

                {/* TITLE */}
                <div className="mt-6">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-[0.9]">
                    {project.title}
                  </h3>

                  <p
                    className={`font-mono text-xs uppercase mt-2 transition ${categoryColor} group-hover:text-white`}
                  >
                    {project.category}
                  </p>
                </div>
              </div>
            );
          })}
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
