"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAboutAnimation } from "@/hooks/useAnimations";
import { MapPin, GraduationCap } from "lucide-react";

export default function About() {
  // Ditambahkan type HTMLElement agar konsisten dengan Hero dan aman di TS
  const container = useRef<HTMLElement>(null);

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
      z-10
      "
    >
      {/* ============================================================ */}
      {/* BACKGROUND ABOUT - Pixel Dot Pattern */}
      {/* ============================================================ */}
      {/* Dibiarkan opacity 70 agar tidak terlalu ramai tapi tetap crisp */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] dark:bg-[radial-gradient(#3f3f46_2px,transparent_2px)] [background-size:24px_24px] opacity-70 pointer-events-none transition-colors duration-500 z-0"></div>

      {/* <REMOVE> Gradient Overlay dihapus agar tidak membuat pixel pattern blur. Kita ingin raw/crisp aesthetic. </REMOVE> */}

      {/* ============================================================ */}
      {/* BENTO GRID CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
        {/* BENTO 1: IMAGE (Foto Profil) */}
        <div className="about-animate md:col-span-5 md:row-span-3 h-full">
          {/* Shadow dipertebal sikit, hover shadow pakai warna red biar pop */}
          <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full bg-white dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md overflow-hidden shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] group transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(239,68,68,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(248,113,113,1)]">
            <Image
              src="/profile_kevin_hd.png" // Pastikan gambar ada di /public
              alt="Kevin Ardiansyah"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
              priority
            />
            {/* Overlay bayangan ala retro diperhalus */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* BENTO 2: HEADER (Fokus Utama) */}
        <div className="about-animate md:col-span-7 h-full">
          <div className="w-full h-full bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 flex flex-col justify-center shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] transition-all duration-300">
            <h2 className="font-pixel text-[12vw] md:text-[5vw] lg:text-[4.5vw] font-black uppercase leading-none tracking-tighter mb-6 text-zinc-900 dark:text-white transition-colors duration-500 drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46]">
              ABOUT
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-pixel text-[10px] md:text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
                [ PERSONA ]
              </span>
              {/* Badge persona teksnya diperbesar sedikit (text-xs) biar jelas */}
              <span className="font-pixel bg-violet-200 dark:bg-violet-900/50 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 px-3 py-2 rounded-sm text-xs uppercase font-bold tracking-widest shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] dark:shadow-[2px_2px_0px_0px_rgba(228,228,231,1)]">
                Frontend Engineer
              </span>
            </div>
          </div>
        </div>

        {/* BENTO 3: DESCRIPTION (Teks Standar + Highlight Pixel) */}
        <div className="about-animate md:col-span-7 h-full">
          <div className="w-full h-full bg-[#fafafa] dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 flex flex-col gap-6 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] transition-all duration-300">
            {/*font-sans danti font-mono (atau serif) biar raw tapi tetap enak dibaca */}
            <p className="font-mono text-lg md:text-2xl font-bold uppercase leading-relaxed text-zinc-800 dark:text-zinc-200 tracking-tight transition-colors duration-500">
              Saya {/* Highlight Kevin dipertebal sedikit px-nya */}
              <span className="font-pixel text-[14px] md:text-[18px] bg-yellow-300 dark:bg-yellow-600 border-2 border-zinc-900 dark:border-zinc-100 px-3 py-1.5 mx-1 rounded-sm shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:shadow-[3px_3px_0px_0px_rgba(228,228,231,1)] text-zinc-900 dark:text-white inline-block -translate-y-1">
                Kevin
              </span>
              , mahasiswa Universitas Yatsi Madani yang fokus membangun
              antarmuka web yang fungsional dan estetik.
            </p>
            {/* Deskripsi sekunder teksnya font-semibold agar lebih kuat */}
            <p className="text-sm md:text-[15px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-semibold transition-colors duration-500">
              Berbasis di Tangerang, saya fokus pada pengembangan{" "}
              <span className="font-pixel text-[10px] md:text-xs text-indigo-900 dark:text-indigo-100 bg-indigo-200 dark:bg-indigo-900 border-2 border-zinc-900 dark:border-zinc-100 px-2.5 py-1.5 rounded-sm shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] inline-block mx-1 mt-1 mb-1 uppercase tracking-widest">
                Frontend Ecosystem
              </span>
              . Selain ngoding, saya juga mengeksplorasi desain grafis dan
              branding, serta memiliki ketertarikan pada fotografi dan dunia
              e-sports.
            </p>
          </div>
        </div>

        {/* BENTO 4: LOCATION (Tema Merah Retro) */}
        <div className="about-animate md:col-span-3 h-full">
          {/* Hover shadow pakai warna red biar pop */}
          <div className="w-full h-full group bg-red-100 dark:bg-red-950/40 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-8 flex flex-col justify-center gap-4 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(239,68,68,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(248,113,113,1)] transition-all duration-300">
            <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 w-fit p-3.5 rounded-sm text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] dark:shadow-[2px_2px_0px_0px_rgba(228,228,231,1)]">
              <MapPin size={24} strokeWidth={2.5} />
            </div>
            <div className="mt-2">
              <span className="font-pixel text-[8px] md:text-[10px] uppercase text-zinc-600 dark:text-zinc-400 block mb-2 font-bold tracking-widest">
                Location
              </span>
              <span className="font-pixel font-bold text-xs md:text-sm uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                Tangerang, ID
              </span>
            </div>
          </div>
        </div>

        {/* BENTO 5: EDUCATION (Tema Biru Retro) */}
        <div className="about-animate md:col-span-4 h-full">
          {/* Hover shadow pakai warna blue biar pop */}
          <div className="w-full h-full group bg-blue-100 dark:bg-blue-950/40 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-8 flex flex-col justify-center gap-4 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(96,165,250,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(129,140,248,1)] transition-all duration-300">
            <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 w-fit p-3.5 rounded-sm text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] dark:shadow-[2px_2px_0px_0px_rgba(228,228,231,1)]">
              <GraduationCap size={24} strokeWidth={2.5} />
            </div>
            <div className="mt-2">
              <span className="font-pixel text-[8px] md:text-[10px] uppercase text-zinc-600 dark:text-zinc-400 block mb-2 font-bold tracking-widest">
                Education
              </span>
              <span className="font-pixel font-bold text-xs md:text-sm uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                Univ. Yatsi Madani
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
