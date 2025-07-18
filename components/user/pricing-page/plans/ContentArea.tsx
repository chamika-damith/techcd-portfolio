import React from "react";
import PlanCard from "./PlanCard";
import MobilePlanDescription from "./MobilePlanDescription";
import DesktopPlanDescription, { FeatureGroup } from "./DesktopPlanDescription";

const features: FeatureGroup[] = [
  {
    section: "FEATURES",
    items: [
      { name: "Customizable Workflows", info: true, value: "100" },
      { name: "Project Planning", info: true, value: "check" },
      { name: "Time Tracking", info: true, value: "check" },
    ],
  },
  {
    section: "FEATURES",
    items: [
      { name: "Gantt Charts", info: true, value: "dash" },
      { name: "Agile Methodology Support", info: true, value: "check" },
      { name: "Reporting and Analytics", info: true, value: "dash" },
      { name: "Team and Individual Dashboards", info: true, value: "dash" },
    ],
  },
  {
    section: "FEATURES",
    items: [
      { name: "Document Management", info: true, value: "dash" },
      { name: "Client Collaboration", info: true, value: "dash" },
      { name: "Mobile App Integration", info: true, value: "dash" },
    ],
  },
];

const plans = [
  { title: "Free", price: "0", features },
  { title: "Pro", price: "12", features },
  { title: "Business", price: "24", features },
  { title: "Enterprise", price: "Custom", features },
];

const ContentArea = () => {
  return (
    <div className="flex w-full flex-col items-end gap-[2em]">
      <PlanCard title="Free" price="0" />
      <MobilePlanDescription />
      <div className="hidden w-full justify-center gap-6 lg:flex">
        {plans.map((plan) => (
          <DesktopPlanDescription
            key={plan.title}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
