import { ArrowRight } from "lucide-react";
import {
  complementaryPracticeAreas,
  primaryPracticeAreas,
} from "@/data/practiceAreas";
import FadeIn from "./FadeIn";
import PracticePillarCard from "./PracticePillarCard";

export default function PracticeAreas() {
  return (
    <section id="areas" className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-charcoal" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Tres prácticas centrales
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Claridad jurídica para decisiones importantes
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Identifique rápidamente el equipo que puede acompañar su negocio,
            contrato o estrategia fiscal.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {primaryPracticeAreas.map((area, index) => (
            <FadeIn key={area.id} delay={index * 0.08}>
              <PracticePillarCard area={area} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex flex-col justify-between gap-3 border-b border-white/15 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Servicios complementarios
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                Apoyo especializado cuando su operación lo requiere
              </h3>
            </div>
          </div>
          <FadeIn>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {complementaryPracticeAreas.map((area) => (
              <article key={area.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-transform duration-300 hover:-translate-y-1">
                <area.icon className="h-6 w-6 text-gold" aria-hidden />
                <h4 className="mt-4 font-serif text-xl font-semibold text-white">
                  {area.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {area.shortDescription}
                </p>
                <a
                  href={`/?area=${area.id}#contacto`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
                >
                  Consultar <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}