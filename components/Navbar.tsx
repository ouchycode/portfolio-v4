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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 200;
      let current = "#";

      navLinks.forEach((link) => {
        if (link.href === "#") return;
        const section = document.querySelector<HTMLElement>(link.href);
        if (!section) return;
        if (scrollY >= section.offsetTop - offset) current = link.href;
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  // Mencari label section yang sedang aktif untuk ditampilkan di pill
  const activeLabel =
    navLinks.find((link) => link.href === active)?.label || "Menu";

  return (
    <nav className="fixed top-5 left-0 right-0 z-[100] flex flex-col items-center px-4 pointer-events-none">
      {/* ── Smart Pill Trigger ── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="pointer-events-auto flex items-center gap-2"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex items-center gap-3 px-4 h-12 
            rounded-full bg-white dark:bg-[#303134] 
            border border-[#DADCE0] dark:border-[#3C4043]
            text-[#202124] dark:text-[#E8EAED]
            shadow-[0_2px_5px_0_rgba(60,64,67,0.1)] 
            hover:border-[#1A73E8] dark:hover:border-[#8AB4F8]
            transition-all duration-300 backdrop-blur-md
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

          <span className="text-sm font-bold tracking-tight min-w-[60px] text-left">
            {isOpen ? "Close" : activeLabel}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-[#5F6368] dark:text-[#9AA0A6]"
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>

        {/* Floating Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
            flex items-center justify-center w-12 h-12 
            rounded-full bg-white dark:bg-[#303134] 
            border border-[#DADCE0] dark:border-[#3C4043]
            text-[#5F6368] dark:text-[#9AA0A6]
            backdrop-blur-md shadow-sm active:scale-90 transition-all
          "
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-[#FBBC05]" />
          ) : (
            <Moon size={20} className="text-[#1A73E8]" />
          )}
        </button>
      </motion.div>

      {/* ── Expanded Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click-away */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/10 dark:bg-black/40 pointer-events-auto backdrop-blur-[2px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="
                pointer-events-auto
                mt-3 p-2 w-full max-w-[260px]
                rounded-[28px] border border-[#DADCE0] dark:border-[#3C4043]
                bg-white/95 dark:bg-[#303134]/95
                backdrop-blur-xl shadow-2xl
              "
            >
              <div className="flex flex-col gap-1">
                <div className="px-4 py-2 mb-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5F6368] dark:text-[#9AA0A6]">
                    Navigation
                  </p>
                </div>

                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  const isActive = active === link.href;

                  return (
                    <a
                      key={i}
                      href={link.href}
                      onClick={() => {
                        setActive(link.href);
                        closeMenu();
                      }}
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
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
