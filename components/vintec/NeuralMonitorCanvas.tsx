"use client";

import { useEffect, useRef } from "react";
import { useVintecOS } from "@/context/VintecOSContext";

/**
 * Pixel-art 3D neural/network wireframe visualization for MONITOR.exe
 * Directly mirrors vinteclearning.com's iconic 340x220 pixelated CRT canvas,
 * with starfield particles periodically converging to spell "KEVIN".
 * Automatically pauses when Hero room is offscreen to keep scrolling silky smooth.
 */
export function NeuralMonitorCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { stageActive, activeRoom } = useVintecOS();
  const activeRef = useRef(true);

  useEffect(() => {
    activeRef.current = !stageActive || activeRoom === 0;
  }, [stageActive, activeRoom]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = (canvas.width = 340);
    const H = (canvas.height = 220);

    const getPalette = () => {
      const style = getComputedStyle(canvas);
      const crt = style.getPropertyValue("--vt-crt").trim() || "#00ff00";
      const pink = style.getPropertyValue("--vt-pink").trim() || "#ff00ff";
      const amber = style.getPropertyValue("--vt-amber").trim() || "#ffff00";
      return { crt, pink, amber };
    };

    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

    const stars: [number, number, number][] = Array.from({ length: 110 }, () => [
      (rand() * W) | 0,
      (rand() * H) | 0,
      rand(),
    ]);

    const FONT: Record<string, string[]> = {
      K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
      E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
      V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
      I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
      N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
    };

    const wordPts: [number, number][] = [];
    const scale = 3;
    const ox = 170 - (29 * scale) / 2;
    const oy = 112 - (7 * scale) / 2;
    [..."KEVIN"].forEach((ch, ci) => {
      FONT[ch].forEach((row, ri) => {
        [...row].forEach((bit, bi) => {
          if (bit === "1") {
            wordPts.push([ox + (ci * 6 + bi) * scale, oy + ri * scale]);
          }
        });
      });
    });

    const starMap = stars
      .map((_, i) => i)
      .sort(() => rand() - 0.5)
      .slice(0, wordPts.length)
      .map((starIdx, i) => [starIdx, wordPts[i]] as const);

    const img = ctx.createImageData(W, H);
    const buf = new Uint32Array(img.data.buffer);
    const colorCache: Record<string, number> = {};

    const parseHex = (hex: string): number => {
      let c = colorCache[hex];
      if (c === undefined) {
        let raw = hex.replace("#", "").trim();
        if (raw.length === 3) {
          raw = raw[0] + raw[0] + raw[1] + raw[1] + raw[2] + raw[2];
        }
        if (raw.length !== 6) raw = "00ff00";
        const r = parseInt(raw.slice(0, 2), 16);
        const g = parseInt(raw.slice(2, 4), 16);
        const b = parseInt(raw.slice(4, 6), 16);
        c = ((255 << 24) | (b << 16) | (g << 8) | r) >>> 0;
        colorCache[hex] = c;
      }
      return c;
    };

    const px = (x: number, y: number, col: number) => {
      if (x < 0 || y < 0 || x >= W || y >= H) return;
      buf[y * W + x] = col;
    };

    const rect = (x: number, y: number, w: number, h: number, hex: string) => {
      const col = parseHex(hex);
      x |= 0;
      y |= 0;
      for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
          px(x + i, y + j, col);
        }
      }
    };

    const line = (x0: number, y0: number, x1: number, y1: number, hex: string) => {
      if (!isFinite(x0) || !isFinite(y0) || !isFinite(x1) || !isFinite(y1)) return;
      x0 |= 0;
      y0 |= 0;
      x1 |= 0;
      y1 |= 0;
      const col = parseHex(hex);
      const dx = Math.abs(x1 - x0);
      const dy = -Math.abs(y1 - y0);
      const sx = x0 < x1 ? 1 : -1;
      const sy = y0 < y1 ? 1 : -1;
      let err = dx + dy;
      let guard = 0;
      while (guard++ < 600) {
        px(x0, y0, col);
        if (x0 === x1 && y0 === y1) break;
        const e2 = 2 * err;
        if (e2 >= dy) {
          err += dy;
          x0 += sx;
        }
        if (e2 <= dx) {
          err += dx;
          y0 += sy;
        }
      }
    };

    const dot = (p: [number, number, number] | undefined, hex: string, sz = 3) => {
      if (p) rect(p[0] - (sz >> 1), p[1] - (sz >> 1), sz, sz, hex);
    };

    const polyline = (pts: [number, number, number][], hex: string) => {
      for (let i = 1; i < pts.length; i++) {
        line(pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], hex);
      }
    };

    const project = (
      p: [number, number, number],
      ry: number,
      rx: number,
      zoom: number,
    ): [number, number, number] => {
      let [x, y, z] = p;
      const cy = Math.cos(ry);
      const sy = Math.sin(ry);
      [x, z] = [x * cy + z * sy, -x * sy + z * cy];
      const cx = Math.cos(rx);
      const sx = Math.sin(rx);
      [y, z] = [y * cx - z * sx, y * sx + z * cx];
      const d = 3 / (3 + z);
      return [170 + x * zoom * d, 112 + y * zoom * d, z];
    };

    const hash = (a: number, b: number) => {
      const v = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
      return v - Math.floor(v);
    };

    const period = 34;

    const render = (t: number) => {
      const { crt, pink, amber } = getPalette();
      buf.fill(0);

      const m = t % period;
      const ease = (u: number) => (u < 0.5 ? 2 * u * u : 1 - 2 * (1 - u) * (1 - u));
      const morph =
        m < period - 8
          ? 0
          : m < period - 6
            ? ease((m - (period - 8)) / 2)
            : m < period - 2
              ? 1
              : m < period
                ? ease(1 - (m - (period - 2)) / 2)
                : 0;

      const targetMap = new Map<number, [number, number]>();
      if (morph > 0) {
        starMap.forEach(([idx, pt]) => targetMap.set(idx, pt));
      }

      stars.forEach(([sx, sy, phase], i) => {
        const tw = 0.5 + 0.5 * Math.sin(t * 1.5 + phase * 20);
        const dest = targetMap.get(i);
        if (dest) {
          const x = sx + (dest[0] - sx) * morph;
          const y = sy + (dest[1] - sy) * morph;
          const sz = morph > 0.6 ? 2 : 1;
          rect(
            x,
            y,
            sz,
            sz,
            morph > 0.6
              ? tw > 0.6
                ? "#00ff88"
                : "#1f6a45"
              : tw > 0.7
                ? "#3e8f85"
                : "#1c3a37",
          );
        } else {
          rect(
            sx,
            sy,
            1,
            1,
            i % 3 === 0
              ? tw > 0.7
                ? "#8a3a63"
                : "#3a1c2c"
              : tw > 0.7
                ? "#3e8f85"
                : "#1c3a37",
          );
        }
      });

      const cols = 8;
      const blocks = 3;
      const cycle = 4.5;
      const stepIdx = Math.floor(t / cycle);
      const frac = (t % cycle) / cycle;
      const ry = 0.42 + Math.sin(t * 0.2) * 0.28;
      const rx = 0.45;
      const zoom = 70;
      const proj = (pt: [number, number, number]) => project(pt, ry, rx, zoom);

      const shift = frac > 0.9 ? (frac - 0.9) / 0.1 : 0;
      const colX = (c: number) => (c - 3.5 - shift) * 0.36;
      const layers = 2 * blocks + 1;
      const layerY = (l: number) => 1 - l * 0.3;
      const lanes: [number, string][] = [
        [-0.32, crt],
        [0, pink],
        [0.32, amber],
      ];
      const activeLayer = Math.min(layers, Math.floor((frac / 0.9) * (layers + 1)));

      // Horizontal wireframe planes
      for (let l = 0; l < layers - 1; l += 2) {
        const quad: [number, number, number][] = (
          [
            [-1.6, layerY(l + 0.5), -0.45],
            [1.6, layerY(l + 0.5), -0.45],
            [1.6, layerY(l + 0.5), 0.45],
            [-1.6, layerY(l + 0.5), 0.45],
          ] as [number, number, number][]
        ).map(proj);
        for (let k = 0; k < 4; k++) {
          line(
            quad[k][0],
            quad[k][1],
            quad[(k + 1) % 4][0],
            quad[(k + 1) % 4][1],
            "#3a1c2c",
          );
        }
      }

      // Vertical residual rails
      for (let c = 0; c < cols; c++) {
        if (colX(c) < -1.5) continue;
        const p0 = proj([colX(c), layerY(0), 0]);
        const p1 = proj([colX(c), layerY(layers - 1), 0]);
        line(p0[0], p0[1], p1[0], p1[1], "#5a2a44");
      }

      // Attention / Feed-Forward connections
      for (let l = 1; l < layers; l++) {
        const isAttn = l % 2 === 1;
        const block = (l - 1) >> 1;
        const isCurrent = l === activeLayer;
        const isPast = l < activeLayer;

        if (isAttn) {
          if (!isCurrent && !isPast) continue;
          lanes.forEach(([zOff, colHex], laneIdx) => {
            for (let c = 0; c < cols; c++) {
              const isHead = c === cols - 1;
              if (!isHead && !isCurrent) continue;
              for (let src = 0; src <= c; src++) {
                if (colX(src) < -1.5) continue;
                const w = hash(src + stepIdx + laneIdx * 7, block * 13 + c);
                if (!isHead && w < 0.8) continue;
                const a: [number, number, number] = [colX(src), layerY(l - 1), 0];
                const b: [number, number, number] = [colX(c), layerY(l), 0];
                const arc: [number, number, number][] = [];
                for (let s = 0; s <= 10; s++) {
                  const u = s / 10;
                  const lift = Math.sin(Math.PI * u);
                  arc.push(
                    proj([
                      a[0] + (b[0] - a[0]) * u,
                      a[1] + (b[1] - a[1]) * u,
                      zOff * lift * (0.6 + w * 0.8),
                    ]),
                  );
                }
                polyline(
                  arc,
                  isHead
                    ? w > 0.55
                      ? colHex
                      : isPast
                        ? "#4a2438"
                        : "#5a2a44"
                    : "#3a1c2c",
                );
                if (isHead && isCurrent && w > 0.55) {
                  const pulseIdx = Math.floor(((t * 2 + src * 0.17) % 1) * 10);
                  dot(arc[pulseIdx], amber, 2);
                }
              }
            }
          });
        } else {
          for (let c = 0; c < cols; c++) {
            if (colX(c) < -1.5) continue;
            const isHead = c === cols - 1;
            const p0 = proj([colX(c), layerY(l - 1), 0]);
            const p1 = proj([colX(c), layerY(l), 0]);
            const edgeCol =
              isHead && (isCurrent || isPast)
                ? isCurrent
                  ? amber
                  : "#8a3a63"
                : "#3a1c2c";
            for (let k = 0; k < 4; k++) {
              const mid = proj([
                colX(c) + (k - 1.5) * 0.07,
                layerY(l - 0.5),
                k % 2 ? 0.08 : -0.08,
              ]);
              line(p0[0], p0[1], mid[0], mid[1], edgeCol);
              line(mid[0], mid[1], p1[0], p1[1], edgeCol);
              if (isHead && isCurrent) dot(mid, pink, 2);
            }
          }
        }
      }

      // Layer nodes
      for (let l = 0; l < layers; l++) {
        for (let c = 0; c < cols; c++) {
          if (colX(c) < -1.5) continue;
          const pt = proj([colX(c), layerY(l), 0]);
          const isHead = c === cols - 1;
          const isCur = isHead && l === activeLayer;
          const isDone = isHead && l < activeLayer;
          dot(pt, isCur ? amber : isDone ? crt : l === 0 ? "#3f9f93" : pink, isCur ? 5 : 3);
        }
      }

      // Bottom token mini bars
      for (let c = 0; c < cols + 1; c++) {
        const x = colX(c);
        if (x < -1.5) continue;
        const pt = proj([x, layerY(0) + 0.2, 0]);
        const isNew = c === cols;
        if (isNew && shift === 0) continue;
        for (let k = 0; k < 4; k++) {
          const bh = 1 + Math.floor(hash(c + stepIdx, k + 50) * 6);
          rect(
            pt[0] - 4 + k * 2,
            pt[1] - bh + 8,
            1,
            bh,
            isNew || c === cols - 1 ? amber : "#8a3a63",
          );
        }
      }

      // Output logits burst
      if (activeLayer >= layers) {
        const topPt = proj([colX(cols - 1), layerY(layers - 1), 0]);
        const winIdx = Math.floor(hash(stepIdx, 99) * 6);
        for (let k = 0; k < 6; k++) {
          const bw = k === winIdx ? 22 : 4 + Math.floor(hash(stepIdx, k) * 12);
          rect(topPt[0] + 8, topPt[1] - 14 + k * 5, bw, 3, k === winIdx ? amber : "#5a2a44");
        }
        const nextPt = proj([colX(cols), layerY(0), 0]);
        polyline(
          [
            topPt,
            [topPt[0] + 30, topPt[1] - 20, 0],
            [nextPt[0] + 10, nextPt[1] - 40, 0],
            nextPt,
          ],
          pink,
        );
        dot(nextPt, amber, Math.sin(t * 12) > 0 ? 5 : 4);
      }

      ctx.putImageData(img, 0, 0);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      render(4);
      return;
    }

    let last = 0;
    let raf = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (document.hidden || !activeRef.current) return;
      if (now - last < 40) return;
      last = now;
      render(now / 1000);
    };
    render(0.5);
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        width: "100%",
        height: 245,
        display: "block",
        imageRendering: "pixelated",
      }}
    />
  );
}
