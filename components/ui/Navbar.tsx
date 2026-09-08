"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Cpu,
  MessageSquare,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const NAV_LINKS = [
  { href: "#", label: "home", key: "home", icon: Home },
  { href: "#about", label: "about", key: "about", icon: User },
  { href: "#experience", label: "experience", key: "experience", icon: Briefcase },
  { href: "#projects", label: "projects", key: "projects", icon: Briefcase },
  { href: "#tech", label: "tech", key: "tech", icon: Cpu },
  { href: "#contact", label: "contact", key: "contact", icon: MessageSquare },
] as const;

function Clock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="rv-pixel text-[11px] text-ink tabular-nums">
      {now || "--:--:--"}
    </span>
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#");
  const [isScrolling, setIsScrolling] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleLanguage = () => setLanguage(language === "id" ? "en" : "id");
  const toggleTheme = () => {
    setMenuOpen(false);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const getLabel = (key: string) => t.nav[key as keyof typeof t.nav];

  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      setIsScrolling(true);
      setActive(href);
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
      setTimeout(() => setIsScrolling(false), 800);
    },
    [],
  );

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        if (!isScrolling) {
          let current = "#";
          if (window.scrollY >= 50) {
            NAV_LINKS.forEach((link) => {
              if (link.href === "#") return;
              const el = document.getElementById(link.href.substring(1));
              if (el && window.scrollY >= el.offsetTop - 170) current = link.href;
            });
          }
          setActive(current);
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [isScrolling]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (!mounted) return null;
  if (pathname !== "/") return null;

  return (
    <>
      {/* ── Start menu ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.12 }}
            className="fixed bottom-16 left-2 md:left-4 z-[110] w-64 rv-window p-1.5"
          >
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = active === link.href;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  data-active={isActive}
                  className="rv-hover rv-pixel flex items-center gap-3 px-3 py-2.5 text-[12px] uppercase tracking-wider text-ink"
                >
                  <Icon size={15} className="shrink-0" />
                  {getLabel(link.key)}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 bg-vtblue" />
                  )}
                </a>
              );
            })}
            <div className="h-px bg-inkmute/40 my-1 mx-2" />
            <button
              onClick={toggleTheme}
              className="rv-hover rv-pixel flex w-full items-center gap-3 px-3 py-2.5 text-[12px] uppercase tracking-wider text-ink text-left"
            >
              {theme === "dark" ? (
                <Sun size={15} className="shrink-0 text-vtamber" />
              ) : (
                <Moon size={15} className="shrink-0 text-vtblue" />
              )}
              {language === "id"
                ? theme === "dark"
                  ? "Mode Terang"
                  : "Mode Gelap"
                : theme === "dark"
                  ? "Light Mode"
                  : "Dark Mode"}
            </button>
            <button
              onClick={toggleLanguage}
              className="rv-hover rv-pixel flex w-full items-center gap-3 px-3 py-2.5 text-[12px] uppercase tracking-wider text-ink text-left"
            >
              <span className="w-[15px] flex justify-center font-bold text-vtpink">
                {language.toUpperCase()}
              </span>
              {language === "id" ? "Bahasa / Language" : "Bahasa / Language"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Top menubar (File Edit View Go…) ───────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="rv rv-raised flex items-center gap-0.5 px-2 md:px-4 h-9">
          <span className="rv-pixel text-[11px] text-vtpink font-bold tracking-widest mr-2 select-none">
            portfolio_
          </span>

          <nav className="hidden md:flex items-center gap-0.5 flex-1 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  data-active={isActive}
                  className={`rv-hover rv-pixel px-2.5 md:px-3 py-1 text-[11px] uppercase tracking-wider whitespace-nowrap ${
                    isActive ? "!bg-vtblue !text-white" : "text-ink"
                  }`}
                >
                  {getLabel(link.key)}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-0.5">
            <button
              onClick={toggleLanguage}
              title="Language"
              className="rv-hover rv-pixel px-2.5 py-1 text-[11px] uppercase tracking-wider text-ink"
            >
              {language === "id" ? "ID" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              title="Theme"
              className="rv-hover flex items-center justify-center w-8 h-8 text-ink"
            >
              {theme === "dark" ? (
                <Sun size={15} className="text-vtamber" />
              ) : (
                <Moon size={15} className="text-vtblue" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Bottom taskbar (Start + quick launch + tray) ──────────────── */}
      <header className="fixed bottom-0 left-0 right-0 z-[100]">
        <div className="rv rv-raised flex items-center gap-2 px-2 md:px-4 h-12">
          {/* Start button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-active={menuOpen}
            className={`rv-pixel flex items-center gap-2 pl-2 pr-3 py-1.5 text-[12px] font-bold uppercase tracking-wider text-ink ${
              menuOpen ? "rv-sunken" : "rv-raised"
            }`}
          >
            <span className="grid place-items-center w-5 h-5 bg-vtpink text-white text-[13px] leading-none shadow-[1px_1px_0_#00000055]">
              ⊞
            </span>
            Start
          </button>

          <div className="h-8 w-px bg-inkmute/50" />

          {/* Quick launch — desktop */}
          <nav className="hidden md:flex items-center gap-1.5">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = active === link.href;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  title={getLabel(link.key)}
                  data-active={isActive}
                  className={`flex items-center justify-center w-9 h-9 ${
                    isActive ? "rv-sunken bg-vtcard" : "rv-hover"
                  }`}
                >
                  <Icon
                    size={16}
                    className={isActive ? "text-vtblue" : "text-ink"}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex-1" />

          {/* Status + clock tray */}
          <div className="hidden sm:flex items-center gap-3 rv-sunken bg-vtcard px-3 h-8">
            <span className="flex items-center gap-1.5 rv-pixel text-[10px] uppercase tracking-wider text-ink">
              <span className="w-1.5 h-1.5 bg-vtcrt animate-pulse" />
              Online
            </span>
            <span className="w-px h-5 bg-inkmute/50" />
            <Clock />
          </div>
        </div>
      </header>
    </>
  );
}