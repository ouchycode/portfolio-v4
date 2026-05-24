"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { Search, Monitor, Moon, Sun, Briefcase, FileCode2, Mail, Palette } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useThemeColor, THEME_COLORS } from "@/context/ThemeColorContext";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const { setThemeColor } = useThemeColor();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#202124]/40 dark:bg-[#12161D]/60 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
      <div className="w-full max-w-xl mx-4 rounded-2xl bg-white dark:bg-[#202124] shadow-2xl border border-[#DADCE0] dark:border-[#5F6368] overflow-hidden">
        <Command label="Global Command Menu" shouldFilter={true}>
          <div className="flex items-center border-b border-[#DADCE0] dark:border-[#5F6368]/40 px-4">
            <Search className="w-5 h-5 text-[#9AA0A6]" />
            <Command.Input 
              autoFocus
              placeholder="Type a command or search..." 
              className="flex-1 h-14 px-3 bg-transparent outline-none text-[#202124] dark:text-[#E8EAED] placeholder-[#9AA0A6]"
            />
            <button 
              onClick={() => setOpen(false)}
              className="text-xs bg-[#F1F3F4] dark:bg-[#303134] px-2 py-1 rounded text-[#5F6368] dark:text-[#9AA0A6] font-semibold"
            >
              ESC
            </button>
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-[#5F6368]">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-xs font-semibold text-[#9AA0A6] px-2 py-2">
              <Command.Item 
                onSelect={() => runCommand(() => window.location.hash = "#projects")}
                className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-sm text-[#202124] dark:text-[#E8EAED] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#303134] aria-selected:bg-[#E8F0FE] aria-selected:text-[var(--google-blue)] dark:aria-selected:bg-[var(--google-blue)]/20 dark:aria-selected:text-[var(--google-blue-dark)]"
              >
                <FileCode2 className="w-4 h-4" /> Go to Projects
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => window.location.hash = "#experience")}
                className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-sm text-[#202124] dark:text-[#E8EAED] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#303134] aria-selected:bg-[#E8F0FE] aria-selected:text-[var(--google-blue)] dark:aria-selected:bg-[var(--google-blue)]/20 dark:aria-selected:text-[var(--google-blue-dark)]"
              >
                <Briefcase className="w-4 h-4" /> Go to Experience
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => window.location.hash = "#contact")}
                className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-sm text-[#202124] dark:text-[#E8EAED] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#303134] aria-selected:bg-[#E8F0FE] aria-selected:text-[var(--google-blue)] dark:aria-selected:bg-[var(--google-blue)]/20 dark:aria-selected:text-[var(--google-blue-dark)]"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Theme" className="text-xs font-semibold text-[#9AA0A6] px-2 py-2 mt-2">
              <Command.Item 
                onSelect={() => runCommand(() => setTheme("light"))}
                className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-sm text-[#202124] dark:text-[#E8EAED] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#303134] aria-selected:bg-[#E8F0FE] aria-selected:text-[var(--google-blue)] dark:aria-selected:bg-[var(--google-blue)]/20 dark:aria-selected:text-[var(--google-blue-dark)]"
              >
                <Sun className="w-4 h-4" /> Light Mode
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => setTheme("dark"))}
                className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-sm text-[#202124] dark:text-[#E8EAED] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#303134] aria-selected:bg-[#E8F0FE] aria-selected:text-[var(--google-blue)] dark:aria-selected:bg-[var(--google-blue)]/20 dark:aria-selected:text-[var(--google-blue-dark)]"
              >
                <Moon className="w-4 h-4" /> Dark Mode
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => setTheme("system"))}
                className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-sm text-[#202124] dark:text-[#E8EAED] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#303134] aria-selected:bg-[#E8F0FE] aria-selected:text-[var(--google-blue)] dark:aria-selected:bg-[var(--google-blue)]/20 dark:aria-selected:text-[var(--google-blue-dark)]"
              >
                <Monitor className="w-4 h-4" /> System Theme
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Language" className="text-xs font-semibold text-[#9AA0A6] px-2 py-2 mt-2">
              <Command.Item 
                onSelect={() => runCommand(() => setLanguage(language === "en" ? "id" : "en"))}
                className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-sm text-[#202124] dark:text-[#E8EAED] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#303134] aria-selected:bg-[#E8F0FE] aria-selected:text-[var(--google-blue)] dark:aria-selected:bg-[var(--google-blue)]/20 dark:aria-selected:text-[var(--google-blue-dark)]"
              >
                Toggle Language (Current: {language.toUpperCase()})
              </Command.Item>
            </Command.Group>
            <Command.Group heading="Color Accent" className="text-xs font-semibold text-[#9AA0A6] px-2 py-2 mt-2">
              {THEME_COLORS.map((color) => (
                <Command.Item 
                  key={color.name}
                  onSelect={() => runCommand(() => setThemeColor(color))}
                  className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-sm text-[#202124] dark:text-[#E8EAED] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#303134] aria-selected:bg-[#E8F0FE] aria-selected:text-[var(--google-blue)] dark:aria-selected:bg-[var(--google-blue)]/20 dark:aria-selected:text-[var(--google-blue-dark)]"
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.color }} />
                  Theme: {color.name}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
