"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import SuperButton from "./SuperButton";

const initTrainer = [
  { name: "rosy", link: "/assets/img/trainers/rosy.jpg" },
  { name: "david", link: "/assets/img/trainers/david.jpg" },
  { name: "matt", link: "/assets/img/trainers/matt.jpg" },
  { name: "sofia", link: "/assets/img/trainers/sofia.jpg" },
  { name: "nichol", link: "/assets/img/trainers/nichol.jpg" },
  { name: "bill", link: "/assets/img/trainers/bill.jpg" },
  { name: "bob", link: "/assets/img/trainers/bob.jpg" },
];
const initContact = [
  { name: "telegram", src: "", img: <FaTelegram /> },
  { name: "linkedin", src: "", img: <FaLinkedinIn /> },
  { name: "github", src: "", img: <FaGithub /> },
];

const footerContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.6, duration: 0.5, ease: "linear" },
  },
};
const footerItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.6, 0.3, 0.8] },
  },
};

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24" id="contact">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                width={117}
                height={55}
                alt=""
              />
            </Link>
            <p className="max-w-sm">Contact information: </p>
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
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Recent blog post</h4>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 10, 2024
                </p>
              </Link>
            </div>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  November 20, 2024
                </p>
              </Link>
            </div>
            <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  December 22, 2024
                </p>
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            <div className="flex flex-wrap gap-2">
              {initTrainer.map((t, index) => {
                return (
                  <Link href="#">
                    <Image src={t.link} width={100} height={100} alt="" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                porro quae sequi hic consectetur inventore ullam quaerat
                similique voluptas labore molestias ad unde autem, amet
                sapiente, odit voluptates corrupti. Mollitia?
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email"
                  className="h-[50px] px-4 outline-none text-primary-300"
                />
                <SuperButton containerStyles="h-[50px] px-8" text="send" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Malets Andrei 2024</span>
            <ul className="flex gap-4 text-xl">
              {initContact.map((contact, index) => {
                return (
                  <li>
                    <Link
                      className="text-white hover:text-accent transition-all "
                      href={contact.src}
                    >
                      {contact.img}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
