"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function useDraggable() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ sx: number; sy: number; ox: number; oy: number } | null>(
    null,
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      setPos({
        x: d.ox + e.clientX - d.sx,
        y: d.oy + e.clientY - d.sy,
      });
    };
    const onUp = () => {
      dragRef.current = null;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button, a, input")) return;
    dragRef.current = {
      sx: e.clientX,
      sy: e.clientY,
      ox: pos.x,
      oy: pos.y,
    };
    e.preventDefault();
  };

  return {
    style: { "--dx": `${pos.x}px`, "--dy": `${pos.y}px` } as CSSProperties,
    onPointerDown,
  };
}

interface VintecTitlebarProps {
  text: string;
  onPointerDown?: (e: React.PointerEvent) => void;
  sheenDelay?: string;
  plain?: boolean;
  onClose?: () => void;
}

export function VintecTitlebar({
  text,
  onPointerDown,
  sheenDelay = "1s",
  plain = false,
  onClose,
}: VintecTitlebarProps) {
  return (
    <div
      className={`vt-titlebar ${onPointerDown ? "vt-grab" : ""}`}
      onPointerDown={onPointerDown}
      style={{ "--sheen-delay": sheenDelay } as CSSProperties}
    >
      <span className="vt-titlebar-text">{text}</span>
      <div className="vt-titlebar-spacer" />
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="vt-titlebar-btn"
          aria-label="Close"
        >
          ×
        </button>
      ) : (
        !plain && (
          <>
            <div
              className="vt-titlebar-btn"
              data-btn="min"
              style={{ alignItems: "flex-end", paddingBottom: 3 }}
            >
              _
            </div>
            <div
              className="vt-titlebar-btn"
              data-btn="max"
              style={{ fontSize: "0.5625rem" }}
            >
              □
            </div>
            <div
              className="vt-titlebar-btn"
              data-btn="close"
              style={{ fontSize: "0.6875rem" }}
            >
              ×
            </div>
          </>
        )
      )}
    </div>
  );
}

interface VintecWindowProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
  floatDelay?: string;
  sheenDelay?: string;
  plain?: boolean;
  draggable?: boolean;
  onClose?: () => void;
  statusLeft?: string;
  statusRight?: string[];
  style?: CSSProperties;
}

export function VintecWindow({
  id,
  title,
  children,
  className = "",
  floatDelay = "1.6s",
  sheenDelay = "2s",
  plain = false,
  draggable = true,
  onClose,
  statusLeft,
  statusRight,
  style,
}: VintecWindowProps) {
  const drag = useDraggable();

  return (
    <section
      id={id}
      className={`vt-window ${className}`}
      style={
        {
          "--float-delay": floatDelay,
          ...(draggable ? drag.style : {}),
          ...style,
        } as CSSProperties
      }
    >
      <VintecTitlebar
        text={title}
        onPointerDown={draggable ? drag.onPointerDown : undefined}
        sheenDelay={sheenDelay}
        plain={plain}
        onClose={onClose}
      />
      {children}
      {(statusLeft || statusRight) && (
        <div className="vt-statusline" aria-hidden="true">
          <span>{statusLeft ?? ""}</span>
          {statusRight?.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      )}
    </section>
  );
}
