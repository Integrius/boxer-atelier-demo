"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

export function SplitHeadline({
  text,
  className,
  as = "h1",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const split = new SplitType(ref.current, { types: "words" });
    gsap.fromTo(
      split.words,
      { opacity: 0, y: "0.6em" },
      {
        opacity: 1,
        y: "0em",
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      }
    );
    return () => split.revert();
  }, [text]);

  const Tag = as;
  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
