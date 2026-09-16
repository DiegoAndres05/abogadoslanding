"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Scale, HeartHandshake } from "lucide-react";
import FadeIn from "./FadeIn";

const processSteps = [
  {
    number: "01",
    title: "Primera conversación",
    description:
      "Escuchamos su situación y comprendemos sus necesidades desde el primer contacto.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Análisis del caso",
    description:
      "Estudiamos la situación jurídica y evaluamos las mejores opciones disponibles.",
    icon: Search,
  },
  {
    number: "03",
    title: "Estrategia jurídica",
    description:
      "Definimos una ruta de acción clara, orientada a sus objetivos.",
    icon: Scale,
  },
  {
    number: "04",
    title: "Acompañamiento",
    description:
      "Ejecutamos la estrategia y mantenemos comunicación constante durante todo el proceso.",
    icon: HeartHandshake,
  },
];

export default function Process() {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
              Un proceso claro desde el primer contacto.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-colors hover:bg-white/20"
                >
                  <step.icon className="h-7 w-7 text-gold" />
                </motion.div>
                <span className="font-serif text-sm font-semibold text-gold/60">
                  {step.number}
                </span>
                <h3 className="mt-1 font-serif text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-px w-12 bg-white/10 lg:block" />
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
