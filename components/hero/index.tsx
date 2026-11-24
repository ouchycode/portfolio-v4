"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { useVintecOS } from "@/context/VintecOSContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";
import { NeuralMonitorCanvas } from "@/components/vintec/NeuralMonitorCanvas";
import { useCountUp } from "@/components/vintec/CountUp";

const MONITOR_LOGS: [string, string][] = [
  ["mount akadmeet-lms", "OK"],
  ["mount siakad-mobile-app", "OK"],
  ["mount fair-price-finder-ai", "OK"],
  ["attach nextjs-react-ts", "OK"],
  ["sync laravel-mysql-api", "OK"],
  ["boot docker-nginx-linux", "OK"],
  ["verify 16-certifications", "OK"],
  ["locate tangerang-id", "READY"],
  ["probe availability", "OPEN"],
  ["warm cache", "HIT"],
];

function HeroStat({
  value,
  suffix = "",
  label,
  delay,
  decimals = 0,
  active,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
  decimals?: number;
  active: boolean;
}) {
  const count = useCountUp(value, active, delay, 1400, decimals);
  return (
    <div className="vt-in" style={{ "--i": 4 } as CSSProperties}>
      <span
        style={{
          fontSize: "1.375rem",
          fontWeight: 700,
          color: "var(--vt-ink)",
          display: "block",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {count}
        {suffix}
      </span>
      {label}
    </div>
  );
}

function CrtLogTicker() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => setTick((n) => n + 1), 1150);
    return () => window.clearInterval(id);
  }, []);

  const len = MONITOR_LOGS.length;
  const rows = [tick - 2, tick - 1, tick].map(
    (idx) => MONITOR_LOGS[((idx % len) + len) % len],
  );

  return (
    <div className="vt-crt-log" aria-hidden="true">
      {rows.map(([cmd, status], i) => (
        <div
          key={`${tick}-${i}`}
          className="vt-crt-log-row"
          data-latest={i === 2 ? "true" : "false"}
        >
          <span>&gt; {cmd}</span>
          <span
            style={{
              color:
                status === "OPEN" || status === "READY"
                  ? "var(--vt-amber)"
                  : undefined,
            }}
          >
            {status}
            {i === 2 && <span className="vt-cursor">▌</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

function BigLines({
  lines,
}: {
  lines: { size: "xl" | "md"; words: string[] }[];
}) {
  let idx = 0;
  return (
    <>
      {lines.map((line) => (
        <span
          key={line.words.join(" ")}
          className="vt-big-line"
          data-size={line.size}
        >
          {line.words.map((word) => {
            const i = idx++;
            return (
              <span
                key={`${word}-${i}`}
                className="vt-big-w"
                style={{ "--i": i } as CSSProperties}
              >
                <span>{word}</span>
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const { booting, scrollToRoom } = useVintecOS();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty(
        "--px",
        (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(3),
      );
      el.style.setProperty(
        "--py",
        (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(3),
      );
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [booting]);

  const shortcuts: {
    glyph: string;
    label: string;
    room?: number;
    href: string;
    isRoute?: boolean;
  }[] = [
    {
      glyph: "▦",
      label: language === "id" ? "Karya" : "Projects",
      room: 3,
      href: "#projects",
    },
    {
      glyph: "▤",
      label: language === "id" ? "Karir.log" : "Career.log",
      room: 1,
      href: "#experience",
    },
    {
      glyph: "◈",
      label: "Tech.dll",
      room: 4,
      href: "#tech",
    },
    {
      glyph: "✎",
      label: "README.txt",
      room: 2,
      href: "#about",
    },
    {
      glyph: "▣",
      label: "Resume.pdf",
      href: "/cv",
      isRoute: true,
    },
  ];

  return (
    <div ref={gridRef} className="vt-first">
      {/* ── LEFT: Main Hero Window ── */}
      <VintecWindow
        title="KevinOS — Software Engineer.exe"
        className="vt-reveal vt-hero-win"
        floatDelay="1.4s"
        sheenDelay="1.2s"
      >
        <div
          className="vt-hero-body"
          style={{
            background: "var(--vt-paper)",
            padding: "50px 50px 46px",
          }}
        >
          <div className="vt-parallax-copy">
            {/* Cyan SYSTEM ONLINE badge */}
            <div
              className="vt-pixel vt-in"
              style={
                {
                  "--i": 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.7rem",
                  background: "var(--vt-teal)",
                  color: "#04241f",
                  padding: "6px 11px",
                  marginBottom: 24,
                  fontWeight: 700,
                } as CSSProperties
              }
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  background: "#04241f",
                  borderRadius: "50%",
                  animation: "vt-pulse 1.6s infinite",
                }}
              />
              SYSTEM ONLINE · TANGERANG, ID · OPEN FOR WORK
            </div>

            {/* Giant Unbounded Headline */}
            <h1
              className="vt-hero-title vt-big"
              aria-label="KEVIN — code. build. evolve."
            >
              <BigLines
                lines={[
                  { size: "xl", words: ["KEVIN"] },
                  { size: "md", words: ["code.", "build.", "evolve."] },
                ]}
              />
            </h1>

            {/* Description */}
            <p
              className="vt-in"
              style={
                {
                  "--i": 2,
                  margin: "24px 0 30px",
                  fontSize: "0.96875rem",
                  lineHeight: 1.75,
                  maxWidth: "46ch",
                  color: "var(--vt-ink-soft)",
                } as CSSProperties
              }
            >
              {t.hero.desc}
            </p>

            {/* Primary & Secondary CTAs */}
            <div
              className="vt-in"
              style={
                {
                  "--i": 3,
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                } as CSSProperties
              }
            >
              <button
                type="button"
                onClick={() => scrollToRoom(3)}
                className="vt-btn vt-btn-pink vt-btn-sweep"
                style={{ padding: "14px 28px", fontSize: "0.9375rem" }}
              >
                {t.hero.btnProject}{" "}
                <span className="vt-arrow" aria-hidden="true">
                  ▸
                </span>
              </button>

              <Link
                href="/cv"
                onClick={() => startLoading(800)}
                className="vt-btn vt-btn-chrome"
                style={{ padding: "14px 28px", fontSize: "0.9375rem" }}
              >
                {t.hero.btnResume}{" "}
                <span className="vt-arrow" aria-hidden="true">
                  ▸
                </span>
              </Link>
            </div>

            {/* Count-up KPIs */}
            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 28,
                flexWrap: "wrap",
                fontSize: "0.75rem",
                color: "var(--vt-ink-mute)",
              }}
            >
              <HeroStat
                value={t.projects.list.length}
                label={language === "id" ? "karya pilihan" : "selected works"}
                delay={350}
                active={!booting}
              />
              <HeroStat
                value={t.tech.certs.length}
                label={language === "id" ? "sertifikasi" : "certifications"}
                delay={450}
                active={!booting}
              />
              <HeroStat
                value={3.86}
                decimals={2}
                label={language === "id" ? "IPK Ilmu Komputer" : "CS GPA / 4.00"}
                delay={550}
                active={!booting}
              />
            </div>
          </div>
        </div>
      </VintecWindow>

      {/* ── RIGHT: Desktop Yellow Icons + MONITOR.exe CRT Window ── */}
      <div className="vt-desk-side">
        <div
          className="vt-icons"
          aria-label={language === "id" ? "Pintasan desktop" : "Desktop shortcuts"}
        >
          {shortcuts.map((sc) => {
            const dot = sc.label.lastIndexOf(".");
            const labelNode =
              dot > 0 ? (
                <>
                  {sc.label.slice(0, dot)}
                  <wbr />
                  {sc.label.slice(dot)}
                </>
              ) : (
                sc.label
              );

            if (sc.isRoute) {
              return (
                <Link
                  key={sc.label}
                  href={sc.href}
                  onClick={() => startLoading(800)}
                  className="vt-icon"
                >
                  <span className="vt-icon-glyph" aria-hidden="true">
                    {sc.glyph}
                  </span>
                  <span className="vt-icon-label">{labelNode}</span>
                </Link>
              );
            }

            return (
              <a
                key={sc.label}
                href={sc.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (sc.room !== undefined) scrollToRoom(sc.room);
                }}
                className="vt-icon"
              >
                <span className="vt-icon-glyph" aria-hidden="true">
                  {sc.glyph}
                </span>
                <span className="vt-icon-label">{labelNode}</span>
              </a>
            );
          })}
        </div>

        <VintecWindow
          title="MONITOR.exe"
          className="vt-reveal vt-reveal-2 vt-crt-win"
          floatDelay="2.6s"
          sheenDelay="3.5s"
        >
          <div className="vt-crt-panel vt-parallax-crt">
            <div
              className="vt-pixel-strict"
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.625rem",
                letterSpacing: "0.08em",
                marginBottom: 8,
              }}
            >
              <span>KEVIN OS // DEV WORKSTATION</span>
              <span>
                ◱ <span className="vt-spin-glyph">↻</span> ▤
              </span>
            </div>

            <NeuralMonitorCanvas />

            <div
              style={{
                marginTop: 10,
                fontSize: "0.6875rem",
                lineHeight: 2,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>projects.shipped</span>
                <span>
                  {t.projects.list.length}/{t.projects.list.length}
                </span>
              </div>
              <div className="vt-crt-bar" style={{ margin: "3px 0 8px" }}>
                <div
                  className="vt-crt-fill"
                  style={{ "--i": 0, width: "100%" } as CSSProperties}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>certs.verified</span>
                <span>OK</span>
              </div>
              <div className="vt-crt-bar" style={{ margin: "3px 0 8px" }}>
                <div
                  className="vt-crt-fill"
                  style={{ "--i": 1, width: "86%" } as CSSProperties}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>work.status</span>
                <span className="vt-idle">OPEN</span>
              </div>
              <div className="vt-crt-bar">
                <div
                  className="vt-crt-fill"
                  style={
                    {
                      "--i": 2,
                      width: "72%",
                      background: "var(--vt-amber)",
                    } as CSSProperties
                  }
                />
              </div>
            </div>

            <CrtLogTicker />
          </div>
        </VintecWindow>
      </div>
    </div>
  );
}
