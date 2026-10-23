"use client";

import { Phone } from "lucide-react";
import { teamMembers } from "@/data/team";
import { getPracticeTitle } from "@/data/practiceAreas";
import FadeIn from "./FadeIn";

export default function Team() {
  return (
    <section id="equipo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Nuestro equipo
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
              Experiencia y conocimiento al servicio de nuestros clientes.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.12}>
              <div className="group text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-ivory">
                  <div className="flex h-full w-full items-center justify-center bg-navy/5 p-8 text-center text-sm text-text-muted">
                    Fotografía y perfil en proceso de aprobación editorial.
                  </div>
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-charcoal">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">{member.role}</p>
                {member.education.length > 0 && (
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
                    Formación: {member.education.join(", ")}
                  </p>
                )}
                {member.experience && (
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
                    {member.experience}
                  </p>
                )}
                {member.publicProcurementExperience && (
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
                    Contratación pública: {member.publicProcurementExperience}
                  </p>
                )}
                <p className="mx-auto mt-3 max-w-xs text-xs text-text-muted">
                  Áreas lideradas:{" "}
                  {member.leadershipAreas.map(getPracticeTitle).join(", ")}
                </p>
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-navy transition-transform duration-200 hover:scale-105 hover:border-navy hover:bg-navy hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {member.phone}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
