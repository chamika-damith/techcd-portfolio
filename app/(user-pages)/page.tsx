import React from "react";

import About from "@/components/user/home-page/about/About";
import Hero from "@/components/user/home-page/hero/Hero";
import Community from "@/components/user/home-page/community/Community";
import Store from "@/components/user/home-page/store/Store";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Community />
      <Store />
    </>
  );
};

export default HomePage;
