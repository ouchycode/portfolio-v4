"use client";

import { useRef } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
  Send,
} from "lucide-react";
import { useContactAnimation } from "@/hooks/useAnimations";

export default function Contact() {
  const container = useRef<HTMLElement>(null);

  useContactAnimation(container);

  return (
    <section
      id="contact"
      ref={container}
      className="
        relative overflow-hidden
        px-4 py-24 md:px-10 md:py-32
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
        <div className="absolute -top-40 right-0 w-[600px] h-[500px] rounded-full bg-indigo-200/15 dark:bg-indigo-800/8 blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-violet-300/12 dark:bg-violet-700/8 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-5 md:gap-6">
        {/* ── Section label ──────────────────────────────────────── */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm w-fit">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
            06 /
          </span>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-300">
            Contact
          </span>
        </div>

        {/* ── Header Bento Row ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Title Card */}
          <div className="contact-input md:col-span-7 h-full">
            <div className="group w-full h-full relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-[0_2px_30px_0px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_30px_0px_rgba(0,0,0,0.35)] p-7 md:p-10 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_8px_50px_0px_rgba(99,102,241,0.10)] dark:hover:shadow-[0_8px_50px_0px_rgba(99,102,241,0.18)]">
              <MessageSquare
                className="absolute -bottom-16 -left-12 w-72 h-72 text-zinc-900/[0.03] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover:scale-105"
                strokeWidth={1.5}
              />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-indigo-200 dark:border-indigo-700/50 bg-indigo-50 dark:bg-indigo-950/40 shadow-sm">
                  <Sparkles
                    size={13}
                    className="text-indigo-500 dark:text-indigo-400"
                  />
                  <span className="text-[10px] md:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-700 dark:text-indigo-300">
                    Let's Connect
                  </span>
                </div>
                <h2
                  className="font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-[14vw] md:text-[6.5vw] lg:text-[5.5vw] text-zinc-900 dark:text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  CONTACT
                </h2>
              </div>
            </div>
          </div>

          {/* Inbox status card */}
          <div className="contact-input md:col-span-5 h-full">
            <div className="w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-7 md:p-10 flex items-center justify-center relative overflow-hidden transition-colors duration-500">
              <Send
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 text-zinc-900/[0.03] dark:text-white/[0.02] rotate-12 pointer-events-none z-0"
                strokeWidth={1.5}
              />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-500" />
                  </div>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Status
                  </span>
                </div>
                <span
                  className="text-lg md:text-xl font-extrabold text-zinc-800 dark:text-zinc-100 tracking-tight text-center"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  INBOX IS OPEN
                </span>
                <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-center">
                  Replies within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content Bento Row ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* LEFT: Info Card — inverted */}
          <div className="contact-input md:col-span-5 h-full">
            <div className="w-full h-full rounded-2xl border border-zinc-800 dark:border-zinc-700/60 bg-zinc-900 dark:bg-zinc-950/80 text-zinc-50 shadow-[0_4px_40px_0px_rgba(0,0,0,0.18)] dark:shadow-[0_4px_40px_0px_rgba(0,0,0,0.5)] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-colors duration-500">
              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-transparent to-violet-950/20 pointer-events-none" />

              {/* Watermark */}
              <Mail
                className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.04] rotate-12 pointer-events-none z-0"
                strokeWidth={1.5}
              />

              <div className="relative z-10">
                <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 mb-6" />
                <h3
                  className="font-extrabold text-3xl md:text-4xl uppercase leading-tight tracking-tight text-white mb-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  START A<br />
                  PROJECT
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-sm font-light">
                  Biasanya saya membalas pesan dalam waktu 1×24 jam. Mari
                  berdiskusi tentang ide brilian Anda.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-10 relative z-10">
                {/* Email */}
                <a
                  href="mailto:kevinnardiansyahh19@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-zinc-700/60 bg-zinc-800/60 hover:bg-indigo-600/20 hover:border-indigo-500/50 p-4 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_0px_rgba(99,102,241,0.15)]"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-700/60 border border-zinc-600/50 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-colors duration-300 shrink-0">
                    <Mail
                      size={18}
                      className="text-zinc-300 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300 break-all">
                    kevinnardiansyahh19@gmail.com
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-xl border border-zinc-800/60 bg-zinc-800/30 p-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800/60 border border-zinc-700/50 shrink-0">
                    <MapPin size={18} className="text-zinc-500" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-zinc-500">
                    Tangerang, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form Card */}
          <div className="contact-input md:col-span-7 h-full">
            <div className="w-full h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/65 dark:bg-zinc-900/55 backdrop-blur-md shadow-[0_2px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_0px_rgba(0,0,0,0.3)] p-8 md:p-10 relative overflow-hidden transition-colors duration-500">
              <Send
                className="absolute bottom-10 right-10 w-44 h-44 text-zinc-900/[0.03] dark:text-white/[0.03] rotate-12 pointer-events-none z-0"
                strokeWidth={1.5}
              />

              <form
                className="relative z-10 flex flex-col h-full justify-between gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-5 md:gap-6">
                  {/* Name */}
                  <div className="contact-input flex flex-col gap-2">
                    <label className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 pl-1">
                      01 // Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="w-full rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/80 dark:bg-zinc-800/60 backdrop-blur-sm px-4 md:px-5 py-3 md:py-3.5 text-sm font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-950/40 shadow-sm focus:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="contact-input flex flex-col gap-2">
                    <label className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 pl-1">
                      02 // Alamat Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/80 dark:bg-zinc-800/60 backdrop-blur-sm px-4 md:px-5 py-3 md:py-3.5 text-sm font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-950/40 shadow-sm focus:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="contact-input flex flex-col gap-2">
                    <label className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 pl-1">
                      03 // Detail Pesan
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan tentang proyek atau ide Anda..."
                      className="w-full rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/80 dark:bg-zinc-800/60 backdrop-blur-sm px-4 md:px-5 py-3 md:py-3.5 text-sm font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none resize-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-950/40 shadow-sm focus:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="contact-input">
                  <button
                    type="submit"
                    className="group relative overflow-hidden flex items-center justify-between w-full rounded-2xl border border-indigo-400/60 dark:border-indigo-600/40 bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white p-5 md:p-6 shadow-[0_4px_30px_0px_rgba(99,102,241,0.25)] dark:shadow-[0_4px_30px_0px_rgba(99,102,241,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_0px_rgba(99,102,241,0.35)] active:translate-y-0.5"
                  >
                    {/* Shine sweep */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />

                    <div className="relative z-10 flex flex-col gap-1 items-start">
                      <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-indigo-200">
                        Kirim Sekarang
                      </span>
                      <span
                        className="text-base md:text-lg font-bold text-white tracking-tight"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        Kirim Pesan
                      </span>
                    </div>

                    <div className="relative z-10 w-11 h-11 flex items-center justify-center rounded-xl bg-white/15 border border-white/20 group-hover:bg-white transition-colors duration-300">
                      <ArrowUpRight
                        size={20}
                        strokeWidth={2}
                        className="text-white group-hover:text-indigo-700 group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
