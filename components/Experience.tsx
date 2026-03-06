"use client";

import { useRef, useState } from "react";
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
      "Aktif memanajemen komunitas e-sports kampus dan memimpin penyelenggaraan kompetisi game tingkat universitas.",
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

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = window.innerWidth > 768 ? 420 : 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Education":
        return "text-emerald-500 border-emerald-500";
      case "Bootcamp":
        return "text-indigo-500 border-indigo-500";
      case "Internship":
        return "text-amber-500 border-amber-500";
      case "Organization":
        return "text-purple-500 border-purple-500";
      default:
        return "text-indigo-500 border-indigo-500";
    }
  };

  return (
    <section
      id="experience"
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
              exp-row
              text-[14vw] md:text-[7vw]
              font-black uppercase
              leading-[0.85] tracking-tight
              "
            >
              Pathway
            </h2>
          </div>

          <div className="md:col-span-5 p-6 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="exp-row font-mono text-xs uppercase tracking-widest text-zinc-500 max-w-xs">
              Jejak pengalaman akademis dan teknikal dalam membangun fondasi
              karir.
            </p>

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

        {/* EXPERIENCE LIST */}
        <div
          ref={scrollRef}
          className="
          flex overflow-x-auto
          snap-x snap-mandatory
          border-t border-black dark:border-white
          [&::-webkit-scrollbar]:hidden
          "
        >
          {experiences.map((exp, index) => {
            const typeColor = getTypeColor(exp.type);

            return (
              <div
                key={exp.id}
                onClick={() => openDetail(exp)}
                className="
                group
                exp-row
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
                {/* TOP */}
                <div className="flex justify-between items-center font-mono text-xs uppercase opacity-70">
                  <span className="text-indigo-500 group-hover:text-white transition">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-2">
                    <span>{exp.period}</span>

                    <span
                      className={`
                      border px-2 py-[2px]
                      text-[10px]
                      font-mono uppercase
                      transition
                      ${typeColor}
                      group-hover:text-white
                      group-hover:border-white
                      `}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* ROLE */}
                <div className="mt-10">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                {/* COMPANY */}
                <div className="flex items-center justify-between mt-10">
                  <span className="text-sm md:text-base font-medium">
                    {exp.company}
                  </span>

                  <ArrowUpRight className="w-5 h-5 text-indigo-500 group-hover:text-white transition" />
                </div>
              </div>
            );
          })}
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
