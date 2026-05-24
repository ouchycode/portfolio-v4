"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minus } from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerminalEasterEgg({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string | React.ReactNode }[]>([
    { command: "", output: 'Welcome to KevinOS v1.0.0. Type "help" for a list of available commands.' }
  ]);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = "Available commands: whoami, skills, contact, clear, date, sudo";
        break;
      case "whoami":
        output = "Kevin Ardiansyah. A passionate Frontend Engineer from Indonesia building cool things on the web.";
        break;
      case "skills":
        output = "React, Next.js, TypeScript, Tailwind CSS, Node.js, Firebase, Vercel";
        break;
      case "contact":
        output = "Email: kevinnardiansyahh19@gmail.com | LinkedIn: /in/kevinnardiansyah";
        break;
      case "date":
        output = new Date().toString();
        break;
      case "sudo":
        output = "Nice try, but this incident will be reported. 🚨";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202124]/40 dark:bg-[#12161D]/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-[#1E1E1E] rounded-lg shadow-2xl border border-[#333] overflow-hidden flex flex-col h-[60vh] animate-in fade-in zoom-in duration-300">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#323233] border-b border-[#1E1E1E]">
          <div className="flex gap-2">
            <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 flex items-center justify-center group">
               <X className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-[#4D0000]" />
            </button>
            <button className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] flex items-center justify-center group">
               <Minus className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-[#4D0000]" />
            </button>
            <button className="w-3.5 h-3.5 rounded-full bg-[#27C93F] flex items-center justify-center group">
               <Maximize2 className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-[#4D0000]" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-[#9AA0A6] text-xs font-semibold select-none">
            <TerminalIcon size={14} />
            <span>kevin@portfolio:~</span>
          </div>
          <div className="w-16" /> {/* Spacer */}
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm bg-[#1E1E1E] text-[#E8EAED]">
          {history.map((item, i) => (
            <div key={i} className="mb-3">
              {item.command && (
                <div className="flex gap-2 mb-1">
                  <span className="text-[#34A853]">kevin@portfolio</span>
                  <span className="text-[#E8EAED]">:</span>
                  <span className="text-[var(--google-blue-dark)]">~</span>
                  <span className="text-[#E8EAED]">$</span>
                  <span>{item.command}</span>
                </div>
              )}
              <div className="text-[#9AA0A6] whitespace-pre-wrap">{item.output}</div>
            </div>
          ))}
          
          <form onSubmit={handleCommand} className="flex gap-2 mt-2">
            <span className="text-[#34A853]">kevin@portfolio</span>
            <span className="text-[#E8EAED]">:</span>
            <span className="text-[var(--google-blue-dark)]">~</span>
            <span className="text-[#E8EAED]">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none border-none text-[#E8EAED] caret-white"
              autoFocus
              spellCheck={false}
            />
          </form>
          <div ref={endOfMessagesRef} />
        </div>
      </div>
    </div>
  );
}
