"use client";

import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  staggerChildren?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
  staggerChildren
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 24, opacity: 0 };
      case "down":
        return { y: -24, opacity: 0 };
      case "left":
        return { x: 24, opacity: 0 };
      case "right":
        return { x: -24, opacity: 0 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: 24, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      case "none":
        return { opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
        staggerChildren
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
