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
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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
      className="relative overflow-hidden px-6 md:px-12 lg:px-20 pt-20 pb-10 md:pt-28 md:pb-12 bg-transparent text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow — top center ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full z-0 opacity-15 dark:opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #34A853 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* ── CTA CARD ── */}
        <div
          className="footer-item w-full rounded-[2.5rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          style={{
            boxShadow:
              "0 1px 3px rgba(60,64,67,.08), 0 8px 24px rgba(60,64,67,.08)",
          }}
        >
          {/* Google 4-color top bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] flex">
            {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
              <div
                key={c}
                className="flex-1 h-full"
                style={{ background: c }}
              />
            ))}
          </div>

          {/* Left: text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 mt-2">
            {/* Available badge */}
            <div className="footer-item inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#E6F4EA] dark:bg-[#81C995]/15 border border-[#34A853]/20 dark:border-[#81C995]/20">
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#34A853]" />
              </div>
              <span className="text-[11px] font-bold text-[#137333] dark:text-[#81C995] uppercase tracking-[0.12em]">
                {t.footer.available}
              </span>
            </div>

            <h2 className="footer-item font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-[3.25rem] text-[#202124] dark:text-white leading-[1.05]">
              {t.footer.title}
            </h2>

            {/* G-color bar */}
            <div className="flex gap-1 w-32">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <div
                  key={c}
                  className="h-1 flex-1 rounded-full opacity-60"
                  style={{ background: c }}
                />
              ))}
            </div>

            <p className="footer-item text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-md leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          {/* Right: CTA button */}
          <div className="footer-item shrink-0 w-full md:w-auto">
            <a
              href="mailto:kevinnardiansyahh19@gmail.com"
              className="group relative inline-flex items-center justify-center gap-3 h-14 md:h-16 px-8 md:px-10 rounded-full font-semibold text-base md:text-lg tracking-wide text-white overflow-hidden transition-all duration-300 active:scale-95 w-full md:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
              style={{ background: "linear-gradient(135deg,#1A73E8,#4285F4)" }}
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Mail size={20} strokeWidth={2.2} className="relative z-10" />
              <span className="relative z-10">{t.footer.btn}</span>
              <ArrowUpRight
                size={18}
                strokeWidth={2.2}
                className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* ── BOTTOM SECTION ── */}
        <div className="flex flex-col gap-8 pt-10 border-t border-[#DADCE0]/60 dark:border-[#5F6368]/40">
          {/* Identity + Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Identity */}
            <div className="footer-item flex items-center gap-4">
              <div
                className="w-13 h-13 w-[52px] h-[52px] flex items-center justify-center rounded-2xl bg-white/80 dark:bg-[#303134]/80 border border-[#DADCE0] dark:border-[#5F6368]/60 text-[#1A73E8] dark:text-[#8AB4F8] transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
              >
                <Fingerprint size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-black tracking-[-0.02em] text-xl md:text-2xl text-[#202124] dark:text-white leading-tight">
                  Kevin Ardiansyah
                </h3>
                <p className="text-[10px] font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-[0.15em] mt-0.5">
                  Frontend Engineer
                </p>
              </div>
            </div>

            {/* Social pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <div key={social.name} className="footer-item">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm border border-[#DADCE0] dark:border-[#5F6368]/60 text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#1A73E8] dark:hover:text-[#8AB4F8] hover:border-[#1A73E8]/30 dark:hover:border-[#8AB4F8]/30 hover:bg-[#E8F0FE] dark:hover:bg-[#1A73E8]/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    >
                      <Icon size={15} strokeWidth={2} />
                      <span className="text-[11px] font-bold uppercase tracking-[0.1em]">
                        {social.name}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Copyright row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="footer-item flex items-center gap-2.5 text-xs font-semibold text-[#9AA0A6] dark:text-[#5F6368]">
              <span>Tangerang, ID</span>
              <span className="w-1 h-1 rounded-full bg-[#DADCE0] dark:bg-[#5F6368]" />
              <span>UTC +7</span>
              <span className="w-1 h-1 rounded-full bg-[#DADCE0] dark:bg-[#5F6368]" />
              <span>Designed & Built with Precision</span>
            </div>

            <div className="footer-item flex items-center gap-2">
              {/* Mini G-color dots */}
              <div className="flex gap-1 items-center">
                {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                  <span
                    key={c}
                    className="w-1.5 h-1.5 rounded-full opacity-70"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="text-[11px] font-bold text-[#9AA0A6] dark:text-[#5F6368] uppercase tracking-[0.15em]">
                © {new Date().getFullYear()} K.A. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
