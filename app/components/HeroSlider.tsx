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
            <span> Breakthrough Your Limits, </span> Embrace Your Possibilities
          </h1>
          <p>Your Body, Your Journey, Your Succes</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
