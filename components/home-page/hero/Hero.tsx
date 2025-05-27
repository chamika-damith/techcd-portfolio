import React from "react";
import Image from "next/image";

import bg from "@/public/images/home-page/hero/hero-bg.svg";
import blur from "@/public/images/home-page/hero/bg-blur.svg";

const Hero = () => {
  return (
    <section className="relative h-dvh">
      <Image
        src={bg}
        alt="Vector"
        className="absolute inset-0 object-cover object-center"
      />
      <Image
        src={blur}
        alt="Vector"
        className="absolute inset-0 w-full object-cover object-center"
      />

      <div className="px-container container mx-auto">Hero</div>
    </section>
  );
};

export default Hero;
