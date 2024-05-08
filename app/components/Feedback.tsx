"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { FaQuoteLeft } from "react-icons/fa";

const feedbackData = [
  {
    avatar: "/assets/img/feedback/sean.jpg",
    name: "Lee Sean",
    comment: "text",
  },
  {
    avatar: "/assets/img/feedback/alex.jpg",
    name: "Alex Shmeit",
    comment: "text",
  },
  {
    avatar: "/assets/img/feedback/chack.jpg",
    name: "Chack Damandrabot",
    comment: "text",
  },
  {
    avatar: "/assets/img/feedback/andrea.jpg",
    name: "Lee Sean",
    comment: "text",
  },
  {
    avatar: "/assets/img/feedback/leesean.jpg",
    name: "Andrea Cheanotte",
    comment: "text",
  },
  {
    avatar: "/assets/img/feedback/clark.jpg",
    name: "Clark Gandert",
    comment: "text",
  },
];

const Feedback = () => {
  return (
    <section className="py-12 xl:py-28" id="references">
      <div className="container mx-auto">
        <h2 className="h2 text-center">Our References</h2>
        <div className="">
          <Swiper>
            {feedbackData.map((f, index) => {
              return (
                <SwiperSlide key={index} className="h-full">
                  <div className="">
                    <Image
                      src={f.avatar}
                      width={90}
                      height={90}
                      alt={""}
                      className="border-2 border-accent rounded-full"
                    />
                  </div>
                  {f.name}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
