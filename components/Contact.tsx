"use client";

import { useRef } from "react";
import { ArrowUpRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { useContactAnimation } from "@/hooks/useAnimations";

export default function Contact() {
  const container = useRef(null);

  useContactAnimation(container);

  return (
    <section
      id="contact"
      ref={container}
      className="
      px-4 py-24 md:px-8 md:py-32
      bg-[#fafafa] text-zinc-900
      dark:bg-[#0a0a0a] dark:text-zinc-50
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-5">
        {/* HEADER BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-7 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex items-center gap-6">
            <div className="hidden md:flex bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 p-4 rounded-2xl text-indigo-600 dark:text-indigo-400">
              <MessageSquare size={32} />
            </div>
            <h2
              className="
              contact-input
              text-[12vw] md:text-[6vw] lg:text-[5vw]
              font-black uppercase
              leading-[0.85] tracking-tighter
              "
            >
              Contact
            </h2>
          </div>

          <div className="md:col-span-5 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-sm flex items-center justify-center md:justify-end">
            <span className="contact-input bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 px-5 py-2.5 rounded-xl font-mono text-[10px] md:text-xs uppercase font-bold tracking-widest text-center shadow-sm">
              [ Inbox is Open ]
            </span>
          </div>
        </div>

        {/* CONTENT BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* LEFT INFO CARD (Span 5) */}
          <div className="contact-input md:col-span-5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-zinc-900/10 dark:shadow-white/5 flex flex-col justify-between relative overflow-hidden">
            {/* Dekorasi Latar Belakang Halus */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white dark:text-black">
                Start a<br />
                Project
              </h3>
              <p className="font-medium text-zinc-400 dark:text-zinc-600 leading-relaxed max-w-sm text-sm md:text-base">
                Biasanya saya membalas pesan dalam waktu 1x24 jam. Mari
                berdiskusi tentang ide brilian Anda.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-12 relative z-10">
              {/* EMAIL */}
              <a
                href="mailto:kevinnardiansyahh19@gmail.com"
                className="
                group
                flex items-center gap-4
                bg-zinc-800 dark:bg-zinc-200
                hover:bg-indigo-600 dark:hover:bg-indigo-500
                border border-zinc-700 dark:border-zinc-300
                hover:border-indigo-600 dark:hover:border-indigo-500
                rounded-2xl px-5 py-4
                text-sm font-medium
                text-zinc-200 dark:text-zinc-800
                hover:text-white dark:hover:text-white
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20
                "
              >
                <div className="bg-zinc-700 dark:bg-zinc-300 group-hover:bg-white/20 p-2.5 rounded-xl text-zinc-300 dark:text-zinc-700 group-hover:text-white transition-colors duration-300">
                  <Mail size={18} />
                </div>
                kevinnardiansyahh19@gmail.com
              </a>

              {/* LOCATION */}
              <div
                className="
                flex items-center gap-4
                bg-zinc-800/50 dark:bg-zinc-200/50
                border border-zinc-700/50 dark:border-zinc-300/50
                rounded-2xl px-5 py-4
                text-sm font-medium
                text-zinc-300 dark:text-zinc-700
                "
              >
                <div className="bg-zinc-700/50 dark:bg-zinc-300/50 p-2.5 rounded-xl text-zinc-400 dark:text-zinc-600">
                  <MapPin size={18} />
                </div>
                Tangerang, ID
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD (Span 7) */}
          <div className="md:col-span-7 bg-white dark:bg-[#121212] border border-zinc-200/80 dark:border-zinc-800/80 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <form
              className="flex flex-col h-full justify-between gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-6">
                {/* NAME INPUT */}
                <div className="contact-input group flex flex-col gap-2">
                  <label className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-400 font-bold tracking-wide pl-2">
                    01 // Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="
                    w-full
                    bg-zinc-50 dark:bg-zinc-900/50
                    border border-zinc-200/80 dark:border-zinc-800/80
                    rounded-2xl px-6 py-4
                    text-base font-medium text-zinc-900 dark:text-white
                    placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                    outline-none
                    focus:border-indigo-500/50 dark:focus:border-indigo-500/50
                    focus:bg-white dark:focus:bg-[#121212]
                    focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/10
                    transition-all duration-300
                    "
                  />
                </div>

                {/* EMAIL INPUT */}
                <div className="contact-input group flex flex-col gap-2">
                  <label className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-400 font-bold tracking-wide pl-2">
                    02 // Alamat Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="
                    w-full
                    bg-zinc-50 dark:bg-zinc-900/50
                    border border-zinc-200/80 dark:border-zinc-800/80
                    rounded-2xl px-6 py-4
                    text-base font-medium text-zinc-900 dark:text-white
                    placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                    outline-none
                    focus:border-indigo-500/50 dark:focus:border-indigo-500/50
                    focus:bg-white dark:focus:bg-[#121212]
                    focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/10
                    transition-all duration-300
                    "
                  />
                </div>

                {/* MESSAGE INPUT */}
                <div className="contact-input group flex flex-col gap-2">
                  <label className="font-mono text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-400 font-bold tracking-wide pl-2">
                    03 // Detail Pesan
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ceritakan tentang proyek atau ide Anda..."
                    className="
                    w-full
                    bg-zinc-50 dark:bg-zinc-900/50
                    border border-zinc-200/80 dark:border-zinc-800/80
                    rounded-2xl px-6 py-4
                    text-base font-medium text-zinc-900 dark:text-white
                    placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                    outline-none resize-none
                    focus:border-indigo-500/50 dark:focus:border-indigo-500/50
                    focus:bg-white dark:focus:bg-[#121212]
                    focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/10
                    transition-all duration-300
                    "
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="
                contact-input
                group
                flex items-center justify-between
                w-full
                bg-indigo-600 dark:bg-indigo-500
                text-white
                rounded-2xl px-8 py-5 mt-4
                font-bold uppercase tracking-wider text-sm md:text-base
                hover:bg-zinc-900 dark:hover:bg-white
                hover:text-white dark:hover:text-black
                hover:shadow-xl hover:shadow-zinc-900/20 dark:hover:shadow-white/20
                hover:-translate-y-1
                transition-all duration-300
                "
              >
                <span>Kirim Pesan</span>
                <div className="bg-white/20 dark:bg-black/10 p-2.5 rounded-full group-hover:bg-white/20 dark:group-hover:bg-black/10 transition-colors duration-300">
                  <ArrowUpRight
                    size={20}
                    className="group-hover:rotate-45 transition-transform duration-300"
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
