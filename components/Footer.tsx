"use client";

import { useRef } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
  Fingerprint,
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
        px-4 pt-16 pb-8 md:px-10 md:pt-24
        bg-[#F8F9FA] dark:bg-[#202124] 
        text-[#202124] dark:text-[#E8EAED]
        transition-colors duration-500
      "
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10 md:gap-16">
        {/* ── CTA Banner ──────────────────────────────────────── */}
        {/* GAYA CARD DIUPDATE KE GLASSMORPHISM & STRONG SHADOW */}
        <div className="footer-item w-full rounded-[28px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-300">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995] text-xs font-bold uppercase tracking-wider mb-2">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34A853]" />
              </div>
              Tersedia untuk peluang baru
            </div>

            <h2 className="font-extrabold tracking-tight text-3xl md:text-5xl text-[#202124] dark:text-white">
              Siap berkolaborasi?
            </h2>
            <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-md mt-1">
              Mari diskusikan ide Anda. Saya siap membantu merancang dan
              membangun antarmuka digital yang berdampak.
            </p>
          </div>

          <a
            href="mailto:kevinnardiansyahh19@gmail.com"
            className="group flex items-center justify-center gap-3 shrink-0 h-14 px-8 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] dark:bg-[#8AB4F8] dark:hover:bg-[#aecbfa] text-white dark:text-[#202124] font-bold text-base shadow-sm transition-all duration-300"
          >
            <Mail size={20} strokeWidth={2.5} />
            Mulai Percakapan
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className="group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </a>
        </div>

        {/* ── Classic Minimal Footer ────────────────────────────────────────── */}
        <div className="flex flex-col gap-6 md:gap-8 pt-8 border-t border-[#DADCE0] dark:border-[#3C4043]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Branding & Status */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#3C4043] text-[#1A73E8] dark:text-[#8AB4F8] shadow-sm">
                <Fingerprint size={20} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-extrabold text-lg tracking-tight text-[#202124] dark:text-white leading-none mb-1">
                  Kevin Ardiansyah
                </h3>
                <p className="text-[12px] font-semibold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-widest">
                  Frontend Engineer
                </p>
              </div>
            </div>

            {/* Right: Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#3C4043] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#1A73E8] dark:hover:text-[#8AB4F8] transition-colors shadow-sm"
                  >
                    <Icon size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Meta Data */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
            <div className="flex items-center gap-4 text-xs font-medium text-[#9AA0A6] dark:text-[#5F6368]">
              <span>Tangerang, ID (UTC +7)</span>
              <span className="w-1 h-1 rounded-full bg-[#DADCE0] dark:bg-[#5F6368]" />
              <span>Designed & Built with Precision</span>
            </div>

            <p className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-widest">
              © {new Date().getFullYear()} K.A. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
