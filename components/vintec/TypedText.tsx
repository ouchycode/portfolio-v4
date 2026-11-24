"use client";

import { Fragment, useEffect, useState } from "react";

export function TypedText({
  text,
  speed = 46,
  delay = 800,
  cursor = true,
}: {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const id = window.setTimeout(() => setCount(text.length), 0);
      return () => window.clearTimeout(id);
    }

    let idx = 0;
    let timer = 0;

    const step = () => {
      idx += 1;
      setCount(idx);
      if (idx >= text.length) return;
      const ch = text[idx - 1];
      const pause =
        ch === "\n"
          ? 300
          : /[.,!?]/.test(ch)
            ? 180
            : speed * (0.7 + Math.random() * 0.6);
      timer = window.setTimeout(step, pause);
    };

    const resetTimer = window.setTimeout(() => {
      setCount(0);
      timer = window.setTimeout(step, delay);
    }, 0);

    return () => {
      window.clearTimeout(resetTimer);
      window.clearTimeout(timer);
    };
  }, [text, speed, delay]);

  const done = count >= text.length;
  const typed = text.slice(0, count);

  const renderLines = (s: string) =>
    s.split("\n").map((line, i, arr) => (
      <Fragment key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </Fragment>
    ));

  return (
    <span className="vt-typed">
      <span aria-hidden="true" style={{ visibility: "hidden" }}>
        {renderLines(text)}
      </span>
      <span className="vt-typed-live" aria-hidden="true">
        {renderLines(typed)}
        {cursor && (
          <span className="vt-cursor" data-done={done ? "true" : "false"}>
            ▌
          </span>
        )}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
