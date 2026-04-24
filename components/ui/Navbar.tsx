"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Cpu,
  MessageSquare,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { href: "#", icon: Home, key: "home" },
  { href: "#about", icon: User, key: "about" },
  { href: "#experience", icon: GraduationCap, key: "experience" },
  { href: "#projects", icon: Briefcase, key: "projects" },
  { href: "#tech", icon: Cpu, key: "tech" },
  { href: "#contact", icon: MessageSquare, key: "contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  const closeMenu = () => setIsOpen(false);
  const toggleLanguage = () => setLanguage(language === "id" ? "en" : "id");

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    closeMenu();
    setIsScrolling(true);
    setActive(href);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const elem = document.querySelector(href);
      if (elem) {
        const offsetPosition =
          elem.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setTimeout(() => setIsScrolling(false), 800);
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    if (isScrolling) return;

    const scrollY = window.scrollY;
    let current = "#";

    if (scrollY >= 50) {
      navLinks.forEach((link) => {
        if (link.href === "#") return;
        const section = document.querySelector<HTMLElement>(link.href);
        if (section && scrollY >= section.offsetTop - 170) current = link.href;
      });
    }
    setActive(current);
  }, [isScrolling]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (!mounted) return null;

  const getLabel = (key: string) => t.nav[key as keyof typeof t.nav];
  const activeLabel =
    active === "#" ? t.nav.home : getLabel(active.replace("#", ""));

  return (
    <>
      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 z-[90] bg-black/20 dark:bg-black/50 backdrop-blur-sm md:hidden pointer-events-auto"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-5 left-0 right-0 z-[100] flex flex-col items-center px-4 pointer-events-none">
        {/* ══════════════════════════════════════════
            DESKTOP NAVBAR
        ══════════════════════════════════════════ */}
        <div
          className="hidden md:flex pointer-events-auto items-center gap-1 p-1.5 rounded-full border transition-all duration-300"
          style={{
            borderColor: scrolled
              ? "rgba(218,220,224,0.8)"
              : "rgba(218,220,224,0.5)",
            background: scrolled
              ? "rgba(255,255,255,0.92)"
              : "rgba(255,255,255,0.75)",
            backdropFilter: "blur(16px)",
            boxShadow: scrolled
              ? "0 1px 3px rgba(60,64,67,.12), 0 4px 12px rgba(60,64,67,.08)"
              : "0 1px 3px rgba(60,64,67,.06)",
          }}
        >
          {/* dark mode override */}
          <style>{`
            @media (prefers-color-scheme: dark) {}
            .dark .navbar-desktop {
              background: rgba(48,49,52,0.92) !important;
              border-color: rgba(95,99,104,0.6) !important;
            }
          `}</style>

          {navLinks.map((link) => {
            const isActive = active === link.href;
            const Icon = link.icon;
            const label = getLabel(link.key);

            return (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`
                  relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-200 group
                  ${
                    isActive
                      ? "bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8]"
                      : "text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#202124] dark:hover:text-[#E8EAED]"
                  }
                `}
              >
                <Icon size={17} strokeWidth={isActive ? 2.5 : 2} />
                <span
                  className={`text-sm font-semibold tracking-wide ${isActive ? "block" : "hidden lg:block"}`}
                >
                  {label}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] lg:hidden" />
                )}

                {/* Tooltip (icon-only breakpoint) */}
                {!isActive && (
                  <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#444746] dark:bg-[#E8EAED] text-white dark:text-[#202124] text-[11px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity lg:hidden pointer-events-none whitespace-nowrap shadow-sm">
                    {label}
                  </span>
                )}
              </a>
            );
          })}

          {/* Divider */}
          <div className="w-px h-5 bg-[#DADCE0] dark:bg-[#5F6368] mx-1.5 shrink-0" />

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#1A73E8] dark:hover:text-[#8AB4F8] active:scale-95 transition-all font-black text-[11px] tracking-[0.1em]"
          >
            {language.toUpperCase()}
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] active:scale-95 transition-all"
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={2} className="text-[#FABB05]" />
            ) : (
              <Moon
                size={18}
                strokeWidth={2}
                className="text-[#1A73E8] dark:text-[#8AB4F8]"
              />
            )}
          </button>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE TRIGGER ROW
        ══════════════════════════════════════════ */}
        <div className="flex md:hidden pointer-events-auto items-center gap-2">
          {/* Nav trigger pill */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 px-4 h-11 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md text-[#202124] dark:text-[#E8EAED] active:scale-95 transition-all duration-200"
            style={{ boxShadow: "0 1px 3px rgba(60,64,67,.10)" }}
          >
            <div className="flex items-center justify-center w-5 h-5">
              {isOpen ? (
                <X
                  size={18}
                  className="text-[#5F6368] dark:text-[#9AA0A6]"
                  strokeWidth={2.5}
                />
              ) : (
                <Menu
                  size={18}
                  className="text-[#1A73E8] dark:text-[#8AB4F8]"
                  strokeWidth={2.5}
                />
              )}
            </div>

            <div className="w-px h-4 bg-[#DADCE0] dark:bg-[#5F6368]" />

            <span className="text-sm font-semibold tracking-wide min-w-[72px] text-left">
              {isOpen ? (language === "id" ? "Tutup" : "Close") : activeLabel}
            </span>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-[#5F6368] dark:text-[#9AA0A6]"
            >
              <ChevronDown size={16} strokeWidth={2.5} />
            </motion.div>
          </button>

          {/* Controls pill (lang + theme) */}
          <div
            className="flex items-center gap-1 bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md border border-[#DADCE0] dark:border-[#5F6368]/60 rounded-full p-1"
            style={{ boxShadow: "0 1px 3px rgba(60,64,67,.10)" }}
          >
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-9 h-9 rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] active:scale-90 transition-all font-black text-[10px] tracking-[0.1em]"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center w-9 h-9 rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] active:scale-90 transition-all"
            >
              {theme === "dark" ? (
                <Sun size={16} strokeWidth={2} className="text-[#FABB05]" />
              ) : (
                <Moon size={16} strokeWidth={2} className="text-[#1A73E8]" />
              )}
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE DROPDOWN
        ══════════════════════════════════════════ */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="md:hidden pointer-events-auto w-full max-w-[300px] mt-2.5 rounded-[1.75rem] border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/96 dark:bg-[#303134]/96 backdrop-blur-md overflow-hidden p-2 z-[95]"
              style={{
                boxShadow:
                  "0 4px 16px rgba(60,64,67,.14), 0 1px 3px rgba(60,64,67,.10)",
              }}
            >
              {/* Google 4-color top bar */}
              <div className="flex h-[2px] mb-3 mx-2">
                {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                  <div
                    key={c}
                    className="flex-1 h-full"
                    style={{ background: c }}
                  />
                ))}
              </div>

              <div className="px-3 py-1 mb-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9AA0A6] dark:text-[#5F6368]">
                  {language === "id" ? "Navigasi" : "Navigation"}
                </p>
              </div>

              <div className="flex flex-col gap-0.5">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  const isActive = active === link.href;
                  const label = getLabel(link.key);

                  return (
                    <a
                      key={i}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`
                        relative flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-200 active:scale-[0.98]
                        ${
                          isActive
                            ? "bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8]"
                            : "text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#202124] dark:hover:text-[#E8EAED]"
                        }
                      `}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                      <span className="text-sm font-semibold tracking-wide flex-1">
                        {label}
                      </span>

                      {isActive && (
                        <motion.div
                          layoutId="mobile-active-dot"
                          className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
