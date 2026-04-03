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

  useEffect(() => setMounted(true), []);

  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

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
        const offset = 120;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    setTimeout(() => setIsScrolling(false), 800);
  };

  const handleScroll = useCallback(() => {
    if (isScrolling) return;

    const scrollY = window.scrollY;
    const offset = 120;
    let current = "#";

    if (scrollY < 50) {
      current = "#";
    } else {
      navLinks.forEach((link) => {
        if (link.href === "#") return;
        const section = document.querySelector<HTMLElement>(link.href);
        if (!section) return;
        if (scrollY >= section.offsetTop - offset - 50) {
          current = link.href;
        }
      });
    }
    setActive(current);
  }, [isScrolling]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Jika belum mounted, jangan render apa-apa untuk menghindari error hydration
  if (!mounted) return null;

  const getLabel = (key: string) => {
    return t.nav[key as keyof typeof t.nav];
  };

  const activeLabel =
    active === "#" ? t.nav.home : getLabel(active.replace("#", ""));

  return (
    <>
      {/* ========================================= */}
      {/* OVERLAY MOBILE */}
      {/* ========================================= */}
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

      {/* HEADER UTAMA */}
      <header className="fixed top-6 left-0 right-0 z-[100] flex flex-col items-center px-4 pointer-events-none">
        {/* ========================================= */}
        {/* DESKTOP FLOATING NAVBAR (Ganti motion.div ke div biasa) */}
        {/* ========================================= */}
        <div
          className="
            hidden md:flex pointer-events-auto items-center gap-1.5 p-2 
            rounded-full border border-[#DADCE0] dark:border-[#5F6368] 
            bg-white/80 dark:bg-[#303134]/80 backdrop-blur-md shadow-sm
            hover:shadow-md transition-shadow
          "
        >
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
                  relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8]"
                      : "text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#202124] dark:hover:text-[#E8EAED]"
                  }
                `}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                <span
                  className={`text-sm font-semibold tracking-wide ${isActive ? "block" : "hidden lg:block"}`}
                >
                  {label}
                </span>

                {/* Material Tooltip */}
                {!isActive && (
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#444746] dark:bg-[#E8EAED] text-white dark:text-[#202124] text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity lg:hidden pointer-events-none whitespace-nowrap shadow-sm">
                    {label}
                  </span>
                )}
              </a>
            );
          })}

          <div className="w-px h-6 bg-[#DADCE0] dark:bg-[#5F6368] mx-2" />

          {/* TOMBOL BAHASA (DESKTOP) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#1A73E8] dark:hover:text-[#8AB4F8] active:scale-95 transition-all font-bold text-xs tracking-wider"
          >
            {language.toUpperCase()}
          </button>

          {/* TOMBOL THEME (DESKTOP) */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#1A73E8] dark:hover:text-[#8AB4F8] active:scale-95 transition-all"
          >
            {theme === "dark" ? (
              <Sun size={20} strokeWidth={2.5} />
            ) : (
              <Moon size={20} strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* ========================================= */}
        {/* MOBILE SMART BUTTON (Ganti motion.div ke div biasa) */}
        {/* ========================================= */}
        <div className="flex md:hidden pointer-events-auto items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex items-center gap-3 px-5 h-12 
              rounded-full bg-white/80 dark:bg-[#303134]/80 backdrop-blur-md
              border border-[#DADCE0] dark:border-[#5F6368]
              text-[#202124] dark:text-[#E8EAED]
              shadow-sm hover:shadow-md active:scale-95
              transition-all duration-300
            "
          >
            <div className="flex items-center justify-center w-5 h-5">
              {isOpen ? (
                <X
                  size={20}
                  className="text-[#5F6368] dark:text-[#9AA0A6]"
                  strokeWidth={2.5}
                />
              ) : (
                <Menu
                  size={20}
                  className="text-[#1A73E8] dark:text-[#8AB4F8]"
                  strokeWidth={2.5}
                />
              )}
            </div>

            <div className="w-px h-4 bg-[#DADCE0] dark:bg-[#5F6368]" />

            <span className="text-sm font-semibold tracking-wide min-w-[75px] text-left">
              {isOpen ? (language === "id" ? "Tutup" : "Close") : activeLabel}
            </span>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#5F6368] dark:text-[#9AA0A6]"
            >
              <ChevronDown size={18} strokeWidth={2.5} />
            </motion.div>
          </button>

          <div className="flex items-center gap-1.5 bg-white/80 dark:bg-[#303134]/80 backdrop-blur-md border border-[#DADCE0] dark:border-[#5F6368] rounded-full p-1 shadow-sm">
            {/* TOMBOL BAHASA (MOBILE) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] active:scale-90 transition-all font-bold text-xs"
            >
              {language.toUpperCase()}
            </button>

            {/* TOMBOL THEME (MOBILE) */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center w-10 h-10 rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] active:scale-90 transition-all"
            >
              {theme === "dark" ? (
                <Sun size={18} strokeWidth={2.5} className="text-[#FABB05]" />
              ) : (
                <Moon size={18} strokeWidth={2.5} className="text-[#1A73E8]" />
              )}
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* MOBILE DROPDOWN MENU */}
        {/* ========================================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="
                md:hidden pointer-events-auto w-full max-w-[320px] mt-3
                rounded-[2rem] border border-[#DADCE0] dark:border-[#5F6368]
                bg-white/95 dark:bg-[#303134]/95 backdrop-blur-md shadow-lg overflow-hidden p-3 z-[95]
              "
            >
              <div className="flex flex-col gap-1">
                <div className="px-4 py-2 mb-1">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6]">
                    {language === "id" ? "Navigasi" : "Navigation"}
                  </p>
                </div>

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
                        relative flex items-center gap-4 px-5 py-3.5 rounded-full transition-all duration-300 active:scale-[0.98]
                        ${
                          isActive
                            ? "bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8]"
                            : "text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#202124] dark:hover:text-[#E8EAED]"
                        }
                      `}
                    >
                      <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                      <span className="text-sm font-semibold tracking-wide">
                        {label}
                      </span>

                      {/* Indicator Active Mobile */}
                      {isActive && (
                        <motion.div
                          layoutId="mobile-active-indicator"
                          className="absolute right-5 w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8]"
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
