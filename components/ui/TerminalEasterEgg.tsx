"use client";

import { useState, useRef, useEffect } from "react";
import { X, Maximize2, Minus } from "lucide-react";

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
        output = "Kevin Ardiansyah. A passionate Software Engineer from Indonesia building cool things across the web, systems, and infrastructure.";
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
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-desktop/60 backdrop-blur-sm">
      <div className="rv-window w-full max-w-2xl overflow-hidden flex flex-col h-[60vh] animate-in fade-in zoom-in duration-300 bg-[#060a08]">
        {/* Terminal Header */}
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none">
            kevin@portfolio — KevinOS v1.0
          </span>
          <span className="ml-auto flex items-center gap-1 select-none">
            <span className="rv-titlebar-btn text-[8px]">
              <Minus size={9} />
            </span>
            <span className="rv-titlebar-btn text-[8px]">
              <Maximize2 size={8} />
            </span>
            <button
              onClick={onClose}
              aria-label="Close terminal"
              className="rv-titlebar-btn text-[9px] rv-pixel"
            >
              <X size={10} />
            </button>
          </span>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm text-vtcrt [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-vtcrt/50">
          {history.map((item, i) => (
            <div key={i} className="mb-3">
              {item.command && (
                <div className="flex gap-2 mb-1">
                  <span className="text-vtcrt font-bold">kevin@portfolio</span>
                  <span className="text-ink-soft">:</span>
                  <span className="text-vtpink">~</span>
                  <span className="text-ink">$</span>
                  <span className="text-vtcrt">{item.command}</span>
                </div>
              )}
              <div className="text-vtcrt/80 whitespace-pre-wrap">{item.output}</div>
            </div>
          ))}

          <form onSubmit={handleCommand} className="rv-pixel flex gap-2 mt-2 items-center">
            <span className="text-vtcrt font-bold">kevin@portfolio</span>
            <span className="text-ink-soft">:</span>
            <span className="text-vtpink">~</span>
            <span className="text-ink">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none border-none text-vtcrt caret-vtcrt font-mono text-[13px]"
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