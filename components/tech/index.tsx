"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { useVintecOS } from "@/context/VintecOSContext";
import { techStack, techGroups } from "@/data/tech/techData";
import { VintecWindow } from "@/components/vintec/VintecWindow";
import { KevinAppIcon, PlatformGlyph } from "@/components/vintec/BrandMark";
import { TypedText } from "@/components/vintec/TypedText";
import { useCountUp } from "@/components/vintec/CountUp";
import { WeatherWidget } from "@/components/ui/WeatherWidget";
import type { CertData } from "@/types";

function BigStat({
  value,
  suffix = "",
  label,
  active,
  bar,
}: {
  value: number;
  suffix?: string;
  label: string;
  active: boolean;
  bar: number;
}) {
  const count = useCountUp(value, active, 0, 1600);
  return (
    <div className="vt-bigstat">
      <div className="vt-bigstat-n">
        {count}
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="vt-crt-bar vt-bigstat-bar">
        <div
          className="vt-crt-fill"
          style={{ width: active ? `${bar}%` : "0%" }}
        />
      </div>
      <div className="vt-bigstat-l">{label}</div>
    </div>
  );
}

function CertTile({
  cert,
  onClick,
  inert = false,
}: {
  cert: CertData;
  onClick: () => void;
  inert?: boolean;
}) {
  return (
    <Link
      href={`/certificate/${cert.id}`}
      onClick={onClick}
      tabIndex={inert ? -1 : undefined}
      className="vt-card-inset vt-course-card vt-testi-card"
      style={{ width: 310 }}
    >
      <div className="flex items-center justify-between gap-2">
        <span aria-hidden="true" className="vt-folder" />
        <span
          className="vt-mono text-[11px]"
          style={{ color: "var(--vt-ink-mute)" }}
        >
          CERT_{cert.id} · {cert.year}
        </span>
      </div>

      <h3
        className="vt-big"
        style={{
          margin: 0,
          fontSize: 14.5,
          fontWeight: 600,
          lineHeight: 1.3,
          color: "var(--vt-ink)",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {cert.title}
      </h3>

      <div
        className="flex items-center justify-between gap-2 mt-auto pt-2"
        style={{ borderTop: "1px solid var(--vt-edge-lo-2)" }}
      >
        <span
          style={{
            fontSize: 11.5,
            color: "var(--vt-ink-mute)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {cert.issuer}
        </span>
        <span
          className="vt-pixel-strict shrink-0"
          style={{ fontSize: 10, color: "var(--vt-blue)" }}
        >
          PDF <span className="vt-arrow">→</span>
        </span>
      </div>

      <div className="vt-course-bar" aria-hidden="true">
        <div />
      </div>
    </Link>
  );
}

/**
 * Room 4: Exact mirror of vinteclearning.com's .vt-mid-grid
 * (Left: System_Monitor.exe | Right: System_Features.dll + Kevin_Resume.exe)
 */
export function TechMonitorGrid() {
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const { stageActive, activeRoom } = useVintecOS();
  const statsRef = useRef<HTMLDivElement>(null);
  const [ioSeen, setIoSeen] = useState(false);

  useEffect(() => {
    if (stageActive) return;
    const el = statsRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setIoSeen(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIoSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stageActive]);

  const statsSeen = stageActive ? activeRoom >= 4 : ioSeen;
  const certs = t.tech.certs;

  return (
    <div id="tech" ref={statsRef} className="vt-mid-grid">
      {/* LEFT: System_Monitor.exe */}
      <VintecWindow
        title="System_Monitor.exe"
        className="vt-reveal vt-reveal-2 vt-mid-left"
        floatDelay="2.3s"
        sheenDelay="3s"
        statusLeft={`${techStack.length} technologies indexed · ${techGroups.length} categories`}
        statusRight={["ONLINE"]}
      >
        <div
          style={{
            background: "var(--vt-paper)",
            padding: "28px clamp(18px, 3vw, 36px) 30px",
          }}
        >
          <div className="vt-eyebrow" style={{ marginBottom: 14 }}>
            04 &mdash;{" "}
            {language === "id" ? "Angka & Tech Stack" : "Metrics & Tech Stack"}
          </div>

          <div className="vt-bigstats">
            <BigStat
              value={techStack.length}
              suffix="+"
              label={
                language === "id" ? "teknologi & tools" : "technologies & tools"
              }
              active={statsSeen}
              bar={100}
            />
            <BigStat
              value={certs.length}
              label={
                language === "id" ? "sertifikasi resmi" : "verified credentials"
              }
              active={statsSeen}
              bar={88}
            />
            <BigStat
              value={100}
              suffix="%"
              label={
                language === "id" ? "fokus kualitas kode" : "clean code focus"
              }
              active={statsSeen}
              bar={100}
            />
          </div>

          {/* Compact Categorized Tech Stack Inventory */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5"
            style={{ borderTop: "1px solid var(--vt-edge-lo-2)" }}
          >
            {techGroups.map((group) => {
              const items = techStack.filter((item) =>
                group.items.includes(item.name),
              );
              return (
                <div
                  key={group.label}
                  className={
                    group.label === "DevOps & Infra"
                      ? "sm:col-span-2 flex flex-col gap-2"
                      : "flex flex-col gap-2"
                  }
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="vt-folder"
                      style={{ width: 11, height: 9 }}
                      aria-hidden="true"
                    />
                    <span
                      className="vt-pixel-strict uppercase"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.12em",
                        color: "var(--vt-blue)",
                      }}
                    >
                      {group.label}
                    </span>
                    <span
                      className="flex-1 h-px"
                      style={{ background: "var(--vt-edge-lo-2)" }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {items.map((tech) => (
                      <div
                        key={tech.name}
                        className="vt-card-inset flex items-center gap-1.5 px-2.5 py-1"
                        style={{ fontSize: 12, color: "var(--vt-ink)" }}
                      >
                        <Image
                          src={tech.image}
                          alt={tech.name}
                          width={15}
                          height={15}
                          className="w-3.5 h-3.5 object-contain"
                        />
                        <span style={{ fontWeight: 600 }}>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </VintecWindow>

      {/* RIGHT STACK: 2 Windows matching vinteclearning.com (System_Features.dll + Kevin_Resume.exe) */}
      <div className="flex flex-col gap-7">
        <VintecWindow
          title="System_Features.dll"
          className="vt-reveal vt-reveal-2 vt-mid-feat"
          floatDelay="3.1s"
          sheenDelay="4s"
          plain
        >
          <div style={{ background: "var(--vt-paper)", padding: 18 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 10,
              }}
            >
              {[
                ["▦", "Full-Stack"],
                ["▤", "DevOps & IT"],
                ["◨", "UI/UX Craft"],
              ].map(([glyph, label], idx) => (
                <div
                  key={label}
                  className="vt-card-inset"
                  style={{ padding: "14px 8px", textAlign: "center" }}
                >
                  <div
                    className="vt-bob"
                    style={
                      {
                        "--i": idx,
                        fontSize: "1.4rem",
                        marginBottom: 5,
                        color: "var(--vt-ink)",
                      } as CSSProperties
                    }
                    aria-hidden="true"
                  >
                    {glyph}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--vt-ink)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 12,
                padding: "9px 11px",
                background: "var(--vt-card)",
                color: "var(--vt-ink)",
                fontSize: "0.74rem",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow:
                  "inset 1px 1px 0 var(--vt-edge-lo-2), inset -1px -1px 0 var(--vt-edge-hi)",
              }}
            >
              <span
                style={{ color: "var(--vt-teal)" }}
                className="vt-spin-glyph"
                aria-hidden="true"
              >
                ◈
              </span>
              <TypedText
                text={
                  language === "id"
                    ? "Siap Berkolaborasi"
                    : "Open for Work · Ready"
                }
                speed={46}
                delay={900}
              />
            </div>

            <div className="mt-2.5">
              <WeatherWidget />
            </div>
          </div>
        </VintecWindow>

        <VintecWindow
          title="Kevin_Resume.exe"
          className="vt-reveal vt-reveal-3 vt-launcher"
          floatDelay="3.7s"
          sheenDelay="5s"
          plain
        >
          <div className="vt-launcher-body">
            <div className="vt-launcher-icon" aria-hidden="true">
              <KevinAppIcon size={56} />
            </div>
            <div className="min-w-0">
              <div className="vt-eyebrow" style={{ marginBottom: 8 }}>
                Document · PDF
              </div>
              <h3 className="vt-launcher-name">CURRICULUM VITAE</h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.78rem",
                  lineHeight: 1.55,
                  color: "var(--vt-ink-soft)",
                  maxWidth: "34ch",
                }}
              >
                {language === "id"
                  ? "Ringkasan pengalaman Software Engineering, DevOps, pendidikan, dan sertifikasi terbaru."
                  : "Complete resume covering Software Engineering, DevOps, education, and verified certifications."}
              </p>
              <div className="vt-launcher-meta">
                <span
                  className="vt-platforms"
                  aria-label="Windows, macOS, Linux"
                >
                  {(["windows", "macos", "linux"] as const).map((plat) => (
                    <span key={plat} title={plat}>
                      <PlatformGlyph platform={plat} size={14} />
                    </span>
                  ))}
                </span>
                <span className="vt-mono">v2026.0</span>
              </div>
            </div>
          </div>

          <div className="vt-launcher-foot">
            <Link
              href="/cv"
              onClick={() => startLoading(800)}
              className="vt-btn vt-btn-pink vt-btn-sweep"
              style={{ padding: "10px 18px", fontSize: "0.8125rem" }}
            >
              {language === "id" ? "Buka Resume" : "Open Resume"}{" "}
              <span className="vt-arrow" aria-hidden="true">
                ▸
              </span>
            </Link>
            <span className="vt-launcher-status">
              {language === "id" ? "Terbaru 2026" : "Updated 2026"}
            </span>
          </div>
        </VintecWindow>
      </div>
    </div>
  );
}

/**
 * Room 5: Certificates.exe — 2-row drifting credential marquee + expandable grid
 */
export function CertificatesWindow() {
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const [certsExpanded, setCertsExpanded] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [certsExpanded]);

  const certs = t.tech.certs;
  const certRowA = certs.filter((_, i) => i % 2 === 0);
  const certRowB = certs.filter((_, i) => i % 2 === 1);

  return (
    <VintecWindow
      id="certs"
      title="Certificates.exe — Lisensi & Sertifikasi"
      className="vt-reveal vt-reveal-2"
      floatDelay="2.7s"
      sheenDelay="4.5s"
      statusLeft={
        language === "id"
          ? "klik sertifikat buat buka dokumen PDF asli · Dicoding · MathWorks · DBS Foundation"
          : "click any certificate to preview original PDF · Dicoding · MathWorks · DBS Foundation"
      }
      statusRight={[`${certs.length} PDFs`, "verified"]}
    >
      <div className="vt-testi-body">
        <div className="vt-testi-head">
          <div>
            <div className="vt-eyebrow">
              05 &mdash; {t.tech.badgeCert}
            </div>
            <h2 className="vt-big vt-big-h2">{t.tech.titleCert}</h2>
          </div>

          <div className="vt-testi-stats">
            <span>
              <b>{certs.length}</b>{" "}
              {language === "id" ? "sertifikat" : "certificates"}
            </span>
            <span>
              <b>3</b> {language === "id" ? "institusi" : "issuers"}
            </span>
          </div>
        </div>

        {certsExpanded ? (
          <div
            className="vt-testi-all"
            style={{ overscrollBehavior: "contain" }}
          >
            <div className="vt-testi-grid">
              {certs.map((cert) => (
                <CertTile
                  key={cert.id}
                  cert={cert}
                  onClick={() => startLoading(800)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="vt-testi-wall">
            {[certRowA, certRowB].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="vt-testi-row"
                data-dir={rowIdx === 1 ? "rev" : undefined}
              >
                <div
                  className="vt-testi-track"
                  style={
                    {
                      "--dur": `${Math.max(46, row.length * 8)}s`,
                    } as CSSProperties
                  }
                >
                  {[0, 1].map((copy) => (
                    <div
                      key={copy}
                      className="vt-testi-set"
                      aria-hidden={copy === 1 ? "true" : undefined}
                    >
                      {row.map((cert) => (
                        <CertTile
                          key={`${copy}-${cert.id}`}
                          cert={cert}
                          inert={copy === 1}
                          onClick={() => startLoading(800)}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="vt-testi-actions">
          <button
            type="button"
            className={`vt-btn ${certsExpanded ? "vt-btn-chrome" : "vt-btn-pink"}`}
            style={{ padding: "10px 18px", fontSize: "0.84rem" }}
            onClick={() => setCertsExpanded((v) => !v)}
          >
            {certsExpanded ? (
              language === "id" ? "Tutup daftar" : "Collapse list"
            ) : (
              <>
                {language === "id"
                  ? `Lihat semua ${certs.length} sertifikasi`
                  : `View all ${certs.length} certifications`}{" "}
                <span className="vt-arrow" aria-hidden="true">
                  ▸
                </span>
              </>
            )}
          </button>
          {!certsExpanded && (
            <span className="vt-testi-hint">
              {language === "id"
                ? "Arahkan kursor buat berhenti sebentar."
                : "Hover to pause."}
            </span>
          )}
        </div>
      </div>
    </VintecWindow>
  );
}

export default function TechAndCerts() {
  return (
    <div className="flex flex-col gap-9">
      <TechMonitorGrid />
      <CertificatesWindow />
    </div>
  );
}
