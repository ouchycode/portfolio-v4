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
  const container = useRef(null);

  useContactAnimation(container);

  return (
    <section
      id="contact"
      ref={container}
      className="
      relative overflow-hidden
      px-4 py-24 md:px-8 md:py-32
      bg-[#fafafa] text-zinc-900
      dark:bg-[#0a0a0a] dark:text-zinc-50
      transition-colors duration-500
      "
    >
      {/* ============================================================ */}
      {/* BACKGROUND CONTACT */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none z-0 transition-colors duration-500"></div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-[120px] opacity-40 pointer-events-none z-0 translate-x-1/3 -translate-y-1/3 transition-colors duration-500"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-300 dark:bg-zinc-800/40 rounded-full blur-[120px] opacity-30 pointer-events-none z-0 -translate-x-1/3 translate-y-1/3 transition-colors duration-500"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa] dark:from-[#0a0a0a] dark:via-transparent dark:to-[#0a0a0a] opacity-80 pointer-events-none z-0 transition-colors duration-500"></div>

      {/* ============================================================ */}
      {/* CONTENT CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 md:gap-5">
        {/* HEADER BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* TITLE CARD */}
          <div className="contact-input md:col-span-7 h-full">
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col justify-center transition-colors duration-500">
              <MessageSquare
                className="absolute -bottom-16 -left-12 w-80 h-80 text-zinc-900/[0.03] dark:text-white/[0.02] -rotate-12 pointer-events-none z-0"
                strokeWidth={1.5}
              />
              <div className="relative z-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/60 rounded-full w-fit mb-6 border border-zinc-200 dark:border-zinc-700/50 transition-colors duration-500">
                  <Sparkles
                    size={14}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                  <span className="text-xs md:text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 transition-colors duration-500">
                    Let's Connect
                  </span>
                </div>
                <h2 className="text-[12vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-[0.85] tracking-tighter text-zinc-900 dark:text-white transition-colors duration-500">
                  Contact
                </h2>
              </div>
            </div>
          </div>

          {/* CONTROLS / INBOX CARD (Fokus Sekunder) */}
          <div className="contact-input md:col-span-5 h-full">
            <div className="w-full h-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex items-center justify-center md:justify-end relative overflow-hidden transition-colors duration-500">
              <Send
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-zinc-900/[0.02] dark:text-white/[0.02] rotate-12 pointer-events-none z-0"
                strokeWidth={1.5}
              />
              <div className="relative z-10">
                <span className="bg-white dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 px-6 py-3 rounded-xl font-mono text-[10px] md:text-xs uppercase font-bold tracking-widest text-center shadow-sm transition-colors duration-500">
                  [ Inbox is Open ]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* LEFT INFO CARD (Span 5) - INVERTED DARK THEME */}
          <div className="contact-input md:col-span-5 h-full">
            <div className="w-full h-full bg-zinc-900 dark:bg-[#0f0f11] text-zinc-50 dark:text-zinc-50 rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-zinc-900/10 dark:shadow-black/50 flex flex-col justify-between relative overflow-hidden border border-zinc-800 dark:border-zinc-800/80 transition-colors duration-500">
              {/* Dekorasi Latar Belakang & WATERMARK */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
              <Mail
                className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.03] rotate-12 pointer-events-none z-0"
                strokeWidth={1.5}
              />

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
                  Start a<br />
                  Project
                </h3>
                <p className="font-medium text-zinc-400 dark:text-zinc-400 leading-relaxed max-w-sm text-sm md:text-base">
                  Biasanya saya membalas pesan dalam waktu 1x24 jam. Mari
                  berdiskusi tentang ide brilian Anda.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-12 relative z-10">
                {/* EMAIL */}
                <a
                  href="mailto:kevinnardiansyahh19@gmail.com"
                  className="group flex items-center gap-4 bg-zinc-800/80 dark:bg-zinc-800/50 hover:bg-indigo-600 dark:hover:bg-indigo-600 border border-zinc-700 dark:border-zinc-700/80 hover:border-indigo-500 rounded-[1.5rem] px-5 py-4 text-sm font-medium text-zinc-200 dark:text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <div className="bg-zinc-700/50 dark:bg-zinc-900 group-hover:bg-white/20 p-3 rounded-xl text-zinc-300 dark:text-zinc-400 group-hover:text-white transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  kevinnardiansyahh19@gmail.com
                </a>

                {/* LOCATION */}
                <div className="flex items-center gap-4 bg-zinc-800/40 dark:bg-zinc-900/30 border border-zinc-700/50 dark:border-zinc-800/50 rounded-[1.5rem] px-5 py-4 text-sm font-medium text-zinc-400 dark:text-zinc-500 transition-colors duration-500">
                  <div className="bg-zinc-800 dark:bg-zinc-800 p-3 rounded-xl text-zinc-500 dark:text-zinc-600">
                    <MapPin size={20} />
                  </div>
                  Tangerang, ID
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD (Span 7) */}
          <div className="contact-input md:col-span-7 h-full">
            <div className="w-full h-full bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden transition-colors duration-500">
              {/* WATERMARK ICON FORM */}
              <Send
                className="absolute bottom-10 right-10 w-48 h-48 text-zinc-900/[0.02] dark:text-white/[0.02] rotate-12 pointer-events-none z-0"
                strokeWidth={1}
              />

              <form
                className="relative z-10 flex flex-col h-full justify-between gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-5 md:gap-6">
                  {/* NAME INPUT */}
                  <div className="contact-input group flex flex-col gap-2">
                    <label className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-400 font-bold tracking-wide pl-2 transition-colors duration-500">
                      01 // Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="w-full bg-zinc-50 dark:bg-[#18181a] border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl px-6 py-4 text-base font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-indigo-500/50 dark:focus:border-indigo-500/50 focus:bg-white dark:focus:bg-[#121212] focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/10 transition-all duration-300"
                    />
                  </div>

                  {/* EMAIL INPUT */}
                  <div className="contact-input group flex flex-col gap-2">
                    <label className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-400 font-bold tracking-wide pl-2 transition-colors duration-500">
                      02 // Alamat Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-zinc-50 dark:bg-[#18181a] border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl px-6 py-4 text-base font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-indigo-500/50 dark:focus:border-indigo-500/50 focus:bg-white dark:focus:bg-[#121212] focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/10 transition-all duration-300"
                    />
                  </div>

                  {/* MESSAGE INPUT */}
                  <div className="contact-input group flex flex-col gap-2">
                    <label className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-400 font-bold tracking-wide pl-2 transition-colors duration-500">
                      03 // Detail Pesan
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan tentang proyek atau ide Anda..."
                      className="w-full bg-zinc-50 dark:bg-[#18181a] border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl px-6 py-4 text-base font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none resize-none focus:border-indigo-500/50 dark:focus:border-indigo-500/50 focus:bg-white dark:focus:bg-[#121212] focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="contact-input mt-4">
                  <button
                    type="submit"
                    className="group flex items-center justify-between w-full bg-indigo-600 dark:bg-indigo-500 text-white rounded-[1.5rem] px-8 py-5 font-bold uppercase tracking-wider text-sm md:text-base hover:bg-indigo-700 dark:hover:bg-indigo-400 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all duration-300"
                  >
                    <span>Kirim Pesan</span>
                    <div className="bg-white/20 dark:bg-white/10 p-2.5 rounded-full group-hover:bg-white/30 dark:group-hover:bg-white/20 transition-colors duration-300">
                      <ArrowUpRight
                        size={20}
                        className="group-hover:rotate-45 transition-transform duration-300"
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
