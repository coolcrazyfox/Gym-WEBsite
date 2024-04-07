"use client";
import React from "react";
import { FaUsers, FaDollarSign } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./Achievements";

const initialState = [
  {
    icon: <FaUsers />,
    title: "personal trainers",
    description:
      "Hire a personal trainer at our gym and reach your fitness goals faster!  Our trainers will  create a personalized workout plan tailored to your needs and guide you thru your  process of getting in  shape.",
  },
  {
    icon: <FaDollarSign />,
    title: "best prices",
    description:
      "We have the best prices special for you. Total exercises can be choose on your programs",
  },
  {
    icon: <IoMdFitness />,
    title: "advanced equipment",
    description: "We only have modern machines and equipment.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col` items-center gap-2 mb-8">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[680px] mx-auto text-center"
          >
            We aim to inspire individuals to prioritize their health and to show
            them that a fit body is a key component of a healthy life.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {initialState.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4 border shadow-lg p-10`"
              >
                <div className="text-4xl bg-accent text-white w-[80px] h-[80px] rounded-full flex justify-center items-center m-2">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-primary-300 ">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        <Achievements />
      </div>
    </section>
  );
};

export default About;
