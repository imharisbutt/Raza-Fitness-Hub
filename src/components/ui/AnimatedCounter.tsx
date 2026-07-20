"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

/*
  Stats are authored as display strings ("2,000+", "25+", "8"). Split off the
  numeric run so it can be tweened, then re-attach the original prefix/suffix
  (commas, "+", etc.) untouched — keeps content authoring simple in the
  content files while still animating the number.
*/
const NUMERIC_RUN = /[\d,]+/;

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  const match = value.match(NUMERIC_RUN);
  const target = match ? Number(match[0].replace(/,/g, "")) : null;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";

  useEffect(() => {
    if (!isInView || target === null) return;

    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.round(latest).toLocaleString());
      },
    });

    return () => controls.stop();
  }, [isInView, target]);

  if (target === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
