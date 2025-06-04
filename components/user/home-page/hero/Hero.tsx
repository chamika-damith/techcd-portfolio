"use client";

import React, { useState } from "react";
import Image from "next/image";

import Loader from "./Loader";
import TextContent from "./TextContent";
import CTA from "./CTA";
import Banner from "./Banner";

import bg from "@/public/images/home-page/hero/hero-bg.svg";
import blur from "@/public/images/home-page/hero/bg-blur.svg";
import hero from "@/public/images/home-page/hero/hero.png";
import bitcoin from "@/public/images/home-page/hero/bitcoin.svg";

const TOTAL_IMAGES = 5;

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => setImagesLoaded((prev) => prev + 1);
  const allImagesLoaded = imagesLoaded === TOTAL_IMAGES;

  return (
    <section className="relative overflow-x-clip">
      {/* Loading screen */}
      <Loader playAnimation={allImagesLoaded} />

      {/* Square bg */}
      <Image
        src={bg}
        alt="Vector"
        className="absolute inset-0 w-full object-cover object-center"
        priority
        onLoadingComplete={handleImageLoad}
      />

      {/* Blur blur (for screens <=639px)*/}
      <div className="to-primary absolute inset-0 bg-gradient-to-br from-transparent from-30% sm:hidden"></div>

      {/* Blur blur (for screens >639px)*/}
      <Image
        src={blur}
        alt="Vector"
        className="absolute inset-0 hidden w-full object-cover object-center sm:block"
        priority
        onLoadingComplete={handleImageLoad}
      />

      {/* Container */}
      <div className="px-container relative container mx-auto">
        <div className="relative py-[1em] sm:py-[4em] lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
          {/* Image area */}
          <div className="relative mx-auto aspect-[134/117] w-3/4 sm:absolute sm:right-0 sm:bottom-0 sm:aspect-auto sm:h-[95%] sm:w-auto 2xl:h-[90%]">
            <Image
              src={bitcoin}
              alt="Bitcoin Logo"
              className="absolute top-[10%] right-0 left-0 mx-auto w-[42px] -translate-x-[90%] sm:w-[58.5px] md:w-[75px] lg:w-[101.5px] xl:w-[128px] 2xl:w-[154.5px]"
              priority
              onLoadingComplete={handleImageLoad}
            />
            <Image
              src={bitcoin}
              alt="Bitcoin Logo"
              className="absolute top-0 right-[10%] bottom-0 my-auto w-[42px] -translate-y-1/2 sm:w-[58.5px] md:w-[75px] lg:w-[101.5px] xl:w-[128px] 2xl:w-[154.5px]"
              priority
              onLoadingComplete={handleImageLoad}
            />

            <Image
              src={hero}
              alt="Hero"
              className="w-full rotate-y-180 object-cover object-center drop-shadow-[5px_5px_5px_#0000004d] sm:h-full sm:w-auto"
              priority
              onLoadingComplete={handleImageLoad}
            />
          </div>

          {/* Text area */}
          <TextContent playAnimation={allImagesLoaded} />

          {/* CTA */}
          <CTA />
        </div>
      </div>

      <Banner playAnimation={allImagesLoaded} />
    </section>
  );
};

export default Hero;
