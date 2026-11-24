"use client";

import { useEffect, useState } from "react";

export function WeatherWidget() {
  const [time, setTime] = useState<string>("");
  const [weather, setWeather] = useState<{
    temp: number;
    isDay: boolean;
    code: number;
  } | null>(null);

  useEffect(() => {
    const tick = () => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Jakarta",
          hour12: false,
        }) + " WIB",
      );
    };
    tick();
    const timer = window.setInterval(tick, 1000);

    const ac = new AbortController();
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-6.1783&longitude=106.63&current_weather=true",
      { signal: ac.signal },
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            isDay: data.current_weather.is_day === 1,
            code: data.current_weather.weathercode,
          });
        }
      })
      .catch(() => {});

    return () => {
      window.clearInterval(timer);
      ac.abort();
    };
  }, []);

  const getGlyph = (code: number, isDay: boolean) => {
    if (code === 0) return isDay ? "☀" : "☾";
    if (code <= 3) return "☁";
    if (code <= 48) return "▒";
    if (code >= 95) return "⚡";
    return "☂";
  };

  return (
    <div
      className="vt-card-inset flex items-center justify-between gap-3 px-3 py-2 text-xs"
      style={{ color: "var(--vt-ink)" }}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span
          aria-hidden="true"
          style={{
            width: 7,
            height: 7,
            background: "var(--vt-teal)",
            borderRadius: "50%",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span style={{ fontWeight: 700 }} className="truncate">
          Tangerang, ID
        </span>
      </div>

      <div
        className="vt-mono flex items-center gap-2 shrink-0"
        style={{ fontSize: 11, color: "var(--vt-ink-mute)" }}
      >
        <span>{time || "--:--:-- WIB"}</span>
        {weather && (
          <span
            style={{
              paddingLeft: 8,
              borderLeft: "1px solid var(--vt-edge-lo-2)",
              color: "var(--vt-ink)",
              fontWeight: 700,
            }}
          >
            {getGlyph(weather.code, weather.isDay)} {weather.temp}°C
          </span>
        )}
      </div>
    </div>
  );
}
