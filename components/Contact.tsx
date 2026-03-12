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
      px-4 py-24 md:px-8 md:py-32
      bg-[#fafafa] text-zinc-900
      dark:bg-[#0a0a0a] dark:text-zinc-50
      transition-colors duration-500
      "
    >
      {/* ============================================================ */}
      {/* BACKGROUND CONTACT - Pixel Dot Pattern */}
      {/* ============================================================ */}
      {/* Gradient fade dihapus agar pattern pixel tajam */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] dark:bg-[radial-gradient(#3f3f46_2px,transparent_2px)] [background-size:24px_24px] opacity-70 pointer-events-none transition-colors duration-500 z-0"></div>

      {/* ============================================================ */}
      {/* CONTENT CONTAINER */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 md:gap-6">
        {/* HEADER BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* TITLE CARD */}
          <div className="contact-input md:col-span-7 h-full">
            {/* Shadow 5px */}
            <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#121212] border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-col justify-center transition-colors duration-500">
              <MessageSquare
                className="absolute -bottom-16 -left-12 w-80 h-80 text-zinc-900/[0.04] dark:text-white/[0.03] -rotate-12 pointer-events-none z-0"
                strokeWidth={2}
              />
              <div className="relative z-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-300 dark:bg-indigo-600 border-2 border-zinc-900 dark:border-zinc-100 rounded-sm w-fit mb-6 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] transition-colors duration-500">
                  <Sparkles
                    size={14}
                    className="text-indigo-950 dark:text-indigo-100"
                  />
                  <span className="font-pixel text-[8px] md:text-[10px] font-bold tracking-widest text-indigo-950 dark:text-indigo-50 uppercase">
                    Let's Connect
                  </span>
                </div>
                <h2 className="font-pixel text-[12vw] md:text-[6vw] lg:text-[5vw] font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-white drop-shadow-[2px_2px_0_#d4d4d8] dark:drop-shadow-[2px_2px_0_#3f3f46] transition-colors duration-500">
                  CONTACT
                </h2>
              </div>
            </div>
          </div>

          {/* CONTROLS / INBOX CARD (Fokus Sekunder) */}
          <div className="contact-input md:col-span-5 h-full">
            {/* Shadow 5px */}
            <div className="w-full h-full bg-[#fafafa] dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex items-center justify-center relative overflow-hidden transition-colors duration-500">
              <Send
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-zinc-900/[0.03] dark:text-white/[0.02] rotate-12 pointer-events-none z-0"
                strokeWidth={2}
              />
              <div className="relative z-10">
                <span className="font-pixel bg-lime-300 dark:bg-lime-700 border-2 border-zinc-900 dark:border-zinc-100 text-lime-950 dark:text-lime-50 px-4 py-3 rounded-sm text-[10px] md:text-xs uppercase font-bold tracking-widest text-center shadow-[4px_4px_0_0_#18181b] dark:shadow-[4px_4px_0_0_#e4e4e7] transition-colors duration-500 block hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#18181b] dark:hover:shadow-[6px_6px_0_0_#e4e4e7] cursor-default">
                  [ INBOX IS OPEN ]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* LEFT INFO CARD (Span 5) - INVERTED DARK THEME */}
          <div className="contact-input md:col-span-5 h-full">
            {/* Shadow 5px */}
            <div className="w-full h-full bg-zinc-900 dark:bg-[#121212] text-zinc-50 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-8 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] flex flex-col justify-between relative overflow-hidden transition-colors duration-500">
              {/* WATERMARK */}
              <Mail
                className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.04] rotate-12 pointer-events-none z-0"
                strokeWidth={2}
              />

              <div className="relative z-10">
                <h3 className="font-pixel text-3xl md:text-5xl font-black uppercase tracking-widest mb-6 text-white drop-shadow-[2px_2px_0_#3f3f46]">
                  START A<br />
                  PROJECT
                </h3>
                <p className="font-mono font-bold text-zinc-300 dark:text-zinc-400 leading-relaxed max-w-sm text-sm md:text-base">
                  Biasanya saya membalas pesan dalam waktu 1x24 jam. Mari
                  berdiskusi tentang ide brilian Anda.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-12 relative z-10">
                {/* EMAIL */}
                <a
                  href="mailto:kevinnardiansyahh19@gmail.com"
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-zinc-800 border-2 border-zinc-700 hover:border-indigo-400 rounded-sm p-4 text-xs md:text-sm font-bold text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] active:translate-y-0 active:shadow-none"
                >
                  <div className="bg-zinc-700 group-hover:bg-indigo-500 border-2 border-transparent group-hover:border-zinc-900 p-2 md:p-3 rounded-sm text-zinc-300 group-hover:text-white transition-colors duration-300">
                    <Mail size={24} strokeWidth={2.5} />
                  </div>
                  <span className="break-all tracking-wide">
                    kevinnardiansyahh19@gmail.com
                  </span>
                </a>

                {/* LOCATION */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-zinc-800/50 border-2 border-zinc-700/50 rounded-sm p-4 text-xs md:text-sm font-bold text-zinc-400 cursor-default">
                  <div className="bg-zinc-800 border-2 border-transparent p-2 md:p-3 rounded-sm text-zinc-500">
                    <MapPin size={24} strokeWidth={2.5} />
                  </div>
                  <span className="tracking-wide">Tangerang, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD (Span 7) */}
          <div className="contact-input md:col-span-7 h-full">
            {/* Shadow 5px */}
            <div className="w-full h-full bg-[#fafafa] dark:bg-zinc-900 border-2 md:border-4 border-zinc-900 dark:border-zinc-100 rounded-md p-8 md:p-10 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] relative overflow-hidden transition-colors duration-500">
              {/* WATERMARK ICON FORM */}
              <Send
                className="absolute bottom-10 right-10 w-48 h-48 text-zinc-900/[0.04] dark:text-white/[0.03] rotate-12 pointer-events-none z-0"
                strokeWidth={2}
              />

              <form
                className="relative z-10 flex flex-col h-full justify-between gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-5 md:gap-6">
                  {/* NAME INPUT */}
                  {/* Efek focus: shadow berubah jadi indigo dan form sedikit terangkat */}
                  <div className="contact-input group flex flex-col gap-2">
                    <label className="font-pixel text-[8px] md:text-[10px] uppercase text-zinc-600 dark:text-zinc-400 font-bold tracking-widest pl-1 transition-colors duration-500">
                      01 // Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 rounded-sm px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-indigo-600 dark:focus:border-indigo-400 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] focus:shadow-[4px_4px_0_0_#4f46e5] dark:focus:shadow-[4px_4px_0_0_#818cf8] focus:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>

                  {/* EMAIL INPUT */}
                  <div className="contact-input group flex flex-col gap-2">
                    <label className="font-pixel text-[8px] md:text-[10px] uppercase text-zinc-600 dark:text-zinc-400 font-bold tracking-widest pl-1 transition-colors duration-500">
                      02 // Alamat Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 rounded-sm px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-indigo-600 dark:focus:border-indigo-400 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] focus:shadow-[4px_4px_0_0_#4f46e5] dark:focus:shadow-[4px_4px_0_0_#818cf8] focus:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>

                  {/* MESSAGE INPUT */}
                  <div className="contact-input group flex flex-col gap-2">
                    <label className="font-pixel text-[8px] md:text-[10px] uppercase text-zinc-600 dark:text-zinc-400 font-bold tracking-widest pl-1 transition-colors duration-500">
                      03 // Detail Pesan
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan tentang proyek atau ide Anda..."
                      className="w-full bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-100 rounded-sm px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none resize-none focus:border-indigo-600 dark:focus:border-indigo-400 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#e4e4e7] focus:shadow-[4px_4px_0_0_#4f46e5] dark:focus:shadow-[4px_4px_0_0_#818cf8] focus:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="contact-input mt-4">
                  <button
                    type="submit"
                    className="group flex items-center justify-between w-full bg-indigo-600 dark:bg-indigo-600 text-white border-2 border-zinc-900 dark:border-zinc-100 rounded-sm p-4 md:p-5 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)] uppercase tracking-widest hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(228,228,231,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-200"
                  >
                    <span className="font-pixel text-xs md:text-sm tracking-widest font-bold">
                      Kirim Pesan
                    </span>
                    <div className="bg-white border-2 border-zinc-900 p-2 md:p-3 rounded-sm text-zinc-900 group-hover:bg-yellow-300 transition-colors duration-200">
                      <ArrowUpRight
                        size={20}
                        strokeWidth={3}
                        className="group-hover:rotate-45 transition-transform duration-300 md:w-6 md:h-6"
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
