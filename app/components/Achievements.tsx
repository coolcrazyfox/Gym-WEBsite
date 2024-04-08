"use client";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { FaUsers, FaClock, FaTrophy, FaBriefcase } from "react-icons/fa";
import { fadeIn } from "@/lib/variants";

const initialStats = [
  { count: 250, icon: FaUsers, name: "training happy clients" },
  { count: 1577, icon: FaClock, name: "working hours" },
  { count: 25, icon: FaBriefcase, name: "training courses" },
  { count: 19, icon: FaTrophy, name: "international awards" },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      variants={fadeIn("up", 1)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {initialStats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                  <div
                    ref={ref}
                    className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full"
                  >
                    {isInView && (
                      <CountUp start={0} end={item.count} duration={6} />
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <item.icon className="text-3xl text-accent mb-2" />
                  <h4 className="h4">{item.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
