import React from "react";

import BrandCarousel from "./BrandCarousel";
import about from "@/public/images/home-page/about/about.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative pt-[10vw] lg:pt-0 xl:-mt-[2vw]">
      {/* Gradient (for screens <1024px) */}
      <div className="from-primary absolute inset-0 bg-gradient-to-br to-transparent lg:hidden"></div>

      <div className="px-container relative container mx-auto lg:mb-[1.5em] lg:grid lg:grid-cols-11 lg:items-end">
        {/* Title (for screens <1024px) */}
        <div className="flex items-center gap-[0.1em] text-[25px] sm:text-[38.75px] md:text-[52.5px] lg:hidden lg:text-[66.25px] xl:text-[80px] 2xl:text-[93.75px]">
          <p className="font-secondary shrink-0 bg-gradient-to-b from-white to-[#999999] bg-clip-text font-semibold text-transparent">
            About Me
          </p>
          <hr className="mt-[0.15em] w-full border-t-white" />
        </div>

        {/* Image area */}
        <div className="mx-auto aspect-[25/23] w-4/5 sm:w-3/5 md:w-1/2 lg:relative lg:z-[1] lg:col-span-6 lg:w-full">
          <Image src={about} alt="About" className="w-full" />
        </div>

        {/* Text area */}
        <div className="mt-[1em] mb-[1.5em] flex flex-col items-end text-center text-[21px] sm:text-[21.75px] md:text-[22.5px] lg:col-span-5 lg:text-left lg:text-[23.25px] xl:text-[24px] 2xl:mb-[3em] 2xl:text-[24.75px]">
          {/* Title (for screens >=1024px) */}
          <div className="mb-[0.2em] hidden w-[120%] text-[25px] sm:text-[38.75px] md:text-[52.5px] lg:flex lg:items-center lg:gap-[0.1em] lg:text-[66.25px] xl:mb-[0.6em] xl:text-[80px] 2xl:text-[93.75px]">
            <p className="font-secondary relative z-[1] shrink-0 bg-gradient-to-b from-white to-[#999999] bg-clip-text font-semibold text-transparent">
              About Me
            </p>
            <hr className="mt-[0.15em] w-full border-t-white" />
          </div>

          <p className="mb-[1em]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <BrandCarousel />
    </section>
  );
};

export default About;
