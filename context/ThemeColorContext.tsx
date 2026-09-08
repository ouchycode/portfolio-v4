"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeColor = {
  name: string;
  color: string;
  darkColor: string;
};

export const THEME_COLORS: ThemeColor[] = [
  { name: "Neon Pink", color: "#FF3E9A", darkColor: "#FF4DA3" },
  { name: "CRT Green", color: "#22C7A9", darkColor: "#2BD9B9" },
  { name: "Cyber Violet", color: "#7C5CFF", darkColor: "#A48BFF" },
  { name: "Terminal Green", color: "#37FF9B", darkColor: "#37FF9B" },
  { name: "Retro Amber", color: "#FFD400", darkColor: "#FFD400" },
];

interface ThemeColorContextType {
  currentColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

export function ThemeColorProvider({ children }: { children: React.ReactNode }) {
  const [currentColor, setCurrentColor] = useState<ThemeColor>(THEME_COLORS[0]);

  useEffect(() => {
    const savedColor = localStorage.getItem("portfolio-accent-color");
    if (savedColor) {
      const parsed = JSON.parse(savedColor);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentColor(parsed);
      document.documentElement.style.setProperty("--vt-pink", parsed.color);
      document.documentElement.style.setProperty("--vt-crt", parsed.darkColor);
    }
  }, []);

  const setThemeColor = (color: ThemeColor) => {
    setCurrentColor(color);
    localStorage.setItem("portfolio-accent-color", JSON.stringify(color));
    document.documentElement.style.setProperty("--vt-pink", color.color);
    document.documentElement.style.setProperty("--vt-crt", color.darkColor);
  };

  return (
    <ThemeColorContext.Provider value={{ currentColor, setThemeColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
}

export function useThemeColor() {
  const context = useContext(ThemeColorContext);
  if (context === undefined) {
    throw new Error("useThemeColor must be used within a ThemeColorProvider");
  }
  return context;
}