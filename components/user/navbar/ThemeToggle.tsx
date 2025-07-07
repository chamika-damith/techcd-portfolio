"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isThemeDark, setIsThemeDark] = useState(true);

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className="border-foreground/50 relative h-[1.8em] w-[4em] rounded-full border-2 p-[0.1em]"
      onClick={toggleTheme}
    >
      <div
        className={cn(
          "bg-foreground absolute top-0 bottom-0 left-[calc(100%-1.5em-0.1em)] my-auto size-[1.5em] rounded-full transition-all duration-300 ease-in",
          isThemeDark && "left-[0.1em]",
        )}
      ></div>
    </button>
  );
};

export default ThemeToggle;
