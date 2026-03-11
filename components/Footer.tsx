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
  const container = useRef(null);

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
      {/* BACKGROUND FOOTER */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none z-0 transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa] dark:from-[#0a0a0a] dark:via-transparent dark:to-[#0a0a0a] opacity-80 pointer-events-none z-0 transition-colors duration-500"></div>

      {/* ============================================================ */}
      {/* CONTENT CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 md:gap-5">
        {/* BIG CTA BENTO (Indigo Theme - Grand Finale) */}
        <div className="footer-item h-full">
          <div className="w-full relative overflow-hidden bg-indigo-600 dark:bg-indigo-600 text-white border border-indigo-500/50 rounded-[2.5rem] p-8 md:p-16 flex flex-col items-center justify-center text-center shadow-xl shadow-indigo-500/20 group transition-colors duration-500">
            {/* Subtle Glow Background & WATERMARK */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-400/50 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>
            <Send
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 text-white/[0.05] -rotate-12 pointer-events-none z-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700"
              strokeWidth={1}
            />

            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white/10 px-4 py-2 rounded-xl font-mono text-[10px] md:text-xs uppercase font-bold tracking-widest text-indigo-50 mb-6 backdrop-blur-md border border-white/20 shadow-sm transition-colors duration-500">
                [ Open for Opportunities ]
              </div>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter mb-8 transition-colors duration-500">
                Let's <br className="md:hidden" /> Connect
              </h2>

              <a
                href="mailto:kevinnardiansyahh19@gmail.com"
                className="group/btn flex items-center gap-3 bg-white text-indigo-600 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-950 dark:hover:text-zinc-50 px-8 py-4 rounded-[1.5rem] font-bold uppercase tracking-wide text-sm md:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
              >
                <Mail size={20} className="transition-colors" />
                Send Email
                <div className="bg-indigo-50 group-hover/btn:bg-white/20 dark:group-hover/btn:bg-white/10 p-1.5 rounded-full transition-colors duration-300">
                  <ArrowUpRight
                    size={18}
                    className="group-hover/btn:rotate-45 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* PROFILE INFO */}
          <div className="footer-item md:col-span-4 h-full">
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col justify-between group transition-colors duration-500">
              <Fingerprint
                className="absolute -bottom-10 -right-10 w-64 h-64 text-zinc-900/[0.03] dark:text-white/[0.02] rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1}
              />

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] tracking-tighter mb-4 text-zinc-900 dark:text-white transition-colors duration-500">
                  KEVIN <br /> ARDIANSYAH
                </h3>
                <p className="font-mono text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 uppercase font-semibold leading-relaxed max-w-[200px] transition-colors duration-500">
                  Mahasiswa Universitas Yatsi Madani
                </p>
              </div>

              <div className="relative z-10 font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-600 dark:text-zinc-400 flex flex-col gap-3 mt-12 tracking-wide transition-colors duration-500">
                <span className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                  </span>
                  Tangerang, ID
                </span>
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                  UTC +7
                </span>
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                  Frontend Engineer
                </span>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="footer-item md:col-span-5 h-full">
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col group transition-colors duration-500">
              <Globe
                className="absolute -bottom-10 -right-10 w-64 h-64 text-zinc-900/[0.03] dark:text-white/[0.02] -rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1}
              />

              <div className="relative z-10 font-mono text-[10px] md:text-xs uppercase text-zinc-400 dark:text-zinc-500 font-bold mb-6 flex items-center gap-3 tracking-widest transition-colors duration-500">
                <div className="w-8 h-[2px] bg-zinc-200 dark:bg-zinc-800 transition-colors duration-500"></div>
                Social
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
                      className="group/link flex items-center gap-3 bg-zinc-50 dark:bg-[#18181a] hover:bg-indigo-50 dark:hover:bg-indigo-500/10 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 rounded-2xl px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="bg-white dark:bg-[#121212] border border-zinc-100 dark:border-zinc-800 p-2 rounded-xl group-hover/link:bg-indigo-600 dark:group-hover/link:bg-indigo-500 group-hover/link:border-indigo-600 dark:group-hover/link:border-indigo-500 transition-colors duration-300">
                        <Icon
                          size={18}
                          className="text-zinc-600 dark:text-zinc-400 group-hover/link:text-white transition-colors duration-300"
                        />
                      </div>
                      <span className="font-bold uppercase tracking-tight text-[10px] md:text-xs text-zinc-700 dark:text-zinc-300 group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-400 transition-colors duration-300">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-item md:col-span-3 h-full">
            <div className="w-full h-full relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col justify-end group transition-colors duration-500">
              <Terminal
                className="absolute -bottom-10 -right-10 w-48 h-48 text-zinc-900/[0.03] dark:text-white/[0.02] rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                strokeWidth={1}
              />

              <p className="relative z-10 font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-500 font-semibold leading-relaxed tracking-wide transition-colors duration-500">
                <strong className="text-zinc-900 dark:text-zinc-300 transition-colors duration-500">
                  © 2026 Kevin Ardiansyah
                </strong>
                <br />
                All Rights Reserved
                <br />
                <br />
                Designed & Developed
                <br />
                with precision
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
