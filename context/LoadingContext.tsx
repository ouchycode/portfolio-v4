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
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9999] pointer-events-none"
          >
            <ProgressBar />
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
