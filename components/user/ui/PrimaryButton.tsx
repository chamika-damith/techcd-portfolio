"use client";

import React from "react";

import { IoArrowForward } from "react-icons/io5";

import { cn } from "@/lib/utils";
import classes from "@/styles/primary-button.module.css";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  iconStyles?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className,
  text,
  iconStyles = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        "font-secondary group flex items-center gap-[0.8em] overflow-hidden rounded-full rounded-tl-none border-[0.15em] ps-[1.5em] font-medium uppercase backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-primary absolute top-0 left-0 size-[2em] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[0.4em] brightness-125 transition-opacity delay-500 duration-500 ease-in group-hover:opacity-100",
          classes["blue-ball"],
        )}
      ></div>
      <div className="group-hover:bg-background/60 absolute inset-0 m-[0.2em] rounded-full rounded-tl-none bg-transparent backdrop-blur-sm transition-all duration-500"></div>
      <span className="relative">{text}</span>
      <div
        className={cn(
          "bg-primary text-background relative m-[0.3em] size-[2em] rounded-full transition-all duration-500 group-hover:bg-transparent group-hover:text-white",
          iconStyles,
        )}
      >
        <IoArrowForward className="absolute inset-0 m-auto text-[1.5em]" />
      </div>
    </button>
  );
};

export default PrimaryButton;
