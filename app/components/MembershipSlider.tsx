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
    title: "Standart",
    price: "40",
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
    title: "Premium",
    price: "100",
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
    price: "250",
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
    <Swiper>
      <SwiperSlide>
        1<SuperButton text="1" containerStyles="" />
      </SwiperSlide>
      <SwiperSlide>
        1<SuperButton text="1" containerStyles="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MembershipSlider;
