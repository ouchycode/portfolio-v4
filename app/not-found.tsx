"use client";

import Link from "next/link";
import { Terminal as TerminalIcon, Home, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [text, setText] = useState("");
  const fullText = "> ERROR 404: PAGE_NOT_FOUND\n> SYSTEM_STATUS: OFFLINE\n> SUGGESTION: RETURN_TO_BASE";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-desktop text-ink flex flex-col items-center justify-center p-6 relative overflow-hidden font-mono">
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(var(--vt-blue) 1px, transparent 1px), linear-gradient(90deg, var(--vt-blue) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--vt-desktop)_100%)]"
      />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="flex items-center gap-3 mb-6 text-vtcrt opacity-80">
          <TerminalIcon size={24} />
          <span className="rv-pixel text-sm tracking-widest font-bold text-vtcrt">
            TERMINAL_OVERRIDE
          </span>
        </div>

        <div className="rv-window relative overflow-hidden group">
          {/* Titlebar */}
          <div className="rv-titlebar">
            <span className="rv-titlebar-label select-none">
              SYSTEM.EXE — Fatal Error
            </span>
            <span className="ml-auto flex items-center gap-1 select-none">
              <span className="rv-titlebar-btn text-[8px]">─</span>
              <span className="rv-titlebar-btn text-[8px]">□</span>
              <span className="rv-titlebar-btn text-[9px]">×</span>
            </span>
          </div>

          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 flex">
            {["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"].map((c) => (
              <div key={c} className="flex-1 h-full" style={{ background: c }} />
            ))}
          </div>

          <div className="rv-panel p-6 md:p-8 flex flex-col items-center text-center">
            <div className="flex gap-2 mb-6 self-start">
              {["#FF3E9A", "#FFD400", "#22C7A9"].map((c) => (
                <span
                  key={c}
                  className="w-3 h-3 rv-sunken"
                  style={{ background: c }}
                />
              ))}
            </div>

            <div
              className="text-vtpink text-6xl md:text-8xl font-black tracking-tighter mb-4 animate-pulse"
              style={{ fontFamily: "var(--vt-font-display)" }}
            >
              404
            </div>

            <div className="w-full rv-sunken bg-paper p-4 mb-8 text-left">
              <p className="font-mono text-[13px] md:text-sm text-vtcrt leading-relaxed whitespace-pre-line min-h-[3.5rem]">
                {text}
                <span className="animate-ping ml-1 inline-block">_</span>
              </p>
            </div>

            <Link
              href="/"
              className="rv-btn-primary rv-pixel group inline-flex items-center gap-3 px-6 py-3 text-[12px] font-bold uppercase tracking-widest"
            >
              <Home size={17} className="relative z-10" />
              <span className="relative z-10">INITIALIZE_REBOOT</span>
              <ArrowRight
                size={17}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}