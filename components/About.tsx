"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAboutAnimation } from "@/hooks/useAnimations";
import { MapPin, GraduationCap } from "lucide-react";

export default function About() {
  const container = useRef(null);

  useAboutAnimation(container);

  return (
    <section
      id="about"
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
      {/* BACKGROUND ABOUT */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none z-0 transition-colors duration-500"></div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-[120px] opacity-50 pointer-events-none z-0 translate-x-1/3 -translate-y-1/3 transition-colors duration-500"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-300 dark:bg-zinc-800/40 rounded-full blur-[120px] opacity-40 pointer-events-none z-0 -translate-x-1/3 translate-y-1/3 transition-colors duration-500"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa] dark:from-[#0a0a0a] dark:via-transparent dark:to-[#0a0a0a] opacity-80 pointer-events-none z-0 transition-colors duration-500"></div>

      {/* ============================================================ */}
      {/* BENTO GRID CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto">
        {/* BENTO 1: IMAGE (Sekunder) */}
        <div className="about-animate md:col-span-5 md:row-span-3 h-full">
          <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2rem] overflow-hidden shadow-sm group transition-all duration-500">
            <Image
              src="/profile_kevin_hd.png"
              alt="Kevin Ardiansyah"
              fill
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 dark:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* BENTO 2: HEADER (Fokus Utama - Kontras Tinggi) */}
        <div className="about-animate md:col-span-7 h-full">
          <div className="w-full h-full bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 rounded-[2rem] p-6 md:p-10 flex flex-col justify-center shadow-sm hover:shadow-md transition-all duration-500">
            <h2 className="text-[12vw] md:text-[5vw] lg:text-[4vw] font-black uppercase leading-[0.85] tracking-tighter mb-6 text-zinc-900 dark:text-white transition-colors duration-500">
              About
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold transition-colors duration-500">
                [ Persona ]
              </span>
              <span className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-xl text-[10px] md:text-xs font-mono uppercase font-bold transition-colors duration-500">
                Frontend Engineer
              </span>
            </div>
          </div>
        </div>

        {/* BENTO 3: DESCRIPTION (Fokus Sekunder - Meredup) */}
        <div className="about-animate md:col-span-7 h-full">
          <div className="w-full h-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2rem] p-6 md:p-10 flex flex-col gap-6 shadow-sm hover:shadow-md transition-all duration-500">
            <p className="text-lg md:text-2xl font-bold uppercase leading-tight text-zinc-800 dark:text-zinc-200 tracking-tight transition-colors duration-500">
              Saya{" "}
              <span className="text-indigo-600 dark:text-indigo-400 transition-colors duration-500">
                Kevin
              </span>
              , mahasiswa Universitas Yatsi Madani yang fokus membangun
              antarmuka web yang fungsional dan estetik.
            </p>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium transition-colors duration-500">
              Berbasis di Tangerang, saya fokus pada pengembangan{" "}
              <span className="text-indigo-700 dark:text-indigo-300 font-bold bg-indigo-100/50 dark:bg-indigo-900/30 border border-indigo-200/50 dark:border-indigo-800/50 px-2 py-0.5 md:px-2.5 md:py-1 rounded-md md:rounded-lg transition-colors inline-block mt-1">
                Frontend Ecosystem
              </span>
              . Selain ngoding, saya juga mengeksplorasi desain grafis dan
              branding, serta memiliki ketertarikan pada fotografi dan dunia
              e-sports.
            </p>
          </div>
        </div>

        {/* BENTO 4: LOCATION (Aksen - Indigo Theme) */}
        <div className="about-animate md:col-span-3 h-full">
          <div className="w-full h-full group bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/50 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center gap-4 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-indigo-100/80 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800/80 w-fit p-3.5 rounded-2xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <MapPin size={22} />
            </div>
            <div>
              <span className="font-mono text-[10px] md:text-xs uppercase text-indigo-800 dark:text-indigo-200 block mb-1 font-bold tracking-wider transition-colors duration-500">
                Location
              </span>
              <span className="font-bold text-sm md:text-base uppercase tracking-tight text-indigo-950 dark:text-indigo-50 transition-colors duration-500">
                Tangerang, ID
              </span>
            </div>
          </div>
        </div>

        {/* BENTO 5: EDUCATION (Fokus Sekunder - Sama seperti Deskripsi) */}
        <div className="about-animate md:col-span-4 h-full">
          <div className="w-full h-full group bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center gap-4 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50 w-fit p-3.5 rounded-2xl text-zinc-500 dark:text-zinc-400 group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300 shadow-sm">
              <GraduationCap size={22} />
            </div>
            <div>
              <span className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-400 block mb-1 font-bold tracking-wider transition-colors duration-500">
                Education
              </span>
              <span className="font-bold text-sm md:text-base uppercase tracking-tight text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-500">
                Universitas Yatsi Madani
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
