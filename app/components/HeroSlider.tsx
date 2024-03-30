"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SuperButton from "./SuperButton";
import SwiperNavButtons from "./SwiperNavButtons";

const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <h1 className="h1 text-center lg:text-left mb-2">
              <span> Breakthrough Your Limits, </span> Embrace Your
              Possibilities
            </h1>
            <p className="text-white italic text-center lg:text-left mb-4">
              Your Body, Your Journey, Your Succes
            </p>
            <SuperButton
              text={"Get started"}
              containerStyles="w-[196px] h-[62px] "
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperNavButtons containerStyles="" btnStyles="" iconStyles="" />
    </Swiper>
  );
};

export default HeroSlider;
