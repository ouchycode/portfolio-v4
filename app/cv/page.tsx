"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";

const CV_URL = "/CV_KEVIN_ARDIANSYAH_2026.pdf";

export default function CVPage() {
  const { t, language } = useLanguage();
  const { startLoading } = useLoading();

  return (
    <main className="vt-main" style={{ maxWidth: 1160 }}>
      <VintecWindow
        title="CV_KEVIN_ARDIANSYAH_2026.pdf — Document Viewer"
        className="vt-reveal"
        draggable={false}
        statusLeft="C:\Kevin\Documents\CV_KEVIN_ARDIANSYAH_2026.pdf"
        statusRight={["PDF 1.7", "Ready"]}
      >
        {/* Address / toolbar strip */}
        <div className="vt-address">
          <Link
            href="/"
            onClick={() => startLoading(600)}
            className="vt-btn vt-btn-flat"
            style={{ padding: "4px 12px", fontSize: 12 }}
          >
            ← {language === "id" ? "Kembali" : "Back"}
          </Link>
          <div className="vt-address-field">
            C:\Kevin\Documents\CV_KEVIN_ARDIANSYAH_2026.pdf
          </div>
          <a
            href={CV_URL}
            download
            className="vt-btn vt-btn-pink"
            style={{ padding: "4px 14px", fontSize: 12 }}
          >
            {t.cvModal.download} ▾
          </a>
        </div>

        <div
          style={{
            background: "var(--vt-paper)",
            padding: "28px clamp(18px, 3vw, 36px) 32px",
          }}
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <div className="vt-eyebrow" style={{ marginBottom: 8 }}>
                {t.cvModal.badge}
              </div>
              <h1
                className="vt-big"
                style={{
                  margin: 0,
                  fontSize: "clamp(26px, 3.2vw, 46px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "var(--vt-ink)",
                }}
              >
                {t.cvModal.title}
              </h1>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: 14,
                  color: "var(--vt-ink-soft)",
                }}
              >
                {t.cvModal.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="vt-btn vt-btn-chrome"
                style={{ padding: "10px 18px", fontSize: 13 }}
              >
                {t.cvModal.openFull} ↗
              </a>
              <a
                href={CV_URL}
                download
                className="vt-btn vt-btn-pink vt-btn-sweep"
                style={{ padding: "10px 20px", fontSize: 13 }}
              >
                {t.cvModal.download}{" "}
                <span className="vt-arrow" aria-hidden="true">
                  ▸
                </span>
              </a>
            </div>
          </div>

          <div
            className="vt-card-inset w-full overflow-hidden"
            style={{ height: "72vh", background: "#ffffff" }}
          >
            <iframe
              src={`${CV_URL}#toolbar=0&navpanes=0&scrollbar=0`}
              title="CV Document"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      </VintecWindow>
    </main>
  );
}
