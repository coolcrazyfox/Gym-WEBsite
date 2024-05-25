"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const initBrands = [
  { src: "/assets/img/brands/brand1.png", link: "" },
  { src: "/assets/img/brands/brand2.png", link: "" },
  { src: "/assets/img/brands/brand3.png", link: "" },
  { src: "/assets/img/brands/brand4.png", link: "" },
  { src: "/assets/img/brands/brand5.png", link: "" },
];
const brandContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.4, duration: 0.5, ease: "linear" },
  },
};
const brandItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.6, 0.3, 0.8] },
  },
};

const Brands = () => {
  return (
    <section className="py-8 " id="contact">
      <div className="container mx-auto  ">
        <motion.div
          variants={brandContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" grid grid-cols-2 lg:grid-cols-5 py-8"
        >
          {initBrands.map((brand, index) => {
            return (
              <motion.div variants={brandItem} key={index}>
                <Link className="group" href={brand.link}>
                  <Image
                    src={brand.src}
                    width={204}
                    height={106}
                    alt=""
                    className="opacity-50 group-hover:opacity-100 transition-all mx-auto "
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
