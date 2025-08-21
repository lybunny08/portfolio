"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

type MagneticProps = {
  children: ReactNode;
  intensity?: number; // Intensité du mouvement, valeur par défaut 0.2
};

export default function Magnetic({ children, intensity = 0.2 }: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, {
        x: offsetX * intensity,
        y: offsetY * intensity,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div ref={containerRef} className="inline-block cursor-pointer select-none">
      {children}
    </div>
  );
}
