"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0b0b0e] to-[#090909] border-t border-gray-800/30 py-14 overflow-hidden">
      {/* overlay metálico */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.1))",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-16 grid md:grid-cols-3 gap-12 text-gray-300">
        {/* Información principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h3
            className="text-3xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #E6E6E6, #BDBDBD 40%, #A89F8D 100%)",
            }}
          >
            Barbería Élite
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Donde el estilo se convierte en arte. Cuidamos cada detalle para que
            cada visita sea una experiencia exclusiva.
          </p>
        </motion.div>

        {/* Datos de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          <h4 className="text-xl font-semibold text-gray-100 tracking-wide">
            Contáctanos
          </h4>
          <div className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition">
            <Phone size={18} />
            <span>+51 900 123 456</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition">
            <MapPin size={18} />
            <span>Av. Los Barberos 145, Lima, Perú</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition">
            <Clock size={18} />
            <span>Lun - Sáb: 9:00 AM - 8:00 PM</span>
          </div>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-4"
        >
          <h4 className="text-xl font-semibold text-gray-100 tracking-wide">
            Síguenos
          </h4>
          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="p-2 border border-gray-700/40 rounded-full hover:border-gray-500/60 hover:text-white transition"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="p-2 border border-gray-700/40 rounded-full hover:border-gray-500/60 hover:text-white transition"
            >
              <Facebook size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Línea inferior */}
      <div className="relative z-10 text-center mt-10 text-gray-600 text-sm border-t border-gray-800/20 pt-8">
        © {new Date().getFullYear()} Barbería Élite. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
