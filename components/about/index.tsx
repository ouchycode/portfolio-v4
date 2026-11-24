"use client";

import { Fragment } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";

export default function About() {
  const { t, language } = useLanguage();

  const manifestoLines =
    language === "id"
      ? [
          "Membangun software nggak cuma soal kode.",
          "Dari antarmuka cepat, backend andal, DevOps,",
          "sampai produk nyata yang beneran dipakai.",
        ]
      : [
          "Building software is more than writing code.",
          "From fast interfaces, reliable backends, DevOps,",
          "to real products people depend on every day.",
        ];

  return (
    <VintecWindow
      id="about"
      title="README.txt — Notepad"
      className="vt-reveal vt-reveal-2"
      floatDelay="2.4s"
      sheenDelay="3.2s"
    >
      {/* Classic Notepad Menu Bar (File Edit Format View Help) */}
      <div className="vt-notepad-menu" aria-hidden="true">
        {["File", "Edit", "Format", "View", "Help"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div
        style={{
          background: "var(--vt-paper)",
          padding: "34px clamp(20px, 4vw, 48px) 36px",
        }}
      >
        <div className="vt-eyebrow" style={{ marginBottom: 16 }}>
          02 &mdash;{" "}
          {language === "id" ? "Manifesto & Profil" : "Manifesto & Profile"}
        </div>

        {/* Giant Scroll-Lit Manifesto Copy (driven by StageController D.p[2]) */}
        <p data-vt-manifesto className="vt-manifesto vt-big">
          {manifestoLines.map((line, li) => (
            <Fragment key={li}>
              {line.split(" ").map((word, wi) => (
                <span key={`${li}-${wi}`} data-lit="false">
                  {word}{" "}
                </span>
              ))}
              {li < manifestoLines.length - 1 && <br />}
            </Fragment>
          ))}
        </p>

        {/* Compact Profile Strip Below Manifesto */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-7 pt-6 items-center"
          style={{ borderTop: "1px solid var(--vt-edge-lo-2)" }}
        >
          <div className="md:col-span-3 lg:col-span-2">
            <div className="vt-card-inset p-1.5 max-w-[180px]">
              <div
                className="relative w-full aspect-square overflow-hidden"
                style={{ border: "1px solid var(--vt-edge-lo-2)" }}
              >
                <Image
                  src="/profile_kevin_hd.png"
                  alt="Kevin Ardiansyah"
                  fill
                  sizes="180px"
                  className="object-cover object-center"
                />
              </div>
              <div
                className="flex items-center justify-between pt-1.5 px-0.5"
                style={{ fontSize: 10, color: "var(--vt-ink-mute)" }}
              >
                <span className="vt-mono">profile.bmp</span>
                <span
                  className="vt-pixel-strict"
                  style={{ fontSize: 9, color: "var(--vt-blue)" }}
                >
                  KEVIN
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-9 lg:col-span-10 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="vt-pixel-strict px-2.5 py-1 text-[10px] uppercase"
                style={{
                  background: "var(--vt-teal)",
                  color: "#04241f",
                  fontWeight: 700,
                }}
              >
                {t.about.tag}
              </span>
              <span
                className="vt-mono text-[11px]"
                style={{ color: "var(--vt-ink-mute)" }}
              >
                Tangerang, Banten, Indonesia · IPK 3.86 / 4.00
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "var(--vt-ink-soft)",
                maxWidth: "74ch",
              }}
            >
              {t.about.description}
            </p>

            <div className="vt-card-inset flex flex-wrap items-center justify-between gap-3 px-3.5 py-2.5">
              <div className="flex items-center gap-3">
                <span
                  className="vt-folder"
                  style={{ width: 18, height: 14 }}
                  aria-hidden="true"
                />
                <span
                  className="vt-big"
                  style={{
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "var(--vt-ink)",
                  }}
                >
                  {t.about.eduValue}
                </span>
              </div>
              <span
                className="vt-mono text-[11px] font-bold"
                style={{ color: "var(--vt-blue)" }}
              >
                {t.about.eduLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </VintecWindow>
  );
}
