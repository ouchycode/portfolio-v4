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
import { useLanguage } from "@/context/LanguageContext";

interface LoadingContextType {
  isLoading: boolean;
  startLoading: (autoStopMs?: number) => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// ── Skeleton block helper ───────────────────────────────────────────
function SkeletonBlock({
  className = "",
  rounded = "rounded-full",
}: {
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`${rounded} ${className} bg-[#DADCE0] dark:bg-[#5F6368]/50 overflow-hidden relative`}
    >
      {/* shimmer sweep */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
          animation: "skeletonShimmer 1.6s ease-in-out infinite",
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
}

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
        timeoutRef.current = setTimeout(() => stopLoading(), autoStopMs);
      }
    },
    [stopLoading],
  );

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}

      {/* ── GLOBAL SKELETON LOADING OVERLAY ── */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] pointer-events-auto bg-[#F8F9FA] dark:bg-[#202124] overflow-hidden"
          >
            {/* shimmer keyframe */}
            <style>{`
              @keyframes skeletonShimmer {
                0%   { transform: translateX(-100%); }
                100% { transform: translateX(200%); }
              }
            `}</style>

            {/* ── Subtle grid texture ── */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* ── Fake navbar skeleton ── */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
              <SkeletonBlock className="h-11 w-[480px] max-w-[90vw]" />
            </div>

            {/* ── Page skeleton content ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 gap-10 pt-20"
            >
              <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                {/* Left column */}
                <div className="flex-1 flex flex-col gap-5 w-full max-w-xl">
                  {/* eyebrow badge */}
                  <SkeletonBlock className="h-8 w-32" />
                  {/* heading line 1 */}
                  <SkeletonBlock
                    className="h-14 md:h-16 w-full"
                    rounded="rounded-2xl"
                  />
                  {/* heading line 2 */}
                  <SkeletonBlock
                    className="h-14 md:h-16 w-3/4"
                    rounded="rounded-2xl"
                  />
                  {/* divider dot + line */}
                  <div className="flex items-center gap-3 mt-1">
                    <SkeletonBlock className="w-2 h-2 shrink-0" />
                    <SkeletonBlock
                      className="h-px flex-1"
                      rounded="rounded-none"
                    />
                  </div>
                  {/* description lines */}
                  <div className="flex flex-col gap-2.5 mt-1">
                    <SkeletonBlock
                      className="h-4 w-full"
                      rounded="rounded-lg"
                    />
                    <SkeletonBlock
                      className="h-4 w-[90%]"
                      rounded="rounded-lg"
                    />
                    <SkeletonBlock
                      className="h-4 w-[75%]"
                      rounded="rounded-lg"
                    />
                  </div>
                  {/* CTA buttons */}
                  <div className="flex gap-3 mt-3">
                    <SkeletonBlock className="h-12 w-40" />
                    <SkeletonBlock className="h-12 w-36" />
                  </div>
                </div>

                {/* Right column — info cards */}
                <div className="w-full max-w-sm lg:w-[400px] flex flex-col gap-4 shrink-0">
                  <SkeletonBlock
                    className="h-20 w-full"
                    rounded="rounded-[2rem]"
                  />
                  <SkeletonBlock
                    className="h-20 w-full"
                    rounded="rounded-[2rem]"
                  />
                  <SkeletonBlock
                    className="h-14 w-full"
                    rounded="rounded-[2rem]"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── G-4-color bottom bar ── */}
            <div className="absolute bottom-0 left-0 right-0 flex h-[3px]">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <div
                  key={c}
                  className="flex-1 h-full"
                  style={{ background: c, opacity: 0.7 }}
                />
              ))}
            </div>

            {/* ── Loading label bottom center ── */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
              {/* animated dots */}
              {[0, 0.2, 0.4].map((delay, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8]"
                  style={{
                    animation: `skeletonShimmer 1s ease-in-out ${delay}s infinite`,
                    opacity: 0.6,
                  }}
                />
              ))}
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#9AA0A6] dark:text-[#5F6368] ml-1">
                {language === "id" ? "Memuat..." : "Loading..."}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading harus digunakan di dalam LoadingProvider");
  }
  return context;
}
