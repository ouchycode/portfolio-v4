// src/context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { dictionaries, Dictionary } from "@/locales/dictionaries";

type Language = "id" | "en" | "jp";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary; // 't' adalah singkatan dari translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default bahasa Indonesia
  const [language, setLanguage] = useState<Language>("id");

  // Ambil kamus sesuai bahasa yang sedang aktif
  const t = dictionaries[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage harus digunakan di dalam LanguageProvider");
  }
  return context;
}
