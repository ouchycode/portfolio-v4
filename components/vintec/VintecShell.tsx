"use client";

import { useEffect, useState, useCallback, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useVintecOS, VINTEC_THEMES } from "@/context/VintecOSContext";
import { BootSplash } from "./BootSplash";
import { WallpaperCanvas } from "./WallpaperCanvas";
import { VintecWindow } from "./VintecWindow";

const ROOM_MENU_ITEMS = [
  { room: 0, hash: "#", key: "home" as const, glyph: "⌂", code: "00" },
  { room: 1, hash: "#experience", key: "experience" as const, glyph: "▤", code: "01" },
  { room: 2, hash: "#about", key: "about" as const, glyph: "✎", code: "02" },
  { room: 3, hash: "#projects", key: "projects" as const, glyph: "▦", code: "03" },
  { room: 4, hash: "#tech", key: "tech" as const, glyph: "◈", code: "04" },
  { room: 5, hash: "#certs", key: "certs" as const, glyph: "▣", code: "05" },
  { room: 6, hash: "#contact", key: "contact" as const, glyph: "✉", code: "06" },
];

type TopMenuKey = "File" | "Edit" | "View" | "Go" | "Help";

function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const init = window.setTimeout(() => setNow(new Date()), 0);
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => {
      window.clearTimeout(init);
      window.clearInterval(id);
    };
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="vt-clock"
      aria-label={now ? now.toLocaleTimeString() : "Clock"}
    >
      <span>{now ? pad(now.getHours()) : "--"}</span>
      <span className="vt-clock-colon">:</span>
      <span>{now ? pad(now.getMinutes()) : "--"}</span>
      <span className="vt-clock-colon">:</span>
      <span>{now ? pad(now.getSeconds()) : "--"}</span>
    </div>
  );
}

function SystemStatusDialog({ onClose }: { onClose: () => void }) {
  const { theme, setTheme, reboot, setTerminalOpen } = useVintecOS();
  const { language, setLanguage } = useLanguage();
  const [weather, setWeather] = useState<{ temp: number; wind: number } | null>(
    null,
  );

  useEffect(() => {
    const ac = new AbortController();
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-6.1783&longitude=106.63&current_weather=true",
      { signal: ac.signal },
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            wind: Math.round(data.current_weather.windspeed),
          });
        }
      })
      .catch(() => {});
    return () => ac.abort();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const rows: [string, ReactNode][] = [
    [
      "Portfolio System",
      <span key="sys" style={{ color: "#15803d", fontWeight: 700 }}>
        ● Operational
      </span>,
    ],
    [
      language === "id" ? "Status Ketersediaan" : "Availability",
      <span key="avail" style={{ color: "#15803d", fontWeight: 700 }}>
        ● {language === "id" ? "Terbuka untuk Peluang" : "Open for Work"}
      </span>,
    ],
    [
      language === "id" ? "Lokasi & Cuaca" : "Base & Weather",
      <span key="loc" style={{ color: "var(--vt-ink-soft)" }}>
        Tangerang, ID {weather ? `· ${weather.temp}°C` : ""}
      </span>,
    ],
    [
      "Runtime",
      <span key="rt" style={{ color: "var(--vt-ink-mute)" }}>
        KevinOS v26.08 · Next.js 16
      </span>,
    ],
  ];

  return (
    <div
      className="fixed inset-0 z-[220] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)" }}
      onClick={onClose}
    >
      <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <VintecWindow
          title="System Status — Control Panel"
          onClose={onClose}
          draggable={false}
          statusLeft="KevinOS System Diagnostics"
          statusRight={["OK"]}
        >
          <div style={{ background: "var(--vt-paper)", padding: "18px 20px" }}>
            <div className="vt-mono text-xs flex flex-col gap-2">
              {rows.map(([label, val]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-3 pb-2"
                  style={{ borderBottom: "1px solid var(--vt-edge-lo-2)" }}
                >
                  <span style={{ color: "var(--vt-ink)" }}>{label}</span>
                  {val}
                </div>
              ))}
            </div>

            {/* OS Theme selector */}
            <div style={{ marginTop: 16 }}>
              <div
                className="vt-eyebrow"
                style={{ marginBottom: 8, fontSize: 10 }}
              >
                {language === "id" ? "Tema Desktop OS" : "Desktop OS Theme"}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                }}
              >
                {VINTEC_THEMES.map((opt) => {
                  const active = theme === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setTheme(opt.id)}
                      className={`vt-btn ${active ? "vt-btn-pink" : "vt-btn-flat"}`}
                      style={{
                        padding: "7px 10px",
                        fontSize: 12,
                        justifyContent: "flex-start",
                      }}
                    >
                      <span>{active ? "●" : "○"}</span>
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                marginTop: 16,
                paddingTop: 12,
                borderTop: "1px solid var(--vt-edge-lo-2)",
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  type="button"
                  onClick={() => setLanguage(language === "id" ? "en" : "id")}
                  className="vt-btn vt-btn-flat"
                  style={{ padding: "6px 11px", fontSize: 11.5 }}
                >
                  Lang: {language.toUpperCase()}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    setTerminalOpen(true);
                  }}
                  className="vt-btn vt-btn-flat"
                  style={{ padding: "6px 11px", fontSize: 11.5 }}
                >
                  &gt;_ Terminal
                </button>
              </div>
              <button
                type="button"
                onClick={reboot}
                className="vt-btn vt-btn-chrome"
                style={{ padding: "6px 12px", fontSize: 11.5 }}
              >
                ↻ Reboot
              </button>
            </div>
          </div>
        </VintecWindow>
      </div>
    </div>
  );
}

export function VintecShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { t, language, setLanguage } = useLanguage();
  const {
    theme,
    setTheme,
    booting,
    finishBoot,
    reboot,
    statusOpen,
    setStatusOpen,
    setTerminalOpen,
    setCommandOpen,
    activeRoom,
    scrollToRoom,
  } = useVintecOS();

  const [startOpen, setStartOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<TopMenuKey | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const isHome = pathname === "/";

  // Close menus on outside click or Escape
  useEffect(() => {
    if (!startOpen && !openMenu) return;
    const onDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (startOpen && !target.closest(".vt-start")) setStartOpen(false);
      if (openMenu && !target.closest(".vt-menubar-wrap")) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setStartOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [startOpen, openMenu]);

  const goRoom = useCallback(
    (roomIdx: number, hash: string) => {
      setStartOpen(false);
      setOpenMenu(null);
      if (!isHome) {
        router.push(hash === "#" ? "/" : `/${hash}`);
        return;
      }
      scrollToRoom(roomIdx);
    },
    [isHome, router, scrollToRoom],
  );

  const getRoomLabel = (key: (typeof ROOM_MENU_ITEMS)[number]["key"]) => {
    if (key === "certs") {
      return language === "id" ? "Sertifikasi" : "Certifications";
    }
    return t.nav[key];
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText("kevinnardiansyahh19@gmail.com").catch(() => {});
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 1800);
    setOpenMenu(null);
  };

  const TOP_MENUS: TopMenuKey[] = ["File", "Edit", "View", "Go", "Help"];

  return (
    <div
      className="vt-landing vt-desktop"
      data-booting={booting ? "true" : "false"}
    >
      {booting && <BootSplash onDone={finishBoot} />}

      {/* Atmospheric layers matching vinteclearning.com */}
      <div className="vt-grain" aria-hidden="true" />
      <WallpaperCanvas />

      {/* ── Top Menubar: exact vintec File / Edit / View / Go / Help ─────── */}
      <header className="vt-menubar">
        <Link
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              goRoom(0, "#");
            }
          }}
          className="vt-pixel"
          style={{
            fontSize: "0.9375rem",
            padding: "0 16px 0 6px",
            letterSpacing: "0.02em",
            color: "var(--vt-ink)",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          kevin
          <span className="vt-cursor" style={{ marginLeft: 2 }}>
            _
          </span>
        </Link>

        <nav className="vt-menubar-nav flex items-center gap-0.5">
          {TOP_MENUS.map((menu) => {
            // Default highlight is "Go" when no dropdown is open — exact match to vinteclearning.com!
            const isActive = openMenu ? openMenu === menu : menu === "Go";
            return (
              <div key={menu} className="vt-menubar-wrap">
                <button
                  type="button"
                  className="vt-menubar-item"
                  data-active={isActive ? "true" : "false"}
                  aria-expanded={openMenu === menu}
                  onClick={() =>
                    setOpenMenu((prev) => (prev === menu ? null : menu))
                  }
                  onMouseEnter={() => {
                    if (openMenu && openMenu !== menu) setOpenMenu(menu);
                  }}
                >
                  {menu}
                </button>

                {openMenu === menu && (
                  <div className="vt-menubar-drop" role="menu">
                    {menu === "File" && (
                      <>
                        <Link
                          href="/cv"
                          role="menuitem"
                          onClick={() => setOpenMenu(null)}
                        >
                          <span>Open Resume.pdf</span>
                          <span className="opacity-60 text-[11px]">CV</span>
                        </Link>
                        <a
                          href="/CV_KEVIN_ARDIANSYAH_2026.pdf"
                          download
                          role="menuitem"
                          onClick={() => setOpenMenu(null)}
                        >
                          <span>Download CV (PDF)</span>
                          <span className="opacity-60 text-[11px]">↓</span>
                        </a>
                        <div className="vt-menubar-drop-sep" />
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setOpenMenu(null);
                            reboot();
                          }}
                        >
                          <span>Reboot KevinOS&hellip;</span>
                          <span className="opacity-60 text-[11px]">↻</span>
                        </button>
                      </>
                    )}

                    {menu === "Edit" && (
                      <>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setLanguage(language === "id" ? "en" : "id");
                            setOpenMenu(null);
                          }}
                        >
                          <span>
                            Language: {language === "id" ? "Indonesia" : "English"}
                          </span>
                          <span className="opacity-60 text-[11px]">
                            {language.toUpperCase()}
                          </span>
                        </button>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={copyEmail}
                        >
                          <span>
                            {copiedEmail ? "✓ Email Copied" : "Copy Email Address"}
                          </span>
                          <span className="opacity-60 text-[11px]">@</span>
                        </button>
                      </>
                    )}

                    {menu === "View" && (
                      <>
                        {VINTEC_THEMES.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            role="menuitem"
                            data-current={theme === opt.id ? "true" : "false"}
                            onClick={() => {
                              setTheme(opt.id);
                              setOpenMenu(null);
                            }}
                          >
                            <span>{opt.label}</span>
                            <span className="text-[11px]">
                              {theme === opt.id ? "●" : "○"}
                            </span>
                          </button>
                        ))}
                        <div className="vt-menubar-drop-sep" />
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setOpenMenu(null);
                            setStatusOpen(true);
                          }}
                        >
                          <span>System Status</span>
                          <span className="opacity-60 text-[11px]">◉</span>
                        </button>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setOpenMenu(null);
                            setTerminalOpen(true);
                          }}
                        >
                          <span>KevinOS Terminal</span>
                          <span className="opacity-60 text-[11px]">&gt;_</span>
                        </button>
                      </>
                    )}

                    {menu === "Go" && (
                      <>
                        {ROOM_MENU_ITEMS.map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            role="menuitem"
                            data-current={
                              isHome && activeRoom === item.room
                                ? "true"
                                : "false"
                            }
                            onClick={() => goRoom(item.room, item.hash)}
                          >
                            <span>
                              {item.glyph} {getRoomLabel(item.key)}
                            </span>
                            <span className="vt-mono opacity-70 text-[11px]">
                              {item.code}
                            </span>
                          </button>
                        ))}
                      </>
                    )}

                    {menu === "Help" && (
                      <>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setOpenMenu(null);
                            setCommandOpen(true);
                          }}
                        >
                          <span>Command Palette</span>
                          <span className="vt-mono opacity-60 text-[11px]">
                            Ctrl+K
                          </span>
                        </button>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setOpenMenu(null);
                            setTerminalOpen(true);
                          }}
                        >
                          <span>Open Terminal</span>
                          <span className="vt-mono opacity-60 text-[11px]">
                            &gt;_
                          </span>
                        </button>
                        <div className="vt-menubar-drop-sep" />
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setOpenMenu(null);
                            setStatusOpen(true);
                          }}
                        >
                          <span>About KevinOS v26.08</span>
                          <span className="opacity-60 text-[11px]">i</span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

        <Link
          href="/cv"
          className="vt-btn vt-btn-flat"
          style={{ padding: "7px 16px", fontSize: "0.8125rem" }}
        >
          Resume
        </Link>

        <button
          type="button"
          onClick={() => goRoom(6, "#contact")}
          className="vt-btn vt-btn-pink vt-btn-sweep"
          style={{ marginLeft: 8, padding: "7px 18px", fontSize: "0.8125rem" }}
        >
          {language === "id" ? "Hubungi Saya" : "Contact Me"}
        </button>
      </header>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      {children}

      {/* ── Bottom Taskbar (mirrors vintec .vt-taskbar) ──────────────────── */}
      <footer className="vt-taskbar">
        <div className="vt-start">
          <button
            type="button"
            className="vt-btn vt-btn-flat vt-start-btn"
            aria-expanded={startOpen}
            onClick={() => setStartOpen((v) => !v)}
          >
            <span className="vt-start-logo" aria-hidden="true">
              ⊞
            </span>
            Start
          </button>

          {startOpen && (
            <div className="vt-start-menu" role="menu">
              <div className="vt-start-side" aria-hidden="true">
                Kevin<b>98</b>
              </div>
              <div className="vt-start-items">
                {ROOM_MENU_ITEMS.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    role="menuitem"
                    onClick={() => goRoom(item.room, item.hash)}
                  >
                    <span aria-hidden="true">{item.glyph}</span>
                    {getRoomLabel(item.key)}
                  </button>
                ))}
                <Link
                  href="/cv"
                  role="menuitem"
                  onClick={() => setStartOpen(false)}
                >
                  <span aria-hidden="true">▣</span>
                  Curriculum Vitae
                </Link>
                <div className="vt-start-sep" role="separator" />
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setStartOpen(false);
                    setStatusOpen(true);
                  }}
                >
                  <span aria-hidden="true">◉</span>
                  {language === "id"
                    ? "Status & Tema OS"
                    : "System Status & Theme"}
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setStartOpen(false);
                    setCommandOpen(true);
                  }}
                >
                  <span aria-hidden="true">⌘</span>
                  Command Menu (Ctrl+K)
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setStartOpen(false);
                    setTerminalOpen(true);
                  }}
                >
                  <span aria-hidden="true">&gt;_</span>
                  KevinOS Terminal
                </button>
                <div className="vt-start-sep" role="separator" />
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setStartOpen(false);
                    reboot();
                  }}
                >
                  <span aria-hidden="true">↻</span>
                  Reboot&hellip;
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          className="vt-taskbar-copy"
          style={{
            fontSize: "0.75rem",
            color: "var(--vt-ink-soft)",
            marginLeft: 6,
          }}
        >
          &copy; Kevin Ardiansyah &mdash; 2026
        </div>

        <div style={{ flex: 1 }} />

        <button
          type="button"
          onClick={() => setStatusOpen(true)}
          className="vt-btn vt-btn-flat"
          style={{
            padding: "5px 14px",
            fontSize: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 7,
              height: 7,
              background: "var(--vt-teal)",
              borderRadius: "50%",
              animation: "vt-pulse 1.6s infinite",
            }}
          />
          Status
        </button>

        <LiveClock />
      </footer>

      {statusOpen && (
        <SystemStatusDialog onClose={() => setStatusOpen(false)} />
      )}
    </div>
  );
}
