import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { rayClasses } from "@/lib/constants";
import bg from "@/public/images/pricing-page/pricing/bg.svg";

const Pricing = () => {
  return (
    <section className="relative h-dvh">
      <div className="absolute inset-0 overflow-clip">
        <div className="flex size-full translate-x-[5%]">
          {rayClasses.map((e, i) => (
            <div
              key={i}
              className={cn(
                "origin-top-right rotate-[25deg] bg-gradient-to-b from-[#028EFC]/40 to-transparent",
                e,
              )}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 backdrop-blur-[40px]"></div>
      </div>

      <Image src={bg} alt="Vector" className="absolute inset-0 size-full" />

      <div className="px-container relative container mx-auto pt-[8em]">
        <div className="border-primary/30 mx-auto w-fit rounded-full border bg-white/10 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
          <p className="bg-gradient-to-b from-white from-30% to-[#999999] bg-clip-text px-[1em] py-[0.4em] text-transparent">
            Bring your business to the best scale
          </p>
        </div>
        <h1 className="my-[0.2em] bg-gradient-to-b from-white from-30% to-[#999999] bg-clip-text text-center text-[26px] font-semibold text-transparent uppercase sm:text-[34px] md:text-[43px] lg:text-[51px] xl:text-[60px] 2xl:text-[68px]">
          Discover Products <br /> With the Best Pricing
        </h1>
        <p className="mx-auto w-[36ch] text-center text-[12px] uppercase sm:text-[13px] md:text-[15px] lg:w-[53ch] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
          Select from best plan, ensuring a perfect match. Need more or less?
          Customize your subscription for a seamless fit!
        </p>
      </div>
    </section>
  );
};

export default Pricing;
