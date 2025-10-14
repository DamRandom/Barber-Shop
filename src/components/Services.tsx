"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
  {
    title: "Corte Clásico",
    desc: "Líneas definidas, precisión y estilo atemporal.",
    img: "/images/service-cut.jpg",
  },
  {
    title: "Afeitado Tradicional",
    desc: "La experiencia completa con toalla caliente y navaja.",
    img: "/images/service-shave.jpg",
  },
  {
    title: "Perfilado de Barba",
    desc: "Simetría, detalle y carácter. Tu firma personal.",
    img: "/images/service-beard.jpg",
  },
  {
    title: "Tratamientos Capilares",
    desc: "Fortalece y revitaliza tu cabello con técnicas profesionales.",
    img: "/images/service-hair.jpg",
  },
];

export default function Services() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#0b0b0e] py-28 border-t border-gray-800/20 overflow-hidden">
      {/* metallic overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.1))`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span
            className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium"
            style={{
              background:
                "linear-gradient(90deg, rgba(192,192,192,0.12), rgba(255,215,0,0.06))",
              color: "#E6E6E6",
            }}
          >
            SERVICIOS
          </span>

          <h2
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text mb-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #E6E6E6, #BDBDBD 40%, #A89F8D 100%)",
            }}
          >
            Cuidamos cada detalle.
          </h2>
          <p className="text-gray-400/90 leading-relaxed">
            No solo cortamos, transformamos. Cada servicio está diseñado para resaltar tu estilo y tu confianza con una precisión casi quirúrgica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative group rounded-3xl overflow-hidden border border-gray-700/30 bg-gradient-to-b from-[#121214] to-[#0b0b0e] shadow-2xl"
            >
              <div className="relative w-full aspect-[16/7] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover transition-all duration-700"
                />
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-700"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)",
                  }}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 border-2 border-gray-400/30 rounded-3xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1b1b1e] to-[#0b0b0f] border border-gray-700 px-8 py-4 rounded-xl shadow-2xl backdrop-blur-md hover:scale-105 transition-transform duration-300"
          >
            <span className="text-sm font-semibold text-gray-100">
              Reservar tu cita
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
          </a>
        </motion.div>
      </div>
    </section>
  );
}
