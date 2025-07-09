"use client";

import React, { useState } from "react";
import TitleArea from "./TitleArea";
import ContentArea from "./ContentArea";

const FeatureTable = () => {
  const [isPricingAnnual, setIsPricingAnnual] = useState(false);

  return (
    <div>
      {/* Title with price slider */}
      <TitleArea
        isPricingAnnual={isPricingAnnual}
        handleClick={setIsPricingAnnual}
      />

      <ContentArea />
    </div>
  );
};

export default FeatureTable;
