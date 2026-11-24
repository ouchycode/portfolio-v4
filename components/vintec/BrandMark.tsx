"use client";

import { useId } from "react";

/**
 * Companion-style gradient squircle icon for KevinOS (matches Vintec_Companion.exe mark)
 */
export function KevinAppIcon({ size = 56 }: { size?: number }) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const gradId = `kcg${rawId}`;
  const maskId = `kcm${rawId}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4C7DFF" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <mask id={maskId}>
          <rect x="4" y="4" width="56" height="56" rx="16" fill="#fff" />
          <path
            d="M21 17 V47 M44 17 L24 32 L45 47"
            fill="none"
            stroke="#000"
            strokeWidth="8"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
        </mask>
      </defs>
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="16"
        fill={`url(#${gradId})`}
        mask={`url(#${maskId})`}
      />
      <circle cx="57" cy="6" r="4" fill="#7DA2FF" />
    </svg>
  );
}

/**
 * Monochrome crisp OS platform icons (verbatim from vinteclearning.com)
 */
export function PlatformGlyph({
  platform,
  size = 14,
}: {
  platform: "windows" | "macos" | "linux";
  size?: number;
}) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    focusable: false as const,
  };

  if (platform === "windows") {
    return (
      <svg {...props} fill="currentColor">
        <path d="M3 5.4 11 4.3v7.2H3zM12.2 4.1 21 3v8.5h-8.8zM3 12.6h8v7.2L3 18.7zM12.2 12.6H21V21l-8.8-1.2z" />
      </svg>
    );
  }

  if (platform === "macos") {
    return (
      <svg {...props} fill="currentColor">
        <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.8 2.3 1.1 0 1.6-.7 2.9-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.2-.9-2.2-3.6zM14.1 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.5 2.8-1.3z" />
      </svg>
    );
  }

  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3.2c-2.3 0-3.6 1.8-3.6 4.1 0 1.2-.3 2.1-1 3.2-1 1.6-1.9 3.1-1.9 5 0 .8.2 1.5.6 2.1" />
      <path d="M12 3.2c2.3 0 3.6 1.8 3.6 4.1 0 1.2.3 2.1 1 3.2 1 1.6 1.9 3.1 1.9 5 0 .8-.2 1.5-.6 2.1" />
      <path d="M8.6 20.6c-1.6.3-3-.2-3.2-1.2.2-1 1.5-1.6 2.9-1.5" />
      <path d="M15.4 20.6c1.6.3 3-.2 3.2-1.2-.2-1-1.5-1.6-2.9-1.5" />
      <path d="M9.2 18.4c.6 1.3 1.6 2 2.8 2s2.2-.7 2.8-2" />
      <path d="M10.4 7.6h.01M13.6 7.6h.01" strokeWidth="2.2" />
      <path d="M10.9 9.4 12 10.1l1.1-.7" fill="currentColor" />
      <path d="M9.6 12.6c.6 1.5 1.4 2.3 2.4 2.3s1.8-.8 2.4-2.3" />
    </svg>
  );
}
