import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { PracticeArea } from "@/data/practiceAreas";
import { practiceAreaVisualClasses } from "@/components/practiceAreaVisuals";

const pillarNumber: Record<string, string> = {
  corporativo: "01",
  "contratacion-publica": "02",
  tributario: "03",
};

export default function PracticePillarCard({ area }: { area: PracticeArea }) {
  return (
    <article className="grid overflow-hidden rounded-3xl bg-white md:grid-cols-[0.9fr_1.1fr]">
      <div
        className={`relative min-h-[19rem] ${practiceAreaVisualClasses[area.visualVariant]}`}
      >
        <Image
          src={area.image}
          alt=""
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
        <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Pilar {pillarNumber[area.id] ?? ""}
          </p>
          <h3 className="mt-2 max-w-md font-serif text-2xl font-semibold text-white sm:text-3xl">
            {area.title}
          </h3>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-base leading-relaxed text-navy/80">{area.shortDescription}</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {area.services.map((service) => (
            <li key={service} className="flex items-start gap-2 text-sm leading-relaxed text-navy/75">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              {service}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`/practicas/${area.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white hover:bg-navy-mid"
          >
            Conocer más <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`/?area=${area.id}#contacto`}
            className="inline-flex items-center rounded-lg border border-navy/20 px-4 py-3 text-sm font-semibold text-navy hover:bg-ivory"
          >
            Consultar esta práctica
          </a>
        </div>
      </div>
    </article>
  );
}
