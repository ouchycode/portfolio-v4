"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface LoadingContextType {
  isLoading: boolean;
  startLoading: (autoStopMs?: number) => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

const GOOGLE_COLORS = ["#EA4335", "#FABB05", "#34A853", "#1A73E8"];

// ── Google-style top progress bar ───────────────────────────────────
function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Fase 1: cepat ke 70%
    const t1 = setTimeout(() => setWidth(70), 50);
    // Fase 2: lambat ke 85%
    const t2 = setTimeout(() => setWidth(85), 800);
    // Fase 3: sangat lambat ke 92%
    const t3 = setTimeout(() => setWidth(92), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-0.75 z-50">
      {/* Track */}
      <div className="absolute inset-0 bg-[#DADCE0]/30 dark:bg-[#5F6368]/20" />

      {/* Progress fill — gradient Google colors */}
      <motion.div
        className="absolute top-0 left-0 h-full"
        style={{
          background:
            "linear-gradient(90deg, #4285F4, #34A853, #FABB05, #EA4335)",
          backgroundSize: "300% 100%",
          width: `${width}%`,
        }}
        animate={{
          width: `${width}%`,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          width: { duration: width === 70 ? 0.4 : 1.2, ease: [0.4, 0, 0.2, 1] },
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Glowing head */}
      <motion.div
        className="absolute top-0 h-full w-24 rounded-full"
        style={{
          left: `${width}%`,
          transform: "translateX(-100%)",
          background:
            "linear-gradient(90deg, transparent, rgba(66,133,244,0.8), transparent)",
          filter: "blur(3px)",
        }}
        animate={{ left: `${width}%` }}
        transition={{
          duration: width === 70 ? 0.4 : 1.2,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
    </div>
  );
}

// ── Google dots spinner ──────────────────────────────────────────────
function GoogleDotsSpinner() {
  return (
    <div className="flex items-center gap-2">
      {GOOGLE_COLORS.map((color, i) => (
        <motion.span
          key={color}
          className="w-3 h-3 rounded-full"
          style={{ background: color }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ── Provider ─────────────────────────────────────────────────────────
export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { language } = useLanguage();

  const stopLoading = useCallback(() => {
    setIsLoading(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const startLoading = useCallback(
    (autoStopMs?: number) => {
      setIsLoading(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (autoStopMs) {
        timeoutRef.current = setTimeout(stopLoading, autoStopMs);
      }
    },
    [stopLoading],
  );

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="fixed inset-0 z-9999 pointer-events-auto bg-[#F8F9FA]/95 dark:bg-[#1c1c1e]/95 flex flex-col"
          >
            {/* Top progress bar */}
            <ProgressBar />

            {/* Grid overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Center content */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {/* G logo mark */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.3, ease: "easeOut" }}
                className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#5F6368]/60"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(60,64,67,.10), 0 4px 12px rgba(60,64,67,.08)",
                }}
              >
                {/* G-color corner dots */}
                {GOOGLE_COLORS.map((color, i) => (
                  <motion.span
                    key={color}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: color,
                      top: i < 2 ? 8 : "auto",
                      bottom: i >= 2 ? 8 : "auto",
                      left: i % 2 === 0 ? 8 : "auto",
                      right: i % 2 === 1 ? 8 : "auto",
                    }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                {/* Center letter */}
                <span className="text-xl font-black text-[#1A73E8] dark:text-[#8AB4F8] select-none">
                  K
                </span>
              </motion.div>

              {/* Dots spinner */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.25 }}
              >
                <GoogleDotsSpinner />
              </motion.div>

              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="text-xs font-bold uppercase tracking-[0.16em] text-[#9AA0A6] dark:text-[#5F6368]"
              >
                {language === "id" ? "Memuat..." : "Loading..."}
              </motion.p>
            </div>

            {/* G-color bottom bar */}
            <div className="flex h-0.75 w-full shrink-0">
              {GOOGLE_COLORS.map((c) => (
                <div
                  key={c}
                  className="flex-1 h-full opacity-70"
                  style={{ background: c }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx)
    throw new Error("useLoading harus digunakan di dalam LoadingProvider");
  return ctx;
}
