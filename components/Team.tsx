"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { teamMembers } from "@/data/team";
import FadeIn from "./FadeIn";

export default function Team() {
  return (
    <section id="equipo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Nuestro equipo
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
              Experiencia y conocimiento al servicio de nuestros clientes.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="group text-center"
              >
                <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-ivory">
                  <div className="flex h-full w-full items-center justify-center text-text-muted">
                    <div className="text-center">
                      <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-navy/5" />
                      <p className="text-sm">[Fotografía]</p>
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-charcoal">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted max-w-xs mx-auto">
                  {member.bio}
                </p>
                <motion.a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {member.phone}
                </motion.a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
