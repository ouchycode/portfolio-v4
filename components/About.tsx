"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAboutAnimation } from "@/hooks/useAnimations";
import { User, Code2, GraduationCap, Camera, Gamepad2 } from "lucide-react";

export default function About() {
  const container = useRef<HTMLElement>(null);

  useAboutAnimation(container);

  return (
    <section
      id="about"
      ref={container}
      className="
        relative overflow-hidden
        px-4 py-16 md:px-10 md:py-28
        text-[#202124] dark:text-[#E8EAED]
        transition-colors duration-500
      "
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* ── Section Header ──────────────────────────────────────── */}
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm w-fit">
            <User size={16} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              About Me
            </span>
          </div>
          <h2 className="font-extrabold tracking-tight text-3xl md:text-5xl text-[#202124] dark:text-white">
            Mengenal Lebih Dekat
          </h2>
        </div>

        {/* ── Content Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Avatar Card (Dengan Floating Icons Statis & Strong Shadow) */}
          <div className="about-animate md:col-span-4 relative">
            {/* Floating Icon 1: Camera */}
            <div className="absolute -top-3 -left-2 md:-top-4 md:-left-6 z-20 p-2 md:p-3 bg-white dark:bg-[#303134] rounded-lg md:rounded-xl shadow-[0_15px_30px_rgba(26,115,232,0.15)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm -rotate-6">
              <Camera className="w-5 h-5 md:w-6 md:h-6 text-[#1A73E8] dark:text-[#8AB4F8]" />
            </div>

            {/* Floating Icon 2: Gamepad */}
            <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-5 z-20 p-2.5 md:p-3 bg-white dark:bg-[#303134] rounded-lg md:rounded-xl shadow-[0_15px_30px_rgba(234,67,53,0.15)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm rotate-6">
              <Gamepad2 className="w-5 h-5 md:w-6 md:h-6 text-[#EA4335] dark:text-[#F28B82]" />
            </div>

            {/* Main Avatar Image */}
            <div className="relative w-full aspect-square md:aspect-auto md:h-full rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white dark:bg-[#303134] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-500 group">
              <Image
                src="/profile_kevin_hd.png"
                alt="Kevin Ardiansyah"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-sm border border-white/30 shadow-sm">
                  Kevin Ardiansyah
                </span>
              </div>
            </div>
          </div>

          {/* Info Card (Dengan Strong Shadow & Hover) */}
          <div className="about-animate md:col-span-8 flex flex-col gap-5">
            <div className="w-full rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-300 p-6 md:p-10 flex flex-col justify-center h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-md bg-[#E8F0FE] dark:bg-[#1A73E8]/15 text-[#1A73E8] dark:text-[#8AB4F8] w-fit">
                <Code2 size={16} />
                <span className="text-sm font-bold">Frontend Engineer</span>
              </div>

              <p className="text-xl md:text-2xl font-bold leading-relaxed text-[#202124] dark:text-[#E8EAED] mb-4">
                Mahasiswa Universitas Yatsi Madani yang fokus menerjemahkan
                desain menjadi antarmuka web interaktif.
              </p>

              <div className="w-12 h-1 rounded-full bg-[#DADCE0] dark:bg-[#3C4043] mb-4" />

              <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
                Berbasis di Tangerang, keseharian saya berpusat pada ekosistem
                Frontend modern. Selain menulis kode, saya senang mengeksplorasi
                desain grafis, UI/UX, serta mengikuti tren dunia e-sports dan
                fotografi.
              </p>
            </div>

            {/* Pendidikan Sub-Card (Mobile First Stack) */}
            <div className="w-full rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-300 p-6 flex items-center gap-5">
              <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8]">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider mb-0.5">
                  Pendidikan Saat Ini
                </p>
                <p className="font-bold text-lg text-[#202124] dark:text-[#E8EAED]">
                  S1 Ilmu Komputer - Universitas Yatsi Madani
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
