"use client";

import { motion } from "framer-motion";
import { Target, Eye, Handshake } from "lucide-react";
import FadeIn from "./FadeIn";

const pillars = [
  {
    icon: Target,
    title: "Rigor",
    description: "Análisis técnico y defensa consistente.",
  },
  {
    icon: Eye,
    title: "Visión",
    description: "Soluciones conectadas con el negocio.",
  },
  {
    icon: Handshake,
    title: "Cercanía",
    description: "Atención directa y respuestas oportunas.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              ¿Por qué elegirnos?
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
              Más que representación legal.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-text-muted">
              Convertimos la complejidad jurídica, tributaria y financiera en
              decisiones claras, estructuras sólidas y resultados sostenibles.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative rounded-2xl border border-border bg-white p-8 text-center transition-shadow hover:shadow-lg hover:shadow-gold/5"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5 transition-colors hover:bg-navy/10"
                >
                  <pillar.icon className="h-7 w-7 text-navy" />
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  {pillar.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
