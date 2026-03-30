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
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#experience", icon: GraduationCap, label: "Experience" },
  { href: "#projects", icon: Briefcase, label: "Projects" },
  { href: "#tech", icon: Cpu, label: "Tech" },
  { href: "#contact", icon: MessageSquare, label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#");

  useEffect(() => setMounted(true), []);

  const closeMenu = () => setIsOpen(false);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    closeMenu();

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const elem = document.querySelector(href);
    if (elem) {
      const offset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const offset = window.innerHeight * 0.3;
      let current = "#";

      if (scrollY < 100) {
        current = "#";
      } else {
        navLinks.forEach((link) => {
          if (link.href === "#") return;
          const section = document.querySelector<HTMLElement>(link.href);
          if (!section) return;
          if (scrollY >= section.offsetTop - offset) {
            current = link.href;
          }
        });
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const activeLabel =
    navLinks.find((link) => link.href === active)?.label || "Menu";

  return (
    <nav className="fixed top-5 left-0 right-0 z-[100] flex flex-col items-center px-4 pointer-events-none">
      {/* DESKTOP FLOTING NAVBAR */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="
          hidden md:flex pointer-events-auto items-center gap-1.5 p-2 
          rounded-full border border-white/60 dark:border-[#3C4043] 
          bg-white/80 dark:bg-[#303134]/80 backdrop-blur-md 
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]
        "
      >
        {navLinks.map((link) => {
          const isActive = active === link.href;
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`
                relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 group
                ${
                  isActive
                    ? "bg-[#1A73E8] text-white shadow-md"
                    : "text-[#5F6368] dark:text-[#9AA0A6] hover:bg-black/5 dark:hover:bg-white/10 hover:text-[#202124] dark:hover:text-white"
                }
              `}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              <span
                className={`text-sm font-bold tracking-wide ${isActive ? "block" : "hidden lg:block"}`}
              >
                {link.label}
              </span>

              {!isActive && (
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#202124] dark:bg-white text-white dark:text-[#202124] text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity lg:hidden pointer-events-none whitespace-nowrap">
                  {link.label}
                </span>
              )}
            </a>
          );
        })}

        <div className="w-px h-8 bg-[#DADCE0] dark:bg-[#5F6368] mx-2" />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center justify-center w-10 h-10 rounded-full text-[#5F6368] dark:text-[#9AA0A6] hover:bg-black/5 dark:hover:bg-white/10 hover:text-[#1A73E8] transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </motion.div>

      {/* MOBILE SMART BUTTON */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex md:hidden pointer-events-auto items-center gap-2"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex items-center gap-3 px-4 h-12 
            rounded-full bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
            border border-white/60 dark:border-[#3C4043]
            text-[#202124] dark:text-[#E8EAED]
            shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)]
            hover:border-[#1A73E8] dark:hover:border-[#8AB4F8]
            transition-all duration-300
          "
        >
          <div className="flex items-center justify-center w-6 h-6">
            {isOpen ? (
              <X size={20} className="text-[#EA4335]" />
            ) : (
              <Menu size={20} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
            )}
          </div>

          <div className="w-px h-4 bg-[#DADCE0] dark:bg-[#5F6368]" />

          <span className="text-sm font-bold tracking-tight min-w-[70px] text-left">
            {isOpen ? "Tutup" : activeLabel}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-[#5F6368] dark:text-[#9AA0A6]"
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
            flex items-center justify-center w-12 h-12 
            rounded-full bg-white/90 dark:bg-[#303134]/90 backdrop-blur-md
            border border-white/60 dark:border-[#3C4043]
            text-[#5F6368] dark:text-[#9AA0A6]
            shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)]
            active:scale-90 transition-all
          "
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-[#FBBC05]" />
          ) : (
            <Moon size={20} className="text-[#1A73E8]" />
          )}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/10 dark:bg-black/40 pointer-events-auto backdrop-blur-[2px] -z-10"
            />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="
                pointer-events-auto
                mt-3 p-3 w-full max-w-[260px]
                rounded-[28px] border border-white/60 dark:border-[#3C4043]
                bg-white/90 dark:bg-[#303134]/90
                backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)]
              "
            >
              <div className="flex flex-col gap-1.5">
                <div className="px-4 py-2 mb-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5F6368] dark:text-[#9AA0A6]">
                    Navigasi
                  </p>
                </div>

                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  const isActive = active === link.href;

                  return (
                    <a
                      key={i}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`
                        relative flex items-center gap-4 px-4 py-3 rounded-2xl
                        transition-all duration-200 group
                        ${
                          isActive
                            ? "bg-[#E8F0FE] dark:bg-[#1A73E8]/20 text-[#1A73E8] dark:text-[#8AB4F8]"
                            : "text-[#5F6368] dark:text-[#9AA0A6] hover:bg-[#F1F3F4] dark:hover:bg-[#3C4043]"
                        }
                      `}
                    >
                      <div
                        className={`
                        flex items-center justify-center w-8 h-8 rounded-full transition-colors
                        ${isActive ? "bg-white dark:bg-[#1A73E8]/30 shadow-sm" : "bg-transparent"}
                      `}
                      >
                        <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                      </div>
                      <span className="text-sm font-bold tracking-tight">
                        {link.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8]"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
