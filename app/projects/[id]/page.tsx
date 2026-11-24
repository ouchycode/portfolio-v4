"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";
import type { ProjectData } from "@/types";

export default function ProjectDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const id = params.id as string;

  const project = t.projects.list.find((item: ProjectData) => item.id === id);

  if (!project) {
    return (
      <main className="vt-main" style={{ maxWidth: 920 }}>
        <VintecWindow title="Projects_Explorer — Not Found" draggable={false}>
          <div style={{ background: "var(--vt-paper)", padding: 40, textAlign: "center" }}>
            <p className="vt-mono text-sm" style={{ color: "var(--vt-ink-mute)" }}>
              {language === "id" ? "Proyek tidak ditemukan." : "Project not found."}
            </p>
            <Link
              href="/#projects"
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
    <main className="vt-main" style={{ maxWidth: 1120 }}>
      <VintecWindow
        title={`C:\\Kevin\\Karya\\${project.title}.exe`}
        className="vt-reveal"
        draggable={false}
        statusLeft={`FIG. ${project.id} · ${project.category}`}
        statusRight={[`${project.tech.length} tech`, "My Computer"]}
      >
        {/* Explorer Address Bar */}
        <div className="vt-address">
          <Link
            href="/#projects"
            onClick={() => startLoading(600)}
            className="vt-btn vt-btn-flat"
            style={{ padding: "4px 12px", fontSize: 12 }}
          >
            ← {language === "id" ? "Kembali" : "Back"}
          </Link>
          <div className="vt-address-field">
            C:\Kevin\Karya\{project.id}_{project.title.replace(/\s+/g, "_")}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="vt-btn vt-btn-pink"
              style={{ padding: "4px 14px", fontSize: 12 }}
            >
              {t.projectModal.btn} ↗
            </a>
          )}
        </div>

        <div
          style={{
            background: "var(--vt-paper)",
            padding: "32px clamp(20px, 4vw, 44px) 38px",
          }}
        >
          {/* Badges & Title */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span
              className="vt-pixel-strict px-2.5 py-1 text-[10px] uppercase"
              style={{
                background: "var(--vt-teal)",
                color: "#04241f",
                fontWeight: 700,
              }}
            >
              {project.category}
            </span>
            <span
              className="vt-mono text-xs"
              style={{ color: "var(--vt-ink-mute)" }}
            >
              FIG. {project.id}
            </span>
          </div>

          <h1
            className="vt-big"
            style={{
              margin: "0 0 24px",
              fontSize: "clamp(28px, 4vw, 56px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--vt-ink)",
            }}
          >
            {project.title}
          </h1>

          {/* Preview Image */}
          <div
            className="vt-card-inset relative w-full aspect-video overflow-hidden mb-8"
          >
            <Image
              src={project.image}
              alt={`Preview of ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 flex flex-col gap-6">
              <div>
                <div className="vt-eyebrow" style={{ marginBottom: 10 }}>
                  {t.projectModal.descTitle}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: "var(--vt-ink-soft)",
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div
                className="pt-5"
                style={{ borderTop: "1px solid var(--vt-edge-lo-2)" }}
              >
                <div className="vt-eyebrow" style={{ marginBottom: 12 }}>
                  {t.projectModal.techTitle}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="vt-card-inset vt-mono px-3 py-1.5 text-xs font-bold"
                      style={{ color: "var(--vt-ink)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3">
              <div className="vt-eyebrow" style={{ marginBottom: 4 }}>
                {t.projectModal.featuresTitle}
              </div>
              {project.features.map((feature: string, i: number) => (
                <div
                  key={i}
                  className="vt-card-inset flex items-start gap-2.5 p-3 text-[13px]"
                  style={{ color: "var(--vt-ink)" }}
                >
                  <span style={{ color: "var(--vt-blue)", fontWeight: 700 }}>
                    ▸
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div
            className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4"
            style={{ borderTop: "1px solid var(--vt-edge-lo-2)" }}
          >
            <Link
              href="/#projects"
              onClick={() => startLoading(600)}
              className="vt-btn vt-btn-chrome"
              style={{ padding: "11px 20px", fontSize: 13 }}
            >
              ← {language === "id" ? "Semua Karya" : "All Projects"}
            </Link>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="vt-btn vt-btn-pink vt-btn-sweep"
                style={{ padding: "11px 24px", fontSize: 13 }}
              >
                {t.projectModal.btn}{" "}
                <span className="vt-arrow" aria-hidden="true">
                  ▸
                </span>
              </a>
            )}
          </div>
        </div>
      </VintecWindow>
    </main>
  );
}
