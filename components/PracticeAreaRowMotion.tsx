"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PracticeAreaRowMotion({
  children,
}: {
  children: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const panel = root.querySelector<HTMLElement>("[data-reveal=panel]");
    const card = root.querySelector<HTMLElement>("[data-reveal=card]");
    const trigger = root.querySelector<HTMLElement>("article") ?? root;
    if (!panel || !card) return;

    let ctx: gsap.Context | undefined;

    try {
      gsap.registerPlugin(ScrollTrigger);

      if (ScrollTrigger.isInViewport(trigger)) {
        return;
      }

      ctx = gsap.context(() => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger,
              start: "top 82%",
              once: true,
            },
          })
          .from(panel, {
            opacity: 0,
            y: 28,
            duration: 0.55,
            ease: "power2.out",
          })
          .from(
            card,
            {
              opacity: 0,
              y: 28,
              duration: 0.55,
              ease: "power2.out",
            },
            0.15,
          );
      }, root);
    } catch {
      ctx?.revert();
    }

    return () => {
      ctx?.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
