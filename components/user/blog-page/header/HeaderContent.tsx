import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { ImArrowUpRight2 } from "react-icons/im";

const HeaderContent = () => {
  return (
    <div className="bg-foreground/10 relative mt-[1.5em] aspect-video overflow-hidden rounded-[1em]">
      <div className="absolute right-0 bottom-0 left-0 rounded-[1em] bg-black/30 px-[3em] py-[2em] text-[20px] backdrop-blur-sm">
        <div className="grid grid-cols-10">
          <div className="col-span-9">
            <p className="text-[28px] font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="mt-[0.4em] font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, standard dummy text ever
            </p>
          </div>
          <div className="col-span-1 flex justify-end">
            <ImArrowUpRight2 className="text-foreground text-[2em]" />
          </div>
        </div>

        <div className="mt-[1.5em] flex items-center justify-between">
          <div className="flex items-center gap-[1em]">
            <div className="border-foreground/30 w-fit rounded-full border p-[0.5em]">
              <IoCalendarOutline />
            </div>
            <p> June 25, 2025</p>
          </div>
          <div className="flex gap-[0.5em]">
            <div className="border-foreground/30 rounded-full border px-[3em] py-[0.4em]">
              Test
            </div>
            <div className="border-foreground/30 rounded-full border px-[3em] py-[0.4em]">
              Test
            </div>
            <div className="border-foreground/30 rounded-full border px-[3em] py-[0.4em]">
              Test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
