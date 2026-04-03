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
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* CARD CALL TO ACTION */}
        <div className="w-full rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368] bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md shadow-sm p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4">
            {/* Badge Available Status */}
            <div className="footer-item inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#E6F4EA] dark:bg-[#81C995]/15 border border-[#DADCE0] dark:border-[#5F6368] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#34A853]" />
              </div>
              <span className="text-xs font-bold text-[#137333] dark:text-[#81C995] uppercase tracking-wider">
                {t.footer.available}
              </span>
            </div>

            <h2 className="footer-item font-bold tracking-tight text-4xl md:text-5xl lg:text-[3.5rem] text-[#202124] dark:text-white mt-2 leading-tight">
              {t.footer.title}
            </h2>
            <p className="footer-item text-base md:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-md mt-1 md:mt-2 leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div className="footer-item shrink-0 mt-4 md:mt-0 w-full md:w-auto">
            <a
              href="mailto:kevinnardiansyahh19@gmail.com"
              className="group flex items-center justify-center gap-3 h-14 md:h-16 px-8 rounded-full bg-[#1A73E8] hover:bg-[#1B66C9] dark:bg-[#8AB4F8] dark:hover:bg-[#AECBFA] text-white dark:text-[#202124] font-semibold text-base md:text-lg tracking-wide shadow-sm hover:shadow-md active:scale-95 transition-all duration-300 w-full md:w-auto"
            >
              <Mail size={22} strokeWidth={2.5} />
              {t.footer.btn}
              <ArrowUpRight
                size={22}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col gap-8 md:gap-10 pt-10 border-t border-[#DADCE0] dark:border-[#5F6368]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Identity */}
            <div className="footer-item flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-[1.25rem] bg-[#F8F9FA] dark:bg-[#202124]/50 border border-[#DADCE0] dark:border-[#5F6368] text-[#1A73E8] dark:text-[#8AB4F8] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <Fingerprint size={26} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl md:text-2xl tracking-tight text-[#202124] dark:text-white leading-tight mb-1">
                  Kevin Ardiansyah
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-widest">
                  Frontend Engineer
                </p>
              </div>
            </div>

            {/* Social Links (Chips) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <div key={social.name} className="footer-item">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 dark:bg-[#303134]/80 backdrop-blur-sm border border-[#DADCE0] dark:border-[#5F6368] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#1A73E8] dark:hover:text-[#8AB4F8] hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-300"
                    >
                      <Icon size={18} strokeWidth={2} />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {social.name}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Copy & Details */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="footer-item flex items-center justify-center md:justify-start gap-3 text-xs md:text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6]">
              <span>Tangerang, ID (UTC +7)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DADCE0] dark:bg-[#5F6368]" />
              <span>Designed & Built with Precision</span>
            </div>

            <p className="footer-item text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6] uppercase tracking-widest">
              © {new Date().getFullYear()} K.A. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
