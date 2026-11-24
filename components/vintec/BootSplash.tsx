"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const BOOT_LINES = [
  "MEM CHECK .......... 65536K OK",
  "LOAD KEVINOS KERNEL ....... OK",
  "INDEX PORTFOLIO .... 3 PROJECTS",
  "MOUNT CERTS & STACK .... READY",
];

const BOOT_CUBES = [
  { l: "TS", c: "#11339e", x: 7, y: 15, d: 9, delay: -1 },
  { l: "NEXT", c: "#06105f", x: 29, y: 8, d: 10, delay: -5 },
  { l: "REACT", c: "#512f91", x: 59, y: 7, d: 8, delay: -3 },
  { l: "NODE", c: "#11339e", x: 82, y: 14, d: 9.5, delay: -6 },
  { l: "DEV", c: "#0f5a5a", x: 88, y: 47, d: 7, delay: -2 },
  { l: "AWS", c: "#06105f", x: 83, y: 79, d: 10.5, delay: -4 },
  { l: "SQL", c: "#512f91", x: 63, y: 86, d: 8, delay: -1 },
  { l: "OPS", c: "#0f5a5a", x: 13, y: 83, d: 8.5, delay: -2 },
  { l: "UI", c: "#512f91", x: 20, y: 58, d: 7.5, delay: -4 },
  { l: "GIT", c: "#11339e", x: 3, y: 46, d: 11, delay: -5 },
];

export function BootSplash({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [linesShown, setLinesShown] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      onDone();
    };

    const start = performance.now();
    const duration = 1550;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setPct(Math.round(t * 100));
      setLinesShown(Math.min(BOOT_LINES.length, Math.floor(t * (BOOT_LINES.length + 1))));
      if (t >= 1) {
        finish();
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    const onSkip = () => finish();
    window.addEventListener("keydown", onSkip);
    window.addEventListener("pointerdown", onSkip);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onSkip);
      window.removeEventListener("pointerdown", onSkip);
    };
  }, [onDone]);

  return (
    <div className="vb" role="status" aria-label="KevinOS is starting">
      <div className="vb-cubes" aria-hidden="true">
        {BOOT_CUBES.map((cube) => (
          <i
            key={cube.l}
            className="vb-cube"
            style={
              {
                "--vb-l": `'${cube.l}'`,
                "--vb-c": cube.c,
                left: `${cube.x}%`,
                top: `${cube.y}%`,
                animationDuration: `${cube.d}s`,
                animationDelay: `${cube.delay}s`,
              } as CSSProperties
            }
          >
            <i className="vb-face vb-f1" />
            <i className="vb-face vb-f2" />
            <i className="vb-face vb-f3" />
            <i className="vb-face vb-f4" />
            <i className="vb-face vb-f5" />
            <i className="vb-face vb-f6" />
          </i>
        ))}
      </div>

      <div className="vb-win">
        <div className="vb-title">KevinOS BIOS v26.08</div>
        <div className="vb-body">
          <div className="vb-os">Kevin Ardiansyah Portfolio OS</div>
          <div className="vb-copy">&copy; 2026 Kevin Systems</div>
          <div className="vb-console">
            {BOOT_LINES.map((line, i) => (
              <div
                key={line}
                style={{ visibility: i < linesShown ? "visible" : "hidden" }}
              >
                {line}
              </div>
            ))}
          </div>
          <div className="vb-prog">
            <span style={{ width: `max(0px, calc(${pct}% - 4px))` }} />
          </div>
          <div className="vb-foot">
            <span>Memuat sistem portfolio&hellip; {pct}%</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDone();
              }}
              className="vb-btn"
            >
              Lewati
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
