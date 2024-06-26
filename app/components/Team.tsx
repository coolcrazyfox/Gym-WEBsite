"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import SuperButton from "./SuperButton";

const trainerInitData = [
  {
    avatar: "/assets/img/trainers/nichol.jpg",
    name: "Cameron Nichol",
    role: " CrossFit coach",
    description:
      "Cameron Nichol is recognized for his expertise in rowing as a former Olympic rower and the founder of RowingWOD, where he utilizes his experience to enhance the rowing performance of CrossFit athletes. His approach to integrating rowing with CrossFit is designed to improve overall fitness and athletic ability.",
    social: [
      { icon: FaInstagramSquare, link: "https://instagram.com" },
      { icon: FaFacebookSquare, link: "https://facebook.com" },
      { icon: FaTwitterSquare, link: "https://twitter.com" },
    ],
  },

  {
    avatar: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: " BodyBuilder coach",
    description:
      "Monster of the bodybuilding profession David is an English former professional bodybuilder, and he is known for high-intensity training, and massive size, shredded glutes, and hamstrings. ",
    social: [
      { icon: FaInstagramSquare, link: "https://instagram.com" },
      { icon: FaFacebookSquare, link: "https://facebook.com" },
      { icon: FaTwitterSquare, link: "https://twitter.com" },
    ],
  },
  {
    avatar: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Clark",
    role: " CardioFitness coach",
    description:
      "Rosy Clark is a certified personal trainer and fitness nutrition specialist with nearly 10 years of experience training clients to reach their fitness goals. She created the QUEENTEAM workout program to include online workouts that people will enjoy doing.",
    social: [
      { icon: FaInstagramSquare, link: "https://instagram.com" },
      { icon: FaFacebookSquare, link: "https://facebook.com" },
      { icon: FaTwitterSquare, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
  {
    avatar: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Kaiser",
    role: " Fitness coach",
    description:
      "What makes Sofia a fitness expert worth following? She, too, values a holistic approach to fitness. She offers dance, yoga, and Pilates-based workouts that focus on the whole body, and she doesn’t rely solely on traditional training techniques – her high-energy classes often involve using props like weighted balls, jump ropes, and beach balls to keep you moving and engaged.",
    social: [
      { icon: FaInstagramSquare, link: "https://instagram.com" },
      { icon: FaFacebookSquare, link: "https://facebook.com" },
      { icon: FaTwitterSquare, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py- xl:h-[110vh]  " id="team">
      <div className="container mx-auto  h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6 text-accent"
        >
          Our trainers
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerInitData.map((trainer, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.avatar} fill alt="" />
                </div>
                <h4 className="h4 mb-2"> {trainer.name}</h4>
                <p className="uppercase text-xm tracking-[3px] mb-2 text-accent ">
                  {trainer.role}
                </p>
                <p className="mb-6 max-w-[320px] mx-auto md:min-h-[230px]  lg:min-h-[250px] ">
                  {trainer.description}
                </p>
                <div className="flex gap-12 justify-center">
                  {trainer.social.map((s, i) => {
                    return (
                      <div key={i}>
                        <Link
                          href={s.link}
                          className="hover:text-accent transition-all"
                        >
                          <s.icon className="text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <SuperButton
            containerStyles="w-[196px] h-[62px]"
            text="See all trainers"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
