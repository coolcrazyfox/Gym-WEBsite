"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const initBrands = [
  { src: "/assets/img/brands/brand1.png", link: "" },
  { src: "/assets/img/brands/brand2.png", link: "" },
  { src: "/assets/img/brands/brand3.png", link: "" },
  { src: "/assets/img/brands/brand4.png", link: "" },
  { src: "/assets/img/brands/brand5.png", link: "" },
];

const Brands = () => {
  return (
    <section className="h-[400px] bg-gray-400" id="contact">
      <div className="container mx-auto  ">
        <div className="border border-red-600">
          {initBrands.map((brand, index) => {
            return (
              <div key={index}>
                <Link className="group" href={brand.link}>
                  <Image
                    src={brand.src}
                    width={204}
                    height={106}
                    alt=""
                    className="opacity-50 group-hover:opacity-100 transition-all mx-auto border border-blue-400"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
