"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

const FeatureTable = () => {
  const [isPricingAnnual, setIsPricingAnnual] = useState(false);

  return (
    <div>
      {/* Title with price slider */}
      <div className="flex justify-between">
        {/* Title area */}
        <div>
          <p className="mb-[0.5em] text-[15px] font-medium sm:text-[19px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]">
            Feature Table
          </p>
          <p className="text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px]">
            Choose the perfect plan <br className="lg:hidden" /> for your
            business needs
          </p>
        </div>

        {/* Price slider area */}
        <div className="flex flex-col items-end gap-[1em] text-[12px] sm:flex-row-reverse sm:items-center sm:text-[12.75px] md:text-[13.5px] lg:text-[14.25px] xl:text-[15px] 2xl:text-[15px]">
          <div className="bg-foreground/10 border-foreground/15 relative w-fit rounded-[1em] border-2 p-[0.2em] text-[12px] font-medium backdrop-blur-[4px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
            <div
              className={cn(
                "bg-primary absolute top-0 bottom-0 left-0 m-[0.2em] w-[8.5ch] rounded-[0.8em] transition-all duration-300 ease-in",
                isPricingAnnual && "left-1/2 -translate-x-[0.2em]",
              )}
            ></div>

            <button
              className="relative w-[8.5ch] py-[0.8em]"
              onClick={() => setIsPricingAnnual(false)}
            >
              Monthly
            </button>
            <button
              className="relative w-[8.5ch] py-[0.8em]"
              onClick={() => setIsPricingAnnual(true)}
            >
              Annually
            </button>
          </div>

          <p className="text-primary">Save 15% on yearly plan!</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureTable;
