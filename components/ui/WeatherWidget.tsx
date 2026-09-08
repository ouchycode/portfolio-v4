"use client";

import { useEffect, useState } from "react";
import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, MapPin, Moon, Sun } from "lucide-react";

export function WeatherWidget() {
  const [time, setTime] = useState<string>("");
  const [weather, setWeather] = useState<{ temp: number; isDay: boolean; code: number } | null>(null);

  useEffect(() => {
    // Clock
    const timer = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta", hour12: false }) + " WIB");
    }, 1000);

    // Weather Fetch (Tangerang coordinates)
    const fetchWeather = async () => {
      try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-6.1783&longitude=106.63&current_weather=true");
        const data = await res.json();
        setWeather({
          temp: Math.round(data.current_weather.temperature),
          isDay: data.current_weather.is_day === 1,
          code: data.current_weather.weathercode,
        });
      } catch (err) {
        console.error("Failed to fetch weather", err);
      }
    };

    fetchWeather();
    const weatherTimer = setInterval(fetchWeather, 30 * 60 * 1000);

    return () => {
      clearInterval(timer);
      clearInterval(weatherTimer);
    };
  }, []);

  const getWeatherIcon = (code: number, isDay: boolean) => {
    const iconSize = 13;
    if (code === 0)
      return isDay ? (
        <Sun size={iconSize} className="text-vtamber" />
      ) : (
        <Moon size={iconSize} className="text-vtblue" />
      );
    if (code >= 1 && code <= 3) return <Cloud size={iconSize} className="text-inkmute" />;
    if (code >= 45 && code <= 48) return <CloudFog size={iconSize} className="text-inkmute" />;
    if (code >= 51 && code <= 67) return <CloudDrizzle size={iconSize} className="text-vtblue" />;
    if (code >= 71 && code <= 86) return <CloudSnow size={iconSize} className="text-ink" />;
    if (code >= 95) return <CloudLightning size={iconSize} className="text-vtamber" />;
    return <CloudRain size={iconSize} className="text-vtblue" />;
  };

  if (!time) return null;

  return (
    <div className="rv-chip rv-pixel flex items-center gap-3 px-3 py-1.5 bg-vtcard text-ink hover:rv-raised active:rv-sunken transition-all">
      <div className="flex items-center gap-1.5 border-r border-inkmute/40 pr-2.5">
        <MapPin size={13} className="text-vtpink" />
        <span className="text-[11px] font-bold uppercase tracking-wide">Tangerang</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[11px] tabular-nums font-bold tracking-wider">
          {time}
        </span>
        {weather && (
          <div className="flex items-center gap-1.5 pl-2 border-l border-inkmute/40">
            {getWeatherIcon(weather.code, weather.isDay)}
            <span className="text-[11px] font-bold">{weather.temp}°C</span>
          </div>
        )}
      </div>
    </div>
  );
}