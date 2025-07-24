import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import img from "@/public/images/about-page/story/img.png";

const Story = () => {
  return (
    <section>
      <div className="px-container container mx-auto">
        <SectionTitle className="lg:hidden" />

        <div className="grid grid-cols-1 gap-[1.5em] lg:grid-cols-10 lg:items-end">
          <div className="text-[13px] sm:text-[15px] md:text-[17px] lg:col-span-6 lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
            <SectionTitle className="mb-[0.5em] hidden lg:flex" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="h-[220px] lg:col-span-4 lg:h-auto">
            <Image
              src={img}
              alt=""
              className="h-full w-fit lg:h-auto lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
