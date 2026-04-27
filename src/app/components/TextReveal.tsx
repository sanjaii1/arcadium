"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: string | ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: boolean;
}

export default function TextReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  staggerChildren = false,
}: TextRevealProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };


  // If we want to stagger words (only works if children is a string)
  if (staggerChildren && typeof children === "string") {
    const words = children.split(" ");

    return (
      <motion.div
        style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
        variants={container}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "0.25em" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Simple mask reveal for any children
  return (
    <div style={{ overflow: "hidden" }} className={className}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
