"use client";

import { Building2, Calculator, Landmark } from "lucide-react";
import FadeIn from "./FadeIn";

const differentiators = [
  {
    icon: Building2,
    kicker: "Derecho corporativo",
    title: "Control entre socios",
    description:
      "Quién decide y cómo se sale queda escrito antes del conflicto.",
    visualClass:
      "bg-[linear-gradient(100deg,#0F2330_0_48%,#1E3A4D_48%_72%,#b89a5c_72%_100%)]",
  },
  {
    icon: Landmark,
    kicker: "Contratación pública",
    title: "Después de adjudicar",
    description:
      "La ejecución y el cierre se revisan desde la lectura del pliego.",
    visualClass:
      "bg-[linear-gradient(120deg,#0F2330_0_42%,#1E3A4D_42%_70%,#a88b55_70%_100%)]",
  },
  {
    icon: Calculator,
    kicker: "Derecho tributario",
    title: "Ante la DIAN",
    description:
      "La defensa se prepara con la operación, no al llegar el requerimiento.",
    visualClass:
      "bg-[linear-gradient(80deg,#b08f52_0_24%,#1E3A4D_24%_54%,#0F2330_54%_100%)]",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que" className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-charcoal" />
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              ¿Por qué elegirnos?
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
              Así enfocamos cada práctica.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              El criterio cambia según el asunto.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {differentiators.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.12}>
              <div
                className={`group relative isolate h-full overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-gold/10 ${item.visualClass}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="h-7 w-7 text-white" aria-hidden />
                </div>
                <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {item.kicker}
                </p>
                <h3 className="relative z-10 mt-3 font-serif text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-3 text-base leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
