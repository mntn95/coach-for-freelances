"use client";

import { motion } from "motion/react";
import { ScrollRevealProps } from "@/types";

export function ScrollReveal({
  children,
  delay = 0,
  animatesInView = true,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,

        y: 40,
      }}
      animate={
        !animatesInView
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      whileInView={
        animatesInView
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
