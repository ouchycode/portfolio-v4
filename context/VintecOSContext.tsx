"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

export type VintecThemeId = "win31" | "retro98" | "dark" | "cyberpunk";

export interface VintecThemeOption {
  id: VintecThemeId;
  label: string;
  desc: string;
  dark: boolean;
}

export const VINTEC_THEMES: VintecThemeOption[] = [
  {
    id: "win31",
    label: "Vintec 3.1",
    desc: "Classic Windows 3.1 crisp white & navy",
    dark: false,
  },
  {
    id: "retro98",
    label: "Vintec 98",
    desc: "Chiseled silver bevels & neon pink CTA",
    dark: false,
  },
  {
    id: "dark",
    label: "Dark Retro",
    desc: "Midnight obsidian & electric violet",
    dark: true,
  },
  {
    id: "cyberpunk",
    label: "Cyberpunk",
    desc: "Deep violet & hot magenta glow",
    dark: true,
  },
];

export const ROOM_HASH_MAP: Record<string, number> = {
  "": 0,
  "#": 0,
  "#home": 0,
  "#experience": 1,
  "#about": 2,
  "#projects": 3,
  "#tech": 4,
  "#certs": 5,
  "#contact": 6,
};

interface VintecOSContextType {
  theme: VintecThemeId;
  setTheme: (theme: VintecThemeId) => void;
  booting: boolean;
  finishBoot: () => void;
  reboot: () => void;
  statusOpen: boolean;
  setStatusOpen: (open: boolean) => void;
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  commandOpen: boolean;
  setCommandOpen: (open: boolean) => void;
  activeRoom: number;
  setActiveRoom: (idx: number) => void;
  stageActive: boolean;
  setStageActive: (active: boolean) => void;
  scrollToRoom: (idx: number) => void;
  registerRoomScroller: (fn: ((idx: number) => void) | null) => void;
}

const VintecOSContext = createContext<VintecOSContextType | undefined>(
  undefined,
);

const THEME_STORAGE_KEY = "kevinos:theme";
const BOOT_SESSION_KEY = "kevinos:booted";

export function VintecOSProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<VintecThemeId>("win31");
  const [booting, setBooting] = useState<boolean>(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState(0);
  const [stageActive, setStageActive] = useState(false);

  const scrollerRef = useRef<((idx: number) => void) | null>(null);

  const registerRoomScroller = useCallback(
    (fn: ((idx: number) => void) | null) => {
      scrollerRef.current = fn;
    },
    [],
  );

  const scrollToRoom = useCallback((idx: number) => {
    if (scrollerRef.current) {
      scrollerRef.current(idx);
      return;
    }
    const ids = [
      null,
      "experience",
      "about",
      "projects",
      "tech",
      "certs",
      "contact",
    ];
    const targetId = ids[idx];
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const applyThemeToDom = useCallback((t: VintecThemeId) => {
    const html = document.documentElement;
    html.dataset.theme = t;
    const isDark = VINTEC_THEMES.find((x) => x.id === t)?.dark ?? false;
    html.classList.toggle("dark", isDark);
    html.dataset.colorMode = isDark ? "dark" : "light";
  }, []);

  useEffect(() => {
    let saved: VintecThemeId = "win31";
    try {
      const raw = localStorage.getItem(
        THEME_STORAGE_KEY,
      ) as VintecThemeId | null;
      if (raw && VINTEC_THEMES.some((x) => x.id === raw)) {
        saved = raw;
      }
    } catch {
      // ignore
    }
    applyThemeToDom(saved);

    let shouldBoot = false;
    try {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const alreadyBooted = sessionStorage.getItem(BOOT_SESSION_KEY) === "1";
      if (!reduced && !alreadyBooted && window.location.pathname === "/") {
        shouldBoot = true;
      }
    } catch {
      // ignore
    }

    const raf = requestAnimationFrame(() => {
      if (saved !== "win31") setThemeState(saved);
      if (shouldBoot) setBooting(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [applyThemeToDom]);

  const setTheme = useCallback(
    (next: VintecThemeId) => {
      setThemeState(next);
      applyThemeToDom(next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // ignore
      }
    },
    [applyThemeToDom],
  );

  const finishBoot = useCallback(() => {
    try {
      sessionStorage.setItem(BOOT_SESSION_KEY, "1");
    } catch {
      // ignore
    }
    setBooting(false);
  }, []);

  const reboot = useCallback(() => {
    setStatusOpen(false);
    setCommandOpen(false);
    setTerminalOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setActiveRoom(0);
    setBooting(true);
  }, []);

  return (
    <VintecOSContext.Provider
      value={{
        theme,
        setTheme,
        booting,
        finishBoot,
        reboot,
        statusOpen,
        setStatusOpen,
        terminalOpen,
        setTerminalOpen,
        commandOpen,
        setCommandOpen,
        activeRoom,
        setActiveRoom,
        stageActive,
        setStageActive,
        scrollToRoom,
        registerRoomScroller,
      }}
    >
      {children}
    </VintecOSContext.Provider>
  );
}

export function useVintecOS() {
  const ctx = useContext(VintecOSContext);
  if (!ctx) {
    throw new Error("useVintecOS must be used within a VintecOSProvider");
  }
  return ctx;
}
