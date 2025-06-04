import React from "react";

import PrimaryButton from "../../ui/PrimaryButton";

const CTA = () => {
  return (
    <div className="relative flex justify-center gap-[1.5em] text-[12px] sm:justify-start sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
      <PrimaryButton text="JOIN THE FORUM" />
      <button className="font-secondary rounded-full border-[0.15em] px-[2em] font-medium">
        SHOP NOW
      </button>
    </div>
  );
};

export default CTA;
