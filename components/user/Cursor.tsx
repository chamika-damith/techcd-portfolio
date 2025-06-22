"use client";

import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      console.log(e.clientX);
      console.log(e.clientY);

      const cursor = cursorRef.current;
      if (!cursor) return;

      cursor.style.left = e.clientX.toString() + "px";
      cursor.style.top = e.clientY.toString() + "px";
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="bg-primary fixed top-1/2 left-1/2 z-[999] aspect-square w-[1%] rounded-full mix-blend-hard-light backdrop-blur-sm"
    ></div>
  );
};

export default Cursor;
