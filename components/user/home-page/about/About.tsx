import React from "react";

import BrandCarousel from "./BrandCarousel";
import about from "@/public/images/home-page/about/about.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative pt-[10vw]">
      <div className="from-primary absolute inset-0 bg-gradient-to-br to-transparent"></div>

      <div className="px-container relative container mx-auto">
        <div className="flex items-center gap-[0.1em] text-[25px] sm:text-[38.75px] md:text-[52.5px] lg:text-[66.25px] xl:text-[80px] 2xl:text-[93.75px]">
          <p className="font-secondary shrink-0 bg-gradient-to-b from-white to-[#999999] bg-clip-text font-semibold text-transparent">
            About Me
          </p>
          <hr className="mt-[0.15em] w-full border-t-white" />
        </div>

        <div className="mx-auto aspect-[25/23] w-4/5">
          <Image src={about} alt="About" className="w-full" />
        </div>

        <div className="mt-[1em] mb-[1.5em] space-y-[1em] text-center text-[21px] sm:text-[21.75px] md:text-[22.5px] lg:text-[23.25px] xl:text-[24px] 2xl:text-[24.75px]">
          <p>
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
