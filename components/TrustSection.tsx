"use client";

import { motion } from "framer-motion";
import { Shield, Target, Lock, Users } from "lucide-react";
import FadeIn from "./FadeIn";

const attributes = [
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Cada caso recibe el foco y la dedicación que merece.",
  },
  {
    icon: Target,
    title: "Estrategia jurídica",
    description: "Análisis profundo para definir la mejor ruta de acción.",
  },
  {
    icon: Lock,
    title: "Confidencialidad",
    description: "Protección absoluta de la información de nuestros clientes.",
  },
  {
    icon: Shield,
    title: "Acompañamiento integral",
    description: "Desde la consulta inicial hasta la resolución del caso.",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative -mt-1 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {attributes.map((attr, index) => (
            <FadeIn key={attr.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ivory transition-colors hover:bg-gold/10">
                  <attr.icon className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal">
                    {attr.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    {attr.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
