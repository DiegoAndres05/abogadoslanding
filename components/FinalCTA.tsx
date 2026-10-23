"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import FadeIn from "./FadeIn";
import ConsultationForm from "./ConsultationForm";
import { parseConsultationArea } from "@/lib/consultation";
import { corporateEmail, phoneNumbers, whatsappNumber } from "@/lib/site";

function ContextualConsultationForm() {
  const searchParams = useSearchParams();
  const area = parseConsultationArea(searchParams.get("area"));
  return <ConsultationForm key={area || "none"} initialArea={area} />;
}

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-navy py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-charcoal" />
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <FadeIn direction="left">
          <div className="pt-2 text-left lg:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Hablemos
            </p>
            <h2 className="mt-5 max-w-md font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              De su próximo movimiento estratégico.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/70">
              Cuéntenos si necesita estructurar un negocio, ejecutar un contrato
              estatal o gestionar un riesgo tributario.
            </p>
            <div className="mt-8 h-px w-16 bg-gold" />
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              {phoneNumbers.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {phone}
                </a>
              ))}
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp: +57 301 524 6127
              </a>
              <a href={`mailto:${corporateEmail}`} className="hover:text-white">
                {corporateEmail}
              </a>
            </div>
            <div className="mt-8 text-sm text-white/50">
              <p className="font-medium text-white/70">GET Legal &amp; Tax</p>
              <p className="mt-1">Bogotá · Cartagena · Colombia</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="right">
          <div className="w-full max-w-[680px] lg:justify-self-end">
            <Suspense fallback={<div className="min-h-[24rem] rounded-2xl bg-white/90" />}>
              <ContextualConsultationForm />
            </Suspense>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
