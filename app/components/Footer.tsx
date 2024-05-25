"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import SuperButton from "./SuperButton";

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                width={117}
                height={55}
                alt=""
              />
            </Link>
            <p className="max-w-sm">text</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illions</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(510) 710-3464 (510) 710-3466</span>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-4">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>gymyourname@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="h4 text-accent mb-4">Recent blog post</h4>
            <div>
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 10, 2024
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SuperButton containerStyles="" text="" />
    </footer>
  );
};

export default Footer;
