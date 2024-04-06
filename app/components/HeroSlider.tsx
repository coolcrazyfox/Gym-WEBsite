"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SuperButton from "./SuperButton";
import SwiperNavButtons from "./SwiperNavButtons";

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <h1 className="h1 text-center lg:text-left mb-2">
              <span> No pain </span> No gain
            </h1>
            <p className="text-white italic text-center lg:text-left mb-4">
              Your Body, Your Journey, Your Succes
            </p>
            <p className="text-white italic text-center lg:text-left mb-4">
              GYM - YOUR NAME is a social exercise platform that allows user to
              easily track their health progress, exercise and fitness patterns,
              create their own programs and share them with the larger
              community.
            </p>
            <SuperButton
              text={"Join Now"}
              containerStyles="w-[196px] h-[62px] "
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperNavButtons
        containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1"
        btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300 "
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
