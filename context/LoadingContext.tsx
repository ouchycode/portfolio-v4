"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
  startLoading: (ms?: number) => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi untuk menyalakan loading, otomatis mati setelah sekian milidetik (default 600ms)
  const startLoading = (ms: number = 600) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, ms);
  };

  const stopLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

// Custom hook agar lebih mudah dipanggil
export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading harus digunakan di dalam LoadingProvider");
  }
  return context;
}
