"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useCallback,
} from "react";

interface LoadingContextType {
  isLoading: boolean;
  startLoading: (autoStopMs?: number) => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
