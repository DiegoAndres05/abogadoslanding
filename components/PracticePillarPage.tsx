import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { PracticeArea } from "@/data/practiceAreas";
import { primaryPracticeAreas } from "@/data/practiceAreas";
import { practiceAreaVisualClasses } from "@/components/practiceAreaVisuals";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PracticePillarPage({ area }: { area: PracticeArea }) {
  return (
    <>
      <Navbar />
      <main className="bg-ivory">
        <section className="bg-navy pb-20 sm:pb-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pt-36">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Área principal
              </p>
              <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {area.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                {area.description}
              </p>
              <a
                href={`/?area=${area.id}#contacto`}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-gold-light sm:w-auto"
              >
                Consultar esta práctica <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className={`relative aspect-[5/4] overflow-hidden rounded-3xl ${practiceAreaVisualClasses[area.visualVariant]}`}>
              <Image src={area.image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {area.stageSummary && (
            <div className="grid gap-4 md:grid-cols-3">
              {area.stageSummary.map((stage) => (
                <div key={stage} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm leading-relaxed text-navy/80">{stage}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Cómo ayudamos
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-navy">
                Servicios concretos para avanzar con seguridad
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy/75">{area.whyItMatters}</p>
            </div>
            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-navy">Servicios</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {area.services.map((service) => (
                  <li key={service} className="flex items-start gap-2 text-sm leading-relaxed text-navy/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <nav aria-label="Otras prácticas principales" className="border-t border-border bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 py-8 sm:px-6 lg:px-8">
            {primaryPracticeAreas.map((practice) => (
              <Link
                key={practice.id}
                href={`/practicas/${practice.slug}`}
                className={`rounded-full border px-4 py-2 text-sm ${practice.id === area.id ? "border-navy bg-navy text-white" : "border-border text-navy hover:border-navy"}`}
              >
                {practice.title}
              </Link>
            ))}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
