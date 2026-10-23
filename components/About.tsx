"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="nosotros" className="overflow-x-clip bg-white py-20 sm:py-28 lg:overflow-x-visible">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <div className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ivory transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/firm.jpg"
                  alt="Equipo profesional reunido en una oficina"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl border-2 border-gold/35 transition-transform duration-300 group-hover:scale-105 lg:-bottom-8 lg:-right-8" />
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-2xl border-2 border-gold/50 transition-transform duration-300 group-hover:scale-105 lg:-top-8 lg:-left-8" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Sobre la firma
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
                Entendemos el derecho desde la lógica del negocio.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                Somos una firma colombiana con sede en Bogotá y Cartagena,
                concentrada en derecho societario, contratación pública y
                defensa tributaria.
              </p>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-mid"
              >
                Contactar
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
