import React from "react";
import SectionTitle from "./SectionTitle";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <section className="overflow-hidden">
      <div className="px-container container mx-auto pt-[8em]">
        <SectionTitle />
        <HeaderContent />
      </div>
    </section>
  );
};

export default Header;
