"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import FadeIn from "./FadeIn";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Preguntas frecuentes
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
              ¿Tiene alguna pregunta?
            </h2>
          </FadeIn>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-border"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-serif text-base font-medium text-charcoal">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 shrink-0 text-text-muted" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-6 pb-5 pt-4">
                        <p className="text-sm leading-relaxed text-text-muted">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
