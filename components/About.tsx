"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-ivory">
                <div className="flex h-full w-full items-center justify-center text-text-muted">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-navy/5" />
                    <p className="text-sm">[Fotografía de la firma]</p>
                  </div>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl border-2 border-gold/20 lg:-bottom-8 lg:-right-8"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -top-6 -left-6 h-32 w-32 rounded-2xl border-2 border-navy/10 lg:-top-8 lg:-left-8"
              />
            </motion.div>
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
                Acompañamos a empresas, inversionistas, entidades y familias en
                decisiones complejas que exigen rigor técnico, criterio estratégico
                y capacidad de ejecución.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                Convertimos la complejidad jurídica, tributaria y financiera en
                decisiones claras, estructuras sólidas y resultados sostenibles.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <p className="text-sm font-medium text-charcoal">Rigor — Análisis técnico y defensa consistente.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <p className="text-sm font-medium text-charcoal">Visión — Soluciones conectadas con el negocio.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <p className="text-sm font-medium text-charcoal">Cercanía — Atención directa y respuestas oportunas.</p>
                </div>
              </div>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-light"
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
