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
              <li>
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illions</span>
              </li>
            </ul>
          </div>
          <div className="bg-red-300/20">blog</div>
          <div className="bg-red-300/20">gallery</div>
          <div className="bg-red-300/20">newsletter</div>
        </div>
      </div>
      <SuperButton containerStyles="" text="" />
    </footer>
  );
};

export default Footer;
