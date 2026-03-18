"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAboutAnimation } from "@/hooks/useAnimations";
import { User, Code2, GraduationCap } from "lucide-react";

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
        {/* ── Section Header (Standar Baru) ──────────────────────────────────────── */}
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Avatar Card */}
          <div className="about-animate md:col-span-4">
            <div className="relative w-full aspect-square md:aspect-auto md:h-full rounded-[24px] border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] overflow-hidden shadow-sm">
              <Image
                src="/profile_kevin_hd.png"
                alt="Kevin Ardiansyah"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-sm border border-white/30">
                  Kevin Ardiansyah
                </span>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="about-animate md:col-span-8 flex flex-col gap-5">
            <div className="w-full rounded-[24px] border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm p-6 md:p-10 flex flex-col justify-center h-full">
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
            <div className="w-full rounded-[24px] border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm p-6 flex items-center gap-5">
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
