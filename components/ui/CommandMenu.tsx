"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { Search, Monitor, Moon, Sun, Briefcase, FileCode2, Mail, Palette } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useThemeColor, THEME_COLORS } from "@/context/ThemeColorContext";

const itemClass =
  "flex items-center gap-3 px-3 py-3 mt-1 rv-pixel text-[12px] uppercase tracking-wide text-ink cursor-pointer rv-hover aria-selected:!bg-vtblue aria-selected:!text-white";

const groupClass =
  "rv-pixel text-[10px] font-bold uppercase tracking-[0.2em] text-vtpink px-2 py-2";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
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
    <div className="fixed inset-0 z-[120] bg-desktop/50 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
      <div className="rv-window w-full max-w-xl mx-4 overflow-hidden bg-chrome">
        {/* Titlebar */}
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none">run.exe — Run...</span>
          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={() => setOpen(false)}
              className="rv-titlebar-btn"
              aria-label="Close"
            >
              <svg width="9" height="9" viewBox="0 0 10 10">
                <path
                  d="M1 1 L9 9 M9 1 L1 9"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </div>

        <Command label="Global Command Menu" shouldFilter={true}>
          <div className="flex items-center rv-sunken bg-vtcard px-3 m-3">
            <Search className="w-4 h-4 text-vtpink shrink-0" />
            <Command.Input
              autoFocus
              placeholder="Type a command or search..."
              className="flex-1 h-12 px-3 bg-transparent outline-none text-ink placeholder:text-inkmute font-mono text-sm"
            />
            <button
              onClick={() => setOpen(false)}
              className="rv-chip rv-pixel bg-chrome px-2 py-1 text-[10px] font-bold text-ink"
            >
              ESC
            </button>
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto px-3 pb-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-vtblue">
            <Command.Empty className="rv-pixel py-6 text-center text-[12px] uppercase tracking-wider text-inkmute">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className={groupClass}>
              <Command.Item
                onSelect={() => runCommand(() => window.location.hash = "#projects")}
                className={itemClass}
              >
                <FileCode2 className="w-4 h-4 text-vtblue" /> Go to Projects
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.location.hash = "#experience")}
                className={itemClass}
              >
                <Briefcase className="w-4 h-4 text-vtpink" /> Go to Experience
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.location.hash = "#contact")}
                className={itemClass}
              >
                <Mail className="w-4 h-4 text-vtcrt" /> Contact Me
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Theme" className={groupClass}>
              <Command.Item
                onSelect={() => runCommand(() => setTheme("light"))}
                className={itemClass}
              >
                <Sun className="w-4 h-4 text-vtamber" /> Light Mode
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => setTheme("dark"))}
                className={itemClass}
              >
                <Moon className="w-4 h-4 text-vtblue" /> Dark Mode
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => setTheme("system"))}
                className={itemClass}
              >
                <Monitor className="w-4 h-4 text-ink" /> System Theme
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Language" className={groupClass}>
              <Command.Item
                onSelect={() => runCommand(() => setLanguage(language === "en" ? "id" : "en"))}
                className={itemClass}
              >
                <Palette className="w-4 h-4 text-vtteal" /> Toggle Language (Current: {language.toUpperCase()})
              </Command.Item>
            </Command.Group>
            <Command.Group heading="Color Accent" className={groupClass}>
              {THEME_COLORS.map((color) => (
                <Command.Item
                  key={color.name}
                  onSelect={() => runCommand(() => setThemeColor(color))}
                  className={itemClass}
                >
                  <span className="w-3.5 h-3.5 rv-sunken shrink-0" style={{ backgroundColor: color.color }} />
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