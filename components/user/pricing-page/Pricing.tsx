import React from "react";

import { cn } from "@/lib/utils";
import bg from "@/public/images/pricing-page/pricing/bg.svg";
import Image from "next/image";

const rayClasses = [
  "mr-[3.178%] h-[72.657%] w-[5.527%]",
  "mr-[3.114%] h-[72.657%] w-[5.527%] bg-gradient-to-b from-[#0084F0]/40 to-transparent to-75%",
  "mr-[6.2%] h-[72.657%] w-[5.527%]",
  "mr-[2.751%] h-[72.657%] w-[2.142%] bg-gradient-to-b from-[#028EFC]/21 to-transparent",
  "mr-[2.751%] h-full w-[10.862%]",
  "mr-[5.93%] h-[64.96%] w-[20.308%]",
  "mr-[2.601%] h-[72.657%] w-[9.524%]",
  "mr-[1.591%] h-[72.657%] w-[3.261%]",
  "h-[66.816%] w-[9.801%]",
];

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
        <p className="bg-gradient-to-b from-white from-30% to-[#999999] bg-clip-text text-center text-[20px] font-semibold text-transparent uppercase xl:text-[60px]">
          Discover Products <br /> With the Best Pricing
        </p>
      </div>
    </section>
  );
};

export default Pricing;
