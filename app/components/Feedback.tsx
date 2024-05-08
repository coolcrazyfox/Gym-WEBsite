"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
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
    <section className="" id="testimonial">
      Feedback
    </section>
  );
};

export default Feedback;
