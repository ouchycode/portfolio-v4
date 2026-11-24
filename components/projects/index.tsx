"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { VintecTitlebar, useDraggable } from "@/components/vintec/VintecWindow";

export default function Projects() {
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();
  const drag = useDraggable();

  const projects = t.projects.list;

  // 3D tilt + radial purple cursor glow on hover (exact match to vinteclearning.com)
  const onCardMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(8px)`;
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };

  const onCardLeave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section id="projects" className="vt-gallery">
      <div className="vt-gallery-sticky">
        <div
          className="vt-window vt-reveal vt-reveal-2 vt-explorer"
          style={
            {
              "--float-delay": "2.8s",
              ...drag.style,
            } as React.CSSProperties
          }
        >
          <VintecTitlebar
            text="C:\Kevin\Projects_Explorer"
            onPointerDown={drag.onPointerDown}
            sheenDelay="4s"
          />

          {/* Classic Windows Explorer Address Bar */}
          <div className="vt-address" aria-hidden="true">
            <span>Address</span>
            <div className="vt-address-field">
              C:\Kevin\Karya\
              <span className="vt-cursor">▌</span>
            </div>
            <span className="vt-address-go">Go</span>
          </div>

          {/* Explorer Scroll Track Body (horizontal glide driven by StageController D.p[3]) */}
          <div className="vt-explorer-body">
            <div data-vt-track className="vt-track">
              <div className="vt-track-intro">
                <div className="vt-eyebrow">
                  03 &mdash; {t.projects.badge} · {projects.length}{" "}
                  {language === "id" ? "Karya Pilihan" : "Selected Works"}
                </div>
                <h2 className="vt-big vt-big-h2">
                  {language === "id" ? (
                    <>
                      Karya
                      <br />
                      untuk dampak
                      <br />
                      nyata.
                    </>
                  ) : (
                    <>
                      Works
                      <br />
                      built for real
                      <br />
                      impact.
                    </>
                  )}
                </h2>
                <p>
                  {t.projects.subtitle}{" "}
                  {language === "id"
                    ? "Geser dengan scroll."
                    : "Scroll down to glide."}
                </p>
              </div>

              {projects.map((project, idx) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  onClick={() => startLoading(800)}
                  onPointerMove={onCardMove}
                  onPointerLeave={onCardLeave}
                  className="vt-card-inset vt-course-card vt-track-card"
                >
                  <div className="vt-track-card-top">
                    <span aria-hidden="true" className="vt-folder" />
                    <span className="vt-track-n">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div
                    className="relative w-full aspect-16/10 overflow-hidden mb-3.5"
                    style={{ border: "1px solid var(--vt-edge-lo-2)" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 380px"
                      className="object-cover"
                    />
                  </div>

                  <div
                    className="vt-mono uppercase mb-1"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      color: "var(--vt-ink-mute)",
                    }}
                  >
                    {project.category}
                  </div>

                  <h3 className="vt-big vt-track-title">{project.title}</h3>

                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: 12.5,
                      lineHeight: 1.55,
                      color: "var(--vt-ink-soft)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="vt-mono px-2 py-0.5 text-[10px]"
                        style={{
                          border: "1px solid var(--vt-edge-lo-2)",
                          color: "var(--vt-ink-soft)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="vt-track-foot">
                    <span>
                      {language === "id" ? "BUKA DETAIL PROYEK" : "OPEN PROJECT"}
                    </span>
                    <span className="vt-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>

                  <div className="vt-course-bar" aria-hidden="true">
                    <div />
                  </div>
                </Link>
              ))}

              <div className="vt-track-end">
                <a
                  href="https://github.com/ouchycode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vt-btn vt-btn-pink vt-btn-sweep"
                  style={{ padding: "15px 26px", fontSize: "0.9375rem" }}
                >
                  {language === "id"
                    ? "Lihat semua di GitHub"
                    : "Explore all on GitHub"}{" "}
                  <span className="vt-arrow" aria-hidden="true">
                    ▸
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="vt-statusline" aria-hidden="true">
            <span>{projects.length} object(s)</span>
            <span>AkadMeet · SIAKAD · Fair Price Finder</span>
            <span>My Computer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
