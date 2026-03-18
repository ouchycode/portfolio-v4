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

const typeConfig: Record<
  string,
  { color: string; pill: string; accent: string }
> = {
  Education: {
    color:
      "from-blue-50/60 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/10",
    pill: "border-blue-200 dark:border-blue-700/50 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300",
    accent: "from-blue-400 to-indigo-400",
  },
  Bootcamp: {
    color:
      "from-violet-50/60 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/10",
    pill: "border-violet-200 dark:border-violet-700/50 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300",
    accent: "from-violet-400 to-purple-400",
  },
  Internship: {
    color:
      "from-orange-50/60 to-amber-50/40 dark:from-orange-950/20 dark:to-amber-950/10",
    pill: "border-orange-200 dark:border-orange-700/50 bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300",
    accent: "from-orange-400 to-amber-400",
  },
  Organization: {
    color:
      "from-emerald-50/60 to-teal-50/40 dark:from-emerald-950/20 dark:to-teal-950/10",
    pill: "border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300",
    accent: "from-emerald-400 to-teal-400",
  },
};

const getWatermarkIcon = (type: string) => {
  const cls =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 text-zinc-900/[0.03] dark:text-white/[0.03] pointer-events-none z-0 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6";
  switch (type) {
    case "Education":
      return <GraduationCap className={cls} strokeWidth={1.5} />;
    case "Bootcamp":
      return <Code className={cls} strokeWidth={1.5} />;
    case "Internship":
      return <Briefcase className={cls} strokeWidth={1.5} />;
    case "Organization":
      return <Users className={cls} strokeWidth={1.5} />;
    default:
      return <Zap className={cls} strokeWidth={1.5} />;
  }
};

export default function Experience() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedExp, setSelectedExp] = useState<
    (typeof experiences)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useExperienceAnimation(container);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const preventScroll = (e: WheelEvent) => {
      if (window.innerWidth < 768) e.preventDefault();
    };
    el.addEventListener("wheel", preventScroll, { passive: false });
    return () => el.removeEventListener("wheel", preventScroll);
  }, []);

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = window.innerWidth > 768 ? 20 : 16;
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

  return (
    <section
      id="experience"
      ref={container}
      className="
        relative overflow-hidden
        px-4 py-24 md:px-10 md:py-32
        bg-[#f5f3ef] text-zinc-900
        dark:bg-[#0c0c0e] dark:text-zinc-50
        transition-colors duration-500
      "
    >
      {/* ── Grain Texture ──────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Radial gradient accents ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 left-1/3 w-[600px] h-[400px] rounded-full bg-amber-200/15 dark:bg-amber-700/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-violet-300/12 dark:bg-violet-700/8 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-5 md:gap-6">
        {/* ── Section label ──────────────────────────────────────── */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm w-fit">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
            02 /
          </span>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-300">
            Experience
          </span>
        </div>

        {/* ── Header Bento Row ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Title Card */}
          <div className="exp-row md:col-span-7 h-full">
            <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-[0_2px_30px_0px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_30px_0px_rgba(0,0,0,0.35)] p-7 md:p-10 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_8px_50px_0px_rgba(109,40,217,0.10)] dark:hover:shadow-[0_8px_50px_0px_rgba(109,40,217,0.18)]">
              <Briefcase
                className="absolute -bottom-16 -left-12 w-72 h-72 text-zinc-900/[0.03] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-105"
                strokeWidth={1.5}
              />
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-amber-200 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-950/40 shadow-sm">
                  <Sparkles
                    size={13}
                    className="text-amber-500 dark:text-amber-400"
                  />
                  <span className="text-[10px] md:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-amber-700 dark:text-amber-300">
                    My Career Journey
                  </span>
                </div>
                <h2
                  className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-[14vw] md:text-[6.5vw] lg:text-[5.5vw] text-zinc-900 dark:text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  PATHWAY
                </h2>
              </div>
            </div>
          </div>

          {/* Controls Card */}
          <div className="exp-row md:col-span-5 h-full">
            <div className="w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-colors duration-500">
              <p className="text-sm md:text-[15px] text-zinc-500 dark:text-zinc-400 font-light leading-relaxed md:max-w-[200px]">
                Jejak pengalaman akademis dan teknikal dalam membangun fondasi
                karir.
              </p>

              {/* Scroll Controls */}
              <div className="flex gap-3 shrink-0 mt-auto md:mt-0">
                <button
                  onClick={() => slide("left")}
                  className="group/btn flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm hover:border-violet-300 dark:hover:border-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-all duration-200 active:scale-95"
                >
                  <ArrowLeft
                    size={18}
                    strokeWidth={2}
                    className="text-zinc-500 dark:text-zinc-400 group-hover/btn:text-violet-600 dark:group-hover/btn:text-violet-400 transition-colors"
                  />
                </button>
                <button
                  onClick={() => slide("right")}
                  className="group/btn flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm hover:border-violet-300 dark:hover:border-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-all duration-200 active:scale-95"
                >
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="text-zinc-500 dark:text-zinc-400 group-hover/btn:text-violet-600 dark:group-hover/btn:text-violet-400 transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Experience Cards Carousel ──────────────────────────── */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-5 py-3 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-none md:touch-auto select-none"
          >
            {experiences.map((exp, index) => {
              const cfg = typeConfig[exp.type] ?? typeConfig["Education"];

              return (
                <div
                  key={exp.id}
                  className="exp-row snap-center shrink-0 w-[85vw] md:w-[420px] min-h-[340px] md:min-h-[380px]"
                >
                  <div
                    onClick={() => openDetail(exp)}
                    className={`group relative overflow-hidden w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-br ${cfg.color} backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-6 md:p-8 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_0px_rgba(109,40,217,0.13)] dark:hover:shadow-[0_12px_40px_0px_rgba(109,40,217,0.20)] hover:border-violet-200/60 dark:hover:border-violet-700/40`}
                  >
                    {/* Watermark icon */}
                    {getWatermarkIcon(exp.type)}

                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${cfg.accent} opacity-60`}
                    />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      {/* TOP ROW */}
                      <div className="flex justify-between items-start">
                        {/* Index number */}
                        <span
                          className="text-5xl md:text-6xl font-extrabold leading-none tracking-tighter text-zinc-200 dark:text-zinc-800 group-hover:text-violet-300 dark:group-hover:text-violet-800 transition-colors duration-300 select-none"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </span>

                        {/* Badges */}
                        <div className="flex flex-col items-end gap-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/50 text-[9px] font-mono font-semibold text-zinc-500 dark:text-zinc-400 tracking-widest uppercase backdrop-blur-sm">
                            {exp.period}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9px] font-mono font-bold uppercase tracking-widest ${cfg.pill}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${cfg.accent}`}
                            />
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* BOTTOM */}
                      <div className="mt-auto pt-8 flex flex-col gap-4">
                        <h3
                          className="text-base md:text-lg font-bold uppercase tracking-tight leading-snug text-zinc-800 dark:text-zinc-100 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {exp.role}
                        </h3>

                        <div className="flex items-center justify-between pt-4 border-t border-zinc-200/60 dark:border-zinc-700/50">
                          <span className="text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400 line-clamp-1 pr-3">
                            {exp.company}
                          </span>
                          <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-700/60 backdrop-blur-sm shadow-sm group-hover:bg-violet-600 group-hover:border-violet-600 transition-all duration-300">
                            <ArrowUpRight
                              size={16}
                              strokeWidth={2}
                              className="text-zinc-500 dark:text-zinc-400 group-hover:text-white transition-colors duration-300"
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
