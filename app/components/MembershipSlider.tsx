"use client";
import React from "react";
import SuperButton from "./SuperButton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaCheck } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";

const initMembershipData = [
  {
    title: "Gold",
    price: "199",
    benefits: [
      { icon: FaCheck, name: "Includes membership" },
      { icon: FaCheck, name: "Access to all GYM facilities" },
      { icon: FaRegWindowClose, name: "Diet plan included" },
      { icon: FaCheck, name: "health and fitness tips" },
      { icon: FaRegWindowClose, name: "Monday -- Friday GYM access " },
      { icon: FaCheck, name: "Full access to everything" },
      { icon: FaRegWindowClose, name: "No additional amenities" },
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
            <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
              <div className="py-5 px-[60px] border border-accent">
                <h4 className="h4">{m.title}</h4>
              </div>
              <div className="py-[30px] px-[60px]">
                <ul className="flex flex-col gap-5 mb-7">
                  {m.benefits.map((item, index) => {
                    return (
                      <li key={index}>
                        {" "}
                        <item.icon className="text-accent text-lg" />
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

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
