"use client";
import React from "react";
import SuperButton from "./SuperButton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaClosedCaptioning, FaCheck } from "react-icons/fa6";

const initMembershipData = [
  {
    title: "Gold",
    price: "199",
    benefits: [
      { icon: FaCheck, name: "Includes membership" },
      { icon: FaCheck, name: "Access to all GYM facilities" },
      { icon: FaClosedCaptioning, name: "Diet plan included" },
      { icon: FaCheck, name: "health and fitness tips" },
      { icon: FaClosedCaptioning, name: "Monday -- Friday GYM access " },
      { icon: FaCheck, name: "Full access to everything" },
      { icon: FaClosedCaptioning, name: "No additional amenities" },
    ],
  },
  {
    title: "Platinum",
    price: "499",
    benefits: [
      { icon: FaCheck, name: "Includes membership" },
      { icon: FaCheck, name: "Access to all GYM facilities" },
      { icon: FaCheck, name: "Diet plan included" },
      { icon: FaCheck, name: "health and fitness tips" },
      { icon: FaClosedCaptioning, name: "Monday -- Friday GYM access " },
      { icon: FaCheck, name: "Full access to everything" },
      { icon: FaClosedCaptioning, name: "No additional amenities" },
    ],
  },
  {
    title: "Unlimited",
    price: "1199",
    benefits: [
      { icon: FaCheck, name: "Includes membership" },
      { icon: FaCheck, name: "Access to all GYM facilities" },
      { icon: FaCheck, name: "Diet plan included" },
      { icon: FaCheck, name: "health and fitness tips" },
      { icon: FaCheck, name: "Monday -- Friday GYM access " },
      { icon: FaCheck, name: "Full access to everything" },
      { icon: FaCheck, name: "No additional amenities" },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      className="min-h-[680px]"
    >
      {initMembershipData.map((m, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              soluta iure, fugit incidunt molestias, nulla voluptates temporibus
              totam optio beatae quis, quo molestiae? Earum delectus rem ab
              eveniet nulla obcaecati!
            </div>
            <span className="flex flex-row px-2 border bg-grey-300 w-[100px] bg-slate-500 bg-opacity-5 border-accent rounded-sm">
              $ <div className="mx-2">{m.price}</div>
            </span>

            <SuperButton
              text={m.title}
              containerStyles="min-w-[80px] h-[30px] m-1 p-1"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;
