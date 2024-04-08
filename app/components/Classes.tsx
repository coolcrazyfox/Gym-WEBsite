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
];

const Classes = () => {
  return (
    <section className="h-screen bg-green-300" id="class">
      <SuperButton text={"sed"} containerStyles="" />
    </section>
  );
};

export default Classes;
