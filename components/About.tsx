"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAboutAnimation } from "@/hooks/useAnimations";

export default function About() {
  const container = useRef(null);

  useAboutAnimation(container);

  return (
    <section
      id="about"
      ref={container}
      className="
      px-5 py-24 md:px-16 md:py-32
      bg-white text-black
      dark:bg-[#050505] dark:text-white
      "
    >
      {/* MAIN GRID */}
      <div
        className="
        grid grid-cols-1 md:grid-cols-12
        border border-black dark:border-white
        "
      >
        {/* IMAGE */}
        <div
          className="
          about-animate
          md:col-span-5
          border-b md:border-b-0 md:border-r
          border-black dark:border-white
          "
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src="/profile_kevin_hd.png"
              alt="Kevin Ardiansyah"
              fill
              className="object-cover object-center"
              priority
            />

            {/* gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-black/60"></div>

            {/* blur fade bottom */}
            <div
              className="
      pointer-events-none
      absolute bottom-0 left-0 right-0
      h-28
      bg-gradient-to-t
      from-white
      via-white/60
      to-transparent
      dark:from-[#050505]
      dark:via-[#050505]/60
      "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="md:col-span-7 flex flex-col">
          {/* HEADER */}
          <div
            className="
            border-b border-black dark:border-white
            p-6 md:p-10
            "
          >
            <h2
              className="
              about-animate
              text-[14vw] md:text-[8vw] lg:text-[5vw]
              font-black uppercase
              leading-[0.85] tracking-tight
              "
            >
              About
            </h2>

            <div className="about-animate flex items-center gap-3 mt-3 flex-wrap">
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-500">
                [ Persona ]
              </span>

              <span
                className="
                border border-black dark:border-white
                px-2 py-[2px]
                text-[10px]
                font-mono uppercase
                text-indigo-500
                "
              >
                Frontend Engineer
              </span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div
            className="
            border-b border-black dark:border-white
            p-6 md:p-10
            flex flex-col gap-6
            "
          >
            <p className="about-animate text-lg md:text-2xl font-bold uppercase leading-tight">
              Saya <span className="text-indigo-500">Kevin</span>, mahasiswa
              Universitas Yatsi Madani yang fokus membangun antarmuka web yang
              fungsional dan estetik.
            </p>

            <p className="about-animate text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Berbasis di Tangerang, saya fokus pada pengembangan{" "}
              <span className="font-bold text-indigo-500">
                Frontend Ecosystem
              </span>
              . Selain ngoding, saya juga mengeksplorasi desain grafis dan
              branding, serta memiliki ketertarikan pada fotografi dan dunia
              e-sports.
            </p>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-2">
            <div
              className="
              about-animate
              border-r border-black dark:border-white
              p-6 md:p-8
              "
            >
              <span className="font-mono text-[10px] uppercase text-indigo-500 block mb-2">
                Location
              </span>

              <span className="font-black text-lg md:text-xl uppercase">
                Tangerang, ID
              </span>
            </div>

            <div
              className="
              about-animate
              p-6 md:p-8
              "
            >
              <span className="font-mono text-[10px] uppercase text-indigo-500 block mb-2">
                Education
              </span>

              <span className="font-black text-lg md:text-xl uppercase">
                Universitas Yatsi Madani
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
