"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useVintecOS } from "@/context/VintecOSContext";
import { VintecWindow } from "@/components/vintec/VintecWindow";

const MARQUEE_ROW_1 =
  "★ REACT ★ NEXT.JS ★ TYPESCRIPT ★ TAILWIND CSS ★ LARAVEL ★ NODE.JS ★ MYSQL ★ DOCKER ★ LINUX ★ NGINX ★ AWS ★ FIGMA ";

const MARQUEE_ROW_2 =
  "★ SOFTWARE ENGINEERING ★ FULL-STACK WEB ★ DEVOPS AUTOMATION ★ IT INFRASTRUCTURE ★ UI/UX DESIGN ★ TANGERANG ID ";

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/ouchycode" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kevin-ardiansyah-529b96386/",
  },
  { name: "Instagram", url: "https://www.instagram.com/kevinnardd_/" },
  { name: "TikTok", url: "https://www.tiktok.com/@ouchycode" },
];

export default function Contact() {
  const { t, language } = useLanguage();
  const { setTerminalOpen } = useVintecOS();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`[Portfolio] Message from ${name}`);
    const body = encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`,
    );
    window.location.href = `mailto:kevinnardiansyahh19@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const headline =
    language === "id" ? "Siap bangun sesuatu?" : "Ready to build together?";

  return (
    <div id="contact" className="vt-room-stack">
      {/* ── Double-Row CRT Marquee (exact mirror of vinteclearning.com!) ── */}
      <div className="vt-marquee vt-reveal vt-reveal-3" aria-hidden="true">
        <div className="vt-marquee-track">
          <span>
            {MARQUEE_ROW_1}
            {MARQUEE_ROW_1}
          </span>
        </div>
        <div className="vt-marquee-track vt-marquee-rev">
          <span>
            {MARQUEE_ROW_2}
            {MARQUEE_ROW_2}
          </span>
        </div>
      </div>

      {/* ── Final CTA & Contact Window (mirrors run.exe — Jalankan!) ── */}
      <VintecWindow
        title={
          language === "id"
            ? "run.exe — Jalankan Kolaborasi"
            : "run.exe — Start Collaboration"
        }
        className="vt-reveal vt-reveal-3 vt-run"
        floatDelay="2.6s"
        sheenDelay="6s"
        statusLeft={t.contact.fastResponse}
        statusRight={["kevinnardiansyahh19@gmail.com", "ONLINE"]}
      >
        <div
          style={{
            background: "var(--vt-paper)",
            padding: "36px clamp(20px, 4vw, 48px) 38px",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div>
                <div className="vt-eyebrow" style={{ marginBottom: 14 }}>
                  06 &mdash; {language === "id" ? "Mulai" : "Contact"}
                </div>
                <h2 className="vt-big vt-run-title" data-text={headline}>
                  {headline}
                </h2>
              </div>

              <p
                style={{
                  margin: 0,
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  color: "var(--vt-ink-soft)",
                  maxWidth: "48ch",
                }}
              >
                {t.contact.subtitle}
              </p>

              <div className="flex flex-wrap gap-3 items-center">
                <a
                  href="mailto:kevinnardiansyahh19@gmail.com"
                  className="vt-btn vt-btn-pink vt-btn-sweep"
                  style={{ padding: "14px 28px", fontSize: "0.9375rem" }}
                >
                  {t.footer.btn}{" "}
                  <span className="vt-arrow" aria-hidden="true">
                    ▸
                  </span>
                </a>

                <Link
                  href="/cv"
                  className="vt-btn vt-btn-chrome"
                  style={{ padding: "14px 24px", fontSize: "0.9375rem" }}
                >
                  {t.hero.btnResume}
                </Link>
              </div>

              <div
                className="flex flex-wrap items-center gap-2 pt-4"
                style={{ borderTop: "1px solid var(--vt-edge-lo-2)" }}
              >
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vt-btn vt-btn-flat"
                    style={{ padding: "6px 13px", fontSize: "0.78rem" }}
                  >
                    {s.name} ↗
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => setTerminalOpen(true)}
                  className="vt-btn vt-btn-flat vt-mono"
                  style={{ padding: "6px 13px", fontSize: "0.76rem" }}
                  title="Open KevinOS Terminal"
                >
                  &gt;_ Terminal
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <form
                onSubmit={handleSubmit}
                className="vt-card-inset p-4 flex flex-col gap-3"
              >
                <div
                  className="vt-pixel-strict uppercase"
                  style={{
                    fontSize: 10.5,
                    letterSpacing: "0.14em",
                    color: "var(--vt-blue)",
                  }}
                >
                  ✉ {language === "id" ? "Kirim Pesan Cepat" : "Quick Message"}
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="vt-name"
                    style={{ fontSize: 12, fontWeight: 700, color: "var(--vt-ink)" }}
                  >
                    {t.contact.formName} *
                  </label>
                  <input
                    id="vt-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.formNamePlaceholder}
                    className="vt-input"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="vt-email"
                    style={{ fontSize: 12, fontWeight: 700, color: "var(--vt-ink)" }}
                  >
                    {t.contact.formEmail} *
                  </label>
                  <input
                    id="vt-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="vt-input"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="vt-msg"
                    style={{ fontSize: 12, fontWeight: 700, color: "var(--vt-ink)" }}
                  >
                    {t.contact.formMessage} *
                  </label>
                  <textarea
                    id="vt-msg"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.formMessagePlaceholder}
                    className="vt-input resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <span
                    className="vt-mono"
                    style={{ fontSize: 11, color: "var(--vt-ink-mute)" }}
                  >
                    {sent
                      ? language === "id"
                        ? "✓ Membuka aplikasi email..."
                        : "✓ Opening mail client..."
                      : "* required"}
                  </span>
                  <button
                    type="submit"
                    className="vt-btn vt-btn-pink"
                    style={{ padding: "9px 18px", fontSize: "0.84rem" }}
                  >
                    {t.contact.btnSubmit}{" "}
                    <span className="vt-arrow" aria-hidden="true">
                      ▸
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </VintecWindow>
    </div>
  );
}
