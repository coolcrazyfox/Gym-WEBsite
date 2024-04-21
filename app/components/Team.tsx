"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import {
  FaInstagram,
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
      { icon: FaInstagram, link: "https://instagram.com" },
      { icon: FaFacebookSquare, link: "https://facebook.com" },
      { icon: FaTwitterSquare, link: "https://twitter.com" },
    ],
  },
  {
    avatar: "/assets/img/trainers/rosy.jpg",
    name: "Cameron Nichol",
    role: " CrossFit coach",
    description:
      "Cameron Nichol is recognized for his expertise in rowing as a former Olympic rower and the founder of RowingWOD, where he utilizes his experience to enhance the rowing performance of CrossFit athletes. His approach to integrating rowing with CrossFit is designed to improve overall fitness and athletic ability.",
    social: [
      { icon: FaInstagram, link: "https://instagram.com" },
      { icon: FaFacebookSquare, link: "https://facebook.com" },
      { icon: FaTwitterSquare, link: "https://twitter.com" },
    ],
  },
  {
    avatar: "/assets/img/trainers/david.jpg",
    name: "Cameron Nichol",
    role: " BodyBuilder coach",
    description:
      "Cameron Nichol is recognized for his expertise in rowing as a former Olympic rower and the founder of RowingWOD, where he utilizes his experience to enhance the rowing performance of CrossFit athletes. His approach to integrating rowing with CrossFit is designed to improve overall fitness and athletic ability.",
    social: [
      { icon: FaInstagram, link: "https://instagram.com" },
      { icon: FaFacebookSquare, link: "https://facebook.com" },
      { icon: FaTwitterSquare, link: "https://twitter.com" },
    ],
  },
  {
    avatar: "/assets/img/trainers/sofia.jpg",
    name: "Cameron Nichol",
    role: " CrossFit coach",
    description:
      "Cameron Nichol is recognized for his expertise in rowing as a former Olympic rower and the founder of RowingWOD, where he utilizes his experience to enhance the rowing performance of CrossFit athletes. His approach to integrating rowing with CrossFit is designed to improve overall fitness and athletic ability.",
    social: [
      { icon: FaInstagram, link: "https://instagram.com" },
      { icon: FaFacebookSquare, link: "https://facebook.com" },
      { icon: FaTwitterSquare, link: "https://twitter.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py- xl:h-[110vh] " id="team">
      <div className="container mx-auto  h-full flex flex-col items-center justify-center">
        <h2 className="h2 text-center mb-6">Our trainers</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerInitData.map((trainer, index) => {
            return (
              <div key={index}>
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.avatar} fill alt="" />
                </div>
                <h4> {trainer.name}</h4>
                <p>{trainer.role}</p>
                <p>{trainer.description}</p>
                <div>
                  {trainer.social.map((s, i) => {
                    return (
                      <div key={i}>
                        <Link href={s.link}>
                          <s.icon className="text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
