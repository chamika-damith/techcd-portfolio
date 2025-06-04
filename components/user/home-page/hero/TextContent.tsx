"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

const TextContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: "power1.in" } })
        .from("#hero-sub-text", { opacity: 0, x: "-1em" })
        .to(
          "#hero-main-text-line-one",
          {
            text: "Support your ",
            duration: 1,
          },
          "-=0.3",
        )
        .to("#hero-main-text-line-two", {
          text: "favorits ",
          duration: 1,
        })
        .to("#hero-main-text-line-three", {
          text: "creator ?",
          duration: 1,
        });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative text-center sm:text-left">
      <p
        id="hero-sub-text"
        className="relative mt-[1.8em] text-[13px] sm:mt-0 sm:text-[15.2px] md:text-[17.4px] lg:text-[20.7px] xl:text-[24px] 2xl:text-[27.3px]"
      >
        JOIN THE EXCLUSIVE FAN
      </p>
      <div className="relative mx-auto my-[0.4em] h-[3.35em] w-[12ch] text-[36px] font-semibold uppercase sm:mx-0 sm:text-[41.2px] md:text-[46.4px] lg:text-[54.2px] xl:text-[62px] 2xl:text-[69.8px]">
        <p id="hero-main-text-line-one"></p>
        <p id="hero-main-text-line-two" className="text-primary"></p>
        <p id="hero-main-text-line-three"></p>
      </div>
      <p
        id="hero-sub-text"
        className="relative mb-[1em] text-[15px] sm:mb-[2em] sm:text-[17.2px] md:text-[19.4px] lg:text-[21.7px] xl:text-[24px] 2xl:text-[26.3px]"
      >
        JOIN THE EXCLUSIVE FAN <br /> COUMMUNITY AND GRAB OFFICAL <br /> MERCH
      </p>
    </div>
  );
};

export default TextContent;
