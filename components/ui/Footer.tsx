"use client";

import { useVintecOS } from "@/context/VintecOSContext";
import { WeatherWidget } from "./WeatherWidget";

export default function Footer() {
  const { setTerminalOpen } = useVintecOS();

  return (
    <footer className="vt-main" style={{ paddingTop: 0, paddingBottom: 80 }}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <WeatherWidget />
        <button
          type="button"
          onClick={() => setTerminalOpen(true)}
          className="vt-btn vt-btn-flat vt-mono"
          style={{ padding: "6px 12px", fontSize: 11.5 }}
        >
          &gt;_ KevinOS v26.08
        </button>
      </div>
    </footer>
  );
}
