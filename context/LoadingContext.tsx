"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LoadingContextType {
  isLoading: boolean;
  startLoading: (autoStopMs?: number) => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

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

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (autoStopMs) {
        timeoutRef.current = setTimeout(() => {
          stopLoading();
        }, autoStopMs);
      }
    },
    [stopLoading],
  );

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}

      {/* GLOBAL LOADING UI */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8F9FA]/90 dark:bg-[#202124]/90 backdrop-blur-sm pointer-events-auto"
          >
            <Loader2
              size={44}
              strokeWidth={2.5}
              className="animate-spin text-[#1A73E8] dark:text-[#8AB4F8] mb-4"
            />
            <p className="text-sm font-medium uppercase tracking-widest text-[#5F6368] dark:text-[#9AA0A6] animate-pulse opacity-80">
              {language === "id" ? "Memuat Data..." : "Loading Data..."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}

// CUSTOM HOOK
export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading harus digunakan di dalam LoadingProvider");
  }
  return context;
}
