"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { brandCarouselData } from "@/lib/constants";

const BrandCarousel = () => {
  return (
    <div className="relative z-[1] overflow-clip">
      {/* Top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      {/* Carousel */}
      <motion.div
        animate={{ x: ["-50%", 0] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="my-[2%] grid w-[400%] grid-cols-12 sm:w-[300%] lg:w-[200%]"
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <Fragment key={i}>
            {brandCarouselData.map(({ id, src, alt }) => (
              <div
                key={id}
                tabIndex={-1}
                className="flex h-[50px] items-center justify-center opacity-80 transition-opacity duration-300 hover:opacity-100 focus:opacity-100 sm:h-[62.5px] md:h-[75px] lg:h-[87.5px] xl:h-[93.8px] 2xl:h-[100px]"
              >
                <Image
                  src={src}
                  alt={alt}
                  className="size-full object-contain"
                />
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>

      {/* Bottom line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      {/* Side gradients */}
      {/* <div className="absolute top-0 bottom-0 left-0 w-[4%] bg-gradient-to-r from-[#028EFC] to-transparent"></div> */}
      {/* <div className="from-background absolute top-0 right-0 bottom-0 w-[4%] bg-gradient-to-l to-transparent"></div> */}
    </div>
  );
};

export default BrandCarousel;
