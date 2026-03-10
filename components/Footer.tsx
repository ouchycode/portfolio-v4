"use client";

import { useRef } from "react";
import { Github, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
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
      px-4 py-8 md:px-8 md:pb-16
      bg-[#fafafa] text-zinc-900
      dark:bg-[#0a0a0a] dark:text-zinc-50
      "
    >
      {/* BENTO GRID WRAPPER */}
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-5">
        {/* BIG CTA BENTO */}
        <div className="footer-item bg-indigo-600 dark:bg-indigo-500 text-white border border-indigo-500/50 rounded-[2rem] p-8 md:p-16 flex flex-col items-center justify-center text-center shadow-lg shadow-indigo-500/10 relative overflow-hidden">
          {/* Subtle Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-400/50 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/10 px-4 py-2 rounded-xl font-mono text-[10px] md:text-xs uppercase font-bold tracking-widest text-indigo-50 mb-6 backdrop-blur-md border border-white/20">
              [ Open for Opportunities ]
            </div>

            <h2
              className="
              text-[14vw] sm:text-[10vw] md:text-[8vw]
              font-black uppercase
              leading-[0.85] tracking-tighter
              mb-8
              "
            >
              Let's <br className="md:hidden" /> Connect
            </h2>

            <a
              href="mailto:kevinnardiansyahh19@gmail.com"
              className="
              group flex items-center gap-3
              bg-white text-indigo-600
              hover:bg-zinc-900 hover:text-white
              dark:hover:bg-black dark:hover:text-white
              px-8 py-4 rounded-2xl
              font-bold uppercase tracking-wide text-sm md:text-base
              transition-all duration-300 hover:shadow-xl hover:-translate-y-1
              "
            >
              <Mail size={20} className="transition-colors" />
              Send Email
              <div className="bg-indigo-50 group-hover:bg-white/20 p-1.5 rounded-full transition-colors duration-300">
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </div>
            </a>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* PROFILE INFO */}
          <div className="footer-item md:col-span-4 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] tracking-tighter mb-4 text-zinc-900 dark:text-white">
                KEVIN <br /> ARDIANSYAH
              </h3>
              <p className="font-mono text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 uppercase font-semibold leading-relaxed max-w-[200px]">
                Mahasiswa Universitas Yatsi Madani
              </p>
            </div>

            <div className="font-mono text-[10px] md:text-xs uppercase font-bold text-zinc-600 dark:text-zinc-400 flex flex-col gap-3 mt-12 tracking-wide">
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Tangerang, ID
              </span>
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                UTC +7
              </span>
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Frontend Engineer
              </span>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="footer-item md:col-span-5 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-col">
            <div className="font-mono text-[10px] md:text-xs uppercase text-zinc-400 dark:text-zinc-500 font-bold mb-6 flex items-center gap-3 tracking-widest">
              <div className="w-8 h-[2px] bg-zinc-200 dark:bg-zinc-800"></div>
              Social
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    group flex items-center gap-3
                    bg-zinc-50 dark:bg-zinc-900/50
                    hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                    border border-zinc-200/80 dark:border-zinc-800/80
                    hover:border-indigo-500/50 dark:hover:border-indigo-500/50
                    rounded-2xl px-4 py-4
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md
                    "
                  >
                    <div className="bg-white dark:bg-[#121212] border border-zinc-100 dark:border-zinc-800 p-2 rounded-xl group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:border-indigo-600 transition-colors">
                      <Icon
                        size={18}
                        className="text-zinc-600 dark:text-zinc-400 group-hover:text-white transition-colors"
                      />
                    </div>
                    <span className="font-bold uppercase tracking-tight text-xs md:text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-item md:col-span-3 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-col justify-end">
            <p className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-500 font-semibold leading-relaxed tracking-wide">
              <strong className="text-zinc-900 dark:text-zinc-300">
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
    </footer>
  );
}
