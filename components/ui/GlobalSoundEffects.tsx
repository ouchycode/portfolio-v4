"use client";

import { useEffect, useRef } from "react";

export function GlobalSoundEffects() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Only init AudioContext after first user interaction to comply with browser autoplay policies
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };

    const playHoverSound = () => {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

      gainNode.gain.setValueAtTime(0.02, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    };

    const playClickSound = () => {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    };

    const handleInteraction = (e: MouseEvent) => {
      initAudio();
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']");

      if (isInteractive) {
        if (e.type === "mouseover") {
          playHoverSound();
        } else if (e.type === "mousedown") {
          playClickSound();
        }
      }
    };

    window.addEventListener("mouseover", handleInteraction);
    window.addEventListener("mousedown", handleInteraction);

    return () => {
      window.removeEventListener("mouseover", handleInteraction);
      window.removeEventListener("mousedown", handleInteraction);
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return null;
}
