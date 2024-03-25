import React from "react";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="h-[80vh] lg:h-[912px] bg-gray-400" id="home">
      <div className="container mx-auto ">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
