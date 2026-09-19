"use client";

import { motion } from "framer-motion";
import { Target, Eye, Handshake } from "lucide-react";
import FadeIn from "./FadeIn";

const pillars = [
  {
    icon: Target,
    title: "Rigor",
    description: "Análisis técnico y defensa consistente.",
    visualClass:
      "bg-[linear-gradient(100deg,#0F2330_0_48%,#1E3A4D_48%_72%,#b89a5c_72%_100%)]",
  },
  {
    icon: Eye,
    title: "Visión",
    description: "Soluciones conectadas con el negocio.",
    visualClass:
      "bg-[linear-gradient(120deg,#0F2330_0_42%,#1E3A4D_42%_70%,#a88b55_70%_100%)]",
  },
  {
    icon: Handshake,
    title: "Cercanía",
    description: "Atención directa y respuestas oportunas.",
    visualClass:
      "bg-[linear-gradient(80deg,#b08f52_0_24%,#1E3A4D_24%_54%,#0F2330_54%_100%)]",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-charcoal" />
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              ¿Por qué elegirnos?
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
              Más que representación legal.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-white/70">
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
                className={`relative isolate overflow-hidden rounded-2xl p-8 text-center transition-shadow hover:shadow-lg hover:shadow-gold/10 ${pillar.visualClass}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-colors hover:bg-white/20"
                >
                  <pillar.icon className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="relative z-10 font-serif text-2xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="relative z-10 mt-3 text-base leading-relaxed text-white/70">
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
