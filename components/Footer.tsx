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
        px-4 py-8 md:px-10 md:pb-16
        bg-[#f5f3ef] text-zinc-900
        dark:bg-[#0c0c0e] dark:text-zinc-50
        transition-colors duration-500
      "
    >
      {/* ── Grain Texture ──────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Radial gradient accents ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-indigo-300/15 dark:bg-indigo-700/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-violet-300/10 dark:bg-violet-700/6 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 md:gap-5">
        {/* ── BIG CTA BENTO ──────────────────────────────────────── */}
        <div className="footer-item">
          <div className="group w-full relative overflow-hidden rounded-2xl border border-indigo-300/60 dark:border-indigo-700/40 bg-gradient-to-br from-indigo-500 to-indigo-700 dark:from-indigo-600 dark:to-indigo-800 p-10 md:p-20 flex flex-col items-center justify-center text-center shadow-[0_8px_60px_0px_rgba(99,102,241,0.30)] dark:shadow-[0_8px_60px_0px_rgba(99,102,241,0.20)] transition-all duration-500 hover:shadow-[0_16px_80px_0px_rgba(99,102,241,0.40)]">
            {/* Shine sweep on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12 pointer-events-none" />

            {/* Watermark */}
            <Send
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 text-white/[0.05] -rotate-12 pointer-events-none z-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700"
              strokeWidth={1.5}
            />

            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">
              {/* Opportunity badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm shadow-sm">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-white/80">
                  Open for Opportunities
                </span>
              </div>

              {/* Headline */}
              <h2
                className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-[15vw] sm:text-[11vw] md:text-[9vw] text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                LET'S
                <br className="md:hidden" /> CONNECT
              </h2>

              {/* CTA button */}
              <a
                href="mailto:kevinnardiansyahh19@gmail.com"
                className="group/btn relative overflow-hidden flex items-center gap-3 px-7 md:px-8 py-3.5 md:py-4 rounded-2xl border border-white/20 bg-white/15 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-[0_4px_20px_0px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_0px_rgba(0,0,0,0.2)] active:scale-95"
              >
                <Mail
                  size={18}
                  strokeWidth={2}
                  className="text-white group-hover/btn:text-indigo-700 transition-colors duration-300 hidden sm:block"
                />
                <span
                  className="font-semibold text-sm md:text-base tracking-wide text-white group-hover/btn:text-indigo-700 transition-colors duration-300"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Send Email
                </span>
                <div className="w-7 h-7 flex items-center justify-center rounded-xl bg-white/20 group-hover/btn:bg-indigo-100 transition-colors duration-300">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2.5}
                    className="text-white group-hover/btn:text-indigo-700 group-hover/btn:rotate-45 transition-all duration-300"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-5">
          {/* Profile Info */}
          <div className="footer-item col-span-1 sm:col-span-2 md:col-span-4 h-full">
            <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_0px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_8px_30px_0px_rgba(0,0,0,0.4)]">
              <Fingerprint
                className="absolute -bottom-10 -right-10 w-56 h-56 text-zinc-900/[0.03] dark:text-white/[0.03] rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.5}
              />

              <div className="relative z-10">
                <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 mb-5" />
                <h3
                  className="font-extrabold text-2xl md:text-3xl uppercase leading-tight tracking-tight text-zinc-900 dark:text-white mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  KEVIN
                  <br />
                  ARDIANSYAH
                </h3>
                <p className="text-[10px] font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest leading-relaxed border-l-2 border-indigo-400 pl-3">
                  Mahasiswa Universitas
                  <br />
                  Yatsi Madani
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-2.5 mt-10">
                {[
                  {
                    color: "bg-emerald-500",
                    ping: true,
                    label: "Tangerang, ID",
                  },
                  { color: "bg-indigo-500", ping: false, label: "UTC +7" },
                  {
                    color: "bg-pink-500",
                    ping: false,
                    label: "Frontend Engineer",
                  },
                ].map(({ color, ping, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className={`relative flex h-2.5 w-2.5 rounded-full ${color} shrink-0`}
                    >
                      {ping && (
                        <span
                          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${color} opacity-60`}
                        />
                      )}
                    </div>
                    <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-item col-span-1 md:col-span-5 h-full">
            <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200/60 dark:hover:border-indigo-700/40 hover:shadow-[0_8px_30px_0px_rgba(99,102,241,0.09)]">
              <Globe
                className="absolute -bottom-10 -right-10 w-56 h-56 text-zinc-900/[0.03] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.5}
              />

              <div className="relative z-10 flex items-center gap-3 mb-6">
                <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                  Social Links
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-zinc-200 dark:from-zinc-700 to-transparent" />
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
                      className="group/link flex items-center gap-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/60 backdrop-blur-sm px-3 md:px-4 py-3 md:py-3.5 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/60 group-hover/link:bg-indigo-500 group-hover/link:border-indigo-500 transition-colors duration-300 shrink-0">
                        <Icon
                          size={15}
                          className="text-zinc-600 dark:text-zinc-300 group-hover/link:text-white transition-colors duration-300"
                        />
                      </div>
                      <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-400 group-hover/link:text-indigo-700 dark:group-hover/link:text-indigo-300 transition-colors duration-300">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-item col-span-1 md:col-span-3 h-full">
            <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-6 md:p-8 flex flex-col justify-end transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_0px_rgba(0,0,0,0.09)]">
              <Terminal
                className="absolute -bottom-10 -right-10 w-48 h-48 text-zinc-900/[0.03] dark:text-white/[0.03] rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                strokeWidth={1.5}
              />

              <div className="relative z-10 flex flex-col gap-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg border border-zinc-200/80 dark:border-zinc-700/60 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[9px] font-mono font-bold uppercase tracking-widest w-fit shadow-sm">
                  © 2026 K.A
                </span>
                <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500 leading-relaxed">
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
      </div>
    </footer>
  );
}
