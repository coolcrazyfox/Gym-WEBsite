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
];

const Classes = () => {
  return (
    <section className="h-screen bg-green-300" id="class">
      <SuperButton text={"sed"} containerStyles="" />
    </section>
  );
};

export default Classes;
