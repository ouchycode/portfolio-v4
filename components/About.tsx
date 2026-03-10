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
      px-4 py-24 md:px-8 md:py-32
      bg-[#fafafa] text-zinc-900
      dark:bg-[#0a0a0a] dark:text-zinc-50
      "
    >
      {/* BENTO GRID CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto">
        {/* BENTO 1: IMAGE (Span 5 Kolom, Span 3 Baris) */}
        <div
          className="
          about-animate group
          md:col-span-5 md:row-span-3
          relative w-full aspect-[4/5] md:aspect-auto md:h-full
          bg-white dark:bg-[#121212]
          border border-zinc-200/80 dark:border-zinc-800/80
          rounded-[2rem] overflow-hidden
          shadow-sm
          "
        >
          <Image
            src="/profile_kevin_hd.png"
            alt="Kevin Ardiansyah"
            fill
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
            priority
          />

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 dark:opacity-90"></div>
        </div>

        {/* BENTO 2: HEADER (Span 7 Kolom) */}
        <div
          className="
          about-animate
          md:col-span-7
          bg-white dark:bg-[#121212]
          border border-zinc-200/80 dark:border-zinc-800/80
          rounded-[2rem] p-6 md:p-10
          flex flex-col justify-center
          shadow-sm hover:shadow-md transition-shadow duration-500
          "
        >
          <h2
            className="
            text-[12vw] md:text-[5vw] lg:text-[4vw]
            font-black uppercase
            leading-[0.85] tracking-tighter
            mb-6
            "
          >
            About
          </h2>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold">
              [ Persona ]
            </span>
            <span
              className="
              bg-indigo-50 dark:bg-indigo-500/10
              border border-indigo-100 dark:border-indigo-500/20
              text-indigo-600 dark:text-indigo-400
              px-3 py-1.5 rounded-xl
              text-[10px] md:text-xs
              font-mono uppercase font-bold
              "
            >
              Frontend Engineer
            </span>
          </div>
        </div>

        {/* BENTO 3: DESCRIPTION (Span 7 Kolom) */}
        <div
          className="
          about-animate
          md:col-span-7
          bg-white dark:bg-[#121212]
          border border-zinc-200/80 dark:border-zinc-800/80
          rounded-[2rem] p-6 md:p-10
          flex flex-col gap-6
          shadow-sm hover:shadow-md transition-shadow duration-500
          "
        >
          <p className="text-lg md:text-2xl font-bold uppercase leading-tight text-zinc-800 dark:text-zinc-100 tracking-tight">
            Saya{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Kevin</span>,
            mahasiswa Universitas Yatsi Madani yang fokus membangun antarmuka
            web yang fungsional dan estetik.
          </p>

          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
            Berbasis di Tangerang, saya fokus pada pengembangan{" "}
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              Frontend Ecosystem
            </span>
            . Selain ngoding, saya juga mengeksplorasi desain grafis dan
            branding, serta memiliki ketertarikan pada fotografi dan dunia
            e-sports.
          </p>
        </div>

        {/* BENTO 4: LOCATION (Span 3 Kolom) */}
        <div
          className="
          about-animate group
          md:col-span-3
          bg-white dark:bg-[#121212]
          border border-zinc-200/80 dark:border-zinc-800/80
          rounded-[2rem] p-6 md:p-8
          flex flex-col justify-center gap-4
          shadow-sm hover:shadow-md transition-all duration-300
          hover:border-indigo-500/30 dark:hover:border-indigo-500/30
          "
        >
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 w-fit p-3.5 rounded-2xl text-zinc-500 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors duration-300">
            <MapPin size={22} />
          </div>
          <div>
            <span className="font-mono text-[10px] md:text-xs uppercase text-zinc-400 dark:text-zinc-500 block mb-1 font-semibold">
              Location
            </span>
            <span className="font-bold text-sm md:text-base uppercase tracking-tight text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Tangerang, ID
            </span>
          </div>
        </div>

        {/* BENTO 5: EDUCATION (Span 4 Kolom) */}
        <div
          className="
          about-animate group
          md:col-span-4
          bg-white dark:bg-[#121212]
          border border-zinc-200/80 dark:border-zinc-800/80
          rounded-[2rem] p-6 md:p-8
          flex flex-col justify-center gap-4
          shadow-sm hover:shadow-md transition-all duration-300
          hover:border-indigo-500/30 dark:hover:border-indigo-500/30
          "
        >
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 w-fit p-3.5 rounded-2xl text-zinc-500 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors duration-300">
            <GraduationCap size={22} />
          </div>
          <div>
            <span className="font-mono text-[10px] md:text-xs uppercase text-zinc-400 dark:text-zinc-500 block mb-1 font-semibold">
              Education
            </span>
            <span className="font-bold text-sm md:text-base uppercase tracking-tight text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Universitas Yatsi Madani
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
