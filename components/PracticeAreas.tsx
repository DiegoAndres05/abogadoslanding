import { ArrowUpRight, Check } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { practiceAreaVisualClasses } from "@/components/practiceAreaVisuals";
import FadeIn from "./FadeIn";
import PracticeAreaRowMotion from "./PracticeAreaRowMotion";

export default function PracticeAreas() {
  return (
    <section id="areas" className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Áreas de práctica
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
              Soluciones legales para decisiones importantes
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-white/70">
              Soluciones jurídicas, tributarias y financieras integradas para
              empresas, inversionistas, entidades y familias.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 flex flex-col gap-8 lg:gap-10">
          {practiceAreas.map((area) => (
            <PracticeAreaRowMotion key={area.id}>
              <article
                id={area.slug}
                className="scroll-mt-24 grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-6"
              >
                <div
                  data-reveal="panel"
                  className={`relative isolate aspect-[5/4] min-h-[16rem] overflow-hidden rounded-3xl sm:min-h-[18rem] ${practiceAreaVisualClasses[area.visualVariant]}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6 sm:p-8">
                    <h3 className="font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl">
                      {area.title}
                    </h3>
                    <a
                      href="#contacto"
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-ivory"
                    >
                      Agenda una consulta
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  </div>
                </div>

                <div data-reveal="card" className="rounded-3xl bg-white p-6 sm:p-8">
                  <h4 className="font-serif text-xl font-semibold text-navy">
                    ¿Por qué importa?
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-navy/80 sm:text-base">
                    {area.whyItMatters}
                  </p>
                  <h4 className="mt-6 font-serif text-xl font-semibold text-navy">
                    Especialidades:
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {area.featuredSpecialties.slice(0, 5).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-navy/80"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </PracticeAreaRowMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
