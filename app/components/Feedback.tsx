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
    avatar: "/assets/img/feedback/lisean.jpg",
    name: "Lee Sean",
    comment: "text",
  },
  {
    avatar: "/assets/img/feedback/andrea.jpg",
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
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <h2>Our References</h2>
      </div>
    </section>
  );
};

export default Feedback;
