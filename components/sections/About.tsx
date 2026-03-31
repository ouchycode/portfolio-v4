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
      className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-24 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        {/* HEADER */}
        <div className="flex flex-col gap-4">
          <div className="about-animate inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm w-fit">
            <User size={18} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
            <span className="text-sm font-medium tracking-wide text-[#5F6368] dark:text-[#9AA0A6]">
              {t.nav.about}
            </span>
          </div>
          <h2 className="about-animate font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white">
            {t.about.title}
          </h2>
        </div>

        {/* CONTENT UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* KIRI: FOTO PROFIL & ORNAMEN */}
          <div className="lg:col-span-4 relative flex flex-col justify-center max-w-md md:max-w-none mx-auto w-full">
            {/* Ornamen Icon Camera */}
            <div className="about-animate absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20">
              <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-md border border-[#F1F3F4] dark:border-[#3C4043] -rotate-12 hover:rotate-0 transition-transform">
                <Camera className="w-6 h-6 text-[#1A73E8] dark:text-[#8AB4F8]" />
              </div>
            </div>

            {/* Ornamen Icon Gamepad */}
            <div className="about-animate absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20">
              <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-md border border-[#F1F3F4] dark:border-[#3C4043] rotate-12 hover:rotate-0 transition-transform">
                <Gamepad2 className="w-6 h-6 text-[#EA4335] dark:text-[#F28B82]" />
              </div>
            </div>

            {/* Gambar Profil */}
            <div className="about-animate relative w-full aspect-square md:aspect-[4/5] z-10 group">
              <div className="relative w-full h-full rounded-3xl border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <Image
                  src="/profile_kevin_hd.png"
                  alt="Kevin Ardiansyah"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/70 via-[#202124]/10 to-transparent opacity-80" />

                {/* Name Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-center">
                  <span className="inline-block px-5 py-2.5 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md text-white font-medium text-sm border border-white/30 shadow-sm">
                    Kevin Ardiansyah
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: DESKRIPSI & PENDIDIKAN */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            {/* Card Deskripsi */}
            <div className="about-animate flex-1 h-full">
              <div className="h-full rounded-3xl border border-[#DADCE0] dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 p-8 md:p-10 flex flex-col justify-center">
                {/* Tag / Role */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#E8F0FE] dark:bg-[#1A73E8]/15 text-[#1A73E8] dark:text-[#8AB4F8] w-fit">
                  <Code2 size={18} />
                  <span className="text-sm font-medium tracking-wide">
                    {t.about.tag}
                  </span>
                </div>

                <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#202124] dark:text-[#E8EAED] mb-6">
                  {t.about.headline}
                </p>

                {/* Separator / Divider khas Google */}
                <div className="w-16 h-1 rounded-full bg-[#1A73E8]/20 dark:bg-[#8AB4F8]/20 mb-6" />

                <p className="text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
                  {t.about.description}
                </p>
              </div>
            </div>

            {/* Card Pendidikan */}
            <div className="about-animate w-full group">
              <div className="w-full rounded-3xl border border-[#DADCE0] dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
                <div className="w-14 h-14 flex shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8] group-hover:scale-110 transition-transform">
                  <GraduationCap size={26} strokeWidth={2} />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-widest">
                    {t.about.eduLabel}
                  </p>
                  <p className="font-semibold text-lg text-[#202124] dark:text-[#E8EAED]">
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
