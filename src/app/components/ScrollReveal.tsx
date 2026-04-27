"use client";
import { CSSProperties, ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  /** Delay in ms before the animation plays (stagger children with 100, 200, 300…) */
  delay?: number;
  /** How far below the starting position the element begins (px). Default 40. */
  distance?: number;
  /** Duration in ms. Default 700. */
  duration?: number;
  /** Intersection threshold. Default 0.12. */
  threshold?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ScrollReveal({
  children,
  delay = 0,
  distance = 40,
  duration = 700,
  threshold = 0.12,
  className,
  style,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

  const baseStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : `translateY(${distance}px)`,
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <div ref={ref} className={className} style={baseStyle}>
      {children}
    </div>
  );
}
