"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HOURS = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"];

const generateCalendarDays = (monthOffset = 0) => {
  const baseDate = new Date();
  baseDate.setMonth(baseDate.getMonth() + monthOffset);
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = domingo

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const calendarDays = [];

  // Días del mes anterior (deshabilitados)
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevMonthDays - i,
      currentMonth: false,
    });
  }

  // Días del mes actual
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      currentMonth: true,
    });
  }

  // Días del próximo mes (deshabilitados)
  while (calendarDays.length < 42) {
    calendarDays.push({
      day: calendarDays.length - (startingDayOfWeek + daysInMonth) + 1,
      currentMonth: false,
    });
  }

  return calendarDays;
};

export default function BookingSection() {
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const days = generateCalendarDays(monthOffset);

  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + monthOffset);
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const handleMonthChange = (newOffset: number, dir: "left" | "right") => {
    setDirection(dir);
    setSelectedDay(null);
    setMonthOffset(newOffset);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#0b0b0e] border-t border-gray-800/20 overflow-hidden">
      {/* overlay metálico */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.1))`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 z-10 relative py-32 flex flex-col lg:flex-row gap-24 items-center justify-center">
        {/* Calendario */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg bg-gradient-to-b from-[#161618] to-[#0b0b0e] border border-gray-700/30 rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-10">
            <span
              className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium"
              style={{
                background:
                  "linear-gradient(90deg, rgba(192,192,192,0.12), rgba(255,215,0,0.06))",
                color: "#E6E6E6",
              }}
            >
              RESERVAS
            </span>

            <h2
              className="text-4xl font-extrabold text-transparent bg-clip-text mb-3"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #E6E6E6, #BDBDBD 40%, #A89F8D 100%)",
              }}
            >
              Agenda tu cita
            </h2>
            <p className="text-gray-400/90 text-base leading-relaxed">
              Selecciona el día que prefieras y elige la hora que más te
              convenga. Nuestro equipo estará listo para atenderte con la
              precisión y el estilo que mereces.
            </p>
          </div>

          {/* navegación del calendario */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => handleMonthChange(Math.max(monthOffset - 1, 0), "left")}
              disabled={monthOffset === 0}
              className={`transition ${
                monthOffset === 0
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              ←
            </button>
            <h3 className="text-xl font-semibold capitalize text-gray-200 tracking-wide">
              {monthName}
            </h3>
            <button
              onClick={() => handleMonthChange(Math.min(monthOffset + 1, 1), "right")}
              disabled={monthOffset === 1}
              className={`transition ${
                monthOffset === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              →
            </button>
          </div>

          {/* encabezado de días */}
          <div className="grid grid-cols-7 text-center text-xs text-gray-400 uppercase mb-2">
            {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((d) => (
              <div key={d} className="py-1">
                {d}
              </div>
            ))}
          </div>

          {/* días con animación */}
          <div className="overflow-hidden relative h-[330px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={monthOffset}
                initial={{ x: direction === "right" ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "right" ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-7 gap-2 text-center absolute inset-0"
              >
                {days.map(({ day, currentMonth }, i) => (
                  <motion.div
                    key={i}
                    whileHover={currentMonth ? { scale: 1.1 } : {}}
                    onClick={() =>
                      currentMonth &&
                      setSelectedDay(selectedDay === day ? null : day)
                    }
                    className={`cursor-pointer rounded-xl py-3 text-sm font-medium transition-all ${
                      currentMonth
                        ? selectedDay === day
                          ? "bg-gradient-to-r from-[#c0c0c0]/30 to-[#a89f8d]/20 text-white border border-gray-500/60 shadow-md"
                          : "text-gray-300 hover:text-gray-100 hover:bg-gray-700/20"
                        : "text-gray-600/50 cursor-not-allowed"
                    }`}
                  >
                    {day}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mensaje flotante */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay ? "hours" : "message"}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md w-full text-gray-300 space-y-8"
          >
            {!selectedDay ? (
              <>
                <motion.h3
                  className="text-4xl font-semibold text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #E6E6E6, #BDBDBD 40%, #A89F8D 100%)",
                  }}
                >
                  Reserva fácil, sin complicaciones.
                </motion.h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Visualiza el calendario y selecciona el día que mejor se
                  ajuste a tu agenda. Solo un paso más para tu próxima
                  experiencia en{" "}
                  <span className="text-gray-200">Barbería Élite</span>.
                </p>
              </>
            ) : (
              <>
                <h4
                  className="text-2xl font-semibold text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #E6E6E6, #BDBDBD 40%, #A89F8D 100%)",
                  }}
                >
                  {selectedDay} de {monthName}
                </h4>
                <p className="text-gray-400/90 leading-relaxed">
                  Estos son los horarios disponibles para ese día. Escoge el que
                  prefieras y confirma por WhatsApp.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  {HOURS.map((hour) => (
                    <motion.button
                      key={hour}
                      whileTap={{ scale: 0.95 }}
                      className="py-3 rounded-xl border border-gray-700/40 text-gray-300 hover:text-white hover:border-gray-500/60 hover:bg-gray-700/20 transition"
                    >
                      {hour}
                    </motion.button>
                  ))}
                </div>

                <motion.a
                  href="https://wa.me/51900000000?text=Hola!%20Quisiera%20reservar%20una%20cita."
                  target="_blank"
                  whileHover={{ scale: 1.03 }}
                  className="inline-block mt-10 bg-gradient-to-r from-[#a89f8d] to-[#c0c0c0] text-[#0b0b0e] font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  Reservar por WhatsApp
                </motion.a>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
