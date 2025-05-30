import React from "react";
import Image from "next/image";

import { IoArrowForward } from "react-icons/io5";
import Banner from "./Banner";
import bg from "@/public/images/home-page/hero/hero-bg.svg";
import blur from "@/public/images/home-page/hero/bg-blur.svg";
import hero from "@/public/images/home-page/hero/hero.png";
import bitcoin from "@/public/images/home-page/hero/bitcoin.svg";

const Hero = () => {
  return (
    <section className="relative overflow-x-clip">
      {/* Square bg */}
      <Image
        src={bg}
        alt="Vector"
        className="absolute inset-0 w-full object-cover object-center"
        priority
      />

      {/* Blur blur (for screens <=639px)*/}
      <div className="to-primary absolute inset-0 bg-gradient-to-br from-transparent from-30% sm:hidden"></div>

      {/* Blur blur (for screens >639px)*/}
      <Image
        src={blur}
        alt="Vector"
        className="absolute inset-0 hidden w-full object-cover object-center sm:block"
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
            />
            <Image
              src={bitcoin}
              alt="Bitcoin Logo"
              className="absolute top-0 right-[10%] bottom-0 my-auto w-[42px] -translate-y-1/2 sm:w-[58.5px] md:w-[75px] lg:w-[101.5px] xl:w-[128px] 2xl:w-[154.5px]"
            />

            <Image
              src={hero}
              alt="Hero"
              className="w-full rotate-y-180 object-cover object-center drop-shadow-[5px_5px_5px_#0000004d] sm:h-full sm:w-auto"
              priority
            />
          </div>

          {/* Text area */}
          <div className="relative text-center sm:text-left">
            <p className="relative mt-[1.8em] text-[13px] sm:mt-0 sm:text-[15.2px] md:text-[17.4px] lg:text-[20.7px] xl:text-[24px] 2xl:text-[27.3px]">
              JOIN THE EXCLUSIVE FAN
            </p>
            <p className="relative my-[0.4em] text-[36px] font-semibold sm:text-[41.2px] md:text-[46.4px] lg:text-[54.2px] xl:text-[62px] 2xl:text-[69.8px]">
              SUPPORT YOUR <br /> <span className="text-primary">FAVORITS</span>
              <br /> CREATOR ?
            </p>
            <p className="relative mb-[1em] text-[15px] sm:mb-[2em] sm:text-[17.2px] md:text-[19.4px] lg:text-[21.7px] xl:text-[24px] 2xl:text-[26.3px]">
              JOIN THE EXCLUSIVE FAN <br /> COUMMUNITY AND GRAB OFFICAL <br />{" "}
              MERCH
            </p>

            {/* CTA */}
            <div className="font-secondary relative flex justify-center gap-[1.5em] text-[12px] font-medium sm:justify-start sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
              <button className="flex items-center gap-[0.8em] rounded-full rounded-tl-none border-[0.15em] ps-[1.5em]">
                JOIN THE FORUM
                <div className="bg-primary text-background relative m-[0.3em] size-[2em] rounded-full">
                  <IoArrowForward className="absolute inset-0 m-auto text-[1.5em]" />
                </div>
              </button>
              <button className="rounded-full border-[0.15em] px-[2em]">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <Banner />
    </section>
  );
};

export default Hero;
