"use client";

import { useRef } from "react";
import {
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Linkedin,
  Github,
  Star,
  Paperclip,
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
        px-4 py-16 md:px-10 md:py-28
        text-[#202124] dark:text-[#E8EAED]
        transition-colors duration-500
      "
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* HEADER */}
        <div className="flex flex-col gap-3">
          <div className="contact-input inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm w-fit">
            <MessageSquare
              size={16}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
              Contact
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="contact-input font-extrabold tracking-tight text-3xl md:text-5xl text-[#202124] dark:text-white">
                Mari Berkolaborasi
              </h2>
              <p className="contact-input text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mt-2">
                Tertarik untuk bekerja sama, diskusi proyek, atau sekadar
                menyapa? Inbox saya selalu terbuka.
              </p>
            </div>
            <div className="contact-input hidden md:flex items-center gap-3 px-4 py-2.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white dark:bg-[#303134] shadow-sm shrink-0">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34A853]" />
              </div>
              <span className="text-sm font-bold text-[#5F6368] dark:text-[#9AA0A6]">
                Membalas dalam 1×24 Jam
              </span>
            </div>
          </div>
        </div>

        {/* CONTENT UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative">
          <div className="contact-input absolute top-2 -left-2 md:-top-4 md:left-auto md:right-[55%] z-20 p-2 md:p-3 bg-white dark:bg-[#303134] rounded-lg md:rounded-xl shadow-[0_15px_30px_rgba(26,115,232,0.15)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm -rotate-12 hidden md:block">
            <Paperclip className="w-5 h-5 md:w-6 md:h-6 text-[#1A73E8] dark:text-[#8AB4F8]" />
          </div>

          <div className="contact-input absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 z-20 p-2.5 md:p-3 bg-white dark:bg-[#303134] rounded-full shadow-[0_15px_30px_rgba(250,187,5,0.15)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-[#DADCE0] dark:border-[#3C4043] backdrop-blur-sm rotate-12">
            <Star className="w-5 h-5 md:w-6 md:h-6 text-[#FABB05] fill-[#FABB05]/20" />
          </div>

          <div className="md:col-span-5 flex flex-col gap-5 z-10">
            <div className="contact-input w-full rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-8 md:p-10 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-300">
              <div>
                <h3 className="font-extrabold text-2xl md:text-3xl text-[#202124] dark:text-white mb-3">
                  Informasi Kontak
                </h3>
                <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed mb-8">
                  Jangan ragu untuk menghubungi saya secara langsung melalui
                  email atau media sosial di bawah ini.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <a
                  href="mailto:kevinnardiansyahh19@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-[#DADCE0] dark:border-[#3C4043] bg-[#F8F9FA] dark:bg-[#202124] hover:border-[#1A73E8] dark:hover:border-[#8AB4F8] transition-all duration-300"
                >
                  <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#3C4043] group-hover:bg-[#1A73E8] group-hover:border-[#1A73E8] text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-white transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider mb-0.5">
                      Email Address
                    </span>
                    <span className="text-sm md:text-base font-bold text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors truncate">
                      kevinnardiansyahh19@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-[#DADCE0] dark:border-[#3C4043] bg-[#F8F9FA] dark:bg-[#202124]">
                  <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#3C4043] text-[#5F6368] dark:text-[#9AA0A6]">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-wider mb-0.5">
                      Base Location
                    </span>
                    <span className="text-sm md:text-base font-bold text-[#202124] dark:text-[#E8EAED]">
                      Tangerang, Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-input w-full rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-4 flex items-center justify-center gap-4 hover:-translate-y-1 transition-all duration-300">
              <a
                href="https://www.linkedin.com/in/kevin-ardiansyah-529b96386/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F8F9FA] dark:bg-[#202124] text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#1A73E8] hover:text-white dark:hover:bg-[#1A73E8] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ouchycode"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F8F9FA] dark:bg-[#202124] text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#202124] hover:text-white dark:hover:bg-[#E8EAED] dark:hover:text-[#202124] transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 h-full z-10">
            <div className="contact-input w-full h-full rounded-[24px] border border-white/60 dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-8 md:p-10 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#1A73E8]" />

              <form
                className="flex flex-col h-full justify-between gap-6 pt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#3C4043] dark:text-[#E8EAED]">
                      Nama Lengkap <span className="text-[#EA4335]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="w-full rounded-lg border border-[#DADCE0] dark:border-[#5F6368] bg-transparent px-4 py-3.5 text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-1 focus:ring-[#1A73E8] dark:focus:ring-[#8AB4F8] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#3C4043] dark:text-[#E8EAED]">
                      Alamat Email <span className="text-[#EA4335]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full rounded-lg border border-[#DADCE0] dark:border-[#5F6368] bg-transparent px-4 py-3.5 text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-1 focus:ring-[#1A73E8] dark:focus:ring-[#8AB4F8] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#3C4043] dark:text-[#E8EAED]">
                      Detail Pesan <span className="text-[#EA4335]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Ceritakan tentang proyek atau ide Anda..."
                      className="w-full rounded-lg border border-[#DADCE0] dark:border-[#5F6368] bg-transparent px-4 py-3.5 text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none resize-none focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-1 focus:ring-[#1A73E8] dark:focus:ring-[#8AB4F8] transition-all"
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] dark:bg-[#8AB4F8] dark:hover:bg-[#aecbfa] text-white dark:text-[#202124] font-bold text-base transition-colors duration-300 shadow-sm"
                  >
                    <Send size={18} strokeWidth={2.5} />
                    Kirim Pesan
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
