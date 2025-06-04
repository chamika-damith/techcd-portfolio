"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import {
  glitchOneClipPaths,
  glitchOpacityKeyframes,
  glitchTwoClipPaths,
} from "@/lib/constants";
import hero from "@/public/images/home-page/hero/hero.png";
import bitcoin from "@/public/images/home-page/hero/bitcoin.svg";

const ImageContent: React.FC<{
  onImageLoad: () => void;
  playAnimation: boolean;
}> = ({ onImageLoad, playAnimation }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap
        .timeline({ paused: true })
        .to("#glitch-img-one", {
          keyframes: {
            clipPath: glitchOneClipPaths,
            opacity: glitchOpacityKeyframes,
          },
          ease: "none",
          duration: 15,
          repeat: -1,
        })
        .to(
          "#glitch-img-two",
          {
            keyframes: {
              clipPath: glitchTwoClipPaths,
              opacity: glitchOpacityKeyframes,
            },
            ease: "none",
            duration: 2,
            repeat: -1,
            repeatDelay: Math.floor(Math.random() * 6 + 5),
          },
          "<",
        );

      if (playAnimation) tl.play();
    },
    { scope: containerRef, dependencies: [playAnimation] },
  );

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-[134/117] w-3/4 sm:absolute sm:right-0 sm:bottom-0 sm:aspect-auto sm:h-[95%] sm:w-auto 2xl:h-[90%]"
    >
      {/* 2 bitcoin images */}
      <Image
        src={bitcoin}
        alt="Bitcoin Logo"
        className="absolute top-[10%] right-0 left-0 mx-auto w-[42px] -translate-x-[90%] sm:w-[58.5px] md:w-[75px] lg:w-[101.5px] xl:w-[128px] 2xl:w-[154.5px]"
        priority
        onLoad={onImageLoad}
      />
      <Image
        src={bitcoin}
        alt="Bitcoin Logo"
        className="absolute top-0 right-[10%] bottom-0 my-auto w-[42px] -translate-y-1/2 sm:w-[58.5px] md:w-[75px] lg:w-[101.5px] xl:w-[128px] 2xl:w-[154.5px]"
        priority
        onLoad={onImageLoad}
      />

      {/* 3 hero images */}
      <Image
        src={hero}
        alt="Hero"
        className="w-full rotate-y-180 object-cover object-center drop-shadow-[5px_5px_5px_#0000004d] sm:h-full sm:w-auto"
        priority
        onLoad={onImageLoad}
      />
      <Image
        id="glitch-img-one"
        src={hero}
        alt="Hero"
        className="pointer-events-none absolute inset-0 left-1 w-full rotate-y-180 object-cover object-center opacity-0 drop-shadow-[-2px_0_red] sm:h-full sm:w-auto"
        priority
        onLoad={onImageLoad}
      />
      <Image
        id="glitch-img-two"
        src={hero}
        alt="Hero"
        className="pointer-events-none absolute inset-0 -left-1 w-full rotate-y-180 object-cover object-center opacity-0 mix-blend-soft-light drop-shadow-[-2px_0_blue] sm:h-full sm:w-auto"
        priority
        onLoad={onImageLoad}
      />
    </div>
  );
};

export default ImageContent;
