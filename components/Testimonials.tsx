"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Testimonios
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
              Lo que dicen nuestros clientes.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-gold/5"
              >
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="h-8 w-8 text-gold/30" />
                </motion.div>
                <p className="mt-4 text-sm leading-relaxed text-charcoal italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-serif text-sm font-semibold text-charcoal">
                    {testimonial.author}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">
                    {testimonial.role}
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
