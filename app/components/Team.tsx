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
    avatar: "/assets//img/trainers/david.jpg",
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
    avatar: "/assets//img/trainers/rosy.jpg",
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
    avatar: "/assets//img/trainers/matt.jpg",
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
    avatar: "/assets//img/trainers/sofia.jpg",
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
    <section className="h-screen bg-pink-300 " id="team">
      Team
    </section>
  );
};

export default Team;
