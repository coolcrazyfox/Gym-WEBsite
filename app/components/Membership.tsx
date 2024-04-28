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
      <div className="container mx-auto text-accent h-full flex flex-col xl:pt-24 relative z-20 px-0">
        <h2>Membership</h2>
        <div>
          <MembershipSlider />
        </div>
      </div>
    </section>
  );
};

export default Membership;
