"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useVintecOS, ROOM_HASH_MAP } from "@/context/VintecOSContext";

/**
 * Exact Vintec Learning 3D Single-Viewport Scroll Stage & Shatter/Split Engine.
 * Mirrors vinteclearning.com's .vt-stage:
 *  - Rooms sit stacked in 3D Z-space inside a single fixed viewport (perspective: 1200px).
 *  - Scrolling forward zooms the next room toward the camera while the outgoing room
 *    either SCATTERS (individual windows drop/fling/spin off-screen) or SPLITS IN HALF
 *    (window clones into left & right 50% clip-path shards that tear apart & fly away!).
 *  - On mobile (<= 900px) or prefers-reduced-motion, gracefully degrades to normal scroll.
 */

type MotionFn = (p: number, vw: number, vh: number) => { x: number; y: number; r: number };

type ExitRule =
  | {
      kind: "scatter";
      parts: { selector: string; motion: MotionFn; fade?: boolean }[];
    }
  | {
      kind: "split";
      selector: string;
      left: MotionFn;
      right: MotionFn;
    }
  | null;

const ROOM_CONFIG = [
  { dwell: 0.3, label: "Home" }, // 0: Hero + Icons + MONITOR.exe
  { dwell: 0.6, label: "Career" }, // 1: Career.exe
  { dwell: 0.9, label: "Manifesto" }, // 2: README.txt (word-by-word scroll lighting)
  { dwell: 2.0, label: "Projects" }, // 3: Projects_Explorer (horizontal track glide)
  { dwell: 0.55, label: "Tech & Stats" }, // 4: System_Monitor + Features + Resume
  { dwell: 0.55, label: "Certifications" }, // 5: Certificates.exe
  { dwell: 0.4, label: "Contact" }, // 6: CRT Marquee + run.exe
];

const Z_STEP = 900;
const TRANSITION_SPAN = 1.0;
const TOTAL_SPAN =
  ROOM_CONFIG.reduce((sum, r) => sum + r.dwell, 0) +
  TRANSITION_SPAN * (ROOM_CONFIG.length - 1);

const easeInOutCubic = (u: number) =>
  u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));

const fallMotion =
  (rotDeg: number, driftX = 0): MotionFn =>
  (p, vw, vh) => ({
    x: driftX * vw * p * p,
    y: 1.4 * vh * p * p - 0.02 * vh * Math.sin(Math.PI * p),
    r: rotDeg * p * p,
  });

const flingMotion =
  (dir: number, rotDeg: number, dropY = 0.25): MotionFn =>
  (p, vw, vh) => ({
    x: dir * 0.95 * vw * Math.pow(p, 1.5),
    y: dropY * vh * p * p,
    r: rotDeg * Math.pow(p, 1.3),
  });

// Exact exit choreography per room (mirrors vinteclearning.com's xg[] array!)
const EXIT_RULES: ExitRule[] = [
  // 0: Hero -> hero window drops & tilts, MONITOR flings right & spins, yellow icons float up & fade
  {
    kind: "scatter",
    parts: [
      { selector: ".vt-hero-win", motion: fallMotion(7, -0.06) },
      { selector: ".vt-crt-win", motion: flingMotion(1, -22) },
      {
        selector: ".vt-icons",
        motion: (p, _vw, vh) => ({ x: 0, y: -0.3 * vh * p, r: 0 }),
        fade: true,
      },
    ],
  },
  // 1: Career.exe -> window drops with slight counter-tilt
  {
    kind: "scatter",
    parts: [{ selector: ".vt-testi-win", motion: fallMotion(-5, 0.04) }],
  },
  // 2: README.txt — Notepad -> SPLITS IN HALF vertically & tears apart left/right!
  {
    kind: "split",
    selector: ".vt-window",
    left: flingMotion(-1, -8, 0.12),
    right: flingMotion(1, 9, 0.2),
  },
  // 3: Projects Explorer -> SPLITS IN HALF vertically & flings/drops!
  {
    kind: "split",
    selector: ".vt-explorer",
    left: flingMotion(-1, -6, 0.1),
    right: fallMotion(10, 0.08),
  },
  // 4: System_Monitor + System_Features + Kevin_Resume -> scatters independently!
  {
    kind: "scatter",
    parts: [
      { selector: ".vt-mid-left", motion: fallMotion(-5, 0.03) },
      { selector: ".vt-mid-feat", motion: flingMotion(1, 14) },
      { selector: ".vt-launcher", motion: fallMotion(6, 0.05) },
    ],
  },
  // 5: Certificates.exe -> SPLITS IN HALF vertically!
  {
    kind: "split",
    selector: ".vt-window",
    left: flingMotion(-1, -7, 0.14),
    right: flingMotion(1, 8, 0.18),
  },
  // 6: Final room (Marquee + run.exe) stays intact
  null,
];

function computeStagePosition(scrollScreens: number) {
  const progress = ROOM_CONFIG.map(() => 0);
  let rem = Math.max(0, scrollScreens);

  for (let i = 0; i < ROOM_CONFIG.length; i++) {
    const { dwell } = ROOM_CONFIG[i];
    if (rem <= dwell) {
      progress[i] = dwell > 0 ? rem / dwell : 1;
      return { t: i, p: progress };
    }
    progress[i] = 1;
    rem -= dwell;
    if (i === ROOM_CONFIG.length - 1) {
      return { t: i, p: progress };
    }
    if (rem <= TRANSITION_SPAN) {
      return { t: i + easeInOutCubic(rem / TRANSITION_SPAN), p: progress };
    }
    rem -= TRANSITION_SPAN;
  }
  return { t: ROOM_CONFIG.length - 1, p: progress };
}

function scrollScreensForRoom(roomIdx: number) {
  let acc = 0;
  for (let i = 0; i < roomIdx; i++) {
    acc += ROOM_CONFIG[i].dwell + TRANSITION_SPAN;
  }
  // Land nicely inside the room (for README.txt show some lit words, for others start cleanly)
  if (roomIdx === 2) acc += ROOM_CONFIG[2].dwell * 0.55;
  return acc;
}

export function StageController({ rooms }: { rooms: ReactNode[] }) {
  const {
    booting,
    activeRoom,
    setActiveRoom,
    setStageActive,
    registerRoomScroller,
  } = useVintecOS();

  const [isStage, setIsStage] = useState(false);
  const stageRef = useRef<HTMLElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const roomRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect desktop stage eligibility (exact Vintec media query)
  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 900px) and (min-height: 560px) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => {
      setIsStage(mq.matches);
      setStageActive(mq.matches);
    };
    const raf = requestAnimationFrame(sync);
    mq.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", sync);
      setStageActive(false);
    };
  }, [setStageActive]);

  // Register room scroller for navbar / Start Menu / shortcuts / CommandMenu
  useEffect(() => {
    if (!isStage) {
      registerRoomScroller(null);
      return;
    }

    const scroller = (idx: number) => {
      const clamped = Math.max(0, Math.min(ROOM_CONFIG.length - 1, idx));
      const targetY = scrollScreensForRoom(clamped) * window.innerHeight;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    };

    registerRoomScroller(scroller);

    // Honor initial URL hash (e.g. returning from /projects/01 -> /#projects)
    const hash = window.location.hash;
    if (hash && hash in ROOM_HASH_MAP) {
      const targetIdx = ROOM_HASH_MAP[hash];
      window.setTimeout(() => {
        window.scrollTo({
          top: scrollScreensForRoom(targetIdx) * window.innerHeight,
          behavior: "instant" as ScrollBehavior,
        });
      }, 60);
    }

    return () => registerRoomScroller(null);
  }, [isStage, registerRoomScroller]);

  // Main 3D Stage & Shatter/Split Animation Loop (mirrors vinteclearning.com verbatim)
  useEffect(() => {
    const mainEl = stageRef.current;
    if (!mainEl) return;

    const manifestoEl = mainEl.querySelector<HTMLElement>("[data-vt-manifesto]");
    const manifestoSpans = manifestoEl
      ? Array.from(manifestoEl.querySelectorAll<HTMLSpanElement>("span"))
      : [];
    const trackEl = mainEl.querySelector<HTMLElement>("[data-vt-track]");

    const updateManifesto = (f: number) => {
      if (!manifestoSpans.length) return;
      const litCount = Math.floor(clamp01(f) * manifestoSpans.length);
      for (let i = 0; i < manifestoSpans.length; i++) {
        manifestoSpans[i].dataset.lit = i < litCount ? "true" : "false";
      }
    };

    const updateTrack = (f: number) => {
      if (!trackEl) return;
      const viewW = trackEl.parentElement?.clientWidth ?? window.innerWidth;
      const maxX = Math.max(0, trackEl.scrollWidth - viewW);
      trackEl.style.transform = `translateX(${-clamp01(f) * maxX}px)`;
    };

    // Fallback normal scroll mode (mobile or reduced-motion)
    if (!isStage) {
      if (trackEl) trackEl.style.transform = "";
      const onMobileScroll = () => {
        const vh = window.innerHeight || 800;
        if (manifestoEl && manifestoSpans.length) {
          const r = manifestoEl.getBoundingClientRect();
          const start = vh * 0.85;
          const end = vh * 0.35;
          updateManifesto((start - r.top) / Math.max(1, r.height + (start - end)));
        }
      };
      onMobileScroll();
      window.addEventListener("scroll", onMobileScroll, { passive: true });
      window.addEventListener("resize", onMobileScroll);
      return () => {
        window.removeEventListener("scroll", onMobileScroll);
        window.removeEventListener("resize", onMobileScroll);
      };
    }

    const roomEls = roomRefs.current.filter((el): el is HTMLDivElement => !!el);
    if (!roomEls.length) return;

    type BoundExit =
      | {
          kind: "scatter";
          parts: { el: HTMLElement | null; motion: MotionFn; fade?: boolean }[];
        }
      | {
          kind: "split";
          el: HTMLElement | null;
          clone: HTMLElement | null;
          left: MotionFn;
          right: MotionFn;
        }
      | null;

    const boundExits: BoundExit[] = roomEls.map((roomEl, i) => {
      const rule = EXIT_RULES[i];
      if (!rule) return null;
      if (rule.kind === "scatter") {
        return {
          kind: "scatter",
          parts: rule.parts.map((pt) => ({
            el: roomEl.querySelector<HTMLElement>(pt.selector),
            motion: pt.motion,
            fade: pt.fade,
          })),
        };
      }
      return {
        kind: "split",
        el: roomEl.querySelector<HTMLElement>(rule.selector),
        clone: null,
        left: rule.left,
        right: rule.right,
      };
    });

    const applyTransform = (
      el: HTMLElement,
      m: { x: number; y: number; r: number },
    ) => {
      el.style.translate = `${m.x.toFixed(1)}px ${m.y.toFixed(1)}px`;
      el.style.rotate = `${m.r.toFixed(2)}deg`;
    };

    const resetEl = (el: HTMLElement) => {
      el.style.translate = "";
      el.style.rotate = "";
      el.style.clipPath = "";
      el.style.opacity = "";
    };

    const scales = ROOM_CONFIG.map(() => 1);

    const applyExit = (roomIdx: number, p: number) => {
      const ex = boundExits[roomIdx];
      if (!ex) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (ex.kind === "scatter") {
        for (const pt of ex.parts) {
          if (!pt.el) continue;
          if (p <= 0) {
            resetEl(pt.el);
            continue;
          }
          applyTransform(pt.el, pt.motion(p, vw, vh));
          if (pt.fade) {
            pt.el.style.opacity = (1 - p).toFixed(3);
          }
        }
        return;
      }

      const target = ex.el;
      if (!target) return;
      if (p <= 0) {
        resetEl(target);
        if (ex.clone) {
          ex.clone.remove();
          ex.clone = null;
        }
        return;
      }

      if (!ex.clone) {
        const roomEl = roomEls[roomIdx];
        const roomRect = roomEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const sc = scales[roomIdx] || 1;
        const clone = target.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        clone.classList.add("vt-shard");
        clone.style.left = `${(targetRect.left - roomRect.left) / sc}px`;
        clone.style.top = `${(targetRect.top - roomRect.top) / sc}px`;
        clone.style.width = `${targetRect.width / sc}px`;
        clone.style.height = `${targetRect.height / sc}px`;
        roomEl.appendChild(clone);
        ex.clone = clone;
      }

      target.style.clipPath = "inset(0 50% 0 0)";
      ex.clone.style.clipPath = "inset(0 0 0 50%)";
      applyTransform(target, ex.left(p, vw, vh));
      applyTransform(ex.clone, ex.right(p, vw, vh));
    };

    const current = { t: 0, p: ROOM_CONFIG.map(() => 0), fwd: 1 };
    const target = { t: 0, p: ROOM_CONFIG.map(() => 0), fwd: 1 };
    let lastScrollY = window.scrollY;
    let rafId = 0;
    let lastTime = performance.now();
    let lastActiveIdx = -1;

    const measure = () => {
      const stageH = mainEl.clientHeight - 24;
      roomEls.forEach((roomEl, i) => {
        const child = roomEl.firstElementChild as HTMLElement | null;
        scales[i] = child
          ? Math.min(1, stageH / Math.max(1, child.offsetHeight))
          : 1;
      });
      if (spacerRef.current) {
        spacerRef.current.style.height = `${TOTAL_SPAN * window.innerHeight + window.innerHeight}px`;
      }
    };

    const renderFrame = () => {
      roomEls.forEach((roomEl, i) => {
        const exitP = clamp01(current.t - i);
        const hasExit = !!boundExits[i] && exitP > 0;
        const zDist = hasExit ? 0 : (i - current.t) * Z_STEP;
        const isAhead = zDist >= 0;

        // Keep next room invisible while resting on current room (zDist >= Z_STEP),
        // then smoothly zoom & fade it in as soon as the outgoing room starts shattering!
        const farFade = Math.pow(
          1 - Math.min(1, zDist / (1.02 * Z_STEP)),
          1.8,
        );
        const nearFade = Math.max(0, 1 - zDist / (0.65 * Z_STEP));
        let opacity = isAhead
          ? nearFade + (farFade - nearFade) * current.fwd
          : Math.max(0, 1 + zDist / (0.55 * Z_STEP));

        if (hasExit) {
          opacity = 1 - clamp01((exitP - 0.72) / 0.28);
        }

        const hidden = hasExit
          ? exitP >= 1
          : opacity <= 0.002 || zDist > 1.05 * Z_STEP || zDist < -0.55 * Z_STEP;

        roomEl.style.transform = `translate3d(0, 0, ${-zDist}px) scale(${scales[i]})`;
        roomEl.style.opacity = hidden ? "0" : opacity.toFixed(3);
        applyExit(i, exitP);
        roomEl.style.zIndex = String(1000 - Math.round(zDist / 10));
        roomEl.dataset.hidden = hidden ? "true" : "false";
        roomEl.dataset.focus = Math.abs(zDist) < 0.5 * Z_STEP ? "true" : "false";
      });

      updateManifesto(current.p[2]);
      updateTrack(current.p[3]);

      const activeIdx = Math.max(
        0,
        Math.min(ROOM_CONFIG.length - 1, Math.floor(current.t + 0.35)),
      );
      if (activeIdx !== lastActiveIdx) {
        lastActiveIdx = activeIdx;
        setActiveRoom(activeIdx);
      }
    };

    const step = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
      lastTime = now;

      // Frame-rate independent exponential smoothing (silky on 60Hz/120Hz/144Hz!)
      const alpha = 1 - Math.exp(-10.5 * dt);
      const fwdAlpha = 1 - Math.exp(-14 * dt);

      let dirty = false;

      if (Math.abs(target.t - current.t) > 5e-4) {
        current.t += (target.t - current.t) * alpha;
        dirty = true;
      } else {
        current.t = target.t;
      }

      if (Math.abs(target.fwd - current.fwd) > 0.002) {
        current.fwd += (target.fwd - current.fwd) * fwdAlpha;
        dirty = true;
      } else {
        current.fwd = target.fwd;
      }

      for (let i = 0; i < target.p.length; i++) {
        if (Math.abs(target.p[i] - current.p[i]) > 5e-4) {
          current.p[i] += (target.p[i] - current.p[i]) * alpha;
          dirty = true;
        } else {
          current.p[i] = target.p[i];
        }
      }

      renderFrame();
      rafId = dirty ? requestAnimationFrame(step) : 0;
    };

    const onScroll = () => {
      const y = window.scrollY;
      const pos = computeStagePosition(y / Math.max(1, window.innerHeight));
      if (y > lastScrollY + 1) target.fwd = 1;
      else if (y < lastScrollY - 1) target.fwd = 0;
      lastScrollY = y;
      target.t = pos.t;
      target.p = pos.p;
      if (!rafId) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(step);
      }
    };

    const onResize = () => {
      measure();
      onScroll();
      renderFrame();
    };

    measure();
    const remeasureTimer = window.setTimeout(() => {
      measure();
      renderFrame();
    }, 550);

    // Sync initial position immediately without lag
    const initPos = computeStagePosition(
      window.scrollY / Math.max(1, window.innerHeight),
    );
    current.t = target.t = initPos.t;
    current.p = [...initPos.p];
    target.p = [...initPos.p];
    renderFrame();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(remeasureTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      roomEls.forEach((roomEl, i) => {
        applyExit(i, 0);
        roomEl.style.transform = "";
        roomEl.style.opacity = "";
        roomEl.style.zIndex = "";
        delete roomEl.dataset.hidden;
        delete roomEl.dataset.focus;
      });
    };
  }, [isStage, booting, setActiveRoom]);

  const jumpTo = (idx: number) => {
    window.scrollTo({
      top: scrollScreensForRoom(idx) * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main
        ref={stageRef}
        className={isStage ? "vt-main vt-stage" : "vt-main"}
      >
        {rooms.map((content, idx) => (
          <div
            key={idx}
            className="vt-room"
            ref={(el) => {
              roomRefs.current[idx] = el;
            }}
          >
            {content}
          </div>
        ))}
      </main>

      {/* Virtual scroll spacer that drives the single-screen 3D stage */}
      {isStage && (
        <div
          ref={spacerRef}
          className="vt-scroll-space"
          aria-hidden="true"
        />
      )}

      {/* Subtle right-edge pixel room indicator */}
      {isStage && !booting && (
        <aside className="vt-stage-rail" aria-label="Room progress">
          {ROOM_CONFIG.map((r, i) => (
            <button
              key={r.label}
              type="button"
              title={`${String(i).padStart(2, "0")} — ${r.label}`}
              aria-label={`Jump to ${r.label}`}
              className="vt-stage-dot"
              data-active={activeRoom === i ? "true" : "false"}
              onClick={() => jumpTo(i)}
            />
          ))}
        </aside>
      )}
    </>
  );
}
