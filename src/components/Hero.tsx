"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0b0e] via-[#0a0a0f] to-[#0a0a0f] overflow-hidden">
      {/* metallic texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            `radial-gradient(circle at 10% 20%, rgba(255,255,255,0.02), transparent 8%), linear-gradient(120deg, rgba(255,255,255,0.01), rgba(0,0,0,0.02))`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image - cinematic fade in */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 1.05 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <motion.div
              className="relative w-full max-w-xl aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-700/30"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.18))",
              }}
            >
              <Image
                src="/images/barber-hero.jpg"
                alt="Barbero trabajando"
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
              />

              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
                className="absolute left-4 top-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,215,0,0.05))",
                  color: "#f5f5f5",
                }}
              >
                Estilo exclusivo
              </motion.div>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow:
                    "inset 0 0 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.02)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Text - staggered with subtle motion */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.25 },
                },
              }}
              className="max-w-xl"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(192,192,192,0.12), rgba(255,215,0,0.06))",
                  color: "#E6E6E6",
                }}
              >
                BARBERÍA • PREMIUM
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 1, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-extrabold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #E6E6E6, #BDBDBD 40%, #A89F8D 100%)",
                }}
              >
                Redefine tu estilo.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                className="mt-5 text-gray-300/90 max-w-md"
              >
                Cortes precisos, afeitados clásicos y una experiencia moderna con esencia metálica.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                className="mt-8 flex items-center gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.97 }}
                  href="#booking"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1b1b1e] to-[#0b0b0f] border border-gray-700 px-6 py-3 rounded-xl shadow-2xl backdrop-blur-md"
                >
                  <span className="text-sm font-semibold text-gray-100">
                    Reservar cita
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.6))" }}
      />
    </section>
  );
}
