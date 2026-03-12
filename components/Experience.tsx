"use client";

import { useRef, useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Briefcase,
  GraduationCap,
  Code,
  Users,
  Zap,
} from "lucide-react";
import { useExperienceAnimation } from "@/hooks/useAnimations";
import ExperienceModal from "./ExperienceModal";

const experiences = [
  {
    id: "dbs-2026",
    type: "Bootcamp",
    role: "Full-Stack Dev Student",
    company: "DBS Foundation Coding Camp",
    period: "Feb '26 — Present",
    location: "Jakarta (Remote), ID",
    description:
      "Program beasiswa intensif pengembangan Full-Stack Developer untuk menguasai ekosistem modern web development skala industri.",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    details: [
      "Mempelajari arsitektur aplikasi web modern dan skalabilitas.",
      "Membangun proyek nyata dengan fokus pada best practices coding.",
      "Mengembangkan soft skill esensial seperti produktivitas personal dan kolaborasi tim.",
    ],
  },
  {
    id: "bigger-printing-intern",
    type: "Internship",
    role: "SEO Developer",
    company: "PT Bigger Printing",
    period: "Jan '22 — Mar '22",
    location: "Tangerang, Banten, ID",
    description:
      "Bertanggung jawab dalam mengoptimalkan visibilitas mesin pencari dan peringkat website perusahaan melalui strategi teknis dan analitik.",
    skills: [
      "Search Engine Optimization (SEO)",
      "Web Analytics",
      "Technical SEO",
      "Keyword Research",
    ],
    details: [
      "Melakukan riset kata kunci dan audit teknis website untuk meningkatkan performa pencarian organik.",
      "Menerapkan praktik terbaik SEO on-page pada struktur website dan konten untuk meningkatkan traffic.",
      "Menganalisis performa website dan memastikan situs web ramah terhadap mesin pencari.",
    ],
  },
  {
    id: "uym-esports-org",
    type: "Organization",
    role: "Event Organizer & Core Team",
    company: "UKM E-Sports Universitas Yatsi Madani",
    period: "2025 — Present",
    location: "Tangerang, Banten, ID",
    description:
      "Aktif memanajemen komunitas e-sports kampus dan memimpin penyelengggaraan kompetisi game tingkat universitas.",
    skills: [
      "Event Management",
      "Leadership",
      "Team Coordination",
      "Public Relations",
    ],
    details: [
      "Menjadi panitia penyelenggara utama untuk turnamen kampus 'Yatsafest MLBB' pada Februari 2026.",
      "Mengelola pendaftaran peserta, menyusun jadwal pertandingan, dan mendistribusikan pengumuman resmi.",
      "Mengoordinasikan komunikasi antar tim divisi e-sports untuk memastikan kelancaran operasional acara.",
    ],
  },
  {
    id: "uym-study",
    type: "Education",
    role: "Computer Science Undergrad",
    company: "Universitas Yatsi Madani (UYM)",
    period: "2023 — Present",
    location: "Tangerang, Banten, ID",
    description:
      "Menempuh pendidikan S1 Ilmu Komputer dengan fokus eksplorasi pada pengembangan web, analisis sistem, dan rekayasa perangkat lunak.",
    skills: [
      "Web Development",
      "System Analysis",
      "Database",
      "Frontend Development",
    ],
    details: [
      "Berperan aktif dalam perancangan dan pengembangan aplikasi sistem bimbingan akademik online 'AkadMeet'.",
      "Mempelajari fondasi arsitektur sistem, algoritma, dan konfigurasi jaringan.",
      "Membangun proyek-proyek akademik berbasis teknologi web modern.",
    ],
  },
];

export default function Experience() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedExp, setSelectedExp] = useState<
    (typeof experiences)[0] | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useExperienceAnimation(container);

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

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const gap = window.innerWidth > 768 ? 24 : 16;
    const cardWidth =
      window.innerWidth > 768 ? 420 + gap : window.innerWidth * 0.85 + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const openDetail = (exp: (typeof experiences)[0]) => {
    setSelectedExp(exp);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDetail = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "Education":
        return "bg-blue-300 dark:bg-blue-600 text-blue-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
      case "Bootcamp":
        return "bg-violet-300 dark:bg-violet-600 text-violet-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
      case "Internship":
        return "bg-orange-300 dark:bg-orange-600 text-orange-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
      case "Organization":
        return "bg-emerald-300 dark:bg-emerald-600 text-emerald-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
      default:
        return "bg-zinc-300 dark:bg-zinc-600 text-zinc-950 dark:text-white border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0px_0px_#18181b] dark:shadow-[2px_2px_0px_0px_#e4e4e7]";
    }
  };

  const getWatermarkIcon = (type: string) => {
    const className =
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 text-zinc-900/[0.04] dark:text-white/[0.03] pointer-events-none z-0 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6";
    switch (type) {
      case "Education":
        return <GraduationCap className={className} strokeWidth={2} />;
      case "Bootcamp":
        return <Code className={className} strokeWidth={2} />;
      case "Internship":
        return <Briefcase className={className} strokeWidth={2} />;
      case "Organization":
        return <Users className={className} strokeWidth={2} />;
      default:
        return <Zap className={className} strokeWidth={2} />;
    }
  };

  return (
    <section
      id="experience"
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
      {/* BACKGROUND EXPERIENCE - Pixel Dot Pattern */}
      {/* ============================================================ */}
      {/* Opacity dipertahankan di 70 agar background tidak mendominasi, tapi tetap terlihat jelas pola pixel-nya */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] dark:bg-[radial-gradient(#3f3f46_2px,transparent_2px)] [background-size:24px_24px] opacity-70 pointer-events-none z-0 transition-colors duration-500"></div>

      {/* <REMOVE> Gradient fade dihapus agar efek pixel tidak terpotong blur </REMOVE> */}

      {/* ============================================================ */}
      {/* CONTENT CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 md:gap-6">
        {/* HEADER BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* TITLE CARD (Fokus Utama) */}
          <div className="exp-row md:col-span-7 h-full">
            {/* Shadow diubah menjadi 5px untuk konsistensi Neo-Brutalism */}
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-col justify-center transition-colors duration-500">
              <Briefcase
                className="absolute -bottom-16 -left-12 w-80 h-80 text-zinc-900/[0.04] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0"
                strokeWidth={2}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-300 dark:bg-yellow-600 border-2 border-zinc-900 dark:border-zinc-100 rounded-sm w-fit mb-6 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                  <Sparkles
                    size={14}
                    className="text-yellow-900 dark:text-yellow-100"
                  />
                  <span className="font-pixel text-[8px] md:text-[10px] font-bold tracking-widest text-yellow-950 dark:text-yellow-50 uppercase">
                    My Career Journey
                  </span>
                </div>
                <h2 className="font-pixel text-[12vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-white drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46] transition-colors duration-500">
                  PATHWAY
                </h2>
              </div>
            </div>
          </div>

          {/* CONTROLS CARD (Fokus Sekunder) */}
          <div className="exp-row md:col-span-5 h-full">
            <div className="w-full h-full bg-[#fafafa] dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-colors duration-500">
              {/* Teks diubah ke font-mono agar terasa lebih teknikal dan raw */}
              <p className="font-mono font-bold text-sm md:text-base text-zinc-700 dark:text-zinc-300 md:max-w-[200px] leading-relaxed transition-colors duration-500">
                Jejak pengalaman akademis dan teknikal dalam membangun fondasi
                karir.
              </p>

              {/* Retro Buttons for Scroll */}
              <div className="flex gap-4 shrink-0 mt-auto md:mt-0">
                <button
                  onClick={() => slide("left")}
                  className="group flex items-center justify-center w-12 h-12 rounded-sm bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(228,228,231,1)] hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 dark:hover:text-white transition-all duration-200 active:translate-y-1 active:translate-x-1 active:shadow-none"
                >
                  <ArrowLeft
                    size={24}
                    strokeWidth={3}
                    className="text-zinc-900 dark:text-zinc-100 group-hover:text-white transition-colors"
                  />
                </button>
                <button
                  onClick={() => slide("right")}
                  className="group flex items-center justify-center w-12 h-12 rounded-sm bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(228,228,231,1)] hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 dark:hover:text-white transition-all duration-200 active:translate-y-1 active:translate-x-1 active:shadow-none"
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

        {/* EXPERIENCE LIST */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0 mt-2">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-6 py-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
          >
            {experiences.map((exp, index) => {
              const typeStyle = getTypeStyle(exp.type);

              return (
                <div
                  key={exp.id}
                  className="exp-row snap-center shrink-0 w-[85vw] md:w-[420px] h-full min-h-[340px] md:min-h-[380px] z-10"
                >
                  {/* Hover efek disempurnakan: naik (-translate-y-1) dan shadow berubah violet agar pop-out */}
                  <div
                    onClick={() => openDetail(exp)}
                    className="group relative overflow-hidden w-full h-full bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-8 cursor-pointer flex flex-col justify-between shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(124,58,237,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,1)] transition-all duration-300 ease-out"
                  >
                    {/* WATERMARK ICON */}
                    {getWatermarkIcon(exp.type)}

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      {/* TOP: NUMBER & BADGE */}
                      <div className="flex justify-between items-start">
                        <span className="font-pixel text-4xl md:text-5xl text-zinc-300 dark:text-zinc-800 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors duration-300 drop-shadow-[2px_2px_0_#f4f4f5] dark:drop-shadow-[2px_2px_0_#18181b]">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>

                        <div className="flex flex-col items-end gap-3 text-right">
                          <span className="font-pixel text-[8px] md:text-[10px] font-bold text-zinc-500 dark:text-zinc-400 transition-colors duration-300 bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 px-2 py-1 rounded-sm shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7]">
                            {exp.period}
                          </span>
                          <span
                            className={`px-2 md:px-3 py-1 md:py-1.5 rounded-sm font-pixel text-[8px] md:text-[10px] uppercase font-bold tracking-widest transition-colors duration-300 ${typeStyle}`}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* BOTTOM: ROLE & COMPANY */}
                      <div className="mt-auto pt-8">
                        <h3 className="font-pixel text-lg md:text-xl uppercase tracking-widest leading-relaxed mb-4 text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                          {exp.role}
                        </h3>

                        <div className="flex items-center justify-between border-t-4 border-zinc-900 dark:border-zinc-100 pt-5 transition-colors duration-300">
                          <span className="text-sm md:text-base font-bold text-zinc-700 dark:text-zinc-300 transition-colors duration-300 line-clamp-1">
                            {exp.company}
                          </span>

                          {/* Tombol arrow ini sudah sangat pas shadow brutalisnya */}
                          <div className="relative z-10 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 p-2 md:p-3 rounded-sm group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-all duration-300 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] shrink-0 ml-3">
                            <ArrowUpRight
                              strokeWidth={3}
                              className="w-5 h-5 text-zinc-900 dark:text-white group-hover:text-white dark:group-hover:text-zinc-900 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ExperienceModal
        isOpen={isModalOpen}
        onClose={closeDetail}
        data={selectedExp}
      />
    </section>
  );
}
