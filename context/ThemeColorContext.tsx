"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeColor = {
  name: string;
  color: string;
  darkColor: string;
};

export const THEME_COLORS: ThemeColor[] = [
  { name: "Google Blue", color: "#1A73E8", darkColor: "#8AB4F8" },
  { name: "Emerald", color: "#10b981", darkColor: "#34d399" },
  { name: "Rose", color: "#f43f5e", darkColor: "#fb7185" },
  { name: "Violet", color: "#8b5cf6", darkColor: "#a78bfa" },
  { name: "Amber", color: "#f59e0b", darkColor: "#fbbf24" },
];

interface ThemeColorContextType {
  currentColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

export function ThemeColorProvider({ children }: { children: React.ReactNode }) {
  const [currentColor, setCurrentColor] = useState<ThemeColor>(THEME_COLORS[0]);

  useEffect(() => {
    // Load from localStorage on mount
    const savedColor = localStorage.getItem("portfolio-accent-color");
    if (savedColor) {
      const parsed = JSON.parse(savedColor);
      setCurrentColor(parsed);
      document.documentElement.style.setProperty("--google-blue", parsed.color);
      document.documentElement.style.setProperty("--google-blue-dark", parsed.darkColor);
    }
  }, []);

  const setThemeColor = (color: ThemeColor) => {
    setCurrentColor(color);
    localStorage.setItem("portfolio-accent-color", JSON.stringify(color));
    document.documentElement.style.setProperty("--google-blue", color.color);
    document.documentElement.style.setProperty("--google-blue-dark", color.darkColor);
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
