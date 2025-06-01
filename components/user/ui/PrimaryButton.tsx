import { cn } from "@/lib/utils";
import React from "react";

import { IoArrowForward } from "react-icons/io5";

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
        "font-secondary flex items-center gap-[0.8em] rounded-full rounded-tl-none border-[0.15em] ps-[1.5em] font-medium uppercase",
        className,
      )}
      {...props}
    >
      {text}
      <div
        className={cn(
          "bg-primary text-background relative m-[0.3em] size-[2em] rounded-full",
          iconStyles,
        )}
      >
        <IoArrowForward className="absolute inset-0 m-auto text-[1.5em]" />
      </div>
    </button>
  );
};

export default PrimaryButton;
