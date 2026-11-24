"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";
import type { ExperienceData } from "@/types";

const TYPE_ID: Record<string, string> = {
  Education: "Pendidikan",
  Bootcamp: "Pelatihan",
  Internship: "Magang",
  Organization: "Organisasi",
};

export default function ExperienceDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const id = params.id as string;

  const data = t.experience.list.find((item: ExperienceData) => item.id === id);

  if (!data) {
    return (
      <main className="vt-main" style={{ maxWidth: 920 }}>
        <VintecWindow title="Career.exe — Not Found" draggable={false}>
          <div style={{ background: "var(--vt-paper)", padding: 40, textAlign: "center" }}>
            <p className="vt-mono text-sm" style={{ color: "var(--vt-ink-mute)" }}>
              {language === "id" ? "Data pengalaman tidak ditemukan." : "Experience entry not found."}
            </p>
            <Link
              href="/#experience"
              className="vt-btn vt-btn-chrome mt-4"
              style={{ padding: "10px 20px", fontSize: 13 }}
            >
              ← {language === "id" ? "Kembali" : "Back"}
            </Link>
          </div>
        </VintecWindow>
      </main>
    );
  }

  return (
    <main className="vt-main" style={{ maxWidth: 980 }}>
      <VintecWindow
        title={`${data.role} — ${data.company}`}
        className="vt-reveal"
        draggable={false}
        statusLeft={`C:\\Kevin\\Career\\${data.id}.log — load complete`}
        statusRight={[data.period, "verified"]}
      >
        {/* Address bar */}
        <div className="vt-address">
          <Link
            href="/#experience"
            onClick={() => startLoading(600)}
            className="vt-btn vt-btn-flat"
            style={{ padding: "4px 12px", fontSize: 12 }}
          >
            ← {language === "id" ? "Kembali" : "Back"}
          </Link>
          <div className="vt-address-field">
            C:\Kevin\Career\{data.id}.log
          </div>
        </div>

        <div
          style={{
            background: "var(--vt-paper)",
            padding: "32px clamp(20px, 4vw, 44px) 38px",
          }}
        >
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span
              className="vt-pixel-strict px-2.5 py-1 text-[10px] uppercase"
              style={{
                background: "var(--vt-teal)",
                color: "#04241f",
                fontWeight: 700,
              }}
            >
              {language === "id"
                ? (TYPE_ID[data.type] ?? data.type)
                : data.type}
            </span>
            <span
              className="vt-mono text-xs"
              style={{ color: "var(--vt-ink-mute)" }}
            >
              {data.period}
            </span>
          </div>

          {/* Role & Company */}
          <h1
            className="vt-big"
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(26px, 3.6vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "var(--vt-ink)",
            }}
          >
            {data.role}
          </h1>

          <div
            className="flex flex-wrap items-center gap-2 text-sm mb-8"
            style={{ fontWeight: 700 }}
          >
            <span style={{ color: "var(--vt-blue)" }}>{data.company}</span>
            <span style={{ color: "var(--vt-ink-mute)" }}>{"//"}</span>
            <span style={{ color: "var(--vt-ink-soft)" }}>{data.location}</span>
          </div>

          {/* Summary */}
          <div
            className="pb-6 mb-6"
            style={{ borderBottom: "1px solid var(--vt-edge-lo-2)" }}
          >
            <div className="vt-eyebrow" style={{ marginBottom: 10 }}>
              {t.experienceModal.summary}
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "var(--vt-ink-soft)",
              }}
            >
              {data.description}
            </p>
          </div>

          {/* Achievements */}
          <div
            className="pb-6 mb-6"
            style={{ borderBottom: "1px solid var(--vt-edge-lo-2)" }}
          >
            <div className="vt-eyebrow" style={{ marginBottom: 12 }}>
              {t.experienceModal.achievements}
            </div>
            <div className="flex flex-col gap-2.5">
              {data.details.map((item: string, i: number) => (
                <div
                  key={i}
                  className="vt-card-inset flex items-start gap-3 p-3.5 text-[13.5px]"
                  style={{ color: "var(--vt-ink)", lineHeight: 1.6 }}
                >
                  <span style={{ color: "var(--vt-blue)", fontWeight: 700 }}>
                    ▸
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="vt-eyebrow" style={{ marginBottom: 12 }}>
              {t.experienceModal.skills}
            </div>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="vt-card-inset vt-mono px-3 py-1.5 text-xs font-bold"
                  style={{ color: "var(--vt-ink)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </VintecWindow>
    </main>
  );
}
