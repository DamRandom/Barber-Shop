"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Carlos Díaz",
    comment:
      "El mejor corte que he tenido. Se nota la atención al detalle y el ambiente es inmejorable.",
    img: "/images/client1.jpg",
  },
  {
    name: "Luis Fernández",
    comment:
      "Nunca me había sentido tan cómodo en una barbería. Profesionalismo total.",
    img: "/images/client2.jpg",
  },
  {
    name: "Miguel Torres",
    comment:
      "Excelente trato, técnica impecable y productos de primera. Repetiré sin duda.",
    img: "/images/client3.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const prevIndex = (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
  const nextIndex = (index + 1) % TESTIMONIALS.length;

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0b0b0e] to-[#0a0a0f] border-t border-gray-800/20 overflow-hidden">
      {/* metallic overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.1))`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 z-10 relative py-28">
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
            CLIENTES
          </span>

          <h2
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text mb-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #E6E6E6, #BDBDBD 40%, #A89F8D 100%)",
            }}
          >
            Lo que dicen de nosotros
          </h2>
          <p className="text-gray-400/90 leading-relaxed">
            La experiencia no se cuenta, se vive. Pero ellos ya la vivieron.
          </p>
        </motion.div>

        {/* 3 cards layout */}
        <div className="relative flex items-center justify-center h-[550px]">
          {/* Left card */}
          <motion.div
            key={prevIndex}
            initial={{ opacity: 0, x: -80, scale: 0.9 }}
            animate={{ opacity: 0.6, x: -150, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-[350px] h-[480px] rounded-3xl overflow-hidden border border-gray-700/30 shadow-2xl"
            style={{
              background: "linear-gradient(180deg, #151518, #0a0a0f)",
            }}
          >
            <Image
              src={TESTIMONIALS[prevIndex].img}
              alt={TESTIMONIALS[prevIndex].name}
              fill
              className="object-cover opacity-60"
            />
          </motion.div>

          {/* Center (active) card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -40 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-[380px] h-[500px] rounded-3xl overflow-hidden border border-gray-600/40 shadow-2xl"
              style={{
                background: "linear-gradient(180deg, #18181b, #0b0b0e)",
              }}
            >
              <Image
                src={TESTIMONIALS[index].img}
                alt={TESTIMONIALS[index].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gradient-to-br from-[#1b1b1e] to-[#0b0b0f] border border-gray-700/40 rounded-2xl p-5 shadow-lg backdrop-blur-md">
                  <p className="text-gray-200 text-base leading-relaxed mb-3">
                    {TESTIMONIALS[index].comment}
                  </p>
                  <h4 className="text-gray-400 font-medium text-sm text-right">
                    {TESTIMONIALS[index].name}
                  </h4>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right card */}
          <motion.div
            key={nextIndex}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 0.6, x: 150, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-[350px] h-[480px] rounded-3xl overflow-hidden border border-gray-700/30 shadow-2xl"
            style={{
              background: "linear-gradient(180deg, #151518, #0a0a0f)",
            }}
          >
            <Image
              src={TESTIMONIALS[nextIndex].img}
              alt={TESTIMONIALS[nextIndex].name}
              fill
              className="object-cover opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
