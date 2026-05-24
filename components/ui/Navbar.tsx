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
import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const GOOGLE_COLORS = ["#EA4335", "#FABB05", "#34A853", "#1A73E8"];

const NAV_LINKS = [
  { href: "#", icon: Home, key: "home" },
  { href: "#about", icon: User, key: "about" },
  { href: "#experience", icon: GraduationCap, key: "experience" },
  { href: "#projects", icon: Briefcase, key: "projects" },
  { href: "#tech", icon: Cpu, key: "tech" },
  { href: "#contact", icon: MessageSquare, key: "contact" },
] as const;

// ── Desktop nav item ─────────────────────────────────────────────────
function NavItem({
  href,
  icon: Icon,
  label,
  isActive,
  onClick,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      className={`
        relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors duration-200 group
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

      {/* Active dot — icon-only breakpoint */}
      {isActive && (
        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] lg:hidden" />
      )}

      {/* Tooltip — icon-only breakpoint */}
      {!isActive && (
        <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#444746] dark:bg-[#E8EAED] text-white dark:text-[#202124] text-[11px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity lg:hidden pointer-events-none whitespace-nowrap shadow-sm">
          {label}
        </span>
      )}
    </a>
  );
}

// ── Theme + lang toggle button ────────────────────────────────────────
function IconButton({
  onClick,
  className = "",
  children,
}: {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] active:scale-95 transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}

// ── Main ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const toggleLanguage = () => setLanguage(language === "id" ? "en" : "id");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const getLabel = (key: string) => t.nav[key as keyof typeof t.nav];
  const activeLabel =
    active === "#" ? t.nav.home : getLabel(active.replace("#", ""));

  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeMenu();
      setIsScrolling(true);
      setActive(href);

      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 120;
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
        setScrolled(window.scrollY > 20);
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (!mounted) return null;

  // Sembunyikan Navbar sepenuhnya jika tidak di halaman utama (home)
  if (pathname !== "/") return null;



  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 z-90 bg-black/20 dark:bg-black/40 md:hidden"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-5 left-0 right-0 z-100 flex flex-col items-center px-4 pointer-events-none">
        {/* ── Desktop ── */}
        <nav
          className={`
    hidden md:flex pointer-events-auto items-center gap-1 p-1.5 rounded-full border
    transition-colors duration-200
    ${
      scrolled
        ? "bg-white/95 dark:bg-[#303134]/95 border-[#DADCE0]/90 dark:border-[#5F6368]/60 shadow-[0_1px_3px_rgba(60,64,67,.12),0_4px_12px_rgba(60,64,67,.08)]"
        : "bg-white/80 dark:bg-[#303134]/80 border-[#DADCE0]/50 dark:border-[#5F6368]/40 shadow-[0_1px_3px_rgba(60,64,67,.06)]"
    }
  `}
          style={{ backdropFilter: "blur(16px)" }}
        >
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.key}
              href={link.href}
              icon={link.icon}
              label={getLabel(link.key)}
              isActive={active === link.href}
              onClick={handleScrollTo}
            />
          ))}

          <div className="w-px h-5 bg-[#DADCE0] dark:bg-[#5F6368] mx-1.5 shrink-0" />

          <IconButton
            onClick={toggleLanguage}
            className="w-10 h-10 font-black text-[11px] tracking-widest"
          >
            {language.toUpperCase()}
          </IconButton>

          <IconButton onClick={toggleTheme} className="w-10 h-10">
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={2} className="text-[#FABB05]" />
            ) : (
              <Moon size={18} strokeWidth={2} className="text-[#1A73E8]" />
            )}
          </IconButton>
        </nav>

        {/* ── Mobile trigger row ── */}
        <div className="flex md:hidden pointer-events-auto items-center gap-2">
          {/* Nav pill */}
          <button
            className={`
    flex items-center gap-3 px-4 h-11 rounded-full border active:scale-95 transition-colors duration-200
    border-[#DADCE0] dark:border-[#5F6368]/60
    bg-white/95 dark:bg-[#303134]/95
    text-[#202124] dark:text-[#E8EAED]
    shadow-[0_1px_3px_rgba(60,64,67,.10)]
  `}
            style={{ backdropFilter: "blur(12px)" }}
            onClick={() => setIsOpen(!isOpen)}
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
            <span className="text-sm font-semibold tracking-wide min-w-18 text-left">
              {isOpen ? (language === "id" ? "Tutup" : "Close") : activeLabel}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#5F6368] dark:text-[#9AA0A6]"
            >
              <ChevronDown size={16} strokeWidth={2.5} />
            </motion.div>
          </button>

          {/* Controls pill */}
          <div
            className="flex items-center gap-1 rounded-full p-1 border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white/95 dark:bg-[#303134]/95 shadow-[0_1px_3px_rgba(60,64,67,.10)]"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <IconButton
              onClick={toggleLanguage}
              className="w-9 h-9 font-black text-[10px] tracking-widest"
            >
              {language.toUpperCase()}
            </IconButton>
            <IconButton onClick={toggleTheme} className="w-9 h-9">
              {theme === "dark" ? (
                <Sun size={16} strokeWidth={2} className="text-[#FABB05]" />
              ) : (
                <Moon size={16} strokeWidth={2} className="text-[#1A73E8]" />
              )}
            </IconButton>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="md:hidden pointer-events-auto w-full max-w-75 mt-2.5 rounded-[1.75rem] border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] overflow-hidden p-2 z-95"
              style={{
                boxShadow:
                  "0 4px 16px rgba(60,64,67,.14), 0 1px 3px rgba(60,64,67,.10)",
              }}
            >
              {/* Google color bar */}
              <div className="flex h-0.5 mb-3 mx-2">
                {GOOGLE_COLORS.map((c) => (
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
                {NAV_LINKS.map((link) => {
                  const Icon = link.icon;
                  const isActive = active === link.href;
                  return (
                    <a
                      key={link.key}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`
                        flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-colors duration-200 active:scale-[0.98]
                        ${
                          isActive
                            ? "bg-[#E8F0FE] dark:bg-[#8AB4F8]/15 text-[#1A73E8] dark:text-[#8AB4F8]"
                            : "text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F8F9FA] dark:hover:bg-[#3C4043] hover:text-[#202124] dark:hover:text-[#E8EAED]"
                        }
                      `}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                      <span className="text-sm font-semibold tracking-wide flex-1">
                        {getLabel(link.key)}
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
