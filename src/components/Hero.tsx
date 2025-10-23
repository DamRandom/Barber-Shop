"use client";

import Image from "next/image";
import { motion, useReducedMotion, easeInOut } from "framer-motion";
import { useMemo } from "react";

export default function Hero() {
  const reduce = useReducedMotion();

  const imgVariant = {
  hidden: { opacity: 0, x: 80, scale: 1.03 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.1, ease: easeInOut },
  },
};

  const motionProps = reduce ? { initial: "show", animate: "show" } : { initial: "hidden", animate: "show" };

  const blurMaskStyle: React.CSSProperties = {
    maskImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    background: "linear-gradient(180deg, rgba(10,10,12,0.55), rgba(10,10,12,0.18))",
  };

  const blurMaskStyleParagraph: React.CSSProperties = {
    maskImage: "radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 22%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage: "radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 22%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    background: "linear-gradient(180deg, rgba(10,10,12,0.45), rgba(10,10,12,0.10))",
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full min-h-[64vh] sm:min-h-[78vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0b0e] via-[#0a0a0f] to-[#0a0a0f] overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            `radial-gradient(circle at 6% 16%, rgba(255,255,255,0.02), transparent 8%), linear-gradient(120deg, rgba(255,255,255,0.01), rgba(0,0,0,0.02))`,
        }}
      />

      <div className="container mx-auto px-5 sm:px-8 lg:px-16 z-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* IMAGE BLOCK */}
          <motion.div
            {...motionProps}
            variants={imgVariant}
            className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative w-full max-w-[640px] sm:max-w-[520px] md:max-w-[620px] aspect-[4/5] rounded-3xl overflow-hidden border border-gray-700/30 shadow-2xl">
              {/* <<<< added priority here */}
              <Image
                src="/images/barber-hero.jpg"
                alt="Barbero trabajando"
                fill
                priority
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 50vw"
                className="object-cover transition-all duration-500"
                style={{ objectPosition: "center" }}
              />

              <span
                className="absolute left-3 top-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm z-20"
                style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,215,0,0.05))", color: "#f5f5f5" }}
              >
                Estilo exclusivo
              </span>

              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.02)" }} />
            </div>
          </motion.div>

          {/* TEXT BLOCK */}
          <div className="lg:col-span-6 order-2 lg:order-2 flex items-start lg:items-center">
            <motion.div
              className="max-w-xl w-full relative"
              {...motionProps}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
            >
              <motion.span initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.45 }} className="inline-block mb-3 px-3 py-1 rounded-full text-sm font-medium" style={{ background: "linear-gradient(90deg, rgba(192,192,192,0.12), rgba(255,215,0,0.06))", color: "#E6E6E6" }} aria-hidden>
                BARBERÍA • PREMIUM
              </motion.span>

              <div className="relative inline-block">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none -z-10 rounded-lg"
                  style={{
                    top: "-18%",
                    left: "-8%",
                    right: "-8%",
                    bottom: "-18%",
                    ...blurMaskStyle,
                    borderRadius: "14px",
                  } as React.CSSProperties}
                />

                <motion.h1
                  id="hero-title"
                  {...(reduce ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.8 } } })}
                  className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-extrabold text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #E6E6E6, #BDBDBD 40%, #A89F8D 100%)" }}
                >
                  Redefine tu estilo.
                </motion.h1>
              </div>

              <div className="relative mt-4">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none -z-10 rounded-md"
                  style={{
                    top: "-8%",
                    left: "-6%",
                    right: "-6%",
                    bottom: "-8%",
                    ...blurMaskStyleParagraph,
                    borderRadius: "10px",
                  } as React.CSSProperties}
                />
                <motion.p
                  {...(reduce ? {} : { initial: { opacity: 0, x: -16 }, animate: { opacity: 1, x: 0, transition: { delay: 0.72, duration: 0.7 } } })}
                  className="text-gray-300/90 max-w-md"
                >
                  Cortes precisos, afeitados clásicos y una experiencia moderna con esencia metálica.
                </motion.p>
              </div>

              <motion.div {...(reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.5 } } })} className="mt-6 flex items-center gap-4">
                <a href="#booking" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1b1b1e] to-[#0b0b0f] border border-gray-700 px-6 py-3 rounded-xl shadow-2xl backdrop-blur-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a89f8d]/30">
                  Reservar cita
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.6))" }} />
    </section>
  );
}
