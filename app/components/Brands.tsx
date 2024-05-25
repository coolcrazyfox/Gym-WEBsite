"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const initBrands = [
  { src: "/assets/img/brands/brand_1.png", link: "" },
  { src: "/assets/img/brands/brand_2.png", link: "" },
  { src: "/assets/img/brands/brand_3.png", link: "" },
  { src: "/assets/img/brands/brand_4.png", link: "" },
  { src: "/assets/img/brands/brand_5.png", link: "" },
];

const Brands = () => {
  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto">
        <div>
          {initBrands.map((brand, index) => {
            return (
              <div key={index}>
                <Link className="group" href={brand.link}>
                  <Image
                    src={brand.src}
                    width={204}
                    height={106}
                    alt=""
                    className="opacity-50 group-hover:opacity-100 transition-all mx-auto"
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
