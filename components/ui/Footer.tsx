"use client";

import { useRef, useState } from "react";
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
import { TerminalEasterEgg } from "./TerminalEasterEgg";
import { WeatherWidget } from "./WeatherWidget";

const RETRO_COLORS = ["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"];

const SOCIALS = [
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
  { name: "Tiktok", url: "https://www.tiktok.com/@ouchycode", icon: FaTiktok },
] as const;

export default function Footer() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const [, setClickCount] = useState(0);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useFooterAnimation(container);

  const handleFingerprintClick = () => {
    setClickCount((prev) => {
      if (prev + 1 >= 3) {
        setIsTerminalOpen(true);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <>
      <footer
        ref={container}
        className="relative overflow-hidden px-4 md:px-8 pt-16 pb-28 md:pt-20 md:pb-32"
      >
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
          {/* ── Bootstrap dialog window ── */}
          <div
            data-vt="open"
            className="footer-item rv-window w-full relative overflow-hidden"
          >
            {/* Window titlebar */}
            <div className="rv-titlebar">
              <span className="rv-titlebar-label select-none">
                hire_kevin.exe — Install
              </span>
              <span className="ml-auto flex items-center gap-1 select-none">
                <span className="rv-titlebar-btn text-[8px]">─</span>
                <span className="rv-titlebar-btn text-[8px]">□</span>
                <span className="rv-titlebar-btn text-[9px]">×</span>
              </span>
            </div>

            {/* Retro color top bar */}
            <div aria-hidden className="absolute top-0 left-0 right-0 h-1 flex">
              {RETRO_COLORS.map((c) => (
                <div key={c} className="flex-1 h-full" style={{ background: c }} />
              ))}
            </div>

            <div className="rv-panel p-6 sm:p-8 md:p-12 rounded-none flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              {/* Left — text */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 mt-2">
                {/* Available badge */}
                <div className="rv-chip rv-pixel flex items-center gap-2.5 px-3.5 py-1.5 bg-vtcard">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex h-full w-full bg-vtcrt opacity-50 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 bg-vtcrt" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
                    {t.footer.available}
                  </span>
                </div>

                <h2
                  className="footer-item font-bold tracking-tight text-3xl md:text-5xl lg:text-[3.25rem] text-ink leading-[1.05]"
                  style={{ fontFamily: "var(--vt-font-display)" }}
                >
                  {t.footer.title}
                </h2>

                {/* Retro color bar */}
                <div className="flex gap-1 w-32">
                  {RETRO_COLORS.map((c) => (
                    <div
                      key={c}
                      className="h-1.5 flex-1 rv-sunken"
                      style={{ background: c, opacity: 0.75 }}
                    />
                  ))}
                </div>

                <p className="footer-item text-sm md:text-base lg:text-lg text-ink-soft max-w-md leading-relaxed">
                  {t.footer.desc}
                </p>
              </div>

              {/* Right — CTA button */}
              <div className="footer-item shrink-0 w-full md:w-auto">
                <a
                  href="mailto:kevinnardiansyahh19@gmail.com"
                  className="rv-btn-primary rv-pixel group inline-flex items-center justify-center gap-3 h-13 md:h-16 px-8 md:px-10 text-[13px] md:text-[15px] tracking-wider w-full md:w-auto"
                >
                  <Mail size={19} strokeWidth={2.2} className="relative z-10" />
                  <span className="relative z-10">{t.footer.btn}</span>
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2.2}
                    className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ── Bottom section ── */}
          <div className="flex flex-col gap-7 md:gap-8 pt-6 md:pt-8 border-t border-inkmute/30">
            {/* Identity + Social */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              {/* Identity */}
              <div className="footer-item flex items-center gap-4">
                <div
                  onClick={handleFingerprintClick}
                  title="Click me 3 times..."
                  className="w-12 h-12 md:w-13 md:h-13 flex items-center justify-center rv-raised bg-chrome text-vtcrt cursor-pointer hover:bg-vtblue hover:text-white transition-colors"
                >
                  <Fingerprint size={23} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <h3
                    className="font-bold text-xl md:text-2xl text-ink leading-tight"
                    style={{ fontFamily: "var(--vt-font-display)" }}
                  >
                    Kevin Ardiansyah
                  </h3>
                  <p className="rv-pixel text-[10px] text-inkmute uppercase tracking-[0.16em] mt-0.5">
                    Software Engineer
                  </p>
                </div>
              </div>

              {/* Social buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {SOCIALS.map(({ name, url, icon: Icon }) => (
                  <div key={name} className="footer-item">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rv-btn rv-pixel group flex items-center gap-2 px-3.5 h-9 text-[10px] font-bold uppercase tracking-widest"
                    >
                      <Icon size={13} strokeWidth={2} className="relative z-10" />
                      <span className="relative z-10">{name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="footer-item">
                <WeatherWidget />
              </div>

              <div className="footer-item flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1 items-center">
                    {RETRO_COLORS.map((c) => (
                      <span
                        key={c}
                        className="w-1.5 h-1.5"
                        style={{ background: c, opacity: 0.75 }}
                      />
                    ))}
                  </div>
                  <p className="rv-pixel text-[10px] text-inkmute uppercase tracking-[0.16em]">
                    © {new Date().getFullYear()} K.A. — KevinOS v1.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <TerminalEasterEgg
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </>
  );
}