"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function ParallaxLayer({
  children,
  strength = 40,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-strength, strength],
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{
          y,
          position: "absolute",
          top: -strength,
          bottom: -strength,
          left: 0,
          right: 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
