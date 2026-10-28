"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteContent } from "@/lib/content";

export function Processo() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const track = trackRef.current;
    const getDistance = () => track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink py-24">
      <h2 className="mx-auto max-w-[72rem] px-6 font-display text-3xl font-semibold text-surface md:text-4xl">
        Processo de trabalho
      </h2>
      <div
        ref={trackRef}
        className="mt-16 flex w-max gap-16 px-6 motion-reduce:w-full motion-reduce:flex-col motion-reduce:gap-10 md:px-16"
      >
        {siteContent.processo.map((item) => (
          <div
            key={item.step}
            className="w-[80vw] flex-shrink-0 border-t border-surface/30 pt-6 motion-reduce:w-full md:w-[28vw]"
          >
            <span className="font-mono text-sm text-accent-metal">{item.step}</span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-surface">
              {item.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-surface/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
