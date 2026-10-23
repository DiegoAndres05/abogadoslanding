"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";

const heroImages = [
  "/hero/law-office-1.webp",
  "/hero/law-office-2.webp",
  "/hero/law-office-3.webp",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [activeImage, setActiveImage] = useState(0);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], reduceMotion ? [0, 0] : [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], reduceMotion ? [0, 0] : [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], reduceMotion ? [1, 1] : [1, 0]);

  useEffect(() => {
    if (reduceMotion) return;

    let intervalId: number | undefined;

    const start = () => {
      intervalId = window.setInterval(() => {
        setActiveImage((current) => (current + 1) % heroImages.length);
      }, 4000);
    };

    const stop = () => {
      if (intervalId !== undefined) window.clearInterval(intervalId);
      intervalId = undefined;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduceMotion]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy"
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            initial={false}
            animate={{
              opacity: reduceMotion ? (index === 0 ? 1 : 0) : activeImage === index ? 1 : 0,
            }}
            transition={{ duration: reduceMotion ? 0 : 1.6, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/65 via-navy-mid/50 to-charcoal/40" />
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/35" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">
            Derecho para decisiones que transforman
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Derecho corporativo, contratación pública y estrategia tributaria
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Acompañamos a empresas, inversionistas y contratistas del Estado en
            la estructuración de negocios, la ejecución de contratos y la
            gestión de riesgos jurídicos y fiscales.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#contacto"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              <Calendar className="h-4 w-4" />
              Contactar ahora
            </motion.a>
            <motion.a
              href="#areas"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Conocer nuestras áreas
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      <ScrollIndicator />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
