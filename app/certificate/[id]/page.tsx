"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";
import type { CertData } from "@/types";

export default function CertificateDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  const id = params.id as string;
  const [showPreview, setShowPreview] = useState(true);

  const cert = t.tech.certs.find((item: CertData) => item.id === id);

  if (!cert) {
    return (
      <main className="vt-main" style={{ maxWidth: 920 }}>
        <VintecWindow title="Certificates.exe — Not Found" draggable={false}>
          <div style={{ background: "var(--vt-paper)", padding: 40, textAlign: "center" }}>
            <p className="vt-mono text-sm" style={{ color: "var(--vt-ink-mute)" }}>
              {language === "id"
                ? "Sertifikat tidak ditemukan."
                : "Certificate not found."}
            </p>
            <Link
              href="/#tech"
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
    <main className="vt-main" style={{ maxWidth: 1020 }}>
      <VintecWindow
        title={`CERT_${cert.id}.pdf — Document Viewer`}
        className="vt-reveal"
        draggable={false}
        statusLeft={`${cert.issuer} · ${cert.year}`}
        statusRight={[`FIG. ${cert.id}`, "verified"]}
      >
        {/* Address bar */}
        <div className="vt-address">
          <Link
            href="/#tech"
            className="vt-btn vt-btn-flat"
            style={{ padding: "4px 12px", fontSize: 12 }}
          >
            ← {language === "id" ? "Kembali" : "Back"}
          </Link>
          <div className="vt-address-field">
            C:\Kevin\Credentials\CERT_{cert.id}.pdf
          </div>
          <a
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="vt-btn vt-btn-pink"
            style={{ padding: "4px 14px", fontSize: 12 }}
          >
            {t.certModal.btn} ↗
          </a>
        </div>

        <div
          style={{
            background: "var(--vt-paper)",
            padding: "30px clamp(20px, 4vw, 40px) 36px",
          }}
        >
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span
              className="vt-pixel-strict px-2.5 py-1 text-[10px] uppercase"
              style={{
                background: "var(--vt-teal)",
                color: "#04241f",
                fontWeight: 700,
              }}
            >
              ✓ {t.certModal.verified}
            </span>
            <span
              className="vt-mono text-xs"
              style={{ color: "var(--vt-ink-mute)" }}
            >
              {cert.year} · FIG. {cert.id}
            </span>
          </div>

          <h1
            className="vt-big"
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(24px, 3.2vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "var(--vt-ink)",
            }}
          >
            {cert.title}
          </h1>

          {cert.desc && (
            <p
              style={{
                margin: "0 0 18px",
                fontSize: 14.5,
                lineHeight: 1.7,
                color: "var(--vt-ink-soft)",
                maxWidth: "62ch",
              }}
            >
              {cert.desc}
            </p>
          )}

          <div className="vt-card-inset inline-flex items-center gap-3 px-4 py-2.5 mb-6">
            <span className="vt-folder" aria-hidden="true" />
            <div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--vt-ink-mute)",
                }}
              >
                {t.certModal.issuer}
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: "var(--vt-ink)" }}>
                {cert.issuer}
              </div>
            </div>
          </div>

          {/* PDF Frame */}
          <div
            className="vt-card-inset relative w-full overflow-hidden mb-6"
            style={{ height: "62vh", background: "#ffffff" }}
          >
            {showPreview ? (
              <iframe
                src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title="Certificate Document"
                className="w-full h-full border-none bg-white"
              />
            ) : (
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="w-full h-full flex flex-col items-center justify-center gap-3 cursor-pointer"
              >
                <span className="vt-icon-glyph">▤</span>
                <span className="vt-btn vt-btn-chrome" style={{ padding: "8px 16px", fontSize: 12 }}>
                  {language === "id"
                    ? "Tampilkan Sertifikat"
                    : "Show Certificate"}
                </span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-between gap-3">
            <Link
              href="/#tech"
              className="vt-btn vt-btn-chrome"
              style={{ padding: "11px 20px", fontSize: 13 }}
            >
              ← {language === "id" ? "Semua Sertifikasi" : "All Certifications"}
            </Link>
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="vt-btn vt-btn-pink vt-btn-sweep"
              style={{ padding: "11px 24px", fontSize: 13 }}
            >
              {t.certModal.btn}{" "}
              <span className="vt-arrow" aria-hidden="true">
                ▸
              </span>
            </a>
          </div>
        </div>
      </VintecWindow>
    </main>
  );
}
