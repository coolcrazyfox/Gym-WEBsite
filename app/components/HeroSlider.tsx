"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-48">
        <div>
          <h1 className="h1">
            <span> Where hard</span> work meets success
          </h1>
          <p>Where hard work meets success</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
