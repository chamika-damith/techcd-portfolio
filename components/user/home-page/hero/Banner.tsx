"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import white from "@/public/images/home-page/hero/banner-white.svg";
import blue from "@/public/images/home-page/hero/banner-blue.svg";

const Banner = () => {
  const [bannerCount, setBannerCount] = useState(0);

  useEffect(() => {
    calBannerCount();

    window.addEventListener("resize", calBannerCount);
    return () => window.removeEventListener("resize", calBannerCount);
  }, []);

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
    <>
      {/* White banner */}
      <div className="mt-[2em] rotate-3 overflow-x-clip bg-white">
        <motion.div
          animate={{ x: ["-50%", 0] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="grid h-[30px] w-[200%] grid-cols-2 sm:h-[34.4px] md:h-[38.8px] lg:h-[45.4px] xl:h-[52px] 2xl:h-[58.6px]"
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
        </motion.div>
      </div>

      {/* Blue banner */}
      <div className="absolute right-0 bottom-0 left-0 -rotate-3 overflow-x-clip bg-[#0281F4]">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
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
        </motion.div>
      </div>
    </>
  );
};

export default Banner;
