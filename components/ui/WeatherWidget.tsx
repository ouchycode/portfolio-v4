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
          code: data.current_weather.weathercode
        });
      } catch (err) {
        console.error("Failed to fetch weather", err);
      }
    };

    fetchWeather();
    // Refresh weather every 30 mins
    const weatherTimer = setInterval(fetchWeather, 30 * 60 * 1000);

    return () => {
      clearInterval(timer);
      clearInterval(weatherTimer);
    };
  }, []);

  // WMO Weather interpretation codes
  const getWeatherIcon = (code: number, isDay: boolean) => {
    if (code === 0) return isDay ? <Sun size={14} className="text-[#FABB05]" /> : <Moon size={14} className="text-[var(--google-blue-dark)]" />;
    if (code >= 1 && code <= 3) return <Cloud size={14} className="text-[#9AA0A6]" />;
    if (code >= 45 && code <= 48) return <CloudFog size={14} className="text-[#9AA0A6]" />;
    if (code >= 51 && code <= 67) return <CloudDrizzle size={14} className="text-[var(--google-blue-dark)]" />;
    if (code >= 71 && code <= 86) return <CloudSnow size={14} className="text-[#E8EAED]" />;
    if (code >= 95) return <CloudLightning size={14} className="text-[#FABB05]" />;
    return <CloudRain size={14} className="text-[var(--google-blue-dark)]" />;
  };

  if (!time) return null;

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-[#303134] rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 shadow-sm transition-transform hover:scale-105">
      <div className="flex items-center gap-1.5 border-r border-[#DADCE0] dark:border-[#5F6368]/60 pr-3">
        <MapPin size={14} className="text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]" />
        <span className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6]">Tangerang</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono font-bold text-[#202124] dark:text-[#E8EAED] tracking-wider w-20 text-center">
          {time}
        </span>
        {weather && (
          <div className="flex items-center gap-1.5 pl-2 border-l border-[#DADCE0] dark:border-[#5F6368]/60">
            {getWeatherIcon(weather.code, weather.isDay)}
            <span className="text-xs font-bold text-[#5F6368] dark:text-[#9AA0A6]">{weather.temp}°C</span>
          </div>
        )}
      </div>
    </div>
  );
}
