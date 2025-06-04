"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import white from "@/public/images/home-page/hero/banner-white.svg";
import blue from "@/public/images/home-page/hero/banner-blue.svg";

const Banner: React.FC<{ playAnimation: boolean }> = ({ playAnimation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bannerCount, setBannerCount] = useState(0);

  useEffect(() => {
    calBannerCount();

    window.addEventListener("resize", calBannerCount);
    return () => window.removeEventListener("resize", calBannerCount);
  }, []);

  useGSAP(
    () => {
      const tl = gsap
        .timeline({
          defaults: { duration: 20, ease: "none" },
          repeat: -1,
          paused: true,
        })
        .to("#banner-white", {
          xPercent: 0,
        })
        .to(
          "#banner-blue",
          {
            xPercent: -50,
          },
          "<",
        );

      if (playAnimation) tl.play();
    },
    { scope: containerRef, dependencies: [playAnimation] },
  );

  const calBannerCount = () => {
    const windowW = window.innerWidth;
    let bannerImgW: number;

    if (windowW < 640) bannerImgW = Math.floor(windowW / (30 * 3));
    else if (windowW < 768) bannerImgW = Math.floor(windowW / (34.4 * 3));
    else if (windowW < 1024) bannerImgW = Math.floor(windowW / (38.8 * 3));
    else if (windowW < 1280) bannerImgW = Math.floor(windowW / (45.4 * 3));
    else if (windowW < 1536) bannerImgW = Math.floor(windowW / (52 * 3));
    else bannerImgW = Math.floor(windowW / (58.6 * 3));

    setBannerCount(bannerImgW);
  };

  return (
    <div ref={containerRef} className="relative z-[1] mt-[2em] sm:mt-0">
      {/* White banner */}
      <div className="rotate-3 overflow-x-clip bg-white shadow-[0.1em_0.1em_0.5em_rgba(0,0,0,0.4)] lg:absolute lg:right-0 lg:bottom-0 lg:left-0">
        <div
          id="banner-white"
          className="grid h-[30px] w-[200%] -translate-x-1/2 grid-cols-2 sm:h-[34.4px] md:h-[38.8px] lg:h-[45.4px] xl:h-[52px] 2xl:h-[58.6px]"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex justify-around">
              {Array.from({ length: bannerCount }).map((_, i) => (
                <div key={i} className="size-full">
                  <Image
                    src={white}
                    alt="Banner"
                    className="size-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Blue banner */}
      <div className="absolute right-0 bottom-0 left-0 -rotate-3 overflow-x-clip bg-[#0281F4] shadow-[0.1em_0.1em_0.5em_rgba(0,0,0,0.4)]">
        <div
          id="banner-blue"
          className="grid h-[30px] w-[200%] grid-cols-2 sm:h-[34.4px] md:h-[38.8px] lg:h-[45.4px] xl:h-[52px] 2xl:h-[58.6px]"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex justify-around">
              {Array.from({ length: bannerCount }).map((_, i) => (
                <div key={i} className="size-full">
                  <Image
                    src={blue}
                    alt="Banner"
                    className="size-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
