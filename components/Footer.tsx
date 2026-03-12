"use client";

import { useRef } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
  Send,
  Fingerprint,
  Globe,
  Terminal,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useFooterAnimation } from "@/hooks/useAnimations";

export default function Footer() {
  const container = useRef<HTMLElement>(null);

  useFooterAnimation(container);

  const socials = [
    { name: "Github", url: "https://github.com/ouchycode", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kevin-ardiansyah-529b96386/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kevinnardd_/",
      icon: Instagram,
    },
    {
      name: "Tiktok",
      url: "https://www.tiktok.com/@ouchycode",
      icon: FaTiktok,
    },
  ];

  return (
    <footer
      ref={container}
      className="
      relative overflow-hidden
      px-4 py-8 md:px-8 md:pb-16
      bg-[#fafafa] text-zinc-900
      dark:bg-[#0a0a0a] dark:text-zinc-50
      transition-colors duration-500
      "
    >
      {/* ============================================================ */}
      {/* BACKGROUND FOOTER - Pixel Dot Pattern */}
      {/* ============================================================ */}
      {/* Gradient fade dihapus agar pattern pixel tajam sampai bawah */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] dark:bg-[radial-gradient(#3f3f46_2px,transparent_2px)] [background-size:24px_24px] opacity-70 pointer-events-none transition-colors duration-500"></div>

      {/* ============================================================ */}
      {/* CONTENT CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 md:gap-6">
        {/* BIG CTA BENTO (Indigo Theme - Grand Finale) */}
        <div className="footer-item h-full">
          {/* Shadow diseragamkan ke 5px */}
          <div className="w-full relative overflow-hidden bg-indigo-500 dark:bg-indigo-600 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-8 md:p-16 flex flex-col items-center justify-center text-center shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] group transition-colors duration-500">
            {/* WATERMARK */}
            <Send
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 text-zinc-900/[0.05] dark:text-white/[0.05] -rotate-12 pointer-events-none z-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700"
              strokeWidth={2}
            />

            <div className="relative z-10 flex flex-col items-center">
              <div className="font-pixel text-[8px] md:text-[10px] bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 px-4 py-2 rounded-sm uppercase font-bold tracking-widest text-zinc-900 dark:text-zinc-100 mb-6 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                [ OPEN FOR OPPORTUNITIES ]
              </div>

              <h2 className="font-pixel text-[14vw] sm:text-[10vw] md:text-[8vw] font-black uppercase leading-none tracking-tighter mb-8 text-zinc-900 dark:text-white drop-shadow-[3px_3px_0_#a5b4fc] dark:drop-shadow-[3px_3px_0_#312e81] transition-colors duration-500">
                LET'S <br className="md:hidden" /> CONNECT
              </h2>

              <a
                href="mailto:kevinnardiansyahh19@gmail.com"
                className="group/btn flex items-center gap-3 bg-yellow-300 dark:bg-yellow-500 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 px-6 md:px-8 py-3 md:py-4 rounded-sm font-pixel text-[10px] md:text-sm uppercase tracking-widest transition-all duration-200 hover:bg-yellow-400 dark:hover:bg-yellow-400 shadow-[4px_4px_0_0_#18181b] dark:shadow-[4px_4px_0_0_#e4e4e7] active:translate-y-1 active:translate-x-1 active:shadow-none"
              >
                <Mail
                  size={20}
                  strokeWidth={2.5}
                  className="transition-colors hidden sm:block"
                />
                SEND EMAIL
                <div className="bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 text-white p-1 md:p-1.5 rounded-sm transition-colors duration-300">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={3}
                    className="group-hover/btn:rotate-45 transition-transform duration-300 md:w-5 md:h-5"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {/* PROFILE INFO */}
          <div className="footer-item col-span-1 sm:col-span-2 md:col-span-4 h-full">
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-8 flex flex-col justify-between shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] group transition-colors duration-500 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(228,228,231,1)]">
              <Fingerprint
                className="absolute -bottom-10 -right-10 w-64 h-64 text-zinc-900/[0.04] dark:text-white/[0.03] rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={2}
              />

              <div className="relative z-10">
                <h3 className="font-pixel text-2xl md:text-3xl font-black uppercase leading-tight tracking-widest mb-4 text-zinc-900 dark:text-white transition-colors duration-500 drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46]">
                  KEVIN <br /> ARDIANSYAH
                </h3>
                {/* Font mono agar seragam dengan deskripsi di section atas */}
                <p className="font-mono font-bold text-[10px] md:text-xs text-zinc-600 dark:text-zinc-400 uppercase leading-relaxed max-w-[200px] transition-colors duration-500 border-l-4 border-indigo-500 pl-3">
                  Mahasiswa Universitas Yatsi Madani
                </p>
              </div>

              <div className="relative z-10 font-pixel text-[8px] md:text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-400 flex flex-col gap-3 mt-12 tracking-widest transition-colors duration-500">
                <span className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3 border-2 border-zinc-900 dark:border-zinc-100 bg-emerald-500">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-emerald-400 opacity-60"></span>
                  </span>
                  Tangerang, ID
                </span>
                <span className="flex items-center gap-3">
                  <span className="h-3 w-3 border-2 border-zinc-900 dark:border-zinc-100 bg-indigo-500 dark:bg-indigo-400"></span>
                  UTC +7
                </span>
                <span className="flex items-center gap-3">
                  <span className="h-3 w-3 border-2 border-zinc-900 dark:border-zinc-100 bg-pink-500 dark:bg-pink-400"></span>
                  Frontend Engineer
                </span>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="footer-item col-span-1 md:col-span-5 h-full">
            {/* Hover shadow diubah jadi warna Indigo agar matching dengan CTA di atas */}
            <div className="w-full h-full relative overflow-hidden bg-[#fafafa] dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-8 flex flex-col shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] group transition-colors duration-500 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(99,102,241,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(129,140,248,1)]">
              <Globe
                className="absolute -bottom-10 -right-10 w-64 h-64 text-zinc-900/[0.04] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={2}
              />

              <div className="relative z-10 font-pixel text-[8px] md:text-[10px] uppercase text-zinc-500 dark:text-zinc-400 font-bold mb-6 flex items-center gap-3 tracking-widest transition-colors duration-500">
                SOCIAL LINKS
                <div className="flex-1 h-[2px] bg-zinc-900 dark:bg-zinc-100 transition-colors duration-500"></div>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3 mt-auto">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-3 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 hover:bg-indigo-500 dark:hover:bg-indigo-500 rounded-sm px-3 md:px-4 py-3 md:py-4 transition-all duration-200 active:translate-y-1 active:translate-x-1 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] active:shadow-none hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#18181b] dark:hover:shadow-[3px_3px_0_0_#e4e4e7]"
                    >
                      <div className="bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 p-1.5 md:p-2 rounded-sm group-hover/link:bg-zinc-900 dark:group-hover/link:bg-white transition-colors duration-300">
                        <Icon
                          size={16}
                          className="text-zinc-900 dark:text-zinc-100 group-hover/link:text-white dark:group-hover/link:text-zinc-900 transition-colors duration-300 md:w-5 md:h-5"
                        />
                      </div>
                      <span className="font-pixel font-bold uppercase tracking-widest text-[8px] md:text-[10px] text-zinc-900 dark:text-zinc-100 group-hover/link:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-item col-span-1 md:col-span-3 h-full">
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-8 flex flex-col justify-end shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] group transition-colors duration-500 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(228,228,231,1)]">
              <Terminal
                className="absolute -bottom-10 -right-10 w-48 h-48 text-zinc-900/[0.04] dark:text-white/[0.03] rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                strokeWidth={2}
              />

              <p className="relative z-10 font-pixel text-[8px] md:text-[10px] uppercase text-zinc-500 dark:text-zinc-500 font-bold leading-relaxed tracking-widest transition-colors duration-500">
                <span className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-2 py-1 inline-block mb-3 transition-colors duration-500">
                  © 2026 K.A
                </span>
                <br />
                All Rights Reserved.
                <br />
                <br />
                Designed & Built
                <br />
                with Precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
