"use client";
import React from "react";
import { FaUsers, FaUser, FaDollarSign } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
const initialState = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti laborum vel illo.",
  },
  {
    icon: <FaDollarSign />,
    title: "best prices",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti laborum vel illo.",
  },
  {
    icon: <IoMdFitness />,
    title: "advanced equipment",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti laborum vel illo.",
  },
];
const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col` items-center gap-2 mb-8">
          <h2 className="h2 text-center">About us</h2>
          <p className="max-w-[680px] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim
            quibusdam soluta culpa eveniet, autem in. Error voluptate atque
            excepturi distinctio voluptatibus sapiente qui eaque eius.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
          {initialState.map((item, index) => {
            return (
              <div key={index}>
                <div>{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
