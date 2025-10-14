"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0f] to-[#0b0b0e] overflow-hidden border-t border-gray-800/20">
      {/* metallic overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay"
        style={{
          backgroundImage:
            `radial-gradient(circle at 70% 30%, rgba(255,255,255,0.03), transparent 40%), linear-gradient(160deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03))`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <span
              className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium"
              style={{
                background:
                  "linear-gradient(90deg, rgba(192,192,192,0.12), rgba(255,215,0,0.06))",
                color: "#E6E6E6",
              }}
            >
              SOBRE NOSOTROS
            </span>

            <h2
              className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #E6E6E6, #BDBDBD 40%, #A89F8D 100%)",
              }}
            >
              Tradición que se afila con precisión.
            </h2>

            <p className="text-gray-400/90 leading-relaxed mb-6">
              Somos más que una barbería: somos un espacio donde la técnica clásica se mezcla con la estética moderna. 
              Cada corte, cada detalle, cada trazo con la navaja refleja una filosofía de perfección, respeto y estilo personal.
            </p>

            <p className="text-gray-400/90 leading-relaxed mb-8">
              Nuestro equipo de profesionales redefine la experiencia del cuidado masculino. Aquí no vienes solo a verte mejor, 
              vienes a sentirte diferente.
            </p>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              href="#team"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1b1b1e] to-[#0b0b0f] border border-gray-700 px-6 py-3 rounded-xl shadow-2xl backdrop-blur-md"
            >
              <span className="text-sm font-semibold text-gray-100">
                Conócenos más
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 1.05 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-full max-w-xl aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-700/30"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.18))",
              }}
            >
              <Image
                src="/images/barber-about.jpg"
                alt="Equipo de barberos trabajando"
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow:
                    "inset 0 0 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.02)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
