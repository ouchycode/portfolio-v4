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
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useContactAnimation(container);

  return (
    <section
      id="contact"
      ref={container}
      className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-24 md:py-32 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        {/* HEADER */}
        <div className="flex flex-col gap-4">
          <div className="contact-input inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm w-fit">
            <MessageSquare
              size={18}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-sm font-medium tracking-wide text-[#5F6368] dark:text-[#9AA0A6]">
              {t.nav.contact}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="contact-input font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white">
                {t.contact.title}
              </h2>
              <p className="contact-input text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-2xl mt-3 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Badge Fast Response */}
            <div className="contact-input hidden md:flex shrink-0">
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#DADCE0] dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm">
                <div className="relative flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-60" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#34A853]" />
                </div>
                <span className="text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6]">
                  {t.contact.fastResponse}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative">
          {/* ORNAMEN PAPERCLIP */}
          <div className="contact-input absolute -top-6 -left-4 md:-top-8 md:left-auto md:right-[58%] z-20 hidden lg:block">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-md border border-[#F1F3F4] dark:border-[#3C4043] -rotate-12 hover:rotate-0 transition-transform">
              <Paperclip className="w-6 h-6 text-[#1A73E8] dark:text-[#8AB4F8]" />
            </div>
          </div>

          {/* ORNAMEN BINTANG */}
          <div className="contact-input absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 z-20">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-full shadow-md border border-[#F1F3F4] dark:border-[#3C4043] rotate-12 hover:rotate-0 transition-transform">
              <Star className="w-6 h-6 text-[#FABB05] fill-[#FABB05]/20" />
            </div>
          </div>

          {/* KIRI: INFO KONTAK & SOSIAL MEDIA */}
          <div className="lg:col-span-5 flex flex-col gap-6 z-10 w-full">
            {/* Wrapper Info Kontak */}
            <div className="contact-input flex-1">
              <div className="w-full h-full rounded-3xl border border-[#DADCE0] dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm p-8 md:p-10 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div>
                  <h3 className="font-bold text-2xl md:text-3xl text-[#202124] dark:text-white mb-4">
                    {t.contact.infoTitle}
                  </h3>
                  <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed mb-10">
                    {t.contact.infoDesc}
                  </p>
                </div>

                <div className="flex flex-col gap-5 mt-auto">
                  {/* Email Button */}
                  <a
                    href="mailto:kevinnardiansyahh19@gmail.com"
                    className="group flex items-center gap-5 p-4 rounded-2xl border border-[#DADCE0] dark:border-[#3C4043] bg-[#F8F9FA] dark:bg-[#202124] hover:border-[#1A73E8] dark:hover:border-[#8AB4F8] hover:bg-white dark:hover:bg-[#303134] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="w-14 h-14 flex shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#3C4043] group-hover:bg-[#E8F0FE] group-hover:border-[#1A73E8]/30 dark:group-hover:bg-[#1A73E8]/15 text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors duration-300">
                      <Mail size={24} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-xs font-medium text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-widest mb-1">
                        Email Address
                      </span>
                      <span className="text-sm md:text-base font-semibold text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors truncate">
                        kevinnardiansyahh19@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Location Info */}
                  <div className="flex items-center gap-5 p-4 rounded-2xl border border-[#DADCE0] dark:border-[#3C4043] bg-[#F8F9FA] dark:bg-[#202124]">
                    <div className="w-14 h-14 flex shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#3C4043] text-[#5F6368] dark:text-[#9AA0A6]">
                      <MapPin size={24} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-widest mb-1">
                        Base Location
                      </span>
                      <span className="text-sm md:text-base font-semibold text-[#202124] dark:text-[#E8EAED]">
                        Tangerang, Indonesia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wrapper Social Links */}
            <div className="contact-input">
              <div className="w-full rounded-3xl border border-[#DADCE0] dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm p-5 flex items-center justify-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <a
                  href="https://www.linkedin.com/in/kevin-ardiansyah-529b96386/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F8F9FA] dark:bg-[#202124] border border-[#DADCE0] dark:border-[#3C4043] text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#1A73E8] hover:border-[#1A73E8] hover:text-white dark:hover:bg-[#1A73E8] transition-all duration-300"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/ouchycode"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F8F9FA] dark:bg-[#202124] border border-[#DADCE0] dark:border-[#3C4043] text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#202124] hover:border-[#202124] hover:text-white dark:hover:bg-[#E8EAED] dark:hover:border-[#E8EAED] dark:hover:text-[#202124] transition-all duration-300"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* KANAN: FORMULIR */}
          <div className="lg:col-span-7 h-full z-10 w-full">
            <div className="contact-input h-full">
              <div className="w-full h-full rounded-3xl border border-[#DADCE0] dark:border-[#3C4043] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm p-8 md:p-10 relative overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                {/* Aksen Biru Google di atas Card Form */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#1A73E8] dark:bg-[#8AB4F8]" />

                <form
                  className="flex flex-col h-full justify-between gap-8 mt-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex flex-col gap-6">
                    {/* Input Nama */}
                    <div className="flex flex-col gap-2.5">
                      <label className="text-sm font-medium text-[#3C4043] dark:text-[#E8EAED] pl-1">
                        {t.contact.formName}{" "}
                        <span className="text-[#EA4335]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={t.contact.formNamePlaceholder}
                        className="w-full rounded-xl border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] px-5 py-4 text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none focus:bg-white dark:focus:bg-[#303134] focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-2 focus:ring-[#1A73E8]/20 dark:focus:ring-[#8AB4F8]/20 transition-all duration-300"
                      />
                    </div>

                    {/* Input Email */}
                    <div className="flex flex-col gap-2.5">
                      <label className="text-sm font-medium text-[#3C4043] dark:text-[#E8EAED] pl-1">
                        {t.contact.formEmail}{" "}
                        <span className="text-[#EA4335]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full rounded-xl border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] px-5 py-4 text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none focus:bg-white dark:focus:bg-[#303134] focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-2 focus:ring-[#1A73E8]/20 dark:focus:ring-[#8AB4F8]/20 transition-all duration-300"
                      />
                    </div>

                    {/* Input Pesan */}
                    <div className="flex flex-col gap-2.5">
                      <label className="text-sm font-medium text-[#3C4043] dark:text-[#E8EAED] pl-1">
                        {t.contact.formMessage}{" "}
                        <span className="text-[#EA4335]">*</span>
                      </label>
                      <textarea
                        rows={5}
                        placeholder={t.contact.formMessagePlaceholder}
                        className="w-full rounded-xl border border-[#DADCE0] dark:border-[#5F6368] bg-[#F8F9FA] dark:bg-[#202124] px-5 py-4 text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none resize-none focus:bg-white dark:focus:bg-[#303134] focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-2 focus:ring-[#1A73E8]/20 dark:focus:ring-[#8AB4F8]/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Tombol Submit */}
                  <div className="mt-2 flex justify-end">
                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[#1A73E8] hover:bg-[#1B66C9] dark:bg-[#8AB4F8] dark:hover:bg-[#aecbfa] text-white dark:text-[#202124] font-medium text-base tracking-wide transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Send
                        size={18}
                        strokeWidth={2}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                      {t.contact.btnSubmit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
