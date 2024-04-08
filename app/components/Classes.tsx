"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import SuperButton from "./SuperButton";

const initClasses = [
  {
    name: "bodybuilding ",
    image: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Bodybuilding is the practice of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy.",
  },
  {
    name: "fitness ",
    image: "/assets/img/classes/fitness.jpg",
    description:
      "Fitness refers to the ability of your body systems to work together efficiently to allow you to be healthy and perform activities of daily living. ",
  },
  {
    name: "cardio ",
    image: "/assets/img/classes/cardio.jpg",
    description:
      "Cardiovascular fitness refers to a health-related component of physical fitness that is brought about by sustained physical activity",
  },
  {
    name: "crossfit ",
    image: "/assets/img/classes/crossfit.jpg",
    description:
      "Bodybuilding is the practice of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy.",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {initClasses.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
            >
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image src={item.image} fill className="object-cover" alt="" />
              <div className="z-30 max-w-[380px]  text-center flex flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.4)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-accent"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-white"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <SuperButton
                    text={"let start"}
                    containerStyles="h-[46px]w-[184px] px-1"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Classes;
