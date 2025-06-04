"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Loader: React.FC<{
  playAnimation: boolean;
  onAnimationComplete: () => void;
}> = ({ playAnimation, onAnimationComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(
    () => {
      if (playAnimation && containerRef.current) {
        const tl = gsap.timeline({
          onComplete: () => {
            setIsVisible(false);
            onAnimationComplete();
          },
        });

        tl.to(containerRef.current, {
          keyframes: {
            "20%": {
              borderBottomLeftRadius: "3em",
              borderBottomRightRadius: "3em",
            },
            "100%": { yPercent: -100 },
          },
          duration: 5,
          ease: "power2.in",
        });
      }
    },
    { scope: containerRef, dependencies: [playAnimation] },
  );

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex h-screen flex-col items-center justify-center bg-blue-950 text-white"
    >
      <p className="animate-pulse text-[2em] tracking-wider uppercase">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
