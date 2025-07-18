import React from "react";

import { FiHelpCircle } from "react-icons/fi";
import { FaCheck, FaMinus } from "react-icons/fa";

export type FeatureGroup = {
  section: string;
  items: Array<{
    name: string;
    info?: boolean;
    value: string;
  }>;
};

export type DesktopPlanDescriptionProps = {
  title: string;
  price: string;
  features: FeatureGroup[];
};

const DesktopPlanDescription = ({
  title,
  price,
  features,
}: DesktopPlanDescriptionProps) => {
  return (
    <div className="mx-auto hidden rounded-xl border border-neutral-700 bg-neutral-800 p-6 shadow-lg lg:block">
      <div className="mb-6 flex flex-col items-center gap-2">
        <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
          {title}
        </span>
        <span className="text-4xl font-bold text-white">
          {price === "0" ? "$0" : price === "Custom" ? "Custom" : `$${price}`}
        </span>
        <span className="text-xs text-neutral-400">/month</span>
      </div>
      {features.map((group, i) => (
        <div key={i}>
          <div className="bg-foreground/20 mb-[0.4em] rounded-[0.4em] px-[1em] py-[0.8em] text-[14px] font-semibold sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
            {group.section}
          </div>
          <div className="rounded-[0.4em] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
            {group.items.map((item, j) => (
              <div
                key={j}
                className="relative flex items-center justify-between gap-[4em] px-[1em] py-[1.5em]"
              >
                <div className="flex items-center gap-[0.3em]">
                  <span>{item.name}</span>
                  {item.info && (
                    <FiHelpCircle className="text-foreground/50" size={16} />
                  )}
                </div>
                <div>
                  {item.value === "check" && (
                    <FaCheck className="text-primary" />
                  )}
                  {item.value === "dash" && (
                    <FaMinus className="text-neutral-500" />
                  )}
                  {item.value !== "check" && item.value !== "dash" && (
                    <span className="font-semibold text-neutral-300">
                      {item.value}
                    </span>
                  )}
                </div>
                <div className="via-foreground absolute right-0 bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopPlanDescription;
