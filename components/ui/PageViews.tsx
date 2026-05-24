"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function PageViews() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // We only want to run this once per session to avoid inflating numbers too much during dev
    // But for a simple portfolio, calling it on mount is fine.
    const fetchViews = async () => {
      try {
        const res = await fetch("https://api.counterapi.dev/v1/ouchycode-portfolio/visits/up");
        const data = await res.json();
        if (data && data.count) {
          setViews(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch page views", error);
      }
    };

    fetchViews();
  }, []);

  if (views === null) return null;

  return (
    <div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 bg-white dark:bg-[#303134] rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 shadow-sm transition-transform hover:scale-105">
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E8F0FE] dark:bg-[var(--google-blue)]/20 text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]">
        <Eye size={14} strokeWidth={2.5} />
      </div>
      <span className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6]">
        {views.toLocaleString()} <span className="font-medium">Views</span>
      </span>
    </div>
  );
}
