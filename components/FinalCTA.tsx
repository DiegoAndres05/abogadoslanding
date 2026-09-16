"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import FadeIn from "./FadeIn";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-navy py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-charcoal" />
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Hablemos de su próximo movimiento estratégico.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Asesoría legal, tributaria y financiera con visión integral.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="tel:+573183383714"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              <Phone className="h-4 w-4" />
              +57 318 338 3714
            </motion.a>
            <motion.a
              href="mailto:getlegalcol@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              <Mail className="h-4 w-4" />
              getlegalcol@gmail.com
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
