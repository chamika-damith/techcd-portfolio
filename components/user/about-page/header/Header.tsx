import React from "react";
import Image from "next/image";

import { BsArrowDown } from "react-icons/bs";
import SectionTitle from "./SectionTitle";
import img from "@/public/images/about-page/header/img.png";

const Header = () => {
  return (
    <section className="pt-[8em]">
      <div className="px-container container mx-auto grid grid-cols-1 gap-[1.5em] lg:grid-cols-10">
        <SectionTitle />
        <div className="relative flex h-[202px] items-end lg:col-span-4 lg:h-auto xl:col-span-3">
          <div className="bg-foreground text-background absolute bottom-0 left-0 aspect-square h-[23%] rounded-full lg:h-auto lg:w-[15%]">
            <BsArrowDown className="absolute inset-0 m-auto size-fit text-[18px]" />
          </div>
          <Image src={img} alt="" className="h-full w-fit lg:h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Header;
