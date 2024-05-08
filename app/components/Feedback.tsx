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
    name: "Sean Chun",
    date: "Mai 2024",
    comment:
      "This experience was amazing, I’m glad to have to have gone here because the classes were fulfilling, the location was beautiful and everything A-Z lived up to my ecxpectations.",
  },
  {
    avatar: "/assets/img/feedback/alex.jpg",
    name: "Alex Shmeit",
    date: "Apl 2024",
    comment:
      "One of the best Pilates studio on London. I enjoy every session and see the results straight away. This not an easy workout!!",
  },
  {
    avatar: "/assets/img/feedback/chack.jpg",
    name: "Chack Damandrabot",
    date: "Feb 2024",
    comment:
      "The toughest Pilates class you will ever do! Tones muscles immediately and gives you that super lean look. Literally hooked.",
  },
  {
    avatar: "/assets/img/feedback/andrea.jpg",
    name: "Lee Sean",
    date: "Nov 2023",
    comment:
      "Great studio, haven’t seen anything similar in London. All of the instructors are amazing - highly recommend!",
  },
  {
    avatar: "/assets/img/feedback/leesean.jpg",
    name: "Andrea Cheanotte",
    date: "Aug 2023",
    comment:
      "Excellent work out! Really good for building relief, lean muscles and developing great mobility.The space itself cozy and clean and they make great coffee.",
  },
  {
    avatar: "/assets/img/feedback/clark.jpg",
    name: "Clark Gandert",
    date: "Nov 2023",
    comment:
      "Love this class! You can see results immediately. It’s intense, but so rewarding. The studio is also stylish and cozy, great location.",
  },
];

const Feedback = () => {
  return (
    <section className="py-12 xl:py-28" id="references">
      <div className="container mx-auto">
        <h2 className="h2 text-center">Our References</h2>
        <div className="">
          <Swiper className="h-[320px]">
            {feedbackData.map((f, index) => {
              return (
                <SwiperSlide key={index} className="h-full">
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={f.avatar}
                      width={90}
                      height={90}
                      alt={""}
                      className="border-2 border-accent rounded-full mb-2"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <FaQuoteLeft className="text-2xl text-gray-400 " />
                    <p className="max-w-[300px] mb-4">{f.comment}</p>
                    <p className="w-[300px] mb-2 text-left ">{f.date}</p>
                    <span className="text-2xl text-accent">{f.name}</span>
                  </div>
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
