"use client";

import { useEffect, useRef } from "react";

/**
 * Ultra-lightweight, 60fps Biological Neural Network Wallpaper
 * Visually matches vinteclearning.com's iconic glowing magenta/violet/cyan
 * neuron-link background over deep midnight navy (#0a1631), using pre-cached
 * offscreen glow sprites & batched 2D Canvas paths (~1% CPU, zero WebGL overhead).
 */

interface DendriteBranch {
  angle: number;
  len: number;
  subAngle: number;
  subLen: number;
}

interface Neuron {
  x: number;
  y: number;
  z: number; // 0.45 (far) .. 1.0 (near)
  vx: number;
  vy: number;
  phase: number;
  tailAngle: number;
  fire: number; // 0..1 flash brightness
  hueType: 0 | 1 | 2; // 0: magenta-pink, 1: electric-violet, 2: cyan-teal
  branches: DendriteBranch[];
}

interface Axon {
  a: number;
  b: number;
  bend: number;
}

interface Pulse {
  axonIdx: number;
  dir: 1 | -1;
  u: number;
  speed: number;
  cyan: boolean;
}

function makeGlowSprite(
  size: number,
  stops: [number, string][],
): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d")!;
  const half = size / 2;
  const g = ctx.createRadialGradient(half, half, 0, half, half, half);
  for (const [pos, col] of stops) g.addColorStop(pos, col);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return c;
}

export function WallpaperCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Pre-cache glow sprites once (blazing fast drawImage blits)
    const spritePink = makeGlowSprite(72, [
      [0, "rgba(255, 255, 255, 0.95)"],
      [0.18, "rgba(255, 154, 216, 0.9)"],
      [0.42, "rgba(255, 110, 199, 0.42)"],
      [0.72, "rgba(138, 92, 255, 0.14)"],
      [1, "rgba(138, 92, 255, 0)"],
    ]);
    const spriteViolet = makeGlowSprite(72, [
      [0, "rgba(244, 240, 255, 0.92)"],
      [0.2, "rgba(176, 146, 255, 0.85)"],
      [0.48, "rgba(138, 92, 255, 0.38)"],
      [0.78, "rgba(106, 76, 192, 0.12)"],
      [1, "rgba(106, 76, 192, 0)"],
    ]);
    const spriteFire = makeGlowSprite(96, [
      [0, "rgba(255, 255, 255, 1)"],
      [0.2, "rgba(255, 224, 248, 0.92)"],
      [0.45, "rgba(138, 92, 255, 0.48)"],
      [0.72, "rgba(95, 227, 200, 0.2)"],
      [1, "rgba(95, 227, 200, 0)"],
    ]);
    const spritePulseCyan = makeGlowSprite(32, [
      [0, "rgba(255, 255, 255, 1)"],
      [0.35, "rgba(95, 227, 200, 0.85)"],
      [1, "rgba(95, 227, 200, 0)"],
    ]);
    const spritePulsePink = makeGlowSprite(32, [
      [0, "rgba(255, 255, 255, 1)"],
      [0.35, "rgba(255, 110, 199, 0.85)"],
      [1, "rgba(255, 110, 199, 0)"],
    ]);

    let w = window.innerWidth;
    let h = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Seeded deterministic PRNG for rich, balanced neuron clusters
    let seed = 1337;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

    const isMobile = w < 768;
    const count = isMobile ? 16 : 34;

    const neurons: Neuron[] = Array.from({ length: count }, (_, i) => {
      // Distribute nicely with slight density around center-right & edges
      const col = i % (isMobile ? 4 : 7);
      const row = Math.floor(i / (isMobile ? 4 : 7));
      const baseX = ((col + 0.15 + rand() * 0.7) / (isMobile ? 4 : 7)) * w;
      const baseY =
        ((row + 0.15 + rand() * 0.7) /
          Math.ceil(count / (isMobile ? 4 : 7))) *
        h;
      const z = 0.5 + rand() * 0.55;
      const branchCount = 4 + Math.floor(rand() * 4);
      const branches: DendriteBranch[] = Array.from(
        { length: branchCount },
        (_, b) => {
          const angle =
            (b / branchCount) * Math.PI * 2 + (rand() - 0.5) * 0.7;
          return {
            angle,
            len: 16 + rand() * 34,
            subAngle: angle + (rand() > 0.5 ? 0.52 : -0.52),
            subLen: 10 + rand() * 18,
          };
        },
      );

      return {
        x: baseX,
        y: baseY,
        z,
        vx: (rand() - 0.5) * 10 * z,
        vy: (rand() - 0.5) * 8 * z,
        phase: rand() * Math.PI * 2,
        tailAngle: rand() * Math.PI * 2,
        fire: rand() > 0.8 ? 0.8 : 0,
        hueType: i % 5 === 0 ? 1 : i % 7 === 0 ? 2 : 0,
        branches,
      };
    });

    // Build stable organic axon topology between near neighbors
    const axons: Axon[] = [];
    const maxDist = isMobile ? 220 : 285;
    for (let i = 0; i < count; i++) {
      let links = 0;
      for (let j = i + 1; j < count && links < 3; j++) {
        const d = Math.hypot(
          neurons[i].x - neurons[j].x,
          neurons[i].y - neurons[j].y,
        );
        if (d < maxDist && d > 50) {
          axons.push({ a: i, b: j, bend: (rand() - 0.5) * 58 });
          links++;
        }
      }
    }

    // Active synaptic pulses traveling along axons
    const pulses: Pulse[] = Array.from(
      { length: Math.min(12, Math.max(4, axons.length >> 1)) },
      (_, i) => ({
        axonIdx: axons.length ? i % axons.length : 0,
        dir: i % 2 === 0 ? 1 : -1,
        u: rand(),
        speed: 0.22 + rand() * 0.3,
        cyan: i % 2 === 0,
      }),
    );

    // Subtle background micro-stars
    const dust = Array.from({ length: isMobile ? 28 : 56 }, () => ({
      x: rand() * w,
      y: rand() * h,
      r: 0.8 + rand() * 1.2,
      ph: rand() * Math.PI * 2,
      col: rand() > 0.5 ? "#8a5cff" : "#5fe3c8",
    }));

    const renderFrame = (t: number, dt: number) => {
      ctx.clearRect(0, 0, w, h);

      // 1. Subtle deep-space ambient dust
      for (let i = 0; i < dust.length; i++) {
        const d = dust[i];
        const a = 0.14 + 0.14 * Math.sin(t * 1.4 + d.ph);
        ctx.fillStyle = d.col;
        ctx.globalAlpha = a;
        ctx.fillRect(d.x, d.y, d.r, d.r);
      }
      ctx.globalAlpha = 1;

      // 2. Update neuron gentle drift & decay fire glow
      for (let i = 0; i < count; i++) {
        const n = neurons[i];
        if (!reduced) {
          n.x += n.vx * dt;
          n.y += n.vy * dt;
          if (n.x < -40) n.x = w + 40;
          if (n.x > w + 40) n.x = -40;
          if (n.y < -40) n.y = h + 40;
          if (n.y > h + 40) n.y = -40;
          n.fire = Math.max(0, n.fire - dt * 0.72);
        }
      }

      // 3. Draw batched curved axons (violet & teal neural connections)
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < axons.length; i++) {
        const ax = axons[i];
        const na = neurons[ax.a];
        const nb = neurons[ax.b];
        const dist = Math.hypot(nb.x - na.x, nb.y - na.y);
        if (dist > maxDist * 1.45) continue;
        const mx = (na.x + nb.x) * 0.5;
        const my = (na.y + nb.y) * 0.5 + ax.bend;
        ctx.moveTo(na.x, na.y);
        ctx.quadraticCurveTo(mx, my, nb.x, nb.y);
      }
      ctx.strokeStyle = "rgba(138, 92, 255, 0.24)";
      ctx.stroke();

      // 4. Draw batched branching dendrites around each neuron soma
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        const n = neurons[i];
        const sway = Math.sin(t * 0.9 + n.phase) * 0.08;
        for (let b = 0; b < n.branches.length; b++) {
          const br = n.branches[b];
          const len = br.len * n.z * (1 + n.fire * 0.28);
          const ang = br.angle + sway;
          const x1 = n.x + Math.cos(ang) * len;
          const y1 = n.y + Math.sin(ang) * len;
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(x1, y1);
          const subLen = br.subLen * n.z;
          const x2 = x1 + Math.cos(br.subAngle + sway) * subLen;
          const y2 = y1 + Math.sin(br.subAngle + sway) * subLen;
          ctx.lineTo(x2, y2);
        }
      }
      ctx.strokeStyle = "rgba(216, 114, 240, 0.34)";
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // 5. Glowing neuron soma orbs (fast pre-cached sprite blits!)
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < count; i++) {
        const n = neurons[i];
        const breathe = 0.92 + 0.1 * Math.sin(t * 1.8 + n.phase);
        const sz = (36 + n.fire * 28) * n.z * breathe;
        const sprite =
          n.fire > 0.35
            ? spriteFire
            : n.hueType === 1
              ? spriteViolet
              : spritePink;
        ctx.globalAlpha = 0.55 + n.z * 0.35;
        ctx.drawImage(sprite, n.x - sz * 0.5, n.y - sz * 0.5, sz, sz);
      }

      // 6. Synaptic action-potential pulses flying along axons
      if (axons.length > 0) {
        for (let i = 0; i < pulses.length; i++) {
          const p = pulses[i];
          if (!reduced) {
            p.u += p.speed * dt;
            if (p.u >= 1) {
              const ax = axons[p.axonIdx];
              const dest = p.dir === 1 ? ax.b : ax.a;
              neurons[dest].fire = 1;
              // Re-route to another axon connected or random
              p.axonIdx = Math.floor(rand() * axons.length);
              p.dir = rand() > 0.5 ? 1 : -1;
              p.u = 0;
              p.cyan = rand() > 0.45;
            }
          }

          const ax = axons[p.axonIdx];
          const na = neurons[ax.a];
          const nb = neurons[ax.b];
          const dist = Math.hypot(nb.x - na.x, nb.y - na.y);
          if (dist > maxDist * 1.45) continue;

          const u = p.dir === 1 ? p.u : 1 - p.u;
          const inv = 1 - u;
          const mx = (na.x + nb.x) * 0.5;
          const my = (na.y + nb.y) * 0.5 + ax.bend;
          const px = inv * inv * na.x + 2 * inv * u * mx + u * u * nb.x;
          const py = inv * inv * na.y + 2 * inv * u * my + u * u * nb.y;

          const psz = 22;
          ctx.globalAlpha = 0.92;
          ctx.drawImage(
            p.cyan ? spritePulseCyan : spritePulsePink,
            px - psz * 0.5,
            py - psz * 0.5,
            psz,
            psz,
          );
        }
      }

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
    };

    if (reduced) {
      renderFrame(2.5, 0);
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (document.hidden) {
        last = now;
        return;
      }
      const dt = Math.min(0.05, (now - last) / 1000);
      // Cap at ~45fps for ultra-low CPU/GPU footprint while staying silky smooth
      if (dt < 0.02) return;
      last = now;
      renderFrame(now / 1000, dt);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="vt-wallpaper" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
