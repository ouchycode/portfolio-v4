"use client";

import { useState, useRef, useEffect } from "react";
import { useVintecOS } from "@/context/VintecOSContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";

export function TerminalEasterEgg() {
  const { terminalOpen, setTerminalOpen, reboot } = useVintecOS();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { command: string; output: string }[]
  >([
    {
      command: "",
      output:
        'KevinOS v26.08 [Build 2026.11]\nType "help" for available commands.',
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, terminalOpen]);

  useEffect(() => {
    if (!terminalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTerminalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [terminalOpen, setTerminalOpen]);

  if (!terminalOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output = "";

    switch (cmd) {
      case "help":
        output =
          "Commands: whoami, stack, projects, contact, date, reboot, clear, exit";
        break;
      case "whoami":
        output =
          "Kevin Ardiansyah — Software Engineer (Full-Stack Web, DevOps & IT Support)\nUniversitas Yatsi Madani · IPK 3.86 · Tangerang, ID";
        break;
      case "stack":
        output =
          "TypeScript, React, Next.js, Tailwind CSS, Laravel, Node.js, MySQL, Docker, Linux, Nginx, AWS";
        break;
      case "projects":
        output =
          "[01] AkadMeet (LMS Platform)\n[02] SIAKAD Mobile (React Native)\n[03] Fair Price Finder (AI Web Platform — Top 10 Capstone DBS x Dicoding)";
        break;
      case "contact":
        output =
          "Email: kevinnardiansyahh19@gmail.com\nGitHub: github.com/ouchycode\nLinkedIn: linkedin.com/in/kevin-ardiansyah-529b96386";
        break;
      case "date":
        output = new Date().toString();
        break;
      case "sudo":
        output = "Access denied: kevin is already root in KevinOS.";
        break;
      case "reboot":
        setInput("");
        reboot();
        return;
      case "exit":
        setInput("");
        setTerminalOpen(false);
        return;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = `Unknown command: "${cmd}". Type "help" for list.`;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div
      className="fixed inset-0 z-[230] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={() => setTerminalOpen(false)}
    >
      <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <VintecWindow
          title="COMMAND.COM — kevin@portfolio"
          onClose={() => setTerminalOpen(false)}
          draggable={false}
          statusLeft="C:\Users\Kevin>"
          statusRight={["TTY1", "CRT"]}
        >
          <div
            className="vt-crt-panel flex flex-col"
            style={{ height: "54vh", padding: 16 }}
          >
            <div className="flex-1 overflow-y-auto text-[12.5px] leading-relaxed">
              {history.map((item, i) => (
                <div key={i} className="mb-3">
                  {item.command && (
                    <div className="mb-0.5">
                      <span style={{ color: "var(--vt-amber)" }}>
                        C:\Users\Kevin&gt;
                      </span>{" "}
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div
                    className="whitespace-pre-wrap"
                    style={{ opacity: 0.88 }}
                  >
                    {item.output}
                  </div>
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex items-center gap-2">
                <span style={{ color: "var(--vt-amber)" }}>
                  C:\Users\Kevin&gt;
                </span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none border-0 text-[12.5px]"
                  style={{ color: "var(--vt-crt)", caretColor: "var(--vt-crt)" }}
                  autoFocus
                  spellCheck={false}
                />
              </form>
              <div ref={endRef} />
            </div>
          </div>
        </VintecWindow>
      </div>
    </div>
  );
}
