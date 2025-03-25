"use client";

import { useEffect, useState } from "react";

export default function TimerPage() {
  const [timeLeft, setTimeLeft] = useState({
    day: "00",
    hour: "00",
    min: "00",
    sec: "00"
  });

  useEffect(() => {
    // Date cible mise à jour : Exemple le 31 Décembre 2025 23:59:59
    const targetTime = new Date("Mar 25, 2025 16:24:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const remainingSec = Math.floor((targetTime - now) / 1000);

      if (remainingSec < 0) {
        setTimeLeft({
          day: "00",
          hour: "00",
          min: "00",
          sec: "00"
        });
        return;
      }

      const day = Math.floor(remainingSec / (3600 * 24));
      const hour = Math.floor((remainingSec % (3600 * 24)) / 3600);
      const min = Math.floor((remainingSec % 3600) / 60);
      const sec = remainingSec % 60;

      setTimeLeft({
        day: String(day).padStart(2, "0"),
        hour: String(hour).padStart(2, "0"),
        min: String(min).padStart(2, "0"),
        sec: String(sec).padStart(2, "0")
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-white text-[40px] font-light tracking-[6px] mb-6">
        PATIENTE SAKINA
      </h1>

      <div className="w-full flex justify-between mt-8 max-w-5xl">
        <div className="w-[220px] bg-white/20 backdrop-blur-lg rounded-[20px] overflow-hidden">
          <h1 id="day" className="text-white font-light text-[70px] text-center py-10">
            {timeLeft.day}
          </h1>
          <h2 className="text-black bg-white text-center py-2 text-[20px]">Days</h2>
        </div>
        <div className="w-[220px] bg-white/20 backdrop-blur-lg rounded-[20px] overflow-hidden">
          <h1 id="hour" className="text-white font-light text-[70px] text-center py-10">
            {timeLeft.hour}
          </h1>
          <h2 className="text-black bg-white text-center py-2 text-[20px]">Hours</h2>
        </div>
        <div className="w-[220px] bg-white/20 backdrop-blur-lg rounded-[20px] overflow-hidden">
          <h1 id="min" className="text-white font-light text-[70px] text-center py-10">
            {timeLeft.min}
          </h1>
          <h2 className="text-black bg-white text-center py-2 text-[20px]">Minutes</h2>
        </div>
        <div className="w-[220px] bg-white/20 backdrop-blur-lg rounded-[20px] overflow-hidden">
          <h1 id="sec" className="text-white font-light text-[70px] text-center py-10">
            {timeLeft.sec}
          </h1>
          <h2 className="text-black bg-white text-center py-2 text-[20px]">Seconds</h2>
        </div>
      </div>
    </div>
  );
}
