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
      "This experience was amazing, I am glad to have to have gone here because the classes were fulfilling, the location was beautiful and everything A-Z lived up to my ecxpectations.",
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
      "Great studio, haven not  seen anything similar in London. All of the instructors are amazing - highly recommend!",
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
      "Love this class! You can see results immediately. It is intense, but so rewarding. The studio is also stylish and cozy, great location.",
  },
];

const Feedback = () => {
  return (
    <section className="py-12 xl:py-28 " id="references">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center my-12"
        >
          Our References
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            className=" max-h-[820px]"
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              1140: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {feedbackData.map((f, index) => {
              return (
                <SwiperSlide key={index} className="h-full">
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={f.avatar}
                      width={120}
                      height={120}
                      alt={""}
                      className="border-2 border-accent rounded-full "
                    />
                    <span className="text-2xl text-accent my-4">{f.name}</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <FaQuoteLeft className="text-2xl text-gray-400 my-1 " />
                    <span className="w-[300px] my-2 text-left ">{f.date}</span>
                    <p className="max-w-[300px] min-h-[180px] mb-2 ">
                      {f.comment}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
