"use client";

import { useRef, useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Code,
  Users,
  ArrowUpRight,
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

// Gaya berantakan khusus untuk tumpukan vertikal (rotasi dan geser kiri-kanan)
const verticalMessyStyles = [
  "-rotate-1 -translate-x-2",
  "rotate-2 translate-x-3",
  "-rotate-2 translate-x-1",
  "rotate-1 -translate-x-3",
];

const getTypeStyle = (type: string) => {
  switch (type) {
    case "Education":
      return {
        icon: GraduationCap,
        color: "text-[#1A73E8] dark:text-[#8AB4F8]",
      };
    case "Bootcamp":
      return { icon: Code, color: "text-[#34A853] dark:text-[#81C995]" };
    case "Organization":
      return { icon: Users, color: "text-[#FABB05] dark:text-[#FDE293]" };
    case "Internship":
      return { icon: Briefcase, color: "text-[#EA4335] dark:text-[#F28B82]" };
    default:
      return { icon: Briefcase, color: "text-[#5F6368] dark:text-[#9AA0A6]" };
  }
};

export default function Experience() {
  const container = useRef<HTMLElement>(null);
  const [selectedExp, setSelectedExp] = useState<
    (typeof experiences)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useExperienceAnimation(container);

  const openDetail = (exp: (typeof experiences)[0]) => {
    setSelectedExp(exp);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDetail = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="experience"
      ref={container}
      className="
        relative overflow-hidden
        px-4 py-16 md:px-10 md:py-28
        text-[#202124] dark:text-[#E8EAED]
        transition-colors duration-500
      "
    >
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* ── Section Header ──────────────────────────────────────── */}
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm w-fit">
            <Briefcase
              size={16}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              Experience
            </span>
          </div>
          <h2 className="font-extrabold tracking-tight text-3xl md:text-5xl text-[#202124] dark:text-white">
            Perjalanan Karir
          </h2>
          <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mt-1">
            Jejak langkah akademis dan profesional dalam membangun fondasi
            keahlian pengembangan web.
          </p>
        </div>

        {/* ── Vertical Cards (Messy Style) ──────────────────────────── */}
        <div className="flex flex-col gap-8 md:gap-10 pt-6">
          {experiences.map((exp, index) => {
            const { icon: Icon, color } = getTypeStyle(exp.type);
            const currentMessyStyle =
              verticalMessyStyles[index % verticalMessyStyles.length];

            return (
              <div
                key={exp.id}
                className={`w-full transition-all duration-500 hover:z-50 ${currentMessyStyle}`}
              >
                <div
                  onClick={() => openDetail(exp)}
                  className="
                    group relative w-full cursor-pointer transition-all duration-300 flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 p-6 md:p-8
                    rounded-[24px] border border-white/60 dark:border-[#3C4043] 
                    bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md 
                    shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] 
                    hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)]
                  "
                >
                  {/* --- ICON MELAYANG DI KARTU --- */}
                  <div className="absolute -top-4 -left-3 md:-top-5 md:-left-5 z-20 p-2.5 md:p-3 bg-white dark:bg-[#303134] rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.4)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm -rotate-6 transition-transform duration-300 group-hover:rotate-0">
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${color}`} />
                  </div>

                  {/* Konten Utama */}
                  <div className="flex-1 flex flex-col pt-1 md:pt-0 md:pl-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-base font-medium text-[#1A73E8] dark:text-[#8AB4F8] mb-3">
                      {exp.company} • {exp.type}
                    </p>

                    <p className="text-sm md:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed line-clamp-2 md:line-clamp-none mb-5">
                      {exp.description}
                    </p>

                    {/* Skills Chips */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-md bg-[#F8F9FA] dark:bg-[#202124] border border-[#DADCE0] dark:border-[#5F6368] text-xs font-medium text-[#3C4043] dark:text-[#E8EAED]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ikon Panah Kanan (Hanya Desktop) */}
                  <div className="hidden sm:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-transparent group-hover:bg-[#E8F0FE] dark:group-hover:bg-[#1A73E8]/15 text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
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
