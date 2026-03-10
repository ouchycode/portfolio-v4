"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
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
    role: "Computer Science Undergraduate",
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

    // Menambahkan gap (24px untuk md:gap-6) ke kalkulasi lebar scroll
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
        return "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
      case "Bootcamp":
        return "bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20";
      case "Internship":
        return "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";
      case "Organization":
        return "bg-purple-50 text-purple-600 border border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20";
      default:
        return "bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700/50";
    }
  };

  return (
    <section
      id="experience"
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
            <h2
              className="
              exp-row
              text-[12vw] md:text-[6vw] lg:text-[5vw]
              font-black uppercase
              leading-[0.85] tracking-tighter
              "
            >
              Pathway
            </h2>
          </div>

          {/* CONTROLS CARD */}
          <div className="md:col-span-5 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="exp-row font-medium text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-[200px] leading-relaxed">
              Jejak pengalaman akademis dan teknikal dalam membangun fondasi
              karir.
            </p>

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

        {/* EXPERIENCE LIST */}
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
            {experiences.map((exp, index) => {
              const typeStyle = getTypeStyle(exp.type);

              return (
                <div
                  key={exp.id}
                  onClick={() => openDetail(exp)}
                  className="
                  group
                  exp-row
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
                  min-h-[320px] md:min-h-[380px]
                  "
                >
                  {/* TOP: NUMBER & BADGE */}
                  <div className="flex justify-between items-start">
                    <span className="font-black text-4xl text-zinc-200 dark:text-zinc-800/80 group-hover:text-indigo-100 dark:group-hover:text-indigo-900/50 transition-colors duration-500">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <div className="flex flex-col items-end gap-2 text-right">
                      <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
                        {exp.period}
                      </span>
                      <span
                        className={`
                        px-3 py-1.5 rounded-full
                        text-[10px] md:text-xs
                        font-mono uppercase font-bold tracking-wide
                        ${typeStyle}
                        `}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM: ROLE & COMPANY */}
                  <div className="mt-auto pt-8">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-4 text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {exp.role}
                    </h3>

                    <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/50 pt-5">
                      <span className="text-sm md:text-base font-semibold text-zinc-600 dark:text-zinc-400">
                        {exp.company}
                      </span>

                      <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 p-2.5 rounded-full group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:border-indigo-600 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-transform duration-300" />
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
