"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <section
      className="bg-membership  bg-cover bg-center relative py-8 xl:py-0 lg:h-[95vh] "
      id="prices"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto text-white h-full flex flex-col xl:pt-24 relative z-20 px-0"
      >
        <motion.h2
          variants={fadeIn("up", 0.6)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center text-accent mb-8"
        >
          Membership
        </motion.h2>
        <div>
          <MembershipSlider />
        </div>
      </motion.div>
    </section>
  );
};

export default Membership;
