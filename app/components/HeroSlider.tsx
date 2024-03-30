"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SuperButton from "./SuperButton";

const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-48">
        <div>
          <h1 className="h1 text-center lg:text-left mb-2">
            <span> Breakthrough Your Limits, </span> Embrace Your Possibilities
          </h1>
          <p className="text-white italic text-center lg:text-left mb-4">
            Your Body, Your Journey, Your Succes
          </p>
          <SuperButton
            text={"Get started"}
            containerStyles="w-[196px] h-[62px] bg-red-300"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
