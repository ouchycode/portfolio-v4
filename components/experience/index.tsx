"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";
import type { ExperienceData } from "@/types";

const TYPE_GLYPH: Record<string, string> = {
  Internship: "▦",
  Education: "▤",
  Organization: "◈",
  Bootcamp: "▣",
};

function ExperienceTile({
  exp,
  onClick,
  inert = false,
}: {
  exp: ExperienceData;
  onClick: () => void;
  inert?: boolean;
}) {
  return (
    <Link
      href={`/experience/${exp.id}`}
      onClick={onClick}
      tabIndex={inert ? -1 : undefined}
      className="vt-card-inset vt-course-card vt-testi-card"
    >
      <div className="flex items-center justify-between gap-2 text-[11px]">
        <span
          className="vt-pixel-strict inline-flex items-center gap-1.5 uppercase"
          style={{ color: "var(--vt-blue)", fontSize: 10 }}
        >
          <span aria-hidden="true">{TYPE_GLYPH[exp.type] ?? "▪"}</span>
          {exp.type}
        </span>
        <span
          className="vt-mono"
          style={{ color: "var(--vt-ink-mute)", fontSize: 11 }}
        >
          {exp.period}
        </span>
      </div>

      <h3
        className="vt-big"
        style={{
          margin: 0,
          fontSize: 15.5,
          fontWeight: 600,
          lineHeight: 1.25,
          color: "var(--vt-ink)",
        }}
      >
        {exp.role}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: 13,
          lineHeight: 1.5,
          color: "var(--vt-ink-soft)",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {exp.description}
      </p>

      <div
        className="flex items-center justify-between gap-2 mt-auto pt-2"
        style={{ borderTop: "1px solid var(--vt-edge-lo-2)" }}
      >
        <div className="min-w-0">
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--vt-ink)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {exp.company}
          </div>
          <div
            style={{
              fontSize: 10.5,
              color: "var(--vt-ink-mute)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {exp.location}
          </div>
        </div>
        <span
          className="vt-pixel-strict shrink-0"
          style={{ fontSize: 10, color: "var(--vt-blue)" }}
        >
          OPEN <span className="vt-arrow">→</span>
        </span>
      </div>

      <div className="vt-course-bar" aria-hidden="true">
        <div />
      </div>
    </Link>
  );
}

export default function Experience() {
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [expanded]);

  const list = t.experience.list;
  const rowA = list.filter((_, i) => i % 2 === 0);
  const rowB = list.filter((_, i) => i % 2 === 1);

  return (
    <VintecWindow
      id="experience"
      title={
        language === "id"
          ? "Career.exe — Perjalanan Karir"
          : "Career.exe — Career Journey"
      }
      className="vt-reveal vt-reveal-2 vt-testi-win"
      floatDelay="2.1s"
      sheenDelay="2.5s"
      statusLeft={
        language === "id"
          ? "klik kartu buat lihat detail peran, kontribusi, dan skill"
          : "click any card to view role details, achievements & skills"
      }
      statusRight={[`${list.length} entries`, "verified"]}
    >
      <div className="vt-testi-body">
        <div className="vt-testi-head">
          <div>
            <div className="vt-eyebrow">
              01 &mdash; {t.experience.badge}
            </div>
            <h2 className="vt-big vt-big-h2">
              {language === "id" ? (
                <>
                  Perjalanan karir
                  <br />
                  &amp; pendidikan.
                </>
              ) : (
                <>
                  Career journey
                  <br />
                  &amp; education.
                </>
              )}
            </h2>
          </div>

          <div className="vt-testi-stats">
            <span>
              <b>{list.length}</b>{" "}
              {language === "id" ? "pengalaman" : "experiences"}
            </span>
            <span>
              <b>3.86</b> {language === "id" ? "IPK UYM" : "GPA UYM"}
            </span>
            <span>
              <b>Top 10</b> Best Capstone
            </span>
          </div>
        </div>

        {expanded ? (
          <div
            className="vt-testi-all"
            style={{ overscrollBehavior: "contain" }}
          >
            <div className="vt-testi-grid">
              {list.map((exp) => (
                <ExperienceTile
                  key={exp.id}
                  exp={exp}
                  onClick={() => startLoading(800)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="vt-testi-wall">
            {[rowA, rowB].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="vt-testi-row"
                data-dir={rowIdx === 1 ? "rev" : undefined}
              >
                <div
                  className="vt-testi-track"
                  style={
                    {
                      "--dur": `${Math.max(42, row.length * 11)}s`,
                    } as CSSProperties
                  }
                >
                  {[0, 1].map((copy) => (
                    <div
                      key={copy}
                      className="vt-testi-set"
                      aria-hidden={copy === 1 ? "true" : undefined}
                    >
                      {row.map((exp) => (
                        <ExperienceTile
                          key={`${copy}-${exp.id}`}
                          exp={exp}
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
            className={`vt-btn ${expanded ? "vt-btn-chrome" : "vt-btn-pink"}`}
            style={{ padding: "10px 18px", fontSize: "0.84rem" }}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? (
              language === "id" ? "Tutup daftar" : "Collapse list"
            ) : (
              <>
                {language === "id"
                  ? `Lihat semua ${list.length} pengalaman`
                  : `View all ${list.length} experiences`}{" "}
                <span className="vt-arrow" aria-hidden="true">
                  ▸
                </span>
              </>
            )}
          </button>

          {!expanded && (
            <span className="vt-testi-hint">
              {language === "id"
                ? "Arahkan kursor buat berhenti sebentar."
                : "Hover to pause the stream."}
            </span>
          )}
        </div>
      </div>
    </VintecWindow>
  );
}
