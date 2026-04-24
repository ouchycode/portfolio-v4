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
      className="relative overflow-visible md:overflow-hidden px-6 md:px-12 lg:px-20 py-24 md:py-32 text-[#202124] dark:text-[#E8EAED] transition-colors duration-500"
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

      {/* ── Ambient glow — bottom center ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full z-0 opacity-20 dark:opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, #1A73E8 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        {/* ── HEADER ── */}
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="contact-input inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/70 dark:bg-[#303134]/70 backdrop-blur-md shadow-sm w-fit">
            <MessageSquare
              size={14}
              className="text-[#1A73E8] dark:text-[#8AB4F8]"
            />
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
              {t.nav.contact}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="contact-input flex items-end gap-4">
                <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
                  {t.contact.title}
                </h2>
                <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
                  <span className="w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
                  <div className="h-px flex-1 bg-gradient-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
                </div>
              </div>
              <p className="contact-input text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] mt-3 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Fast response badge */}
            <div className="contact-input hidden md:flex shrink-0 pb-2">
              <div
                className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md"
                style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
              >
                <div className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34A853]" />
                </div>
                <span className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6]">
                  {t.contact.fastResponse}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative items-stretch">
          {/* Floating icons */}
          <div className="contact-input absolute -top-6 left-auto sm:right-[58%] z-20 hidden sm:block pointer-events-none">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-md border border-[#F1F3F4] dark:border-[#5F6368] -rotate-12 hover:rotate-0 transition-transform duration-500">
              <Paperclip className="w-5 h-5 text-[#1A73E8] dark:text-[#8AB4F8]" />
            </div>
          </div>
          <div className="contact-input absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 z-20 pointer-events-none">
            <div className="p-3 bg-white dark:bg-[#303134] rounded-full shadow-md border border-[#F1F3F4] dark:border-[#5F6368] rotate-12 hover:rotate-0 transition-transform duration-500">
              <Star className="w-5 h-5 text-[#FABB05] fill-[#FABB05]/25" />
            </div>
          </div>

          {/* ──────────────────────────────
              LEFT: Info + Social
          ────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-5 z-10 w-full">
            {/* Info card */}
            <div className="contact-input flex-1">
              <div
                className="w-full h-full rounded-[2rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
                }}
              >
                <div>
                  <h3 className="font-black tracking-[-0.02em] text-2xl md:text-3xl text-[#202124] dark:text-white mb-3">
                    {t.contact.infoTitle}
                  </h3>

                  {/* G-color bar */}
                  <div className="flex gap-1 mb-5">
                    {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                      <div
                        key={c}
                        className="h-1 flex-1 rounded-full opacity-70"
                        style={{ background: c }}
                      />
                    ))}
                  </div>

                  <p className="text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
                    {t.contact.infoDesc}
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                  {/* Email */}
                  <a
                    href="mailto:kevinnardiansyahh19@gmail.com"
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50 hover:border-[#1A73E8]/40 dark:hover:border-[#8AB4F8]/40 hover:bg-white dark:hover:bg-[#303134] transition-all duration-300"
                  >
                    <div className="w-11 h-11 flex shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#5F6368] group-hover:bg-[#E8F0FE] group-hover:border-[#1A73E8]/30 dark:group-hover:bg-[#1A73E8]/15 text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-all duration-300">
                      <Mail size={20} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6] mb-0.5">
                        Email Address
                      </span>
                      <span className="text-sm font-semibold text-[#202124] dark:text-[#E8EAED] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors truncate">
                        kevinnardiansyahh19@gmail.com
                      </span>
                    </div>
                    {/* accent bar */}
                    <span
                      aria-hidden
                      className="ml-auto w-0.5 h-8 rounded-full shrink-0 bg-gradient-to-b from-[#1A73E8]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50">
                    <div className="w-11 h-11 flex shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#5F6368] text-[#EA4335] dark:text-[#F28B82]">
                      <MapPin size={20} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6] mb-0.5">
                        Base Location
                      </span>
                      <span className="text-sm font-semibold text-[#202124] dark:text-[#E8EAED]">
                        Tangerang, Indonesia
                      </span>
                    </div>
                    <span
                      aria-hidden
                      className="ml-auto w-0.5 h-8 rounded-full shrink-0 bg-gradient-to-b from-[#EA4335]/30 to-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social card */}
            <div className="contact-input">
              <div
                className="w-full rounded-[2rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/kevin-ardiansyah-529b96386/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50 hover:bg-[#1A73E8] hover:border-[#1A73E8] text-[#5F6368] dark:text-[#9AA0A6] hover:text-white transition-all duration-300 active:scale-95"
                >
                  <Linkedin size={18} />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/ouchycode"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50 hover:bg-[#202124] hover:border-[#202124] dark:hover:bg-[#E8EAED] dark:hover:border-[#E8EAED] text-[#5F6368] dark:text-[#9AA0A6] hover:text-white dark:hover:text-[#202124] transition-all duration-300 active:scale-95"
                >
                  <Github size={18} />
                  <span className="text-sm font-semibold">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* ──────────────────────────────
              RIGHT: Form
          ────────────────────────────── */}
          <div className="lg:col-span-7 h-full z-10 w-full">
            <div className="contact-input h-full">
              <div
                className="w-full h-full rounded-[2rem] bg-white/85 dark:bg-[#303134]/85 backdrop-blur-md border border-white/60 dark:border-[#5F6368]/40 p-8 sm:p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
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

                <form
                  className="flex flex-col h-full justify-between gap-7 mt-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex flex-col gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold tracking-[0.08em] uppercase text-[#5F6368] dark:text-[#9AA0A6] pl-1">
                        {t.contact.formName}{" "}
                        <span className="text-[#EA4335]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={t.contact.formNamePlaceholder}
                        className="w-full rounded-2xl border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50 px-5 py-3.5 text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none focus:bg-white dark:focus:bg-[#303134] focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-4 focus:ring-[#1A73E8]/10 dark:focus:ring-[#8AB4F8]/10 transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold tracking-[0.08em] uppercase text-[#5F6368] dark:text-[#9AA0A6] pl-1">
                        {t.contact.formEmail}{" "}
                        <span className="text-[#EA4335]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full rounded-2xl border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50 px-5 py-3.5 text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none focus:bg-white dark:focus:bg-[#303134] focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-4 focus:ring-[#1A73E8]/10 dark:focus:ring-[#8AB4F8]/10 transition-all duration-200"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold tracking-[0.08em] uppercase text-[#5F6368] dark:text-[#9AA0A6] pl-1">
                        {t.contact.formMessage}{" "}
                        <span className="text-[#EA4335]">*</span>
                      </label>
                      <textarea
                        rows={5}
                        placeholder={t.contact.formMessagePlaceholder}
                        className="w-full rounded-2xl border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]/50 px-5 py-3.5 text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none resize-none focus:bg-white dark:focus:bg-[#303134] focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-4 focus:ring-[#1A73E8]/10 dark:focus:ring-[#8AB4F8]/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between gap-4 mt-1">
                    <p className="text-xs text-[#9AA0A6] dark:text-[#5F6368]">
                      <span className="text-[#EA4335]">*</span> required fields
                    </p>
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white overflow-hidden transition-all duration-300 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
                      style={{
                        background: "linear-gradient(135deg,#1A73E8,#4285F4)",
                      }}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <Send
                        size={16}
                        strokeWidth={2.2}
                        className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                      <span className="relative z-10">
                        {t.contact.btnSubmit}
                      </span>
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
