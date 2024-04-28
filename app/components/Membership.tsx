"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <section className="h-screen bg-blue-400" id="prices">
      <div className="container mx-auto">
        <h2>Membership</h2>
        <div>
          <MembershipSlider />
        </div>
      </div>
    </section>
  );
};

export default Membership;
