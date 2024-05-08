"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SuperButton from "./SuperButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span> Bodies of </span>
              stamina & strength
            </motion.h1>
            {/* <p className="text-white italic text-center lg:text-left mb-4">
              Your Body, Your Journey, Your Success
            </p> */}
            {/* <p className="text-white italic text-center lg:text-left mb-4">
              No pain no gain
            </p> */}
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center lg:text-left mb-4"
            >
              GYM - YOUR NAME is a social exercise platform that allows user to
              easily track their health progress, exercise and fitness patterns,
              create their own programs and share them with the larger
              community.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <SuperButton
                text={"Join Now"}
                containerStyles="w-[196px] h-[62px] "
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span> No pain </span>
              No gain
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center lg:text-left mb-4"
            >
              GYM - YOUR NAME is a stay fit and healthy with our custom exercise
              routines.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <SuperButton
                text={"Join Now"}
                containerStyles="w-[196px] h-[62px] "
              />
            </motion.div>
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
