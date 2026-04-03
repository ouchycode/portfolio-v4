"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAboutAnimation } from "@/hooks/useAnimations";
import { User, Code2, GraduationCap, Camera, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useAboutAnimation(container);

  return (
    <section
      id="about"
      ref={container}
      className="relative overflow-visible md:overflow-hidden px-6 md:px-12 lg:px-20 py-24 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        {/* HEADER */}
        <div className="flex flex-col gap-3 md:gap-4 mb-2 md:mb-6">
          <div className="about-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm shadow-sm w-fit hover:shadow-md transition-shadow">
            <User size={16} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
            <span className="text-sm font-medium tracking-wide text-[#5F6368] dark:text-[#9AA0A6]">
              {t.nav.about}
            </span>
          </div>
          <h2 className="about-animate font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white">
            {t.about.title}
          </h2>
        </div>

        {/* CONTENT UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* KIRI: FOTO PROFIL & ORNAMEN */}
          <div className="lg:col-span-5 relative flex flex-col justify-center w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto z-10 px-4 sm:px-0">
            {/* Ornamen Icon Camera (Disembunyikan di mobile layar sangat kecil agar tidak nabrak) */}
            <div className="about-animate absolute -top-6 -left-2 sm:-top-8 sm:-left-6 z-20 pointer-events-none hidden sm:block">
              <div className="p-3.5 bg-white dark:bg-[#303134] rounded-[1.25rem] shadow-md border border-[#F1F3F4] dark:border-[#5F6368] -rotate-12 hover:rotate-0 transition-transform duration-300">
                <Camera className="w-6 h-6 text-[#1A73E8] dark:text-[#8AB4F8]" />
              </div>
            </div>

            {/* Ornamen Icon Gamepad */}
            <div className="about-animate absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 z-20 pointer-events-none">
              <div className="p-3.5 bg-white dark:bg-[#303134] rounded-[1.25rem] shadow-md border border-[#F1F3F4] dark:border-[#5F6368] rotate-12 hover:rotate-0 transition-transform duration-300">
                <Gamepad2 className="w-6 h-6 text-[#EA4335] dark:text-[#F28B82]" />
              </div>
            </div>

            {/* Gambar Profil */}
            <div className="about-animate relative w-full aspect-square sm:aspect-[4/5] z-10 group">
              <div className="relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                <Image
                  src="/profile_kevin_hd.png"
                  alt="Kevin Ardiansyah"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/80 via-[#202124]/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                {/* Name Badge Overlay */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
                  <div className="px-6 py-2.5 rounded-full bg-white/30 dark:bg-black/40 backdrop-blur-md border border-white/40 dark:border-white/20 shadow-lg text-white font-medium text-sm sm:text-base tracking-wide">
                    Kevin Ardiansyah
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: DESKRIPSI & PENDIDIKAN */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 w-full">
            {/* Card Deskripsi */}
            <div className="about-animate flex-1 h-full">
              <div className="h-full rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 p-8 sm:p-10 flex flex-col justify-center">
                {/* Tag / Role */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8] w-fit">
                  <Code2 size={18} />
                  <span className="text-sm font-semibold tracking-wide">
                    {t.about.tag}
                  </span>
                </div>

                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#202124] dark:text-[#E8EAED] mb-6">
                  {t.about.headline}
                </p>

                {/* Separator / Divider khas Google */}
                <div className="w-16 h-1.5 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] mb-6 opacity-80" />

                <p className="text-base sm:text-lg text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
                  {t.about.description}
                </p>
              </div>
            </div>

            {/* Card Pendidikan */}
            <div className="about-animate w-full group">
              <div className="w-full rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
                <div className="w-16 h-16 flex shrink-0 items-center justify-center rounded-[1.25rem] bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <GraduationCap size={28} strokeWidth={2} />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider">
                    {t.about.eduLabel}
                  </p>
                  <p className="font-semibold text-lg md:text-xl text-[#202124] dark:text-[#E8EAED]">
                    {t.about.eduValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
