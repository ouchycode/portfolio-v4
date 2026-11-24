"use client";

import Link from "next/link";
import { VintecWindow } from "@/components/vintec/VintecWindow";
import { TypedText } from "@/components/vintec/TypedText";

export default function NotFound() {
  return (
    <main
      className="vt-main"
      style={{
        maxWidth: 740,
        minHeight: "calc(100vh - 120px)",
        justifyContent: "center",
      }}
    >
      <VintecWindow
        title="SYSTEM.EXE — Error 404"
        className="vt-reveal"
        draggable={false}
        statusLeft="Fatal Exception 0E at 0028:C001E36"
        statusRight={["404"]}
      >
        <div
          style={{
            background: "var(--vt-paper)",
            padding: "40px 36px 44px",
            textAlign: "center",
          }}
        >
          <div className="vt-eyebrow" style={{ marginBottom: 12 }}>
            ERROR 404 &mdash; FILE NOT FOUND
          </div>

          <div
            className="vt-big vt-hero-title"
            style={{
              fontSize: "clamp(54px, 10vw, 112px)",
              fontWeight: 700,
              color: "var(--vt-ink)",
              marginBottom: 22,
            }}
          >
            404
          </div>

          <div
            className="vt-crt-panel text-left mb-7"
            style={{ fontSize: 13, lineHeight: 1.75 }}
          >
            <TypedText
              text={
                "> ERROR 404: ROUTE_NOT_FOUND\n> SYSTEM_STATUS: STANDBY\n> ACTION: RETURN_TO_DESKTOP"
              }
              speed={32}
              delay={120}
            />
          </div>

          <Link
            href="/"
            className="vt-btn vt-btn-pink vt-btn-sweep"
            style={{ padding: "14px 28px", fontSize: 14 }}
          >
            Return to Desktop{" "}
            <span className="vt-arrow" aria-hidden="true">
              ▸
            </span>
          </Link>
        </div>
      </VintecWindow>
    </main>
  );
}
