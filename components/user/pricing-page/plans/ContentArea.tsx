import React from "react";

import PlanCard from "./PlanCard";
import MobilePlanDescription from "./MobilePlanDescription";
import DesktopPlanDescription from "./DesktopPlanDescription";

const ContentArea = () => {
  return (
    <div className="flex flex-col items-end gap-[2em]">
      <PlanCard title="Free" price="0" />
      <MobilePlanDescription />
      <DesktopPlanDescription />
    </div>
  );
};

export default ContentArea;
