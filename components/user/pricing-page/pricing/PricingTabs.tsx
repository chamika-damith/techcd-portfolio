"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

const PricingTabs = () => {
  const [isPricingAnnual, setIsPricingAnnual] = useState(false);

  return (
    <div>
      <div className="bg-foreground/10 border-foreground/15 relative mx-auto mt-[1.5em] w-fit rounded-[1em] border-2 p-[0.2em] text-[12px] font-medium backdrop-blur-[4px] 2xl:text-[22px]">
        <div
          className={cn(
            "bg-primary absolute top-0 bottom-0 left-0 m-[0.2em] w-[8.5ch] rounded-[0.8em] transition-all duration-500 ease-in",
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
    </div>
  );
};

export default PricingTabs;
