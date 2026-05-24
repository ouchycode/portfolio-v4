"use client";

import Link from "next/link";
import { Terminal, Home, ArrowRight } from "lucide-react";
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
    <main className="min-h-screen bg-[#202124] text-[#E8EAED] flex flex-col items-center justify-center p-6 relative overflow-hidden font-mono">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(#3C4043 1px, transparent 1px), linear-gradient(90deg, #3C4043 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />
      
      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#202124_100%)] z-0" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="flex items-center gap-3 mb-6 text-[var(--google-blue-dark)] opacity-80">
          <Terminal size={24} />
          <span className="text-sm tracking-widest font-bold">TERMINAL_OVERRIDE</span>
        </div>

        <div className="bg-[#303134] rounded-lg border border-[#5F6368] p-6 shadow-2xl relative overflow-hidden group">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA4335] via-[#FABB05] to-[#34A853]" />
          
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#EA4335]" />
            <div className="w-3 h-3 rounded-full bg-[#FABB05]" />
            <div className="w-3 h-3 rounded-full bg-[#34A853]" />
          </div>

          <div className="text-[var(--google-blue-dark)] text-6xl md:text-8xl font-black tracking-tighter mb-4 animate-pulse">
            404
          </div>

          <div className="h-24 md:h-20 text-[#81C995] text-sm md:text-base leading-relaxed whitespace-pre-line mb-8">
            {text}
            <span className="animate-ping ml-1">_</span>
          </div>

          <Link 
            href="/"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-[var(--google-blue-dark)]/10 text-[var(--google-blue-dark)] border border-[var(--google-blue-dark)]/30 hover:bg-[var(--google-blue-dark)]/20 transition-all group"
          >
            <Home size={18} />
            <span className="font-bold tracking-widest">INITIALIZE_REBOOT</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
