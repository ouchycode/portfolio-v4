"use client";

import { useEffect } from "react";
import { Command } from "cmdk";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useVintecOS, VINTEC_THEMES } from "@/context/VintecOSContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";

export function CommandMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const {
    commandOpen,
    setCommandOpen,
    theme,
    setTheme,
    setTerminalOpen,
    setStatusOpen,
    scrollToRoom,
    reboot,
  } = useVintecOS();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen(!commandOpen);
      } else if (e.key === "Escape" && commandOpen) {
        setCommandOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [commandOpen, setCommandOpen]);

  if (!commandOpen) return null;

  const runCommand = (fn: () => void) => {
    setCommandOpen(false);
    fn();
  };

  const navRoom = (roomIdx: number, hash: string) => {
    if (pathname === "/") {
      scrollToRoom(roomIdx);
    } else {
      router.push(hash === "#" ? "/" : `/${hash}`);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[230] flex items-start justify-center pt-[14vh] px-4"
      style={{ background: "rgba(0,0,0,0.45)" }}
      onClick={() => setCommandOpen(false)}
    >
      <div className="w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
        <VintecWindow
          title="run.exe — Command Palette"
          onClose={() => setCommandOpen(false)}
          draggable={false}
          statusLeft="Ctrl+K · KevinOS Quick Launcher"
          statusRight={["ESC"]}
        >
          <div style={{ background: "var(--vt-paper)", padding: 14 }}>
            <Command label="Global Command Menu" shouldFilter={true}>
              <div className="flex items-center gap-2 mb-3">
                <Command.Input
                  autoFocus
                  placeholder={
                    language === "id"
                      ? "Ketik perintah atau bagian..."
                      : "Type a command or section..."
                  }
                  className="vt-input flex-1"
                />
                <button
                  type="button"
                  onClick={() => setCommandOpen(false)}
                  className="vt-btn vt-btn-flat"
                  style={{ padding: "8px 12px", fontSize: 11 }}
                >
                  ESC
                </button>
              </div>

              <Command.List className="max-h-[320px] overflow-y-auto flex flex-col gap-1">
                <Command.Empty
                  className="py-6 text-center text-xs"
                  style={{ color: "var(--vt-ink-mute)" }}
                >
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="NAVIGATION"
                  className="text-[10px] tracking-widest uppercase py-1"
                  style={{ color: "var(--vt-ink-mute)" }}
                >
                  {[
                    { glyph: "⌂", label: "00 — Home / Desktop", room: 0, hash: "#" },
                    { glyph: "▤", label: "01 — Experience / Career", room: 1, hash: "#experience" },
                    { glyph: "✎", label: "02 — Manifesto & About", room: 2, hash: "#about" },
                    { glyph: "▦", label: "03 — Projects Explorer", room: 3, hash: "#projects" },
                    { glyph: "◈", label: "04 — Metrics & Tech Stack", room: 4, hash: "#tech" },
                    { glyph: "▣", label: "05 — Certifications", room: 5, hash: "#certs" },
                    { glyph: "✉", label: "06 — Contact & Collaborate", room: 6, hash: "#contact" },
                  ].map((item) => (
                    <Command.Item
                      key={item.hash}
                      onSelect={() =>
                        runCommand(() => navRoom(item.room, item.hash))
                      }
                      className="flex items-center gap-3 px-3 py-2 text-[13px] cursor-pointer text-[var(--vt-ink)] aria-selected:bg-[var(--vt-blue)] aria-selected:text-white"
                    >
                      <span className="w-5 text-center">{item.glyph}</span>
                      <span>{item.label}</span>
                    </Command.Item>
                  ))}
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/cv"))}
                    className="flex items-center gap-3 px-3 py-2 text-[13px] cursor-pointer text-[var(--vt-ink)] aria-selected:bg-[var(--vt-blue)] aria-selected:text-white"
                  >
                    <span className="w-5 text-center">▣</span>
                    <span>Curriculum Vitae (PDF)</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="OS THEME"
                  className="text-[10px] tracking-widest uppercase py-1 mt-2"
                  style={{ color: "var(--vt-ink-mute)" }}
                >
                  {VINTEC_THEMES.map((opt) => (
                    <Command.Item
                      key={opt.id}
                      onSelect={() => runCommand(() => setTheme(opt.id))}
                      className="flex items-center gap-3 px-3 py-2 text-[13px] cursor-pointer text-[var(--vt-ink)] aria-selected:bg-[var(--vt-blue)] aria-selected:text-white"
                    >
                      <span className="w-5 text-center">
                        {theme === opt.id ? "●" : "○"}
                      </span>
                      <span>
                        {opt.label} — {opt.desc}
                      </span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group
                  heading="SYSTEM"
                  className="text-[10px] tracking-widest uppercase py-1 mt-2"
                  style={{ color: "var(--vt-ink-mute)" }}
                >
                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        setLanguage(language === "id" ? "en" : "id"),
                      )
                    }
                    className="flex items-center gap-3 px-3 py-2 text-[13px] cursor-pointer text-[var(--vt-ink)] aria-selected:bg-[var(--vt-blue)] aria-selected:text-white"
                  >
                    <span className="w-5 text-center">⇄</span>
                    <span>
                      Switch Language (Current: {language.toUpperCase()})
                    </span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => setStatusOpen(true))}
                    className="flex items-center gap-3 px-3 py-2 text-[13px] cursor-pointer text-[var(--vt-ink)] aria-selected:bg-[var(--vt-blue)] aria-selected:text-white"
                  >
                    <span className="w-5 text-center">◉</span>
                    <span>Open System Status</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => setTerminalOpen(true))}
                    className="flex items-center gap-3 px-3 py-2 text-[13px] cursor-pointer text-[var(--vt-ink)] aria-selected:bg-[var(--vt-blue)] aria-selected:text-white"
                  >
                    <span className="w-5 text-center">&gt;_</span>
                    <span>Open KevinOS Terminal</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => reboot())}
                    className="flex items-center gap-3 px-3 py-2 text-[13px] cursor-pointer text-[var(--vt-ink)] aria-selected:bg-[var(--vt-blue)] aria-selected:text-white"
                  >
                    <span className="w-5 text-center">↻</span>
                    <span>Reboot KevinOS BIOS</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </VintecWindow>
      </div>
    </div>
  );
}
